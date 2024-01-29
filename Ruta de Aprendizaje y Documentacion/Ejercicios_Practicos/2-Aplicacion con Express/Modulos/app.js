// asi se requiere una funcionalidad especifica (destructuracion)
var {saludo1} = require('./saludado')
saludo1("Saludo desde app requiriendo una funcionalidad especifica")// y se llama asi


// asi se requieren todas las funcionalidades del modulo
var saludoo = require('./saludado')
saludoo.saludo1("Saludo desde app requiriendo todo el modulo")
saludoo.saludo2()// y se llama asi
