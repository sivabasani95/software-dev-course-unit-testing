//const FOR main.test.js:
const { calculateDiscount, filterProducts, sortInventory } = require('./main.js');
describe("calculateDiscount", () => {
test("calculates discount correctly for valid inputs", () => {
    expect(calculateDiscount(100, 0.1)).toBe(90);
});
    test("handles an invalid discount rate gracefully", () => {
         expect(calculateDiscount(100, -0.1)).toBe(null);
});
     test("handles edge case with price of 0", () => {
        expect(calculateDiscount(0, 0.2)).toBe(0);
    });
});
describe("filterProducts", () => {
    test("filters products based on callback condition", () => {
        const products = [
            { id: 1, name: "Laptop", price: 1000 },
            { id: 2, name: "Mouse", price: 25 },
            { id: 3, name: "Keyboard", price: 75 }
        ];
        test("filters products based on callback condition", () => {
            const filtered = filterProducts(products, (product) => product.price > 50);
        const filtered = filterProducts(products, (product) => product.price > 50);
        expect(filtered).toEqual([
            { id: 1, name: "Laptop", price: 1000 },
            { id: 3, name: "Keyboard", price: 75 }
        ]);
    });
})