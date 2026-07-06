class Pessoa {
    nome = "Maria";
    idade = 20;

    apresentar() {
        console.log("Olá! Meu nome é Maria e tenho 20 anos.");
    }
}

let pessoa1 = new Pessoa();
let pessoa2 = new Pessoa();

pessoa1.apresentar();
pessoa2.apresentar();