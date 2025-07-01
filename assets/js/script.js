
  function confirmar() {
    const nome = document.getElementById("nome").value.trim();
    const acompanhantes = document.getElementById("acompanhantes").value.trim();
    if (!nome) {
      alert("Por favor, preencha seu nome.");
      return;
    }

    const script = document.createElement("script");
    const url = `https://script.google.com/macros/s/AKfycbwpzykpvpHSL6d2LLw_ThERaq3CnDsr1y5UxCEE2GDyAFIKcSZ8KJycW350IdKcLeQh/exec?nome=${encodeURIComponent(nome)}&acompanhantes=${encodeURIComponent(acompanhantes)}&callback=redirecionar`;
    script.src = url;
    document.body.appendChild(script);
  }

  function redirecionar(resposta) {
    window.location.href = resposta.url;
  }
