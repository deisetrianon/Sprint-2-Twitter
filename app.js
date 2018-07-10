function submitTweet(event) {
  /* Captura o que o usuário insere e cria uma div para colocá-lo */
  var tweet = document.querySelector('textarea').value;
  var newDiv = document.createElement('div');
  newDiv.style = 'background-color: white; text-align: left; padding: 10px; width: auto; height: auto; margin-bottom: 15px; border: 1px solid #c6e7fb; word-wrap: break-word;';

  /* Verifica o horário em que o 'tweet' é enviado e adiciona o número zero aos minutos, quando necessário */
  var date = new Date();
  var calculateTime = date.getHours() + ':' + date.getMinutes();
  if (date.getMinutes() < 10) {
    calculateTime = date.getHours() + ':' + '0' + date.getMinutes();
  }
  
  /* Insere o 'tweet' na página, no local designado */
  newDiv.innerHTML = '<span>' + 'Postado em ' + calculateTime + '</span>' + '<br>' + tweet;
  var main = document.querySelector('main');
  main.appendChild(newDiv);

  /* Atualiza o formulário após o envio do 'tweet' */
  document.getElementById('form').reset();
  var submitButton = document.querySelector('input');
  submitButton.style = 'visibility: hidden';
  var characterNumber = document.querySelector('#characterNumber');
  characterNumber.innerHTML = 140;
  characterNumber.style = 'color: #1DA1F2';
  var textarea = document.querySelector('textarea');
  textarea.style.height = '';

  event.preventDefault();
}

function characterCounter() {
  /* Contabiliza a quantidade de caracteres inseridos e a quantidade de caracteres restantes */
  var tweetLength = document.querySelector('textarea').value.length;
  var charactersCount = 140 - tweetLength;
  var characterNumber = document.querySelector('#characterNumber');
  characterNumber.innerHTML = charactersCount;
  var submitButton = document.querySelector('input');

  /* Modifica o estilo do contador de caracteres e do botão, de acordo com a quantidade de caracteres inserida */
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
  
  /* Faz a altura da área de texto expandir de acordo com o tamanho do 'tweet' inserido */
  var textarea = document.querySelector('textarea');
  textarea.style.height = '';
  textarea.style.height = textarea.scrollHeight + 'px';
}