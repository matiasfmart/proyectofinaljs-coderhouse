class gastos{
    constructor(){
        this.lista = [];
        this.nombre = [];
        this.listaAux = [];
        this.ahorrar = [];
    }
    agregarGasto = function(gasto, nombre){
        for(let i = 0; i < gasto.length; i++){
            this.lista.push(gasto[i]);
            this.nombre.push(nombre[i]);
        }
        this.listaAux = this.lista.slice();
    }
    total = function(){
        let totalGastos = 0;
        for (let i = 0; i < this.lista.length; i++){
            totalGastos = totalGastos + this.lista[i];    
        }
        return totalGastos;
    }
    diferencia = function(){
        for (let i = 0; i < this.lista.length; i++) {
            let dif = this.listaAux[i] - this.lista[i]; //Saco el ahorro diario restando el gasto original, con el gasto luego de haber procesado los datos...
            this.ahorrar.push(dif);
        }
    }
}

class ahorrar{
    constructor(ahorro, mes){
        this.ahorro = ahorro;
        this.tiempo = mes;
    }
    ahorroDiario = function(){
        let diario = 0;
        diario = this.ahorro/ (this.tiempo * 30);
        return diario;
    }
    ahorroMensual = function(){
        let mensual = 0;
        mensual = this.ahorro/ this.tiempo;
        return mensual;
    }
}

let ingresos = 0;

let fijos = new gastos();
let flexibles = new gastos();
let extras = new gastos();
let ahorro = new ahorrar();



$.ajax({
    url: "https://www.dolarsi.com/api/api.php?type=valoresprincipales",
    dataType: "json",
    success: function(valor, estado){
        let dolarCompra = valor[0].casa["compra"];
        console.log(dolarCompra);
        $(".dolarCompra").html(dolarCompra);


        let dolarBlueCompra = valor[1].casa["compra"];
        console.log(dolarBlueCompra);
        $(".dolarBlueCompra").html(dolarBlueCompra);
    }
});

$("#bt_ingresos").click(function(){
    $(".ingresos").fadeOut(500, function(){
        $(".gastosFijos").fadeIn(500);
        ingresos = parseInt(document.getElementById("ingresos").value);
        ahorro.ahorro = parseInt(document.getElementById("ahorro").value);
        ahorro.tiempo = parseInt(document.getElementById("tiempo").value);
        console.log(ingresos);
        console.log(ahorro.ahorro);
        console.log(ahorro.tiempo);
    });
});

$("#bt_gastosFijos").click(function(){
    $(".gastosFijos").fadeOut(500, function(){
        $(".gastosFlexibles").fadeIn(500);
        let nombresFijos = [
            "Luz",
            "Gas",
            "Agua",
            "Alquiler",
            "Transporte",
            "Estudios",
            "Tarjetas/Creditos"
        ];
    
        let preguntasFijos = [
            parseInt(document.getElementById("luz").value),
            parseInt(document.getElementById("gas").value),
            parseInt(document.getElementById("agua").value),
            parseInt(document.getElementById("alquiler").value),
            parseInt(document.getElementById("transporte").value),
            parseInt(document.getElementById("estudios").value),
            parseInt(document.getElementById("tarjetas").value)
        ];
        sessionStorage.setItem("gastosFijos", JSON.stringify(preguntasFijos));
        sessionStorage.setItem("nombresGastosFijos", JSON.stringify(nombresFijos));
    
        let parseGastosFijos = JSON.parse(sessionStorage.getItem("gastosFijos"));
        let parseNombresFijos = JSON.parse(sessionStorage.getItem("nombresGastosFijos"));
    
        fijos.agregarGasto(parseGastosFijos, parseNombresFijos);
        console.log(fijos.lista);
        console.log(fijos.nombre);
    });
});
$("#bt_fijosVolver").click(function(){
    $(".gastosFijos").fadeOut(500, function(){
        $(".ingresos").fadeIn(500);
    });
});

$("#bt_gastosFlexibles").click(function(){
    $(".gastosFlexibles").fadeOut(500, function(){
        $(".gastosExtras").fadeIn(500);
        $("body").css("background-image","url(/img/background_extras.jpg)");
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
});
$("#bt_flexiblesVolver").click(function(){
    $(".gastosFlexibles").fadeOut(500, function(){
        $(".gastosFijos").fadeIn(500);
    });
});
$("#bt_gastosExtras").click(function(){
    $(".gastosExtras").fadeOut(500, function(){
        $(".calculo").fadeIn(500);
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
    
        let totalGastos = fijos.total() + flexibles.total() + extras.total();
        console.log(totalGastos);
        let sobra = ingresos - totalGastos;
        if(sobra <= 0){
            sobra = 0;
        }
        let ahorroDiarioTotal = ahorro.ahorroDiario() - (sobra / 30);
        let totalFijosFlex = fijos.total() + flexibles.total();
        let acum_diario = (sobra / 30);
        let acum_mensual = sobra;
        let faltante = 0;
        let aux = true;
        /*Si el ahorro diario es mayor a lo que esta disponible para ahorrar por dia (acum) entonces entra al bucle para comenzar a descontar gastos */
        while(ahorro.ahorroMensual() > acum_mensual){
    
            /*Utilizando la regla 50/30/20 descuento los gastos segun porcentaje*/
            
            /*Si el total de gastos innecesarios o extras es mayor al 30% de los ingresos del usuario ingresa a un bucle para comenzar a reducir los gastos hasta la condicion*/
            if(extras.total() > ingresos*0.3){
                while(extras.total() > ingresos*0.3){
                    for(let i = extras.lista.length; i >= 0; i--){
                        for(let j = i; j>= 0; j--){
                            if (extras.lista[i] > 0) {                            
                                extras.lista[i] = extras.lista[i] - i;  //Utilizo variables auxiliares replicas de las originales ingresadas por el usuario para no perder informacion
                                acum_mensual =+ i; //utilizo una variable para acumular el dinero juntado en la reduccion de los gastos
                            }
                        }
                    }
                }
    
            /*una vez finalizada la condicion anterior, si aun asi la variable acum no llega a cubrir el ahorro diario necesario
            comienza el descuento de los gastos flexibles en base a la misma regla 50/30/20 ---*/
            }else if(totalFijosFlex > ingresos*0.5){
    
                /*Se ingresa al bucle calculando el total de gastos fijos sumando a los flexibles, pero solo se reducen los gastos flexibles
                para que de esa manera no se reduzcan los gastos mas importantes que son los fijos (alquileres, luz, agua, gas, estudios etc.) */
                while(totalFijosFlex > ingresos*0.5){
                    for(let i = flexibles.lista.length; i >= 0; i--){
                        for(j = i; j>= 0; j--){
                            if (flexibles.lista[i] > 0) {                            
                                flexibles.lista[i] = flexibles.lista[i] - i;
                                acum_mensual =+ i; //utilizo una variable para acumular el dinero juntado en la reduccion de los gastos
                            }
                        }
                    }
                    totalFijosFlex = fijos.total() + flexibles.total();
                }
    
            /*Si aun despues de reducir todos los gastos flexibles y extras no se llega a cubrir el ahorro diario, se vuelven a descontar los gastos extras
            hasta cubrir el monto. El objetivo es no descontar los gastos fijos */
            }else if((ahorro.ahorroMensual() > acum_mensual) && (extras.total() > 0) && (totalFijosFlex > 0)){
                while((ahorro.ahorroMensual() > acum_mensual) && (extras.total() > 0) && (totalFijosFlex > 0)){
                    if(aux){
                        for(let i = extras.lista.length; i >= 0; i--){
                            if (extras.lista[i] > 0) {                                    
                                extras.lista[i]--;
                                acum_mensual++;
                            }
                        }
                        aux = false;
                    }else{
                        for(let i = flexibles.lista.length; i >= 0; i--){
                            if (flexibles.lista[i] > 0) {                                    
                                flexibles.lista[i]--;
                                acum_mensual++;
                            }
                        }
                        totalFijosFlex = fijos.total() + flexibles.total();
                        aux = true;
                    }
                }
            }else{
                faltante = acum_mensual;
                while(faltante <= ahorro.ahorroMensual()){
                    faltante ++;
                }
                faltante = faltante - acum_mensual;
            }
        }
        console.log(acum_mensual);
        $(".totalGastoTitulo").append(`<h1>$${totalGastos}</h1>`);
        $(".calculo").append(`<h1>Se acumulo $${acum_mensual}</h1>`)
        if (faltante != 0) {
            $(".calculo").append(`<h1>Falta $${faltante}</h1>`)
        }
        for(let i = 0; i < extras.lista.length; i++){
            extras.diferencia();
            console.log(`${extras.nombre[i]}: $${extras.listaAux[i]} - Ahorrar $${extras.ahorrar[i]}. = Total $${extras.lista[i]}`);
            $(".calculoAhorroExtras__resultados").append(`<h3 class="nombreResultado">${extras.nombre[i]}: $${extras.listaAux[i]} </h3><h3 class="ahorroResultado">- $${extras.ahorrar[i]}</h3><br><br>`);
            $(".calculoTotalExtras__resultados").append(`<h3 class="nombreResultado">${extras.nombre[i]}:</h3><h3 class="totalResultado"> $${extras.lista[i]}</h3><br><br>`);
        }
        for(let i = 0; i < flexibles.lista.length; i++){
            flexibles.diferencia();
            console.log(`${flexibles.nombre[i]}: $${flexibles.listaAux[i]} - Ahorrar $${flexibles.ahorrar[i]}. = Total $${flexibles.lista[i]}`);
            $(".calculoAhorroFlexibles__resultados").append(`<h3 class="nombreResultado">${flexibles.nombre[i]}: $${flexibles.listaAux[i]} </h3><h3 class="ahorroResultado">- $${flexibles.ahorrar[i]}</h3><br><br>`);
            $(".calculoTotalFlexibles__resultados").append(`<h3 class="nombreResultado">${flexibles.nombre[i]}:</h3><h3 class="totalResultado"> $${flexibles.lista[i]}</h3><br><br>`);
        }
    });
});
$("#bt_extrasVolver").click(function(){
    $(".gastosExtras").fadeOut(500, function(){
        $(".gastosFlexibles").fadeIn(500);
    });
});