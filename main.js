// Obtém o formulário e adiciona um evento de envio
const form = document.getElementById('contact');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // Impede o envio normal do formulário
  
  // Obtém os dados do formulário
  const nome = form.elements['name'].value;
  const email = form.elements['email'].value;
  const mensagem = form.elements['message'].value;
  
  // Cria uma nova requisição XMLHttpRequest
  const xhr = new XMLHttpRequest();
  
  // Configura a requisição
  xhr.open('POST', './enviar_email.php', true);
  
  // Define o cabeçalho da requisição (opcional)
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  
  // Configura a função de callback para tratar a resposta do servidor
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // A requisição foi concluída com sucesso
        console.log(xhr.responseText);
        // Faça algo com a resposta, como exibir uma mensagem de sucesso
      } else {
        // Ocorreu um erro na requisição
        console.error('Erro na requisição: ' + xhr.status);
      }
    }
  };
  
  // Envia os dados do formulário para o arquivo PHP
  xhr.send('nome=' + encodeURIComponent(nome) + '&email=' + encodeURIComponent(email) + '&mensagem=' + encodeURIComponent(mensagem));
});
