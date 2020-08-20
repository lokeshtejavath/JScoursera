(function (window){
  var speakword = "GoodBye";
  var byeSpeaker = function(name){
    console.log(speakword + " " + name)
  };
  window.byeSpeaker = byeSpeaker;
})(window);