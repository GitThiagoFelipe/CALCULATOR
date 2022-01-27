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
                var p = Number(window.prompt('Qual valor da Potência?'))
                var i = Number(window.prompt('Qual valor da Corrente?'))
                var u = p / i
                var Rst = parseFloat(u.toFixed(2))
                res.innerHTML = (`A Tensão é igual a <strong> ${Rst} Volts <\strong>`)
                break;

            case 2:
                var p = Number(window.prompt('Qual valor da Potência?'))
                var u = Number(window.prompt('Qual valor da Tensão?'))
                var i = p / u
                var Rst = parseFloat(i.toFixed(2))
                res.innerHTML = (`A Corrente é igual a <strong> ${Rst} Amperes <\strong>`)
                break

            case 3:
                var u = Number(window.prompt('Qual valor da Tensão?'))
                var i = Number(window.prompt('Qual valor da Corrente?'))
                var p = u * i
                var Rst = parseFloat(p.toFixed(2))
                res.innerHTML = (`A Potência é igual a <strong> ${Rst} Watts <\strong>`)
                break

            case 4:
                var Z = Number(window.prompt('Qual valor de tensão na ODU SIAE?'))
                var Y = 100
                var C = 0.0375
                var X = Z / C - Y
                var Rst = parseFloat(X.toFixed(2))
                res.innerHTML = (`Nível RX é <strong> ${Rst} dBm <strong>`)
                break

            case 5:
                var p = Number(window.prompt('Qual a Potência do equipamento?'))
                var h = Number(window.prompt('Quantas horas fica ligado por dia?'))
                var dia = Number(window.prompt('Por quantos dias no mês?'))
                var kw = Number(window.prompt('Qual preço do KW/h na sua conta de luz?'))
                var consumo = p * h * dia / 1000
                var s = consumo * kw
                s = s.toLocaleString('pt-BR', { style: 'currency', currency: 'Brl' })
                res.innerHTML = (`Seu consumo mensal é <strong> ${consumo} kw/h <\strong> e custa ${s} <\strong>`)
                break

            case 6:
                var Z = Number(window.prompt('Qual valor da Tensão na ODU Huawei?'))
                var Y = 15.9
                var C = -91.6
                var X = Y * Z + C
                var Rst = parseFloat(X.toFixed(2))
                res.innerHTML = (`Nível RX é <strong> ${Rst}dBm <strong>`)
                break

            case 7:
                var Z = Number(window.prompt('Qual nível RX você deseja?'))
                var Y = 120
                var C = 40
                var X = (Z + Y) / C
                var Rst = parseFloat(X.toFixed(2))
                res.innerHTML = (`A tensão deve ser <strong> ${Rst}volts <strong>`)
                break

            default:
        }
    } while (resposta == true)
}