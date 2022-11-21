const $boton = document.getElementById('botonDescarga');
const $descarga = document.getElementById('descarga');
const $qr = document.getElementById('qr');


(function () {
    $boton.addEventListener('click', function(e) {
        let navegador = navigator.userAgent;
        if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
            $descarga.innerHTML = "<a class='link' href='https://drive.google.com/uc?export=download&id=1ckEFY8vcs6NzVj7dH9A41fVi1SGbvCti' target='_blank'>Link de descarga</a>"      
        } else {      
            $qr.removeAttribute("hidden")            
        }
    })
})();

