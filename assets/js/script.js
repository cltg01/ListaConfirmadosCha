
    async function confirmar() {
      const nome = document.getElementById('nome').value.trim();
      const acompanhantes = document.getElementById('acompanhantes').value.trim();

      if (!nome) {
        alert("Por favor, preencha seu nome.");
        return;
      }

      try {
        const resposta = await fetch('URL_DO_SEU_WEB_APP', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ nome, acompanhantes })
        });

        const dados = await resposta.json();
        window.location.href = dados.url; // Redireciona para o WhatsApp

      } catch (e) {
        alert("Erro ao enviar confirmação. Tente novamente.");
      }
    }
