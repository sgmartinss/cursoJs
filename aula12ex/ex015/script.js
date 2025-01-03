function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value == 0|| fano.value > ano) {
        window.alert('[ERRO] Verifique oa dados digitados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `idade calculada ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagem/crianca-homem.jpg')
            } else if(idade <21) {
                // jovem
                img.setAttribute('src', 'imagem/adolesc-homem.jpg')
            } else if (idade <50) {
                //adulto
                img.setAttribute('src', 'imagem/adulto-homem.jpg')

            } else {
                // idoso
                img.setAttribute('src', 'imagem/idoso-homem.jpg')
            }
        } else {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagem/crianca-mulher.jpg')
            } else if(idade <21) {
                // jovem
                img.setAttribute('src', 'imagem/adolesc-mulher.jpg')
            } else if (idade <50) {
                //adulto
                img.setAttribute('src', 'imagem/adulto-mulher.jpg')

            } else {
                // idoso
                img.setAttribute('src', 'imagem/idoso-mulher.jpg')
            }        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}