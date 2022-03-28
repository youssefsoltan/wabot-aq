let fs = require('fs')
let chalk = require('chalk')

global.owner = ['201288455338', '201288455338', '201288455338'] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://www.instagram.com/1y._.o2',
  xteam: 'https://www.instagram.com/1y._.o2',
  zahir: 'https://www.instagram.com/1y._.o2',
  zeks: 'https://www.instagram.com/1y._.o2',
  pencarikode: 'https://www.instagram.com/1y._.o2',
  LeysCoder: 'https://www.instagram.com/1y._.o2'
}
global.APIKeys = { // APIKey Here
  // 'https://www.instagram.com/1y._.o2': 'apikey'
  'https://www.instagram.com/1y._.o2': 'd90a9e986e18778b',
  'https://www.instagram.com/1y._.o2': 'zahirgans',
  'https://www.instagram.com/1y._.o2',
  'https://www.instagram.com/1y._.o2': 'pais',
  'https://www.instagram.com/1y._.o2': 'dappakntlll'
}

// Sticker WM

const spack = fs.readFileSync("lib/exif.json")
const stickerpack = JSON.parse(spack)
if (stickerpack.spackname == '') {
  var sticker_name = 'I hope you\'re fine'
  var sticker_author = 'Nurutomo'
} else {
  var sticker_name = stickerpack.spackname
  var sticker_author = stickerpack.sauthor
}

const file_exif = "lib/exif.json"
fs.watchFile(file_exif, () => {
  fs.unwatchFile(file_exif)
  console.log(chalk.redBright("Update 'exif.json'"))
  delete require.cache[file_exif]
  require('./lib/exif.json')
})

global.packname = sticker_name
global.author = sticker_author


global.multiplier = 69 // The higher, The harder levelup


let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
