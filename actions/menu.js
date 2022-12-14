const keyboard = [
  [
    {
      text: "Bible ๐๐",
      callback_data: "bible",
    },
    {
      text: "People ๐จโ๐ฉโ๐งโ๐ง๐จโ๐ฉโ๐งโ๐ง",
      callback_data: "people",
    },
  ],
  [
    {
      text: "Programming ๐งโ๐ป๐ฉโ๐ป",
      callback_data: "programming",
    },
  ],
  [
    {
      text: "Miscellaneous ๐คทโโ๐คทโโ",
      callback_data: "miscellaneous",
    },
    {
      text: "Politics ๐ฃ๐ฃ",
      callback_data: "politics",
    },
  ],
  [
    {
      text: "Wisdom ๐ง ๐ง ",
      callback_data: "wisdom",
    },
    {
      text: "Science ๐๐",
      callback_data: "science",
    },
  ],
  [
    {
      text: "๐บ Channel ๐บ",
      url: "t.me/RapidQuotes",
    },
  ],
  [
    {
      text: "๐จโ Contact the Developer ๐จโ",
      url: "https://twitter.com/develop_ed?s=09",
    },
  ],
];

const menuCommand = (ctx) => {
  ctx.deleteMessage().catch(()=>{ctx.reply(`Tap me once, i will answer you`)});
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `<b>${ctx.chat.first_name}</b>, 
    Below are the available categories which you can inspect.
We love to see you here Daily ๐๐
`,
    {
      parse_mode: "Html",
      reply_markup: {
        inline_keyboard: keyboard,
      },
    }
  );
};

module.exports = { keyboard, menuCommand };
