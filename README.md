# maba
Make America Bot Again - the really stupid bot behind [https://trump-talk.com/](Trump-talk.com)

## usage
If you want to just play with the command-line, you can do the following.

```bash
npm install -g maba
maba 'why do you do dis?'
```

Will return something like: 
```
This is a good country, great country. That's why we're not like china. That and me is why. If you think anyone's better at me than me you're crazy, no matter what you do. Sad!
```

If you want to use it somewhere, you can require it, but remember it's a class.

```bash
npm install --save maba
```

```javascript
var maba = require('maba');
var bot = new maba();
var answer = bot.ask('why you do dis?');
console.warn(answer);
```
