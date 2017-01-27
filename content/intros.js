module.exports = function(bot) {
  return {
    'what':[
      `Let me tell you about ${bot.subject}.`,
      `Oh, here comes ${bot.subject} again.`,
      `Ungrateful haters want to know about ${bot.subject}?`,
      `I'm very smart. The smartest.`,
      `I have the best words.`,
      `FAKE NEWS will tell you differently, folks. But you can trust me on ${bot.subject}`
    ],
    'how':[
      `Well I'll tell you, no one is better than me on ${bot.subject}. Do you honestly think crooked Hillary could beat me on ${bot.subject}?`,
      `I'm going to build the wall! Will anyone else build the wall?`,
      `Very sad, very terrible people ask this. And I don't know you, but I like you. You're great.`
    ],
    'when':[
      `I've got the best ${bot.getVerb()}s. Day one, is when. We'll get on that problem day one, and really ${bot.getVerb()} it.`,
      `How do you folks like this weather? God said it was going to be a good day. And that's the kind of day when I take care of ${bot.subject}.`
    ],
    'why':[
      `This is a good country, great country. That's why we're not like China. That and ${bot.subject} is why.`,
      `I'll tell you why, it's because WEAK OBAMA and CROOKED HILLARY don't want you to win. Then can't even ${bot.getVerb()} to save their lives.`,
      `Why not? We're gonna do it. I know it. We'll win. We can. We will.`
    ]
  };
};
