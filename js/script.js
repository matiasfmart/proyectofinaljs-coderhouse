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

$("#bt_comenzar").click(function(){
    $(".inicio").css("display","none");
    $(".ingresos").css("display","block");
});

$("#bt_ingresos").click(function(){
    $(".ingresos").css("display","none");
    $(".gastosFijos").css("display","block");
    ingresos = parseInt(document.getElementById("ingresos").value);
    let ahorro = new ahorrar(parseInt(document.getElementById("ahorro").value),parseInt(document.getElementById("tiempo").value));
    console.log(ingresos);
    console.log(ahorro.ahorro);
    console.log(ahorro.tiempo);
});

$("#bt_gastosFijos").click(function(){
    $(".gastosFijos").css("display","none");
    $(".gastosFlexibles").css("display","block");
    let nombresFijos = [
        "Luz",
        "Gas",
        "Agua",
        "Alquiler",
        "Transporte",
        "Estudios"
    ];
    let preguntasFijos = [
        parseInt(document.getElementById("luz").value),
        parseInt(document.getElementById("gas").value),
        parseInt(document.getElementById("agua").value),
        parseInt(document.getElementById("alquiler").value),
        parseInt(document.getElementById("transporte").value),
        parseInt(document.getElementById("estudios").value)
    ];
    sessionStorage.setItem("gastosFijos", JSON.stringify(preguntasFijos));
    sessionStorage.setItem("nombresGastosFijos", JSON.stringify(nombresFijos));

    let parseGastosFijos = JSON.parse(sessionStorage.getItem("gastosFijos"));
    let parseNombresFijos = JSON.parse(sessionStorage.getItem("nombresGastosFijos"));

    fijos.agregarGasto(parseGastosFijos, parseNombresFijos);
    console.log(fijos.lista);
    console.log(fijos.nombre);
});

$("#bt_gastosFlexibles").click(function(){
    $(".gastosFlexibles").css("display","none");
    $(".gastosExtras").css("display","block");
    let nombresFlexibles = [
        "Prepaga/Obrasocial",
        "Medicamentos",
        "Supermercado",
        "Internet",
        "Telefono",
        "Mascota"
    ];
    let preguntasFlexibles = [
        parseInt(document.getElementById("prepaga").value),
        parseInt(document.getElementById("medicamentos").value),
        parseInt(document.getElementById("supermercado").value),
        parseInt(document.getElementById("internet").value),
        parseInt(document.getElementById("telefono").value),
        parseInt(document.getElementById("mascota").value)
    ];
    sessionStorage.setItem("gastosFlexibles", JSON.stringify(preguntasFlexibles));
    sessionStorage.setItem("nombresGastosFlexibles", JSON.stringify(nombresFlexibles));
    
    let parseGastosFlexibles = JSON.parse(sessionStorage.getItem("gastosFlexibles"));
    let parseNombresFlexibles = JSON.parse(sessionStorage.getItem("nombresGastosFlexibles"));

    flexibles.agregarGasto(parseGastosFlexibles, parseNombresFlexibles);
    console.log(flexibles.lista);
    console.log(flexibles.nombre);
});
$("#bt_gastosExtras").click(function(){
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
        parseInt(document.getElementById("telefono").value),
        parseInt(document.getElementById("indumentaria").value),
        parseInt(document.getElementById("gim").value),
        parseInt(document.getElementById("peluqueria").value),
        parseInt(document.getElementById("restaurantes").value),
        parseInt(document.getElementById("cine").value),
        parseInt(document.getElementById("regalos").value),
        parseInt(document.getElementById("delivery").value),
        parseInt(document.getElementById("caridad").value),
        parseInt(document.getElementById("otros").value)
    ];
    sessionStorage.setItem("gastosExtras", JSON.stringify(preguntasExtras));
    sessionStorage.setItem("nombresGastosExtras", JSON.stringify(nombresExtras));

    let parseGastosExtras = JSON.parse(sessionStorage.getItem("gastosExtras"));
    let parseNombresExtras = JSON.parse(sessionStorage.getItem("nombresGastosExtras"));

    extras.agregarGasto(parseGastosExtras, parseNombresExtras);
    console.log(extras.lista);
    console.log(extras.nombre);
});