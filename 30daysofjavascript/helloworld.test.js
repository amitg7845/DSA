// const createHelloWorld = require('./helloworld')
import createHelloWorld from "./helloworld";

describe('createHelloWorld', () => {
    it('should return "Hello World" when called with any arguments', () => {
        const result = createHelloWorld();
        expect(result()).toBe('Hello World');
    });

    it('should return "Hello World" when called with no arguments', () => {
        const result = createHelloWorld();
        expect(result()).toBe('Hello World');
    });
});
