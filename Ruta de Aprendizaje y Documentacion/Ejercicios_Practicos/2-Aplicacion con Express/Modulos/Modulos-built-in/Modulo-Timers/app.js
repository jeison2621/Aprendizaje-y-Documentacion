function mostrarTema(tema){
    return console.log("estoy aprendiendo "+ tema)
} 

setTimeout(mostrarTema,4000,('Programacion'))

function sumar(a,b){
    console.log(a+b)
}
// ejecucion normal
sumar(2,7)
//agregar un tiempo de espera a la ejecucion de la funcion
setTimeout(sumar,7000,2,4)


//repite la funcion infinitamente con un intervalo definido
//setInterval(mostrarTema,2000,"proxi")

setInterval(sumar,2000,2,8)
