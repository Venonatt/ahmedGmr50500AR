const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`System`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});



 client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` ولكم نورت السيرفر 😘👍 
👤  [ ${member}  ]  👤 
 أنت عضو رقم : ${member.guild.memberCount} `) 
}).catch(console.error)
}) ;


client.on('message', message => {
  if(message.content.startsWith(prefix + "js")) { 
     message.channel.send("**اكتب الكود**").then(e => {
    let filter = m => m.author.id === message.author.id
    let lan = '';
    let md = '';
    let br = '';
    let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
    .then(collected => {
      lan = collected.first().content
      collected.first().delete()
e.delete();
     message.channel.send('**قم بكتابة وصف الكود**').then(m => {
let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(co => {
  md = co.first().content
        co.first().delete()
        m.delete();
message.channel.send('**اخيرا . قم بكتابة صانع الكود**').then(ms => {
let br = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(col => {
  br = col.first().content
        col.first().delete()

ms.delete()

 message.channel.send('**تم النشر**').then(b => {

var gg = message.guild.channels.find('name', 'codes-js')//اسم الروم الي تبي ينشر فيه
if(!gg) return;
if(gg) {
gg.send(`@everyone | @here
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**FOX Community©** :arrow_down:
${lan}
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**وصف الكود**: ${md}
**تم النشر بواسطة**: <@${message.author.id}>
**المصدر / الشخص الذي صنع الكود**: ${br}`);
   msg.react('✔').then( r => {
        msg.react('❌')
 
        let blueFilter = (reaction, user) => reaction.emoji.name === '✔' && user.id === message.author.id;
    let orangeFilter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

   
}        
})
})  
})
})
})
})
})
})
 }
})



client.on('message', async message => {
  if(message.content.startsWith(prefix + "تقديم")) {
    await message.channel.send("** [`js`,`py`,`eric`,`html`,`io`] مرحبا.. أكتب أي لغة برمجة خاص بك**").then(e => {
    let filter = m => m.author.id === message.author.id
    let lan = '';
    let md = '';
    let br = '';
    let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
    .then(collected => {
      lan = collected.first().content
      collected.first().delete()
e.delete();
     message.channel.send('**حسنا...ماهي خبرتك في برمجة**').then(m => {
let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(co => {
  md = co.first().content
        co.first().delete()
        m.delete();
message.channel.send('**رائع..هل ستكون متفاعل بهذه رتبة؟ **').then(ms => {
let br = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(col => {
  br = col.first().content
        col.first().delete()

ms.delete()

 message.channel.send('جاري التقديم ..').then(b => {
        setTimeout(() => {
  b.edit(`**تم التقديم وسيتم الرد فـ اقرب وقت**`)
        },2000);
var gg = message.guild.channels.find('name', 'التقديمات')
if(!gg) return;
if(gg) {
gg.send({embed : new Discord.RichEmbed()
.setDescription(`**  ماهي لغة برمجتك؟ :question:  : \n ${lan}\nماهي خبرتك؟ :link: :\n ${md} \nهل ستكون متفاعل؟ :question: :\n ${br}  \nتم التقديم بواسطة  : <@${message.author.id}> **`)  
          .setFooter(`FOX Community©`)
.setTimestamp()
});
}        
})
})
})
})
})
})
})
 }
})





client.login(process.env.BOT_TOKEN);
