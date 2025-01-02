var hora = new Date()
var agora = hora.getHours()
console.log(`Agora são exatamente ${agora} horas`)

if(agora <= 12) {
    console.log('Bom dia!')
}else if (agora <= 18) {
    console.log('Boa Tarde!')
}else {
    console.log('Boa noite')
}