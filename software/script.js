var btGreet = document.getElementById("btnsaludo");
var txtName = document. getElementById("txtnombre");
var txtGreet = document.getElementById("txtsaludo");
var lista =[
    "Hello",
    "Bonjour",
    "Hallo",
    "Ciao",
    "Ola",
    "Namaste",
    "Aloha",
    "Konniichiwa",
    "Merhaba",
    "Añaseyo",
    "Que hubo",
    "Hola"

]
 function saludar(){
       if (txtName.value=="") {
       alert("error, ingrese un nombre,")
       txtGreet.innerHTML=""
    }else{
       var nombre = txtName.value
       var numero = Math.floor(Math.random()*lista.length)
       var saludo = lista[numero] + "," + nombre
       txtGreet.innerHTML = saludo
    }
}

