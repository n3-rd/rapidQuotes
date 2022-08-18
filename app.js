const { Telegraf } = require("telegraf");
const { startCommand, keyboard, menuCommand } = require("./actions/index");
const action = require("./controller/mainfunction");
const { flatten } = require("array-flatten");
require("dotenv").config();
const bot = new Telegraf(process.env.TOKEN);

// Actions... Commands
bot.command("start", (ctx) => startCommand(ctx));
bot.action("menu", (ctx) => menuCommand(ctx));

// Flatten the Keyboard Array
const newKeyboard = flatten(keyboard);
newKeyboard.forEach((x) => {
  if (x.url) return;
  bot.action(x.callback_data, (ctx) => action(ctx));
});

// Start The Bot
bot.launch();

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));


