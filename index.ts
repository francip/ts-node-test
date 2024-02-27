export function hello(who: string = "world"): string {
    return `Hello ${who}! `;
}

console.log(hello("ts-node"));
console.log("Server started");