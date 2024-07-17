import assert from 'assert';
import { printFirstTenNumbers } from '../index.js';

const consoleLog = [];
const originalConsoleLog = console.log;
console.log = (...args) => {
    consoleLog.push(...args);
};

describe('Index.js', () => {

    beforeEach(() => {
        consoleLog.length = 0; 
    });

    it('should print numbers from 1 to 10', () => {
        printFirstTenNumbers();
        assert.strictEqual(consoleLog.length, 10);
        for (let i = 1; i <= 10; i++) {
            assert.strictEqual(consoleLog[i - 1], i); 
        }
    });

});

after(() => {
    console.log = originalConsoleLog; 
});
