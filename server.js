
const Discord = require('discord.js');
const eco = require('discord-eco');
const client = new Discord.Client();
var prefix = '?'
var log = 'ЛОГ: '
var chat = 'ЧАТ: '
var commanda = 'КОММАНДА БОТА: '
var date = new Date();
var time = "["+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()+"] ";

client.login('NDEwNTE0MDQwMTEzMjAxMTYy.DVuQtA.F2SDydM8FpYM4Cj587ZWPco4y5c');

//запуск сервера

client.on('ready', () => {
    console.log(time + log + 'ботище запустился');
    client.user.setActivity('Егора')
    const hooker = new Discord.WebhookClient('421705619624427521', 'o9C3e3mjbBBq50YZll2pbq0D0-aHQ3oXTh6h4ub4In3c1YtU-DVIqFiZNumn_9YdsMhq');
    hooker.send('ОСНОВНОЙ БОТ ЗАПУСТИЛСЯ, ПИНГУЙ');
}); 

//дичь 

client.on('message', message => {
    if(message.content.startsWith(prefix + "buyrole vip")){
        console.log(time + commanda + " " + message.member + " покупает вип");
        eco.fetchBalance(message.author.id).then((i) => {
            if(i.money >= Number(10000)){
                message.member.addRole('456507340980748298');
                message.reply({embed:{
                    title:"УСПЕШНАЯ ПОКУПКА",
                    description:"Ты успешно купил роль 👔VIP👔, поздравляю с покупкой"}});
                    eco.updateBalance(message.author.id, -Number(10000))}
            else (message.reply({embed:{
                title:"НЕ ДОСТАТОЧНО СРЕДСТВ"}}))})};
    if(message.content.startsWith(prefix + "buyrole premium")){
        console.log(time + commanda + " " + message.member + " покупает премиум");
        eco.fetchBalance(message.author.id).then((i) => {
            if(i.money >= Number(50000)){
                message.member.addRole('456507736708874240');
                message.reply({embed:{
                    title:"УСПЕШНАЯ ПОКУПКА",
                    description:"Ты успешно купил роль 💎PREMIUM💎, поздравляю с покупкой"}});
                    eco.updateBalance(message.author.id, -Number(50000))}
            else (message.reply({embed:{
                title:"НЕ ДОСТАТОЧНО СРЕДСТВ"}}))})}
    });

client.on('message', message => {
    if(message.content.startsWith(prefix + "money")){
        console.log(time + commanda + " " + message.member + " запросил баланс");
        eco.fetchBalance(message.author.id).then((i) => {message.reply("```Твой баланс " + i.money + " топбаксов```")})}});

client.on('message', message =>{
    if(message.content.startsWith(prefix + "balset")){
            if(message.author.id == "226010838409019392") { 
             eco.fetchBalance(message.mentions.users.first().id).then((i) => {
                var arg = message.content.slice(prefix.length).split(" ");
                var bet = arg.slice(1);
                eco.updateBalance(message.mentions.users.first().id, parseInt(bet[0]));
                message.reply("Увеличил баланс на " + parseInt(bet[0]) + " для " + message.mentions.users.first());
             })}else (message.reply("иди нахуй ты не Егор"))}});
        
client.on('message', message => {
    if(message.content.startsWith(prefix + "slots")){
        console.log(time + commanda + " " + message.member + " играет в казино");
        eco.fetchBalance(message.author.id).then((i) => {
            var arg = message.content.split(" ").slice(1);
            var bet = arg.join(" ");
        if (i.money >= bet){
            var random1 = [Math.floor(Math.random() * (5 - 1))];
            var random2 = [Math.floor(Math.random() * (5 - 1))];
            var random3 = [Math.floor(Math.random() * (5 - 1))];
                if(random1 == 1){var slot1 = "🐾"};
                if(random1 == 2){var slot1 = "🐲"};
                if(random1 == 3){var slot1 = "🐉"};
                if(random1 == 0){var slot1 = "⛔️"};
                if(random2 == 1){var slot2 = "🐾"};
                if(random2 == 2){var slot2 = "🐲"};
                if(random2 == 3){var slot2 = "🐉"};
                if(random2 == 0){var slot2 = "⛔️"};
                if(random3 == 1){var slot3 = "🐾"};
                if(random3 == 2){var slot3 = "🐲"};
                if(random3 == 3){var slot3 = "🐉"};
                if(random3 == 0){var slot3 = "⛔️"};
                var result = Math.round((Number(random1)+Number(random2)+Number(random3))/Number(3));
                var loose = {embed:{title:"ТЫ ПРОИГРАЛ", description: slot1 + " " + slot2 + " " + slot3,color: 0xff3333, fields: [{name: ("Ты поставил: " + bet + " топбаксов"),value: ("` Твои топбаксы уменьшились, проебал, лох.`")}]}};
                var win = {embed:{title:"ТЫ ВЫЙГРАЛ", description: slot1 + " " + slot2 + " " + slot3,color: 0x3ffd35, fields: [{name: ("Ты поставил: " + bet + " топбаксов"),value: ("` Твои деньги увеличились на " + Number(bet)*2 + " топбаксов`")}]}};
            if(result >= 2){
                message.reply(win);
                eco.updateBalance(message.author.id, Number(bet)*2);
            }
            else {
                message.reply(loose);
                eco.updateBalance(message.author.id, -Number(bet));
            };   
        }
    else {message.reply("У тебя нет денег, ты бомжара")
    }});
    };
});


client.on('message', message => {
    if(message.content.startsWith(prefix + "gay")){
    var args = message.content.split(" ").slice(1)
    if (args.length > 0)
    {message.reply({embed:{
            title:"НАСКОЛЬКО ГЕЙ",
            description:[Math.floor(Math.random() * (100 - 0))] + "% настолько " + args + " гей :gay_pride_flag:"}})};
    if (args.length == 0)
    {message.reply({embed:{
            title:"НАСКОЛЬКО ТЫ ГЕЙ",
            description:[Math.floor(Math.random() * (100 - 0))] + "% настолько ты гей :gay_pride_flag:"}})};
    console.log(time + commanda + " " + message.member + " мериется письками");}
});

client.on("message", message =>{
    if(message.content.startsWith(prefix + "nickedit")){
        console.log(time + commanda + " " + message.member + " меняет ник");
        var args = message.content.split(" ").slice(1);
            if (args.length > 0){
                var nick = args.join(" ")
                message.member.edit({nick: nick});
            message.reply("Поставил тебе ник " + nick)}
            if (args.length == 0){
                message.member.edit({nick: " "});
                message.reply("Вернул тебе твой ник.");
            };
        };
});

client.on('message', message =>{
    console.log(time + chat + " " + message.member + " написал: " + message.content);
});

client.on('message', message =>{
    if(message.content.startsWith(prefix + "setgame"))
        if(message.author.id == "226010838409019392") {
            var args = message.content.split(" ").slice(1);
            var play = args.join(" ")
            console.log(time + log + " бот теперь играет в " + play);
            client.user.setActivity(play)
            message.reply('игра бота теперь ' + play) }
        else {
            message.reply("Иди гуляй, эта команда только для царя - Егора")
        };
});

client.on('message', message =>{
    if(message.content.startsWith(prefix + "roles")){
    message.reply({embed: {
        color: 3447003,
        author: {
          name: "Команды бота егора",
          icon_url: client.user.avatarURL
        },
        title: "Какие роли можно получить",
        description: "Ниже перечень ролей",
        fields: [{
            name: "Роль 🔫PUBG🔫",
            value: "?role pubg"
          },
          {
            name: "Роль 🤑GTA5🤑",
            value: "?role GTA"
          },
          {
            name: "Роль 💣CS:GO💣",
            value: "?role CS:GO"
          },
          {
            name: "Роль 📕YouTube📕",
            value: "?role YouTube"
          },
          {
            name: "Роль 🏳️‍🌈ПИДОР🏳️‍🌈",
            value: "?role PIDOR"
          },
          {
            name: "Роль 🔮TWITCH🔮",
            value: "?role Twitch"
          },
          {
            name: "Роль 😈RAGE😈",
            value: "?role rage"
          },
          {
            name: "Роль 🌲FORTNITE🌲 ",
            value: "?role fortnite"
          }
        ],
        footer: {
          icon_url: client.user.avatarURL
        }
      }
    });
    console.log(time + commanda + message.member + " запросил помощь")
}});

//здесь роли при заходе

client.on('guildMemberAdd', function(member) {
    member.addRole(member.guild.roles.find("name", "🐟УЧАСТНИК🐟"));
    console.log (time + log + member + " зашел на сервер и получил роль.");
    const channel = member.guild.channels.find('name', 'реклама');
    if (!channel) return;
    channel.send(`Добро пожаловать на сервер, ${member}`);
});

client.on('guildMemberRemove', member => {
    const channel = member.guild.channels.find('name', 'реклама');
    if (!channel) return;
    channel.send(`Пидор ливнул, ${member}`);
    console.log (time + log + member + " вышел с сервера и послан нахуй")
});

//выдача ролей

client.on('message', message => {
    if(message.content.startsWith(prefix + 'role exclusive') | (prefix + 'role exclusive')) {
        message.member.addRole('403862282448273408')
        message.reply({embed:{
            title:"ЭКСКЛЮЗИВ",
            description:"Выдал тебе роль 🦖ОЛДФАГ🦖, наслаждайся"}})
        console.log(commanda + message.member + ' получил роль олдфага')};

    if(message.content.startsWith(prefix + 'role GTA') | (prefix + 'role gta')) {
        message.member.addRole('406444557232898053')
        message.reply({embed:{
            title:"ПОЛУЧЕННА РОЛЬ",
            description:"Выдал тебе роль 🤑GTA5🤑, наслаждайся"}})
        console.log(commanda + message.member + ' получил роль гта')};

    if(message.content.startsWith(prefix + 'role pubg') | (prefix + 'role PUBG')) {
        message.member.addRole('403861927287062528')
        message.reply({embed:{
            title:"ПОЛУЧЕННА РОЛЬ",
            description:"Выдал тебе роль 🔫PUBG🔫, наслаждайся"}})
        console.log(commanda + message.member + ' получил роль пубг')};

    if(message.content.startsWith(prefix + 'role CS:GO') | (prefix + 'role cs:go') | (prefix + 'role csgo')) {
        message.member.addRole('406444676015718403')
        message.reply({embed:{
            title:"ПОЛУЧЕННА РОЛЬ",
            description:"Выдал тебе роль 💣CS:GO💣, наслаждайся"}})
        console.log(commanda + message.member + ' получил роль кс:го')};  

    if(message.content.startsWith(prefix + 'role PIDOR') | (prefix + 'role pidor')) {
        message.member.addRole('403935464798814208')
        message.reply({embed:{
            title:"ПОЛУЧЕННА РОЛЬ",
            description:"Выдал тебе роль 🏳️‍🌈ПИДОР🏳️‍🌈, наслаждайся"}})
        console.log(commanda + message.member + ' получил роль пидора')};

    if(message.content.startsWith(prefix + 'role YouTube') | (prefix + 'role youtube')) {
        message.member.addRole('403937538303066112')
        message.reply({embed:{
            title:"ПОЛУЧЕННА РОЛЬ",
            description:"Выдал тебе роль 📕YouTube📕, наслаждайся"}})
        console.log(commanda + message.member + ' получил роль ютуб')};

    if(message.content.startsWith(prefix + 'role Twitch') | (prefix + 'role twitch')) {
        message.member.addRole('403935502363000832')
        message.reply({embed:{
            title:"ПОЛУЧЕННА РОЛЬ",
            description:"Выдал тебе роль 🔮TWITCH🔮, наслаждайся"}})
        console.log(commanda + message.member + ' получил роль твитч')}; 
    
    if(message.content.startsWith(prefix + 'role rage')) {
        message.member.addRole('403935459409133568')
        message.reply({embed:{
            title:"ПОЛУЧЕННА РОЛЬ",
            description:"Выдал тебе роль 😈RAGE😈, наслаждайся"}})
        console.log(commanda + message.member + ' получил роль рейдж')};

    if(message.content.startsWith(prefix + 'role fortnite')) {
        message.member.addRole('425997467461353484')
        message.reply({embed:{
            title:"ПОЛУЧЕННА РОЛЬ",
            description:"Выдал тебе роль 🌲FORTNITE🌲 , наслаждайся"}})
        console.log(commanda + message.member + ' получил роль форта')};   

    if(message.content === (prefix + "role")){
        message.reply({embed:{
            title:"ПОЛУЧИТЬ РОЛЬ",
            description:"Напиши какую роль ты хочешь получить: GTA , pubg  , CS:GO , PIDOR , YouTube , Twitch , rage , fortnite"}});};

    if(message.content.startsWith(prefix + 'delrole GTA') | (prefix + 'delrole gta')) {
        message.member.removeRole('406444557232898053')
        message.reply({embed:{
            title:"УБРАЛ РОЛЬ",
            description:"Убрал роль 🤑GTA5🤑 у тебя"}})
        console.log(commanda + message.member + ' убрал роль гта')};

    if(message.content.startsWith(prefix + 'delrole pubg') | (prefix + 'delrole PUBG')) {
        message.member.removeRole('403861927287062528')
        message.reply({embed:{
            title:"УБРАЛ РОЛЬ",
            description:"Убрал роль 🔫PUBG🔫 у тебя"}})
        console.log(commanda + message.member + ' убрал роль пубг')};

    if(message.content.startsWith(prefix + 'delrole CS:GO') | (prefix + 'delrole cs:go') | (prefix + 'delrole csgo')) {
        message.member.removeRole('406444676015718403')
        message.reply({embed:{
            title:"УБРАЛ РОЛЬ",
            description:"Убрал роль 💣CS:GO💣 у тебя"}})
        console.log(commanda + message.member + ' убрал роль кс')};


    if(message.content.startsWith(prefix + 'delrole PIDOR') | (prefix + 'delrole pidor')) {
        message.member.removeRole('403935464798814208')
        message.reply({embed:{
            title:"УБРАЛ РОЛЬ",
            description:"Убрал роль 🏳️‍🌈ПИДОР🏳️‍🌈 у тебя"}})
        console.log(commanda + message.member + ' убрал роль пидора')};

    if(message.content.startsWith(prefix + 'delrole YouTube') | (prefix + 'delrole youtube')) {
        message.member.removeRole('403937538303066112')
        message.reply({embed:{
            title:"УБРАЛ РОЛЬ",
            description:"Убрал роль 📕YouTube📕 у тебя"}})
        console.log(commanda + message.member + ' убрал роль ютуб')};
        
    if(message.content.startsWith(prefix + 'delrole Twitch') | (prefix + 'delrole twitch')) {
        message.member.removeRole('403935502363000832')
        message.reply({embed:{
            title:"УБРАЛ РОЛЬ",
            description:"Убрал роль 🔮TWITCH🔮 у тебя"}})
        console.log(commanda + message.member + ' убрал роль твитч')};

    if(message.content.startsWith(prefix + 'delrole rage')) {
        message.member.removeRole('403935459409133568')
        message.reply({embed:{
            title:"УБРАЛ РОЛЬ",
            description:"Убрал роль 😈RAGE😈 у тебя"}})
        console.log(commanda + message.member + ' убрал роль рейдж')};

    if(message.content.startsWith(prefix + 'delrole fortnite')) {
        message.member.removeRole('425997467461353484')
        message.reply({embed:{
            title:"УБРАЛ РОЛЬ",
            description:"Убрал роль 🌲FORTNITE🌲 у тебя"}})
        console.log(commanda + message.member + ' убрал роль рейдж')};

    if(message.content.startsWith(prefix + "delrole")){
        message.reply({embed:{
            title:"УБРАТЬ РОЛЬ",
            description:"Напиши какую роль ты хочешь убрать: GTA , pubg  , CS:GO , PIDOR , YouTube , Twitch , rage , fortnite"
        }});
    };
});
