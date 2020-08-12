const Discord = require('discord.js');
    const client = new Discord.Client();
client.on("ready", () =>{
console.log(`Listening To ${client.user.username} !`)
})

const prefix = "nh!";

client.on('message', message => {
       if(message.content.split(' ')[0] == prefix + 'server') {
    if(!message.channel.guild) return;
    const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const now = new Date();
    
    const verificationLevels = ['0', '1', '2', '3', '4'];
    const days = millis / 1000 / 60 / 60 / 24;
    let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
    var embed  = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField("**:id: Server ID :**", "**"+message.guild.id+"**",true)
    .addField("**:crown: Owned by**", "**"+message.guild.owner+"**" ,true)
    .addField("**:white_check_mark: Server Chat**" , "**"+message.guild.DefaultChannel+"**" ,true)
    .addField("**:earth_africa: Region**" , "**"+message.guild.region+"**",true)
    .addField('**:speech_balloon: Channels Written**',`**[ ${message.guild.channels.filter(m => m.type === 'text').size} ] Channel **`,true)
    .addField("**:mega: Channels sound**", ` ** [ ${message.guild.channels.filter(m => m.type === 'voice').size} ] Channel ** `,true)
    .addField("**:calendar:  Created On**", ` ** [ ${days.toFixed(0)} ] ** Day ` ,true)
    .addField("**:closed_lock_with_key: Roles**",`**[${message.guild.roles.size}]** Role `,true)
    .addField("**:diamond_shape_with_a_dot_inside: Verification level**", ` ** [ ${verificationLevels[message.guild.verificationLevel]} ] ** `,true)
    
    .addField(":busts_in_silhouette: Members",`
    **${message.guild.memberCount}**`)
    .setColor('RANDOM')
    message.channel.sendEmbed(embed)
    
    }
    });


client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setThumbnail(member.user.avatarURL)
  .addField("***Welcome in Matrix Shop***" ,member.user.username )
    .setDescription('***Thank you for join This Server !***')
    .setColor('RANDOM')
    .setImage('https://media.discordapp.net/attachments/740603539361103873/741810973559488608/giphy.gif')
var channel =member.guild.channels.find('name', '🌞・welcome')
if (!channel) return;
channel.send({embed : embed});
});


client.on("message", message => {
      const prefix = 'nh!'; // ! Keep?Sky#2144
    if (message.content === (prefix + "help")) {
const embed = new Discord.RichEmbed() // ! Keep?Sky#2144
 .setColor("#00FFCC") // هنا تقدر تعدل علا لون الرساله :)
.setThumbnail(message.author.avatarURL)
 .setDescription(`** Commands Help :hammer_pick: 

❖ nh!help :crossed_swords:   ❖ Commands Help :open_file_folder: 
❖ nh!help music :crossed_swords:   ❖ Commands Music :open_file_folder: 
❖ nh!server :crossed_swords:   ❖ Commands Server :open_file_folder: 
❖ nh!support :crossed_swords:   ❖ Commands Server Support :open_file_folder: 
❖ nh!invite :crossed_swords:   ❖ Commands Link invite :open_file_folder: 
❖ nh!mail :crossed_swords:   ❖ Commands mail mail1 mail2 mail3 mail4 ... mail10 :open_file_folder: 
       **  `)// ! Keep?Sky#2144
   message.author.sendEmbed(embed)
   }
   });  
client.on('message', message => {
           const prefix = 'nh!'; //! Keep?Sky#2144
     if (message.content === (prefix + "help")) { //! Keep?Sky#2144
     let embed = new Discord.RichEmbed()// ! Keep?Sky#2144
  .setAuthor(message.author.username)
  .setColor("#0017FF")
  .addField("Done" , " The commands have been sent private !")
  message.channel.sendEmbed(embed);
    }
});






client.on("message", message => {
      const prefix = 'nh!'; // ! Keep?Sky#2144
    if (message.content === (prefix + "developer")) {
const embed = new Discord.RichEmbed() // ! Keep?Sky#2144
 .setColor("#00FFCC") // هنا تقدر تعدل علا لون الرساله :)
.setThumbnail(message.author.avatarURL)
 .setDescription(`** Developer

My developer is : Wrong#9603
       **  `)// ! Keep?Sky#2144
   message.author.sendEmbed(embed)
   }
   });  
client.on('message', message => {
           const prefix = 'nh!'; //! Keep?Sky#2144
     if (message.content === (prefix + "developer")) { //! Keep?Sky#2144
     let embed = new Discord.RichEmbed()// ! Keep?Sky#2144
  .setAuthor(message.author.username)
  .setColor("#0017FF")
  .addField("Done" , " The commands have been sent private !")
  message.channel.sendEmbed(embed);
    }
});



client.on("message", message => {
      const prefix = 'nh!'; // ! Keep?Sky#2144
    if (message.content === (prefix + "support server")) { 
const embed = new Discord.RichEmbed() // ! Keep?Sky#2144
 .setColor("#00FFCC") // هنا تقدر تعدل علا لون الرساله :)
.setThumbnail(message.author.avatarURL)
 .setDescription(`** Server Support

My server Support is : https://discord.gg/kBPjdk7
       **  `)// ! Keep?Sky#2144
   message.author.sendEmbed(embed)
   }
   });  
client.on('message', message => {
           const prefix = 'nh!'; //! Keep?Sky#2144
     if (message.content === (prefix + "support server")) { //! Keep?Sky#2144
     let embed = new Discord.RichEmbed()// ! Keep?Sky#2144
  .setAuthor(message.author.username)
  .setColor("#0017FF")
  .addField("Done" , " The commands have been sent private !")
  message.channel.sendEmbed(embed);
    }
});

client.on("message", message => {
      const prefix = 'nh!'; // ! Keep?Sky#2144
    if (message.content === (prefix + "invite")) {
const embed = new Discord.RichEmbed() // ! Keep?Sky#2144
 .setColor("#00FFCC") // هنا تقدر تعدل علا لون الرساله :)
.setThumbnail(message.author.avatarURL)
 .setDescription(`** Link invite

Invite link 💎  : https://discord.com/oauth2/authorize?client_id=741050235777843221&scope=bot&permissions=2146958847
       **  `)// ! Keep?Sky#2144
   message.author.sendEmbed(embed)
   }
   });  
client.on('message', message => {
           const prefix = 'nh!'; //! Keep?Sky#2144
     if (message.content === (prefix + "invite")) { //! Keep?Sky#2144
     let embed = new Discord.RichEmbed()// ! Keep?Sky#2144
  .setAuthor(message.author.username)
  .setColor("#0017FF")
  .addField("Done" , " The commands have been sent private !")
  message.channel.sendEmbed(embed);
    }
});



client.on("message", message => {
      const prefix = 'nh!'; // ! Keep?Sky#2144
    if (message.content === (prefix + "mail")) { 
const embed = new Discord.RichEmbed() // ! Keep?Sky#2144
 .setColor("#00FFCC") // هنا تقدر تعدل علا لون الرساله :)
.setThumbnail(message.author.avatarURL)
 .setDescription(`** 

Mail : ekbhgw9a@MyMintInbox.com

mail jusqu'a 10 nh!mail1 nh!mail2 nh!mail3 nh!mail4 ...
       **  `)// ! Keep?Sky#2144
   message.author.sendEmbed(embed)
   }
   });  
client.on('message', message => {
           const prefix = 'nh!'; //! Keep?Sky#2144
     if (message.content === (prefix + "mail")) { //! Keep?Sky#2144
     let embed = new Discord.RichEmbed()// ! Keep?Sky#2144
  .setAuthor(message.author.username)
  .setColor("#0017FF")
  .addField("Done" , " The commands have been sent private !")
  message.channel.sendEmbed(embed);
    }
});


client.on("message", message => {
      const prefix = 'nh!'; // ! Keep?Sky#2144
    if (message.content === (prefix + "mail1")) { 
const embed = new Discord.RichEmbed() // ! Keep?Sky#2144
 .setColor("#00FFCC") // هنا تقدر تعدل علا لون الرساله :)
.setThumbnail(message.author.avatarURL)
 .setDescription(`** 

Mail : 22oceabs@MyMintInbox.com
       **  `)// ! Keep?Sky#2144
   message.author.sendEmbed(embed)
   }
   });  
client.on('message', message => {
           const prefix = 'nh!'; //! Keep?Sky#2144
     if (message.content === (prefix + "mail1")) { //! Keep?Sky#2144
     let embed = new Discord.RichEmbed()// ! Keep?Sky#2144
  .setAuthor(message.author.username)
  .setColor("#0017FF")
  .addField("Done" , " The commands have been sent private !")
  message.channel.sendEmbed(embed);
    }
});


client.on("message", message => {
      const prefix = 'nh!'; // ! Keep?Sky#2144
    if (message.content === (prefix + "mail2")) { 
const embed = new Discord.RichEmbed() // ! Keep?Sky#2144
 .setColor("#00FFCC") // هنا تقدر تعدل علا لون الرساله :)
.setThumbnail(message.author.avatarURL)
 .setDescription(`** 

Mail : 62oef7y6@MyMintInbox.com
       **  `)// ! Keep?Sky#2144
   message.author.sendEmbed(embed)
   }
   });  
client.on('message', message => {
           const prefix = 'nh!'; //! Keep?Sky#2144
     if (message.content === (prefix + "mail2")) { //! Keep?Sky#2144
     let embed = new Discord.RichEmbed()// ! Keep?Sky#2144
  .setAuthor(message.author.username)
  .setColor("#0017FF")
  .addField("Done" , " The commands have been sent private !")
  message.channel.sendEmbed(embed);
    }
});

client.on("message", message => {
      const prefix = 'nh!'; // ! Keep?Sky#2144
    if (message.content === (prefix + "mail3")) { 
const embed = new Discord.RichEmbed() // ! Keep?Sky#2144
 .setColor("#00FFCC") // هنا تقدر تعدل علا لون الرساله :)
.setThumbnail(message.author.avatarURL)
 .setDescription(`** 

Mail : pnk1gr4e@MyMintInbox.com
       **  `)// ! Keep?Sky#2144
   message.author.sendEmbed(embed)
   }
   });  
client.on('message', message => {
           const prefix = 'nh!'; //! Keep?Sky#2144
     if (message.content === (prefix + "mail3")) { //! Keep?Sky#2144
     let embed = new Discord.RichEmbed()// ! Keep?Sky#2144
  .setAuthor(message.author.username)
  .setColor("#0017FF")
  .addField("Done" , " The commands have been sent private !")
  message.channel.sendEmbed(embed);
    }
});

client.on("message", message => {
      const prefix = 'nh!'; // ! Keep?Sky#2144
    if (message.content === (prefix + "mail4")) { 
const embed = new Discord.RichEmbed() // ! Keep?Sky#2144
 .setColor("#00FFCC") // هنا تقدر تعدل علا لون الرساله :)
.setThumbnail(message.author.avatarURL)
 .setDescription(`** 

Mail : 5cxyq7b7@MyMintInbox.com
       **  `)// ! Keep?Sky#2144
   message.author.sendEmbed(embed)
   }
   });  
client.on('message', message => {
           const prefix = 'nh!'; //! Keep?Sky#2144
     if (message.content === (prefix + "mail4")) { //! Keep?Sky#2144
     let embed = new Discord.RichEmbed()// ! Keep?Sky#2144
  .setAuthor(message.author.username)
  .setColor("#0017FF")
  .addField("Done" , " The commands have been sent private !")
  message.channel.sendEmbed(embed);
    }
});

client.on("message", message => {
      const prefix = 'nh!'; // ! Keep?Sky#2144
    if (message.content === (prefix + "mail5")) { 
const embed = new Discord.RichEmbed() // ! Keep?Sky#2144
 .setColor("#00FFCC") // هنا تقدر تعدل علا لون الرساله :)
.setThumbnail(message.author.avatarURL)
 .setDescription(`** 

Mail : 25vjmm6q@MyMintInbox.com
       **  `)// ! Keep?Sky#2144
   message.author.sendEmbed(embed)
   }
   });  
client.on('message', message => {
           const prefix = 'nh!'; //! Keep?Sky#2144
     if (message.content === (prefix + "mail5")) { //! Keep?Sky#2144
     let embed = new Discord.RichEmbed()// ! Keep?Sky#2144
  .setAuthor(message.author.username)
  .setColor("#0017FF")
  .addField("Done" , " The commands have been sent private !")
  message.channel.sendEmbed(embed);
    }
});

client.on("message", message => {
      const prefix = 'nh!'; // ! Keep?Sky#2144
    if (message.content === (prefix + "mail6")) { 
const embed = new Discord.RichEmbed() // ! Keep?Sky#2144
 .setColor("#00FFCC") // هنا تقدر تعدل علا لون الرساله :)
.setThumbnail(message.author.avatarURL)
 .setDescription(`** 

Mail : oxz7rqpz@MyMintInbox.com
       **  `)// ! Keep?Sky#2144
   message.author.sendEmbed(embed)
   }
   });  
client.on('message', message => {
           const prefix = 'nh!'; //! Keep?Sky#2144
     if (message.content === (prefix + "mail6")) { //! Keep?Sky#2144
     let embed = new Discord.RichEmbed()// ! Keep?Sky#2144
  .setAuthor(message.author.username)
  .setColor("#0017FF")
  .addField("Done" , " The commands have been sent private !")
  message.channel.sendEmbed(embed);
    }
});

client.on("message", message => {
      const prefix = 'nh!'; // ! Keep?Sky#2144
    if (message.content === (prefix + "mail7")) { 
const embed = new Discord.RichEmbed() // ! Keep?Sky#2144
 .setColor("#00FFCC") // هنا تقدر تعدل علا لون الرساله :)
.setThumbnail(message.author.avatarURL)
 .setDescription(`** 

Mail : p2y6dncy@MyMintInbox.com
       **  `)// ! Keep?Sky#2144
   message.author.sendEmbed(embed)
   }
   });  
client.on('message', message => {
           const prefix = 'nh!'; //! Keep?Sky#2144
     if (message.content === (prefix + "mail7")) { //! Keep?Sky#2144
     let embed = new Discord.RichEmbed()// ! Keep?Sky#2144
  .setAuthor(message.author.username)
  .setColor("#0017FF")
  .addField("Done" , " The commands have been sent private !")
  message.channel.sendEmbed(embed);
    }
});

client.on("message", message => {
      const prefix = 'nh!'; // ! Keep?Sky#2144
    if (message.content === (prefix + "mail8")) { 
const embed = new Discord.RichEmbed() // ! Keep?Sky#2144
 .setColor("#00FFCC") // هنا تقدر تعدل علا لون الرساله :)
.setThumbnail(message.author.avatarURL)
 .setDescription(`** 

Mail : zkzhqeof@MyMintInbox.com
       **  `)// ! Keep?Sky#2144
   message.author.sendEmbed(embed)
   }
   });  
client.on('message', message => {
           const prefix = 'nh!'; //! Keep?Sky#2144
     if (message.content === (prefix + "mail8")) { //! Keep?Sky#2144
     let embed = new Discord.RichEmbed()// ! Keep?Sky#2144
  .setAuthor(message.author.username)
  .setColor("#0017FF")
  .addField("Done" , " The commands have been sent private !")
  message.channel.sendEmbed(embed);
    }
});

client.on("message", message => {
      const prefix = 'nh!'; // ! Keep?Sky#2144
    if (message.content === (prefix + "mail9")) { 
const embed = new Discord.RichEmbed() // ! Keep?Sky#2144
 .setColor("#00FFCC") // هنا تقدر تعدل علا لون الرساله :)
.setThumbnail(message.author.avatarURL)
 .setDescription(`** 

Mail : 92f83223@MyMintInbox.com
       **  `)// ! Keep?Sky#2144
   message.author.sendEmbed(embed)
   }
   });  
client.on('message', message => {
           const prefix = 'nh!'; //! Keep?Sky#2144
     if (message.content === (prefix + "mail9")) { //! Keep?Sky#2144
     let embed = new Discord.RichEmbed()// ! Keep?Sky#2144
  .setAuthor(message.author.username)
  .setColor("#0017FF")
  .addField("Done" , " The commands have been sent private !")
  message.channel.sendEmbed(embed);
    }
});

client.on("message", message => {
      const prefix = 'nh!'; // ! Keep?Sky#2144
    if (message.content === (prefix + "mail10")) { 
const embed = new Discord.RichEmbed() // ! Keep?Sky#2144
 .setColor("#00FFCC") // هنا تقدر تعدل علا لون الرساله :)
.setThumbnail(message.author.avatarURL)
 .setDescription(`** 

Mail : t488ukmx@MyMintInbox.com
       **  `)// ! Keep?Sky#2144
   message.author.sendEmbed(embed)
   }
   });  
client.on('message', message => {
           const prefix = 'nh!'; //! Keep?Sky#2144
     if (message.content === (prefix + "mail10")) { //! Keep?Sky#2144
     let embed = new Discord.RichEmbed()// ! Keep?Sky#2144
  .setAuthor(message.author.username)
  .setColor("#0017FF")
  .addField("Done" , " The commands have been sent private !")
  message.channel.sendEmbed(embed);
    }
});








































client.login(process.env.BOT_TOKEN);
