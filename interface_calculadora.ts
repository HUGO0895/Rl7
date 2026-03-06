export default interface ICalculadora {
    soma(numero: number, numero2: number): number;
    subtra(numero: number, numero2: number): number;        // mudou de subtracao para subtra
    divisao(numero: number, numero2: number): number;
    multi(numero: number, numero2: number): number;         // mudou de multiplicacao para multi
    elevar(numero: number, numero2: number): number;        // mudou de potenciacao para elevar
    baskhara(numero: number, numero2: number, numero3: number): Array<number>;  // mudou de baskara para baskhara
    radiciacao(numero: number, numero2: number): string;
}