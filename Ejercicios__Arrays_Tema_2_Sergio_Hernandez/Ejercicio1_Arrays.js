// Ejercicio 1. Buscar un texto
// Crea un array con «rojo», «azul», «verde» y «amarillo». Define una variable con el color que quieras buscar.
// 1. Elimina espacios de los extremos y convierte la búsqueda a minúsculas.
// 2. Indica por consola si el color está en el array.
// 3. Prueba un color existente y otro que no esté.
// Comprueba tu resultado
// « AZUL » → encontrado. «violeta» → no encontrado.

const colores = ["rojo", "azul", "verde", "amarillo"];
let colorFavorito = "AZUL";

colorFavorito = colorFavorito.trim().toLowerCase();

if (colores.includes(colorFavorito)) {
    console.log("Encontrado.")
} else {
    console.log("No encontrado.")
}