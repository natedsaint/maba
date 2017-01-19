"use strict";

class TrumpBot {
  constructor() {
    this.speak = require('speakeasy-nlp');
  }

  ask(question) {
    this.analysis = this.speak.classify(question);
    return this.answer(this.analysis);
  }

  answer(analysis) {
    this.subject = this.getSubject(analysis.subject);
    this.action = analysis.action;
    this.intro = this.getIntro(this.action);
    this.rant = this.getRant();
    this.conclusion = this.getConclusion();

    return this.intro + ' ' + this.rant + ' ' + this.conclusion;
  }

  getIntro(action) {
    let intro;
    if (action && this.introductions[action]) {
      intro = this.introductions[action];
    } else {
      let random = Math.floor(Math.random() * (Object.keys(this.introductions).length - 1));
      intro = this.introductions[Object.keys(this.introductions)[random]];
    }
    return intro;
  }

  getRant() {
    let random = Math.floor(Math.random() * (this.rants.length - 1));
    return this.rants[random];
  }

  getConclusion() {
    let random = Math.floor(Math.random() * (this.conclusions.length - 1));
    return this.conclusions[random];
  }

  getVerb() {
    let random = Math.floor(Math.random() * (this.analysis.verbs.length - 1));
    return this.analysis.verbs[random];
  }

  getSubject(raw) {
    let subjectMap = {
      "you":"me",
      "we":"us",
      "I":"you",
    };
    return subjectMap[raw] || raw;
  }

  get introductions() {
    return {
      'what':[`Let me tell you about ${this.subject}.`,`Oh, here comes ${this.subject} again.`],
      'how':[`Well I'll tell you, no one is better than me on ${this.subject}. Do you honestly think crooked Hillary could beat me on ${this.subject}?`],
      'when':[`I've got the best plans. Day one, is when. We'll get on that problem day one, and really ${this.getVerb()} it.`],
      'why':[`This is a good country, great country. That's why we're not like china. That and ${this.subject} is why.`]
    };
  };

  get rants() {
    return [`If you think anyone's better at ${this.subject} than me you're crazy, no matter what you ${this.getVerb()}.`];
  }

  get conclusions() {
    return [`Sad!`,`Give me a break!`,`Wrong!`,`Lazy!`,`No energy!`,`Unfair!`];
  }
}

module.exports = TrumpBot;
