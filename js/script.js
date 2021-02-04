function gastos(){
    this.lista = [];
    this.nombre = [];
    this.listaAux = this.lista.slice();

    this.agregarGasto = function(gasto, nombre){
        for(let i = 0; i < gasto.length; i++){
            this.lista.push(gasto[i]);
            this.nombre.push(nombre[i]);
        }
    }
    this.total = function(){
        let totalGastos = 0;
        for (let i = 0; i < this.lista.length; i++){
            totalGastos = totalGastos + this.lista[i];    
        }
        return totalGastos;
    }
    this.diferencia = function(){
        for (let i = 0; i < this.lista.length; i++) {
            this.ahorrar[i] = this.listaAux[i] - this.lista[i]; //Saco el ahorro diario restando el gasto original, con el gasto luego de haber procesado los datos...
        }
        return this.ahorrar;
    }
}

function ahorrar(ahorro, mes){
    this.ahorro = ahorro;
    this.tiempo = mes;
    this.ahorroDiario = function(){
        let diario = 0;
        diario = this.ahorro/ (this.tiempo * 30);
        return diario;
    }
    this.ahorroMensual = function(){
        let mensual = 0;
        mensual = this.ahorro/ this.tiempo;
        return mensual;
    }
}

let ingresos = document.getElementById("ingresos");
let ahorro = new ahorrar(document.getElementById("ahorro"),document.getElementById("tiempo") );


let fijos = new gastos();
let flexibles = new gastos();
let extras = new gastos();

/*Ingreso de gastos a los vectores */

let nombresFijos = [
    "Luz",
    "Gas",
    "Agua",
    "Alquiler",
    "Transporte",
    "Estudios"
];
let preguntasFijos = [
    document.getElementById("luz"),
    document.getElementById("gas"),
    document.getElementById("agua"),
    document.getElementById("alquiler"),
    document.getElementById("transporte"),
    document.getElementById("estudios")
];
let nombresFlexibles = [
    "Prepaga/Obrasocial",
    "Medicamentos",
    "Supermercado",
    "Internet",
    "Telefono",
    "Mascota"
];
let preguntasFlexibles = [
    document.getElementById("prepaga"),
    document.getElementById("medicamentos"),
    document.getElementById("supermercado"),
    document.getElementById("internet"),
    document.getElementById("telefono"),
    document.getElementById("mascota")
];
let nombresExtras = [
    "Tv/Telefono",
    "Indumentaria",
    "Gim/Deportes",
    "Peluqueria",
    "Restaurants",
    "Cine/Teatro",
    "Regalos",
    "Delivery",
    "Caridad",
    "Otros"
];
let preguntasExtras = [
    document.getElementById("telefono"),
    document.getElementById("indumentaria"),
    document.getElementById("gim"),
    document.getElementById("peluqueria"),
    document.getElementById("restaurantes"),
    document.getElementById("cine"),
    document.getElementById("regalos"),
    document.getElementById("delivery"),
    document.getElementById("caridad"),
    document.getElementById("otros")
];

fijos.agregarGasto(preguntasFijos, nombresFijos);
flexibles.agregarGasto(preguntasFlexibles, nombresFlexibles);
extras.agregarGasto(preguntasExtras, nombresExtras);


if(document.getElementsByClassName("boton-gastosextras").onclick == true){
    for(let i = 0; i < fijos.lista.length; i++){
        alert(`Usted gasta en ${fijos.nombre[i]} = $${fijos.lista[i]}`);
    }
    for(let i = 0; i < flexibles.lista.length; i++){
        alert(`Usted gasta en ${flexibles.nombre[i]} = $${flexibles.lista[i]}`);
    }
    for(let i = 0; i < extras.lista.length; i++){
        alert(`Usted gasta en ${extras.nombre[i]} = $${extras.lista[i]}`);
    }
}

