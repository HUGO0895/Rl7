
export default class Mensagem{
    public help=():void=>{
        console.log("Esta calculadora suporta as seguintes operações: somar, subtrair, multiplicar, dividir, elevar e bhaskara.");
console.log("Para utilizar, digite primeiro o nome da operação desejada, seguido dos números necessários:");
console.log("- Operações básicas: [operador] [número1] [número2] (ex: somar 5 3)");
console.log("- Baskara: baskara [a] [b] [c] (ex: baskara 1 2 1)");
console.log("Digite Sair para sair do programa")
    };
    public bemVindo=()=>{
        console.log("Bem vindo a minha calculadora")
    
}
}