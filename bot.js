const Discord = require('discord.js');
const client = new Discord.Client();

const fs = require('fs');
const moment = require('moment');
const jimp = require('jimp');
const Canvas = require('canvas');
 


client.on('ready', () => {
 client.user.setGame('=help | =invite .. ','https://www.twitch.tv/peery13');
  console.log('---------------');
  console.log(' Platinum Bot Is Online')
  console.log('---------------')
});
	   var prefix = "=" ;
client.on('guildMemberAdd', member => {
     const welcomer =  member.guild.channels.find('name', 'اسم روم الترحيب');
const w = ['./w1.png'];
 
         let Image = Canvas.Image,
            canvas = new Canvas(400, 200),
            ctx = canvas.getContext('2d');
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 400, 200);
                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(100) + ".png" : member.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                       
                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(`welcome to Brix`, 300, 130);
                       
                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(member.user.username, 200, 150);
 
                let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(77, 101, 62, 0, Math.PI*2);
                              ctx.stroke();
                                 ctx.clip();
                                 ctx.drawImage(ava, 13, 38, 128, 126);                              
welcomer.sendFile(canvas.toBuffer())
                    }  )  
})
      });                    
});
var dat = JSON.parse("{}");
function forEachObject(obj, func) {
    Object.keys(obj).forEach(function (key) { func(key, obj[key]) });
}


client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? 🤔   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** No Invite Links :angry: !**`)
    }
}
});


 client.on('message', message => {
       if(message.content.startsWith(`${prefix}support`)){
           if(!message.channel.guild) return message.channel.send("This Command is Just For Servers!")
           var embed = new Discord.RichEmbed()
           .setTitle("Support Server")
           .setURL("https://discord.gg/eK3cqzy")
           .setTimestamp()
           .setColor("RANDOM")
           message.channel.send({embed})
       }
   });













const moment = require('moment');

client.on('message',async message => {

  var time = moment().format('Do MMMM YYYY , hh:mm');

  var room;

  var title;

  var duration;

  var gMembers;

  var currentTime = new Date(),

hours = currentTime.getHours() + 3 ,

minutes = currentTime.getMinutes(),

done = currentTime.getMinutes() + duration / 60000 ,

seconds = currentTime.getSeconds();

if (minutes < 10) {

minutes = "0" + minutes;

}

var suffix = "AM";

if (hours >= 12) {

suffix = "PM";

hours = hours - 12;

}

if (hours == 0) {

hours = 12;

}

  var filter = m => m.author.id === message.author.id;

  if(message.content.startsWith(prefix + "giveaway")) {

    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');

    message.channel.send(`:eight_pointed_black_star:| **Send Name channel For the Giveaway**`).then(msg => {

      message.channel.awaitMessages(filter, {

        max: 1,

        time: 20000,

        errors: ['time']

      }).then(collected => {

        let room = message.guild.channels.find('name' , collected.first().content);

        if(!room) return message.channel.send(':heavy_multiplication_x:| **i Found It :(**');

        room = collected.first().content;

        collected.first().delete();

        msg.edit(':eight_pointed_black_star:| **Time For The Giveaway**').then(msg => {

          message.channel.awaitMessages(filter, {

            max: 1,

            time: 20000,

            errors: ['time']

          }).then(collected => {

            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **The Time Be Nambers `` Do the Commend Agin``**');

            duration = collected.first().content * 60000;

            collected.first().delete();

            msg.edit(':eight_pointed_black_star:| **Now send The Present **').then(msg => {

              message.channel.awaitMessages(filter, {

                max: 1,

                time: 20000,

                errors: ['time']

              }).then(collected => {

                title = collected.first().content;

                collected.first().delete();

                msg.delete();

                message.delete();

                try {

                  let giveEmbed = new Discord.RichEmbed()

                  .setDescription(`**${title}** \nReact With 🎉 To Enter! \nTime remaining : ${duration / 60000} **Minutes**\n **Created at :** ${hours}:${minutes}:${seconds} ${suffix}`)

                  .setFooter(message.author.username, message.author.avatarURL);

                  message.guild.channels.find("name" , room).send(' :heavy_check_mark: **Giveaway Created** :heavy_check_mark:' , {embed: giveEmbed}).then(m => {

                     let re = m.react('🎉');

                     setTimeout(() => {

                       let users = m.reactions.get("🎉").users;

                       let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);

                       let gFilter = list[Math.floor(Math.random() * list.length) + 0]

                       let endEmbed = new Discord.RichEmbed()

                       .setAuthor(message.author.username, message.author.avatarURL)

                       .setTitle(title)

                       .addField('Giveaway Ended !🎉',`Winners : ${gFilter} \nEnded at :`)

                       .setTimestamp()

					 m.edit('** 🎉 GIVEAWAY ENDED 🎉**' , {embed: endEmbed});					message.guild.channels.find("name" , room).send(`**Congratulations ${gFilter}! You won The \`${title}\`**` , {embed: {}})

                     },duration);

                   });

                } catch(e) {

                message.channel.send(`:heavy_multiplication_x:| **i Don't Have Prem**`);

                  console.log(e);

                }

              });

            });

          });

        });

      });

    });

  }

});


client.on('message', async message => {

  if(message.content.startsWith(prefix + "voicesetup")) {

  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply(':x: **ليس لديك الصلاحيات الكافية**');

  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply(':x: **ليس معي الصلاحيات الكافية**');

  var args = message.content.split(' ').slice(1).join(' ');

  if(args && !args.includes(0)) return message.channel.send(':negative_squared_cross_mark: » فشل اعداد الروم الصوتي .. __يجب عليك كتابة 0 في اسم الروم__');

  if(!args) args = `VoiceOnline: [ ${message.guild.members.filter(s => s.voiceChannel).size} ]`;

  message.channel.send(':white_check_mark: » تم عمل الروم الصوتي بنجاح');

  message.guild.createChannel(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`, 'voice').then(c => {

    c.overwritePermissions(message.guild.id, {

      CONNECT: false,

      SPEAK: false

    });

    setInterval(() => {

      c.setName(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`).catch(err => {

        if(err) return;

      });

    },3000);

  });

  }

});



client.on('message',async message =>{

    if(message.content.startsWith(prefix + "channels")) {

        let i = 1;

        let embed = new Discord.RichEmbed()

        .setAuthor(message.author.username, message.author.avatarURL)

        .setTitle(message.guild.name)

        .setThumbnail(message.guild.iconURL)

        .setDescription(message.guild.channels.map(c => `\`${i++}\` - **${c.name}**`))

        .setFooter(message.guild.channels.size + ' Channels in the server!');

        message.channel.send(embed).then(msg => {

            msg.delete(25000);

            message.delete(25000);

        });

    }

});

client.on("message", msg => {
  if(msg.content === '=' + "id") {
      const embed = new Discord.RichEmbed();
  embed.addField("🔱| اسم الحساب :", `${msg.author.username}#${msg.author.discriminator}`, true)
          .addField("🆔| الاي دي :", `${msg.author.id}`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField('📛| الحالة :', `${msg.author.presence.status.toUpperCase()}`, true)
          .addField('🎲| بلاينج :', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
          .addField('🏅| الرتب : ', `${msg.member.roles.filter(r => r.name).size}`, true)
          .addField('📅| تم الانضمام للديسكورد في :', `${msg.createdAt}`,true)
          .addField('🤖| هل هو بوت ؟', `${msg.author.bot.toString().toUpperCase()}`, true);
      msg.channel.send({embed: embed})
  }
});



client.on('message', message => {
            if (message.content.startsWith(prefix + "bot")) {
     let embed = new Discord.RichEmbed()
.addField(' عدد السيرفرات التي بها',`[${client.guilds.size}]  `)
.addField(' عدد الاعضاء ',` [${client.users.size}] `)
.addField('الغرف ',`[${client.channels.size}]`) 
.addField(' البنق ',`[${Date.now() - message.createdTimestamp}]`) 
.addField(' Devolope By اسم صانع البوت')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});

 
const pubg = [
     'PUBG | ما هو اقوي سلاح برائيك ؟',
     'PUBG | اين تجد سلاح الجروزا ؟ Grozza',
     'PUBG | ماذا تفضل اكثر ام فور ام سكار ؟',
     'PUBG | ايهما تفضل vss ام Awm',
     'PUBG | ماذا تفضل اكثر ؟ سولو ام سكواد ؟',
     'PUBG | كم جيم كسبت في العبه ؟',
     'PUBG | ما هو اكثر عدد قتلت في مسيرتك بالعبه',
     'PUBG | اذا انت المركز ال 2 هل سوف تقوم بتمشي علي رجلك ام ستاخذ سياره تحميك ؟',
     'PUBG | اذا وجدت شخصين يتقاتلان , هل سوف تتقاتل معهم ام تنتظر قليلا حتي يقتل احدهما الاخر ؟',
     'PUBG | اذا صديقك بالاسكواد يحتاج مساعده هل تساعده ام تتركه ؟',
     'PUBG | اذا تم عمل لصديقك كونك اوت وامامك لوت كثير جدا سوف تذهب لتساعده ام تاخذ الوت وتدعه يموت ؟',
     'PUBG | اين تجد ملابس القناصه ؟ ghillie suit ?',
     'PUBG | ايهما تفضل ؟ الاختباء حتي يتبقي اشخاص قليله ام تذهب لتقتل ولا تختبئ',
     'PUBG | اين تفضل ان تهبط من الطائره ؟ الاماكن الهادئيا لوت صغير ام الاماكن المزدحمه بالاعبين لاكن لوت كثير',
     'PUBG | كم عدد المرات التي فزت بها لوحدك سولو ؟',
     'PUBG | ما هو افضل سلاح تجيد استخدامه ؟',
     'PUBG | ما هو اندر سلاح قد تجده برائيك ؟',
     'PUBG | ما هو اندر سلاح جديد قد تجده برائيك ؟',
     'PUBG | ما هو عدوك في العبه لاق البنق ام لاق الفريمات الاف بي اس ؟',
     'PUBG | ايهما تفضل العب ؟ فـ المساء ام الصباح ؟',
     'PUBG | هل تحب ان يكون الجيم ملئ بلاعبين ام لاعبين قليلين ؟',
     'PUBG | هل الملابس تعبر عن انك محترف ام لا ؟',
     'PUBG | كم معك من مال ( كوين ) بلعبه ؟',
     'PUBG | ما هو اكثر شئ تكرهه في العبه ؟',
     'PUBG | ما هو اكثر شئ تحبه بلعبه ؟',
     'PUBG | ماذا تفضل شتو قن ( بندقيه ) ام قناصه ؟',
     'PUBG | ماذا تفضل اكثر ؟ درع لفل 3 متضرر ام درع لفل 2 غير متضرر',
     'PUBG | تفضل ان تلعب مع صديقك سكواد ام شخص غريب ؟',
     'PUBG | هل تظن انك افضل شخص في اصدقائك بهذه اللعبه؟',
     'PUBG | قيم نفسك من 10 كـ احتراف لك بالعبه',
     'PUBG | هل فزت جيم من قبل بالعبه ؟',
     'PUBG | هل وصلت للمركز ال 10 ( توب 10 ) قبل هكذا بلعبه ؟',
     'PUBG | هل قمت بلعب مع صديقك من قبل بلعبه ؟',
     'PUBG | هل تعلم من اخترع العبه ؟',
     'PUBG | لو خيروك لعبه ببجي ام فورت نايت ؟',
     'PUBG | هل يوجد شخص من اصدقاءك محترف اكثر منك ام انت اكثر شخص محترف ما بين اصدقاءك ؟',
     'PUBG | اذا كنت من فريق مطورين العبه ماذا ستفعل ؟',
     'PUBG | قيم من 10 مدي حبك للعبه',
     'PUBG | هل تحب ان تتكلم صوت مع اصدقاءك وانت تلعب معاهم ام لا تحب هذا الامر ؟',
 
]
   client.on('message', message => {
       if (message.author.bot) return;
 if (message.content.startsWith('$pubg')) {
     if(!message.channel.guild) return message.reply('** This command only for servers **');
  var client= new Discord.RichEmbed()
  .setTitle("لعبه اسئله باتل جرواند")
  .setColor('#FFA500')
  .setDescription(`${pubg[Math.floor(Math.random() * pubg.length)]}`)
  .setImage("https://cdn.discordapp.com/attachments/416617103492251658/477741838292484127/pubg-orange-square.png")
                  .setTimestamp()
 
   message.channel.sendEmbed(client);
   message.react("??")
 }
});






client.on("roleCreate", rc => {

  const channel = rc.guild.channels.find("name", "log") //تقدر تغير اسم الشات

  if(channel) {

  var embed = new Discord.RichEmbed()

  .setTitle(rc.guild.name)

  .setDescription(`***Created Role Name : *** **${rc.name}** `)

  .setColor(`RANDOM`)

  .setTimestamp(); 

  channel.sendEmbed(embed)

  }

  });

  //By S Codes

  client.on("roleDelete",  rd => {

  const channel = rd.guild.channels.find("name", "log")

  if(channel) {

  var embed = new Discord.RichEmbed()

  .setTitle(rd.guild.name)

  .setDescription(`***Deleted Role Name : *** **${rd.name}** `)

  .setColor(`RANDOM`)

  .setTimestamp(); 

  channel.sendEmbed(embed)

  }

  });

client.on("channelCreate",  cc => {

  const channel = cc.guild.channels.find("name", "log")

  if(channel) {

  var embed = new Discord.RichEmbed()

  .setTitle(cc.guild.name)

  .setDescription(`***Channel Created Name : *** **${cc.name}** ⬅️`)

  .setColor(`RANDOM`)

  .setTimestamp(); 

  channel.sendEmbed(embed)

  }

  });

   client.on("deleteChannel",  dc => {

  const channel = dc.guild.channels.find("name", "log")

  if(channel) {

  var embed = new Discord.RichEmbed()

  .setTitle(dc.guild.name)

  .setDescription(`***Channel Deleted Name : *** **${dc.name}** ⬅️`)

  .setColor(`RANDOM`)

  .setTimestamp(); 

  channel.sendEmbed(embed)

  }

  });

  

  

  

  client.on('messageUpdate', (message, newMessage) => {

    if (message.content === newMessage.content) return;

    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;

    const channel = message.guild.channels.find('name', 'log');

    if (!channel) return;

    let embed = new Discord.RichEmbed()

       .setAuthor(`${message.author.tag}`, message.author.avatarURL)

       .setColor('SILVER')

       .setDescription(`✏ **تعديل رساله

ارسلها <@${message.author.id}>                                                                                                                         تم تعديلها في شات** <#${message.channel.id}>\n\nقبل التعديل:\n \`${message.cleanContent}\`\n\nبعد التعديل:\n \`${newMessage.cleanContent}\``)

       .setTimestamp();

     channel.send({embed:embed});

});

client.on('guildMemberAdd', member => {

    if (!member || !member.id || !member.guild) return;

    const guild = member.guild;

	    const channel = member.guild.channels.find('name', 'log');

    if (!channel) return;

    let memberavatar = member.user.avatarURL

    const fromNow = moment(member.user.createdTimestamp).fromNow();

    const isNew = (new Date() - member.user.createdTimestamp) < 900000 ? '🆕' : '';

    

    let embed = new Discord.RichEmbed()

       .setAuthor(`${member.user.tag}`, member.user.avatarURL)

	   .setThumbnail(memberavatar)

       .setColor('GREEN')

       .setDescription(`📥 <@${member.user.id}> **Joined To The Server**\n\n`)

       .setTimestamp();

     channel.send({embed:embed});

});

client.on('guildMemberRemove', member => {

    if (!member || !member.id || !member.guild) return;

    const guild = member.guild;

	

    const channel = member.guild.channels.find('name', 'log');

    if (!channel) return;

    let memberavatar = member.user.avatarURL

    const fromNow = moment(member.joinedTimestamp).fromNow();

    

    let embed = new Discord.RichEmbed()

       .setAuthor(`${member.user.tag}`, member.user.avatarURL)

	   .setThumbnail(memberavatar)

       .setColor('RED')

       .setDescription(`📤 <@${member.user.id}> **Leave From Server**\n\n`)

       .setTimestamp();

     channel.send({embed:embed});

});

client.on('messageDelete', message => {

    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;

    const channel = message.guild.channels.find('name', 'log');

    if (!channel) return;

    

    let embed = new Discord.RichEmbed()

       .setAuthor(`${message.author.tag}`, message.author.avatarURL)

       .setColor('BLACK')

       .setDescription(`🗑️ **حذف رساله**

**ارسلها <@${message.author.id}>                                                                                                                        تم حذفها في شات** <#${message.channel.id}>\n\n \`${message.cleanContent}\``)

       .setTimestamp();

     channel.send({embed:embed});

});






client.login(process.env.BOT_TOKEN); 
