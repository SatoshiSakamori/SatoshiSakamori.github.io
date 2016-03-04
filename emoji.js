
var toimage = function(d){
  var emojiranges = [
        '\ud83c[\udf00-\udfff]',
        '\ud83d[\udc00-\ude4f]',
        '\ud83d[\ude80-\udeff]',
        '\ud7c9[\ude00-\udeff]',
        '[\u2600-\u27BF]'
  ];
  var trans = new RegExp(emojiranges.join('|'), 'g');
  var bgimg = 'https://s.yimg.jp/images/mail/emoji/docomo_au/';

  d.body.innerHTML=d.body.innerHTML.replace(trans,
      function(match) {
      var bgstyle = ' background: url("' + bgimg + match.charCodeAt(0).toString(16) + '.png ") no-repeat ';
      return "<span style='display: inline-block; " + bgstyle + " ; background-size: contain; height: 0;padding-top: 20px; overflow: hidden;'>" + match + "</span>"});
};



