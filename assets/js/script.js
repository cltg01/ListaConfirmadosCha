
  function confirmar() {
    const nome = document.getElementById("nome").value.trim();
    const acompanhantes = document.getElementById("acompanhantes").value.trim();
    if (!nome) {
      alert("Por favor, preencha seu nome.");
      return;
    }

    const script = document.createElement("script");
    const url = `https://script.google.com/macros/s/AKfycbw1dABo4T8FglrE1K6hOMOP49lwzqxF44_6n6D3Ud4K9N6JMOSr_13XSUMaR0Y9ZVt0/exec?nome=${encodeURIComponent(nome)}&acompanhantes=${encodeURIComponent(acompanhantes)}&callback=redirecionar`;
    script.src = url;
    document.body.appendChild(script);
  }

  function redirecionar(resposta) {
    window.location.href = resposta.url;
  }
