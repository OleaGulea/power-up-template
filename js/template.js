/* global TrelloPowerUp */

var WHITE_ICON = './images/icon-white.svg';
var GRAY_ICON = './images/icon-gray.svg';

var colorMap = {
  black: 'black',
  red: 'red'
};


var cardButtonCallback = function(t){
  var colors = Object.keys(colorMap).map(function(colorCode){
    return {
      text: colorMap[colorCode],
      callback: function(t){
        return t.attach({ name: colorMap[colorCode] })
        .then(function(){
          return t.closePopup();
        })
      }
    };
  });

  return t.popup({
    title: 'Choose color',
    items: colors,
    search: {
      count: 5,
      placeholder: 'Choose color',
      empty: 'No parks found'
    }
  });
};

TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      icon: GRAY_ICON,
      text: 'Template',
      callback: cardButtonCallback
    }];
  },
  'show-settings': function(t, options){
    return t.popup({
      title: 'Settings',
      url: './settings.html',
      height: 184
    });
  }
});
