'use strict';


/*
 * Yutas De Lorenzo Agustin
*/


// Crear elementos
function crearElemento(nombre = '', atributos = {}, contenido = '') {
  const elemento = document.createElement(nombre);
  for (const atributo in atributos) {
    elemento.setAttribute(atributo, atributos[atributo]);
  }
  if (contenido) {
    elemento.textContent = contenido;
  }
  return elemento;
}

class Producto {
  constructor(id, nombre, img, descripcion, precio, categoria) {
    this.id = id;
    this.nombre = nombre;
    this.img = img;
    this.descripcion = descripcion;
    this.precio = precio;
    this.categoria = categoria;
  }
}

let productos = [
  new Producto(1, 'Maquina Dorsalera y Remo', 'IMGS/MaquinaDorsalerayRemoBajo.jpg', 'Es un equipo multifuncional diseñado para entrenar la espalda y los músculos dorsales de manera completa y efectiva. Con dos opciones de ejercicio, permite realizar movimientos de jalón y remo bajo, ideales para fortalecer la parte superior y media de la espalda.', 27000000, 'Musculacion'),
  new Producto(2, 'Maquina Poleas Enfrentadas', 'IMGS/MaquinaPoleasEnfrentadas.jpg', 'Está diseñada para proporcionar una variedad casi ilimitada de entrenamientos en un solo espacio, que es uno de los equipos más populares del gimnasio. No solo se puede utilizar como dispositivo independiente, sino que también se puede utilizar para complementar los tipos de entrenamiento existentes.', 1300000, 'Musculacion'),
  new Producto(3, 'Press Vertical', 'IMGS/pressvertical.jpg', 'Esta diseñada para trabajar de manera efectiva los músculos del pecho y los hombros. Su diseño ergonómico permite realizar movimientos naturales y seguros, ofreciendo un soporte ideal para entrenamientos intensos. Con ajustes de resistencia personalizables, esta máquina es apta para usuarios de todos los niveles, brindando estabilidad y comodidad en cada repetición.', 1000000, 'Musculacion'),
  new Producto(4, 'Sillon de Femoral', 'IMGS/sillondefemoral.jpg', 'Es un equipo de entrenamiento diseñado para aislar y fortalecer los músculos isquiotibiales en una posición sentada. El amplio cojín del asiento está ligeramente inclinado para alinear correctamente las rodillas del deportista con el punto de giro, lo que ayuda a los clientes a encontrar la postura de ejercicio correcta para garantizar un mejor aislamiento muscular y una mayor comodidad.', 1700000, 'Musculacion'),
  new Producto(5, 'Cinta Caminadora', 'IMGS/cinta_caminadora.jpg', 'Con un diseño compacto y plegable, permite ajustar la velocidad y la inclinación para una experiencia personalizada de ejercicio. Su pantalla LED muestra el tiempo, distancia, calorías y frecuencia cardíaca, ofreciendo un monitoreo constante. Además, cuenta con programas preestablecidos para distintos niveles de entrenamiento, y un sistema de amortiguación que reduce el impacto en las articulaciones. Es perfecta tanto para quienes desean caminar como para quienes buscan correr con comodidad y seguridad.', 1800000, 'Cardio'),
  new Producto(6, 'Cinta Curva', 'IMGS/cinta_curva.jpg', 'La cinta de correr curva, le da al usuario un control del 100% sobre el proceso de entrenamiento, proporcionando una transición fácil entre diferentes velocidades y ritmos de carrera. Es una excelente plataforma para correr. Se realiza un kilometraje de 150.000 millas (240.000 kilómetros) sin un solo reemplazo de la banda de correr (banda móvil) o partes de la plataforma. Además, dado que la caminadora no tiene motor, no necesita preocuparse por el reemplazo de ningún componente eléctrico.',2254000, 'Cardio'),
  new Producto(7, 'Eliptico', 'IMGS/eliptico.jpg', ' Es perfecto para un entrenamiento completo de bajo impacto, ideal para cuidar tus articulaciones mientras fortaleces todo el cuerpo. Con resistencia ajustable, permite personalizar la intensidad del ejercicio según tus objetivos. Su diseño ergonómico y antideslizante brinda estabilidad y seguridad en cada movimiento. Además, cuenta con una pantalla que muestra datos como tiempo, velocidad, distancia y calorías, ayudándote a monitorear tu progreso.', 2500000, 'Cardio'),
  new Producto(8, 'Escaladora', 'IMGS/escaladora.jpg', 'Es un equipo innovador de entrenamiento diseñado para simular la experiencia de subir escaleras, perfecto para mejorar la resistencia cardiovascular y tonificar piernas y glúteos. Con niveles de resistencia ajustables, permite personalizar el esfuerzo según tus necesidades. Su pantalla integrada muestra información de tiempo, calorías y distancia, ayudándote a mantener el control de tu entrenamiento.', 1320000, 'Cardio'),
  new Producto(9, 'Kit de agarres', 'IMGS/kit_agarres.jpg', 'Es el complemento perfecto para potenciar tus entrenamientos de fuerza. Incluye una variedad de agarres que te permiten trabajar diferentes músculos con comodidad y seguridad, adaptándose a tus necesidades y ejercicios favoritos. Fabricados con materiales duraderos y antideslizantes, estos agarres brindan un control óptimo y mayor estabilidad en cada movimiento.', 900000, 'Accesorios'),
  new Producto(10, 'Collar tope', 'IMGS/collar_tope.jpg', 'Se utiliza para asegurar el peso en barras durante tus entrenamientos de fuerza. Fabricados con materiales resistentes, brindan un agarre firme y seguro, evitando que los discos se deslicen. Su diseño ligero y de fácil colocación permite un cambio rápido de pesas, optimizando el tiempo en tus rutinas.', 140000, 'Accesorios'),
  new Producto(11, 'Cajo de salto', 'IMGS/cajon_salto.jpg', 'Es ideal para ejercicios de salto y entrenamiento funcional. Fabricado en madera de alta calidad, ofrece tres alturas distintas para adaptarse a diferentes niveles de dificultad y objetivos de entrenamiento. Su diseño estable y superficie antideslizante aseguran un uso seguro y efectivo, perfecto para desarrollar potencia, velocidad y resistencia.', 120000, 'Accesorios'),
  new Producto(12, 'Bandas Elasticas', 'IMGS/bandas_elasticas.jpg', 'Es ideal para fortalecer y tonificar glúteos, piernas y caderas. Este set incluye tres bandas de resistencia en distintos niveles (S, M, L), cada una de un color diferente para identificar la intensidad. Fabricadas en tela suave y antideslizante, brindan comodidad y firmeza durante el entrenamiento sin enrollarse o deslizarse.', 225000, 'Accesorios'),
];

let carrito = [];
let cantidadProductos = 0;
let cantidadPago = 0;
let ordenAscendente = true;

// Función para guardar el carrito en localStorage
function guardarCarrito() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Función para cargar el carrito desde localStorage
function cargarCarrito() {
  const carritoGuardado = JSON.parse(localStorage.getItem('carrito'));
  if (carritoGuardado) {
    carrito = carritoGuardado;
    cantidadProductos = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    cantidadPago = carrito.reduce((acc, item) => acc + item.producto.precio * item.cantidad, 0);
    actualizarCarrito();
  }
}

// Crear productos

function crearProductos(producto) {
  const nombre = crearElemento('h3', {}, producto.nombre);
  const imgProd = crearElemento('img', { alt: `Imagen de producto: ${producto.nombre}`, src: producto.img });
  const categoria = crearElemento('p', { class: "tag" }, producto.categoria);
  const precio = crearElemento('p', { class: "precio" }, `ARS $${producto.precio}`);

  const botonAgregarCarrito = crearElemento('button', { class: 'boton-agregar' }, 'Agregar al carrito');
  botonAgregarCarrito.addEventListener('click', () => agregarAlCarrito(producto.id));

  const botonVerDetalles = crearElemento('button', { class: 'boton-detalles' }, 'Ver Detalles');
  botonVerDetalles.addEventListener('click', () => mostrarDetalles(producto));

  return [nombre, imgProd, categoria, precio, botonAgregarCarrito, botonVerDetalles];
}


// Evento para ordenar productos por precio
document.getElementById('orden-precio').addEventListener('change', (event) => {
  const orden = event.target.value;
  if (orden) {
    productos.sort((a, b) => orden === 'asc' ? a.precio - b.precio : b.precio - a.precio);
    mostrarProductos();
  }
});

// Evento para reiniciar filtros y mostrar los productos en su orden inicial
document.getElementById('btn-reiniciar-filtros').addEventListener('click', () => {
  productos.sort((a, b) => a.id - b.id);  
  document.getElementById('orden-precio').value = '';
  mostrarProductos();
});

// Inicializa los productos al cargar la página sin ordenarlos
document.addEventListener('DOMContentLoaded', () => {
  cargarCarrito();  
  mostrarProductos(); 
});


// Mostrar productos

function mostrarProductos() {
  const listaProductos = document.getElementById('productos');
  listaProductos.textContent = "";

  productos.forEach(producto => {
    const divDeProductos = crearElemento('div');
    const caracteristicas = crearProductos(producto);

    caracteristicas.forEach(elemento => {
      divDeProductos.appendChild(elemento);
    });

    listaProductos.appendChild(divDeProductos);
  });
}

mostrarProductos();

// Agregar al carrito
function agregarAlCarrito(prodId) {
  const producto = productos.find(p => p.id === prodId);
  if (producto) {
    const itemCarrito = carrito.find(item => item.producto.id === prodId);
    if (itemCarrito) {
      itemCarrito.cantidad += 1;
    } else {
      carrito.push({ producto, cantidad: 1 });
    }
    cantidadProductos += 1;
    cantidadPago += producto.precio;
    actualizarCarrito();
    guardarCarrito();
  }
}

// Modal productos detalles

function mostrarDetalles(producto) {
  const divModal = crearElemento('div', { id: 'modalProducto', class: 'modal' });
  const botonCerrar = crearElemento('a', { href: '#', class: 'cerrar' }, 'X');
  botonCerrar.addEventListener('click', (event) => {
    event.preventDefault();
    divModal.remove();
  });

  const subDivModal = crearElemento('div');
  const nombreProducto = crearElemento('h2', {}, producto.nombre);
  const imgProducto = crearElemento('img', { alt: `Imagen de producto: ${producto.nombre}`, src: producto.img });
  const categoriaProducto = crearElemento('p', { class: "tag tag-mg" }, producto.categoria);
  const descripcionProducto = crearElemento('p', {class: "desc"}, producto.descripcion);
  const precioProducto = crearElemento('p', { class: "precio" }, `ARS $${producto.precio}`);
  const botonAgregarCarrito = crearElemento('button', { class: 'boton-agregar' }, 'Agregar al carrito');
  botonAgregarCarrito.addEventListener('click', () => agregarAlCarrito(producto.id));

  const botonIrAlCarrito = crearElemento('button', { class: 'boton-ir-carrito' }, 'Ir al carrito');
  botonIrAlCarrito.addEventListener('click', () => {
    mostrarDetalleCarrito();
    divModal.remove();
  });

  subDivModal.appendChild(nombreProducto);
  subDivModal.appendChild(imgProducto);
  subDivModal.appendChild(categoriaProducto);
  subDivModal.appendChild(descripcionProducto);
  subDivModal.appendChild(precioProducto);
  subDivModal.appendChild(botonAgregarCarrito);
  subDivModal.appendChild(botonIrAlCarrito);

  divModal.appendChild(botonCerrar);
  divModal.appendChild(subDivModal);

  document.querySelector("main").appendChild(divModal);
}

// Modal carrito

function mostrarDetalleCarrito() {
  // verificacion para ver si ya existe el modal para que no se duplique
  const modalExistente = document.getElementById('modalCarrito');
  if (modalExistente) {
    modalExistente.remove();
  }

  const modalCarrito = crearElemento('div', { id: 'modalCarrito', class: 'modal' });
  const modalContent = crearElemento('div');
  const botonCerrar = crearElemento('a', { href: '#', class: 'cerrar' }, 'X');
  botonCerrar.addEventListener('click', (event) => {
    event.preventDefault();
    modalCarrito.remove();
  });

  const titulo = crearElemento('h2', {}, 'Detalle del Carrito');
  const listaProductos = crearElemento('ul');

  carrito.forEach(item => {
    const producto = item.producto;
    const itemProducto = crearElemento('li');
    const nombreProducto = crearElemento('span', {}, producto.nombre);
    const precioProducto = crearElemento('span', {}, ` ARS $${producto.precio}`);
    const cantidadProducto = crearElemento('span', {class: "rojo"}, `( x ${item.cantidad} )`);
    const botonEliminar = crearElemento('button', {}, 'Eliminar');
    botonEliminar.addEventListener('click', () => eliminarDelCarrito(producto.id));

    // Botón para aumentar la cantidad
    const botonAumentar = crearElemento('button', { class: 'boton-aumentar' }, '+');
    botonAumentar.addEventListener('click', () => cambiarCantidadProducto(producto.id, 1));

    // Botón para disminuir la cantidad
    const botonDisminuir = crearElemento('button', { class: 'boton-disminuir' }, '-');
    botonDisminuir.addEventListener('click', () => cambiarCantidadProducto(producto.id, -1));

    itemProducto.appendChild(nombreProducto);
    itemProducto.appendChild(precioProducto);
    itemProducto.appendChild(cantidadProducto);
    itemProducto.appendChild(botonEliminar);

    itemProducto.appendChild(botonAumentar);
    itemProducto.appendChild(botonDisminuir);

    listaProductos.appendChild(itemProducto);
  });

  const total = crearElemento('p', {}, `Total: ARS $${cantidadPago}`);
  const botonVaciarCarrito = crearElemento('button', {}, 'Vaciar Carrito');
  botonVaciarCarrito.addEventListener('click', vaciarCarrito);

  modalContent.appendChild(botonCerrar);
  modalContent.appendChild(titulo);
  modalContent.appendChild(listaProductos);
  modalContent.appendChild(total);
  modalContent.appendChild(botonVaciarCarrito);

  modalCarrito.appendChild(modalContent);
  document.querySelector("main").appendChild(modalCarrito);
}


function cambiarCantidadProducto(prodId, cambio) {
  const itemCarrito = carrito.find(item => item.producto.id === prodId);
  if (itemCarrito) {
    itemCarrito.cantidad += cambio;

    if (itemCarrito.cantidad <= 0) {
      carrito = carrito.filter(item => item.producto.id !== prodId);
    } else {
      cantidadProductos += cambio;
      cantidadPago += itemCarrito.producto.precio * cambio;
    }

    actualizarCarrito();
    guardarCarrito();
    mostrarDetalleCarrito();
  }
}

// Eliminar productos del carrito
function eliminarDelCarrito(prodId) {
  const index = carrito.findIndex(item => item.producto.id === prodId);
  if (index !== -1) {
    const itemCarrito = carrito[index];
    if (itemCarrito.cantidad > 1) {
      itemCarrito.cantidad -= 1;
    } else {
      carrito.splice(index, 1);
    }

    cantidadProductos -= 1;
    cantidadPago -= itemCarrito.producto.precio;

    actualizarCarrito();
    guardarCarrito();
    mostrarDetalleCarrito();
  }
}

// Vaciar carrito
function vaciarCarrito() {
  carrito = [];
  cantidadProductos = 0;
  cantidadPago = 0;
  actualizarCarrito();
  guardarCarrito();
  mostrarDetalleCarrito();
}

function actualizarCarrito() {
  const itemsAgregados = document.getElementById('items-agregados');
  itemsAgregados.textContent = cantidadProductos;
}

const btnVerDetalleCarrito = document.getElementById('btn-ver-detalle-carrito');
btnVerDetalleCarrito.addEventListener('click', mostrarDetalleCarrito);

const btnReiniciarFiltros = document.getElementById('btn-reiniciar-filtros');
btnReiniciarFiltros.addEventListener('click', () => {
  mostrarProductos(); //reiniciar filtros
});

// Filtrar productos

function filtrarProductos(categoria) {
  const listaProductos = document.getElementById('productos');
  listaProductos.textContent = "";

  productos.filter(producto => producto.categoria === categoria).forEach(producto => {
    const divDeProductos = crearElemento('div');
    const caracteristicas = crearProductos(producto);

    caracteristicas.forEach(elemento => {
      divDeProductos.appendChild(elemento);
    });

    listaProductos.appendChild(divDeProductos);
  });
}

const filtros = document.querySelectorAll('#filtros li a');

filtros.forEach(filtro => {
  filtro.addEventListener('click', (event) => {
    const categoria = filtro.getAttribute('data-categoria');
    filtrarProductos(categoria);
  });
});

document.addEventListener('DOMContentLoaded', cargarCarrito);