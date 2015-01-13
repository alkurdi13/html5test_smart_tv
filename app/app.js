//your script here
'use strict';
var app = new Orangee.Application();

var InvisibleViewForKeyboard = Orangee.ItemView.extend({
  template: false,
  keyEvents: {
    'up': 'onKeyUp',
    'down': 'onKeyDown',
  },
  onKeyUp: function() {
    orangee.log("onKeyUp");
    window.scrollBy(0, -100);
  },
  onKeyDown: function() {
    orangee.log("onKeyDown");
    window.scrollBy(0, 100);
  },
});

$(document).ready(function() {
  app.start();
  new InvisibleViewForKeyboard().render();
});

