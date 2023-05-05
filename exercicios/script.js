/*
Um investidor aplicou um capital de R$8.500,00 a juros simples com taxa de 3% ao mês, durante sete meses.
Qual o valor pago de juros?Qual será o valor total pago pelo investidor?
*/

var capitali = 0
var juros = 0
var meses = 0
var total = 0
var vtotal = 0

capitali = 8500
juros = 0.3
meses = 7
jurostotal = (capitali*juros*meses)
vtotal = (capitali+jurostotal)

console.log("O valor pago de juros foi de R$"+jurostotal+",00 e o valor total pago pelo investidor foi de R$"+vtotal+",00")