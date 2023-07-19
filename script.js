let contador = 1;

setInterval( function(){
    document.getElementById('slide' + contador).checked = true;
    contador++;

    if(counter > 4 ) {
        contador = 1;
    }
}, 3000 );

var Flink = document.querySelector("#provador-btn");

function Firstlink()
{
    window.open("https://vfr-v3-production.sizebay.technology/V4/?mode=vfr&id=6834318&sid=0268AE364B4D21", "_blank");
    win.focus();
}

var Slink = document.querySelector("#tabela-medida-btn");

function Secondlink()
{
    window.open("https://vfr-v3-production.sizebay.technology/V4/?mode=chart&id=6834318&sid=0268AE364B4D2", "_blank");
    win.focus();
}
