import * as readline from 'readline';
import Calculadora from './calculadora';
import Mensagem from './mensagem';
let cal=new Calculadora()
let msg= new Mensagem()
//BatataBatata
let iniciar=()=>{
    let leitor= readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
     
      console.clear()
    msg.bemVindo()
    msg.help()
    leitor.question("Digite sua operação aqui:",(valor)=>{
         if((valor.toLowerCase())=="sair"){
            console.log("Adeus")
        leitor.close()
        return 
       }
        let input:Array<string>=valor.split(" ");
        let operador:string | undefined=input[0];
        let numero:number=Number(input[1]);
        let numero2:number=Number(input[2]);
        let numero3:number=Number(input[3]);
       
       
      
       switch(operador?.toLowerCase()){
         case 'somar':console.log("Resultado:"+cal.soma(numero,numero2));break;
         case 'subtrair':console.log("Resultado:"+cal.subtra(numero,numero2));break;
         case 'multiplicar':console.log("Resultado:"+cal.multi(numero,numero2));break;
         case 'dividir':console.log("Resultado:"+cal.divisao(numero,numero2));break;
         case 'elevar':console.log("Resultado:"+cal.elevar(numero,numero2));break;
         case "baskhara":console.log("Resultado x1,x2= "+cal.baskhara(numero,numero2,numero3));break
         case 'radiciação':console.log("Resultado:"+cal.radiciacao(numero,numero2));break;
         default:  console.log("Não é valido"); break;
       }
     
        let esperarEnter = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        esperarEnter.question("Pressione Enter para continuar...", () => {
            esperarEnter.close();
            leitor.close();
            iniciar(); 
        });
        
      
      
      
        
    })        
    

}

iniciar()
