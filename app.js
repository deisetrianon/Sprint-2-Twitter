function submitTweet(event) {
  var tweet = document.querySelector('textarea').value;
  var newDiv = document.createElement('div');
  newDiv.style = 'background-color: white; text-align: left; padding: 10px; width: auto; height: auto; margin-bottom: 15px; border: 1px solid #c6e7fb; word-wrap: break-word;';

  var date = new Date();
  var calculateTime = date.getHours() + ':' + date.getMinutes();
  if (date.getMinutes() < 10) {
    calculateTime = date.getHours() + ':' + '0' + date.getMinutes();
  }
  
  newDiv.innerHTML = '<span>' + 'Postado em ' + calculateTime + '</span>' + '<br>' + tweet;
  var main = document.querySelector('main');
  main.appendChild(newDiv);
  event.preventDefault();
}

function characterCounter() {
  var tweetLength = document.querySelector('textarea').value.length;
  var charactersCount = 140 - tweetLength;
  var characterNumber = document.querySelector('#characterNumber');
  characterNumber.innerHTML = charactersCount;
  var submitButton = document.querySelector('input');

  if (tweetLength < 121) {
    characterNumber.style = 'color: #1DA1F2';
  }
  if (tweetLength > 120 && tweetLength < 130) {
    characterNumber.style = 'color: #F0CE4A';
  } 
  if (tweetLength > 130) {
    characterNumber.style = 'color: #F0442E';
  } 
  if (tweetLength > 140) {
    characterNumber.style = 'color: #ABABAB';
  }
  if (tweetLength > 0 && tweetLength < 141) {
    submitButton.style = 'visibility: visible; background-color: #1DA1F2; cursor: pointer';
  } 
  if (tweetLength < 1 || tweetLength > 140) {
    submitButton.style = 'visibility: hidden';
  } 
  
  var textarea = document.querySelector('textarea');
  textarea.style.height = "";
  textarea.style.height = textarea.scrollHeight + 'px';
}