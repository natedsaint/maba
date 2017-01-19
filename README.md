# maba
Make America Bot Again

## usage
If you want to just play with the command-line, you can do the following.

```
npm install -g maba
maba 'why do you do dis?'
```

If you want to use it somewhere, you can require it, but remember it's a class.

```
npm install --save maba
```

```
var maba = require('maba');
var bot = new maba();
var answer = bot.ask('why you do dis?');
console.warn(answer);
```
