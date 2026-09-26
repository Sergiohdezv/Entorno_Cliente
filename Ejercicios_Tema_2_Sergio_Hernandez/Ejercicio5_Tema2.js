// Ejercicio 5. Recoger y mostrar productos
// 1. Crea un array vacío y pide productos mediante prompt.
// 2. Añade cada nombre después de eliminar espacios de los extremos. Se permiten repetidos.
// 3. Si la entrada queda vacía, muestra un aviso y vuelve a pedirla.
// 4. Al pulsar Cancelar, finaliza la recogida.
// 5. Muestra por consola la lista completa y el número de productos. Si no hay ninguno, indica «Lista vacía».
// Comprueba tu resultado
// Entradas: «pan», «leche», «pan» y Cancelar.
// Lista final: pan, leche, pan. Número de productos: 3.
// Cancelar en la primera pregunta → «Lista vacía».

const lista = [];

while (true) {
  let producto = prompt("Introduce un producto (Pulsa cancelar para terminar de introducir productos):");

  if (producto === null) {
    break;
  }

  producto = producto.trim();

  if (producto === "") {
    alert("La entrada no puede estar vacía. Inténtalo de nuevo.");
    continue;
  }

  lista.push(producto);
}

if (lista.length === 0) {
  console.log("Lista vacía");
} else {
  console.log("Lista final:", lista.join(", "));
  console.log("Número de productos:", lista.length);
}
