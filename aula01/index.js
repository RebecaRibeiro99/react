const Grupo7 ={
    pessoa1 :{
        nome: "Rebeca",
        idade: 23,
        endereco:{
            cidade:"Petropolis",
            estado:"Rio de Janeiro"
        }
    },
    pessoa2 :{
        nome: "Gabriel",
        idade: 22,
        endereco:{
            cidade:"Petropolis",
            estado:"Rio de Janeiro"
        }
    },
    pessoa3 :{
        nome: "Caua",
        idade: 18,
        endereco:{
            cidade:"Petropolis",
            estado:"Rio de Janeiro"
        }
    },
    pessoa4 :{
        nome: "Juliana",
        idade: 33,
        endereco:{
            cidade:"Petropolis",
            estado:"Rio de Janeiro"
        }
    },
    pessoa5:{
        nome: "Vinicius",
        idade: 18,
        endereco:{
            cidade:"Petropolis",
            estado:"Rio de Janeiro"
        }
    },
} 
console.log(Grupo7.pessoa1.nome, Grupo7.pessoa1.idade, Grupo7.pessoa1.endereco.cidade);
console.log(Grupo7.pessoa2.nome, Grupo7.pessoa2.idade, Grupo7.pessoa1.endereco.cidade);
console.log(Grupo7.pessoa3.nome, Grupo7.pessoa3.idade, Grupo7.pessoa1.endereco.cidade);
console.log(Grupo7.pessoa4.nome, Grupo7.pessoa4.idade, Grupo7.pessoa1.endereco.cidade);
console.log(Grupo7.pessoa5.nome, Grupo7.pessoa5.idade, Grupo7.pessoa1.endereco.cidade);


var nomes = [Grupo7.pessoa1.nome,Grupo7.pessoa2.nome,Grupo7.pessoa3.nome,Grupo7.pessoa4.nome,Grupo7.pessoa5.nome]
var contador=0
while(contador<nomes.length){
    for(var i=0; i<30; i++){
        console.log(nomes[contador])
    }
    contador++
}


