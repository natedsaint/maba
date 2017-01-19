const commands = require('commander');
const TrumpBot = require('./TrumpBot');

commands.parse(process.argv);

if (!commands.args || commands.args.length === 0) {
  console.warn("WRONG! -- you need to provide an argument in the form of a question");
  process.exit();
} else {
  const bot = new TrumpBot();
  const response = bot.ask(commands.args[0]);
  console.log(response);
}
