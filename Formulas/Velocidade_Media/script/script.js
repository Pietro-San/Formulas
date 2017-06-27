function calcular(){

var v, Ad, At, mensagem;

v = document.getElementById("v").value;
Ad = document.getElementById("Ad").value;
At = document.getElementById("At").value;
	
 switch (isNaN(v) || isNaN(Ad) || isNaN(At)) {
        case Number.isInteger(v) && Number.isInteger(At) && Number.isInteger(Ad):
        if(v==Ad/At){
        mensagem = "A velocidade média realmente é "+v+". Parabéns.";
        }else if(v!==Ad/At){
        mensagem = "Uma vez que "+Ad+" dividido por "+At+" resulta em "+Ad/At+". A velocidade média não pode ser "+v+".";
        }
        break;
        case isNaN(v) && isNaN(At) && isNaN(Ad):
        mensagem = "Não é possível fazer o calculo com 3 incógnitas!";
        break;
 		case isNaN(v) && isNaN(Ad):
        mensagem = "Não é possível fazer o calculo com 2 ou mais incógnitas!";
        break;
        case isNaN(v) && isNaN(At):
        mensagem = "Não é possível fazer o calculo com 2 ou mais incógnitas!";
        break;
        case isNaN(Ad) && isNaN(At):
        mensagem = "Não é possível fazer o calculo com 2 ou mais incógnitas!";
        break;
        case isNaN(v):
        resultado = Ad/At;
		mensagem = "A velocidade média é: "+resultado+".";
        break;
        case isNaN(Ad):
        resultado = v/At;
		mensagem = "Como já sabemos que a velocidade média é: "+v+", nos resta descobrir a distância percorrida, que é: "+resultado+".";
        break;
        case isNaN(At):
        resultado = Ad/v;
		mensagem = "Como já sabemos que a velocidade média é: "+v+", nos resta descobrir o intervalo de tempo, que é: "+resultado+".";
        break;
        }
document.getElementById("mensagem").innerHTML = mensagem;
}

function resetar(){
	document.getElementById("v").value = "v";
	document.getElementById("Ad").value = "Ad";
	document.getElementById("At").value = "At";
}