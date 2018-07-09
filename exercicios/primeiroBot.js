const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx => {
    const from = ctx.update.message.from
    console.log(from)
    console.log(ctx.update.message.from)
    ctx.reply(`Seja bem vindo,${from.first_name}!`)
    next()
})

bot.on('text', async (ctx, next) => {
    await ctx.reply('Mid 1')
    next()
})

bot.on('text', async ctx => {
    
    await ctx.reply('Mid 2')
    
})

bot.startPolling()