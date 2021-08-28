var assert = require('assert');
var pkg = require('../index.js');

describe('isitchinse', function() {
  describe('isChinese', function() {
    it('should return error message when the input is not a string', function() {
      assert.strictEqual(pkg.isChinese(420), "that is a Arabic numeral. Chinese numberals are like:  一二三四五");
      assert.strictEqual(pkg.isChinese(false), "that is not even a word");
    });
    it('should return confirmation message when the input contains Chinese', function() {
      assert.strictEqual(pkg.isChinese("你好，世界"), "yes it is chinese.これは中国語です。");
    });
  });
  
});