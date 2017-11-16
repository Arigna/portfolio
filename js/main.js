$(function(){ // Fonction attente chargement du DOM
    
    $('header h1').on('click', function(){ // Reload de la page lors du click sur h1
        window.location.reload();
    });

    $('nav a, .tel, .mail').on('click', function(event){ // Annuler comportement naturel des liens principaux
        event.preventDefault();
    });



    // Animation scrollTop du menu principal :
    $('[href="#about"]').parent().on('click', function(){
        $('html,body').animate({scrollTop: $("#about").offset().top}, 'slow');
    });
    $('[href="#profil"]').parent().on('click', function(){
        $('html,body').animate({scrollTop: $("#profil").offset().top}, 'slow');
    });
    $('[href="#formation"]').parent().on('click', function(){
        $('html,body').animate({scrollTop: $("#formation").offset().top}, 'slow');
    });
    $('[href="#techcomp"]').parent().on('click', function(){
        $('html,body').animate({scrollTop: $("#techcomp").offset().top}, 'slow');
    });
    $('[href="#exp"]').parent().on('click', function(){
        $('html,body').animate({scrollTop: $("#exp").offset().top}, 'slow');
    });



    // Script pour afficher les coordonées :
    $('.tel').on('click', function(){
        $(this).html('<a href="tel:0638824638">(+33) 06 38 82 46 38</a>');
    });
    $('.mail').on('click', function(){
        $(this).html('<a href="mailto:arigna.p@gmail.com">arigna.p@gmail.com</a>');
    });



    // Responsive :
    $('header p').on('click', function(){
        $('header nav').slideToggle(400);
    });

    // Refermer la nav via la commande stopPropagation :
    $('header').on('click', function(event){
        event.stopPropagation();
    });
    $('header nav li, html').on('click', function(){
        $('header nav').slideUp(400);
    });

});