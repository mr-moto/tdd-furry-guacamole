module.exports = stringCompression = string => {
    // reduce 
    const arr = [...string];
    const count = [];
    const a = arr.reduce(function(acc, cur) {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {});
    for (let key in a) {
        count.push(`${key}${a[key]}`);
    }

    return count.join("")

    // regex
    // const count = string.replace(/(.)\1*/g, function(m, $1) {
    //     return $1 + m.length;
    // });
    // return count;
};
