const axios = require("axios");
const action = (ctx) => {
  ctx.answerCbQuery("♥️");
  ctx.deleteMessage().catch(async () => {
    const text = await ctx.telegram.sendMessage(ctx.chat.id,`To avoid multiple messages press the button once`)
     setTimeout(()=>{
     ctx.deleteMessage(text.message_id)
   },3000)
  })
  let input = ctx.match;
  getData(input).then((res) => {
    ctx.telegram.sendMessage(ctx.chat.id, res, {
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [{ text: "More 🔥🔥", callback_data: String(input) }],
          [{ text: "🚪 Menu 🚪", callback_data: "menu" }],
        ],
      },
    });
  });
};

async function options(input) {
  let axi = await axios.get(input);
  return axi.data;
}

async function getData(data) {
  let result;
  switch (data[0]) {
    case "bible":
      result = await options(
        `https://labs.bible.org/api/?passage=random&type=json`
      );
      return `${result[0].bookname} ${result[0].chapter}:${result[0].verse} 
       <b>${result[0].text}</b>`;
    case "wisdom":
      result = await options(`https://zenquotes.io/api/random`);
      return `<b>${result[0].q}</b> 

      ${result[0].a}.`;
    case "science":
      result = await options(`http://yerkee.com/api/fortune/science`);
      return `<b>${result.fortune}</b>`;
    case "politics":
      result = await options(`http://yerkee.com/api/fortune/politics`);
      return `<b>${result.fortune}</b>`;
    case "programming":
      result = await options(`https://nodejs-quoteapp.herokuapp.com/quote`);
      return `<b>${result.quote}</b>`;
    case "people":
      result = await options(`http://yerkee.com/api/fortune/people`);
      return `<b>${result.fortune}</b>`;
    case "miscellaneous":
      result = await options(`https://the-dune-api.herokuapp.com/quotes/1`);
      return `<b>${result[0].quote}</b>`;
  }
}

module.exports = action;
