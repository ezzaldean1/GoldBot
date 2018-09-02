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

















client.login(process.env.BOT_TOKEN); 
