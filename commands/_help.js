/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

const os = require('os')
const moment = require("moment-timezone")
const fs = require("fs")
const Config = require('../config')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1 } = require("../lib");
const long = String.fromCharCode(8206)
const readmore = long.repeat(4001)
const Secktor = require('../lib/commands')

    //---------------------------------------------------------------------------
Secktor.cmd({
            pattern: "help",
            alias: ["menu"],
            desc: "Help list",
            category: "general",
            react: "✨",
            filename: __filename
        },
        async(Void, citel, text) => {
            const { commands } = require('../lib');
            if (text.split(" ")[0]) {
                let arr = [];
                const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
                if (!cmd) return await citel.reply("*❌No Such commands.*");
                else arr.push(`*🍁Command:* ${cmd.pattern}`);
                if (cmd.category) arr.push(`*🧩Category:* ${cmd.category}`);
                if (cmd.alias) arr.push(`*🧩Alias:* ${cmd.alias}`);
                if (cmd.desc) arr.push(`*🧩Description:* ${cmd.desc}`);
                if (cmd.use) arr.push(`*〽️Usage:*\n \`\`\`${prefix}${cmd.pattern} ${cmd.use}\`\`\``);
                return await citel.reply(arr.join('\n'));
            } else {
                const cmds = {}
                commands.map(async(command, index) => {
                    if (command.dontAddCommandList === false && command.pattern !== undefined) {
                        if (!cmds[command.category]) cmds[command.category] = []
                        cmds[command.category].push(command.pattern)
                    }
                })
                const time = moment(moment())
                    .format('HH:mm:ss')
                moment.tz.setDefault('Etc/GMT')
                    .locale('id')
                const date = moment.tz('Afica/Douala').format('DD/MM/YYYY')
                let total = await sck1.countDocuments()
                let str = `╭═══〘 ` + fancytext(Config.ownername.split(' ')[0], 52) + ` 〙═══⊷❍\n`
                str +=
                    '```' + `┃✯  ╭────────────────────◆
┃✯ │  
┃✯ │ Theme: ${tlang().title}
┃✯ │ Prefix: [ ${prefix} ]
┃✯ │ Owner: ${Config.ownername}
┃✯ │ Plugins: ${commands.length}
┃✯ │ Users: ${total}
┃✯ │ Uptime: ${runtime(process.uptime())}
┃✯ │ Mem: ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
┃✯ │ Time: ${time}
┃✯ │ Date: ${date}
┃✯ │
┃✯ │    ▎▍▌▌▉▏▎▌▉▐▏▌▎
┃✯ │    ▎▍▌▌▉▏▎▌▉▐▏▌▎
┃✯ │ 
┃✯ ╰────────────────────◆
╰════════════════════════⊷❍\n
🌚✌🏽Hey, ${citel.pushName}\n` + '```'
                for (const category in cmds) 
                {
                   str += `╭════〘 *${tiny(category)}* 〙════⊷❍\n┃✯╭───────❍\n` ;
                   if(text.toLowerCase() == category.toLowerCase()){ str = `╭════〘 *${tiny(category)}* 〙════⊷❍\n┃✯╭───────❍\n` ;      
                        for (const plugins of cmds[category]) { str += `┃✯│ ${fancytext(plugins,1)}\n` ; }
                        str += `┃✯╰───────❍\n╰════════════⊷❍\n`  ;
                        break ;
                   }
                   else { for (const plugins of cmds[category]) { str += `┃✯ ${fancytext(plugins,1)}\n` ; }
                         str += `┃✯╰───────❍\n╰════════════⊷❍\n`  ; 
                   }
  
                }
                str+= `*🀄️𝑇𝑦𝑝𝑒:* _${prefix}help 𝑐𝑚𝑑_ 𝑛𝑎𝑚𝑒 𝑡𝑜 𝑘𝑛𝑜𝑤 𝑚𝑜𝑟𝑒 𝑎𝑏𝑜𝑢𝑡 𝑠𝑝𝑒𝑐𝑖𝑓𝑖𝑐 𝑐𝑜𝑚𝑚𝑎𝑛𝑑.\n*𝐸𝑔:* _${prefix}𝑓𝑎𝑛𝑐𝑦 52 𝑂𝑚𝑎ℎ 𝑙𝑎𝑦_\n*𝑀𝑎𝑑𝑒 𝑤𝑖𝑡ℎ 💜 𝑏𝑦 𝐶𝑟𝑎𝑧𝑦𝑃𝑟𝑖𝑛𝑐𝑒*`
                let buttonMessaged = {
                    image: { url: await botpic() },
                    caption: str
                };
                return await Void.sendMessage(citel.chat, buttonMessaged);
            }
        }
    )
    //---------------------------------------------------------------------------
Secktor.cmd({
            pattern: "list",
            desc: "list menu",
            category: "general"
        },
        async(Void, citel) => {
            const { commands } = require('../lib');
            let str = `
╭━━〘 ` + fancytext(Config.ownername.split(' ')[0], 58) + ` 〙━━──⊷`
            str += `
┃ ⛥╭──────────────      
┃ ⛥│ User: ${citel.pushName}
┃ ⛥│ Theme: ${tlang().title}
┃ ⛥│ Prefix: ${prefix}
┃ ⛥│ Owner: ${Config.ownername}
┃ ⛥│ Commands: ${commands.length}
┃ ⛥│ Uptime: ${runtime(process.uptime())}
┃ ⛥│ Mem: ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
┃ ⛥│  
┃ ⛥╰───────────
╰━━━━━━━━━━━──⊷\n`
for (let i = 0; i < commands.length; i++) 
{
     if(commands[i].pattern==undefined) continue
     str +=       `╭ ${i+1} *${fancytext(commands[i].pattern,1)}*\n` 
     if(commands[i].desc=undefined) commands[i].desc=""
     str += `╰➛ ${fancytext(commands[i].desc,1)}\n`
}
            return await Void.sendMessage(citel.chat, { image: { url: THUMB_IMAGE }, caption: str })
        }
    )
    //---------------------------------------------------------------------------
Secktor.cmd({
        pattern: "owner",
        desc: "To find owner number",
        category: "general",
        react: "💜",
        filename: __filename
    },
    async(Void, citel) => {
        const Config = require('../config')
        const vcard = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'FN:' + Config.ownername + '\n' +
            'ORG:;\n' +
            'TEL;type=CELL;type=VOICE;waid=' + owner[0] + ':+' + owner[0] + '\n' +
            'END:VCARD'
        let buttonMessaged = {
            contacts: { displayName: Config.ownername, contacts: [{ vcard }] },
            contextInfo: {
                externalAdReply: {
                    title: Config.ownername,
                    body: 'Touch here.',
                    renderLargerThumbnail: true,
                    thumbnailUrl: ``,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: '',
                    sourceUrl: `https://wa.me/+` + owner[0] + '?text=Hii bro,I am ' + citel.pushName,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)

Secktor.cmd({
    pattern: "file",
    desc: "to get extact name where that command is in repo.\nSo user can edit that.",
    category: "general",
    react: "✨",
    filename: __filename
},
async(Void, citel, text) => {
 const { commands } = require('../lib');
 let arr = [];
        const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
        if (!cmd) return await citel.reply("*❌No Such commands.*");
        else arr.push(`*🍁Command:* ${cmd.pattern}`);
        if (cmd.category) arr.push(`*🧩Type:* ${cmd.category}`);
        if(cmd.filename) arr.push(`✨FileName: ${cmd.filename}`)
        return citel.reply(arr.join('\n'));


})
