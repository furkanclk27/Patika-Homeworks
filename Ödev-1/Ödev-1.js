let name = prompt("Adınızı girin: ")
let info1 = document.querySelector("#name")
let info2 = document.querySelector("#time")
let date = new Date().toLocaleString("tr-TR")
info1.innerHTML = `Merhaba,${name}! Hoş geldin!`
info2.innerHTML = date