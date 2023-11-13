function relogio() {
    const relogio = document.querySelector('.time');
    let segundos = 0;
    let timer;

    console.log(relogio)

    function formatarSegundos(segundos) {
        const seg = new Date(segundos * 1000);
        return seg.toLocaleTimeString('pt', {
            hour12: false,
            timeZone: 'UTC'
        })
    }

    function iniciarRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = formatarSegundos(segundos);
        }, 1000)
    }

    document.addEventListener('click', function (e) {
        let elemento = e.target;

        if (elemento.classList.contains('iniciar')) {
            clearInterval(timer);
            relogio.classList.remove('pausado');
            iniciarRelogio();
        }

        if (elemento.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado');
        }

        if (elemento.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.classList.remove('pausado');
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }
    })

}

relogio();
