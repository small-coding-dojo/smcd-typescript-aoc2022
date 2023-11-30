import { expect, test } from "bun:test";

const input = `0`;

test("Elf with most calories", () => {
    var result = elfWithMostCalories(input);
    
    expect(result).toBe(0);
});

test("Elf can carry 1 item with 1 calory", () => {
    var result = elfWithArbitraryName('1')

    expect(result).toBe(1)
})

test("Elf can carry 1 item with 10 calories", () => {
    var result = elfWithArbitraryName('10')

    expect(result).toBe(10)
})

test("Elf can carry 1 item with 100 calories", () => {
    var result = elfWithArbitraryName('100')

    expect(result).toBe(100)
})



function elfWithMostCalories(input: string) {
    return 0
}

function elfWithArbitraryName(input: string) {
    return parseInt(input)
}
