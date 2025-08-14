
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
tsParticles.load("particles-js", {
      background: { color: "#0f0f0f" },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          resize: true
        },
        modes: { repulse: { distance: 100, duration: 0.4 } }
      },
      particles: {
        color: { value: ["#00d4ff", "#ff6ec7"] },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          speed: 1
        },
        number: { density: { enable: true, area: 800 }, value: 50 },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 5 } }
      },
      detectRetina: true
    });

