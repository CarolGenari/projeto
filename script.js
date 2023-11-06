function relogio() {
    const relogio = document.querySelector('p.relogio');

  function criaHoraSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-PT', {
      hour12: false,
      timeZone: 'GMT'
    });
  }

  let segundos = 0; 
  let timer; 

  function iniciaRelogio() {
    timer = setInterval(() => { 
      segundos++;
      relogio.innerHTML = criaHoraSegundos(segundos); 
    }, 1000);
  }

  document.addEventListener('click', function(event) {
    const elemento = event.target;  
    if (elemento.classList.contains('iniciar')) {
      relogio.classList.remove('pausado'); 
      clearInterval(timer);  
      iniciaRelogio();
    }

    if (elemento.classList.contains('pausar')) {
      clearInterval(timer);
      relogio.classList.add('pausado');
    }

    if (elemento.classList.contains('zerar')) {
      clearInterval(timer);
      relogio.innerHTML = '00:00:00';
      relogio.classList.remove('pausado');
      segundos = 0; 
    }
  });
}

relogio();


