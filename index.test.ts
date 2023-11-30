import { expect, it, test } from "bun:test";

const input = `0`;

test("Elf with most calories", () => {
    var result = elfWithMostCalories(input);
    
    expect(result).toBe(0);
});

it.each([[100, '100'],[1, '1'],[10, '10']
])(`given $input when counting expecting $expected`, (expected, input) => {
    var result = elfWithArbitraryName(input)

    expect(result).toBe(expected)
});


function elfWithMostCalories(input: string) {
    return 0
}

function elfWithArbitraryName(input: string) {
    return parseInt(input)
}
