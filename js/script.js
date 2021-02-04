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

let ingresos = 0;

let fijos = new gastos();
let flexibles = new gastos();
let extras = new gastos();


/*Ingreso de gastos a los vectores */

function checkSub(){
    ingresos = document.getElementById("ingresos");
    let ahorro = new ahorrar(document.getElementById("ahorro"),document.getElementById("tiempo"));
    let nombresFijos = [
        "Luz",
        "Gas",
        "Agua",
        "Alquiler",
        "Transporte",
        "Estudios"
    ];
    let preguntasFijos = [
        document.getElementById("luz").value,
        document.getElementById("gas").value,
        document.getElementById("agua").value,
        document.getElementById("alquiler").value,
        document.getElementById("transporte").value,
        document.getElementById("estudios").value
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
        document.getElementById("prepaga").value,
        document.getElementById("medicamentos").value,
        document.getElementById("supermercado").value,
        document.getElementById("internet").value,
        document.getElementById("telefono").value,
        document.getElementById("mascota").value
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
        document.getElementById("telefono").value,
        document.getElementById("indumentaria").value,
        document.getElementById("gim"),
        document.getElementById("peluqueria").value,
        document.getElementById("restaurantes").value,
        document.getElementById("cine").value,
        document.getElementById("regalos").value,
        document.getElementById("delivery").value,
        document.getElementById("caridad").value,
        document.getElementById("otros").value
    ];
    
    fijos.agregarGasto(preguntasFijos, nombresFijos);
    flexibles.agregarGasto(preguntasFlexibles, nombresFlexibles);
    extras.agregarGasto(preguntasExtras, nombresExtras);
    
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

