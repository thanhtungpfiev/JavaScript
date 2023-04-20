String.prototype.cliche = function () {
    var cliche = ["lock and load", "touch base", "open the kimono"];
    for (var i = 0; i < cliche.length; i++) {
        var index = this.indexOf(cliche[i]);
        if (index >= 0) {
            return true;
        }
    }
    return false;
};

var sentences = [
    "I'll send my car around to pick you up.",
    "Let's touch base in the morning and see where we are.",
    "We don't want to open the kimono, we just want to inform them.",
];
for (var i = 0; i < sentences.length; i++) {
    var phrase = sentences[i];
    if (phrase.cliche()) {
        console.log("CLICHE ALERT: " + phrase);
    }
}

String.prototype.palindrome = function () {
    var start = 0;
    var end = this.length - 1;
    while (start < end) {
        if (this.charAt(start) !== this.charAt(end)) {
            return false;
        }
        start++;
        end--;
    }
    return true;
};

var str1 = "abc";
var str2 = "aba";
var str3 = "abba";
var str4 = "abbc";
var str5 = "";
var str6 = "a";
var str7 = "ab";
console.log(str1.palindrome());
console.log(str2.palindrome());
console.log(str3.palindrome());
console.log(str4.palindrome());
console.log(str5.palindrome());
console.log(str6.palindrome());
console.log(str7.palindrome());
