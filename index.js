let pontos = 10001
let elo = "" 

if (pontos >= 1 && pontos <= 999) elo = "ferro"
else if (pontos >= 1001 && pontos <= 2000) elo = "bronze"
else if (pontos >= 2001 && pontos <= 5000) elo = "prata"
else if (pontos >= 5001 && pontos <= 7000) elo = "ouro"
else if (pontos >= 7001 && pontos <= 8000) elo = "platina"
else if (pontos >= 8001 && pontos <= 9000) elo = "ascendente"
else if (pontos >= 9001 && pontos <= 10000) elo = "imortal"
else if (pontos >= 10001) elo = "radiante"
else elo = ""

switch (elo){
    case "ferro":
        console.log("Você está no elo: ferro")
        break;
    case "bronze":
        console.log("Você está no elo: bronze")
        break;
    case "prata":
        console.log("Você está no elo: prata")
        break;
    case "ouro":
        console.log("Você está no elo: ouro")
        break;
    case "platina":
        console.log("Você está no elo: platina")
        break;
    case "ascendente":
        console.log("Você está no elo: ascendente")
        break;
    case "imortal":
        console.log("Você está no elo: imortal")
        break;
    case "radiante":
        console.log("Você está no elo: radiante")
        break;
}