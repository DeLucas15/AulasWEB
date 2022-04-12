var numero = 1
{
    var numero = 2 // resultado 2 porque foi declarado depois
    console.log('dentro =', numero)
}
console.log('fora =', numero)