// --- 1. SOLICITUD Y CONVERSIÓN DE DATOS ---

// Solicitamos al usuario tres números y los convertimos a un formato numérico.
const num1 = parseFloat(prompt("Ingresa el primer número:"));
const num2 = parseFloat(prompt("Ingresa el segundo número:"));
const num3 = parseFloat(prompt("Ingresa el tercer número:"));

// --- 2. VALIDACIÓN DE DATOS ---

// Verificamos si las entradas son números válidos. Si no lo son, se muestra un error.
if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    alert("Error: Debes ingresar tres números válidos. Por favor, recarga la página.");
} else {

    // --- 3. PROCESAMIENTO INICIAL ---

    // Obtenemos una referencia al elemento del DOM donde mostraremos el resultado.
    const resultadoContainer = document.getElementById('resultado');

    // Comprobamos la primera condición: si todos los números son iguales.
    if (num1 === num2 && num1 === num3) {
        
        const mensajeIguales = "Los tres números son iguales: " + num1;
        
        // Mostramos el mensaje en la consola y en el DOM.
        console.log(mensajeIguales);
        resultadoContainer.innerHTML = `<p>${mensajeIguales}</p>`;

    } else {
        // Si no son iguales, por ahora solo mostramos los números ingresados.
        // La lógica de ordenamiento se añadirá en el siguiente commit.
        const mensajePendiente = `Los números ingresados fueron: ${num1}, ${num2}, ${num3}. La lógica de ordenamiento se implementará a continuación.`;
        
        console.log(mensajePendiente);
        resultadoContainer.innerHTML = `<p>${mensajePendiente}</p>`;
    }
}