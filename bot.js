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

const bannedwords = [
  "#help",
  "#credit",
  "#profile",
  "#rep",
  "#top",
  "%level",
  "%تقديم",
  "-play",
  "-stop",
  "-p",
  "-s",
  "!invites",
  "!top"

]



client.on('message', message => {
  var Muted = message.guild.roles.find("name", "muted");
  var warn = message.guild.roles.find("name", "warn");
  if(bannedwords.some(word => message.content.includes(word))) {
  if(message.channel.id !== '474606523092566018') return;
  if (message.author.bot) return;
  if(message.member.roles.has(warn)) return;
  if(!message.member.roles.has(warn.id)) {
  message.member.addRole(warn)
  message.reply("**`تم اعطائك تحذير لاستخدام اوامر البوت فى الشات العام` 😠**")
  }
  if(message.member.roles.has(warn.id)) {
      message.member.addRole(Muted)
      message.member.removeRole(warn)
      message.reply("**`تم اعطائك ميوت كتابى تواصل مع احد اعضاء الادارة لازالتة` 🤐**")
  }
  }
  })






client.on('message', message => {
if (message.content.startsWith(prefix + "uptime")) {
   let uptime = client.uptime;

   let days = 0;
   let hours = 0;
   let minutes = 0;
   let seconds = 0;
   let notCompleted = true;

   while (notCompleted) {

       if (uptime >= 8.64e+7) {

           days++;
           uptime -= 8.64e+7;

       } else if (uptime >= 3.6e+6) {

           hours++;
           uptime -= 3.6e+6;

       } else if (uptime >= 60000) {

           minutes++;
           uptime -= 60000;

       } else if (uptime >= 1000) {
           seconds++;
           uptime -= 1000;

       }

       if (uptime < 1000)  notCompleted = false;

   }

   message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} min , ${seconds} sec` + "`");


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


client.on('message',  async  message  =>  {
    var  user  =  message.mentions.users.first();
    var  reason  =  message.content.split('  ').slice(2).join('  ');
if(message.content.startsWith('$report'))  {
    if(!user)  return  message.channel.send("**  -  mention  a  member  **")
    if(!reason)  return  message.channel.send("**  -  Type  Reason  **")
    let  reportembed  =  new  Discord.RichEmbed()
    .setTitle(`**New  Reported  Staff  !**`)
.addField("**-  Reported  User:**",  `${user}  with  ID  ${user.id}`) 
.addField('**-  Reported  By:**',`${message.author.tag}`)
.addField('**Reason:**',  `${reason}`,  true)
.addField("**-  Reported  in:**",`${message.channel.name}`)
.addField("**-  Time:**",`${message.createdAt}`)
.setFooter("FOX Community©")
.setColor('#060c37')
message.guild.channels.find('name',  'reports').sendEmbed(reportembed)
message.reply('**Thanks  For  Your  Report  :)**').then(msg  =>  msg.delete(3000));
}



})




const config = require('./configs.json');


const size    = config.colors;
const rainbow = new Array(size);

for (var i=0; i<size; i++) {
  var red   = sin_to_hex(i, 0 * Math.PI * 2/3); // 0   deg
  var blue  = sin_to_hex(i, 1 * Math.PI * 2/3); // 120 deg
  var green = sin_to_hex(i, 2 * Math.PI * 2/3); // 240 deg

  rainbow[i] = '#'+ red + green + blue;
}

function sin_to_hex(i, phase) {
  var sin = Math.sin(Math.PI / size * 2 * i + phase);
  var int = Math.floor(sin * 127) + 128;
  var hex = int.toString(16);

  return hex.length === 1 ? '0'+hex : hex;
}

let place = 0;
const servers = config.servers;

function changeColor() {
  for (let index = 0; index < servers.length; ++index) {        
    client.guilds.get(servers[index]).roles.find('name', config.roleName).setColor(rainbow[place])
        .catch(console.error);
        
    
    
    if(place == (size - 1)){
      place = 0;
    }else{
      place++;
    }
  }
}



client.on('ready', () => {
  console.log('Bot Is Online')
  if(config.speed <60.000){console.log("The minimum speed is 60.000, if this gets abused your bot might get IP-banned"); process.exit(1);}
  setInterval(changeColor, config.speed);
});

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




client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});




const temp = {};
client.on('message', async message => {
 if(message.channel.type === "روم مؤقت") return;
  if(message.author.bot) return;
   if(!temp[message.guild.id]) temp[message.guild.id] = {
    time: "3000",
     category : 'روم مؤقت',
      channel : 'روم مؤقت'
       }
        if(message.content.startsWith('$temp on')){
         if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
          var ggg= message.guild.createChannel('click here', 'category').then(cg => {
           var ccc =message.guild.createChannel('click here', 'voice').then(ch => {
            ch.setParent(cg)
             message.channel.send('**Done ,**')
              client.on('message' , message => {
               if(message.content === '$temp off') {
                if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
                 cg.delete()
                  ch.delete()
                   message.channel.send('**Done ,**')
                    }
                     });
                      const time = temp[message.guild.id].time
                       client.on('message' , message => {
                        if (message.content.startsWith(prefix + "temptime")) {
                         if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
                          let newTime= message.content.split(' ').slice(1).join(" ")
                          if(!newTime) return message.reply(`**${prefix}temptime <time>  \`1000 = 1s\`**`)
	                 if(isNaN(newTime)) return message.reply(`** The Time Be Nambers :face_palm: **`);
	                if(newTime < 1) return message.reply(`**The Time Be Up \`3000s\`**`)
                       temp[message.guild.id].time = newTime
                      message.channel.send(`**Temp Rooms Time Change To \`${newTime}\`**`);
                     }
                    });
                   client.on('voiceStateUpdate', (old, neww) => {
                  let newUserChannel = neww.voiceChannel
                 let oldUserChannel = old.voiceChannel
                temp[message.guild.id].category = cg.id
               temp[message.guild.id].channel = ch.id
              let channel = temp[message.guild.id].channel
             let category = temp[message.guild.id].category
            if(oldUserChannel === undefined && newUserChannel !== undefined && newUserChannel.id == channel) {
           neww.guild.createChannel(neww.displayName , 'voice').then(c => {
          c.setParent(category)
         let scan = setTimeout(()=>{
        if(!neww.voiceChannel) {
       c.delete();
      client.channels.get(channel).overwritePermissions(neww, {
     CONNECT:true,
    SPEAK:true
   })
  }
 }, temp[neww.guild.id].time);
  c.overwritePermissions(neww, {
   CONNECT:true,
    SPEAK:true,
     MANAGE_CHANNEL:true,
      MUTE_MEMBERS:true,
       DEAFEN_MEMBERS:true,
	MOVE_MEMBERS:true,
	 VIEW_CHANNEL:true
	  })
	   neww.setVoiceChannel(c)
            })
             client.channels.get(channel).overwritePermissions(neww, {
	      CONNECT:false,
	       SPEAK:false
		})
               }
              })
             })
           })
          }
      });


const devs = ['451828723017056268' , '' , '' , ''];
const adminprefix = "$";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/حب بلا حدود");
      message.channel.sendMessage(`**✅   ${argresult}**`)
  }
  });



client.login(process.env.BOT_TOKEN);
