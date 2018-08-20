
const Discord = require('discord.js');
const client = new Discord.Client();
var Canvas = require('canvas')
const moment = require('moment');
const ms = require("ms");
var jimp = require('jimp')
var fs = require("fs");
const ytdl = require("ytdl-core");
const { Client, Util } = require('discord.js');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();
client.on('ready', () => {
 client.user.setGame(' =help | =invite','https://www.twitch.tv/peery13');
  console.log('---------------');
  console.log(' Platinum Bot Is Online')
  console.log('---------------')
});


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

var prefix = "="

client.on('message', message => {//id
    if(message.content == ('=user')) {

             if (message.channel.type === 'dm') return message.reply('هذا الامر فقط للسيرفرات :x:');
            var Canvas = module.require('canvas');
            var jimp = module.require('jimp');

     const w = ['./imgg/ID1.png','./imgg/ID2.png','./imgg/ID3.png','./imgg/ID4.png','./imgg/ID5.png'];

             let Image = Canvas.Image,
                 canvas = new Canvas(802, 404),
                 ctx = canvas.getContext('2d');
             ctx.patternQuality = 'bilinear';
             ctx.filter = 'bilinear';
             ctx.antialias = 'subpixel';
             ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
             ctx.shadowOffsetY = 2;
             ctx.shadowBlur = 2;
             fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                 if (err) return console.log(err);
                 let BG = Canvas.Image;
                 let ground = new Image;
                 ground.src = Background;
                 ctx.drawImage(ground, 0, 0, 802, 404);

     })
                                let user = message.mentions.users.first();
          var men = message.mentions.users.first();
             var heg;
             if(men) {
                 heg = men
             } else {
                 heg = message.author
             }
           var mentionned = message.mentions.members.first();
              var h;
             if(mentionned) {
                 h = mentionned
             } else {
                 h = message.member
             }
             var ment = message.mentions.users.first();
             var getvalueof;
             if(ment) {
               getvalueof = ment;
             } else {
               getvalueof = message.author;
             }//ما خصك ,_,
                                           let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
                                             jimp.read(url, (err, ava) => {
                                                 if (err) return console.log(err);
                                                 ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                                                     if (err) return console.log(err);

                                                                                           //Avatar
                                                             let Avatar = Canvas.Image;
                                                             let ava = new Avatar;
                                                             ava.src = buf;
                                                             ctx.beginPath();
                                                           ctx.drawImage(ava, 335, 3, 160, 169);
                                                                            //wl
                                                     ctx.font = '35px Arial Bold';
                                                     ctx.fontSize = '40px';
                                                     ctx.fillStyle = "#dadada";
                                                     ctx.textAlign = "center";


                                                     ctx.font = '30px Arial Bold';//Name ,_,
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                             ctx.fillText(`${getvalueof.username}`,655, 170);


                                                          moment.locale('ar-ly');


                                                                    ctx.font = '30px Arial';
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                             ctx.fillText(`${moment(h.joinedAt).fromNow()}`,150, 305);


                                                                                                     ctx.font = '30px Arial';
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                 ctx.fillText(`${moment(heg.createdTimestamp).fromNow()}`,150, 170);

                                                       let status;
     if (getvalueof.presence.status === 'online') {
         status = 'اون لاين';
     } else if (getvalueof.presence.status === 'dnd') {
         status = 'مشغول';
     } else if (getvalueof.presence.status === 'idle') {
         status = 'خارج النطاق';
     } else if (getvalueof.presence.status === 'offline') {
         status = 'اوف لاين';
     }


                                          ctx.cont = '35px Arial';
                                          ctx.fontSize = '30px';
                                          ctx.filleStyle = '#ffffff'
                                          ctx.fillText(`${status}`,655,305)

                                                                   ctx.font = 'regular 30px Cairo';
                                                                   ctx.fontSize = '30px';
                                                                   ctx.fillStyle = '#ffffff'
                                                         ctx.fillText(`${h.presence.game === null ? "لا يلعب" : h.presence.game.name}`,390,390);

                               ctx.font = '35px Arial';
                                                                   ctx.fontSize = '30px';
                                                                   ctx.fillStyle = '#ffffff'
                                                                   ctx.fillText(`#${heg.discriminator}`,390,260)

                                 ctx.beginPath();
                                 ctx.stroke();
                               message.channel.sendFile(canvas.toBuffer());




                             })

                             })
 }
 });



      client.on('guildMemberAdd', member => {
      const welcomer =  member.guild.channels.find('name', 'welcome');//اسم الروم الي يرحب فيه

      var Canvas = require('canvas')
      var jimp = require('jimp')

      const w = ['./img/w1.png',
      './img/w2.png',
      './img/w3.png',
      './img/w4.png',
      './img/w5.png',
      './img/w7.png',
      './img/w8.png'];

              let Image = Canvas.Image,
                  canvas = new Canvas(401, 202),
                  ctx = canvas.getContext('2d');
              ctx.patternQuality = 'bilinear';
              ctx.filter = 'bilinear';
              ctx.antialias = 'subpixel';
              ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
              ctx.shadowOffsetY = 2;
              ctx.shadowBlur = 2;
              fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                  if (err) return console.log(err)
                  let BG = Canvas.Image;
                  let ground = new Image;
                  ground.src = Background;
                  ctx.drawImage(ground, 0, 0, 401, 202);

      })

                      let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".gif" : member.user.displayAvatarURL;
                      jimp.read(url, (err, ava) => {
                          if (err) return console.log(err);
                          ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                              if (err) return console.log(err);

                              
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.drawImage(ava, 152, 27, 95, 95);

                                                      //wl
                              ctx.font = '20px Arial Bold';
                              ctx.fontSize = '15px';
                              ctx.fillStyle = "#FFFFFF";
                              ctx.textAlign = "center";
                                                         ctx.fillText(member.user.username, 200, 154);

                              //NAME
                              ctx.font = '20px Arial';
                              ctx.fontSize = '28px';
                              ctx.fillStyle = "#FFFFFF";
                              ctx.textAlign = "center";
                                    ctx.fillText(`انت العضو رقم${member.guild.memberCount} `
                              , 200, 190);

 welcomer.sendFile(canvas.toBuffer())



      })
      })
      });



  client.on('message', message => {
if(message.content.startsWith("=slots")) {
  let slot1 = ['🍏', '🍇', '🍒', '🍍', '🍅', '🍆', '🍑', '🍓'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let we;
  if(slots1 === slots2 && slots2 === slots3) {
    we = "Win!"
  } else {
    we = "Lose!"
  }
  message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
}
});
  




client.on('message', async message => {
  if(message.content.startsWith(prefix + "svoice")) {
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







/*
البكجآت
npm install discord.js
npm install ytdl-core
npm install get-youtube-id
npm install youtube-info
npm install simple-youtube-api
npm install queue
*/
client.on('message', msg => {

    if (msg.content == '=play') {
        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join();
     }
    }
}
})

client.on('message', async msg => { // eslint-disable-line
	if (msg.author.bot) return undefined;
	//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	if (!msg.content.startsWith(prefix)) return undefined;
	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	if (command === `play`) {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('يجب توآجد حضرتك بروم صوتي .');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
			return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
		}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
		}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

		if (!permissions.has('EMBED_LINKS')) {
			return msg.channel.sendMessage("**يجب توآفر برمشن `EMBED LINKS`لدي **")
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
			return msg.channel.send(` **${playlist.title}** تم الإضآفة إلى قأئمة التشغيل`);
		} else {
			try {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

				var video = await youtube.getVideo(url);
			} catch (error) {
				try {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
					var videos = await youtube.searchVideos(searchString, 5);
					let index = 0;
					const embed1 = new Discord.RichEmbed()
			        .setDescription(`**الرجآء من حضرتك إختيآر رقم المقطع** :
${videos.map(video2 => `[**${++index} **] \`${video2.title}\``).join('\n')}`)
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
					
					msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})
					
					// eslint-disable-next-line max-depth
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 15000,
							errors: ['time']
						});//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
					} catch (err) {
						console.error(err);
						return msg.channel.send('لم يتم إختيآر مقطع صوتي');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send(':X: لا يتوفر نتآئج بحث ');
				}
			}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

			return handleVideo(video, msg, voiceChannel);
		}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	} else if (command === `skip`) {
		if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لتجآوزه');
		serverQueue.connection.dispatcher.end('تم تجآوز هذآ المقطع');
		return undefined;
	} else if (command === `stop`) {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لإيقآفه');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('تم إيقآف هذآ المقطع');
		return undefined;
	} else if (command === `vol`) {
		if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (!serverQueue) return msg.channel.send('لا يوجد شيء شغآل.');
		if (!args[1]) return msg.channel.send(`:loud_sound: مستوى الصوت **${serverQueue.volume}**`);
		serverQueue.volume = args[1];//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
		return msg.channel.send(`:speaker: تم تغير الصوت الي **${args[1]}**`);
	} else if (command === `np`) {
		if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
		const embedNP = new Discord.RichEmbed()
	.setDescription(`:notes: الان يتم تشغيل : **${serverQueue.songs[0].title}**`)
		return msg.channel.sendEmbed(embedNP);
	} else if (command === `queue`) {
		//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
		let index = 0;
		//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		const embedqu = new Discord.RichEmbed()
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
.setDescription(`**Songs Queue**
${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}
**الان يتم تشغيل** ${serverQueue.songs[0].title}`)
		return msg.channel.sendEmbed(embedqu);
	} else if (command === `pause`) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('تم إيقاف الموسيقى مؤقتا!');
		}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		return msg.channel.send('لا يوجد شيء حالي ف العمل.');
	} else if (command === "resume") {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('استأنفت الموسيقى بالنسبة لك !');
		}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		return msg.channel.send('لا يوجد شيء حالي في العمل.');
	}

	return undefined;
});
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
//	console.log('yao: ' + Util.escapeMarkdown(video.thumbnailUrl));
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		queue.set(msg.guild.id, queueConstruct);
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		queueConstruct.songs.push(song);
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`لا أستطيع دخول هذآ الروم ${error}`);
		}
	} else {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(` **${song.title}** تم اضافه الاغنية الي القائمة!`);
	}
	return undefined;
}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	console.log(serverQueue.songs);
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
			play(guild, serverQueue.songs[0]);
		})//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		.on('error', error => console.error(error));//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

	serverQueue.textChannel.send(`بدء تشغيل : **${song.title}**`);
}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

const adminprefix = "$vip";//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
const devs = ['274923685985386496'];//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
client.on('message', message => {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
  var argresult = message.content.split(` `).slice(1).join(' ');//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
    if (!devs.includes(message.author.id)) return;//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
    
if (message.content.startsWith(adminprefix + 'setgame')) {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}

});





const figlet = require('figlet');
client.on('message', message => {
if (message.content.startsWith(prefix + 'tag')) {
    let args = message.content.split(" ").slice(1);
if(!args[0]) return message.reply('مرجو كتابة نص الدي تريد');  

    figlet(args.join(" "), (err, data) => {
              message.channel.send("```" + data + "```")
           })
}
});







client.on("message",function(message) {
    if(message.content.startsWith(prefix + 'uptime')) {
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
    
let v1 = new Discord.RichEmbed()
  v1.setTimestamp(new Date())
  v1.setColor("RED")
  v1.setDescription('***__ Collecting Data __***')
  v1.setFooter("# | S Bot  |") 
let norelden = new Discord.RichEmbed()
.setColor('#9b59b6')
.setTimestamp(new Date())
.setThumbnail(client.user.avatarURL)
.addField("UpTime :",`**[** **Days:** \`${days}\` **Hours:** \`${hours}\` **Minutes:** \`${minutes}\` **Seconds:** \`${seconds}\` **]**`,true)
.setFooter("  S Bot |");
  message.channel.send({embed:v1}).then(m => m.edit({embed:norelden}),5000);
}
});










client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':date:**__تم عمل السيرفر فيي__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });



 





   client.on("message", message => {

          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){
          const embed = new Discord.RichEmbed()

      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });


client.on('message', message => {
    if (message.content.startsWith(prefix + "avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;

      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});




client.on("message", (message) => {
if (message.content.startsWith(prefix + "ct")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('تـم إنـشاء روم كـتابـي')

}
});


client.on("message", (message) => {
if (message.content.startsWith(prefix + "cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('تـم إنـشاء روم صـوتي')

}
});









client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');

  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});




client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');

  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**USER:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**BY:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**REASON:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});




client.on("message", message => {
              var args = message.content.substring(prefix.length).split(" ");
              if (message.content.startsWith(prefix + "clear")) {
                  if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠  لا يوجد لديك صلاحية لمسح الشات**');
          var msg;
          msg = parseInt();

        message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
        message.channel.sendMessage("", {embed: {
          title: "``تــم مسح الشات ``",
          color: 0x06DF00,
          footer: {

          }
        }}).then(msg => {msg.delete(3000)});
                            }


  });







client.on('message', message => {
    if(message.content === prefix + "bot") {
        const embed = new Discord.RichEmbed()
        .setColor("#00FFFF")
        .setThumbnail('https://cdn4.iconfinder.com/data/icons/thin-games-fun/24/thin-1389_bot_robot_toys-512.png')
        .setDescription(`
**__Bot Info__** :sparkles:

**Servers**🌐 **__${client.guilds.size}__**
**Users**👥 **__${client.users.size}__**
**Channels**📚 **__${client.channels.size}__** `)
               message.channel.sendEmbed(embed);
           }
});





      client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith(prefix + 'ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms :signal_strength: ")
                        .addField('**WebSocket:**',api + " ms :signal_strength: ")
         message.channel.send({embed:embed});
                        }
                    });




client.on('message', message => {
         if (message.content === prefix + "dt") {
         if (!message.channel.guild) return message.reply('** This command only for servers **');
         var currentTime = new Date(),
            hours = currentTime.getHours() + 4 ,
            hours2 = currentTime.getHours() + 3 ,
            hours3 = currentTime.getHours() + 2 ,
            hours4 = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
             var h = hours
  if(hours > 12) {
               hours -= 12;
            } else if(hours == 0) {
                hours = "12";
            }
             if(hours2 > 12) {
               hours2 -= 12;
            } else if(hours2 == 0) {
                hours2 = "12";

            }
if(hours3 > 12) {
               hours3 -= 12;
            } else if(hours3 == 0) {
                hours3 = "12";
            }
            if (minutes < 10) {
                minutes = '0' + minutes;
            }


            var suffix = 'صباحاَ';
            if (hours >= 12) {
                suffix = 'مساء';
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }


                var Date15= new Discord.RichEmbed()
                .setThumbnail("https://i.imgur.com/ib3n4Hq.png")
                .setTitle( "『التاريخ  والوقت』")
                .setColor('RANDOM')
                .setFooter(message.author.username, message.author.avatarURL)
                .addField('الامارات',
                "『"+ hours + ":" + minutes +":"+ seconds + "』")
                 .addField('مكه المكرمه',
                "『"+ hours2 + ":" + minutes +":"+ seconds  + "』")
                .addField('مصر',
                "『"+ hours3 + ":" + minutes +":"+ seconds  + "』")

                .addField('Date',
                "『"+ Day + "-" + Month + "-" + Year +  "』")

                 message.channel.sendEmbed(Date15);
        }
    });









  client.on('message', async message => {
  let messageArray = message.content.split(' ');
  let args = messageArray.slice(1);
  if(message.content.startsWith(prefix + "invites")) {
    if(!args) return message.reply('**حدد اسم دعوة**');
    message.guild.fetchInvites().then(i => {
      let inv = i.get(args[0]);
      if(!inv) return message.reply(`**لم اقدر على ايجاد ${args}**`);
      var iNv = new Discord.RichEmbed()
      .setAuthor(message.author.username,message.author.avatarURL)
      .setThumbnail(message.author.avatarURL)
      .addField('# - صاحب الدعوة',inv.inviter,true)
      .addField('# - روم الدعوة',inv.channel,true)
      .addField('# - تاريخ انتهاء الدعوة',moment(inv.expiresAt).format('YYYY/M/DD:h'),true)
      .addField('# - تم انشاء الدعوة',moment(inv.createdAt).format('YYYY/M/DD:h'),true)
      .addField('# - مدة الدعوة',moment(inv.maxAge).format('DD **ساعة** h **يوم**'),true)
      .addField('# - الاستخدامات',inv.uses || inv.maxUses,true)
      message.channel.send(iNv);
    });
  }
});
  









             client.on('message', message => {
                if(message.content === prefix + "support") {
                    let embed = new Discord.RichEmbed ()
                    embed.setTitle("**:arrow_right: Support Platinum Bot !**")
                    .setURL("https://discord.gg/zf6SECF");
                   message.channel.sendEmbed(embed);
                  }
});

             client.on('message', message => {
                if(message.content === prefix + "invite") {
                    let embed = new Discord.RichEmbed ()
                    embed.setTitle("**:arrow_right: Invite Platinum Bot !**")
                    .setURL("https://discordapp.com/oauth2/authorize?client_id=470610187372199947&permissions=8&scope=bot");
                   message.channel.sendEmbed(embed);
                  }
});















client.on('message', message => {
   if (message.content === prefix + "roll 1") {
  message.channel.sendMessage(Math.floor(Math.random() * 25));
    }
});

client.on('message', message => {
   if (message.content === prefix + "roll 2") {
  message.channel.sendMessage(Math.floor(Math.random() * 50));
    }
});

client.on('message', message => {
   if (message.content === prefix + "roll 3") {
  message.channel.sendMessage(Math.floor(Math.random() * 75));
    }
});

client.on('message', message => {
   if (message.content === prefix + "roll 4") {
  message.channel.sendMessage(Math.floor(Math.random() * 100));
    }
});










const mathal = [
'لا تطعن في ذوق زوجتك , فقد اختارتك أولا !' ,
'لن تستطيع أن تمنع طيور الهم أن تحلق فوق رأسك و لكنك تستطيع أن تمنعها أن تعشش في رأسك !' ,
'قلوب الأحرار .. قبور الأسرار !' ,
'مراعاة المواعيد من آداب العظماء !' ,
'تصادق مع الذئاب على أن يكون فأسك مستعداً !' ,
'ذوو النفس الدنيئة , يجدون اللذة في التفتيش عن أخطاء العظماء !' ,
'إنك تخطو نحو الشيخوخة يوماً مقابل كل دقيقة من الغضب !' ,
'الضربة اللي ما تقتلك تقويك !!' ,
'كن صديقاً , ولا تطمع أن يكون لك صديق !' ,
'لو كان المال يغني عن الرجال , لما تزوجت بنات الملوك !' ,
'إن بعض القول فن .. فاجعل الإصغاء فناً !' ,
'الذي يولد يزحف , لا يستطيع أن يطير !' ,
'اللسان الطويل دلالة على اليد القصيرة !' ,
'نحن نحب الماضي لأنه ذهب .. ولو عاد لكرهناه!' ,
'الشاب يحتاج من يَفْهَمُ لا إلى من يُفْهمه !' ,
'من علت همته , طال همه !' ,
'من العظماء من يشعر المرء بحضرته أنه صغير ولكن العظيم بحق هو من يُشعر الجميع في حضرته بأنهم عظماء !' ,
'من يطارد عصفورين , يفقدهما جميعاً !' ,
'لكل كلمة أذن , ولعل أذنك ليست لكلماتي , فلا تتهمني بالغموض !' ,
'المرأة هي نصف المجتمع , وهي التي تلد و تربي النصف الآخر !' ,


]
  client.on('message', message => {
if (message.content.startsWith(prefix + 'مثل')) {
    if(!message.channel.guild) return message.reply('** This command only for servers **');
 var client= new Discord.RichEmbed()
 .setTitle("لعبة مثل..")
 .setColor('RANDOM')
 .setDescription(`${mathal[Math.floor(Math.random() * mathal.length)]}`)
 .setImage("http://www.beytoote.com/images/stories/fun/fu9201.jpg")
                 .setTimestamp()

  message.channel.sendEmbed(client);
  message.react("??")
}
});




const Sra7a = [
    'صراحه  |  صوتك حلوة؟',
    'صراحه  |  التقيت الناس مع وجوهين؟',
    'صراحه  |  شيء وكنت تحقق اللسان؟',
    'صراحه  |  أنا شخص ضعيف عندما؟',
    'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
    'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
    'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
    'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
    'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
    'صراحه  |  أشجع شيء حلو في حياتك؟',
    'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
    'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
    'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
    'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
    'صراحه  |  نظرة و يفسد الصداقة؟',
    'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
    'صراحه  |  شخص معك بالحلوه والمُره؟',
    'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
    'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
    'صراحه  |  وش تتمنى الناس تعرف عليك؟',
    'صراحه  |  ابيع المجرة عشان؟',
    'صراحه  |  أحيانا احس ان الناس ، كمل؟',
    'صراحه  |  مع مين ودك تنام اليوم؟',
    'صراحه  |  صدفة العمر الحلوة هي اني؟',
    'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
    'صراحه  |  صفة تحبها في نفسك؟',
    'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
    'صراحه  |  تصلي صلواتك الخمس كلها؟',
    'صراحه  |  ‏تجامل أحد على راحتك؟',
    'صراحه  |  اشجع شيء سويتة بحياتك؟',
    'صراحه  |  وش ناوي تسوي اليوم؟',
    'صراحه  |  وش شعورك لما تشوف المطر؟',
    'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
    'صراحه  |  ما اكثر شي ندمن عليه؟',
    'صراحه  |  اي الدول تتمنى ان تزورها؟',
    'صراحه  |  متى اخر مره بكيت؟',
    'صراحه  |  تقيم حظك ؟ من عشره؟',
    'صراحه  |  هل تعتقد ان حظك سيئ؟',
    'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
    'صراحه  |  كلمة تود سماعها كل يوم؟',
    'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
    'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
    'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
    'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
    '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
    'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
    '‏صراحه | هل تحب عائلتك ام تكرههم؟',
    '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
    '‏صراحه  |  هل خجلت من نفسك من قبل؟',
    '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
    '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
    '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
     '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
    '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
    '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
    'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
    '‏صراحه  |  ما هو عمرك الحقيقي؟',
    '‏صراحه  |  ما اكثر شي ندمن عليه؟',
    'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]
  client.on('message', message => {
if (message.content.startsWith(prefix + 'صراحه')) {
    if(!message.channel.guild) return message.reply('** This command only for servers **');
 var client= new Discord.RichEmbed()
 .setTitle("لعبة صراحة ..")
 .setColor('RANDOM')
 .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
 .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                 .setTimestamp()

  message.channel.sendEmbed(client);
  message.react("??")
}
});


const Za7f = [
   "**صورة وجهك او رجلك او خشمك او يدك**.",
   "**اصدر اي صوت يطلبه منك الاعبين**.",
   "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
   "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
   "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
   "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
   "**ذي المرة لك لا تعيدها**.",
   "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
   "**صور اي شيء يطلبه منك الاعبين**.",
   "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
   "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
   "**سو مشهد تمثيلي عن مصرية بتولد**.",
   "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
   "**ذي المرة لك لا تعيدها**.",
   "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
   "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
   "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
   "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
   "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
   "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
   "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
   "**اتصل على امك و قول لها انك تحبها :heart:**.",
   "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
   "**قل لواحد ماتعرفه عطني كف**.",
   "**منشن الجميع وقل انا اكرهكم**.",
   "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",
   "**روح المطبخ و اكسر صحن او كوب**.",
   "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
   "**قول لاي بنت موجود في الروم كلمة حلوه**.",
   "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
   "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من السيرفر**.",
   "**قول قصيدة **.",
   "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
   "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
   "**اول واحد تشوفه عطه كف**.",
   "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
   "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
   "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
   "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
   "**تاخذ عقابين**.",
   "**قول اسم امك افتخر بأسم امك**.",
   "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**.",
   "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
   "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
   "**تتصل على الوالده  و تقول لها خطفت شخص**.",
   "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
   "**����تصل على الوالده  و تقول لها  احب وحده**.",
     "**تتصل على شرطي تقول له عندكم مطافي**.",
     "**خلاص سامحتك**.",
     "** تصيح في الشارع انا  مجنوون**.",
     "** تروح عند شخص تقول له احبك**.",

]


client.on('message', message => {
  if (message.content.startsWith(prefix + "عقاب")) {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
 var embed = new Discord.RichEmbed()
 .setColor('RANDOM')
  .setThumbnail(message.author.avatarURL)
.addField('ρʟαтıпυм-вσт' ,
 `${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
 message.channel.sendEmbed(embed);
 console.log('[38ab] Send By: ' + message.author.username)
   }
});


var rebel = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png"]
   client.on('message', message => {
       var args = message.content.split(" ").slice(1);
   if(message.content.startsWith(prefix + 'لو خيروك')) {
        var cat = new Discord.RichEmbed()
.setImage(rebel[Math.floor(Math.random() * rebel.length)])
message.channel.sendEmbed(cat);
   }
});



const cuttweet = [
    'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
    'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
    'كت تويت | الحرية لـ ... ؟',
    'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
    'كت تويت ‏| كلمة للصُداع؟',
    'كت تويت ‏| ما الشيء الذي يُفارقك؟',
    'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
    'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
    'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
    'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
    '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
    'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
    '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
    '‏كت تويت | وش يفسد الصداقة؟',
    '‏كت تويت | شخص لاترفض له طلبا ؟',
    '‏كت تويت | كم مره خسرت شخص تحبه؟.',
    '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
    '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
    '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
    '‏كت تويت |أقوى كذبة مشت عليك ؟',
    '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
    'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
    '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
    '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
    '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
    '‏كت تويت | مطلبك الوحيد الحين ؟',
    '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]

client.on('message', message => {
  if (message.content.startsWith(prefix + "كت تويت")) {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
 var embed = new Discord.RichEmbed()
 .setColor('RANDOM')
  .setThumbnail(message.author.avatarURL)
.addField('لعبه كت تويت' ,
 `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
 message.channel.sendEmbed(embed);
 console.log('[id] Send By: ' + message.author.username)
   }
});

const secreT = [
 "**الحياة بكل ما فيها ��قف دائمًا على حد الوسطية بين اتزان المعنى وضده من حب وكره وحق وباطل وعدل وظلم**.",
 "**كى تعيش عليك ان تتقن فن التجا��ل باحتراف**.",
 "**لا تحزن على من اشعرك بان طيبتك غباء امام وقاحته**.",
 "**هناك من يحلم بالنجاح وهناك من يستيقظ باكرا لتحقيقه**.",
 "**ان تعالج ألمك بنفسك تلك هى القوة**.",
 "**الجميع يسمع ما تقول والاصدقاء ينصتون لما تقول وافضل الاصدقاء ينصتون لما اخفاه سكوتك**.",
 "**انتهى زمن الفروسية ، لم تنقرض الخيول بل انقرض الفرسان**.",
 "**ان تكون اخرسا عاقلا خير من ان تكون نطوقا جهولا**.",
 "**المناقشات العقيمة لا تنجب افكارا**.",
 "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.",
 "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.",
]


client.on('message', message => {
  if (message.content.startsWith("^خواطر")) {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
 var embed = new Discord.RichEmbed()
 .setColor('RANDOM')

  .setThumbnail(message.author.avatarURL)
.addField('لعبه خواطر' ,
 `${secreT[Math.floor(Math.random() * secreT.length)]}`)
 message.channel.sendEmbed(embed);
 console.log('[id] Send By: ' + message.author.username)
   }
});




const Love = [  "**احبك / عدد قطرات المـــطر والشجر وامواج البحر والنجوم الي تتزاحم مبهورة في جمال القمر**.",  "**ساعزفك وساجعلك لحنا تغني عليه جميع قصائد العشــق**.",  "**احبك موت... لاتسألني ما الدليل ارأيت رصاصه تسأل القتيل؟**.",  "**ربما يبيع الانسان شيئا قد شراه لاكن لا يبيع قلبا قد هواه**.",  "**و ما عجبي موت المحبين في الهوى ........... و لكن بقاء العاشقين عجيب**.",   "**حلفت / لاحشـــد جيوش الحب واحتلك مسكين ربي بلا�� بعـــاشق ارهـــابي**.",   "**العيــن تعشق صورتك ... والقلب يجري فيه دمك وكل مااسمع صوتك ...شفايفي تقول احبك**.",   "**ياحظ المكان فيك..ياحظ من هم حواليك ...ياحظ الناس تشوفك ... وانا مشتاق اليك**.",   "**لو كنت دمعة داخل عيوني بغمض عليك وصدقي ما راح افتح...ولو كان الثمن عيوني**.",   "**سهل اموت عشانك لكن الصعب اعيش بدونك سهل احبك لكن صعب انساك**.",   "**أخشى ان انظر لعيناك وأنا فى شوق ولهيب لرؤياك**.",   "**أتمنى ان اكون دمعة تولد بعينيك واعيش على خديك واموت عند شفتيك**.",   "**أحياناً أرى الحياة لا تساوى إبتسامة لكن دائماً إبتسامتك هى كيانى**.",   "**من السهل أن ينسى الانسان نفسه .. لكن من الصعب ان ينسى نفساً سكنت نفسه !**.",   "**نفسى أكون نجمة سماك .. همسة شفاك .. شمعة مساك .. بس تبقى معايا وانا معاك**.",   "**أهنئ قلبى بحبك وصبر عينى فى بعدك وأقول إنك نور عينى يجعل روحى فدى قلبك**.", ]


client.on('message', message => {
  if (message.content.startsWith("^حب")) {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
 var embed = new Discord.RichEmbed()
 .setColor('RANDOM')
  .setThumbnail(message.author.avatarURL)
.addField('ρʟαтıпυм-вσт' ,
 `${Love[Math.floor(Math.random() * Love.length)]}`)
 message.channel.sendEmbed(embed);
 console.log('[id] Send By: ' + message.author.username)
   }
});








var memes =["http://www.shuuf.com/shof/uploads/2015/09/09/jpg/shof_b9d73150f90a594.jpg","https://haltaalam.info/wp-content/uploads/2015/05/0.208.png","https://haltaalam.info/wp-content/uploads/2015/05/266.png","https://haltaalam.info/wp-content/uploads/2015/05/250.png","https://haltaalam.info/wp-content/uploads/2017/02/0.2517.png","https://pbs.twimg.com/media/CP0mi02UAAA3U2z.png","http://www.shuuf.com/shof/uploads/2015/08/31/jpg/shof_3b74fa7295ec445.jpg","http://www.shuuf.com/shof/uploads/2015/08/22/jpg/shof_fa3be6ab68fb415.jpg","https://pbs.twimg.com/media/CSWPvmRUcAAeZbt.png","https://pbs.twimg.com/media/B18VworIcAIMGsE.png"]
client.on('message', message => {
if(message.content.startsWith(prefix + '^هل تعلم')) {
     var embed = new Discord.RichEmbed()
.setImage(memes[Math.floor(Math.random() * memes.length)])
message.channel.sendEmbed(embed);
}
});









const KING = [
   '*** منشن الجميع وقل انا اكرهكم. ***',
'*** اتصل على امك و قول لها انك تحبها :heart:. ***',
   '***     تصل على الوالده  و تقول لها  احب وحده.***',
   '*** تتصل على شرطي تقول له عندكم مطافي.***',
   '*** صور اي شيء يطلبه منك الاعبين.***',
   '*** اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص. ***',
   '*** اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك.***',
   '*** اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف.***',
   '***  تروح عند شخص تقول له احبك. ***',
   '***روح عند اي احد بالخاص و قول له انك تحبه و الخ.***',
   '*** اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه. ***',
   '*** روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل. ***',
   '*** اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك. ***',
   '*** ذي المرة لك لا تعيدها.***',
   '*** ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام.***',
   '*** اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل..... ***',
   '*** تكلم باللهجة السودانية الين يجي دورك مرة ثانية.***',
   '***سو مشهد تمثيلي عن مصرية بتولد.***',
   '*** قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية. ***',
   '*** قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية.***',
   '*** سامحتك خلاص مافيه عقاب لك :slight_smile:. ***',
   '*** اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه.***',
   '*** تتصل على الوالده  و تقول لها خطفت شخص. ***',
   '*** روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك.  ***'
]
 client.on('message', message => {
 if (message.content.startsWith(prefix + 'حكم')) {
  var mariam= new Discord.RichEmbed()
  .setTitle("لعبة حكم ..")
  .setColor('RANDOM')
  .setDescription(`${KING[Math.floor(Math.random() * KING.length)]}`)
   message.channel.sendEmbed(mariam);
   message.react(":thinking:")
  }
});






var viper = ["https://f.top4top.net/p_682it2tg6.png%22","https://e.top4top.net/p_682a1cus5.png%22","https://d.top4top.net/p_682pycol4.png%22","https://c.top4top.net/p_682vqehy3.png%22","https://b.top4top.net/p_682mlf9d2.png%22","https://a.top4top.net/p_6827dule1.png%22","https://b.top4top.net/p_682g1meb10.png%22","https://a.top4top.net/p_682jgp4v9.png%22","https://f.top4top.net/p_682d4joq8.png%22","https://e.top4top.net/p_6828o0e47.png%22","https://d.top4top.net/p_6824x7sy6.png%22","https://c.top4top.net/p_682gzo2l5.png%22","https://b.top4top.net/p_68295qg04.png%22","https://a.top4top.net/p_682zrz6h3.png%22","https://f.top4top.net/p_6828vkzc2.png%22","https://e.top4top.net/p_682i8tb11.png",]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'لو خيروك')) {
         var lo = new Discord.RichEmbed()
.setImage(viper[Math.floor(Math.random() * viper.length)])
message.channel.sendEmbed(lo);
    }
});


var memes =["http://www.shuuf.com/shof/uploads/2015/09/09/jpg/shof_b9d73150f90a594.jpg","https://haltaalam.info/wp-content/uploads/2015/05/0.208.png","https://haltaalam.info/wp-content/uploads/2015/05/266.png","https://haltaalam.info/wp-content/uploads/2015/05/250.png","https://haltaalam.info/wp-content/uploads/2017/02/0.2517.png","https://pbs.twimg.com/media/CP0mi02UAAA3U2z.png","http://www.shuuf.com/shof/uploads/2015/08/31/jpg/shof_3b74fa7295ec445.jpg","http://www.shuuf.com/shof/uploads/2015/08/22/jpg/shof_fa3be6ab68fb415.jpg","https://pbs.twimg.com/media/CSWPvmRUcAAeZbt.png","https://pbs.twimg.com/media/B18VworIcAIMGsE.png"]
client.on('message', message => {
if(message.content.startsWith(prefix + 'هل تعلم')) {
     var embed = new Discord.RichEmbed()
.setImage(memes[Math.floor(Math.random() * memes.length)])
message.channel.sendEmbed(embed);
}
});


    var coinflip =["https://i.imgur.com/ounEiyN.png", "https://i.imgur.com/xUwvSde.png"]
     client.on('message', message => {
         var args = message.content.split(" ").slice(1);
     if(message.content.startsWith(prefix + 'عمله')) {
          var embed = new Discord.RichEmbed()
 .setImage(coinflip[Math.floor(Math.random() * coinflip.length)])
 message.channel.sendEmbed(embed);
     }
 });












client.on('message', msg => {
  if (msg.content === 'باك') {
    msg.reply('**ﯣڷــڭــمۘ ۛ ּنۨــۏڔٺ ̨ڀــٰ̍ا̍ ̨حۡــڸــﯡۥ ﯟڀــڼۨــڪ ۛ ּمۘــنۨ ּڙمۘــٰٱ̍نۨ**');
  }
});




	client.on('message', msg => {
  if (msg.content === 'برب') {
    msg.reply('**تُےـيّےـتُ تُےـرجَےـعَ بّےـٱلسًےـلٱمِےـة :hearts:**');
  }
});




	client.on('message', msg => {
  if (msg.content === 'السلام عليكم') {
    msg.reply('**وعٍليِگﻤ آلسٍلآﻤ ورحﻤة آللهـ وبرگآتهـ**');
  }
});





	client.on('message', msg => {
  if (msg.content === 'سلام عليكم') {
    msg.reply('**وعٍليِگﻤ آلسٍلآﻤ ورحﻤة آللهـ وبرگآتهـ**');
  }
});




	client.on('message', msg => {
  if (msg.content === 'brb') {
    msg.reply('**تُےـيّےـتُ تُےـرجَےـعَ بّےـٱلسًےـلٱمِےـة :hearts:**');
  }
});




	client.on('message', msg => {
  if (msg.content === 'هلا بالخميس') {
    msg.reply('**نبي ونيس :)**');
  }
});










client.on('message', msg => {
  if (msg.content === 'السعودية') {
    msg.react("🇸🇦")
  }
});

client.on('message', msg => {
  if (msg.content === 'مصر') {
    msg.react("🇪🇬")
  }
});

client.on('message', msg => {
  if (msg.content === 'المغرب') {
    msg.react("🇲🇦")
  }
});

client.on('message', msg => {
  if (msg.content === 'العراق') {
    msg.react("🇮🇶")
  }
});

client.on('message', msg => {
  if (msg.content === 'الجزائر') {
    msg.react("🇩🇿")
  }
});

client.on('message', msg => {
  if (msg.content === 'الامارات') {
    msg.react("🇦🇪")
  }
});

client.on('message', msg => {
  if (msg.content === 'تونس') {
    msg.react("🇹🇳")
  }
});

client.on('message', msg => {
  if (msg.content === 'سوريا') {
    msg.react("🇸🇾")
  }
});

client.on('message', msg => {
  if (msg.content === 'ليبيا') {
    msg.react("🇱🇾")
  }
});

client.on('message', msg => {
  if (msg.content === 'قطر') {
    msg.react("🇶🇦")
  }
});

client.on('message', msg => {
  if (msg.content === 'الصومال') {
    msg.react("🇸🇴")
  }
});

client.on('message', msg => {
  if (msg.content === 'عمان') {
    msg.react("🇴🇲")
    msg.channel.send("🇴🇲")
  }
});

client.on('message', msg => {
  if (msg.content === 'موريتانيا') {
    msg.react("🇲🇷")
  }
});
client.on('message', msg => {
  if (msg.content === 'السودان') {
    msg.react("🇸🇩")
  }
});

client.on('message', msg => {
  if (msg.content === 'جيبوتي') {
    msg.react("🇩🇯")
  }
});

client.on('message', msg => {
  if (msg.content === 'لبنان') {
    msg.react("🇱🇧")
  }
});

client.on('message', msg => {
  if (msg.content === 'البحرين') {
    msg.react("🇧🇭")

    }
});

client.on('message', msg => {
  if (msg.content === 'الاردن') {
    msg.react("🇯🇴")

  }
});

client.on('message', msg => {
  if (msg.content === 'اليمن') {
    msg.react("🇾🇪")

  }
});
client.on('message', msg => {
  if (msg.content === 'فلسطين') {
    msg.react("🇵🇸")

  }
});
client.on('message', msg => {
  if (msg.content === 'الكويت') {
msg.react("k w")

  }
});













client.on('message', message=>{
    if (message.content ===  prefix + "اطلع"){
    message.guild.leave();
            }
});





















client.on('message', message => {
    if (message.content.startsWith(prefix + "hack")) {
        if(!message.author.id === '') return;
      if (message.author.bot) return
           message.delete();
             let args = message.content.split(' ').slice(1);

                   let virusname = args.join(' ');
                 if (virusname < 1) {
                     return message.channel.send("```منشن الشخص الي راح يتهكر :(```");
                 }
                 message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] 1%').setColor(0xFF0000)})
             }, 1000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓ ] 2%').setColor(0xFF0000)})
             }, 2000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓ ] 3%').setColor(0xFF0000)})
             }, 3000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓ ] 4%').setColor(0xFF0000)})
             }, 4000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓ ] 28%').setColor(0xFF0000)})
             }, 5000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 35%').setColor(0xFF0000)})
             }, 6000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 78%').setColor(0xFF0000)})
             }, 7000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 80%').setColor(0xFF0000)})
             }, 8000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 86%').setColor(0xFF0000)})
             }, 9000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 89%').setColor(0xFF0000)})
             }, 10000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 90%').setColor(0xFF0000)})
             }, 11000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 95%').setColor(0xFF0000)})
             }, 12000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 96%').setColor(0xFF0000)})
             }, 13000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 97%').setColor(0xFF0000)})
             }, 14000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 98%').setColor(0xFF0000)})
             }, 15000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓���▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 99%').setColor(0xFF0000)})
             }, 16000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 100%').setColor(0xFF0000)})
             }, 17000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']:' + virusname + 'done it\'s going good 100.9%').setColor(0xFF0000)})
             }, 18000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: hacking yeah i love it').setColor(0xFF0000)})
             }, 19000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: uploading data' + virusname + ".key").setColor(0xFF0000)})
             }, 22000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 5...').setColor(0xFF0000)})
             }, 25000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 4...').setColor(0xFF0000)})
             }, 26000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 3...').setColor(0xFF0000)})
             }, 27000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 2...').setColor(0xFF0000)})
             }, 28000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 1...').setColor(0xFF0000)})
             }, 29000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 99%').setColor(0xFF0000)})
           }, 30000)
              setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]100% virus added').setColor(0xFF0000)})
           }, 31000)
              setTimeout(function() {
               m.delete()
           }, 32000)
             setTimeout(function() {
               message.channel.send('تم تهكيرك')
           }, 33000)
           });
         }
 })





















client.on('message', message => {
         if (message.content === prefix + "dt") {
         if (!message.channel.guild) return message.reply('** This command only for servers **');
         var currentTime = new Date(),
            hours = currentTime.getHours() + 4 ,
            hours2 = currentTime.getHours() + 3 ,
            hours3 = currentTime.getHours() + 2 ,
            hours4 = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
             var h = hours
  if(hours > 12) {
               hours -= 12;
            } else if(hours == 0) {
                hours = "12";
            }
             if(hours2 > 12) {
               hours2 -= 12;
            } else if(hours2 == 0) {
                hours2 = "12";

            }
            if(hours3 > 12) {
               hours3 -= 12;
            } else if(hours3 == 0) {
                hours3 = "12";
            }
            if (minutes < 10) {
                minutes = '0' + minutes;
            }


            var suffix = 'صباحاَ';
            if (hours >= 12) {
                suffix = 'مساء';
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }


                var Date15= new Discord.RichEmbed()
                .setThumbnail("https://i.imgur.com/ib3n4Hq.png")
                .setTitle( "『التاريخ  والوقت』")
                .setColor('RANDOM')
                .setFooter(message.author.username, message.author.avatarURL)
                .addField('الامارات',
                "『"+ hours + ":" + minutes +":"+ seconds + "』")
                 .addField('مكه المكرمه',
                "『"+ hours2 + ":" + minutes +":"+ seconds  + "』")
                .addField('مصر',
                "『"+ hours3 + ":" + minutes +":"+ seconds  + "』")

                .addField('Date',
                "『"+ Day + "-" + Month + "-" + Year +  "』")

                 message.channel.sendEmbed(Date15);
        }
    });






















const adkar = [
  '**اذكار  | **اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ.',
  '**اذكار  |  **اللَّهُمَّ إِن��ِي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى. ',
  '**اذكار  ‏|  **اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ، دِقَّهُ، وَجِلَّهُ، وَأَوَّلَهُ، وَآخِرَهُ، وَعَلَانِيَتَهُ، وَسِرَّهُ. ',
  '**‏اذكار  |  **أستغفر الله .',
  '**‏اذكار  | **الْلَّهُ أَكْبَرُ',
  '**‏اذكار  |  **لَا إِلَهَ إِلَّا اللَّهُ',
  '**اذكار  |  **اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ , وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ , اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ.',
  '**اذكار  |  **سُبْحَانَ الْلَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا الْلَّهُ، وَالْلَّهُ أَكْبَرُ',
  '**اذكار  | **لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلُّ شَيْءِ قَدِيرِ.',
  '**اذكار  | **أسْتَغْفِرُ اللهَ وَأتُوبُ إلَيْهِ',
  '**‏اذكار  | **��ُبْحـانَ اللهِ وَبِحَمْـدِهِ. ',
  '‏**اذكار**|  لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ.',
  '**اذكار  ‏|   **اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا.',
  '**اذكار  | ‏ **يَا رَبِّ , لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ , وَلِعَظِيمِ سُلْطَانِكَ.',
  'اذكار    |  **أسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لاَ إلَهَ إلاَّ هُوَ، الحَيُّ القَيُّومُ، وَأتُوبُ إلَيهِ.**',
  '**‏اذكار  |  **اللَّهُمَّ إِ��َّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ.',
  '**‏اذكار  |  **اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على نَبِيِّنَا مُحمَّد. ',
  '**‏اذكار  |  **أَعـوذُ بِكَلِمـاتِ اللّهِ التّـامّـاتِ مِنْ شَـرِّ ما خَلَـق.',
  '**اذكار  |  **يَا حَيُّ يَا قيُّومُ بِرَحْمَتِكَ أسْتَغِيثُ أصْلِحْ لِي شَأنِي كُلَّهُ وَلاَ تَكِلْنِي إلَى نَفْسِي طَـرْفَةَ عَيْنٍ. ',
  '**اذكار  |  **اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر ، وَالفَـقْر ، وَأَعـوذُ بِكَ مِنْ عَذابِ القَـبْر ، لا إلهَ إلاّ أَنْـتَ.',
  '**‏اذكار  |  **اللّهُـمَّ عافِـني في بَدَنـي ، اللّهُـمَّ عافِـني في سَمْـعي ، اللّهُـمَّ عافِـني في بَصَـري ، لا إلهَ إلاّ أَنْـتَ.',
  '**‏اذكار  |  **سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَرِضـا نَفْسِ��ه ، وَزِنَـةَ عَـرْشِـه ، وَمِـدادَ كَلِمـاتِـه. ',
  '**‏اذكار  |  **اللّهُـمَّ بِكَ أَصْـبَحْنا وَبِكَ أَمْسَـينا ، وَبِكَ نَحْـي�� وَبِكَ نَمُـوتُ وَإِلَـيْكَ النُّـشُور.',
  '**‏اذكار  |  **بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـا��ِ وَهـوَ ال��ّمـيعُ العَلـيم. ',
  '**‏اذكار  |  **حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم.',
  '**اذكار  |  **اللّهُـمَّ ما أَصْبَـَحَ بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـدَكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر.',
  '**‏اذكار  |  **اللّهُـمَّ إِنِّـي أَصْبَـحْتُ أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك',
  '**‏اذكار  |  **رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـنا�� وَبِمُحَـمَّدٍ صلى الله عليه وسلم نَبِيّـاً',
  '**‏اذكار  |  **اللهم إني أعوذ بك من العجز، والكسل، والجبن، والبخل، والهرم، وعذاب القبر، اللهم آت نفسي تقواها، وزكها أنت خير من زكاها. أنت وليها ومولاها. اللهم إني أعوذ بك من علم لا ينفع، ومن قلب لا يخشع، ومن نفس لا تشبع، ومن دعوة لا يستجاب لها',
  '**‏اذك��ر  |  **اللهم إني أعوذ بك من شر ما عملت، ومن شر ما لم أعمل',

]
client.on('message', message => {
if (message.author.bot) return;
if (message.content.startsWith(prefix + 'اذكار')) {
  if(!message.channel.guild) return;
var client= new Discord.RichEmbed()
.setTitle("اذكار")
.setThumbnail(message.author.avatarURL)
.setColor('RANDOM')
.setDescription(`${adkar[Math.floor(Math.random() * adkar.length)]}`)
               .setTimestamp()
message.channel.sendEmbed(client);
message.react("??")
}
});










client.on("message", message => {
  let args = message.content.split(" ").slice(1);
if (message.content.startsWith((prefix) + 'report')) {
      let user = message.mentions.users.first();
      let reason = args.slice(1).join(' ');
      let modlog = client.channels.find('name', 'report');
      if (!reason) return message.reply('**ضع سبباً مقنعاً**');
        if (message.mentions.users.size < 1) return message.reply('**منشن الشخص **').catch(console.error);

  if (!modlog) return message.reply('**لا يوجد روم بأسم report**');
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('نوع الرسالة:', 'Report')
    .addField('المراد الابلاغ عليه:', `${user.username}#${user.discriminator} (${user.id}`)
    .addField('صاحب الابلاغ:', `${message.author.username}#${message.author.discriminator}`)
    .addField('السبب', reason);
    message.delete()
    return client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
        }
});



















client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var iiMo = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTimestamp()
            .setTitle('``عندي رساله جديده بل خاص ! ``')
            .setThumbnail(`${message.author.avatarURL}`)
            .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
            .setFooter(`من (@${message.author.tag})  |  (${message.author.id})`)
             client.channels.get("470623137147518997").send({ embed: iiMo });
    }
});














function TTTBoard(data){
	const chars=['',':negative_squared_cross_mark:',':o2:'];
	const numbers=[':one:',':two:',':three:',':four:',':five:',':six:',':seven:',':eight:',':nine:'];
	let ans="\n";
	for(let i=0;i<3;i++){
		for(let j=0;j<3;j++){
			if(data[i][j]){
				ans+=chars[data[i][j]];
			}
			else{
				ans+=numbers[i*3+j];
			}
			if(j<2){ans+=chars[0]};
		}
		if(i<2){
			ans+='\n'+Array(6).join(chars[0])+'';
		}
	}
	return(ans);
};
function TTTWin(data){
    //cats game
    let cg=true;
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(data[i][j]===0){cg=false;}
        }
    }
    if(cg){return(1);}
    //horizontal and vertical
    for(let i=0;i<3;i++){
        //horizontal
        let good=true;
        let p=data[i][0];
        for(let j=1;j<3;j++){
            if(data[i][j]!==p){
                good=false;
            }
        }
        if(p&&good){
            return(2);
        }
        //vertical
        good=true;
        p=data[0][i];
        for(let j=1;j<3;j++){
            if(data[j][i]!==p){
                good=false;
            }
        }
        if(p&&good){
            return(2);
        }
    }
    //diagonal top left- bottom right
    let good=true;
    let p=data[0][0];
    for(let j=1;j<3;j++){
        if(data[j][j]!==p){
            good=false;
        }
    }
    if(p&&good){
        return(2);
    }
    //diagonal top right- bottom left
    good=true;
    p=data[0][2];
    for(let j=1;j<3;j++){
        if(data[j][2-j]!==p){
            good=false;
        }
    }
    if(p&&good){
        return(2);
    }
};

module.game=function(host,server){
	this.server=server;
	this.game=0;
	this.players=[host];
	this.min=2;
	this.max=2;
	this.status='open';
	this.turn=Math.floor(Math.random()*2);
	this.playfield=[[0,0,0],[0,0,0],[0,0,0]];
};

module.game.prototype.join=function(player,users){
	this.players.push(player);
};

module.game.prototype.start=function(users){
	this.status='playing';
	return(
		"```\nاذا كان دورك اختر رقم من 1-9 لتضع حرفك عليه.\nمثال: `5`\n```\n\n<@"+
		this.players[this.turn]+">, it's your turn:"+
		TTTBoard(this.playfield));
};

module.game.prototype.action=function(m,player,users,games,openGames){
	var at,val,rep,win,pf;
	if(this.players[this.turn]!==player){
		return("It's not your turn, it's <@"+this.players[this.turn]+">'s.");
	}
	val=parseInt(m);
	if(val&&val>=1&&val<=9){
		val=Math.round(val);
		val--;
	}
	else{
		return('Must be a number 1-9');
	}
	if(this.playfield[Math.floor(val/3)][val%3]===0){
		this.playfield[Math.floor(val/3)][val%3]=this.turn+1;
	}
	else{
		return('That space is taken.');
	}
	this.turn++;
	if(this.turn>1){this.turn=0;}
	rep="";
	win=TTTWin(this.playfield);
	if(win===2){
		rep="<@"+player+"> WON $"+(this.buyIn>0?this.pot:2)+"!";
		users[player].won++;
		users[player].bank+=this.buyIn>0?this.pot:2;
		users[this.players[this.turn]].lost++;
	}
	else if(win===1){
		rep="مافيه فائز للأسف. :cry:";
		users[player].tied++;
		users[player].bank+=this.buyIn;
		users[this.players[this.turn]].tied++;
		users[this.players[this.turn]].bank+=this.buyIn;
	}
	else{
		rep="<@"+this.players[this.turn]+">, your turn!";
	}
	pf=TTTBoard(this.playfield);
	if(win>0){
		users[player].played++;
		users[this.players[this.turn]].played++;
		delete users[player].current[this.server];
		delete users[this.players[this.turn]].current[this.server];
		delete games[this.server][this.players[0]];
	}
	return(rep+pf);
};

module.game.prototype.quit=function(player,users,games,openGames){
	if(this.status==='open'){
		delete openGames[this.server][this.players[0]];
		delete users[player].current[this.server];
		users[player].bank+=this.pot;
		delete games[this.server][this.players[0]];
		return('You have terminated your game of xo.');
	}
	for(let i=0;i<2;i++){
		if(this.players[i]===player){
			users[this.players[i]].quit++;
		}
		else{
			users[this.players[i]].won++;
			users[this.players[i]].bank+=this.pot;
		}
		users[this.players[i]].played++;
		delete users[this.players[i]].current[this.server];
	}
	delete games[this.server][this.players[0]];
	return('You have forfieted the game of xo.');
};








client.on('message', message => {
 if (message.content.startsWith("ترحيب 1")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;

               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               }
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***بكل حب واحترام وشوق نستقبلك ونتمنى لك قضآء أجمل اللحظات ولآوقات معنا***')
  .setImage('http://www.imgion.com/images/01/Welcome-buddy.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});


client.on('message', message => {
 if (message.content.startsWith("ترحيب 2")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;

               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               }
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***هلا باللي ملك قلبي هلا باللي فداه الروح هلا باللي شغل فكري هلا باللي هواه البوح.***')
  .setImage('https://www.askideas.com/media/13/Welcome-With-Rose-Flowers-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});


client.on('message', message => {
 if (message.content.startsWith("ترحيب 3")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;

               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               }
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***مرحباً بك عدد ما خطته الأقلام من حروف وبعدد ما أزهر بالأرض زهور مرحباً ممزوجة بعطر الورد ورائحة البخور***')
  .setImage('https://www.askideas.com/media/13/Welcome-Signboard-Clipart.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});


client.on('message', message => {
 if (message.content.startsWith("ترحيب 4")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;

               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               }
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***مرحبا باللي يجينا هلت الفرحة علينا نشدت الأشواق فينا مرحباً بكم مرحباً.***')
  .setImage('https://www.askideas.com/media/13/Welcome-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});


client.on('message', message => {
 if (message.content.startsWith("ترحيب 5")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;

               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               }
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***لو علمت الدار بمن زارها فرحت وأستبشرت ثم باست موضع القدمين وأنشدت بلسان الحال قائلة أهلاً وسهلاً بأهل الجود والكرم.***')
  .setImage('https://www.askideas.com/media/13/Welcome-Sign-With-Flowers.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});


client.on('message', message => {
 if (message.content.startsWith("ترحيب 6")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;

               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               }
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***مرحبا بك كثر النجوم الساطعة وكثر الورود الفائحة التي تفوح بأزكى العطور وكثر ما تكتب الأقلام من الحروف والعبارات. ***')
  .setImage('https://www.askideas.com/media/13/Welcome-Sign-For-Front-Door.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});


client.on('message', message => {
 if (message.content.startsWith("ترحيب 7")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;

               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               }
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***حي الله هذه الوجوه رؤيتها تزيد الأفراح، نسماتها تداوي الجروح، وعبيرها فواح، تنثره الرياح، على القمم في الليل في الصباح***')
  .setImage('https://www.askideas.com/media/13/Small-Welcome-Sign-On-Door.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});


client.on('message', message => {
 if (message.content.startsWith("ترحيب 8")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;

               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               }
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***مرحبا بكل الضيوف يوم نادى غير عادي مرحبا فوق الألوف ***')
  .setImage('https://www.askideas.com/media/13/Welcome-Colorful-Sign-Picture.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});


client.on('message', message => {
 if (message.content.startsWith("ترحيب 9")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;

               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               }
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***يا مرحبا وسهلاً بضيف لفانا، يزهي بك الأدب العربي وينثر لك أزهار يسقيك من نبع المشاعر وفانا، لين الهلا تثمر على غصونك أطيار. ***')
  .setImage('https://www.askideas.com/media/13/Welcome-Deers-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});


client.on('message', message => {
 if (message.content.startsWith("ترحيب 10")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;

               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               }
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***كل شيء يرحب بك كل شيء يتبسم ويتوهج فرحاً بقدومك كل شيء ينمق عبارات الترحيب ويصوغ كلمات الحب لوجودك كل شيء ينتظر مشارك��تك وقلمك الرائع وأبداعاتك كل شيء يردد حياك الله.***')
  .setImage('https://www.askideas.com/media/13/Beautiful-Wooden-Welcome-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});






var cat = ["https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg",
"http://www.dogbazar.org/wp-content/uploads/2014/09/british-bull-dog-puppies.jpg",
"http://cdn2-www.dogtime.com/assets/uploads/gallery/german-shepherd-dog-breed-pictures/standing-7.jpg",
"http://cdn.akc.org/Marketplace/Breeds/German_Shepherd_Dog_SERP.jpg",
"https://animalso.com/wp-content/uploads/2016/12/black-german-shepherd_2.jpg",
"https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpg",
"https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg",
"http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg",
"https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg",
"https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg",
"http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg",
"https://www.thelocal.de/userdata/images/article/fa6fd5014ccbd8f4392f716473ab6ff354f871505d9128820bbb0461cce1d645.jpg",
"https://www.adelaidezoo.com.au/wp-content/uploads/sites/2/animals/GiantPanda3Slider.jpg",
"http://imagem.band.com.br/f_230168.jpg",
"https://i.ytimg.com/vi/J0EUxEkm4kc/maxresdefault.jpg"]
   client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'animal')) {
         var cat = new Discord.RichEmbed()
.setImage(cat[Math.floor(Math.random() * cat.length)])
message.channel.sendEmbed(cat);
    }
});


//help

client.on("message", message => {
    if (message.content === prefix + "help") {
     const embed = new Discord.RichEmbed() 
         .setColor("#ffff00")
              .setFooter('Platinum Bot')
         .setThumbnail('http://www.expertizacontabila.com/images/staffmap-icon.png')
         .setDescription(`
  
     **✨Administrationr Commands | اوامر الاداره✨
     
 ❖  ${prefix}kick <mention > ➾ لطرد عضو

 ❖ ${prefix}mute < mention > ➾ اسكات عضو

 ❖ ${prefix}clear  ➾ لتنضيف المحادثة (fixing)

 ❖ ${prefix}cv <name> ➾ صنع روم صوتية

 ❖ ${prefix}ct <name> ➾ صنع روم كتابية

 ❖ ${prefix}delete [room name] ➾ لتحذف روم

 ❖ ${prefix}unmute <mention> ➾ فك الاسكات من العضو

 ❖ ${prefix}bc <message> ➾ لارسال رسالة لجميع اعضاء السيرفرد

 ❖ ${prefix}mutechannel ➾ لتعطي ميوت للروم

 ❖ ${prefix}unmutechannel ➾ لتفك الميوت عن الروم**
   
   `)
   message.author.sendEmbed(embed)
   
   }
   });  












client.on("message", message => {
    if (message.content === prefix + "help") {
     const embed = new Discord.RichEmbed() 
         .setColor("#ffff00")
              .setFooter('Platinum Bot')
         .setThumbnail('https://s3.amazonaws.com/eclincher.wp.upload/wp-content/uploads/2015/08/25155834/people-icon.png')
         .setDescription(`
  
     **✨Public Commands|اوامر عامه✨**
**
❖ ${prefix}member ➾ **معلومات الاعضاء**

❖ ${prefix}draw [text] ➾ **لتيجي الكتابه في صوره**

❖ ${prefix}emoji ➾ **لتيجي صوره ايموجي**

❖ ${prefix}gif ➾ **لتيجي قيف**

❖ ${prefix}sug [text]➾ **suggestion للاقتراح يجب ان يكون روم اسمه **

❖ ${prefix}avatar ➾ **صوره حسابك**

❖ ${prefix}avatar [name] ➾ **صوره حساب الشخص**

❖ ${prefix}dt➾ **عرض الوقت واليوم والتاريخ**

❖ ${prefix}animal ➾ **لرؤيه صوره حيوان**

❖ ${prefix}ping ➾ **عرض سرعه اتصال البوت**

❖ ${prefix}bot ➾ **معلومات البوت**

❖ ${prefix}quran ➾ **لتشغيل القران**
 
   `)
   message.author.sendEmbed(embed)
   
   }
   });  


client.on("message", message => {
    if (message.content === prefix + "help") {
     const embed = new Discord.RichEmbed() 
         .setColor("#ffff00")
              .setFooter('Platinum Bot')
         .setThumbnail('https://cdn.discordapp.com/attachments/431063701072904202/437234646984425480/icon-managers-dark.png')
         .setDescription(`
       **✨Role Commands|اوامر القرعة✨**
❖ ${prefix}roll 1 ➾ **قرعة من1 -25**

❖ ${prefix}roll 2 ➾ **قرعة من 1-50**

❖ ${prefix}roll 3 ➾ **قرعة من 1-75**

❖ ${prefix}roll 4  ➾ **قرعة من 1-100**





   `)
   message.author.sendEmbed(embed)
   
   }
   });  






client.on("message", message => {
    if (message.content === prefix + "help") {
     const embed = new Discord.RichEmbed() 
         .setColor("#ffff00")
              .setFooter('Platinum Bot')
         .setThumbnail('https://cdn.discordapp.com/attachments/470614739580616704/472150922319888385/music-512.png')
         .setDescription(`
       **✨Music Commands|اوامر الاغاني✨**
❖ ${prefix}play ➾ **لتشغيل اغنيه برابط او اسم**

❖ ${prefix}skip ➾ ** لتجآوز الأغنية الحآلية**

❖ ${prefix}pause ➾إيقآف الأغنية مؤقتا

❖ ${prefix}resume ➾لموآصلة الإغنية بعد إيقآفهآ مؤقت

❖ ${prefix}vol ➾ لتغيير درجة الصوت 100 - 0

❖ ${prefix}stop ➾لإخرآج البوت من الروم

❖ ${prefix}np ➾لمعرفة الأغنية المشغلة حآليا

❖ ${prefix}queue ➾لمعرفة قآئمة التشغيل






   `)
   message.author.sendEmbed(embed)
   
   }
   });  







client.on("message", message => {
    if (message.content === prefix + "help") {
     const embed = new Discord.RichEmbed() 
         .setColor("#ffff00")
              .setFooter('Platinum Bot')
         .setThumbnail('https://cdn.discordapp.com/attachments/431063701072904202/437235056453615628/unnamed-4_1.png')
         .setDescription(`
       **✨Invites and Server Commands|اوامر الدعولت والسيرفر✨**
**❖ ${prefix}server ➾ معلومات السيرفر

❖ ${prefix}invites ➾ لرؤيه كم شخص جبت على السيرفر

❖ ${prefix}top ➾ لرؤيه اكثر ناس جابو عالسيرفر

❖ ${prefix}join ➾ لرؤيت  وقت دخول العضو للسيرفر و الدسكورد

❖ ${prefix}id ➾ **اي دي**

❖ ${prefix}buld-v ➾  **لانشاء الرومات الكتابيه والصوتيه**

❖ ${prefix}delet-v ➾**لحذف جميع الرومات**

❖ ${prefix}delet-r ➾ **لحذف جمبع الرت بشرط رتبة البوت فوق الرتب المراد حذفها**
 
❖ ${prefix}cr-colors➾**لانشاء 50 لون **
   
❖ ${prefix}رقم الون➾**لا ختيار لون  **
   
❖ ${prefix}colors ➾ **لاظهار قائمة الاوان**
**ملاحظه لازم تسوي الون  الموجوده في امر البوت**
**
   `)
   message.author.sendEmbed(embed)
   
   }
   });  




client.on("message", message => {
    if (message.content === prefix + "help") {
     const embed = new Discord.RichEmbed() 
         .setColor("#ffff00")
              .setFooter('Platinum Bot')
         .setThumbnail('http://reli.sh/wp-content/themes/relish/assets/img/services/icon-games.png')
         .setDescription(`
  
   **✨Games Coomanda|اوامر الالعاب✨**
 **  
❖ **${prefix}فكك **
للعب لعبه فكك

❖ **${prefix}اسالني**
للعب لعبه اساله عامه

❖ **${prefix}عواصم**
للعب لعبه عواصم

❖ **${prefix}لو خيروك **
للعب لعبه  لو خيروك

❖ **${prefix}صراحه **
للعب لعبه صراحه

❖ **${prefix}كت تويت**
للعب لعبه كت تويت

❖ **${prefix}شعر**
للعب لعبه شعر

❖ **${prefix}حب**
للعب لعبه حب

❖ **${prefix}عقاب**
للعب لعبه عقاب

❖ **${prefix}عمله**
للعب لعبه عمله

❖ **${prefix}هل تعلم**
للعب لعبه هل تعلم
**
`)
   message.author.sendEmbed(embed)
   
   }
   });  




  

client.on("message", message => {
    if (message.content === prefix + "help") {
     const embed = new Discord.RichEmbed() 
         .setColor("#ffff00")
              .setFooter('Platinum Bot')
         .setThumbnail('https://cdn0.iconfinder.com/data/icons/round-ui-icons/512/add_blue.png')
         .setDescription(`
  
   **✨Additional Coomanda|اوامر اضافيه✨**
  **
❖ ${prefix}invite ➾ **رابط دعوة البوت**

❖ ${prefix}support ➾ **رابط دعوة البوت**

❖ ${prefix}contact ➾  **لمراسلة صاحب البوت**
 مصممين البوت
<@470500980342128650>
**
`)
   message.author.sendEmbed(embed)
   
   }
   });  







client.on('message', message => {
    if (message.content == prefix + "fkk") {
        var x = ['hello my friend', 'hi', 'congratulations', '3>', 'mousa', 'good', 'arab', 'closed', 'server', 'Settings', 'bot', 'game','queen', 'couples', 'love', 
        ];
        var x2 = ['h e l l o m y f r i e n d', 'h i', 'c o n g r a t u l a t i o n s', '3 >', 'm o u s a', 'g o o d', 'a r a b', 'c l o s e d', 's e r v e r', ' s e t t i n g s', 'b o t', 'g a m e', 'q u e e n', 'c o u p l e s', 'l o v e'
		];

        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`__**${x[x3]}**__ لديك من الوقت 20 ثآنية لتفكيك هذه الكلمة `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
               thing: true,
               maxMatches : 1,
                time : 20000,
                 maxUses: 1,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: :stopwatch:  انتهي الوقت `)
        })

        r.then((collected)=> {
            message.channel.send(`${collected.first().author} :ballot_box_with_check:  اجابتك صحيحه `);
        })
        })
    }
})



client.on('message', message => {
    if (message.content == prefix + "فكك") {
        var x = ['طيارة', 'اللهم صلي على سيدنا محمد', 'تفكيك', 'ريفيرس', 'مدرسة', 'معلم' , 'نقاط', 'القسطنطينية', 'المملكة العربيه السعودية', 'بنغلادش', 'موسى', 'لورد', ' هذا احسن بوت في العالم', 'اللؤلؤ المتلألئ في اللؤلؤه'
        ];
        var x2 = ['ط ي ا ر ة', 'ا ل ل ه م ص ل ي ع ل ى س ي د ن ا م ح م د', 'ت ف ك ي ك', 'ر ي ف ي ر س', 'م د ر س ة', 'م ع ل م', 'ن ق ا ط', 'ا ل ق س ط ن ط ي ن ي ة', 'ا ل م م ل ك ة ا ل ع ر ب ي ة ا ل س ع و د ي ة', 'ب ن غ ل ا د ش', 'م و س ى', 'ل و ر د', 'ه ذ ا ا ح س ن ب و ت ف ي ا ل ع ا ل م', 'ا ل ؤ ل ؤ ا ل م ت ل أ ل ئ ف ي ا ل ؤ ل ؤ ه '        ];

        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`لديك من الوقت 20 ثآنية لتفكيك هذه الكلمة __**${x[x3]}**__ `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
               thing: true,
               maxMatches : 1,
                time : 20000,
                 maxUses: 1,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: :stopwatch:  انتهي الوقت `)
        })

        r.then((collected)=> {
            message.channel.send(`${collected.first().author} :ballot_box_with_check:  اجابتك صحيحه `);
        })
        })
    }
})







client.on('message', message => {
    if (message.content == prefix + "عواصم") {
        var x = ['السويد', 'البرتغال', 'ايطاليا', 'فلسطين', 'الاردن', 'مصر', 'السعوديه', 'الصومال', 'اليمن', 'قطر', 'البحرين', 'افغانستان', 'قبرص', 'اندونيسيا', 'الفلبين', 'تايلاند', 'البرازيل', 'الكويت', 'اثيوبيا', 'اليونان', 'موريتانيا', 'موريشيوس', 'بورت لويس'
        ];
        var x2 = ['ستوكهولم', 'لشبونة', 'روما' , 'القدس', 'عمان', 'القاهرة', 'الرياض', 'مقديشو', 'صنعاء', 'الدوحة ', 'المنامة', 'كابل', 'نيقوسيا', 'جاكرتا', 'مانيلا', 'بانكوك', 'برازيليا', 'الكويت', 'أديس أبابا', 'أثينا', 'نواكشوط', 'مابوتو'
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`لديك من الوقت 20 ثآنية لتكتب عاصمه __**${x[x3]}**__ `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
               thing: true,
               maxMatches : 1,
                time : 20000,
                 maxUses: 1,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: :stopwatch:  انتهي الوقت `)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} :ballot_box_with_check:  اجابتك صحيحه `);

        })
        })
    }
})




































client.on('message' , message => {
     if (message.content === prefix + "servers") {

if(!message.channel.guild) return;
  if(message.content < 1023) return
  const Embed11 = new Discord.RichEmbed()
.setAuthor(client.user.username,client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
.setDescription(`***مجموع السيرفرات ${client.guilds.size} \n \n${client.guilds.map(guilds => `- ${guilds.name}`).join('\n')}***`)
         message.channel.sendEmbed(Embed11)
    }
});
































//bcall


client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('ebc')){
 if(!message.author.id === '470500980342128650') return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
})








 
client.on('message', message => {

    if (message.content === prefix + "mutechannel") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("تم تقفيل الشات ✅ ")
           });
             }

if (message.content === prefix + "unmutechannel") {
    if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("تم فتح الشات✅")
           });
             }



});




























client.on('message', message => {
    if (message.content == prefix + "اسرع كتابه")  {
    var x = ['https://cdn.discordapp.com/attachments/434668048792944640/435056997231230976/PicsArt_04-15-03.13.47.jpg', 'https://cdn.discordapp.com/attachments/434668048792944640/435056997231230977/PicsArt_04-15-03.35.23.jpg', 'https://cdn.discordapp.com/attachments/434668048792944640/435056997688279040/PicsArt_04-15-03.34.41.jpg', 'https://cdn.discordapp.com/attachments/434668048792944640/435056997688279042/PicsArt_04-15-03.33.03.jpg', 'https://cdn.discordapp.com/attachments/434668048792944640/435056998216630273/PicsArt_04-15-03.37.56.jpg', 'https://cdn.discordapp.com/attachments/434668048792944640/435056998216630274/PicsArt_04-15-03.25.50.jpg', 'https://cdn.discordapp.com/attachments/434668048792944640/435056998753763348/PicsArt_04-15-03.40.14.jpg', 'https://cdn.discordapp.com/attachments/434668048792944640/435056998753763349/PicsArt_04-15-03.39.20.jpg', 'https://cdn.discordapp.com/attachments/434668048792944640/435056999256948737/PicsArt_04-15-03.20.42.jpg', 'https://cdn.discordapp.com/attachments/434668048792944640/435056999680442368/PicsArt_04-15-03.28.44.jpg'
        ];
        var x2 = ['مكرونة بالكريمة مركونة بالكرتون', 'فتى فنت في فناة فناه' ,'القصمان لبسوا قمصان واكلوا قرصان', 'قعقاع فوق قعقاع', 'الدول العربية كثيرة جدا ونتمنى ان تكون بسلام', 'خميس الخباز خبز خمس خبزات', 'شايب شيب شعر راسه', 'رسمنا بالرسام بريسم ومسمار', 'نادين نادي ندى', 'تلألأ المتلألؤون تلألؤا'
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`لديك من الوقت 20 ثآنية لتكتب __**${x[x3]}**__ `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
               thing: true,
               maxMatches : 1,
                time : 20000,
                 maxUses: 1,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: :stopwatch:  انتهي الوقت `)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} :ballot_box_with_check:  اجابتك صحيحه `);

        })
        })
    }
})









client.on('message', message => {
    let args = message.content.split(" ").slice(1);
    if (message.author.bot) return;
    if (!message.channel.guild) return;
    if (message.content.startsWith(prefix + 'clear')) {

        if (isNaN(args[0])) return message.channel.send('**Please supply a valid amount of messages to purge**');
        if (args[0] > 100) return message.channel.send('**Please supply a number less than 100**');

        message.channel.bulkDelete(args[0])
            .then(messages => message.channel.send(`**Successfully deleted \`${messages.size}/${args[0]}\` messages**`).then(msg => msg.delete({
                timeout: 5000
            })))
    }
});





client.on('message', message => {
     if(message.author.bot) return;

    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (command == "warn") {

        if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("**ما معك برمشن MANAGE MESSAGES**");
    let args = message.content.split(" ").slice(1);
                    let reason = message.content.split(" ").slice(2).join(" ");
                if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
        if (!reason) return message.reply("**اكتب سبب التحذير**");

        message.channel.sendMessage(args.join("  "))
        message.delete();


    }

});


























 client.on('message', message => {
              if(!message.channel.guild) return;
    if(message.content.startsWith(prefix + 'bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "ρʟαтıпυм-вσт";
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







client.on("message", message => {
  let args = message.content.split(" ").slice(1);
if (message.content.startsWith((prefix) + 'report')) {
      let user = message.mentions.users.first();
      let reason = args.slice(1).join(' ');
      let modlog = client.channels.find('name', '°report');
      if (!reason) return message.reply('**ضع سبباً مقنعاً**');
        if (message.mentions.users.size < 1) return message.reply('**يجب عليك عمل منشن للعضو المراد الابلاغ عليه**').catch(console.error);

  if (!modlog) return message.reply('**لا يوجد روم بأسم report**');
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('__نوع الرسالة__:', 'Report')
    .addField('__المراد الابلاغ عليه__:', `${user.username}#${user.discriminator} (${user.id}`)
    .addField('__صاحب الابلاغ__:', `${message.author.username}#${message.author.discriminator}`)
    .addField('__السبب__', reason);
    message.delete()
    return client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
        }
});










client.on('message', message => {
    if (message.content.startsWith(prefix + 'member')) {
        if (!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setThumbnail(message.author.avatarURL)
            .setFooter(message.author.username, message.author.avatarURL)

        .setDescription(`**:battery: حالة اعضاء السيرفر**
    
**:green_heart: Online**  **[ ${message.guild.members.filter(m=>m.presence.status == 'online').size} ]**
**:yellow_heart: Idle**       **[ ${message.guild.members.filter(m=>m.presence.status == 'idle').size} ]**  
**:heart: DND**     **[ ${message.guild.members.filter(m=>m.presence.status == 'dnd').size} ]**
**:black_heart: Offline** **[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]** `)

        message.channel.send()

        message.channel.sendEmbed(embed)
    }
});











	client.on('message', msg => {
  if (msg.content === '<@470610187372199947>') {
    msg.reply('**prefixs is := **');
  }
});











client.on('message', message => {   
if (message.author.boss) return;

if (!message.content.startsWith(prefix)) return;
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);
let args = message.content.split(" ").slice(1);
if (command == "mute") {
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انت لا تملك صلاحيات !! ").then(msg => msg.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
let user = message.mentions.users.first();
let muteRole = message.guild.roles.find("name", "Muted");
if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
let reason = message.content.split(" ").slice(2).join(" ");
message.guild.member(user).addRole(muteRole);
const muteembed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`Muted!`, user.displayAvatarURL)
.setThumbnail(user.displayAvatarURL)
.addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
.addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
.addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
.addField("User", user, true)  
message.channel.send({embed : muteembed});
var muteembeddm = new Discord.RichEmbed()
.setAuthor(`Muted!`, user.displayAvatarURL)
.setDescription(`
${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين 

 ${message.author.tag} تمت معاقبتك بواسطة

[ ${reason} ] : السبب

اذا كانت العقوبة عن طريق الخطأ تكلم مع المسؤلين 
`)
.setFooter(`في سيرفر : ${message.guild.name}`)
.setColor("RANDOM")
 user.send( muteembeddm);
}
if (command == "unmute") {
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انتا لا تملك صلاحيات").then(msg => msg.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
let user = message.mentions.users.first();
let muteRole = message.guild.roles.find("name", "Muted");
if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
let reason = message.content.split(" ").slice(2).join(" ");
message.guild.member(user).removeRole(muteRole);
const unmuteembed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`UnMute!`, user.displayAvatarURL)
.setThumbnail(user.displayAvatarURL)
.addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
.addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
.addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
.addField("User", user, true)  
message.channel.send({embed : unmuteembed}).then(msg => msg.delete(5000));
var unmuteembeddm = new Discord.RichEmbed()
.setDescription(`تم فك الميوت عنك ${user}`)
.setAuthor(`UnMute!`, user.displayAvatarURL)
.setColor("RANDOM")
  user.send( unmuteembeddm);
}
});










client.on('message', message => {
    
    let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);


if(command == "draw") {
    var Canvas = require('canvas')
  , Image = new Canvas.Image
  , canvas = new Canvas(450, 170)
  , ctx = canvas.getContext('2d');
  ctx.font = '30px Impact';
  let args = message.content.split(" ").slice(1);
  
Image.src = canvas.toBuffer();

    console.log(Image);
ctx.drawImage(Image, 0, 0, Image.width / 470, Image.height / 170);
ctx.fillText(args.join("  "),110, 70);


ctx.beginPath();
ctx.lineTo(50, 102);
ctx.stroke();

message.channel.sendFile(canvas.toBuffer());
}
}).on('ready', () => {

});





client.on('message', message => {

  if (message.content.startsWith(prefix + "contact")) {
  if (!message.channel.guild) return;
  let args = message.content.split(" ").slice(1).join(' ');
  client.users.get("416523296805355520").send( 
      "\n" + "**" + "● السيرفر :" + "**" +
      "\n" + "**" + "» " + message.guild.name + "**" +
      "\n" + "**" + " ● المرسل : " + "**" +
      "\n" + "**" + "» " + message.author.tag + "**" +
      "\n" + "**" + " ● الرسالة : " + "**" +
      "\n" + "**" + args + "**")
  }
  });









client.on('message' , message => { 
     if (message.content === prefix + "servers") {

if(!message.channel.guild) return;
  if(message.content < 1023) return
  const Embed11 = new Discord.RichEmbed()
.setAuthor(client.user.username,client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
.setDescription(`***مجموع السيرفرات ${client.guilds.size} \n \n${client.guilds.map(guilds => `- ${guilds.name}`).join('\n')}***`)
         message.channel.sendEmbed(Embed11)
    }
});


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


          client.on('message', message => {
           if (message.content.startsWith(prefix + "id")) {
     var args = message.content.split(" ").slice(1);
     let user = message.mentions.users.first();
     var men = message.mentions.users.first();
        var heg;
        if(men) {
            heg = men
        } else {
            heg = message.author
        }
      var mentionned = message.mentions.members.first();
         var h;
        if(mentionned) {
            h = mentionned
        } else {
            h = message.member
        }
               moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
    .setColor("RANDOM")
    .addField(': دخلت السيرفر في', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
    .addField(': دخودحلت للدسكورد في', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true)
   .setThumbnail(message.author.avatarURL)
    message.channel.send(id)
}       });




































client.on('message', message => {
    if (message.content === prefix + "build-3am") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);

    message.guild.createChannel('chat', 'text')
    message.guild.createChannel('bo7', 'text')
    message.guild.createChannel('pic', 'text')
    message.guild.createChannel('cut', 'text')
    message.guild.createChannel('bot', 'text')
    message.guild.createChannel('welcome', 'text')
    message.guild.createChannel('suggestion', 'text')
    message.guild.createChannel('report', 'text')
    message.guild.createChannel('questions', 'text')
    message.guild.createChannel('▓▬▬▬ADMNS▬▬▬▓', 'voice')
    message.guild.createChannel('Owner - مالك السيرفر', 'voice')
    message.guild.createChannel('Co Owner - نائب الرئيس', 'voice')
    message.guild.createChannel('Dev - مبرمج السيرفر', 'voice')
    message.guild.createChannel('Admin - مشرف', 'voice')
    message.guild.createChannel('Mod - مود', 'voice')
    message.guild.createChannel('▓▬▬▬OTHER▬▬▬▓', 'voice')
    message.guild.createChannel('[ R E C ] 🎥', 'voice')
    message.guild.createChannel('YouTubers - يوتيوبرز', 'voice')
    message.guild.createChannel('VIP + - كبار الشخصيات بلس', 'voice')
    message.guild.createChannel('VIP - كبار الشخصيات', 'voice')
    message.guild.createChannel('Friends - ا��دقاء', 'voice')
    message.guild.createChannel('▓▬▬▬WEL▬▬▬▓', 'voice')
    message.guild.createChannel('Help - مساعدة', 'voice')
    message.guild.createChannel('Ξ〖 ـراحـاتـكمـ 💡〗', 'voice')
    message.guild.createChannel('▓▬▬▬♚▬▬▬▓', 'voice')
    message.guild.createChannel('♧ Ξ〖 🎤  سواليف 📣〗', 'voice')
    message.guild.createChannel('♢ Ξ〖 🎤 مواهب 🎵〗', 'voice')
    message.guild.createChannel('❋ Ξ〖 🎈 فعاليات 🎉〗', 'voice')
    message.guild.createChannel('❋ Ξ〖  kaaba القرآن الكريم  〗', 'voice')
    message.guild.createChannel('▓▬▬▬♚▬▬▬▓', 'voice')
    message.guild.createChannel('☆  Ξ〖 underage  السجن العام knife 〗', 'voice')
    message.guild.createChannel('▓▬▬▬Games▬▬▬▓', 'voice')
    message.guild.createChannel('Clash of Clans | كلاش أوف كلانز', 'voice')
    message.guild.createChannel('Clash Royal | كلاش رويال', 'voice')
    message.guild.createChannel('Hajwala  Online | هجولة أون لاين', 'voice')
    message.guild.createChannel('Bullet force | بولت فورس', 'voice')
    message.guild.createChannel('MTA | ام تي اي', 'voice')
    message.guild.createChannel('Ludo Star | لودو ستار', 'voice')
    message.guild.createChannel('▓▬▬▬Private▬▬▬▓', 'voice')
    message.guild.createChannel('✿Tow✿', 'voice')
    message.guild.createChannel('✿Three✿', 'voice')
    message.guild.createChannel('✿Four✿', 'voice')
    message.guild.createChannel('✿Five✿', 'voice')
    message.guild.createChannel('✿Six✿', 'voice')
    message.guild.createChannel('▓▬▬▬AFK▬▬▬▓', 'voice')
    message.guild.createChannel('Away From keyboard AFK', 'voice')
message.channel.sendMessage('**Text Channel Was Succsesfluy Created**')
message.channel.sendMessage('**__NOTE__ : All the Permission was not made**')
message.channel.sendMessage('**:white_check_mark:  تم صنع الرومات بنجاح شكرالك**')
message.channel.sendMessage('**__ملاحظه__ : كل البيرمشنات لم تصنع**')
}
});








client.on('message', message => {

if(message.content.split(' ')[0] == prefix + 'delete-v') {  // delete all channels
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) return message.reply("**You Don't Have ` MANAGE_CHANNELS ` Permission**");
if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**I Don't Have ` MANAGE_CHANNELS ` Permission**");
message.guild.channels.forEach(m => {
m.delete();
});

}
   


if(message.content.split(' ')[0] == prefix + 'delete-r') { // delete all roles
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return message.reply("**You Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return message.reply("**I Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
message.guild.roles.forEach(m => {
m.delete();
});
message.reply("`تم حذف جميع الرتب بنجاح`")
}
});



















      client.on('message',function(message) {
  if (message.author.bot) return;


                  if(!message.channel.guild) return;

                    if (message.content === prefix + "count") {
 const embed = new Discord.RichEmbed()
    .setThumbnail('https://cdn4.iconfinder.com/data/icons/thin-network-sharing-2/24/thin-1532_world_international_connected_worldwide-512.png')
    .setDescription(`**Members info :sparkles:
    
:radio_button:  All Members : ${message.guild.memberCount}
:diamond_shape_with_a_dot_inside:   Humans:  ${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size}
:bulb: bots: ${message.guild.members.filter(m=>m.user.bot).size} **`)
         message.channel.send({embed});

    }
      });  















    client.on('guildCreate', guild => {
        var embed = new Discord.RichEmbed()
        .setColor(0x5500ff)
        .setDescription(`**شكراً لك لإضافه البوت الى سيرفرك :blush:**`)
            guild.owner.send(embed)
      });

      client.on('guildDelete', guild => {
        var embed = new Discord.RichEmbed()
        .setColor(0x5500ff)
        .setDescription(`**نتمى انكم استمتعتم ب البوت :wink:**`)
            guild.owner.send(embed)
      });


 


















client.on('message' , message => {


if (message.author.bot) return;
if (message.content.startsWith(prefix + "contact")) {
if (!message.channel.guild) return;



let args = message.content.split(" ").slice(1).join(" ");



client.users.get("470500980342128650").send(
    "\n" + "**" + "● السيرفر :" + "**" +
    "\n" + "**" + "» " + message.guild.name + "**" +
    "\n" + "**" + " ● المرسل : " + "**" +
    "\n" + "**" + "» " + message.author.tag + "**" +
    "\n" + "**" + " ● الرسالة : " + "**" +
    "\n" + "**" + args + "**")

let embed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.avatarURL)
     .setDescription(' ✅ | تم ارسال الرسالة الى صاحب البوت ')
     .setThumbnail(message.author.avatarURL)
                                                

message.channel.send(embed);


}
    
});


client.on('message' , message => {

if (message.author.bot) return;
if (message.content.startsWith(prefix + "contact")) {
if (!message.channel.guild) return;



let args = message.content.split(" ").slice(1).join(" ");



client.users.get("470500980342128650").send(
    "\n" + "**" + "● السيرفر :" + "**" +
    "\n" + "**" + "» " + message.guild.name + "**" +
    "\n" + "**" + " ● المرسل : " + "**" +
    "\n" + "**" + "» " + message.author.tag + "**" +
    "\n" + "**" + " ● الرسالة : " + "**" +
    "\n" + "**" + args + "**")

let embed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.avatarURL)



}
    
});










client.on('message', message => {
    let args = message.content.split(" ").slice(1).join(" ")
    if (message.content.startsWith(prefix + 'embed')) {
        if(!args) { return  message.channel.send({embed:{description:"**Uesage** `^embed {something}`"}});

        } else {
            message.channel.send({embed:{description:args}})
        }
    }
});






















client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === prefix + "مسح") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
    msg.channel.send("ضع عددا من الرسائل التي تريد مسحها");
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
    msg.channel.send(`${emoji} Deleted ` + "`" + textxt + "` messages");
        }    
    }
}
});





client.on('message', message => { 
    if (message.content.startsWith(prefix + 'emojilist')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle('➠ Emojis') 
            .setAuthor(message.guild.name, message.guild.iconURL) 
            .setColor('RANDOM') 
            .setDescription(List) 
            .setFooter(message.guild.name) 
        message.channel.send(EmojiList) 
    }
});









const sh3r = [  ' يا صرخة إحساسي وخنقة دموعي إذا الصّدف جابت مكاني مكانه من داخلي إحساس يعلن خضوعي وفي ظاهري رجال حافظ كيانه',  ' ظامي الوجدان وأشواقك نهر اسقني من عذب معسول الغدير الرّموش السّود والطّرف الحور ليتها عن لحظها لي تستخير أول المشوار في حبّك قهر وآخر المشوار عمري به خطير',  ' حبيبي عادت أسراب الحمام وعادوا الغيّاب وأنا من كثر ما شفت الوجيه اشتقت لأحبابي حبيبي من كثر ما اشتقت لك صرت أكره الأبواب ليّا شفت الوصل، وأهل الوصل ما عتّبوا بابي',  ' أي سرّ يعتري شوقي إليك إنّ شوقي حائر في مقلتيك كلّنا أسرى صبابات الهوى فادنُ منّي إنّني ملك يديك',  ' إِن الغرورَ إِذا تملَّكَ أمّةً كالزّهرِ يخفي الموتَ وهو زؤامُ',  ' إِذا عصفَ الغرورُ برأسِ غِرٍّ توّهمَ أن منكبَهُ جَناحُ',  ' أيّهذا الشّاكي و ما بك داء كن جميلاً ترى الوجود جميلا',  ' في هذه البقاع القصيّة هذه البقاع المهجورة حتى من عواء الذئب أسرجُ ضوء الشّمعة وأسافر',  ' يا نفسُ صَبْراً على ما قد مَنّيتِ به فالحرُّ يصبرُ عند الحادثِ الجَلَلِ',  ' وحسبُ الفتى إِن لمْ ينلْ ما يريدُه مع الصّبرِ أن يُلفى مقيماً على الصّبر',  '‏ صَبْراً جميلاً على مانابَ من حَدَثٍ والصبرُ ينفعُ أحياناً إِذا صبروا الصّبرُ أفضلُ شيءٍ تستعينُ به على الزّمانِ إِذا ما مسَّكَ الضّررُ',]
client.on('message', message => {
     if (message.content ==="=شعر") {
  if(!message.channel.guild) return message.reply('** This command only for servers **');
var client= new Discord.RichEmbed()
.setTitle("شعر..")
.setColor('#FF0000')
.setDescription(`${sh3r[Math.floor(Math.random() * sh3r.length)]}`)
.setImage("https://cdn.discordapp.com/attachments/442659848019116032/443844544308576266/unknown.png")
               .setTimestamp()
message.channel.sendEmbed(client);
            message.react('✅')
}
});



















client.on('message', message => {
    if (message.content === "=اسالني") {
         message.react('🤔','👌')
        var x = ['اين يلعب مصطفي فتحي؟', 'ما هو اسم ملعب بارشالونة', 'ما هو يوم الحج الأكبر؟', 'ما هو أطول أنهار أوربا ؟', 'ما هو اسم بيت الدجاج', 'ما هو أول بنك قام بالنشاط المصرفي في السعودية عام 1926م' , 'ما هو أول جامع أقيم في مصر','ما هو أطول نهر في آسيا','ما هو أقرب كوكب إلى الشمس','ما هو الحيوان الذي يُسمى البهنس','ما هو اول مسجد أسس بالمدينة','متى وقع صلح الحديبية عام 6هـ او 3هـ او 2هـ؟','متى قامت أمريكا بأول رحلة فضائية','متى كانت غزوة خيبر؟','ما هي السورة التي تبدأ بقوله تعالى " يا أيها النبي اتق الله ولا تطع الكافرين والمنافقين إن الله كان عليما حكيما ".اجب؟','ما هي السورة التي يطلق عليها عروس القرآن','ماذا يسمى من لايقرأ ولايكتب','ماهي أول دولة استخدمت طابع البريد','ماهو شعار الولايات المتحدة الامريكية','ماهو اذكي الحيوانات','من هو مكتشف أمريكا','مامعنى "فرعون" اجب؟','ماهو اقرب كوكب إلى الارض','ما هي نسبه المياه من الكره الارضيه?','كم عدد السجدات في القرآن الكريم؟','من هو بطل كاس العالم في عام 1966','أين أفتتح اول متحف في العالم?','ماأسم أنثى الحمار?','كم تبلغ درجه حراره الشمس؟','من هي مدينة الضباب','أين توجد أطول سكة حديد في العالم?'
        ];
        var x2 = ['التعاون', 'كامب نو', 'يوم النحر', 'الدانوب', 'قن', 'البنك الهولندي', 'جامع عمرو بن العاص','اليانجستي','عطارد','الاسد','مسجد قباء','6','سنة 1962','عام 7هـ','الاحزاب','سورة الرحمن','امي','بريطانيا','النسر الاصلع','الدلفين','كولمبس','البيت الكبير','الزهره','71%','15 سجدة','انكلترا ','القاهرة','الاتان','15 مليون درجه مئوية','لندن','كندا'
        ];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`📢 امامك دقيقة لحل الاسئلة , السؤال يقول :  __**${x[x3]}**__ `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
               thing: true,
               maxMatches : 1,
                time : 60000,
                 maxUses: 1,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح `)
        })

        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الجواب الصحيح  `);
            message.react('✅')
        })
        })
    }
})







client.on('message', msg => {
  if(msg.author.bot) return;
  
  if(msg.content === '=links') {
   client.guilds.forEach(g => {
      
      let l = g.id
      g.channels.get(g.channels.first().id).createInvite({
        maxUses: 5,
        maxAge: 86400
      }).then(i => msg.channel.send(`${g.name} | <https://discord.gg/${i.code}> | ${l}`))


    })
  }
  
})


client.on("guildCreate", guild => {
    client.channels.get("470623107418161152").send(' ***  BOT  ***   **Join To**   ***[ ' + `${guild.name}` + ' ]***   ,   **  Owner  **  ' + ' ***[ ' + '<@' + `${guild.owner.user.id}` + '>' + ' ]***  **|**  ***[ ' + '<' + `${guild.owner.user.username}` + '>' + ' ]***')
    });
    
    client.on("guildDelete", guild => {
    client.channels.get("470623107418161152").send(' ***  BOT  ***   **Leave From**   ***[ ' + `${guild.name}` + ' ]***   ,   **  Owner  **  ' + ' ***[ ' + '<@' + `${guild.owner.user.id}` + '>' + ' ]***  **|**  ***[ ' + '<' + `${guild.owner.user.username}` + '>' + ' ]***')
    });

client.on("guildCreate", guild => {
    client.channels.get("470622981543034880").send(' ***  BOT  ***   **Join To**   ***[ ' + `${guild.name}` + ' ]***   ,   **  Owner  **  ' + ' ***[ ' + '<@' + `${guild.owner.user.id}` + '>' + ' ]***  **|**  ***[ ' + '<' + `${guild.owner.user.username}` + '>' + ' ]***')
    });
    






  client.on('guildMemberAdd', member => {
      let channel = member.guild.channels.find('name', 'welcome');
      let xsattt = member.user.avatarURL
        if (!channel) return;
      let embed = new Discord.RichEmbed()
          .setColor('RANDOM')
          .setThumbnail(xsattt)
          .addField(`Welcome To Server \*\*\_\_${member.guild.name}\_\_\*\*`,`『【<@${member.id}>】』`)
    
      });








client.on('message', message => {
    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "1",
                    color: "#cf1111",
                    permissions: []
     })
	}
});
client.on('message', message => {
	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "2",
                    color: "#df5d11",
                    permissions: []
     })
	}
});
client.on('message', message => {
	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "3",
                    color: "#dfab11",
                    permissions: []
     })
	}
});
	client.on('message', message => {
	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "4",
                    color: "#dfde11",
                    permissions: []
     })
	}});	
	client.on('message', message => {
	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "5",
                    color: "#a8df11",
                    permissions: []
     })
	}});	
	client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "6",
                    color: "#64c40c",
                    permissions: []
     })
	}});	
	client.on('message', message => {
	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "7",
                    color: "#38c30c",
                    permissions: []
     })
	}});	
	client.on('message', message => {
	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "8",
                    color: "#0cc33f",
                    permissions: []
     })
	}});	
client.on('message', message => {
	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "9",
                    color: "#0cc36c",
                    permissions: []
     })
}});	
client.on('message', message => {
	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "10",
                    color: "#0cc394",
                    permissions: []
     })
}});	
	client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "11",
                    color: "#0cc3ad",
                    permissions: []
     })
	}});	
client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "12",
                    color: "#0cb1c3",
                    permissions: []
     })
}});	
client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "13",
                    color: "#0c9ec3",
                    permissions: []
     })
}});
client.on('message', message => {
	
	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "14",
                    color: "#0c8ac3",
                    permissions: []
     })
}});
	client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "15",
                    color: "#0c6cc3",
                    permissions: []
     })
	}});
client.on('message', message => {
	
	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "16",
                    color: "#0c49c3",
                    permissions: []
     })
}});
client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "17",
                    color: "#0c2bc3",
                    permissions: []
     })
}});
client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "18",
                    color: "#150cc3",
                    permissions: []
     })
}});
	
	client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "19",
                    color: "#880cc3",
                    permissions: []
     })
	}});	
	
	client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "20",
                    color: "#b50cc3",
                    permissions: []
     })
	}});	
	
	client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "21",
                    color: "#c30cb8",
                    permissions: []
     })
	}});	

client.on('message', message => {
	
	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "22",
                    color: "#c30c90",
                    permissions: []
     })
}});
	
	client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "23",
                    color: "#c30c63",
                    permissions: []
     })
	}});	
	
	client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "24",
                    color: "#c30c4a",
                    permissions: []
     })
	}});	
	
	client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "25",
                    color: "#c30c31",
                    permissions: []
     })
	}});	

	client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "26",
                    color: "#ff0000",
                    permissions: []
     })
	}});
	
	client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "27",
                    color: "#ff4200",
                    permissions: []
     })
	}});	
	
	client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "28",
                    color: "#ff6c00",
                    permissions: []
     })
		}});	
	
client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "29",
                    color: "#ff8f00",
                    permissions: []
     })
}});	
	
client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "30",
                    color: "#ffd400",
                    permissions: []
     })
}});	
	client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "31",
                    color: "#e4ff00",
                    permissions: []
     })
	}});	
client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "32",
                    color: "#adff00",
                    permissions: []
     })
}});	
client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "33",
                    color: "#60ff00",
                    permissions: []
     })
}});	
	
client.on('message', message => {
	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "34",
                    color: "#14ff00",
                    permissions: []
     })
}});	
client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "35",
                    color: "#00ff40",
                    permissions: []
     })
}});	
client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "36",
                    color: "#00ff8c",
                    permissions: []
     })
}});	
	client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "37",
                    color: "#00ffc4",
                    permissions: []
     })
	}});	
client.on('message', message => {
	
	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "38",
                    color: "#00e7ff",
                    permissions: []
     })
}});	
client.on('message', message => {
	
	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "39",
                    color: "#009aff",
                    permissions: []
     })
}});	
	
client.on('message', message => {
	
	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "40",
                    color: "#0055ff",
                    permissions: []
     })
}});	
client.on('message', message => {
	
	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "41",
                    color: "#0001ff",
                    permissions: []
     })
}});	
	client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "42",
                    color: "#6700ff",
                    permissions: []
     })
	}});	
client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "43",
                    color: "#ad00ff",
                    permissions: []
     })
	}});	
	client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "44",
                    color: "#dd00ff",
                    permissions: []
     })
	}});	
	client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "45",
                    color: "#ff00fe",
                    permissions: []
     })
	}});	
client.on('message', message => {
	
	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "46",
                    color: "#ff00cd",
                    permissions: []
     })
}});	
	client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "47",
                    color: "#ff0096",
                    permissions: []
     })
	}});	
client.on('message', message => {
	
	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "48",
                    color: "#ff0057",
                    permissions: []
     })
}});	
	client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "49",
                    color: "#ff002d",
                    permissions: []
     })
	}});	
	
	client.on('message', message => {

	    if(message.content === prefix + 'cr-colors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "50",
                    color: "#050505",
                    permissions: []
     })
				
	           message.channel.sendMessage({embed: new Discord.RichEmbed()
     .setColor('GREEN').setAuthor(`${message.author.username}'`, message.author.avatarURL).setDescription('``جاري العمل على الالوان |✅``')
	 });
				
	}});







var x1 = "=color 1"
var x2 = "=color 2"
var x3 = "=color 3"
var x4 = "=color 4"
var x5 = "=color 5"
var x6 = "=color 6"
var x7 = "=color 7"
var x8 = "=color 8"
var x9 = "=color 9"
var x10 = "=color 10"
var x11 = "=color 11"
var x12 = "=color 12"
var x13 = "=color 13"
var x14 = "=color 14"
var x15 = "=color 15"
var x16 = "=color 16"
var x17 = "=color 17"
var x18 = "=color 18"
var x19 = "=color 19"
var x20 = "=color 20"
var x21 = "=color 21"
var x22 = "=color 22"
var x23 = "=color 23"
var x24 = "=color 24"
var x25 = "=color 25"
var x26 = "=color 26"
var x27 = "=color 27"
var x28 = "=color 28"
var x29 = "=color 29"
var x30 = "=color 30"
var x31 = "=color 31"
var x32 = "=color 32"
var x33 = "=color 33"
var x34 = "=color 34"
var x35 = "=color 35"
var x36 = "=color 36"
var x37 = "=color 37"
var x38 = "=color 38"
var x39 = "=color 39"
var x40 = "=color 40"
var x41 = "=color 41"
var x42 = "=color 42"
var x43 = "=color 43"
var x44 = "=color 44"
var x45 = "=color 45"
var x46 = "=color 46"
var x47 = "=color 47"
var x48 = "=color 48"
var x49 = "=color 49"
var x50 = "=color 50"
client.on('message', message => {
	if (message.content === x1) {
	    if(!message.channel.guild) return;
		message.member.addRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
	message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));
message.member.removeRole(message.guild.roles.find("name", "86"));
message.member.removeRole(message.guild.roles.find("name", "87"));
message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}

if (message.content === x2) {
    if(!message.channel.guild) return;
	message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.addRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
	message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
if (message.content === x3) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.addRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
if (message.content === x4) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.addRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
if (message.content === x5) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.addRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
if (message.content === x6) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.addRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
if (message.content === x7) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.addRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
if (message.content === x8) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.addRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
if (message.content === x9) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.addRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
if (message.content === x10) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.addRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	
	if (message.content === x11) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
message.member.removeRole(message.guild.roles.find("name", "10"));
	message.member.addRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x12) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
message.member.addRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x13) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
    message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
message.member.addRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x14) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
message.member.addRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x15) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
message.member.addRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x16) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
message.member.addRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x17) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
message.member.addRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x18) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
message.member.addRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
		if (message.content === x19) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
message.member.addRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x20) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
message.member.addRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x21) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
message.member.addRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x22) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
message.member.addRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x23) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
message.member.addRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x24) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
message.member.addRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x25) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
message.member.addRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x26) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
message.member.addRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x27) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
message.member.addRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x28) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
message.member.addRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x29) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
message.member.addRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x30) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
message.member.addRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x31) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
message.member.addRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x32) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
message.member.addRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x33) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.addRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x34) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.addRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x35) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.addRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x36) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.addRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x37) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.addRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x38) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.addRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x39) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.addRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x40) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.addRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x41) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.addRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x42) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.addRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x43) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.addRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x44) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.addRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x45) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.addRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x46) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.addRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x47) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.addRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x48) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.addRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x49) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.addRole(message.guild.roles.find("name", "49"));
message.member.removeRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
	
	if (message.content === x50) {
    if(!message.channel.guild) return;
		message.member.removeRole(message.guild.roles.find("name", "1"));
    message.member.removeRole(message.guild.roles.find("name", "2"));
    message.member.removeRole(message.guild.roles.find("name", "3"));
    message.member.removeRole(message.guild.roles.find("name", "4"));
    message.member.removeRole(message.guild.roles.find("name", "5"));
    message.member.removeRole(message.guild.roles.find("name", "6"));
    message.member.removeRole(message.guild.roles.find("name", "7"));
    message.member.removeRole(message.guild.roles.find("name", "8"));
    message.member.removeRole(message.guild.roles.find("name", "9"));
     message.member.removeRole(message.guild.roles.find("name", "10"));
		message.member.removeRole(message.guild.roles.find("name", "11"));
	message.member.removeRole(message.guild.roles.find("name", "12"));
	message.member.removeRole(message.guild.roles.find("name", "13"));
	message.member.removeRole(message.guild.roles.find("name", "14"));
	message.member.removeRole(message.guild.roles.find("name", "15"));
	message.member.removeRole(message.guild.roles.find("name", "16"));
	message.member.removeRole(message.guild.roles.find("name", "17"));
	message.member.removeRole(message.guild.roles.find("name", "18"));
	message.member.removeRole(message.guild.roles.find("name", "19"));
	message.member.removeRole(message.guild.roles.find("name", "20"));
	message.member.removeRole(message.guild.roles.find("name", "21"));
	message.member.removeRole(message.guild.roles.find("name", "22"));
	message.member.removeRole(message.guild.roles.find("name", "23"));
	message.member.removeRole(message.guild.roles.find("name", "24"));
	message.member.removeRole(message.guild.roles.find("name", "25"));
	message.member.removeRole(message.guild.roles.find("name", "26"));
	message.member.removeRole(message.guild.roles.find("name", "27"));
	message.member.removeRole(message.guild.roles.find("name", "28"));
	message.member.removeRole(message.guild.roles.find("name", "29"));
	message.member.removeRole(message.guild.roles.find("name", "30"));
	message.member.removeRole(message.guild.roles.find("name", "31"));
	message.member.removeRole(message.guild.roles.find("name", "32"));
message.member.removeRole(message.guild.roles.find("name", "33"));
message.member.removeRole(message.guild.roles.find("name", "34"));
message.member.removeRole(message.guild.roles.find("name", "35"));
message.member.removeRole(message.guild.roles.find("name", "36"));
message.member.removeRole(message.guild.roles.find("name", "37"));
message.member.removeRole(message.guild.roles.find("name", "38"));
message.member.removeRole(message.guild.roles.find("name", "39"));
message.member.removeRole(message.guild.roles.find("name", "40"));
message.member.removeRole(message.guild.roles.find("name", "41"));
message.member.removeRole(message.guild.roles.find("name", "42"));
message.member.removeRole(message.guild.roles.find("name", "43"));
message.member.removeRole(message.guild.roles.find("name", "44"));
message.member.removeRole(message.guild.roles.find("name", "45"));
message.member.removeRole(message.guild.roles.find("name", "46"));
message.member.removeRole(message.guild.roles.find("name", "47"));
message.member.removeRole(message.guild.roles.find("name", "48"));
message.member.removeRole(message.guild.roles.find("name", "49"));
message.member.addRole(message.guild.roles.find("name", "50"));
message.member.removeRole(message.guild.roles.find("name", "51"));
message.member.removeRole(message.guild.roles.find("name", "52"));
message.member.removeRole(message.guild.roles.find("name", "53"));
message.member.removeRole(message.guild.roles.find("name", "54"));
message.member.removeRole(message.guild.roles.find("name", "55"));
message.member.removeRole(message.guild.roles.find("name", "56"));
message.member.removeRole(message.guild.roles.find("name", "57"));
message.member.removeRole(message.guild.roles.find("name", "58"));
message.member.removeRole(message.guild.roles.find("name", "59"));
message.member.removeRole(message.guild.roles.find("name", "60"));
message.member.removeRole(message.guild.roles.find("name", "61"));
message.member.removeRole(message.guild.roles.find("name", "62"));
message.member.removeRole(message.guild.roles.find("name", "63"));
message.member.removeRole(message.guild.roles.find("name", "64"));
message.member.removeRole(message.guild.roles.find("name", "65"));
message.member.removeRole(message.guild.roles.find("name", "66"));
message.member.removeRole(message.guild.roles.find("name", "67"));
message.member.removeRole(message.guild.roles.find("name", "68"));
message.member.removeRole(message.guild.roles.find("name", "69"));
message.member.removeRole(message.guild.roles.find("name", "70"));
message.member.removeRole(message.guild.roles.find("name", "71"));
message.member.removeRole(message.guild.roles.find("name", "72"));
message.member.removeRole(message.guild.roles.find("name", "73"));
message.member.removeRole(message.guild.roles.find("name", "74"));
message.member.removeRole(message.guild.roles.find("name", "75"));
message.member.removeRole(message.guild.roles.find("name", "76"));
message.member.removeRole(message.guild.roles.find("name", "77"));
message.member.removeRole(message.guild.roles.find("name", "78"));
message.member.removeRole(message.guild.roles.find("name", "79"));
message.member.removeRole(message.guild.roles.find("name", "80"));
message.member.removeRole(message.guild.roles.find("name", "81"));
message.member.removeRole(message.guild.roles.find("name", "82"));
message.member.removeRole(message.guild.roles.find("name", "83"));
message.member.removeRole(message.guild.roles.find("name", "84"));
message.member.removeRole(message.guild.roles.find("name", "85"));

message.member.removeRole(message.guild.roles.find("name", "86"));

message.member.removeRole(message.guild.roles.find("name", "87"));

message.member.removeRole(message.guild.roles.find("name", "88"));
message.member.removeRole(message.guild.roles.find("name", "89"));
message.member.removeRole(message.guild.roles.find("name", "90"));
message.member.removeRole(message.guild.roles.find("name", "91"));
message.member.removeRole(message.guild.roles.find("name", "92"));
message.member.removeRole(message.guild.roles.find("name", "93"));
message.member.removeRole(message.guild.roles.find("name", "94"));
message.member.removeRole(message.guild.roles.find("name", "95"));
message.member.removeRole(message.guild.roles.find("name", "96"));
message.member.removeRole(message.guild.roles.find("name", "97"));
message.member.removeRole(message.guild.roles.find("name", "98"));
message.member.removeRole(message.guild.roles.find("name", "99"));
message.member.removeRole(message.guild.roles.find("name", "100"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`تم تغير اللون بنجاح`)
  message.channel.sendEmbed(embed);
	}
  if (message.content === '=colors') {
      if (!message.channel.guild) return;
    message.channel.sendFile('http://bl3rbe.net/up/Iiye8A80B.png');
  }
	
});


















  client.on('message', async message => {
  if(message.content.startsWith(prefix + "ch")) {
    await message.channel.send("ارسل اسم الروم").then(e => {
    let filter = m => m.author.id === message.author.id
    let name = '';
    let time = '';
    let type = '';
    let limit = '';

   
    message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
    .then(collected => {
      name = collected.first().content
      collected.first().delete()



e.edit("ارسل مدة الروم بالدقائق لااقل من 2 ولا اعلى من 180")
message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
.then(co => {
if(isNaN(co.first().content)) return message.reply("الوقت بالدقائق ! ارقام فقطٍ");
if(co.first().content > 180 || co.first().content < 2) return message.channel.send("لا اقل من دقيقتان ولا اكثر من 180 دقيقه")
  time = co.first().content
co.first().delete()
  e.edit("ارسل نوع الروم text, voice")
message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
.then(col => {
  type = col.first().content
col.first().delete()
e.edit("ارسل عدد الاعضاء الذين يستطيعون الدخول")
message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
.then(coll => {
  if(isNaN(coll.first().content)) return message.reply("عدد الاعضاء يكون بالارقام فقط");
    limit = coll.first().content
coll.first().delete()

  e.edit("جاري اعداد الغرفه الرجاء الانتضار...")
  message.guild.createChannel(name, type).then(c => {
    c.edit({
      userLimit: limit
    })
    setTimeout(() => {
      c.delete()
      message.channel.send("تم انقضاء الوقت")
    }, Math.floor(time*60000))
    
  })
  e.edit("تم انشاء الغرفه استمتع")

})
})
})
})
})

  }
})
  







client.on("message", message => {
 
    var args = message.content.split(' ').slice(1);
    var msg = message.content.toLowerCase();
    if( !message.guild ) return;
    if( !msg.startsWith( prefix + 'role' ) ) return;
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');
    if( msg.toLowerCase().startsWith( prefix + 'rerole' ) ){
        if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
        if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
        var role = msg.split(' ').slice(2).join(" ").toLowerCase();
        var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
        if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
            message.mentions.members.first().removeRole( role1 );
            return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
        }
        if( args[0].toLowerCase() == "all" ){
            message.guild.members.forEach(m=>m.removeRole( role1 ))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
        } else if( args[0].toLowerCase() == "bots" ){
            message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
        } else if( args[0].toLowerCase() == "humans" ){
            message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
        }  
    } else {
        if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
        if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
        var role = msg.split(' ').slice(2).join(" ").toLowerCase();
        var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
        if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
            message.mentions.members.first().addRole( role1 );
            return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
        }
        if( args[0].toLowerCase() == "all" ){
            message.guild.members.forEach(m=>m.addRole( role1 ))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
        } else if( args[0].toLowerCase() == "bots" ){
            message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
        } else if( args[0].toLowerCase() == "humans" ){
            message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
        }
    }
});







  client.on("ready", () => {

    var guild;

    while (!guild)

        guild = client.guilds.get("470621953498284043");

    guild.fetchInvites().then((data) => {

        data.forEach((Invite, key, map) => {

            var Inv = Invite.code;

            dat[Inv] = Invite.uses;

        });

    });

});

 

 

 

client.on("guildMemberAdd", (member) => {

    let channel = member.guild.channels.get("470621953502478337");

    if (!channel) {

        console.log("!the channel id it's not correct");

        return;

    }

    if (member.id == client.user.id) {

        return;

    }

    console.log('-');

    var guild;

    while (!guild)

        guild = client.guilds.get("470621953498284043");

    guild.fetchInvites().then((data) => {

        data.forEach((Invite, key, map) => {

            var Inv = Invite.code;

            if (dat[Inv])

                if (dat[Inv] < Invite.uses) {

 channel.send(`تم دعوته بواسطة  ${Invite.inviter} `) ;       

 }

            dat[Inv] = Invite.uses;

       

       });

    });

});







  client.on('message',async message => {
  let mention = message.mentions.members.first();
  let acRoom = client.channels.get('471794386661933077');
  if(message.content.startsWith(prefix + "قبول")) {
  if(message.guild.id !== '470621953498284043') return;
  if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
  if(!mention) return message.reply("منشن شخص");

  acRoom.send(`**${mention}تم قبول واعطائك رتبة سبورت**`)
  }
});



  client.on('message',async message => {
  let mention = message.mentions.members.first();
  let acRoom = client.channels.get('471794386661933077');
  if(message.content.startsWith(prefix + "رفض")) {
  if(message.guild.id !== '470621953498284043') return;
  if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
  if(!mention) return message.reply("منشن شخص");

  acRoom.send(`**${mention} تم رفضك للاسف**`)
  }
});
  
  client.on('message', async message => {
            if(message.content.includes('discord.gg')){ 
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
            .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('` انت معاقب ميوت شاتي بسبب نشر سرفرات ان كان عن طريق الخطا **ف** تكلم مع الادارة `');
   
       
    }
})
  
  
  
  
  client.on('voiceStateUpdate', (codes, ReBeL) => {
if(ReBeL.voiceChannelID !== "471801722319142923") return console.log("أيرور . ");
ReBeL.guild.createChannel(ReBeL.user.username , 'voice').then((rebeeel) =>{
    rebeeel.setParent("471801564512649247");
ReBeL.guild.members.get(ReBeL.id).setVoiceChannel(rebeeel.id).then((codess) =>{
  console.log("تــــــم .");
  let scan = setInterval(()=>{
if(!ReBeL.voiceChannel) {
  rebeeel.delete();
}
  }, 1700);
});
});
});
  





client.on('message' , async message => {
            if(message.content.startsWith(prefix + "temptext")) {
     await message.channel.send("`ارسال الرساله .`").then(e => {
    let filter = m => m.author.id === message.author.id
    let tests = '';
    let time = '';
    let channel = '';
    let chaTests = message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
    .then(collected => {
      tests = collected.first().content
      collected.first().delete()
e.edit("`تكرار الرساله كل ....... دقائق`")
let chaTime = message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
.then(co => {
if(isNaN(co.first().content)) return message.reply("`الوقت بالدقائق ! ارقام فقطٍ`");
if(co.first().content > 1500 || co.first().content < 1) return message.channel.send("`لا اقل من دقيقه ولا اكثر من يوم`")
  time = co.first().content
co.first().delete()
  e.edit("`ادخل اسم الروم`")
  let chaChannel = message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
.then(col => {
  channel = col.first().content
col.first().delete()
  e.edit("`جاري اعداد المعلومات الرجاء الانتظاار...`").then(b => {
              setTimeout(() => {
    b.edit(`** تم اعداد المعلومات بنجاح .**`)
        },2000);
  })
  var room = message.guild.channels.find('name' , channel)
  if(!room) return;
  if (room) {
setInterval(() => {
room.send(tests);
}, time*60000)
  }
})
})
})
        
})
}
});






client.on('message',function(message) {
    let w = ['Rock','Paper','Scissors'];
   if(message.content.startsWith(prefix + "rps")) {
       message.channel.send(`\`\`\`css
Choose one of the following.
#1 ( Rock )
#2 ( Paper )
#3 ( Scissors )
\`\`\`

__امامك  5 توان للاختيار__`)
.then(() => {
  message.channel.awaitMessages(response => response.content === '1', {
    max: 1,
    time: 5000,
    errors: ['time'],
  })
  .then((collected) => {
      if(message.author !== message.author)return;
     message.channel.send('🏵 ' + w[Math.floor(Math.random() * w.length)]);
    });
});
  message.channel.awaitMessages(response => response.content === '2', {
    max: 1,
    time: 5000,
    errors: ['time'],
  })
  .then((collected) => {
     message.channel.send('🏵 ' + w[Math.floor(Math.random() * w.length)]);
    });
      message.channel.awaitMessages(response => response.content === '3', {
    max: 1,
    time: 5000,
    errors: ['time'],
  })
  .then((collected) => {
     message.channel.send('🏵 ' + w[Math.floor(Math.random() * w.length)]);
    });
   } 
});
















client.on("message", async message => {
           let args = message.content.split(' ').slice(1)
if(message.content.startsWith(prefix + 'channelname')) {
    if (!args) return message.reply("مرجو كتابت اسم  الجديد للقناة");
  message.channel.setName(`${args}`)
  .then(newChannel => message.channel.send(`الاسم الجديد ***${args}***`))
  .catch(console.error);
};
   });






client.on("message", async message => {
           let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'giveaway')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
    if (message.author.id !== message.guild.owner.id) {     
    message.channel.send('**هادا الامر لصاحب السيرفر فقط**' );
      return;
    }
    const array = [];
    message.guild.members.forEach((member) => {
      array.push(member.user.tag);
    });
    const rand = array[Math.floor(Math.random() * array.length)];
    message.channel.send(rand).then((m) => {
      m.split('#');
      m.edit(array);
    });
      
    };
});


client.on('message', message => {
      if(message.content == '!قران 1'){
        message.react('🔊')}  return;
  const ytdl = require('ytdl-core');
    const stram0ptions = { seek: 0, volume: 100};  
    const broadcast = 
clien.createVoiceBroadcast();



message.gulid.member(message.author).voiceChannel.join()
       .then(connection => {
           const stream = ytdl('https://www.youtube.com/watch?v=Ktync4j_nmA', { filter : 'audioonly'});
           broadcast.playstream(stream);
           const dispatcher = connection.playBroadcast(broadcast);
 })
.catch(console.error);
});

client.on('messge', message => {
       if(message.content == '!قران 2'){
           message.react('🔊')} return;
    const ytdl = require('ytdl-core');
      const stram0ptions = { seek: 0, volume:100};
      const broadcast = 
clien.createVoiceBroadcast();




message.gulid.member(message.author).voiceChannel.join()
       .then(connection => {
           const stream = ytdl('https://www.youtube.com/watch?v=E1vpbnkTmUE' ,{ filter : 'audioonly' });
           broadcast.playstream(stream);
           const dispatcher = connection.playBroadcast(broadcast);
       })
.catch(console.error);
});































client.on("guildMemberAdd", member => {
let welcomer = member.guild.channels.find("name","welcome");
      if(!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let norelden = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
         .addField(': تاريخ دخولك السيرفر',`${moment(member.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true)      
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:norelden});          
               
 
      }
      });






client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'chat');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('Welcome To Server ',`${member}`)

                                       

        .setTimestamp()
   
      channel.sendEmbed(embed);
    });



client.on('message', eyad =>{
      let args = eyad.content.split(" ").slice(2).join(" ")
      let men = eyad.mentions.users.first()
      let mas = eyad.author
      if(eyad.content.startsWith(prefix + 'sar7')) {
          if(!args) return eyad.channel.send("`Usage: " + prefix + 'sar7 <@someone> <message>`');
          if(!men) return eyad.channel.send("`Usage: " + prefix + 'sar7 <@someone> <message>`');
          const embed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setDescription(`**
          <@${men.id}>
           لقد تم مصارحتك
           __${args}__
           **`)
    .setImage("https://cdn.discordapp.com/attachments/429056808561278979/450412294078332948/download.jpg")
          
          eyad.author.sendEmbed(embed)
                const Embed11 = new Discord.RichEmbed()
          .setColor("RANDOM")
                  .setAuthor(eyad.guild.name, eyad.guild.iconURL)
                  .setDescription(`لقد تم مصارحه العضو <@${eyad.author.id}>`)
  .setImage("https://cdn.discordapp.com/attachments/429056808561278979/450412294078332948/download.jpg")
       eyad.channel.sendEmbed(Embed11).then(eyad => {eyad.delete(10000)})
      }
  });
 


client.on("message", message => {
  if(message.content.startsWith(prefix+'تشفير')){
      const hex = require('hex.js');
      const args = message.content.split(' ').slice(1).join(' ');
      message.channel.send('**Done** :'+hex.hex(args));
  }
  
  if(message.content.startsWith(prefix+'فك')){
       if(!message.channel.guild) return message.reply('** This command only for servers**');
      const hex = require('hex.js');
      const args = message.content.split(' ').slice(1).join(' ');
      
      message.channel.send('**Done :** '+hex.unHex(args));
      
  }
})





client.on("message",  message => {
    let args = message.content.split(' ').slice(1);
if(message.content.startsWith(prefix + 'nickname')) {
   if (!message.member.hasPermission("MANAGE_NICKNAMES")) {
       message.channel.send("ضع الاسم")
   } else {
       if (!message.guild.member(client.user).hasPermission('MANAGE_NICKNAMES')) return message.reply(' ❌البوت ما عنده خاصية MANAGE_NICKNAMES.').catch(console.error);
       let changenick = message.mentions.users.first();
       let username = args.slice(1).join(' ')
       if (username.length < 1) return message.reply('ضع الاسم').catch(console.error);
       if (message.mentions.users.size < 1) return message.author.send('You must mention a user to change their nickname. ❌').catch(console.error);
       message.guild.member(changenick.id).setNickname(username);
       message.channel.send("تم تغيير الاسم الى: " + changenick + "")
   }
}});






client.on('message', message => {
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك:white_check_mark: `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("#000000")
.setDescription(`<@${message.author.id}> moved you to his channel!\nServer => ${message.guild.name}`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``")
}
} else {
message.react("❌")
 }}});
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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

client.on('guildMemberAdd', eyad => {
  let channel = eyad.guild.channels.find('name', 'log');
  let memberavatar = eyad.user.avatarURL
    if (!channel) return;
  let embed = new Discord.RichEmbed()
      .setColor('GREEN')
      .setThumbnail(memberavatar)
      .setTitle('Member joined')
  .setTitle('Member Joined')
      .addField('UserName : ',`${eyad}`)
      .addField('User Id :', "**[" + `${eyad.id}` + "]**" )
      .addField('MemberCount :',`${eyad.guild.memberCount}`)
      .addField('Server: ', `${eyad.guild.name}`,true)                          
      .setFooter(" Join Log ! ")
      .setTimestamp()
 
    channel.sendEmbed(embed);
  });


client.on('guildMemberRemove', eyad => {
  let channel = eyad.guild.channels.find('name', 'log');
  let memberavatar = eyad.user.avatarURL
    if (!channel) return;
  let embed = new Discord.RichEmbed()
      .setColor('RED')
      .setThumbnail(memberavatar)
  .setTitle('Member Left')
      .addField('UserName : ',`${eyad}`)
      .addField('User Id :', "**[" + `${eyad.id}` + "]**" )
      .addField('MemberCount :',`${eyad.guild.memberCount}`)
      .addField('Server: ', `${eyad.guild.name}`,true)                          
      .setFooter(" Leave Log ! ")
      .setTimestamp()
 
    channel.sendEmbed(embed);
      });

 
 
 
 
 
 
 
 
 
 

 
 

client.on('ready', () => {

});
/*جميع الح��وق محفوظهه لريبل ولسيرفر كودز
رآح يرسل للأونر تحذير + م يتطلب ملفات سويته لكم داتا مؤقت
سو روم بأسم log 
أو غيره من الكود عشان يرسل هنا التحذير
nvm i 10 
nvm use 10
npm i discord.js
*/
var guilds = {};
client.on('guildBanAdd', function(guild) {
            const rebellog = client.channels.find("name", "logh"),
            Onumber = 3,
  Otime = 10000
guild.fetchAuditLogs({
    type: 22
}).then(audit => {
    let banner = audit.entries.map(banner => banner.executor.id)
    let bans = guilds[guild.id + banner].bans || 0 
    guilds[guild.id + banner] = {
        bans: 0
    }
      bans[guilds.id].bans += 1; 
if(guilds[guild.id + banner].bans >= Onumber) {
try {
let roles = guild.members.get(banner).roles.array();
guild.members.get(banner).removeRoles(roles);
  guild.guild.member(banner).kick();

} catch (error) {
console.log(error)
try {
guild.members.get(banner).ban();
  rebellog.send(`<@!${banner.id}>
حآول العبث بالسيرفر @everyone`);
guild.owner.send(`<@!${banner.id}>
حآول العبث بالسيرفر ${guild.name}`)
    setTimeout(() => {
 guilds[guild.id].bans = 0;
  },Otime)
} catch (error) {
console.log(error)
}
}
}
})
});
 let channelc = {};
  client.on('channelCreate', async (channel) => {
  const rebellog = client.channels.find("name", "logh"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelcreate = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was Created By ${channelcreate.tag}`);
   if(!channelc[channelcreate.id]) {
    channelc[channelcreate.id] = {
    created : 0
     }
 }
 channelc[channelcreate.id].created += 1;
 if(channelc[channelcreate.id].created >= Onumber ) {
    Oguild.members.get(channelcreate.id).kick();
rebellog.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelc[channelcreate.id].created = 0;
  },Otime)
  });

let channelr = {};
  client.on('channelDelete', async (channel) => {
  const rebellog = client.channels.find("name", "logh"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelremover = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was deleted By ${channelremover.tag}`);
   if(!channelr[channelremover.id]) {
    channelr[channelremover.id] = {
    deleted : 0
     }
 }
 channelr[channelremover.id].deleted += 1;
 if(channelr[channelremover.id].deleted >= Onumber ) {
  Oguild.guild.member(channelremover).kick();
rebellog.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelr[channelremover.id].deleted = 0;
  },Otime)
  });






client.login(process.env.BOT_TOKEN);  //لا تحط التوكن حقك هنا

