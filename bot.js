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


 


client.on('message', message => {
    if (message.content === 'هلا') {
        message.reply('هلا والله نورت سيرفر');
    }
});


  
  
 client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` ولكم نورت السيرفر 😘👍 
👤  [ ${member}  ]  👤 
 أنت عضو رقم : ${member.guild.memberCount} `) 
}).catch(console.error)
}) ;


client.on('message', message => {
  if(message.content.startsWith(prefix + "تقديم")) {
     message.channel.send("**حسنا... قم بكتابه اسمك**").then(e => {
    let filter = m => m.author.id === message.author.id
    let lan = '';
    let md = '';
    let br = '';
    let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
    .then(collected => {
      lan = collected.first().content
      collected.first().delete()
e.delete();
     message.channel.send('**[`eric`,`html`,`io`,`py`,`js`]رائع... قم بكتابه لغتك البرمجيه**').then(m => {
let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(co => {
  md = co.first().content
        co.first().delete()
        m.delete();
message.channel.send('** قم بكتابه خبرتك**').then(ms => {
let br = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(col => {
  br = col.first().content
        col.first().delete()

ms.delete()

 message.channel.send('تم الارسال').then(b => {

var gg = message.guild.channels.find('name', '❆-submissions')
if(!gg) return;
if(gg) {
gg.send({embed : new Discord.RichEmbed()
  .setDescription(`** اسم: \n ${lan}\nلغه :link: :\n ${md} \nخبره :\n ${br}  \nتم التقديم بواسطة  : <@${message.author.id}> **`)  
          .setFooter(`codycode`)
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

client.on('message', message => {
  if(!message.channel.guild) return;
if(message.content.startsWith(prefix + "bc")) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(prefix.length);
let copy = "commandly";
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Broadcast')
.addField('Server', message.guild.name)
.addField('Sender', message.author.username)
.addField('Message', args)
.setThumbnail(message.author.avatarURL)
.setFooter(copy, client.user.avatarURL);
m.send({ embed: bc })
msg.delete();
})
})
reaction2.on("collect", r => {
message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});



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


  

client.on('message', message => {
  if(message.content.startsWith(prefix + "py")) { 
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

var gg = message.guild.channels.find('name', 'codes-py')//اسم الروم الي تبي ينشر فيه
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




client.on('message', message => {
  if(message.content.startsWith(prefix + "io")) { 
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

var gg = message.guild.channels.find('name', 'codes-io')//اسم الروم الي تبي ينشر فيه
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


  
client.on('message', message => {
  if(message.content.startsWith(prefix + "eric")) { 
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

var gg = message.guild.channels.find('name', 'codes-eric')//اسم الروم الي تبي ينشر فيه
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


  


client.on('message', message => {
  if(message.content.startsWith(prefix + "html")) { 
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

var gg = message.guild.channels.find('name', 'codes-html')//اسم الروم الي تبي ينشر فيه
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


  



client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","MEMBER"));
    });





client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","MEMBER"));
    });












client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","MEMBER"));
    });

client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","MEMBER"));
    });




client.on('message', message => {
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'clear')) {
if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**You Do not have permission** `MANAGE_MESSAGES`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let request = `Requested By ${message.author.username}`;
message.channel.send(`**Are You sure you want to clear the chat?**`).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`Chat will delete`).then(m => m.delete(5000));
var msg;
        msg = parseInt();

      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "`` Chat Deleted ``",
        color: 0x06DF00,
        footer: {

        }
      }}).then(msg => {msg.delete(3000)});

})
reaction2.on("collect", r => {
message.channel.send(`**Chat deletion cancelled**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});


client.on('message', message => {
  if(message.content.startsWith("Register")) {
     message.channel.send("**`[Name#0000]` أكتب اسمك مع التاق **").then(e => {
    let filter = m => m.author.id === message.author.id
    let lan = '';
    let md = '';
    let br = '';
    let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
    .then(collected => {
      lan = collected.first().content
      collected.first().delete()
e.delete();
     message.channel.send('**حسنا اكتب ايمايلك**').then(m => {
let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(co => {
  md = co.first().content
        co.first().delete()
        m.delete();
message.channel.send('**حسنا كلمة سر**').then(ms => {
let br = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(col => {
  br = col.first().content
        col.first().delete()

ms.delete()

 message.channel.send('تم الارسال').then(b => {

var gg = message.guild.channels.find('name', 'registed')
if(!gg) return;
if(gg) {
gg.send({embed : new Discord.RichEmbed()
  .setDescription(`** Name : \n ${lan}\nEmail :\n ${md} \nPassword :\n ${br}  \nid   :/n ${message.author.id} **`)  
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




client.on('message', message => {
            if (message.content.startsWith(prefix + "help" + "-system")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **$تقديم** ' ,' **[io],[js],[eric],[html],[py] تقديم رتبة مبرمج** ')
.addField('     **$js**  ' ,' **js للنشر كود في سيرفر** ')
.addField('     **$io** ' , '**io للنشر كود في سيرفر**') 
.addField('     **$eric** ' , '**eric للنشر كود في سيرفر**') 
.addField('     **$html** ' ,' **html للنشر كود في سيرفر**')
.addField('     **$py** ' , '**py للنشر كود في سيرفر**')
.addField('     **$Register** ' ,' **للتسجيل في سيرفر** ')
.addField('     **$clear ** ' ,' **لمسح شات** ')
.addField('     **$bc ** ' ,' **للنشر في سيرفر** ')
.setColor('#ff5e00')
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
            if (message.content.startsWith(prefix + "help")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **$help-system** ' ,' **System يعرض لك اوامر بوت** ')
.addField('     **$help-codes**  ' ,' **يعرض لك اوامر اكواد للتضيفها في سيرفر** ')
.setColor('#ff5e00')
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
            if (message.content.startsWith(prefix + "help" + "-codes")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **$h-codes-js**  ' ,' **js يعرض لك اكواد بلغة ** ')
.addField('     **$h-codes-py**  ' ,' **py يعرض لك اكواد بلغة ** ')
.addField('     **$h-codes-io**  ' ,' **io يعرض لك اكواد بلغة ** ')
.addField('     **$h-codes-html**  ' ,' **html يعرض لك اكواد بلغة ** ')
.addField('     **$h-codes-eric**  ' ,' **eric يعرض لك اكواد بلغة ** ')
.setColor('#ff5e00')
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
            if (message.content.startsWith(prefix + "h" + "-codes" +"-js")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **سوف يتم اضافة اكواد** ')
.setColor('#ff5e00')
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
            if (message.content.startsWith(prefix + "h" + "-codes" +"-py")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **سوف يتم اضافة اكواد** ')
.setColor('#ff5e00')
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
            if (message.content.startsWith(prefix + "h" + "-codes" +"-io")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **سوف يتم اضافة اكواد** ')
.setColor('#ff5e00')
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
            if (message.content.startsWith(prefix + "h" + "-codes" +"-html")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **سوف يتم اضافة اكواد** ')
.setColor('#ff5e00')
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
            if (message.content.startsWith(prefix + "h" + "-codes" +"-eric")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **سوف يتم اضافة اكواد** ')
.setColor('#ff5e00')
  message.channel.sendEmbed(embed);
    }
});



client.login(process.env.BOT_TOKEN);
