chave = "cebcd482eda57fa9a6714c1c2ba91885"

function colocarNaTela(dados){
console.log(dados)

    document.querySelector(".cidade").innerHTML = "tempo em " + dados.name
    document.querySelector(".temperatura").innerHTML = Math.floor(dados.main.temp) + "°"
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".chuva").innerHTML = dados.weather[0].description
    document.querySelector(".max").innerHTML = "max :" + Math.floor(dados.main.temp_max ) + "°"
    document.querySelector(".min").innerHTML = "min :" + Math.floor(dados.main.temp_min) + "°"
    document.querySelector(".umidade").innerHTML = "umidade do ar " + Math.floor(dados.main.humidity) + "%"
    document.querySelector(".vento").innerHTML = " vento " + dados.wind.speed + "km/h"
    document.querySelector(".sensasao").innerHTML = "sensasão termica " + Math.floor(dados.main.feels_like) + "°"
}
 // async = funcao que avisa que vai acessar um servidor
async function buscarCidade(cidade) {
    let dados = await fetch ("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=cebcd482eda57fa9a6714c1c2ba91885&units=metric&lang=pt-br").then((resposta) => resposta.json())

    colocarNaTela(dados)
}

function botaoClick() {
    let cidade = document.querySelector('.input-cidade').value 
    buscarCidade(cidade)
}
