//Ejercicio 5. Productos de una tienda
// Crea un objeto tienda con la propiedad productos. Su valor será un array con estos objetos: 
// Cuaderno, 4 €; Bolígrafo, 2 €; Mochila, 25 €. Cada producto tendrá nombre y precio.
// 1. Añade un método calcularTotal() que recorra los productos y devuelva la suma de sus precios.
// 2. Se cuenta una unidad por producto. Los precios ya son válidos.
// 3. Muestra el resultado con dos decimales. Comprueba también un array vacío.
// Comprueba tu resultado
// Total: 31,00 €. Con productos vacío: 0,00 €.
// Si añades un Estuche de 6 €, el total debe pasar a 37,00 €.

const tienda = {
  productos: [
    {nombre: "Cuaderno", precio: 4},
    {nombre: "Bolígrafo", precio: 2},
    {nombre: "Mochila", precio: 25}
  ],

  calcularTotal() {
    let total = 0;
    
    for (let i = 0; i < this.productos.length; i++) {
      total += this.productos[i].precio;
    }
    return total;
  }
};

console.log("Total:", tienda.calcularTotal().toFixed(2), "€");

tienda.productos = [];
console.log("Total (Lista vacía):", tienda.calcularTotal().toFixed(2), "€");

tienda.productos = [
  {nombre: "Cuaderno", precio: 4},
  {nombre: "Bolígrafo", precio: 2},
  {nombre: "Mochila", precio: 25},
  {nombre: "Estuche", precio: 6}
];

console.log("Total con estuche añadido:", tienda.calcularTotal().toFixed(2), "€");