import Calculator from "./calculator";

describe("Calculator", () => {
    let calculator;
    beforeEach(() => {
        calculator = new Calculator();
    });
    it("should add 2 numbers", () => {
        expect(calculator.add(1, 2)).toBe(3);
    });
    it("should subtract 2 numbers", () => {
        expect(calculator.sub(2, 1)).toBe(1);
    });
    it("should multiply 2 numbers", () => {
        expect(calculator.mul(2, 2)).toBe(4);
    });
    it("should divide 2 numbers", () => {
        expect(calculator.div(4, 2)).toBe(2);
    });
});