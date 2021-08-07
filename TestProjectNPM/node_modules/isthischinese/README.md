# ischinese
ischinese is an npm package for you to know if a string (a series of words) is Chinese.

# Setup
1.　Run <npm i isthischinese> in your terminal after <npm init>.<br/>
2.　Put this at the top in your javascript file,  <br/>
```var chinese = require("isthischinese");```


# Usage 
You can test if a string contains Chinese like this:

```
var chinese = require("isthischinese");
var string = "你好，世界";
console.log(chinese.isChinese("is it Chinese??"));
//console prints "nah"
console.log(chinese.isChinese("string"));
//console prints "yes it is chinese.これは中国語です。"
```
# contact
made by Kenny Ng, who knows Chinese. <br/>
if you have any question(only coding ones please), </br> contact me at <a>contact@kennyng.dev.</a>