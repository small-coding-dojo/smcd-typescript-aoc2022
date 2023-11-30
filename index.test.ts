import { expect, it, test } from "bun:test";

const input = `0`;

test("Elf with most calories", () => {
    var result = elfWithMostCalories(input);
    
    expect(result).toBe(0);
});

it.each([[100, '100'],[1, '1'],[10, '10']
])(`given %i when counting expecting %s`, (expected, input) => {
    var result = elfWithArbitraryName(input)

    expect(result).toBe(expected)
});

test("One elf can carry multiple items", () => {
    var result = elfWithArbitraryName("100\n200\n300")

    expect(result).toBe(600)
})

function elfWithMostCalories(input: string) {
    return 0
}

function elfWithArbitraryName(input: string) {
    return input
        .split("\n")
        .map( line => parseInt(line) )
        .reduce( (sum, current) => sum+current, 0)
}
