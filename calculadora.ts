import ICalculadora from './interface_calculadora';

export default class Calculadora implements ICalculadora{
    public soma=(numero:number,numero2:number):number=>{
              return numero+numero2
    }
    public subtra=(numero:number,numero2:number):number=>{
        return numero-numero2;
    }
    public divisao=(numero:number,numero2:number):number=>{
           return numero/numero2
    }
    public multi=(numero:number,numero2:number):number=>{
           return numero*numero2
    }
    public elevar=(numero:number,numero2:number):number=>{
              return numero**numero2
    }
    public baskhara=(numero:number,numero2:number,numero3:number):Array<number>=>{
        return [(numero2*-1+(numero2**2-4*numero*numero3))/(2*numero),(numero2*-1-(numero2**2-4*numero*numero3))/(2*numero)]

    }
    public radiciacao=(numero:number,numero2:number):string=>{
        let cont=0 //BatataPi
        let auxiliar=numero2
        if(numero2<=1){
            return "Não é possivel fazer isso"
        }
       while(auxiliar<numero){
       auxiliar=auxiliar*auxiliar
       cont+=1;
       }
       return `O ${numero2} precisa ser elevado ${cont} vezes para chegar em ${numero}`;
    }
}