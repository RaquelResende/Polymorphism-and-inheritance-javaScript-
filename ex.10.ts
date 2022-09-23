

export class animal {
     
    som:string
    correr:string
    idade:number
    nome:string
    
    constructor(som:string, correr:string, idade:number, nome:string){
    this.som = som
    this.correr=correr
    this.idade= idade 
    this.nome= nome
  

    }
// infoNome(){
//     console.log(${})
// }

infosom(){
console.log( `SOM: ${this.som}`)
}
inforcorrer(){

    console.log(`LOCOMOÇÃO: ${this.correr}`)
}

inforidade(){
    console.log(`IDADE:${this.idade} `)
}
infornome(){
    console.log(`NOME : ${this.nome}`)
}
}
