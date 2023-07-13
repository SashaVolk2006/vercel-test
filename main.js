const { Telegraf, Markup } = require('telegraf');
const filters = require('telegraf/filters');
const { red, green, blue } = require("colors");
require("dotenv").config();

const bot = new Telegraf(process.env.TOKEN);
const myID = 1870013463;

const kissVideos = [
    "https://s9.gifyu.com/images/kiss-1.gif", "https://s3.gifyu.com/images/kissf1417317e3e4d8c0.gif",
    "https://s3.gifyu.com/images/kiss-11.gif", "https://s9.gifyu.com/images/kiss-9.gif",
    "https://s3.gifyu.com/images/kiss-10.gif", "https://s9.gifyu.com/images/kiss-8.gif",
    "https://s9.gifyu.com/images/kiss-7.gif", "https://s9.gifyu.com/images/kiss-6.gif",
    "https://s3.gifyu.com/images/kiss-4.gif", "https://s3.gifyu.com/images/kiss-2.gif",
    "https://s3.gifyu.com/images/kiss-5.gif", "https://s3.gifyu.com/images/kiss-3.gif"
]

const hugVideos = [
    "https://s9.gifyu.com/images/huga3ede4129101d6a0.gif", "https://s3.gifyu.com/images/hug-9.gif",
    "https://s3.gifyu.com/images/hug-8.gif", "https://s3.gifyu.com/images/hug-7.gif",
    "https://s3.gifyu.com/images/hug-6.gif", "https://s9.gifyu.com/images/hug-2.gif",
    "https://s9.gifyu.com/images/hug-3.gif", "https://s9.gifyu.com/images/hug-5.gif",
    "https://s9.gifyu.com/images/hug-1.gif", "https://s9.gifyu.com/images/hug-4.gif"
]

const killVideos = [
    "https://s9.gifyu.com/images/tenor6c3c3321904c5b03.gif", "https://s9.gifyu.com/images/tenor-191fa1051480c2801.gif",
    "https://s9.gifyu.com/images/tenor-37fa30f02659ad020.gif", "https://s9.gifyu.com/images/tenor-425e79ecbce242e49.gif",
    "https://s9.gifyu.com/images/tenor-27229fc43e5eec92b.gif"
]

const arrestVideos = [
    "https://s3.gifyu.com/images/arrest-6.gif", "https://s3.gifyu.com/images/arrest.gif",
    "https://s3.gifyu.com/images/arrest-7.gif", "https://s9.gifyu.com/images/arrest-5.gif",
    "https://s9.gifyu.com/images/arrest-3.gif", "https://s9.gifyu.com/images/arrest-2.gif",
    "https://s9.gifyu.com/images/arrest-4.gif", "https://s9.gifyu.com/images/arrest-1.gif"
]

const biteVideos = [
    "https://s9.gifyu.com/images/bite.gif", "https://s9.gifyu.com/images/bite-6.gif",
    "https://s3.gifyu.com/images/bite-5.gif", "https://s3.gifyu.com/images/bite-3.gif",
    "https://s3.gifyu.com/images/bite-4.gif", "https://s3.gifyu.com/images/bite-2.gif",
    "https://s3.gifyu.com/images/bite-1.gif"
]

const hitVideos = [
    "https://s3.gifyu.com/images/punch-9.gif", "https://s3.gifyu.com/images/punch565c5a8a3c7e5fba.gif",
    "https://s3.gifyu.com/images/punch-8.gif", "https://s3.gifyu.com/images/punch-6.gif",
    "https://s3.gifyu.com/images/punch-7.gif", "https://s9.gifyu.com/images/punch-2.gif",
    "https://s9.gifyu.com/images/punch-1.gif", "https://s9.gifyu.com/images/punch-5.gif",
    "https://s9.gifyu.com/images/punch-3.gif", "https://s9.gifyu.com/images/punch-4.gif"
]

const lickVideos = [
    "https://s3.gifyu.com/images/lick.gif", "https://s3.gifyu.com/images/lick-6.gif",
    "https://s3.gifyu.com/images/lick-7.gif", "https://s9.gifyu.com/images/lick-5.gif",
    "https://s9.gifyu.com/images/lick-2.gif", "https://s9.gifyu.com/images/lick-1.gif",
    "https://s9.gifyu.com/images/lick-3.gif", "https://s9.gifyu.com/images/lick-4.gif"
]

const slapVideos = [
    "https://s9.gifyu.com/images/slap_015.gif", "https://s9.gifyu.com/images/slap_012.gif",
    "https://s9.gifyu.com/images/slap_013.gif", "https://s3.gifyu.com/images/slap_011.gif",
    "https://s3.gifyu.com/images/slap_005.gif", "https://s3.gifyu.com/images/slap_001.gif",
    "https://s3.gifyu.com/images/slap_010.gif", "https://s3.gifyu.com/images/slap_003.gif"
]

const spankVideos = [
    "https://s9.gifyu.com/images/spank-9.gif", "https://s9.gifyu.com/images/spank-6.gif",
    "https://s3.gifyu.com/images/spank.gif", "https://s9.gifyu.com/images/spank-7.gif",
    "https://s9.gifyu.com/images/spank-8.gif", "https://s9.gifyu.com/images/spank-4.gif",
    "https://s3.gifyu.com/images/spank-2.gif", "https://s3.gifyu.com/images/spank-3.gif",
    "https://s3.gifyu.com/images/spank-5.gif", "https://s3.gifyu.com/images/spank-1.gif"
]

const throwVideos = [
    "https://s9.gifyu.com/images/throw-7.gif", "https://s9.gifyu.com/images/throw.gif",
    "https://s9.gifyu.com/images/throw-6.gif", "https://s3.gifyu.com/images/throw-2.gif",
    "https://s3.gifyu.com/images/throw-1.gif", "https://s3.gifyu.com/images/throw-5.gif",
    "https://s3.gifyu.com/images/throw-4.gif", "https://s3.gifyu.com/images/throw-3.gif"
]

const tickleVideos = [
    "https://s9.gifyu.com/images/tickle_017.gif", "https://s9.gifyu.com/images/tickle_014.gif",
    "https://s9.gifyu.com/images/tickle.gif", "https://s9.gifyu.com/images/tickle_006.gif",
    "https://s3.gifyu.com/images/tickle-7.gif", "https://s3.gifyu.com/images/tickle-6.gif",
    "https://s9.gifyu.com/images/tickle-2.gif", "https://s9.gifyu.com/images/tickle-5.gif",
    "https://s9.gifyu.com/images/tickle-4.gif", "https://s9.gifyu.com/images/tickle-1.gif",
    "https://s9.gifyu.com/images/tickle-3.gif"
]

const fuckVideos = [
    "https://s3.gifyu.com/images/fuck.gif", "https://s9.gifyu.com/images/fuck-3.gif",
    "https://s9.gifyu.com/images/fuck-4.gif", "https://s9.gifyu.com/images/fuck-2.gif",
    "https://s9.gifyu.com/images/fuck-5.gif", "https://s9.gifyu.com/images/fuck-1.gif"
]

const gagVideos = [
    "https://s9.gifyu.com/images/bondage.gif", "https://s9.gifyu.com/images/bondage-2.gif",
    "https://s9.gifyu.com/images/bondage-1.gif", "https://s9.gifyu.com/images/bondage-3.gif"
]

const smileVideos = [
    "https://s11.gifyu.com/images/SWNPP.gif", "https://s11.gifyu.com/images/SWNPX.gif",
    "https://s11.gifyu.com/images/SWNPJ.gif", "https://s11.gifyu.com/images/SWNPe.gif",
    "https://s11.gifyu.com/images/SWNPG.gif", "https://s12.gifyu.com/images/SWNX2.gif",
    "https://s12.gifyu.com/images/SWNXS.gif", "https://s12.gifyu.com/images/SWNXM.gif",
    "https://s12.gifyu.com/images/SWNXb.gif", "https://s12.gifyu.com/images/SWNXp.gif"
]

const sleepVideos = [
    "https://s11.gifyu.com/images/SWNeZ.gif", "https://s11.gifyu.com/images/SWNeV.gif",
    "https://s12.gifyu.com/images/SWNeF.gif", "https://s12.gifyu.com/images/SWNe0.gif",
    "https://s12.gifyu.com/images/SWNeC.gif", "https://s11.gifyu.com/images/SWNeU.gif"
]

const greetVideos = [
    "https://s12.gifyu.com/images/SWT23.gif", "https://s12.gifyu.com/images/SWT29.gif",
    "https://s12.gifyu.com/images/SWT2E.gif", "https://s11.gifyu.com/images/SWT2T.gif",
    "https://s11.gifyu.com/images/SWT2w.gif", "https://s11.gifyu.com/images/SWT2k.gif",
    "https://s11.gifyu.com/images/SWT2h.gif", "https://s11.gifyu.com/images/SWT2v.gif"
]

const clapVideos = [
    "https://s12.gifyu.com/images/SWTzt.gif", "https://s12.gifyu.com/images/SWTzD.gif",
    "https://s12.gifyu.com/images/SWTz5.gif", "https://s12.gifyu.com/images/SWTzY.gif",
    "https://s12.gifyu.com/images/SWTzr.gif", "https://s11.gifyu.com/images/SWTzo.gif"
]

const breastsVideos = [
    "https://s11.gifyu.com/images/SWwG5.gif", "https://s11.gifyu.com/images/SWwGt.gif",
    "https://s11.gifyu.com/images/SWwGD.gif", "https://s12.gifyu.com/images/SWwGo.gif",
    "https://s12.gifyu.com/images/SWwG1.gif", "https://s12.gifyu.com/images/SWwGB.gif"
]

const cheeksVideos = [
    "https://s11.gifyu.com/images/SWwPx.gif", "https://s12.gifyu.com/images/SWwPT.gif",
    "https://s12.gifyu.com/images/SWwPK.gif", "https://s12.gifyu.com/images/SWwPH.gif",
    "https://s12.gifyu.com/images/SWwPN.gif", "https://s11.gifyu.com/images/SWwPw.gif",
    "https://s11.gifyu.com/images/SWwP3.gif"
]

const commands = [
    {name: "help", description: "Получить список моих команд"},
    {name: "kiss", description: "Поцеловать пользователя"},
    {name: "hug", description: "Обнять пользователя"},
    {name: "kill", description: "Убить пользователя"},
    {name: "arrest", description: "Арестовать пользователя"},
    {name: "bite", description: "Укусить польззователя"},
    {name: "hit", description: "Ударить пользователя"},
    {name: "lick", description: "Лизнуть пользователя"},
    {name: "slap", description: "Дать пощёчину пользователю"},
    {name: "spank", description: "Отшлепать пользователя"},
    {name: "throw", description: "Бросить предмет в пользователя"},
    {name: "tickle", description: "Пощекотать пользователя"},
    {name: "fuck", description: "Выебать пользователя"},
    {name: "gag", description: "Заткнуть пользователя кляпом"},
    {name: "smile", description: "Улыбнуться пользователю"},
    {name: "sleep", description: "Переспать с пользователем"},
    {name: "greet", description: "Поздороваться с пользователем"},
    {name: "clap", description: "Поапплодировать пользователю"},
    {name: "breasts", description: "Пощупать грудь пользователя"},
    {name: "cheeks", description: "Потискать щёчки пользователя"}
]


    
class Logger {
    constructor () {}

    message (text) {
        console.log(`${blue("[MESSAGE]")} ${green(text)}`);
    }

    error (text) {
        console.log(`${red("[ERROR]")} ${green(text)}`);
    }
}

const logger = new Logger();

bot.start((ctx) => ctx.reply('Бот запущен!'));


bot.on("inline_query", async (ctx) => {
    try {
        if (ctx.from.id !== myID) {
            const owner = await ctx.telegram.getChat(myID);
            
            return await ctx.answerInlineQuery([
                {
                    type: "article",
                    id: "1",
                    title: "❌ Недостаточно прав",
                    description: "Извини, но у тебя нет разрешения пользоваться моими командами :(",
                    input_message_content: {
                        message_text: `<b>${ctx.from.first_name}</b>, извини, но у тебя нет разрешения пользоваться моими командами :(\nЯ личная собственность <a href="t.me/${owner.username}">Волчонка</a>`,
                        parse_mode: "HTML",
                        disable_web_page_preview: true
                    }
                }
            ], {cache_time: 0});
        }

        const command = ctx.inlineQuery.query.split(" ")[0];
        const args = ctx.inlineQuery.query.replace(command, "").trim().split(", ");

        if (command === "") {
            let results = new Array();

            commands.forEach((el, index) => {
                results.push({
                    type: "article",
                    id: index,
                    title: el.name,
                    description: el.description,
                    input_message_content: {
                        message_text: `<b>${ctx.from.first_name}</b>, введите эту команду в моём inline режиме`,
                        parse_mode: "HTML"
                    }
                });
            });

            await ctx.answerInlineQuery(results, {cache_time: 0});
        } else if (command === "help") {
            await ctx.answerInlineQuery([
                {
                    type: "article",
                    id: "1",
                    title: "Помощь",
                    input_message_content: {
                        message_text: `<b>${ctx.from.first_name}</b>, мои команды:\n${commands.map((el) => {
                            return `<code>${el.name}</code> - ${el.description}`;
                        }).join("\n")}`,
                        parse_mode: "HTML"
                    }
                }   
            ], {cache_time: 0});
        } else if (command === "link" && args.length === 2) {
            const link = args[0];
            const text = args[1];

            await ctx.answerInlineQuery([
                {
                    type: "article",
                    id: "1",
                    title: "Отправить кнопку с ссылкой",
                    input_message_content: {
                        message_text: "🌚",
                        parse_mode: "HTML"
                    },
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: text,
                                    url: link
                                }
                            ]
                        ]
                    }
                }    
            ], {cache_time: 0});
        } else {
            if (args.length === 0) return;
            
            let videos, title, caption;
            let name = args[0]; 

            switch (command) {
                case "kiss":
                    videos = kissVideos;
                    title = `💋 Поцеловать ${name}`;
                    caption = `💋 <code>${ctx.from.first_name}</code> <b>поцеловал</b> <code>${name}</code>`;
                    break;
                case "hug":
                    videos = hugVideos;
                    title = `🫶 Обнять ${name}`;
                    caption = `🫶 <code>${ctx.from.first_name}</code> <b>обнял</b> <code>${name}</code>`;
                    break;
                case "kill":
                    videos = killVideos;
                    title = `💀 Убить ${name}`;
                    caption = `💀 <code>${ctx.from.first_name}</code> <b>убил</b> <code>${name}</code>`;
                    break;
                case "arrest":
                    videos = arrestVideos;
                    title = `⛓️ Арестовать ${name}`;
                    caption = `⛓️ <code>${ctx.from.first_name}</code> <b>арестовал</b> <code>${name}</code>`;
                    break;
                case "bite":
                    videos = biteVideos;
                    title = `🩸 Укусить ${name}`;
                    caption = `🩸 <code>${ctx.from.first_name}</code> <b>укусил</b> <code>${name}</code>`;
                    break;
                case "hit":
                    videos = hitVideos;
                    title = `👊 Ударить ${name}`;
                    caption = `👊 <code>${ctx.from.first_name}</code> <b>ударил</b> <code>${name}</code>`;
                    break;
                case "lick":
                    videos = lickVideos;
                    title = `👅 Лизнуть ${name}`;
                    caption = `👅 <code>${ctx.from.first_name}</code> <b>лизнул</b> <code>${name}</code>`;
                    break;
                case "slap":
                    videos = slapVideos;
                    title = `🫱 Дать пощёчину ${name}`;
                    caption = `🫱 <code>${ctx.from.first_name}</code> <b>дал пощёчину</b> <code>${name}</code>`;
                    break;
                case "spank":
                    videos = spankVideos;
                    title = `👋 Отшлепать ${name}`;
                    caption = `👋 <code>${ctx.from.first_name}</code> <b>отшлепал</b> <code>${name}</code>`;
                    break;
                case "throw":
                    videos = throwVideos;
                    title = `🫳 Кинуть предмет в ${name}`;
                    caption = `🫳 <code>${ctx.from.first_name}</code> <b>кинул предмет в</b> <code>${name}</code>`;
                    break;
                case "tickle":
                    videos = tickleVideos;
                    title = `🪶 Пощекотать ${name}`;
                    caption = `🪶 <code>${ctx.from.first_name}</code> <b>пощекотал</b> <code>${name}</code>`;
                    break;
                case "fuck":
                    videos = fuckVideos;
                    title = `🔞 Выебать ${name}`;
                    caption = `🔞 <code>${ctx.from.first_name}</code> <b>выебал</b> <code>${name}</code>`;
                    break;
                case "gag":
                    videos = gagVideos;
                    title = `🔇 Заткнуть ${name}`;
                    caption = `🔇 <code>${ctx.from.first_name}</code> <b>заткнул</b> <code>${name}</code>`;
                    break;
                case "smile":
                    videos = smileVideos;
                    title = `😁 Улыбнуться ${name}`;
                    caption = `😁 <code>${ctx.from.first_name}</code> <b>улыбнулся</b> <code>${name}</code>`;
                    break;
                case "sleep":
                    videos = sleepVideos;
                    title = `💤 Переспать с ${name}`;
                    caption = `💤 <code>${ctx.from.first_name}</code> <b>переспал с</b> <code>${name}</code>`;
                    break;
                case "greet":
                    videos = greetVideos;
                    title = `👋 Поздороваться с ${name}`;
                    caption = `👋 <code>${ctx.from.first_name}</code> <b>поздоровался с</b> <code>${name}</code>`;
                    break;
                case "clap":
                    videos = clapVideos;
                    title = `👏 Поапплодировать ${name}`;
                    caption = `👏 <code>${ctx.from.first_name}</code> <b>поапплодировал</b> <code>${name}</code>`;
                    break;
                case "breasts":
                    videos = breastsVideos;
                    title = `🙌 Пощупать грудь ${name}`;
                    caption = `🙌 <code>${ctx.from.first_name}</code> <b>пощупал грудь</b> <code>${name}</code>`;
                    break;
                case "cheeks":
                    videos = cheeksVideos;
                    title = `🤏 Потискать щёчки ${name}`;
                    caption = `🤏 <code>${ctx.from.first_name}</code> <b>потискал щёчки</b> <code>${name}</code>`;
                    break;
                default:
                    return;
            }

            let results = new Array();

            videos.forEach((video, i) => {
                results.push({
                    title: title,
                    type: "video",
                    mime_type: "video/mp4",
                    id: i,
                    thumb_url: video,
                    video_url: video,
                    caption: caption,
                    parse_mode: "HTML"
                });
            });

            await ctx.answerInlineQuery(results, {cache_time: 0});
        }
    } catch (e) {
        logger.error(e);
    }
       
});

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));