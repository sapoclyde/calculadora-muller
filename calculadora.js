var mes = document.querySelector("#mes")
var horas = document.querySelector("#horas")
var dias = document.querySelector("#dias")
var resposta = document.querySelector("#resposta")

function calculadoraHora(){
    var valorHora =(mes.valueAsNumber /dias.valueAsNumber)/horas.valueAsNumber
    resposta.textContent = valorHora
}