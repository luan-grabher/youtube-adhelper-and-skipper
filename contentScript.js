// Função para verificar e clicar no botão de pular anúncio
function skipAd() {
    const skipButton = document.querySelector('button.ytp-skip-ad-button');
    if (skipButton) {
      skipButton.click();
      console.log("Anúncio pulado!");
    }
  }
  
  // Executa o script a cada intervalo de tempo para verificar anúncios
  const intervalId = setInterval(skipAd, 1000);
  
  // Verifica se o usuário navega para outra página no YouTube, reiniciando o script
  new MutationObserver(() => {
    clearInterval(intervalId);
    setInterval(skipAd, 1000);
  }).observe(document, { subtree: true, childList: true });
  