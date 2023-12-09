
const propiedades_alquiler = [
    {
        nombre: 'Confortable E Iluminado Dpto',
        src: './assets/img/propiedades/1.webp',
        descripcion: 'Un completo hogar para una familia',
        ubicacion: 'Pedro Montt 2354, Santiago',
        habitaciones: 5,
        banos: 2,
        costo: 1200000,
        smoke: true,
        pets: false, 
        },
        {
        nombre: ' Condominio Maratón Macul',
        src: './assets/img/propiedades/2.webp',
        descripcion: 'Departamento elegante para una familia',
        ubicacion: 'Macul',
        habitaciones: 2,
        banos: 1,
        costo: 450000,
        smoke: false, 
        pets: true, 
        },
        {
        nombre: 'Departamento Irarrázaval',
        src: './assets/img/propiedades/3.webp',
        descripcion: 'Lugar especial para estudiantes o solteros',
        ubicacion: 'Santiago',
        habitaciones: 1,
        banos: 1,
        costo: 300000,
        smoke: true,
        pets: true, 
        },
        {
        nombre: 'Condominio Salinas del Mar',
        src: './assets/img/propiedades/7.webp',
        descripcion: 'Lugar especial para estudiantes o solteros',
        ubicacion: 'Santiago',
        habitaciones: 3,
        banos: 2,
        costo: 850990,
        smoke: false,
        pets: false, 
        },
    ];


function generarHTMLPropiedad(propiedad) {
    const smokeIcon = propiedad.smoke ? '<i class="fas fa-smoking"></i> Se permite' : '<i class="fas fa-smoking-ban"></i> Se prohibe';
    const petsIcon = propiedad.pets ? '<i class="fas fa-paw"></i> Se aceptan' : '<i class="fas fa-ban"></i> No se aceptan';
    const smokeClass = propiedad.smoke ? 'text-success' : 'text-danger';
    const petsClass = propiedad.pets ? 'text-success' : 'text-danger';

    return `
        <div class="card">
            <img src="${propiedad.src}" class="foto-propiedad" alt="Imagen de la propiedad"/>
            <div class="card-body">
                <h5 class="card-title">${propiedad.nombre}</h5>
                <p class="card-text">${propiedad.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} | <i class="fas fa-bath"></i> ${propiedad.banos}</p>
                <p><i class="fas fa-dollar-sign"></i>${propiedad.costo}</p>
                <p class="${smokeClass}">${smokeIcon} Fumar</p>
                <p class="${petsClass}">${petsIcon} Mascotas</p>
            </div>
        </div>
    `;
}


function agregarPropiedadesAlHTML(propiedades, contenedorID) {
    const contenedor = document.getElementById(contenedorID);

    if (contenedor) {
        propiedades.forEach((propiedad) => {
            const propiedadHTML = generarHTMLPropiedad(propiedad);
            contenedor.innerHTML += propiedadHTML;
        });
    } else {
        console.error(`El contenedor con ID '${contenedorID}' no fue encontrado.`);
    }
}


document.addEventListener('DOMContentLoaded', function() {
    agregarPropiedadesAlHTML(propiedades_alquiler, 'contenedorAlquiler');
});


// LIMITE POST PARA INDEX
function agregarPropiedadesAlHTMLLimitado(propiedades, contenedorID, limite) {
    const contenedor = document.getElementById(contenedorID);

    if (contenedor) {
        propiedades.slice(0, limite).forEach((propiedad) => {
            const propiedadHTML = generarHTMLPropiedad(propiedad);
            contenedor.innerHTML += propiedadHTML;
        });
    } else {
        console.error(`El contenedor con ID '${contenedorID}' no fue encontrado.`);
    }
}

setTimeout(() => {
    agregarPropiedadesAlHTMLLimitado(propiedades_alquiler, 'boxAlquiler', 3);
}, 0); 

