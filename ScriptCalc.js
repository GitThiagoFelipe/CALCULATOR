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
                var Vcc = Number(window.prompt('Qual valor da Tensão da fonte?')) //string
                var Vr = Number(window.prompt('Qual valor de Tensão do LED?'))
                var I_led = Number(window.prompt('Qual corrente do LED?')) //string
                var resistor = (Vcc - Vr) / I_led
                window.alert(`O Resistor do led é ${resistor} Oms`)
                var resposta = confirm('Gostaria de continuar calculando?')
                break

            default:
        }
    } while (resposta == true)
}