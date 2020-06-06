const { lstatSync, readdirSync, unlinkSync, writeFileSync } = require('fs')
const { join } = require('path')

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
const result = getDirectories(join(__dirname, "../../../../assets/images"))

unlinkSync(join(__dirname, "icons.tsx"))

// const result = readdirSync(join(__dirname, "../../../../assets/images")).map(name => join(source, name)).filter(isDirectory)
let imports = "";
let declareConst = `export const icons = { `
let declareType = `export type IconName = `

result.forEach((dir, index) => {
  imports += `const ${dir} = require("../../../../assets/images/${dir}/${dir}.png")\n`
  declareConst += `${dir}, `
  declareType += `"${dir}"`
  if (index + 1 < result.length) {
    declareType += "|"
  }
  else {
    declareType += ";"
  }
})
declareConst += "}\n\n";
declareType += "\n\n";

writeFileSync(join(__dirname, "icons.tsx"), imports + declareConst + declareType)

console.log("folders are", result)