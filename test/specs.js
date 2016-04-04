var expect = require('expect.js');
var stealth = require('../sources/stealth');

describe('Must render a stealth output', function () {
    it('"42" should return "42"', function () {
        return expect(stealth('42')).to.be.equal('42');
    });
    it('"0" should return "0"', function () {
        return expect(stealth('0')).to.be.equal('0');
    });
    it('"" should return an empty string', function () {
        return expect(stealth('')).to.be.equal('');
    });
    it('"coderpower" should return "******ower"', function () {
        return expect(stealth('coderpower')).to.be.equal('******ower');
    });
    it('"Read the manual" should return "**** *** **nual"', function () {
        return expect(stealth('Read the manual')).to.be.equal('**** *** **nual');
    });
});
