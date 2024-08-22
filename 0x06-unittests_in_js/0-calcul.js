/** Basic test with Mocha and Node assertion library */
function calculateNumber(a, b) {
    const an = Math.round(a);
    const bn = Math.round(b);
    const c = an + bn;
    return c;
}

module.exports = calculateNumber;
