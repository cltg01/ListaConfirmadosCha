
    async function confirmar() {
      const nome = document.getElementById('nome').value.trim();
      const acompanhantes = document.getElementById('acompanhantes').value.trim();

      if (!nome) {
        alert("Por favor, preencha seu nome.");
        return;
      }

      try {
        const resposta = await fetch('https://script.google.com/macros/s/AKfycbw1dABo4T8FglrE1K6hOMOP49lwzqxF44_6n6D3Ud4K9N6JMOSr_13XSUMaR0Y9ZVt0/exec', {
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
