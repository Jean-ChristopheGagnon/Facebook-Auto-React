var reactIndex = 2;

chrome.storage.sync.get(['reactIndex'], function(result) {
  reactIndex = result.reactIndex;
});

function changeReactIndex(newIndex){
  chrome.storage.sync.set({'reactIndex': newIndex}, function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.reload(tabs[0].id);
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  var like = document.getElementById("like");
  var love = document.getElementById("love");
  var care = document.getElementById("care");
  var haha = document.getElementById("haha");
  var wow = document.getElementById("wow");
  var sad = document.getElementById("sad");
  var angry = document.getElementById("angry");

  like.addEventListener( 'click', function() {
    changeReactIndex(0);
  });
  love.addEventListener( 'click', function() {
    changeReactIndex(1);
  });
  care.addEventListener( 'click', function() {
    changeReactIndex(2);
  });
  haha.addEventListener( 'click', function() {
    changeReactIndex(3);
  });
  wow.addEventListener( 'click', function() {
    changeReactIndex(4);
  });
  sad.addEventListener( 'click', function() {
    changeReactIndex(5);
  });
  angry.addEventListener( 'click', function() {
    changeReactIndex(6);
  });
});


function getLikeButtons(){

  let likeButtonCollection = document.getElementsByClassName("e71nayrh");

  for (i = 0; i < likeButtonCollection.length; i++) {
    likeButtonCollection[i].addEventListener("click", function(){
      document.location.reload();
    });
  }
}

function getReacts(){
  let reactCollection = document.getElementsByClassName("_iuw");
  let reactArray = Array.from(reactCollection);

  while (reactArray.length > 0){
    reactArray[reactIndex].click();
    for(var i = 0; i < 7; i++){
      reactArray.shift();
    }
  }
}

getLikeButtons();
setInterval(getLikeButtons, 1111);

getReacts();
setInterval(getReacts, 1111);
