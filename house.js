const phrases = [
    " the farmer sowing his corn that kept",
    " the cock that crow'd in the morn that waked",
    " the priest all shaven and shorn that married",
    " the man all tatter'd and torn that kissed",
    " the maiden all forlorn that milk'd",
    " the cow with the crumpled horn that tossed",
    " the dog that worried",
    " the cat that killed",
    " the rat that ate",
    " the mal that lay in",
    " the house that Jack built",
];

const amountToPrint = process.argv[2] || phrases.length;

phrases.map((phrase) => ({ phrase, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ phrase }) => phrase);

console.log(`This is${phrases.slice(0, amountToPrint).join("")}.`);
