module.exports = function(bot) {
  return {
    'what':[`Let me tell you about ${bot.subject}.`,`Oh, here comes ${bot.subject} again.`],
    'how':[`Well I'll tell you, no one is better than me on ${bot.subject}. Do you honestly think crooked Hillary could beat me on ${bot.subject}?`],
    'when':[`I've got the best plans. Day one, is when. We'll get on that problem day one, and really ${bot.getVerb()} it.`],
    'why':[`This is a good country, great country. That's why we're not like china. That and ${bot.subject} is why.`]
  };
};
