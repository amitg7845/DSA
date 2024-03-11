/**
 * @return {Function}
 */
const createHelloWorld = function() {    
    return function(...args) {
        return 'Hello World';
    }
};

// const result = createHelloWorld();
// console.log(result());
/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
// console.log(createHelloWorld());
// module.exports = createHelloWorld;
export default createHelloWorld;