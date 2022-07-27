window.addEventListener('load', function () {
    // console.log("DOM cargado!!");

    var tema = "even";
    var button = document.getElementById('cambioColor');
    button.addEventListener('click', cambiarTema);

    function cambiarTema() {
        var tema1 = document.querySelectorAll('li:nth-child(even)');
        var tema2 = document.querySelectorAll('li:nth-child(odd)');
        //Iterate tema1 and tema2 and tema 2 and change the background color
        tema = tema == "even" ? "odd" : "even";
        if (tema == "even") {
            for (var i = 0; i < tema1.length; i++) {
                tema1[i].style.backgroundColor = 'rgb(221, 221, 30)';
                tema2[i].style.backgroundColor = '#f00';
                tema1[i].style.color = 'black';
                tema2[i].style.color = 'white';
                tema1[i].style.fontSize = '20px';
                tema2[i].style.fontSize = '25px';
            }
        } else {
            for (var i = 0; i < tema1.length; i++) {
                tema1[i].style.backgroundColor = '#f00';
                tema2[i].style.backgroundColor = 'rgb(221, 221, 30)';
                tema1[i].style.color = 'white';
                tema2[i].style.color = 'black';
                tema1[i].style.fontSize = '25px';
                tema2[i].style.fontSize = '20px';

            } 
        }
    }
});

















