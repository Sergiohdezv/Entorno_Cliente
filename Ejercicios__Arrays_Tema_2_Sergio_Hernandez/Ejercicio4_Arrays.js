// Ejercicio 4. Antigüedad de un coche
// Crea un objeto coche con marca «Toyota», modelo «Yaris» y año 2020.
// 1. Añade un método calcularAntiguedad().
// 2. Obtén el año actual con Date y calcula la diferencia respecto al año del coche.
// 3. Si el año del coche no es entero, es menor que 1886 o está en el futuro, devuelve null. Si es válido, devuelve la antigüedad.
// 4. Fuera del método, muestra el resultado o un mensaje de año no válido.
// Comprueba tu resultado
// Si el año actual es 2026, un coche de 2020 tiene 6 años.
// Prueba también el año actual y el año actual + 1.
// Se calcula una aproximación por años, sin meses ni días.

const coche = {
    marca: "Toyota",
    modelo: "Yaris",
    anio: 2020,

    calcularAntiguedad() {
        const anioActual = new Date().getFullYear();
        
        if (!Number.isInteger(this.anio) || this.anio < 1886 || this.anio > anioActual) {
          return null;
        }
        return anioActual - this.anio;
      }
    };

const antiguedad = coche.calcularAntiguedad();

if (antiguedad === null) {
  console.log("Año no válido.");
} else {
  console.log(`El coche tiene ${antiguedad} años.`);
}

const anioActual = new Date().getFullYear();

coche.anio = anioActual;
console.log(coche.calcularAntiguedad());

coche.anio = anioActual + 1;
console.log(coche.calcularAntiguedad());