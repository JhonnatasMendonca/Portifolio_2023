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