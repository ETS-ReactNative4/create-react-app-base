const fs = require('fs')
const path = require('path')

const getAllFiles = dir =>
  fs.readdirSync(dir).reduce((files, file) => {
    const name = path.join(dir, file)
    const isDirectory = fs.statSync(name).isDirectory()
    return isDirectory ? [...files, ...getAllFiles(name)] : [...files, name]
  }, [])

module.exports = { getAllFiles }

const foo = getAllFiles('./src/components/common')

foo.forEach(f => {
  console.log('<' + f.replace('src/components/common/', '').replace('.js', '') + ' />')
})
