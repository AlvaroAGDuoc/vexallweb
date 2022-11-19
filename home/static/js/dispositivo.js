
  
const $boton = document.getElementById('botonDescarga');
const $descarga = document.getElementById('descarga');


(function () {
    $boton.addEventListener('click', function(e) {
        let navegador = navigator.userAgent;
        if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
            $descarga.innerHTML = "<h1>MOVIL</h1> <p>aaaaaaaaaaaaaa</p>"
            e.preventDefault()
        } else {
            $descarga.innerHTML = "<h1>PC</h1> <p>aaaaaaaaaaaaaa</p>"
            e.preventDefault()
        }
    })

})();

