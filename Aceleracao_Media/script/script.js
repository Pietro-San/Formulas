function calcular(){

var a, Av, At, mensagem;

a = document.getElementById("a").value;
Av = document.getElementById("Av").value;
At = document.getElementById("At").value;
	
 switch (isNaN(a) || isNaN(Av) || isNaN(At)) {
        case Number.isInteger(a) && Number.isInteger(At) && Number.isInteger(Av):
        if(a==Av/At){
        mensagem = "A aceleração média realmente é "+a+". Parabéns.";
        }else if(a!==Av/At){
        mensagem = "Uma vez que "+Av+" dividido por "+At+" resulta em "+Av/At+". A aceleração média não pode ser "+a+".";
        }
        break;
        case isNaN(a) && isNaN(At) && isNaN(Av):
        mensagem = "Não é possível fazer o calculo com 3 incógnitas!";
        break;
 		case isNaN(a) && isNaN(Av):
        mensagem = "Não é possível fazer o calculo com 2 ou mais incógnitas!";
        break;
        case isNaN(a) && isNaN(At):
        mensagem = "Não é possível fazer o calculo com 2 ou mais incógnitas!";
        break;
        case isNaN(Av) && isNaN(At):
        mensagem = "Não é possível fazer o calculo com 2 ou mais incógnitas!";
        break;
        case isNaN(a):
        resultado = Av/At;
		mensagem = "A aceleração média é: "+resultado+".";
        break;
        case isNaN(Av):
        resultado = a/At;
		mensagem = "Como já sabemos que a aceleração média é: "+a+", nos resta descobrir a variação da velocidade, que é: "+resultado+".";
        break;
        case isNaN(At):
        resultado = Av/a;
		mensagem = "Como já sabemos que a aceleração média é: "+a+", nos resta descobrir o intervalo de tempo, que é: "+resultado+".";
        break;
        }
document.getElementById("mensagem").innerHTML = mensagem;
}

function resetar(){
	document.getElementById("a").value = "a";
	document.getElementById("Av").value = "Av";
	document.getElementById("At").value = "At";
}