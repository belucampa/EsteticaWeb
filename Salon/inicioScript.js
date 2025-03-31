// el botón se va a mostrar cuando haces scroll hacia abajo
window.onscroll = function() { // evento cuando hagas scroll
    let btnArriba = document.getElementById('btn-arriba'); // selecciono el boton
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) { // uso ambas pq depende el navegador (dice cuantos px el usuario se desplaza)
        btnArriba.style.display = "block";  // se muestra el boton
    } else {
        btnArriba.style.display = "none";   // oculta el boton
    }
};