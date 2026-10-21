const contenedor = document.querySelector('.grid');

tienda.forEach(disco => {

    const tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjeta');

    const imagen = document.createElement('img');
    imagen.src = disco.caratula;
    imagen.alt = 'Carátula de ' + disco.titulo;

    imagen.onerror = function() {
        this.onerror = null;
        this.src = 'https://placehold.co/300x250?text=Sin+caratula';
        this.style.opacity = '0.5';
    };

    const titulo = document.createElement('h2');
    titulo.textContent = disco.titulo;

    const artista = document.createElement('p');
    artista.textContent = 'Artista: ' + disco.artista;

    const pais = document.createElement('p');
    pais.textContent = 'País: ' + disco.pais;

    const publicacion = document.createElement('p');
    publicacion.textContent = 'Año de publicación: ' + disco.publicacion;

    const copias = document.createElement('p');
    copias.textContent = 'Copias vendidas: ' + disco.copias + ' mil';

    const precio = document.createElement('p');
    precio.textContent = 'Precio: €' + disco.precio.toFixed(2);

    tarjeta.append(imagen, titulo, artista, pais, publicacion, copias, precio);

    contenedor.appendChild(tarjeta);
});