$('#btAqui').click(
    function(){
    
    //     cadastro =
    // {
    //     'nome':document.getElementById('InputNome').value,  
    //     'endereco':document.getElementById('InputEndereco').value,
    //     'email':document.getElementById('InputEmail').value
    // }
        
    //     const nome = document.getElementById('InputNome').value;
    //     alert(' Meu nome é: ' +cadastro.nome + ' sou de ' + cadastro.endereco);

    calculo =
        {
         'a' :document.getElementById('inputA').value,
         'b' :document.getElementById('inputB').value,
         'c': document.getElementById('inputC').value
        }

         let media = (parseInt(calculo.a) + parseInt(calculo.b) + parseInt(calculo.c)) /3;
         let exame = (10-media);

         if (media >= 7) {
             alert('aprovado')
         } else{
             alert('a nota que vc precisa tirar é:' +exame);
        }
        



    // alert( parseInt(calculo.a) + parseInt(calculo.b));
    

    }
)