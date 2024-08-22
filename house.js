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
]

const args = get_process_args(phrases.length);

console.log(`This is${echo(shuffle(phrases, args.shuffle), args.echo).slice(0, args.print_count).join("")}.`);

function echo(to_echo, echo = false) {
    if (echo) {
        return to_echo;
    }

    return to_echo.map((value) => value.repeat(2));
}

function shuffle(to_shuffle, shuffle = false) {
    if (!shuffle) {
        return to_shuffle;
    }

    return to_shuffle
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
}

function get_process_args(default_print_count) {
    const args = process.argv
        .slice(2)
        .map((value) => value.split("="));

    const userInput = Object.fromEntries(args.map(([key, value]) => [
        key.trim().replace("--", ""),
        value.trim(),
    ]));

    return {
        ...userInput,
        print_count: userInput.print_count ?? default_print_count,
    }
}
