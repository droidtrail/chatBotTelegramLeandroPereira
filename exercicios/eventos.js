//Adicionado ao Git
//Configurações
const env = require('../.env')
const Telegraf = new require('telegraf')
const bot = new Telegraf (env.token)

//MiddleWare 1 (No evento "/start" o bot exibe a mensagem: Seja bem-vindo.)
bot.start(ctx => {
    const name = ctx.update.message.from.first_name
    ctx.reply(`Seja bem-vindo, ${name}!`)
})

//MiddleWare 2 (Ao enviar um texto para o bot, ele exibirá uma mensagem dizendo que o texto foi recebido comsucesso)
bot.on('text', ctx =>{
    ctx.reply(`Texto '${ctx.update.message.text}' recebido com sucesso!`)
})

//MiddleWare 3 (O bot vai receber uma localização)
bot.on('location', ctx => {
    const location = ctx.update.message.location //Atribuindo a vaiáel location a locatização recebida pelo bot
    console.log(location)//Imprimindo na tela a localização
    ctx.reply(`Entendido, você está em 
        Lat: ${location.latitude},
        Lon: ${location.longitude}!`)
})  

//MiddleWare 4 (Contatos)
bot.on('contact', ctx => {

const contact = ctx.update.message.contact
console.log(contact)
ctx.reply(`Vou lembrar do(a) contato:
    ${contact.first_name})
   (${contact.phone_number}`)

})

//MiddleWare 4 (Evento de foz)
bot.on('voice', ctx =>{
const voice = ctx.update.message.voice
console.log(voice)
ctx.reply(`Audio recebido, ele possui ${voice.duration} segundos`)
})

//MiddleWare 5 (Evento para recebimento de foto e retorna a resolução de cada)
bot.on('photo', ctx =>{
    const photo = ctx.message.update.photo
    console.log(photo)
    photo.forEach((ph, i) => {
        ctx.reply(`Photo ${i} tem resolução de ${ph.width} x ${ph.heigth}`)
    }) 
})
bot.startPolling()



