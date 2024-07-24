//BY CRAZY PRINCE
const axios = require('axios')
const { sck1, tiny, fancytext, cmd } = require('../lib/')
const fs = require('fs-extra');
const { exec } = require('child_process')




// Définir les valeurs de configuration directement dans le fichier
const LENGTH = 5; // Nombre de fois que le texte est dupliqué
const FORCE = 3;  // Nombre de fois que le message est envoyé
const predefinedText = "Pour définir les valeurs de length et force directement dans le fichier de commande sans utiliser de variables de configuration ou d’environnement, vous pouvez simplement les définir comme des constantes au début de votre fichier. Voici comment vous pouvez structurer cela";

cmd({
        pattern: "bug",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },
    async (Void, citel) => {
        try {
            let fancyPart = fancytext(predefinedText, 6);  // Utiliser directement predefinedText
            let txt = `💣CRAZY-MD💣=> ${fancyPart} end.`;
            
            // Répéter le texte selon LENGTH
            let fullText = txt.repeat(LENGTH);

            // Envoyer le message selon FORCE
            for (let i = 0; i < FORCE; i++) {
                await Void.sendMessage(citel.chat, { text: fullText }, { quoted: citel });
            }
        } catch (error) {
            console.error("Error sending Bugtext message: ", error);
        }
    }
);

//=========================================================================================

// Définir les valeurs de configuration directement dans le fichier
const LENGTH1 = 1; // Nombre de fois que le texte est dupliqué
const FORCE1 = 1;  // Nombre de fois que le message est envoyé
let prefix = '໒ཞศƶƴ_♇ཞརས໒ཛ👑===>>💣💣💣777';
const { crazyvirtex1 } = require('./lib/virtex/crazyvirtex1')
const crazyvirtex1 = crazyvirtex1();

cmd({
        pattern: "bug1",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },
    async (Void, citel) => {
        try {
              // Utiliser directement predefinedText
            let txt = `💣CRAZY-MD💣=> end.`;
            
            // Répéter le texte selon LENGTH
            let fullText = txt.repeat(LENGTH1);

            // Envoyer le message selon FORCE
            for (let i = 0; i < FORCE1; i++) {
                await Void.sendMessage(citel.chat, { text: crazyvirtex1,
                    contextInfo: {
                            externalAdReply: {
                                title: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ-ᴍᴅ²³⁷',
                                body: '(ᴄʟɪᴄᴋ ʜᴇʀᴇ)',
                                thumbnailUrl: 'https://telegra.ph/file/dc763694500d96c593fef.jpg',
                                sourceUrl: 'https://whatsapp.com/channel/0029VaV3DymGE56jsC8j1M3c',
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                            }
                     },{ quoted: citel });
            }
        } catch (error) {
            console.error("Error sending text message: ", error);
        }
    }
);

///////////////////////////////////////////

