// Função para verificar se um número é positivo e par
// function verificarPositivoPar(numero) {
//     Verifica se o número é positivo e par
//     if (numero > 0 && numero % 2 === 0) {
//         return true; // Retorna verdadeiro se for positivo e par
//     } else {
//         return false; // Retorna falso caso contrário
//     }
// }

// Função para solicitar ao usuário inserir um número
// let numero = parseFloat(prompt("digite aqui seu numero:"))

// Chamada das funções
// let inputNumero = numero; // Chama a função para obter o número do usuário
// let resultado = verificarPositivoPar(inputNumero); // Chama a função para verificar se o número é positivo e par

// Exibe o resultado
// if (resultado) {
//     console.log("O número inserido é positivo e par.");
// } else {
//     console.log("O número inserido não é positivo e par.");
// }


// Função para calcular o IMC
// function calcularIMC(peso, altura) {
//     return peso / (altura * altura);
//     }
    
//     Função para determinar a categoria do IMC
//     function determinarCategoriaIMC(imc) {
//     if (imc < 18.5) {
//     return "Abaixo do peso";
//     } else if (imc < 25) {
//     return "Peso normal";
//     } else if (imc < 30) {
//     return "Sobrepeso";
//     } else {
//     return "Obesidade";
//     }
//     }
    
//     Solicita ao usuário inserir seu peso e altura
//     let peso = prompt("Por favor, insira seu peso em kg:");
//     let altura = prompt("Agora, insira sua altura em metros:");
    
//     Calcula o IMC
//     let imc = calcularIMC(peso, altura);
    
//     Determina a categoria do IMC
//     let categoria = determinarCategoriaIMC(imc);
    
//     Exibe o resultado
//     console.log("Seu IMC é:", imc.toFixed(2));
//     console.log("Categoria do IMC:", categoria);

    // Solicita ao usuário inserir o preço do produto
    // let precoProduto = prompt("Insira o preço do produto:")

    // Solicita ao usuário inserir sua idade
    // let idadeUsuario = prompt("Insira sua idade:")

    // Verifica se o usuário tem menos de 18 anos e aplica o desconto, se necessário
    // if (idadeUsuario < 18) {
    //   let precoFinal = precoProduto * 0.9 // Aplica desconto de 10%
    //   console.log("Como você tem menos de 18 anos, seu desconto é aplicado.")
    //   console.log("Preço final com desconto:", precoFinal.toFixed(2))
    // } else {
    //   console.log(
    //     "Você tem 18 anos ou mais, portanto, nenhum desconto é aplicado."
    //   )
    //   console.log("Preço final:", precoProduto)
    // }

    // let lado1 = Number(
    //     prompt("Insira o comprimento do primeiro lado do triângulo:")
    //   )
    //   let lado2 = Number(
    //     prompt("Insira o comprimento do segundo lado do triângulo:")
    //   )
    //   let lado3 = Number(
    //     prompt("Insira o comprimento do terceiro lado do triângulo:")
    //   )
      
    //     if (
    //         lado1 + lado2 > lado3 &&
    //         lado1 + lado3 > lado2 &&
    //         lado2 + lado3 > lado1
    //     ) {
        
    //     if (lado1 === lado2 && lado2 === lado3) {
    //       console.log("O triângulo é equilátero.")
    //     }
      
    //     else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    //       console.log("O triângulo é isósceles.")
    //     }
      
    //     else {
    //       console.log("O triângulo é escaleno.")
    //     }
    //   } else {
    //     console.log("Os comprimentos dos lados não formam um triângulo.")
    //   }

        // Solicita ao usuário inserir um número de 1 a 7
        // let numeroDia = Number(
        //     prompt("Insira um número de 1 a 7 representando o dia da semana:")
        //   )
      
        //   // Verifica o número do dia e imprime o nome do dia correspondente
        //   switch (numeroDia) {
        //     case 1:
        //       console.log("Domingo")
        //       break
        //     case 2:
        //       console.log("Segunda-feira")
        //       break
        //     case 3:
        //       console.log("Terça-feira")
        //       break
        //     case 4:
        //       console.log("Quarta-feira")
        //       break
        //     case 5:
        //       console.log("Quinta-feira")
        //       break
        //     case 6:
        //       console.log("Sexta-feira")
        //       break
        //     case 7:
        //       console.log("Sábado")
        //       break
        //     default:
        //       console.log("Número inválido. Por favor, insira um número de 1 a 7.")
        //   }

          	 // Solicita ao usuário inserir um número
    // let numero = Number(prompt("Insira um número:"))

    // // Verifica se o número é menor ou igual a 1
    // if (numero <= 1) {
    //   console.log(numero + " não é um número primo.")
    // } else {
    //   let ehPrimo = true
    //   let divisor = 2

    //   // Verifica os divisores até a raiz quadrada do número
    //   while (divisor * divisor <= numero && ehPrimo) {
    //     if (numero % divisor === 0) {
    //       ehPrimo = false
    //     }
    //     divisor++ // Próximo divisor
    //   }

    //   // Se o número não for divisível por nenhum divisor, é primo
    //   if (ehPrimo) {
    //     console.log(numero + " é um número primo.")
    //   } else {
    //     console.log(numero + " não é um número primo.")
    //   }
    // }

        // Função para calcular o volume do cubo
        // function calcularVolumeCubo(lado) {
        //     return lado * lado * lado
        //   }
      
        //   Função para calcular a área do círculo
        //   function calcularAreaCirculo(raio) {
        //     return Math.PI * raio * raio
        //   }
      
        //   Apresenta o menu de opções
        //   console.log("Opções do Menu:")
        //   console.log("1. Calcular Área do Triângulo")
        //   console.log("2. Calcular Área do Retângulo")
        //   console.log("3. Calcular Volume do Cubo")
        //   console.log("4. Calcular Área do Círculo")
        //   console.log("5. Sair")
      
        //   Solicita ao usuário escolher uma opção
        //   let opcao = parseInt(prompt("Escolha uma opção do menu:"))
      
        //   Direciona o programa com base na escolha do usuário
        //   switch (opcao) {
        //     case 1:
        //       let baseTriangulo = Number(prompt("Insira a base do triângulo:"))
        //       let alturaTriangulo = Number(prompt("Insira a altura do triângulo:"))
        //       console.log(
        //         "A área do triângulo é:",
        //         (baseTriangulo * alturaTriangulo) / 2
        //       )
        //       break
        //     case 2:
        //       let baseRetangulo = Number(prompt("Insira a base do retângulo:"))
        //       let alturaRetangulo = Number(prompt("Insira a altura do retângulo:"))
        //       console.log("A área do retângulo é:", baseRetangulo * alturaRetangulo)
        //       break
        //     case 3:
        //       let ladoCubo = Number(prompt("Insira o lado do cubo:"))
        //       console.log("O volume do cubo é:", calcularVolumeCubo(ladoCubo))
        //       break
        //     case 4:
        //       let raioCirculo = Number(prompt("Insira o raio do círculo:"))
        //       console.log("A área do círculo é:", calcularAreaCirculo(raioCirculo))
        //       break
        //     case 5:
        //       console.log("Programa encerrado.")
        //       break
        //     default:
        //       console.log("Opção inválida.")
        //  }

        const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um número: ", function(numero) {
  let count = parseInt(numero);

  while (count >= 0) {
    console.log(count);
    count--;
  }

  rl.close();
});
