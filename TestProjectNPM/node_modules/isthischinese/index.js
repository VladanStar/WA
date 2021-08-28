function isChinese (input) {
    var chinese = /[\u4e00-\u9fcc]/;
    if (typeof input === "number") {
        return "that is a Arabic numeral. Chinese numberals are like:  一二三四五";
    }
    if (typeof input !== "string") {
        return "that is not even a word";
    }
    if (chinese.test(input)){
        return "yes it is chinese.これは中国語です。";
    } else {
        return "nah";
    }
}

module.exports = {
    isChinese:isChinese,
}
