const TOKEN = "NTQ4MjA5NzMzNzUyODQ4Mzk0.XL7PaQ.waqIgyDM6gYumTnl5WAkwMPq8Ig";
const Discord = require("discord.js");
const client = new Discord.Client();
const chalk = require('chalk')

client.on("ready", async () => {
    console.log("______________________________________");
    console.log("")
    console.log("--> " + chalk.green("Prêt !"));
    console.log("______________________________________");
    
    const activities_list = [
      "Écouter vos suggestions",
      "Attendre vos suggestions", 
      "Servir Althael & FellGill",
      "Écouter vos suggestions",
      "Attendre vos suggestions", 
      "Servir Althael & FellGill",
      "Écouter vos suggestions",
      "Attendre vos suggestions", 
      "Servir Althael & FellGill",
      "Écouter vos suggestions",
      "Attendre vos suggestions", 
      "Servir Althael & FellGill",
      "KAWA BUNGA & KONICHONWA !"
      ];
      
    setInterval(() => {
      const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
  
    client.user.setPresence({
      game: {
        name: activities_list[index],
        type: "streaming",
        url: "https://www.twitch.tv/monstercat"
      }
    });
  }, 5000); //Relance le changement toutes les 10 secondes.
  });

client.on("message", async message => {
    if(message.author.id === "548209733752848394") return;
    //////////////////////////////////////////////
    //////////////Définition Des Vars/////////////
    //////////////////////////////////////////////
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let tte = args[0]
    let response = args.join(" ").slice(18);
    const user = client.users.get(tte)
    //////////////////////////////////////////////
    /////////////BLACKLIST////////////////////////
    //////////////////////////////////////////////


    //////////////////////////////////////////////
    /////////////BLACKLIST EMBED//////////////////
    //////////////////////////////////////////////

    var systemban = new Discord.RichEmbed()
    .setDescription("Vous avez été bannis du système du bot !")
    .setTitle("Vous pensez que c'est une erreur ? Rejoignez le support !")
    .setURL("https://discord.gg/DMbdKrW")
    .setColor("#ff0000");

    //////////////////////////////////////////////
    //////////////////////////////////////////////
    //////////////////////////////////////////////
    /*var BLACKLIST = [
        ""
    ]

    let estDansLeText = false;
    console.log(estDansLeText)
    for (var i in BLACKLIST) {
      if (message.author.id.includes(BLACKLIST[i])){ 
        estDansLeText = true;
        console.log("changement")
      }
    }
    if(estDansLeText = true){
        console.log(estDansLeText)
        return message.channel.send(systemban)
    }
    */
    //////////////////////////////////////////////
    /////////////Définition Des Embeds////////////
    //////////////////////////////////////////////
    var responseConfirmationEmbed = new Discord.RichEmbed()
        .setDescription("Votre message a bien été envoyé à votre Interlocuteur !")
        .setColor("#ff0000");
    //////////////////////////////////////////////
    /////////////Début Des Conditions/////////////
    //////////////////////////////////////////////
    if(message.channel.type === "dm"){
        ///////////////////////////////////////////////////////////////////////////////////////////
        var comfirmationEmbed = new Discord.RichEmbed()
        .setTitle("Vous avez une question plus précise ? Rejoignez le support !")
            .setURL("https://discord.gg/DMbdKrW")
        .setDescription("Votre message a bien été envoyé au support !")
        .setColor("#ff0000")
        .setFooter("Tout abus de cette commande entrainera un ban système.")
        .setTimestamp();
    
        var previewEmbed = new Discord.RichEmbed()
        .setDescription("Message de suggestion :")
        .setColor("#ff0000")
        .addField("Interlocuteur :", message.author.username)
        .addField("Message Envoyé :", message.content)
        .setTimestamp();

        var suggestionEmbed = new Discord.RichEmbed()
        .setDescription("Message de suggestion :")
        .setColor("#ff0000")
        .addField("Interlocuteur :", message.author.username + "\nID : " + message.author.id)
        .addField("Message Envoyé :", message.content)
        .setFooter("Pour répondre : <reply " + message.author.id + " {réponse}.")
        .setTimestamp();
        ///////////////////////////////////////////////////////////////////////////////////////////////
        client.channels.get("564158436565319691").send(suggestionEmbed)
        message.channel.send(comfirmationEmbed).then(msg => {
            msg.delete(4000).then(msg => {
                message.channel.send(previewEmbed)
            });
        });
        
    }else if(message.content.startsWith("<reply")){
        //Définition de l'embed//
        var answerEmbed = new Discord.RichEmbed()
        .setDescription("Votre message a été lu et une réponse à été fournie !")
        .addField("Interlocuteur :", message.author.username)
        .addField("Réponse :", response)
        .setColor("#ff0000")
        .setTimestamp()
        //Fin de la définition
        if(message.channel.id !== "564158436565319691") return;
        message.delete(500)
        user.send(answerEmbed)
        message.channel.send(responseConfirmationEmbed).then(msg => {
            msg.delete(8000)
        });
    }
});

client.login(TOKEN)