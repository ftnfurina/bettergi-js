/* eslint-disable no-console */
import path from 'node:path'
import process from 'node:process'
import chalk from 'chalk'
import fs from 'fs-extra'
import prompts from 'prompts'
import whichPMRuns from 'which-pm-runs'

const cwd = process.cwd()

function isEmptyDir(dir: string): boolean {
  const files = fs.readdirSync(dir)
  return files.length === 0 || (files.length === 1 && files[0] === '.git')
}

function isValidPackageName(name: string): boolean {
  return /^(?:@[a-z\d\-*~][a-z\d\-*._~]*\/)?[a-z\d\-~][a-z\d\-._~]*$/.test(name)
}

function toValidPackageName(name: string): string {
  return name
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/^[._]/, '')
    .replace(/[^a-z\d\-~]+/g, '-')
}

function pathFormat(path: string): string {
  return path.trim().replace(/\\/g, '/').replace(/\/$/g, '')
}

function toPascalCase(str: string): string {
  return str
    .replace(/-(\w)/g, (_, c) => c.toUpperCase())
    .replace(/^./, s => s.toUpperCase())
}

interface Options {
  projectName: string
  packageName: string
  addSchema: boolean
}

async function init() {
  const options: Options = await prompts([
    {
      type: 'text',
      name: 'projectName',
      initial: 'better-gi-js-project',
      message: chalk.green('Project name:'),
      format: value => value.trim(),
      validate: name => name.trim() === ''
        ? 'Project name cannot be empty'
        : !fs.existsSync(name)
          || isEmptyDir(name)
          || `Target directory "${name}" is not empty`,
    },
    {
      type: 'text',
      name: 'packageName',
      initial: prev => toValidPackageName(prev),
      message: chalk.green('Package name:'),
      validate: name => isValidPackageName(name),
    },
    {
      type: 'confirm',
      name: 'addSchema',
      message: chalk.green('Do you want to add \'settings\' and \'manifest\' schema?'),
      initial: true,
    },
  ])

  if (options.addSchema === undefined) {
    return console.log(chalk.yellow('\n👋 Create project cancelled.'))
  }

  const root = path.resolve(cwd, options.projectName)
  const template = path.resolve(import.meta.dirname, '../template')
  const pkg = path.join(root, 'package.json')
  const manifest = path.join(root, 'public/manifest.json')
  const settings = path.join(root, '.vscode/settings.json')
  const scriptReadme = path.join(root, 'public/README.md')

  fs.mkdirSync(root, { recursive: true })
  fs.copySync(template, root, {
    overwrite: false,
    errorOnExist: true,
    filter: src => !src.endsWith('.gitkeep'),
  })

  const pkgJson = fs.readJSONSync(pkg, { encoding: 'utf-8' })
  pkgJson.name = options.packageName
  delete pkgJson.private
  fs.writeJSONSync(pkg, pkgJson, { spaces: 2 })

  const packageNamePascalCase = toPascalCase(options.packageName)
  const manifestJson = fs.readJSONSync(manifest, { encoding: 'utf-8' })
  manifestJson.name = packageNamePascalCase
  fs.writeJSONSync(manifest, manifestJson, { spaces: 2 })

  fs.renameSync(path.join(root, '_gitignore'), path.join(root, '.gitignore'))

  const scriptReadmeContent = fs.readFileSync(scriptReadme, { encoding: 'utf-8' })
    .replace(/\{\{name\}\}/g, () => packageNamePascalCase)
  fs.writeFileSync(scriptReadme, scriptReadmeContent)

  if (!options.addSchema) {
    fs.removeSync(settings)
  }

  const pm = whichPMRuns()?.name ?? 'npm'
  const cd = path.relative(cwd, root)

  console.log(`\n  cd ${pathFormat(cd)}`)
  switch (pm) {
    case 'yarn':
      console.log('  yarn')
      console.log('  yarn build')
      break
    default:
      console.log(`  ${pm} install`)
      console.log(`  ${pm} run build`)
      break
  }
  console.log(chalk.green(`\n🎉 Project "${options.packageName}" created successfully.`))
}

init().catch(console.error)
