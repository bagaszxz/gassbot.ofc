import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6285855072108', 'bagas Ofc', true],
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '6285855072108'
global.packname = '© Sticker by'
global.author = 'bofc'
global.namebot = 'B.OFC'
global.wm = '©B Whatsapp'
global.stickpack = '© Sticker by'
global.stickauth = 'B.OFC'
global.fotonya = 'media/MENU.mp4'
global.fotonya2 = `media/MENU.mp4`
// Link Sosmed
global.sig = 'https://instagram.com/bagasfyh._?igshid=MzRlODBiNWFlZA=='
global.syt = 'https://youtube.com/@BG-DARWIN'
global.sgh = ''
global.sgc = 'https://wa.me/qr/REEXQKLBDCD6P1'
// Donasi

global.psaweria = ''
global.ptrakterr = ''
global.povo = ''
// Info Wait
global.wait = 'Loading...'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.lol = 'SGWN'
global.rose = 'Rs-putangina'
global.xyro = 'ClaraKeyOfficial'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
    popcat : 'https://api.popcat.xyz'
}
/*Apikey*/
global.APIKeys = {
    "https://api.xyroinee.xyz": "ClaraKeyOfficial",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
