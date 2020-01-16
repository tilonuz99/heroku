const TelegramBot = require('node-telegram-bot-api');
const TOKEN = '816002162:AAFk9XgLkQtR615ly2zVicnORRxbmt4Qs2A'
const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg =>{
  bot.sendMessage(msg.chat.id,'hello')
})