const verbs = require('./dict/verbs');
const nouns = require('./dict/nouns');

const nounsCount = nouns.length;
const verbsCount = verbs.length;

const negativeProbability = 0.25;

const say = function() {
    if (nounsCount > 0 && verbsCount > 0) {
        const one = Math.floor(Math.random() * verbsCount);
        const two = Math.floor(Math.random() * nounsCount);
        const three = Math.floor(Math.random() * nounsCount);

        return ((Math.random() < negativeProbability) ? 'не ' : '') + verbs[one] + ' ' + nouns[two] + ' ' + nouns[three];
    }

    return '';
}


module.exports = say();
