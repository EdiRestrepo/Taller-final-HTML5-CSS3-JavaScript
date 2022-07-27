const main = () => {
    let temaActual = sessionStorage.getItem('temaActual');
    cambiarTema2(temaActual);
}

const cambiarTema = (x) => {
    let y = x.value;
    cambiarTema2(y);
    sessionStorage.setItem('temaActual', x.value);
}

function cambiarTema2 (y){
    var body = document.getElementById("body");
    body.style.backgroundColor = y;
}




const mostrarExperiencia1 = () => {
    document.getElementById('experiencia1').style.display = 'block';
}

const ocultarExperiencia1 = () => {
    document.getElementById('experiencia1').style.display = 'none';
}

const mostrarOcultar = () => {
    var experiencia1 = document.getElementById('experiencia1');
    if (experiencia1.style.display == "none") {
        mostrarExperiencia1();
    } else {
        ocultarExperiencia1();
    }
}

const mostrarExperiencia2 = () => {
    document.getElementById('experiencia2').style.display = 'block';
}

const ocultarExperiencia2 = () => {
    document.getElementById('experiencia2').style.display = 'none';
}

const mostrarOcultar1 = () => {
    var experiencia2 = document.getElementById('experiencia2');
    if (experiencia2.style.display == "none") {
        mostrarExperiencia2();
    } else {
        ocultarExperiencia2();
    }
}

const mostrarExperiencia3 = () => {
    document.getElementById('experiencia3').style.display = 'block';
}

const ocultarExperiencia3 = () => {
    document.getElementById('experiencia3').style.display = 'none';
}

const mostrarOcultar3 = () => {
    var experiencia3 = document.getElementById('experiencia3');
    if (experiencia3.style.display == "none") {
        mostrarExperiencia3();
    } else {
        ocultarExperiencia3();
    }
}

const mostrarExperiencia4 = () => {
    document.getElementById('experiencia4').style.display = 'block';
}

const ocultarExperiencia4 = () => {
    document.getElementById('experiencia4').style.display = 'none';
}

const mostrarOcultar4 = () => {
    var experiencia4 = document.getElementById('experiencia4');
    if (experiencia4.style.display == "none") {
        mostrarExperiencia4();
    } else {
        ocultarExperiencia4();
    }
}

const mostrarReferencia1 = () => {
    document.getElementById('referencia1').style.display = 'block';
}

const ocultarReferencia1 = () => {
    document.getElementById('referencia1').style.display = 'none';
}

const mostrarOcultarReferencia1 = () => {
    var referencia1 = document.getElementById('referencia1');
    if (referencia1.style.display == "none") {
        mostrarReferencia1();
    } else {
        ocultarReferencia1();
    }
}

const mostrarReferencia2 = () => {
    document.getElementById('referencia2').style.display = 'block';
}

const ocultarReferencia2 = () => {
    document.getElementById('referencia2').style.display = 'none';
}

const mostrarOcultarReferencia2 = () => {
    var referencia2 = document.getElementById('referencia2');
    if (referencia2.style.display == "none") {
        mostrarReferencia2();
    } else {
        ocultarReferencia2();
    }
}

const mostrarReferencia3 = () => {
    document.getElementById('referencia3').style.display = 'block';
}

const ocultarReferencia3 = () => {
    document.getElementById('referencia3').style.display = 'none';
}

const mostrarOcultarReferencia3 = () => {
    var referencia3 = document.getElementById('referencia3');
    if (referencia3.style.display == "none") {
        mostrarReferencia3();
    } else {
        ocultarReferencia3();
    }
}

const mostrarE1 = () => {
    document.getElementById('estudio1').style.display = 'block';
}

const ocultarE1 = () => {
    document.getElementById('estudio1').style.display = 'none';
}

const mostrarOcultarE1 = () => {
    var estudio1 = document.getElementById('estudio1');
    if (estudio1.style.display == "none") {
        mostrarE1();
    } else {
        ocultarE1();
    }
}

const mostrarE2 = () => {
    document.getElementById('estudio2').style.display = 'block';
}

const ocultarE2 = () => {
    document.getElementById('estudio2').style.display = 'none';
}

const mostrarOcultarE2 = () => {
    var estudio2 = document.getElementById('estudio2');
    if (estudio2.style.display == "none") {
        mostrarE2();
    } else {
        ocultarE2();
    }
}

const mostrarE3 = () => {
    document.getElementById('estudio3').style.display = 'block';
}

const ocultarE3 = () => {
    document.getElementById('estudio3').style.display = 'none';
}

const mostrarOcultarE3 = () => {
    var estudio3 = document.getElementById('estudio3');
    if (estudio3.style.display == "none") {
        mostrarE3();
    } else {
        ocultarE3();
    }
}

const mostrarE4 = () => {
    document.getElementById('estudio4').style.display = 'block';
}

const ocultarE4 = () => {
    document.getElementById('estudio4').style.display = 'none';
}

const mostrarOcultarE4 = () => {
    var estudio4 = document.getElementById('estudio4');
    if (estudio4.style.display == "none") {
        mostrarE4();
    } else {
        ocultarE4();
    }
}