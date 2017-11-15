document.addEventListener("DOMContentLoaded", function(){ // Fonction d'attente chargement du DOM
    
    // Les variables :
    var titleSite = document.querySelector('header h1'); // Titre du site
    var mainLinks = document.querySelectorAll('nav a'); // Liens principaux


    // Les écouteurs :
    titleSite.addEventListener('click', reloadPage); // Capter le click sur le titre du site
    for (var i=0; i < mainLinks.length; i++) {
        mainLinks[i].addEventListener('click', cancelLinks); // Capter le click sur les liens principaux
    }


    // Les fonctions :
    function reloadPage(){ // Fonction rechargement de la page
        window.location.reload(true);
    };
    function cancelLinks(event){ // Fonction d'annulation fonctionnement naturel liens
        event.preventDefault();
    }

});