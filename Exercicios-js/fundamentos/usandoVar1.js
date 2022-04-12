{  
    { 
        { 
            { var sera = 'Será???' // variavel é visivel dentro e fora do bloco
        
            } 
        } 
    } 

}
console.log(sera)

function teste() {
    var local = 123 // visivel apenas dentro do bloco
}

teste()
console.log(local)