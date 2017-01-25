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
    return require('./content/intros.js')(this);
  };

  get rants() {
    return require('./content/rants.js')(this);
  }

  get conclusions() {
    return require('./content/conclusions.js')(this);
  }
}

module.exports = TrumpBot;
