function Calcular() {
    var option = document.getElementsByName('opção')
    if (option[0].checked) {
        var escolha = 1
    } else if (option[1].checked) {
        var escolha = 2
    } else if (option[2].checked) {
        var escolha = 3
    } else if (option[3].checked) {
        var escolha = 4
    } else if (option[4].checked) {
        var escolha = 5
    } else if (option[5].checked) {
        var escolha = 6
    } else if (option[6].checked) {
        var escolha = 7
    }

    do {
        switch (escolha) {
            case 1:
                var p = Number(window.prompt('Qual valor da Potência')) //string
                var i = Number(window.prompt('Qual valor da Corrente?')) //string
                var u = p / i
                res.innerHTML = (`A Tensão é igual a ${u} Volts`)
                break;

            case 2:
                var p = Number(window.prompt('Qual valor da Potência?')) //string
                var u = Number(window.prompt('Qual valor da Tensão?')) //string
                var i = p / u
                res.innerHTML = (`A Corrente é igual a ${i} Amperes`)
                //var resposta = confirm('Gostaria de continuar calculando?')
                break

            case 3:
                var u = Number(window.prompt('Qual valor da Tensão?')) //string
                var i = Number(window.prompt('Qual valor da Corrente?')) //string
                var p = u * i
                res.innerHTML = (`A Potência é igual a ${p} Watts`)
                //var resposta = confirm('Gostaria de continuar calculando?')
                break

            case 4:
                var u = Number(window.prompt('Qual valor da Tensão?')) //string
                var i = Number(window.prompt('Qual valor da Corrente?')) //string
                var r = u / i
                res.innerHTML = (`A Resistência é igual a ${r} Oms`)
                //var resposta = confirm('Gostaria de continuar calculando?')
                break

            case 5:
                var p = Number(window.prompt('Qual a Potência do equipamento?')) //string
                var h = Number(window.prompt('Quantas horas fica ligado por dia?')) //string
                var dia = Number(window.prompt('Por quantos dias no mês?'))
                var kw = Number(window.prompt('Qual preço do KW/h na sua conta de luz?'))
                var consumo = p * h * dia / 1000
                var s = consumo * kw
                s = s.toLocaleString('pt-BR', { style: 'currency', currency: 'Brl' })
                res.innerHTML = (`Seu consumo mensal é ${consumo} kw/h e custa ${s}`)
                //var resposta = confirm('Gostaria de continuar calculando?')
                break

            case 6:
                var Z = Number(window.prompt('Qual valor da Tensão na ODU Huawei?')) //string
                    var Y = 15.9
                    var C = -91.6
                    var X = Y * Z + C
                    res.innerHTML = (`Nível RX é ${X}dBm`)
                    //var resposta = confirm('Gostaria de continuar calculando?')
                break

            case 7:
                var Z = Number(window.prompt('Qual valor da Tensão na RAU?')) //string
                    var Y = 26.146
                    var C = -91.6
                    var X = Y * Z + C
                    res.innerHTML = (`Nível RX é ${X}dBm`)
                   // var resposta = confirm('Gostaria de continuar calculando?')

                break

            default:
        }
    } while (resposta == true)
}