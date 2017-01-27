"use strict";

/* 
  Main class of our system. Doesn't take any arguments in the constructor, but 
  depends directly on speakeasy-nlp. If it's not available at runtime this class
  will barf on instantiation.
*/

class TrumpBot {
  constructor() {
    this.speak = require('speakeasy-nlp');
  }
  
  /* 
    Only intentionally public function. Ask it a string, returns an object with response and mood keys
  */

  ask(question) {
    this.question = question;
    this.analysis = this.speak.classify(question);
    return this.answer(this.analysis);
  }

  answer(analysis) {
    this.subject = this.getSubject(analysis.subject);
    this.action = analysis.action;
    this.intro = this.getIntro(this.action);
    this.rant = this.getRant();
    this.conclusion = this.getConclusion();

    return {
     response: this.intro + ' ' + this.rant + ' ' + this.conclusion,
     mood: this.getMood()
    }
  }

  coinFlip() {
    return Math.floor(Math.random() * 2);
  }

  getMood() {
    let sentiment = this.speak.sentiment.analyze(this.question);
    var mood;
    const cyrillicPattern = /[\u0400-\u04FF]/;
    if (cyrillicPattern.test(this.question)) {
      mood = 'kompromat';
    } else if (sentiment.score < 0) {
      mood = 'angry';
    } else {
      if (this.coinFlip) {
	mood = 'smug';
      } else {
        mood = 'neutral';
      }
    }
    return mood;
  }

  getIntro(action) {
    let intro;
    let introArray;
    if (action && this.introductions[action]) {
      introArray = this.introductions[action];
    } else {
      let random = Math.floor(Math.random() * (Object.keys(this.introductions).length - 1));
      introArray = this.introductions[Object.keys(this.introductions)[random]];
    }
    let randomIntro = Math.floor(Math.random() * (introArray.length - 1));
    intro = introArray[randomIntro];
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
    let length = (this.analysis.verbs) ? this.analysis.verbs.length : 0;
    let random = Math.floor(Math.random() * (length - 1));
    return (length) ? this.analysis.verbs[random] : 'doing';
  }

  getSubject(raw) {
    let subjectMap = {
      "you":"me",
      "we":"us",
      "I":"you",
    };
    return subjectMap[raw] || raw || 'that';
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
