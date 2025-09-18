
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

    // --- 3. PROCESAMIENTO Y LÓGICA ---

    // Obtenemos una referencia al elemento del DOM donde mostraremos el resultado.
    const resultadoContainer = document.getElementById('resultado');

    // Comprobamos la primera condición: si todos los números son iguales.
    if (num1 === num2 && num1 === num3) {
        
        const mensajeIguales = "Los tres números son iguales: " + num1;
        
        // Mostramos el mensaje en la consola y en el DOM.
        console.log(mensajeIguales);
        resultadoContainer.innerHTML = `<p>${mensajeIguales}</p>`;

    } else {
        // Si los números no son todos iguales, procedemos a ordenarlos.
        
        // Creamos un arreglo con los tres números para facilitar el ordenamiento.
        const numeros = [num1, num2, num3];

        // --- Ordenamiento de Mayor a Menor ---
        // Usamos una copia del arreglo y el método .sort() con una función descendente.
        const ordenadosMayorAMenor = [...numeros].sort((a, b) => b - a);

        // --- Ordenamiento de Menor a Mayor ---
        // Usamos una copia del arreglo y el método .sort() con una función ascendente.
        const ordenadosMenorAMayor = [...numeros].sort((a, b) => a - b);
        
        // --- 4. MOSTRAR RESULTADOS ---

        // Creamos las cadenas de texto que mostraremos.
        const textoMayorMenor = `Orden de mayor a menor: ${ordenadosMayorAMenor.join(', ')}`;
        const textoMenorMayor = `Orden de menor a mayor: ${ordenadosMenorAMayor.join(', ')}`;

        // Mostramos los resultados en la consola.
        console.log("--- Resultados del Ordenamiento ---");
        console.log(textoMayorMenor);
        console.log(textoMenorMayor);
        
        // Mostramos los resultados finales en la página web (DOM).
        resultadoContainer.innerHTML = `
            <p>Los números ingresados fueron: ${numeros.join(', ')}</p>
            <p><strong>${textoMayorMenor}</strong></p>
            <p><strong>${textoMenorMayor}</strong></p>
        `;
    }
}