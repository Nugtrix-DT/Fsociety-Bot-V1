const limit = (prefix, botName, ownerName) => {
        return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 𝐈𝐍𝐅𝐎 𝐃𝐄𝐋 𝐁𝐎𝐓 〉*
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Creator* : ${ownerName}
   ┠≽ *Version* : 1
   ༎░🇫🅢🅞🅒🅘🅔🅣🅨 ░༎
   ╿
┯┷ *〈 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍 〉*
╽
┠≽ *${prefix}info* (error)
┃ *Desc* : Mostrar detalles del bot
┠──────────────╼
┠≽ *${prefix}blocklist*
┃ *Desc* : Mostrar usuario bloqueado
┠──────────────╼
┠≽ *${prefix}chatlist* (error)
┃ *Desc* : Mostrar todos los usuarios de chat
┠──────────────╼
┠≽ *${prefix}ping*
┃ *Desc* : Mostrar la velocidad del bot de conexión
┠──────────────╼
┠≽ *${prefix}bugreport* <text>
┃ *Desc* : Informar de un error al propietario del bot
╿
┷┯〈 𝐿𝐼𝑀𝐼𝑇𝐸 〉*
   ╽
   ┠≽ *${prefix}limit*
   ┃ *Desc* : Comprueba tu límite
   ┠──────────────╼
   ┠≽ *${prefix}bal*
   ┃ Check Tu dinero
   ┠──────────────╼
   ┠≽ *${prefix}buylimit* <count>
   ┃ *Desc* : Compra al limite
   ╿ *${ownerName}*,
   ╰╼≽ *Creador © ${botName}
--------------------------------
Note: Puedes comprar un límite recolectando dinero primero. Verifique su dinero escribiendo el comando *${prefix}bal* , el precio de 1 límite = 1000 dinero.
Note2: Puede recolectar dinero charlando con sus amigos del grupo o subiendo de nivel
}
exports.limit = limit
