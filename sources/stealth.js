module.exports = function (input) {
    return input.slice(0, -4).replace(/[^\s]/g, '*') + input.slice(-4);
};
