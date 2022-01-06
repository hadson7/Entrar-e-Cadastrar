(() => {

    const abas = document.querySelectorAll('[data-aba]')

        esconderConteudo = () => {
        const conteudos = document.querySelectorAll('[data-conteudo]')
        conteudos.forEach(conteudo => conteudo.classList.add('hide'))
    }

        inativarAba = () => {
        abas.forEach(aba => aba.classList.remove('ativa'))
    }

        mostraConteudo = (valor) => {
        const conteudo = document.querySelector(`[data-conteudo="${valor}"]`)
        conteudo.classList.remove('hide')
    }

        ativarAba = (aba) => {
        aba.classList.add('ativa')
    }


    abas.forEach(aba => aba.addEventListener('click', () => {

        const valor = aba.dataset.aba

        esconderConteudo()
        inativarAba()
        mostraConteudo(valor)
        ativarAba(aba)

    }))

})()