var slideIndex = 1;     // slides indexés à partir de 1
showSlides(slideIndex);

var timeout = null;
timeout = setTimeout(automaticChange, 7000);  // changer de slide automatiquement après 7 secondes

function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);

    // si changement automatique activé, on reset le timer
    if (timeout !== null) {
        clearTimeout(timeout);
        timeout = setTimeout(automaticChange, 7000);
    }
}

function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);

    if (timeout !== null) {
        clearTimeout(timeout);
        timeout = setTimeout(automaticChange, 7000);
    }
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1; }      // après la dernière → revient à la 1
    if (n < 1) { slideIndex = slides.length; }      // avant la première → va à la dernière

    // cacher toutes les slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // enlever la classe active de tous les points
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // afficher la slide actuelle + activer le bon point
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function automaticChange() {
    slideIndex++;
    showSlides(slideIndex);
    timeout = setTimeout(automaticChange, 7000);   // rappel après 7s
}
