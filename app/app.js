//your script here
'use strict';
var app = new Orangee.Application({
  enableScroller: function() {
    this.scroller = new orangee.scroller("#contentwrapper");
    orangee.log("scroller enabled");
  },
});

var KeyEventGhostView = Orangee.ItemView.extend({
  template: false,
  keyEvents: {
    'up': 'onKeyUp',
    'down': 'onKeyDown',
  },
  onKeyUp: function() {
    orangee.log("onKeyUp");
    app.scroller.scrollBy(0, 100);
  },
  onKeyDown: function() {
    orangee.log("onKeyDown");
    app.scroller.scrollBy(0, -100);
  },
});

$(document).ready(function() {
  app.start();
  new KeyEventGhostView().render();
});
