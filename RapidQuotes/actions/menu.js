const keyboard = [
  [
    {
      text: "Bible 📖📖",
      callback_data: "bible",
    },
    {
      text: "People 👨‍👩‍👧‍👧👨‍👩‍👧‍👧",
      callback_data: "people",
    },
  ],
  [
    {
      text: "Programming 🧑‍💻👩‍💻",
      callback_data: "programming",
    },
  ],
  [
    {
      text: "Miscellaneous 🤷‍♂🤷‍♂",
      callback_data: "miscellaneous",
    },
    {
      text: "Politics 🗣🗣",
      callback_data: "politics",
    },
  ],
  [
    {
      text: "Wisdom 🧠🧠",
      callback_data: "wisdom",
    },
    {
      text: "Science 📚📚",
      callback_data: "science",
    },
  ],
  [
    {
      text: "📺 Channel 📺",
      url: "t.me/RapidQuotes",
    },
  ],
  [
    {
      text: "👨‍ Contact the Developer 👨‍",
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
We love to see you here Daily 🌈🌈
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
