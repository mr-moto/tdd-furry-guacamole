module.exports = stringCompression = string => {
    // reduce NOT WORKING.. YET
//     const arr = [...string];
//     const count = [];
//     const a = arr.reduce(function(acc, cur) {
//         acc[cur] = (acc[cur] || 0) + 1;
//         count.push(`${cur}${acc[cur]}`);
//         return count
//     }, []);
//     // return a
//  return a.join()

    // regex 
    const count = string.replace(/(.)\1*/g, function(m, $1) {
        return $1 + m.length;
    });
    return count;
};
