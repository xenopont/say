const m = require('./methods');

const nounNounVerb = function () {
    const interjection = m.getInterjection();

    return m.appendEmoji(
        m.getNoun() + ' ' +
        m.getNoun() + ' ' +
        m.appyNegation(m.getVerb()) +
        (interjection === '' ? '' : ', ' + interjection)
    );
}

const verbNounNoun = function () {
    const interjection = m.getInterjection();

    return m.appendEmoji(
        m.appyNegation(m.getVerb()) + ' ' +
        m.prependPrefix(m.getNoun()) + ' ' +
        m.prependPrefix(m.getNoun()) + 
        (interjection === '' ? '' : ', ' + interjection)
    );
}

module.exports = [
    nounNounVerb,
    verbNounNoun,
];
