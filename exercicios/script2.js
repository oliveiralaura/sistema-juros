/* Calculando juros */

var readline = require("readline-sync")
var capitali = parseFloat(readline.question("Qual o valor do capital? "))
var juros = 0
var op = readline.question("Juros mensais ou anuais? ")
var vjuros = 0
var jtotal = 0
var vtotal = 0
var meses = 0
var anos = 0


switch(op){
    case op="mensais":
        juros = parseFloat(readline.question("Qual o valor do juro? "))
        meses = parseFloat(readline.question("Quantos meses de atraso? "))
        vjuros = parseFloat(juros/100)
        jtotal = parseFloat((capitali*vjuros)*meses)
        vtotal = parseFloat(capitali+jtotal)
        console.log("O valor pago de juros foi de R$"+jtotal.toFixed(2)+" e o valor total a ser pago é de R$"+vtotal);
        break;
    case op="anuais":
        juros = parseFloat(readline.question("Qual o valor do juro? "))
        anos = parseFloat(readline.question("Quantos anos de atraso? "))
        vjuros = parseFloat((juros/100))
        jtotal = parseFloat((capitali*vjuros)*anos)
        vtotal = parseFloat(capitali+jtotal)
        console.log("O valor pago de juros foi de R$"+jtotal.toFixed(2)+" e o valor total pago a ser pago é de R$"+vtotal);
        break;
    default:
        console.log("A opção escolhida não é válida")
}









