const nome= "Victoria Cardoso";
let nome2 = "";
let pessoaDefault = {
    nome :"Victoria Cardoso",
    idade :"18",
    trabalho:"empreendedora digital"
}

let nomes = ["Victoria Cardoso", "Marcela","Pedro Henrique"];
let pessoas = [
    {
        nome :"Victoria Cardoso",
        idade :"18",
        trabalho:"empreendedora digital"  
    },
    {
        nome :"Marcela",
        idade :"22",
        trabalho:"UX/UI Designer"
    }
];


function alterarNome() {
    nome2 = "Maria Clara";
    console.log("Valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    novo2 = novoNome;
    console.log ("Valor alterado recebendo um nome:");
    console.log (nome2);
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.idade);

    console.log("Idade:");
    console.log(pessoa.idade);

    console.log("Trabalho:");
    console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa) {
        pessoas.push(pessoa);
}

function imprimirPessoas() {
     console.log("--------IMPRIMIR PESSOAS--------")
     pessoas.forEach((item)=> {
        console.log("Nome:");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);

        console.log("Trabalho:");
        console.log(item.trabalho);
     })
}

imprimirPessoas();

adicionarPessoa({
    nome :"Pedro Henrique",
    idade :"28",
    trabalho:"Porteiro"
});

imprimirPessoas();



//imprimirPessoa(pessoaDefault);

//imprimirPessoa( {
//   nome :"Marcela",
//   idade :"22",
//   trabalho:"UX/UI Designer"
//}
//);


//recebeEalteraNome("Maria Dirce Cardoso");
//recebeEalteraNome("Maria Clara");

//alterarNome()