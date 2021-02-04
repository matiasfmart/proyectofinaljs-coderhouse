function gastos(){
    this.lista = [];
    this.nombre = [];
    this.listaAux = this.lista.slice();

    this.agregarGasto = function(gasto, nombre){
        for(let i = 0; i < gasto.length; i++){
            this.lista.push(prompt(gasto[i]));
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

let ingresos = prompt("Ingrese el total de sus ingresos");
let ahorro = new ahorrar(prompt("Ingrese el monto que necesita ahorrar"),prompt("Ingrese en cuantos meses necesita el dinero") );


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
    "Aproximadamente cuanto abona de luz al mes?",
    "Aproximadamente cuanto abona de gas al mes?",
    "Aproximadamente cuanto abona de agua al mes?",
    "Aproximadamente cuanto abona de alquiler al mes?",
    "Aproximadamente cuanto gasta en transporte al mes?\nSi tiene auto coloque el gasto de combustible, y si se maneja en transporte publico coloque segun corresponda.",
    "Aproximadamente cuanto gasta en estudios?"
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
    "Aproximadamente cuanto gasta en medicina prepaga al mes?",
    "Aproximadamente cuanto gasta en medicamentos al mes?",
    "Aproximadamente cuanto gasta en el supermercado al mes?",
    "Aproximadamente cuanto abona de internet al mes?",
    "Aproximadamente cuanto gasta en su telefono tomando en cuenta si tiene cuotas, y su abono mensual?",
    "Aproximadamente cuanto gasta en su mascota si es que tiene?"
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
    "Pasatiempos",
    "Otros"
];
let preguntasExtras = [
    "Aproximadamente cuanto abona en TV por cable y telefono al mes?",
    "Aproximadamente cuanto gasta en comprar indumentaria al mes?",
    "Aproximadamente cuanto gasta en el gimnasio/deportes al mes?",
    "Aproximadamente cuanto gasta en la peluqueria al mes?",
    "Aproximadamente cuanto gasta en comer fuera de su casa al mes?",
    "Aproximadamente cuanto gasta en el cine/teatro al mes?",
    "Aproximadamente cuanto gasta en regalos al mes?",
    "Aproximadamente cuanto gasta en comidas por delivery al mes?",
    "Aproximadamente cuanto gasta donaciones o caridad si es que realiza al mes?",
    "Aproximadamente cuanto gasta en pasatiempos",
    "Si tiene algun gasto mensual que no se este contemplando por favor ingrese la cantidad."
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

