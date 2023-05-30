//classe de uma abstração
function Carro(modelo, ano) {
    this.modelo = modelo;
    this.ano = ano;
    this.acelerar = function() {
        console.log('Acelerando');
    }
}

// Classe filha Sedan
function Sedan(modelo, ano, cor) {
    Carro.call(this, modelo, ano);
    this.cor = cor;
}

// Classe filha SUV
function SUV(modelo, ano, tamanho) {
    Carro.call(this, modelo, ano);
    this.tamanho = tamanho;
}

// Criando instâncias de objetos
var carro1 = new Carro("Fiesta", 2019);
var sedan1 = new Sedan("Corolla", 2020, "Prata");
var suv1 = new SUV("Tiguan", 2021, "Grande");




//classe de uma abstração
function Funcionario(nome,cargo,salario) {
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
    this.DizOI = function() {
        console.log('Oi');
    }
}
// Classe filha
function Efetivo(nome,cargo,salario,CLT) {
    Funcionario.call(this,nome,cargo,salario);
    this.CLT = CLT;
}

// Classe filha
function Estagiario(nome,cargo,salario,Contrato) {
    Funcionario.call(this,nome,cargo,salario);
    this.Contrato = Contrato;
}

// Criando instâncias de objetos
var funcionario1 = new Funcionario('Carlos','Faxineiro',1300);
var funcionario2 = new Estagiario('Ana',"AuxiliarADM",1300,"6 meses");
var funcionario3 = new Efetivo('João',"Gerente",3500,"Assinada");