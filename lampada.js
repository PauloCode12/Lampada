const turnOnOFF = document.getElementById ( 'turnOnOFF' );
const lamp = document.getElementById ( 'lamp' );

function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > - 1
}

function lampOn () {
    if ( !isLampBroken () ) {
    lamp.src = './img/ligada.jpg';
    }
}

function lampOff () {
    if (!isLampBroken () ) {
    lamp.src = './img/apagada.jpg';
    }
}

function lampBroken () {
    lamp.src = './img/quebrada.jpg';
}

function lampOnOFF () {
    if ( turnOnOFF.textContent == 'Ligar') {
        lampOn();
        turnOnOFF.textContent = 'Desligar';
    }else{
        lampOff();
        turnOnOFF.textContent = 'Ligar';
    }
}

turnOnOFF.addEventListener ( 'click', lampOnOFF );
lamp.addEventListener ( 'mouseover', lampOn );
lamp.addEventListener ( 'mouseleave', lampOff );
lamp.addEventListener ( 'dblclick', lampBroken );
