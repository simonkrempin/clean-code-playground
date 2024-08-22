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

const args = getProcessArgs(phrases.length);

printHouse(getSorter(args.order), getFormatter(args.format));

function printHouse(sort, echo) {
    console.log(`This is${sort(echo(phrases)).slice(0, args.printCount).join("")}.`);
}

function getSorter(order) {
    switch (order) {
        case "shuffle":
            return (toShuffle) => toShuffle
                .map((phrase) => ({
                    phrase,
                    sort: Math.random(),
                }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ phrase }) => phrase);
        case "length":
            return (toShuffle) => toShuffle.sort((a, b) => a.length - b.length);
        default:
            return (toShuffle) => toShuffle;
    }
}

function getFormatter(format) {
    switch (format) {
        case "echo":
            return (toEcho) => toEcho.map((phrase) => phrase.repeat(2));
        case "reverse":
            return (toEcho) => toEcho.map((phrase) => [...phrase].reverse().join(""))
        default:
            return (toEcho) => toEcho;
    }
}

function getProcessArgs(default_print_count) {
    const args = process.argv
        .slice(2)
        .map((value) => value.split("="));

    const userInput = Object.fromEntries(args.map(([key, value]) => [
        key.trim().replace("--", ""), value.trim(),
    ]));

    return {
        ...userInput,
        printCount: userInput.print_count ?? default_print_count,
    }
}
