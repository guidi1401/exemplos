function escreve_mensagem(valor){
				mensagem = "Você escreveu '"+valor+"' ";
				alert(mensagem) ;
				if(isNaN(valor)){
					alert(valor + " nao é um numero");
				}
				else{
					alert(valor + " é um numero");
				}
			}