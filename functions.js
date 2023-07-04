// Funções usando Jquery.

document.addEventListener('DOMContentLoaded', function() {
    //Ativar carrossel

    $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
    });

    //Abrir menu mobile

    $('#menu_hamburguer').click(function(){

        if($(".lista_menu_mobile").css("display") == "none"){
            $('.lista_menu_mobile').css("display", "flex");
        }else{
            $('.lista_menu_mobile').css("display", "none");
        }

    });

});

// Funções usando JS Puro.

function redirecionaprotea(){
    let linktest = document.getElementById('protea');
    linktest.onclick = function () {
        let url = "projetos/Protea_Flowers/pages/home/index.html";
        window.open(url, '_blank');
    };
}

function redirecionaroadtech(){
    let linktest = document.getElementById('roadtech');
    linktest.onclick = function () {
        let url = "projetos/RoadTech/index.html";
        window.open(url, '_blank');
    };
}