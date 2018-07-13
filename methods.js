const emoji = require('./dict/emoji');
const interjections = require('./dict/interjections');
const nouns = require('./dict/nouns');
const prefixes = require('./dict/prefixes');
const verbs = require('./dict/verbs');

const probabilities = require('./probabilities');

const countEmoji = emoji.length;
const countInterjections = interjections.length;
const countNouns = nouns.length;
const countPrefixes = prefixes.length;
const countVerbs = verbs.length;

const random = function (max) {
    return Math.round(Math.random() * max);
}

module.exports = {
    appyNegation: function (msg, probablity = probabilities.negation) {
        if (Math.random() < probablity) {
            return 'не ' + msg;
        }
        return msg;
    },
    
    appendEmoji: function (msg, probability = probabilities.emoji) {
        if (Math.random() < probability) {
            return msg + ' ' + emoji[random(countEmoji)];
        }
        return msg;
    },

    getInterjection: function (probability = probabilities.interjection) {
        if (Math.random() < probability) {
            return interjections[random(countInterjections)];
        }
        return '';
    },
    
    getNoun: function () {
        return nouns[random(countNouns)];
    },
    
    getVerb: function () {
        return verbs[random(countVerbs)];
    },

    prependPrefix: function (msg, probability = probabilities.prefix) {
        if (Math.random() < probability) {
            return prefixes[random(countPrefixes)] + ' ' + msg;
        }
        return msg;
    }
}
