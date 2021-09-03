function Calcular() {
    var op = document.getElementById("opcion").value;
    var idenficacion = document.getElementById("idenficacion").value;
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var resultado;
    if (op == "Femenino") {
        //  resultado =  (220 - parseInt(edad)) /10 ;
        resultado = Femenino(edad);
    } else if ("Masculino") {
        // resultado =  (210 - parseInt(edad)) /10 ;
        resultado = Masculino(edad);
    }

    document.getElementById("resultado").value = resultado;
    guardar(idenficacion, nombre, op, edad, resultado);
}

function Masculino(edad) {
    var resultado = (210 - parseInt(edad)) / 10;
    return resultado;
}
function Femenino(edad) {
    var resultado = (220 - parseInt(edad)) / 10;
    return resultado;
}
function consultar() {
    guardar(idenficacion, nombre, op, edad, resultado);
}

function guardar(idenficacion, nombre, op, edad, resultado) {
    var Persona = {
        "idenficacion": idenficacion,
        "nombre": nombre,
        "op": op,
        "edad": edad,
        "resultado": resultado
    };

    var Personas = [];
    if (JSON.parse(localStorage.getItem('dato')) != null) {
        Personas = JSON.parse(localStorage.getItem('dato'));
    }
    Personas.push(Persona);
    localStorage.setItem('dato', JSON.stringify(Personas));
    // var pval = "";
    // Personas.array.forEach(element => {
    //     pval += "<tr>"
    //          pval += "<td>" + element.idenficacion + "</td>"
    //          pval += "<td>" + element.nombre + "</td>"
    //          pval += "<td>" + element.op + "</td>"
    //          pval += "<td>" + element.edad + "</td>"
    //          pval += "<td>" + element.resultado + "</td>"
    //        pval += "</tr>"

    // });
    // document.getElementById("tdCuerpo").innerHTML = pval;
}

function mostrar() {
    var Personas = [];
    if (JSON.parse(localStorage.getItem('dato')) != null) {
        Personas = JSON.parse(localStorage.getItem('dato'));
        var pval = "";
         Personas.forEach(element => {
            pval += "<tr>"
            pval += "<td>" + element.idenficacion + "</td>"
            pval += "<td>" + element.nombre + "</td>"
            pval += "<td>" + element.op + "</td>"
            pval += "<td>" + element.edad + "</td>"
            pval += "<td>" + element.resultado + "</td>"
            pval += "</tr>"

        });
    }

    document.getElementById("tdCuerpo").innerHTML = pval;

}