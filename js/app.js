/* 
Crear un programa en Javascript que realice lo siguiente:
    * Debe solicitar al usuario la temperatura en grados Celsius por prompt o por un input.
    * Debe convertir la temperatura ingresada de grados Celsius a grados Fahrenheit y Kelvin
    * Debe imprimir ambos resultados por consola o por el DOM.
    * Debe ser capaz de identificar si los datos de entrada sean de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar los datos.
*/  


// isNaN(dataFromValue) ? alert("El dato ingresado no corresponde a un valor válido. \n DEBE INGRESAR UN VALOR NUMÉRICO") : convertirTemperatura(inputCelcius);



// MANIPULACION DEL DOM 
function convertir() {
    let inputFrom = document.getElementById("inputFrom");
    let dataFrom = document.getElementById("dataFrom");
    let showTemperatura1 = document.getElementById("showTemperatura1");
    let showTemperatura2 = document.getElementById("showTemperatura2");

    let inputFromValue = inputFrom.value;
    let dataFromValue = parseFloat(dataFrom.value);

    switch(inputFromValue){
        case "C":
            convertirCelcius(dataFromValue);
        break;
        case "F":
            convertirFahreinheit(dataFromValue);
        break;
        case "K":
            convertirKelvin(dataFromValue);
        break;
        default:
            alert("Opcion Seleccionada No Valida.")
    }


    function convertirCelcius(tempCelcius) {
        
        let tempFahrenheit = (tempCelcius * 9/5)+32;
        let tempKelvin =  tempCelcius + 273.15;

  
        showTemperatura1.innerHTML= `${tempCelcius}° C = ${tempFahrenheit.toFixed(2)} ° F`;
        showTemperatura2.innerHTML= `${tempCelcius}° C = ${tempKelvin.toFixed(2)} ° K`;

    };
    
    function convertirFahreinheit(tempFahrenheit) {
        
        let tempCelcius = (tempFahrenheit-32)*(5/9);
        let tempKelvin =  (tempFahrenheit-32)*(5/9)+273.15;
        
        // alert(tempFahrenheit)
        // alert(tempKelvin)
        // alert(tempCelcius)
        showTemperatura1.innerHTML= `${tempFahrenheit}° F = ${tempCelcius.toFixed(2)} ° C`;
        showTemperatura2.innerHTML= `${tempFahrenheit}° F = ${tempKelvin.toFixed(2)} ° K`;

        
    };

    function convertirKelvin(tempKelvin) {
        
        let tempFahrenheit = (tempKelvin-273.15)*(9/5)+32;
        let tempCelcius =  tempKelvin-273.15;   
        
        showTemperatura1.innerHTML= `${tempKelvin}° K = ${tempFahrenheit.toFixed(2)} ° F`;
        showTemperatura2.innerHTML= `${tempKelvin}° K = ${tempCelcius.toFixed(2)} ° C`;
    };
}

function limpiar () {
    let inputFrom = document.getElementById("inputFrom");
    let dataFrom = document.getElementById("dataFrom");
    let showTemperatura1 = document.getElementById("showTemperatura1");
    let showTemperatura2 = document.getElementById("showTemperatura2");

    inputFrom.value = "";
    dataFrom.value = "";
    showTemperatura1.innerHTML = "";
    showTemperatura2.innerHTML = "";
}
    
    


