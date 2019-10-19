module.exports = function(css) {
    console.log(css);
    console.log(window.innerWidth);

    // 证明是在浏览器环境下运行的
    if (window.innerWidth >= 1366) {
        return css.replace('#eee', 'red');
    } else {
        return css.replace('#eee', 'green');
    }
}