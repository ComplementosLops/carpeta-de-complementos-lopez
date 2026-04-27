const FAVORITOS_KEY = 'favoritosProductos';
const CATALOGO_STORAGE_KEY = 'catalogoTemporal';
const PRODUCTO_STORAGE_KEY = 'productoSeleccionado';
const PRODUCTO_ID_ALIASES = {
  'mochila-pequeña-olympia': 'mochila-pequena-olympia'
};
const RUTA_IMAGEN_ALIASES = {
  'Productos/CINTURÓN DE PIEL HEBILLA PLATEADA COWBOY CUERO.jpg': 'Productos/CINTURON DE PIEL HEBILLA PLATEADA COWBOY CUERO.jpg',
  'Productos/BILLETERO PEQUEÑO OLYMPIA 1.jpg.webp': 'Productos/BILLETERO PEQUENO OLYMPIA 1.jpg.webp',
  'Productos/BILLETERO PEQUEÑO OLYMPIA 2.jpg.webp': 'Productos/BILLETERO PEQUENO OLYMPIA 2.jpg.webp',
  'Productos/BILLETERO PEQUEÑO OLYMPIA 3.jpg.webp': 'Productos/BILLETERO PEQUENO OLYMPIA 3.jpg.webp',
  'Productos/BILLETERO PEQUEÑO OLYMPIA 1.jpg.webp': 'Productos/BILLETERO PEQUENO OLYMPIA 1.jpg.webp',
  'Productos/BILLETERO PEQUEÑO OLYMPIA 2.jpg.webp': 'Productos/BILLETERO PEQUENO OLYMPIA 2.jpg.webp',
  'Productos/BILLETERO PEQUEÑO OLYMPIA 3.jpg.webp': 'Productos/BILLETERO PEQUENO OLYMPIA 3.jpg.webp',
  'Productos/MONEDERO PEQUEÑO RFID MUSE 1.jpg.webp': 'Productos/MONEDERO PEQUENO RFID MUSE 1.jpg.webp',
  'Productos/MONEDERO PEQUEÑO RFID MUSE 2.jpg.webp': 'Productos/MONEDERO PEQUENO RFID MUSE 2.jpg.webp',
  'Productos/MONEDERO PEQUEÑO RFID MUSE 3.jpg.webp': 'Productos/MONEDERO PEQUENO RFID MUSE 3.jpg.webp',
  'Productos/MOCHILA PEQUEÑA OLYMPIA 1.jpg.webp': 'Productos/MOCHILA PEQUENA OLYMPIA 1.jpg.webp',
  'Productos/MOCHILA PEQUEÑA OLYMPIA 2.jpg.webp': 'Productos/MOCHILA PEQUENA OLYMPIA 2.jpg.webp',
  'Productos/MOCHILA PEQUEÑA OLYMPIA 3.jpg.webp': 'Productos/MOCHILA PEQUENA OLYMPIA 3.jpg.webp'
};

const catalogoBase = [
  {
    id: 'mochila-muse',
    nombre: 'Mochila antirrobo Muse',
    imagen: 'Productos/Mochila antirrobo Muse.jpg.webp',
    imagenes: [
      'Productos/Mochila antirrobo Muse.jpg.webp',
      'Productos/Mochila antirrobo muse 2.jpg.webp'
    ],
    precioHtml: '68,95€',
    precioTexto: '68,95€',
    categoria: 'mochila',
    descripcion: 'Mochila antirrobo Muse de estilo urbano, con apertura protegida en la parte posterior y formato cómodo para llevar cartera, llaves, móvil y pequeños imprescindibles del día a día.',
    novedad: true
  },
  {
    id: 'mochila-amphora',
    nombre: 'Mochila antirrobo Amphora',
    imagen: 'Productos/Mochila antirobo Amphora.jpg.webp',
    imagenes: ['Productos/Mochila antirobo Amphora.jpg.webp'],
    precioHtml: '68,95€',
    precioTexto: '68,95€',
    categoria: 'mochila',
    descripcion: 'Mochila antirrobo Amphora con línea limpia y actual, pensada para moverse con tranquilidad. Su formato combina capacidad para uso diario con un acabado fácil de llevar.',
    novedad: false
  },
  {
    id: 'botella-vivid-violet',
    nombre: 'Botella VIVID VIOLET 750 ml',
    imagen: 'Productos/Botella VIVID VIOLET.jpg.webp',
    imagenes: [
      'Productos/Botella VIVID VIOLET.jpg.webp',
      'Productos/Botella VIVID VIOLET 750 ml 2.jpg.webp',
      'Productos/Botella VIVID VIOLET 750 ml 3.jpg.webp'
    ],
    precioHtml: '29,95€',
    precioTexto: '29,95€',
    categoria: 'botellas',
    descripcion: 'Botella reutilizable Vivid Violet de 750 ml, con acabado llamativo y capacidad equilibrada para trabajo, clases, paseo o gimnasio. Una opción ligera para hidratarse fuera de casa.',
    novedad: false
  },
  {
    id: 'botella-infantil-african-safari-260ml',
    nombre: 'BOTELLA INFANTIL - AFRICAN SAFARI 260 ml',
    imagen: 'Productos/BOTELLA INFANTIL - AFRICAN SAFARI 260ml 1.jpg.webp',
    imagenes: [
      'Productos/BOTELLA INFANTIL - AFRICAN SAFARI 260ml 1.jpg.webp',
      'Productos/BOTELLA INFANTIL - AFRICAN SAFARI 260ml 2.webp',
      'Productos/BOTELLA INFANTIL - AFRICAN SAFARI 260ml 3.jpg.webp'
    ],
    precioHtml: 'Consultar',
    precioTexto: 'Consultar',
    categoria: 'botellas',
    descripcion: 'Botella infantil African Safari de 260 ml, compacta y fácil de sujetar para peques. Su tamaño resulta práctico para mochila escolar, excursiones o salidas cortas.',
    novedad: false
  },
  {
    id: 'termo-pastel-pink-550ml',
    nombre: 'TERMO PASTEL PINK 550 ml',
    imagen: 'Productos/TERMO PASTEL PINK 550ml 1.png.webp',
    imagenes: [
      'Productos/TERMO PASTEL PINK 550ml 1.png.webp',
      'Productos/TERMO PASTEL PINK 550ml 2.png.webp',
      'Productos/TERMO PASTEL PINK 550ml 3.jpg.webp'
    ],
    precioHtml: 'Consultar',
    precioTexto: 'Consultar',
    categoria: 'botellas',
    descripcion: 'Termo Pastel Pink con acabado suave y formato pensado para llevar bebida caliente o fría durante la jornada. Disponible en capacidades compactas para adaptar el uso diario.',
    novedad: false,
    capacidadActiva: '550ml',
    variantesCapacidad: [
      {
        id: '330ml',
        etiqueta: '330 ml',
        nombre: 'TERMO PASTEL PINK 330 ml',
        imagen: 'Productos/TERMO PASTEL PINK 330ml 1.png.webp',
        imagenes: [
          'Productos/TERMO PASTEL PINK 330ml 1.png.webp',
          'Productos/TERMO PASTEL PINK 330ml 2.webp',
          'Productos/TERMO PASTEL PINK 330ml 3.jpg.webp'
        ],
        precioHtml: 'Consultar',
        precioTexto: 'Consultar',
        descripcion: 'Termo Pastel Pink de 330 ml, compacto y fácil de llevar en bolso o mochila pequeña sin ocupar demasiado espacio.'
      },
      {
        id: '550ml',
        etiqueta: '550 ml',
        nombre: 'TERMO PASTEL PINK 550 ml',
        imagen: 'Productos/TERMO PASTEL PINK 550ml 1.png.webp',
        imagenes: [
          'Productos/TERMO PASTEL PINK 550ml 1.png.webp',
          'Productos/TERMO PASTEL PINK 550ml 2.png.webp',
          'Productos/TERMO PASTEL PINK 550ml 3.jpg.webp'
        ],
        precioHtml: 'Consultar',
        precioTexto: 'Consultar',
        descripcion: 'Termo Pastel Pink de 550 ml, práctico para llevar más cantidad de bebida durante el día sin perder comodidad de transporte.'
      }
    ]
  },
  {
    id: 'botella-sport-brisbane-950ml',
    nombre: 'BOTELLAS DEPORTIVAS SPORT BRISBANE 950 ml',
    imagen: 'Productos/BOTELLAS DEPORTIVAS SPORT BRISBANE 950 ml 1.jpg.webp',
    imagenes: [
      'Productos/BOTELLAS DEPORTIVAS SPORT BRISBANE 950 ml 1.jpg.webp',
      'Productos/BOTELLAS DEPORTIVAS SPORT BRISBANE 950 ml 2.jpg.webp',
      'Productos/BOTELLAS DEPORTIVAS SPORT BRISBANE 950 ml 3.jpg.webp'
    ],
    precioHtml: '34,95€',
    precioTexto: '34,95€',
    categoria: 'botellas',
    descripcion: 'Botella deportiva Sport Brisbane de 950 ml, con gran capacidad para entrenamientos, rutas o jornadas largas. Pensada para tener agua a mano sin rellenar constantemente.',
    novedad: false,
    capacidadActiva: '950ml',
    variantesCapacidad: [
      {
        id: '500ml',
        etiqueta: '500 ml',
        nombre: 'BOTELLAS DEPORTIVAS SPORT BRISBANE 500 ml',
        imagen: 'Productos/BOTELLAS DEPORTIVAS SPORT BRISBANE 500 ml 1.jpg.webp',
        imagenes: [
          'Productos/BOTELLAS DEPORTIVAS SPORT BRISBANE 500 ml 1.jpg.webp',
          'Productos/BOTELLAS DEPORTIVAS SPORT BRISBANE 500 ml 2.jpg.webp',
          'Productos/BOTELLAS DEPORTIVAS SPORT BRISBANE 500 ml 3.webp'
        ],
        precioHtml: '28,95€',
        precioTexto: '28,95€',
        descripcion: 'Botella deportiva Sport Brisbane de 500 ml, compacta y práctica para llevar lo justo en paseos, clases o entrenamientos cortos.'
      },
      {
        id: '725ml',
        etiqueta: '725 ml',
        nombre: 'BOTELLAS DEPORTIVAS SPORT BRISBANE 725 ml',
        imagen: 'Productos/BOTELLAS DEPORTIVAS SPORT BRISBANE 725 ml 1.jpg.webp',
        imagenes: [
          'Productos/BOTELLAS DEPORTIVAS SPORT BRISBANE 725 ml 1.jpg.webp',
          'Productos/BOTELLAS DEPORTIVAS SPORT BRISBANE 725 ml 2.jpg.webp',
          'Productos/BOTELLAS DEPORTIVAS SPORT BRISBANE 725 ml 3.jpg.webp'
        ],
        precioHtml: '31,95€',
        precioTexto: '31,95€',
        descripcion: 'Botella deportiva Sport Brisbane de 725 ml, equilibrada para uso diario, oficina, gimnasio y actividad moderada.'
      },
      {
        id: '950ml',
        etiqueta: '950 ml',
        nombre: 'BOTELLAS DEPORTIVAS SPORT BRISBANE 950 ml',
        imagen: 'Productos/BOTELLAS DEPORTIVAS SPORT BRISBANE 950 ml 1.jpg.webp',
        imagenes: [
          'Productos/BOTELLAS DEPORTIVAS SPORT BRISBANE 950 ml 1.jpg.webp',
          'Productos/BOTELLAS DEPORTIVAS SPORT BRISBANE 950 ml 2.jpg.webp',
          'Productos/BOTELLAS DEPORTIVAS SPORT BRISBANE 950 ml 3.jpg.webp'
        ],
        precioHtml: '34,95€',
        precioTexto: '34,95€',
        descripcion: 'Botella deportiva Sport Brisbane de 950 ml, pensada para acompañar entrenamientos, rutas y rutinas diarias con mayor autonomía.'
      }
    ]
  },
  {
    id: 'botella-sport-los-angeles-950ml',
    nombre: 'BOTELLAS DEPORTIVAS SPORT LOS ANGELES 950 ml',
    imagen: 'Productos/BOTELLAS DEPORTIVAS SPORT LOS ANGELES 950ml 1.jpg.webp',
    imagenes: [
      'Productos/BOTELLAS DEPORTIVAS SPORT LOS ANGELES 950ml 1.jpg.webp',
      'Productos/BOTELLAS DEPORTIVAS SPORT LOS ANGELES 950ml 2.jpg.webp',
      'Productos/BOTELLAS DEPORTIVAS SPORT LOS ANGELES 950ml 3.jpg.webp'
    ],
    precioHtml: '34,95€',
    precioTexto: '34,95€',
    categoria: 'botellas',
    descripcion: 'Botella deportiva Sport Los Angeles de 950 ml, cómoda para llevar agua durante todo el día con una estética deportiva y fácil de combinar.',
    novedad: false,
    capacidadActiva: '950ml',
    variantesCapacidad: [
      {
        id: '500ml',
        etiqueta: '500 ml',
        nombre: 'BOTELLAS DEPORTIVAS SPORT LOS ANGELES 500 ml',
        imagen: 'Productos/BOTELLAS DEPORTIVAS SPORT LOS ANGELES 500ml 1.jpg.webp',
        imagenes: [
          'Productos/BOTELLAS DEPORTIVAS SPORT LOS ANGELES 500ml 1.jpg.webp',
          'Productos/BOTELLAS DEPORTIVAS SPORT LOS ANGELES 500ml 2.jpg.webp',
          'Productos/BOTELLAS DEPORTIVAS SPORT LOS ANGELES 500ml 3.webp'
        ],
        precioHtml: '28,95€',
        precioTexto: '28,95€',
        descripcion: 'Botella deportiva Sport Los Angeles de 500 ml, compacta y práctica para llevar lo justo cuando buscas una botella ligera.'
      },
      {
        id: '725ml',
        etiqueta: '725 ml',
        nombre: 'BOTELLAS DEPORTIVAS SPORT LOS ANGELES 725 ml',
        imagen: 'Productos/BOTELLAS DEPORTIVAS SPORT LOS ANGELES 750ml 1.jpg.webp',
        imagenes: [
          'Productos/BOTELLAS DEPORTIVAS SPORT LOS ANGELES 750ml 1.jpg.webp',
          'Productos/BOTELLAS DEPORTIVAS SPORT LOS ANGELES 725ml 2.jpg.webp',
          'Productos/BOTELLAS DEPORTIVAS SPORT LOS ANGELES 725ml 3.jpg.webp'
        ],
        precioHtml: '31,95€',
        precioTexto: '31,95€',
        descripcion: 'Botella deportiva Sport Los Angeles de 725 ml, equilibrada para uso diario, actividad física y desplazamientos.'
      },
      {
        id: '950ml',
        etiqueta: '950 ml',
        nombre: 'BOTELLAS DEPORTIVAS SPORT LOS ANGELES 950 ml',
        imagen: 'Productos/BOTELLAS DEPORTIVAS SPORT LOS ANGELES 950ml 1.jpg.webp',
        imagenes: [
          'Productos/BOTELLAS DEPORTIVAS SPORT LOS ANGELES 950ml 1.jpg.webp',
          'Productos/BOTELLAS DEPORTIVAS SPORT LOS ANGELES 950ml 2.jpg.webp',
          'Productos/BOTELLAS DEPORTIVAS SPORT LOS ANGELES 950ml 3.jpg.webp'
        ],
        precioHtml: '34,95€',
        precioTexto: '34,95€',
        descripcion: 'Botella deportiva Sport Los Angeles de 950 ml, cómoda para llevar agua con estilo durante todo el día y reducir recargas.'
      }
    ]
  },
  {
    id: 'botella-sport-tokyo-950ml',
    nombre: 'BOTELLAS DEPORTIVAS SPORT TOKYO 950 ml',
    imagen: 'Productos/BOTELLAS DEPORTIVAS SPORT TOKYO 950ml 1.jpg.webp',
    imagenes: [
      'Productos/BOTELLAS DEPORTIVAS SPORT TOKYO 950ml 1.jpg.webp',
      'Productos/BOTELLAS DEPORTIVAS SPORT TOKYO 950ml 2.jpg.webp',
      'Productos/BOTELLAS DEPORTIVAS SPORT TOKYO 950ml 3.jpg.webp'
    ],
    precioHtml: '34,95€',
    precioTexto: '34,95€',
    categoria: 'botellas',
    descripcion: 'Botella deportiva Sport Tokyo de 950 ml, práctica para entrenar, pasear o llevar al trabajo cuando necesitas buena capacidad y uso sencillo.',
    novedad: false,
    capacidadActiva: '950ml',
    variantesCapacidad: [
      {
        id: '500ml',
        etiqueta: '500 ml',
        nombre: 'BOTELLAS DEPORTIVAS SPORT TOKYO 500 ml',
        imagen: 'Productos/BOTELLAS DEPORTIVAS SPORT TOKYO 500ml 1.jpg.webp',
        imagenes: [
          'Productos/BOTELLAS DEPORTIVAS SPORT TOKYO 500ml 1.jpg.webp',
          'Productos/BOTELLAS DEPORTIVAS SPORT TOKYO 500ml 2.jpg.webp',
          'Productos/BOTELLAS DEPORTIVAS SPORT TOKYO 500ml 3.webp'
        ],
        precioHtml: '28,95€',
        precioTexto: '28,95€',
        descripcion: 'Botella deportiva Sport Tokyo de 500 ml, compacta y práctica para llevar lo justo en planes cortos o mochila ligera.'
      },
      {
        id: '725ml',
        etiqueta: '725 ml',
        nombre: 'BOTELLAS DEPORTIVAS SPORT TOKYO 725 ml',
        imagen: 'Productos/BOTELLAS DEPORTIVAS SPORT TOKYO 725ml 1.jpg.webp',
        imagenes: [
          'Productos/BOTELLAS DEPORTIVAS SPORT TOKYO 725ml 1.jpg.webp',
          'Productos/BOTELLAS DEPORTIVAS SPORT TOKYO 725ml 2.jpg.webp',
          'Productos/BOTELLAS DEPORTIVAS SPORT TOKYO 725ml 3.jpg.webp'
        ],
        precioHtml: '31,95€',
        precioTexto: '31,95€',
        descripcion: 'Botella deportiva Sport Tokyo de 725 ml, equilibrada para uso diario, deporte y desplazamientos.'
      },
      {
        id: '950ml',
        etiqueta: '950 ml',
        nombre: 'BOTELLAS DEPORTIVAS SPORT TOKYO 950 ml',
        imagen: 'Productos/BOTELLAS DEPORTIVAS SPORT TOKYO 950ml 1.jpg.webp',
        imagenes: [
          'Productos/BOTELLAS DEPORTIVAS SPORT TOKYO 950ml 1.jpg.webp',
          'Productos/BOTELLAS DEPORTIVAS SPORT TOKYO 950ml 2.jpg.webp',
          'Productos/BOTELLAS DEPORTIVAS SPORT TOKYO 950ml 3.jpg.webp'
        ],
        precioHtml: '34,95€',
        precioTexto: '34,95€',
        descripcion: 'Botella deportiva Sport Tokyo de 950 ml, práctica para entrenar, pasear o llevar al trabajo con más autonomía.'
      }
    ]
  },
  {
    id: 'botella-sport-paris-950ml',
    nombre: 'BOTELLAS DEPORTIVAS SPORT PARIS 950 ml',
    imagen: 'Productos/BOTELLAS DEPORTIVAS SPORT PARIS 950ml 1.jpg.webp',
    imagenes: [
      'Productos/BOTELLAS DEPORTIVAS SPORT PARIS 950ml 1.jpg.webp',
      'Productos/BOTELLAS DEPORTIVAS SPORT PARIS 950ml 2.jpg.webp',
      'Productos/BOTELLAS DEPORTIVAS SPORT PARIS 950ml 3.jpg.webp'
    ],
    precioHtml: '34,95€',
    precioTexto: '34,95€',
    categoria: 'botellas',
    descripcion: 'Botella deportiva Sport Paris de 950 ml, resistente y fácil de llevar a diario. Una opción amplia para entrenamiento, trabajo o salidas largas.',
    novedad: false,
    capacidadActiva: '950ml',
    variantesCapacidad: [
      {
        id: '500ml',
        etiqueta: '500 ml',
        nombre: 'BOTELLAS DEPORTIVAS SPORT PARIS 500 ml',
        imagen: 'Productos/BOTELLAS DEPORTIVAS SPORT PARIS 500ml 1.jpg.webp',
        imagenes: [
          'Productos/BOTELLAS DEPORTIVAS SPORT PARIS 500ml 1.jpg.webp',
          'Productos/BOTELLAS DEPORTIVAS SPORT PARIS 500ml 2.jpg.webp',
          'Productos/BOTELLAS DEPORTIVAS SPORT PARIS 500ml 3.jpg.webp'
        ],
        precioHtml: '28,95€',
        precioTexto: '28,95€',
        descripcion: 'Botella deportiva Sport Paris de 500 ml, compacta y práctica para llevar lo justo sin cargar peso de más.'
      },
      {
        id: '725ml',
        etiqueta: '725 ml',
        nombre: 'BOTELLAS DEPORTIVAS SPORT PARIS 725 ml',
        imagen: 'Productos/BOTELLAS DEPORTIVAS SPORT PARIS 750ml 1.jpg.webp',
        imagenes: [
          'Productos/BOTELLAS DEPORTIVAS SPORT PARIS 750ml 1.jpg.webp',
          'Productos/BOTELLAS DEPORTIVAS SPORT PARIS 750ml 2.jpg.webp',
          'Productos/BOTELLAS DEPORTIVAS SPORT PARIS 750ml 3.jpg.webp'
        ],
        precioHtml: '31,95€',
        precioTexto: '31,95€',
        descripcion: 'Botella deportiva Sport Paris de 725 ml, equilibrada para uso diario, actividad física y salidas de media jornada.'
      },
      {
        id: '950ml',
        etiqueta: '950 ml',
        nombre: 'BOTELLAS DEPORTIVAS SPORT PARIS 950 ml',
        imagen: 'Productos/BOTELLAS DEPORTIVAS SPORT PARIS 950ml 1.jpg.webp',
        imagenes: [
          'Productos/BOTELLAS DEPORTIVAS SPORT PARIS 950ml 1.jpg.webp',
          'Productos/BOTELLAS DEPORTIVAS SPORT PARIS 950ml 2.jpg.webp',
          'Productos/BOTELLAS DEPORTIVAS SPORT PARIS 950ml 3.jpg.webp'
        ],
        precioHtml: '34,95€',
        precioTexto: '34,95€',
        descripcion: 'Botella deportiva Sport Paris de 950 ml, resistente y fácil de llevar a diario cuando necesitas mayor capacidad.'
      }
    ]
  },
  {
    id: 'cinturon-cowboy',
    nombre: 'Cinturón de piel hebilla plateada cowboy cuero',
    imagen: 'Productos/CINTURON DE PIEL HEBILLA PLATEADA COWBOY CUERO.jpg',
    imagenes: ['Productos/CINTURON DE PIEL HEBILLA PLATEADA COWBOY CUERO.jpg'],
    precioHtml: '<span class="precio-antiguo">45,00€</span><span class="precio-nuevo">36,29€</span>',
    precioTexto: '45,00€ 36,29€',
    precioAntiguo: '45,00€',
    precioNuevo: '36,29€',
    categoria: 'otros',
    descripcion: 'Cinturón de piel en color cuero con hebilla plateada estilo cowboy. Una pieza versátil para rematar vaqueros, vestidos o conjuntos informales con presencia.',
    novedad: false
  },
  {
    id: 'bolso-eikon',
    nombre: 'BOLSO DE ASA CORTA EIKON',
    imagen: 'Productos/BOLSO DE ASA CORTA EIKON 1.jpg.webp',
    imagenes: [
      'Productos/BOLSO DE ASA CORTA EIKON 1.jpg.webp',
      'Productos/BOLSO DE ASA CORTA EIKON 2.jpg.webp'
    ],
    precioHtml: '---',
    precioTexto: '---',
    categoria: 'bolsos',
    descripcion: 'Bolso de asa corta Eikon con silueta elegante y formato de mano. Ideal para looks diarios cuidados o para ocasiones en las que quieres llevar lo necesario con estilo.',
    novedad: false
  },
  {
    id: 'bolso-hobo',
    nombre: 'BOLSO HOBO AMPHORA',
    imagen: 'Productos/BOLSO HOBO AMPHORA 1.jpg.webp',
    imagenes: [
      'Productos/BOLSO HOBO AMPHORA 1.jpg.webp',
      'Productos/BOLSO HOBO AMPHORA 2.jpg.webp'
    ],
    precioHtml: '58,95€',
    precioTexto: '58,95€',
    categoria: 'bolsos',
    descripcion: 'Bolso hobo Amphora de estilo actual, con cuerpo amplio y caída suave. Práctico para uso diario cuando necesitas espacio sin renunciar a una línea elegante.',
    novedad: false
  },
  {
    id: 'cartera-olympia',
    nombre: 'CARTERA PEQUEÑA OLYMPIA',
    imagen: 'Productos/BILLETERO PEQUENO OLYMPIA 1.jpg.webp',
    imagenes: [
      'Productos/BILLETERO PEQUENO OLYMPIA 1.jpg.webp',
      'Productos/BILLETERO PEQUENO OLYMPIA 2.jpg.webp',
      'Productos/BILLETERO PEQUENO OLYMPIA 3.jpg.webp'
    ],
    precioHtml: '22,95€',
    precioTexto: '22,95€',
    categoria: 'carteras',
    descripcion: 'Cartera pequeña Olympia, compacta y práctica para organizar tarjetas, billetes y pequeños documentos. Pensada para bolsos pequeños o para llevar solo lo esencial.',
    novedad: false
  },
  {
    id: 'mochila-frontal-muse',
    nombre: 'MOCHILA CON BOLSILLO FRONTAL MUSE',
    imagen: 'Productos/MOCHILA CON BOLSILLO FRONTAL MUSE 1.jpg.webp',
    imagenes: [
      'Productos/MOCHILA CON BOLSILLO FRONTAL MUSE 1.jpg.webp',
      'Productos/MOCHILA CON BOLSILLO FRONTAL MUSE 2.jpg.webp',
      'Productos/MOCHILA CON BOLSILLO FRONTAL MUSE 3.jpg.webp'
    ],
    precioHtml: '68,95€',
    precioTexto: '68,95€',
    categoria: 'mochila',
    descripcion: 'Mochila Muse con bolsillo frontal, formato versátil y acceso cómodo para objetos de uso frecuente. Una opción práctica para recados, trabajo y paseos.',
    novedad: false
  },
  {
    id: 'bolso-bandolera-auralis',
    nombre: 'BOLSO BANDOLERA AURALIS',
    imagen: 'Productos/BOLSO BANDOLERA AURALIS 1.jpg.webp',
    imagenes: [
      'Productos/BOLSO BANDOLERA AURALIS 1.jpg.webp',
      'Productos/BOLSO BANDOLERA AURALIS 2.jpg.webp',
      'Productos/BOLSO BANDOLERA AURALIS 3.jpg.webp'
    ],
    precioHtml: '57,95€',
    precioTexto: '57,95€',
    categoria: 'bolsos',
    descripcion: 'Bolso bandolera Auralis ligero y funcional, pensado para llevar lo imprescindible con manos libres. Su formato resulta cómodo para compras, viajes cortos y uso diario.',
    novedad: false
  },
  {
    id: 'mochila-cuadrada-muse',
    nombre: 'MOCHILA CUADRADA MUSE',
    imagen: 'Productos/MOCHILA CUADRADA MUSE 1.jpg.webp',
    imagenes: [
      'Productos/MOCHILA CUADRADA MUSE 1.jpg.webp',
      'Productos/MOCHILA CUADRADA MUSE 2.jpg.webp',
      'Productos/MOCHILA CUADRADA MUSE 3.jpg.webp'
    ],
    precioHtml: '65,95€',
    precioTexto: '65,95€',
    categoria: 'mochila',
    descripcion: 'Mochila cuadrada Muse con silueta estructurada, acabado moderno y tamaño fácil de combinar. Aporta orden visual y capacidad para lo imprescindible.',
    novedad: false
  },
  {
    id: 'monedero-rfid-muse',
    nombre: 'MONEDERO PEQUEÑO RFID MUSE',
    imagen: 'Productos/MONEDERO PEQUENO RFID MUSE 1.jpg.webp',
    imagenes: [
      'Productos/MONEDERO PEQUENO RFID MUSE 1.jpg.webp',
      'Productos/MONEDERO PEQUENO RFID MUSE 2.jpg.webp',
      'Productos/MONEDERO PEQUENO RFID MUSE 3.jpg.webp'
    ],
    precioHtml: '22,95€',
    precioTexto: '22,95€',
    categoria: 'carteras',
    descripcion: 'Monedero pequeño RFID Muse con formato compacto y protección para tarjetas. Práctico para monedas, tarjetas principales y pequeños objetos del día a día.',
    novedad: false
  },
  {
    id: 'mochila-pequena-olympia',
    nombre: 'MOCHILA PEQUEÑA OLYMPIA',
    imagen: 'Productos/MOCHILA PEQUENA OLYMPIA 1.jpg.webp',
    imagenes: [
      'Productos/MOCHILA PEQUENA OLYMPIA 1.jpg.webp',
      'Productos/MOCHILA PEQUENA OLYMPIA 2.jpg.webp',
      'Productos/MOCHILA PEQUENA OLYMPIA 3.jpg.webp'
    ],
    precioHtml: '59,95€',
    precioTexto: '59,95€',
    categoria: 'mochila',
    descripcion: 'Mochila pequeña Olympia, práctica y ligera para llevar lo imprescindible con estilo. Encaja bien en planes diarios donde un bolso se queda corto.',
    novedad: false
  },
  {
    id: 'mochila-muse-clasica',
    nombre: 'MOCHILA MUSE',
    imagen: 'Productos/mochila muse 1.jpg.webp',
    imagenes: [
      'Productos/mochila muse 1.jpg.webp',
      'Productos/mochila muse 2.jpg.webp',
      'Productos/mochila muse 3.jpg.webp'
    ],
    precioHtml: '64,95€',
    precioTexto: '64,95€',
    categoria: 'mochila',
    descripcion: 'Mochila Muse clásica, práctica y versátil para acompañar el día a día. Su diseño combina capacidad, comodidad y un acabado fácil de integrar en distintos looks.',
    novedad: false
  },
  {
    id: 'mochila-auralis',
    nombre: 'MOCHILA AURALIS',
    imagen: 'Productos/MOCHILA AURALIS 1.jpg.webp',
    imagenes: [
      'Productos/MOCHILA AURALIS 1.jpg.webp',
      'Productos/MOCHILA AURALIS 2.jpg.webp',
      'Productos/MOCHILA AURALIS 3.jpg.webp'
    ],
    precioHtml: '68,95€',
    precioTexto: '68,95€',
    categoria: 'mochila',
    descripcion: 'Mochila Auralis cómoda y práctica para el día a día, con formato urbano y espacio suficiente para llevar objetos personales de forma ordenada.',
    novedad: false
  },
  {
    id: 'rinonera-auralis',
    nombre: 'RIÑONERA AURALIS',
    imagen: 'Productos/RIÑONERA AURALIS 1.jpg.webp',
    imagenes: [
      'Productos/RIÑONERA AURALIS 1.jpg.webp',
      'Productos/RIÑONERA AURALIS 2.jpg.webp',
      'Productos/RIÑONERA AURALIS 3.jpg.webp'
    ],
    precioHtml: '44,95€',
    precioTexto: '44,95€',
    categoria: 'bolsos',
    descripcion: 'Riñonera Auralis ligera y funcional para llevar lo imprescindible cerca del cuerpo. Una opción cómoda para paseos, viajes o días de mucho movimiento.',
    novedad: false
  },
  {
    id: 'billetero-blando-olympia',
    nombre: 'BILLETERO BLANDO OLYMPIA',
    imagen: 'Productos/BILLETERO BLANDO OLYMPIA 1.jpg.webp',
    imagenes: [
      'Productos/BILLETERO BLANDO OLYMPIA 1.jpg.webp',
      'Productos/BILLETERO BLANDO OLYMPIA 2.jpg.webp',
      'Productos/BILLETERO BLANDO OLYMPIA 3.jpg.webp'
    ],
    precioHtml: '35,95€',
    precioTexto: '35,95€',
    categoria: 'carteras',
    descripcion: 'Billetero blando Olympia con formato cómodo para organizar tarjetas, billetes y documentación pequeña. Su tacto flexible facilita llevarlo en bolso o mochila.',
    novedad: false
  },
  {
    id: 'bandolera-estampada-sophia',
    nombre: 'BANDOLERA ESTAMPADA SOPHIA',
    imagen: 'Productos/BANDOLERA ESTAMPADA SOPHIA 1.jpg.webp',
    imagenes: [
      'Productos/BANDOLERA ESTAMPADA SOPHIA 1.jpg.webp',
      'Productos/BANDOLERA ESTAMPADA SOPHIA 2.jpg.webp',
      'Productos/BANDOLERA ESTAMPADA SOPHIA 3.jpg.webp'
    ],
    precioHtml: '55,95€',
    precioTexto: '55,95€',
    categoria: 'bolsos',
    descripcion: 'Bandolera estampada Sophia con diseño actual y formato práctico para el día a día. Aporta un punto diferente al look sin perder comodidad.',
    novedad: false
  },
  {
    id: 'billetero-rfid-amphora',
    nombre: 'BILLETERO RFID AMPHORA',
    imagen: 'Productos/BILLETERO RFID AMPHORA 1.jpg.webp',
    imagenes: [
      'Productos/BILLETERO RFID AMPHORA 1.jpg.webp',
      'Productos/BILLETERO RFID AMPHORA 2.jpg.webp',
      'Productos/BILLETERO RFID AMPHORA 3.jpg.webp'
    ],
    precioHtml: '30,95€',
    precioTexto: '30,95€',
    categoria: 'carteras',
    descripcion: 'Billetero RFID Amphora compacto y práctico, con protección para tarjetas y organización interior para llevar pagos y documentación con más tranquilidad.',
    novedad: false
  },
  {
    id: 'bandolera-estampada-amphora',
    nombre: 'BANDOLERA ESTAMPADA AMPHORA',
    imagen: 'Productos/BANDOLERA ESTAMPADA AMPHORA 1.jpg.webp',
    imagenes: [
      'Productos/BANDOLERA ESTAMPADA AMPHORA 1.jpg.webp',
      'Productos/BANDOLERA ESTAMPADA AMPHORA 2.jpg.webp',
      'Productos/BANDOLERA ESTAMPADA AMPHORA 3.jpg.webp'
    ],
    precioHtml: '60,95€',
    precioTexto: '60,95€',
    categoria: 'bolsos',
    descripcion: 'Bandolera estampada Amphora con espacio cómodo y estilo fácil de combinar. Una pieza funcional para llevar móvil, cartera y pequeños accesorios a mano.',
    novedad: false
  },
  {
    id: 'mochila-mediana-auralis',
    nombre: 'MOCHILA MEDIANA AURALIS',
    imagen: 'Productos/MOCHILA MEDIANA AURALIS 1.jpg.webp',
    imagenes: [
      'Productos/MOCHILA MEDIANA AURALIS 1.jpg.webp',
      'Productos/MOCHILA MEDIANA AURALIS 2.jpg.webp',
      'Productos/MOCHILA MEDIANA AURALIS 3.jpg.webp'
    ],
    precioHtml: '65,95€',
    precioTexto: '65,95€',
    categoria: 'mochila',
    descripcion: 'Mochila mediana Auralis cómoda y práctica para acompañar el día a día.',
    novedad: false
  },
  {
    id: 'bolso-playa-muse',
    nombre: 'BOLSO DE PLAYA MUSE',
    imagen: 'Productos/BOLSO-DE-PLAYA-MUSE-PRECIO-DE-OFERTA-1.jpg.webp',
    imagenes: [
      'Productos/BOLSO-DE-PLAYA-MUSE-PRECIO-DE-OFERTA-1.jpg.webp',
      'Productos/BOLSO-DE-PLAYA-MUSE-PRECIO-DE-OFERTA-2.jpg.webp',
      'Productos/BOLSO-DE-PLAYA-MUSE-PRECIO-DE-OFERTA-3.jpg.webp'
    ],
    precioHtml: '36,95€',
    precioTexto: '36,95€',
    categoria: 'bolsos',
    descripcion: 'Bolso de playa Muse amplio y ligero para llevar lo necesario con comodidad.',
    novedad: false
  },
  {
    id: 'bolso-playa-grande-smart',
    nombre: 'BOLSO DE PLAYA GRANDE SMART',
    imagen: 'Productos/BOLSO DE PLAYA GRANDE SMART 1.jpg.webp',
    imagenes: [
      'Productos/BOLSO DE PLAYA GRANDE SMART 1.jpg.webp',
      'Productos/BOLSO DE PLAYA GRANDE SMART 2.jpg.webp',
      'Productos/BOLSO DE PLAYA GRANDE SMART 3.jpg.webp'
    ],
    precioHtml: '39,95€',
    precioTexto: '39,95€',
    categoria: 'bolsos',
    descripcion: 'Bolso de playa grande Smart con espacio amplio y formato práctico.',
    novedad: false
  },
  {
    id: 'monedero-grande-flexible-rfid-muse',
    nombre: 'MONEDERO GRANDE FLEXIBLE RFID MUSE',
    imagen: 'Productos/MONEDERO GRANDE FLEXIBLE RFID MUSE 1.jpg',
    imagenes: [
      'Productos/MONEDERO GRANDE FLEXIBLE RFID MUSE 1.jpg',
      'Productos/MONEDERO GRANDE FLEXIBLE RFID MUSE 2.jpg.webp',
      'Productos/MONEDERO GRANDE FLEXIBLE RFID MUSE 3.jpg.webp'
    ],
    precioHtml: '35,95€',
    precioTexto: '35,95€',
    categoria: 'carteras',
    descripcion: 'Monedero grande flexible RFID Muse con espacio cómodo para organizar lo esencial.',
    novedad: false
  },
  {
    id: 'neceser-sophia',
    nombre: 'NECESER SOPHIA',
    imagen: 'Productos/NECESER SOPHIA 1.jpg',
    imagenes: [
      'Productos/NECESER SOPHIA 1.jpg',
      'Productos/NECESER SOPHIA 2.jpg',
      'Productos/NECESER SOPHIA 3.jpg.webp'
    ],
    precioHtml: '12,95€',
    precioTexto: '12,95€',
    categoria: 'bolsos',
    descripcion: 'Neceser Sophia compacto y práctico para pequeños imprescindibles.',
    novedad: false
  },
  {
    id: 'paraguas-manual-alma',
    nombre: 'PARAGUAS MANUAL ALMA',
    imagen: 'Productos/PARAGUAS-MANUAL-ALMA-1.jpg.webp',
    imagenes: [
      'Productos/PARAGUAS-MANUAL-ALMA-1.jpg.webp',
      'Productos/PARAGUAS-MANUAL-ALMA-2.jpg.webp',
      'Productos/PARAGUAS-MANUAL-ALMA-3.jpg.webp'
    ],
    precioHtml: '21,95€',
    precioTexto: '21,95€',
    categoria: 'otros',
    descripcion: 'Paraguas manual Alma ligero y fácil de llevar.',
    novedad: false
  },
  {
    id: 'taza-muse',
    nombre: 'TAZA MUSE',
    imagen: 'Productos/TAZA MUSE 1.jpg',
    imagenes: [
      'Productos/TAZA MUSE 1.jpg',
      'Productos/TAZA MUSE 2.jpg.webp',
      'Productos/TAZA MUSE 3.jpg.webp'
    ],
    precioHtml: '10,95€',
    precioTexto: '10,95€',
    categoria: 'tazas',
    descripcion: 'Taza Muse con diseño cuidado para uso diario o regalo.',
    novedad: false
  },
  {
    id: 'taza-amphora',
    nombre: 'TAZA AMPHORA',
    imagen: 'Productos/TAZA AMPHORA 1.jpg',
    imagenes: [
      'Productos/TAZA AMPHORA 1.jpg',
      'Productos/TAZA AMPHORA 2.jpg.webp',
      'Productos/TAZA AMPHORA 3.jpg.webp'
    ],
    precioHtml: '10,95€',
    precioTexto: '10,95€',
    categoria: 'tazas',
    descripcion: 'Taza Amphora con diseño cuidado para uso diario o regalo.',
    novedad: false
  },
  {
    id: 'taza-eikon',
    nombre: 'TAZA EIKON',
    imagen: 'Productos/TAZA EIKON 1.jpg',
    imagenes: [
      'Productos/TAZA EIKON 1.jpg',
      'Productos/TAZA EIKON 2.jpg.webp',
      'Productos/TAZA EIKON 3.jpg.webp'
    ],
    precioHtml: '10,95€',
    precioTexto: '10,95€',
    categoria: 'tazas',
    descripcion: 'Taza Eikon con diseño cuidado para uso diario o regalo.',
    novedad: false
  },
  {
    id: 'cartera-billetera-piel-grabado-costuras-negro',
    nombre: 'CARTERA BILLETERA PIEL CON GRABADO Y COSTURAS EN CONTRASTE NEGRO',
    imagen: 'Productos/CARTERA BILLETERA PIEL CON GRABADO Y COSTURAS EN CONTRASTE NEGRO 1.jpg',
    imagenes: [
      'Productos/CARTERA BILLETERA PIEL CON GRABADO Y COSTURAS EN CONTRASTE NEGRO 1.jpg',
      'Productos/CARTERA BILLETERA PIEL CON GRABADO Y COSTURAS EN CONTRASTE NEGRO 2.jpg',
      'Productos/CARTERA BILLETERA PIEL CON GRABADO Y COSTURAS EN CONTRASTE NEGRO 3.jpg'
    ],
    precioHtml: '33,99€',
    precioTexto: '33,99€',
    categoria: 'carteras',
    descripcion: 'Cartera billetera de piel negra con grabado y costuras en contraste.',
    novedad: false
  },
  {
    id: 'cartera-pequena-billetera-monedero-bicolor',
    nombre: 'CARTERA PEQUEÑA CON BILLETERA MONEDERO BICOLOR',
    imagen: 'Productos/CARTERA PEQUEÑA CON BILLETERA MONEDERO BICOLOR 1.jpg',
    imagenes: [
      'Productos/CARTERA PEQUEÑA CON BILLETERA MONEDERO BICOLOR 1.jpg',
      'Productos/CARTERA PEQUEÑA CON BILLETERA MONEDERO BICOLOR 2.jpg',
      'Productos/CARTERA PEQUEÑA CON BILLETERA MONEDERO BICOLOR 3.jpg'
    ],
    precioHtml: '27,99€',
    precioTexto: '27,99€',
    categoria: 'carteras',
    descripcion: 'Cartera pequeña bicolor con billetera y monedero integrados.',
    novedad: false
  },
  {
    id: 'cartera-billetera-cierre-boton-llavero-piel-negra',
    nombre: 'CARTERA BILLETERA CON CIERRE BOTÓN Y LLAVERO PIEL NEGRA',
    imagen: 'Productos/CARTERA BILLETERA CON CIERRE BOTÓN Y LLAVERO PIEL NEGRA  1.jpg',
    imagenes: [
      'Productos/CARTERA BILLETERA CON CIERRE BOTÓN Y LLAVERO PIEL NEGRA  1.jpg',
      'Productos/CARTERA BILLETERA CON CIERRE BOTÓN Y LLAVERO PIEL NEGRA  2.jpg',
      'Productos/CARTERA BILLETERA CON CIERRE BOTÓN Y LLAVERO PIEL NEGRA  3.jpg'
    ],
    precioHtml: '26,98€',
    precioTexto: '26,98€',
    categoria: 'carteras',
    descripcion: 'Cartera billetera de piel negra con cierre de botón y llavero.',
    novedad: false
  },
  {
    id: 'mochila-escolar-freedom',
    nombre: 'MOCHILA ESCOLAR FREEDOM',
    imagen: 'Productos/MOCHILA ESCOLAR FREEDOM 1.jpg',
    imagenes: [
      'Productos/MOCHILA ESCOLAR FREEDOM 1.jpg',
      'Productos/MOCHILA ESCOLAR FREEDOM 2.jpg',
      'Productos/MOCHILA ESCOLAR FREEDOM 3.jpg'
    ],
    precioHtml: '44,99€',
    precioTexto: '44,99€',
    categoria: 'mochila',
    descripcion: 'Mochila escolar Freedom con capacidad práctica para clase y actividades.',
    novedad: false
  },
  {
    id: 'mochila-infantil-lightning-sky',
    nombre: 'MOCHILA INFANTIL LIGHTNING SKY',
    imagen: 'Productos/MOCHILA INFANTIL LIGHTNING SKY 1.jpg',
    imagenes: [
      'Productos/MOCHILA INFANTIL LIGHTNING SKY 1.jpg',
      'Productos/MOCHILA INFANTIL LIGHTNING SKY 2.jpg',
      'Productos/MOCHILA INFANTIL LIGHTNING SKY 3.jpg'
    ],
    precioHtml: '28,99€',
    precioTexto: '28,99€',
    categoria: 'mochila',
    descripcion: 'Mochila infantil Lightning Sky ligera y cómoda para el día a día.',
    novedad: false
  },
  {
    id: 'mochila-infantil-start-sky',
    nombre: 'MOCHILA INFANTIL START SKY',
    imagen: 'Productos/MOCHILA INFANTIL START SKY 1.jpg',
    imagenes: [
      'Productos/MOCHILA INFANTIL START SKY 1.jpg',
      'Productos/MOCHILA INFANTIL START SKY 2.jpg',
      'Productos/MOCHILA INFANTIL START SKY 3.jpg'
    ],
    precioHtml: '28,99€',
    precioTexto: '28,99€',
    categoria: 'mochila',
    descripcion: 'Mochila infantil Start Sky ligera y cómoda para el día a día.',
    novedad: false
  },
  {
    id: 'mochila-infantil-sun-sky',
    nombre: 'MOCHILA INFANTIL SUN SKY',
    imagen: 'Productos/MOCHILA INFANTIL SUN SKY 1.jpg',
    imagenes: [
      'Productos/MOCHILA INFANTIL SUN SKY 1.jpg',
      'Productos/MOCHILA INFANTIL SUN SKY 2.jpg',
      'Productos/MOCHILA INFANTIL SUN SKY 3.jpg'
    ],
    precioHtml: '28,99€',
    precioTexto: '28,99€',
    categoria: 'mochila',
    descripcion: 'Mochila infantil Sun Sky ligera y cómoda para el día a día.',
    novedad: false
  },
  {
    id: 'mochila-infantil-cloud-sky',
    nombre: 'MOCHILA INFANTIL CLOUD SKY',
    imagen: 'Productos/MOCHILA INFANTIL CLOUD SKY 1.jpg',
    imagenes: [
      'Productos/MOCHILA INFANTIL CLOUD SKY 1.jpg',
      'Productos/MOCHILA INFANTIL CLOUD SKY 2.jpg',
      'Productos/MOCHILA INFANTIL CLOUD SKY 3.jpg'
    ],
    precioHtml: '28,99€',
    precioTexto: '28,99€',
    categoria: 'mochila',
    descripcion: 'Mochila infantil Cloud Sky ligera y cómoda para el día a día.',
    novedad: false
  }
];

function limpiarTexto(texto) {
  return (texto || '').replace(/\s+/g, ' ').trim();
}

function escaparHtml(valor = '') {
  return String(valor)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function quitarHtml(valor = '') {
  return limpiarTexto(String(valor).replace(/<[^>]*>/g, ' '));
}

function leerStorageJson(storage, clave, fallback) {
  try {
    const guardado = storage.getItem(clave);
    return guardado ? JSON.parse(guardado) : fallback;
  } catch {
    return fallback;
  }
}

function escribirStorageJson(storage, clave, valor) {
  try {
    storage.setItem(clave, JSON.stringify(valor));
    return true;
  } catch {
    return false;
  }
}

function normalizarComparacion(texto) {
  return limpiarTexto(texto)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function normalizarCategoria(categoria = '') {
  const base = normalizarComparacion(categoria);
  const equivalencias = {
    bolso: 'bolsos',
    mochilas: 'mochila',
    cartera: 'carteras',
    cinto: 'cintos',
    botella: 'botellas',
    taza: 'tazas'
  };

  return equivalencias[base] || base;
}

function normalizarIdProducto(id = '') {
  return PRODUCTO_ID_ALIASES[id] || id;
}

function crearListaImagenes(...imagenes) {
  return [...new Set(imagenes.filter(Boolean))];
}

function extraerPreciosDesdeHtml(precioHtml = '') {
  const coincideAntiguo = precioHtml.match(/precio-antiguo">([^<]+)/);
  const coincideNuevo = precioHtml.match(/precio-nuevo">([^<]+)/);

  return {
    precioAntiguo: coincideAntiguo ? coincideAntiguo[1] : '',
    precioNuevo: coincideNuevo ? coincideNuevo[1] : ''
  };
}

function sanitizarPrecioHtml(precioHtml = '') {
  const texto = String(precioHtml || '');
  const { precioAntiguo, precioNuevo } = extraerPreciosDesdeHtml(texto);

  if (precioAntiguo && precioNuevo) {
    return `<span class="precio-antiguo">${escaparHtml(precioAntiguo)}</span><span class="precio-nuevo">${escaparHtml(precioNuevo)}</span>`;
  }

  return escaparHtml(quitarHtml(texto));
}

function esPrecioAgotado(precio = '') {
  return limpiarTexto(precio) === '---';
}

function extraerValorNumerico(precio = '') {
  const limpio = limpiarTexto(precio)
    .replace(/\./g, '')
    .replace(',', '.')
    .match(/\d+(?:\.\d+)?/);

  return limpio ? Number.parseFloat(limpio[0]) : 0;
}

function formatearPrecioTotal(valor = 0) {
  return `${valor.toFixed(2).replace('.', ',')}€`;
}

function tieneOferta(producto) {
  return Boolean(producto.precioAntiguo && producto.precioNuevo);
}

function estaAgotado(producto) {
  return Boolean(producto.agotado) || esPrecioAgotado(producto.precioTexto) || esPrecioAgotado(producto.precioHtml);
}

function fallbackProductoBase(producto) {
  return catalogoBase.find(item => item.id === producto.id || item.nombre === producto.nombre) || {};
}

function esDescripcionPlaceholder(texto = '') {
  return normalizarComparacion(texto) === 'descripcion breve del producto.';
}

function elegirDescripcionProducto(descripcionProducto = '', descripcionFallback = '') {
  const descripcion = esDescripcionPlaceholder(descripcionProducto) ? '' : limpiarTexto(descripcionProducto);
  const fallback = limpiarTexto(descripcionFallback);

  if (fallback && (!descripcion || (descripcion.length < 90 && fallback.length > descripcion.length))) {
    return fallback;
  }

  return descripcion;
}

function resolverRutaImagen(ruta, fallback = {}) {
  if (!ruta) return '';
  const rutaNormalizada = RUTA_IMAGEN_ALIASES[ruta] || ruta;
  if (rutaNormalizada.includes('/')) return rutaNormalizada;

  const candidatas = [fallback.imagen, ...(fallback.imagenes || [])].filter(Boolean);
  const encontrada = candidatas.find(item => item.endsWith(`/${rutaNormalizada}`) || item === rutaNormalizada);
  return encontrada || rutaNormalizada;
}

function normalizarVarianteCapacidad(variante = {}) {
  const precioHtmlOriginal = variante.precioHtml || variante.precio || variante.precioTexto || '';
  const precioHtml = sanitizarPrecioHtml(precioHtmlOriginal);
  const precioTexto = limpiarTexto(variante.precioTexto || quitarHtml(precioHtmlOriginal) || variante.precio || '');
  const imagenes = crearListaImagenes(
    resolverRutaImagen(variante.imagen),
    ...(variante.imagenes || []).map(imagen => resolverRutaImagen(imagen)),
    resolverRutaImagen(variante.imagenHover),
    resolverRutaImagen(variante.imagen2),
    resolverRutaImagen(variante.imagen3)
  );
  const etiqueta = limpiarTexto(variante.etiqueta || variante.capacidad || '');

  return {
    id: variante.id || etiqueta.toLowerCase().replace(/[^a-z0-9]+/g, ''),
    etiqueta,
    nombre: variante.nombre || '',
    imagen: resolverRutaImagen(variante.imagen) || imagenes[0] || '',
    imagenes,
    precioHtml,
    precioTexto,
    descripcion: variante.descripcion || ''
  };
}

function obtenerVariantesCapacidad(producto, fallback) {
  const variantesBase = Array.isArray(fallback.variantesCapacidad) ? fallback.variantesCapacidad : [];
  const variantesProducto = Array.isArray(producto.variantesCapacidad) ? producto.variantesCapacidad : [];
  const variantes = variantesBase.length ? variantesBase : variantesProducto;

  return variantes
    .map(normalizarVarianteCapacidad)
    .filter(variante => variante.id && variante.etiqueta);
}

function normalizarProducto(producto) {
  const fallback = fallbackProductoBase(producto);
  const precioHtmlOriginal = producto.precioHtml || producto.precio || producto.precioTexto || fallback.precioHtml || '';
  const precioHtml = sanitizarPrecioHtml(precioHtmlOriginal);
  const precioTexto = limpiarTexto(producto.precioTexto || quitarHtml(precioHtmlOriginal) || producto.precio || fallback.precioTexto || '');
  const descripcion = elegirDescripcionProducto(producto.descripcion, fallback.descripcion);
  const preciosDetectados = extraerPreciosDesdeHtml(precioHtmlOriginal);
  const variantesCapacidad = obtenerVariantesCapacidad(producto, fallback);
  const imagenes = crearListaImagenes(
    resolverRutaImagen(producto.imagen, fallback),
    ...(producto.imagenes || []).map(imagen => resolverRutaImagen(imagen, fallback)),
    resolverRutaImagen(producto.imagenHover, fallback),
    resolverRutaImagen(producto.imagen2, fallback),
    resolverRutaImagen(producto.imagen3, fallback),
    fallback.imagen,
    ...(fallback.imagenes || [])
  );

  return {
    id: normalizarIdProducto(producto.id || fallback.id || limpiarTexto(producto.nombre).toLowerCase().replace(/[^a-z0-9]+/g, '-')),
    nombre: producto.nombre || fallback.nombre,
    imagen: resolverRutaImagen(producto.imagen, fallback) || fallback.imagen || imagenes[0] || '',
    imagenes,
    precioHtml,
    precioTexto,
    precioAntiguo: producto.precioAntiguo || fallback.precioAntiguo || preciosDetectados.precioAntiguo || '',
    precioNuevo: producto.precioNuevo || fallback.precioNuevo || preciosDetectados.precioNuevo || '',
    categoria: normalizarCategoria(producto.categoria || fallback.categoria || ''),
    descripcion: descripcion || 'Consulta disponibilidad y detalles en tienda.',
    novedad: typeof producto.novedad === 'boolean' ? producto.novedad : Boolean(fallback.novedad),
    agotado: typeof producto.agotado === 'boolean' ? producto.agotado : estaAgotado({ precioHtml, precioTexto }),
    capacidadActiva: producto.capacidadActiva || fallback.capacidadActiva || '',
    variantesCapacidad
  };
}

function obtenerProductoDesdeCard(card) {
  const imagenPrincipal = card.dataset.img || card.querySelector('img')?.getAttribute('src') || '';
  const precio = card.querySelector('.precio');
  const precioAntiguo = card.querySelector('.precio-antiguo')?.textContent || '';
  const precioNuevo = card.querySelector('.precio-nuevo')?.textContent || '';
  const precioHtml = precio ? precio.innerHTML.trim() : '';
  const precioTexto = precio ? precio.textContent : '';

  return normalizarProducto({
    id: card.dataset.productoId,
    nombre: limpiarTexto(card.querySelector('h3')?.textContent),
    imagen: imagenPrincipal,
    imagenes: crearListaImagenes(
      imagenPrincipal,
      card.dataset.imgHover,
      card.dataset.img2,
      card.dataset.img3
    ),
    precioHtml,
    precioTexto,
    precioAntiguo: limpiarTexto(precioAntiguo),
    precioNuevo: limpiarTexto(precioNuevo),
    categoria: card.dataset.categoria,
    descripcion: card.dataset.descripcion,
    novedad: card.dataset.novedad === 'true',
    agotado: card.dataset.agotado === 'true' || esPrecioAgotado(precioTexto)
  });
}

function guardarCatalogo(productos) {
  const catalogo = productos.map(normalizarProducto);
  const acumulado = leerStorageJson(localStorage, CATALOGO_STORAGE_KEY, []);
  const base = catalogoBase.map(normalizarProducto);
  const catalogoUnificado = [...acumulado, ...base, ...catalogo].reduce((mapa, producto) => {
    mapa.set(producto.id, normalizarProducto(producto));
    return mapa;
  }, new Map());
  const resultado = [...catalogoUnificado.values()];
  escribirStorageJson(localStorage, CATALOGO_STORAGE_KEY, resultado);
  return resultado;
}

function obtenerCatalogo() {
  const guardado = leerStorageJson(localStorage, CATALOGO_STORAGE_KEY, null);
  if (Array.isArray(guardado) && guardado.length > 0) {
    const catalogoUnificado = [...guardado, ...catalogoBase].reduce((mapa, producto) => {
      const normalizado = normalizarProducto(producto);
      mapa.set(normalizado.id, normalizado);
      return mapa;
    }, new Map());
    return [...catalogoUnificado.values()];
  }
  return catalogoBase.map(normalizarProducto);
}

function guardarProductoSeleccionado(producto) {
  escribirStorageJson(sessionStorage, PRODUCTO_STORAGE_KEY, normalizarProducto(producto));
}

function registrarVistoReciente(productoId) {
  return productoId ? [productoId] : [];
}

function obtenerProductosRecientes(excluirId = '', limite = 4) {
  const catalogo = obtenerCatalogo();
  return catalogo.filter(producto => producto.id !== excluirId).slice(0, limite);
}

function ordenarTarjetasPorRecientes(grid) {
  return grid;
}

function obtenerFavoritos() {
  const favoritos = leerStorageJson(localStorage, FAVORITOS_KEY, []);
  return Array.isArray(favoritos) ? favoritos.map(normalizarIdProducto) : [];
}

function guardarFavoritos(favoritos) {
  escribirStorageJson(localStorage, FAVORITOS_KEY, favoritos);
}

function esFavorito(productoId) {
  return obtenerFavoritos().includes(productoId);
}

function alternarFavorito(productoId) {
  const favoritos = obtenerFavoritos();
  const existe = favoritos.includes(productoId);
  const actualizados = existe
    ? favoritos.filter(id => id !== productoId)
    : [...favoritos, productoId];
  guardarFavoritos(actualizados);
  actualizarEstadoFavoritos();
  return !existe;
}

function animarFavoritoHastaHeader(origen) {
  if (!origen) return;
  const destino = document.querySelector('.favoritos-toggle');
  if (!destino) return;

  const origenRect = origen.getBoundingClientRect();
  const destinoRect = destino.getBoundingClientRect();
  const volador = document.createElement('div');
  volador.className = 'favorito-volador';
  volador.innerHTML = '<i class="fa-solid fa-heart"></i>';

  const inicioX = origenRect.left + origenRect.width / 2;
  const inicioY = origenRect.top + origenRect.height / 2;
  const finalX = destinoRect.left + destinoRect.width / 2;
  const finalY = destinoRect.top + destinoRect.height / 2;
  const deltaX = finalX - inicioX;
  const deltaY = finalY - inicioY;

  volador.style.left = `${inicioX - 12}px`;
  volador.style.top = `${inicioY - 12}px`;
  document.body.appendChild(volador);

  volador.animate(
    [
      { transform: 'translate(0, 0) scale(0.8)', opacity: 0.85 },
      { transform: `translate(${deltaX * 0.55}px, ${deltaY * 0.55 - 32}px) scale(1.08)`, opacity: 1 },
      { transform: `translate(${deltaX}px, ${deltaY}px) scale(0.2)`, opacity: 0.2 }
    ],
    {
      duration: 1980,
      easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
      fill: 'forwards'
    }
  ).finished.finally(() => {
    volador.remove();
    destino.classList.add('favoritos-destacado');
    setTimeout(() => destino.classList.remove('favoritos-destacado'), 380);
  });
}

function actualizarBotonLike(boton, activo) {
  boton.classList.toggle('activo', activo);
  boton.setAttribute('aria-pressed', activo ? 'true' : 'false');
  const icono = boton.querySelector('i');
  if (!icono) return;
  icono.classList.toggle('fa-solid', activo);
  icono.classList.toggle('fa-regular', !activo);
}

function crearBadge(texto, clase) {
  const badge = document.createElement('span');
  badge.className = `producto-badge ${clase}`;
  badge.textContent = texto;
  return badge;
}

function decorarTarjetaProducto(card) {
  const producto = card.dataset.productoJson
    ? normalizarProducto(JSON.parse(card.dataset.productoJson))
    : obtenerProductoDesdeCard(card);

  card.dataset.productoJson = JSON.stringify(producto);
  card.dataset.productoId = producto.id;
  card.classList.add('producto-card');

  let cabecera = card.querySelector('.producto-meta-superior');
  if (!cabecera) {
    cabecera = document.createElement('div');
    cabecera.className = 'producto-meta-superior';
    card.prepend(cabecera);
  }

  cabecera.innerHTML = '';

  const badges = document.createElement('div');
  badges.className = 'producto-badges';

  if (producto.novedad) {
    badges.appendChild(crearBadge('Nuevo', 'badge-nuevo'));
  }

  if (tieneOferta(producto)) {
    badges.appendChild(crearBadge('Oferta', 'badge-oferta-card'));
  }

  if (estaAgotado(producto)) {
    badges.appendChild(crearBadge('Agotado', 'badge-agotado'));
  }

  const likeButton = document.createElement('button');
  likeButton.type = 'button';
  likeButton.className = 'producto-like';
  likeButton.innerHTML = '<i class="fa-regular fa-heart"></i>';
  likeButton.setAttribute('aria-label', `Marcar ${producto.nombre} como favorito`);
  actualizarBotonLike(likeButton, esFavorito(producto.id));

  likeButton.addEventListener('click', event => {
    event.stopPropagation();
    const anyadido = alternarFavorito(producto.id);
    if (anyadido) {
      animarFavoritoHastaHeader(likeButton);
    }
  });

  cabecera.appendChild(badges);
  cabecera.appendChild(likeButton);

  card.querySelector('.producto-reciente-lista')?.remove();
}

function decorarProductos(root = document) {
  root.querySelectorAll('.producto').forEach(decorarTarjetaProducto);
}

function mezclarProductos(productos) {
  const copia = [...productos];
  for (let indice = copia.length - 1; indice > 0; indice -= 1) {
    const aleatorio = Math.floor(Math.random() * (indice + 1));
    [copia[indice], copia[aleatorio]] = [copia[aleatorio], copia[indice]];
  }
  return copia;
}

function crearTarjetaProducto(producto) {
  const normalizado = normalizarProducto(producto);
  const card = document.createElement('article');
  const imagenPrincipal = normalizado.imagen || normalizado.imagenes[0] || '';
  const imagenHover = normalizado.imagenes.find(imagen => imagen !== imagenPrincipal) || '';

  card.className = 'producto';
  card.dataset.productoId = normalizado.id;
  card.dataset.categoria = normalizado.categoria;
  card.dataset.img = imagenPrincipal;
  if (imagenHover) card.dataset.imgHover = imagenHover;
  normalizado.imagenes.slice(1, 3).forEach((imagen, index) => {
    card.dataset[`img${index + 2}`] = imagen;
  });
  card.dataset.descripcion = normalizado.descripcion;
  card.dataset.novedad = normalizado.novedad ? 'true' : 'false';
  card.dataset.productoJson = JSON.stringify(normalizado);
  card.innerHTML = `
    <img src="${escaparHtml(imagenPrincipal)}" alt="${escaparHtml(normalizado.nombre)}">
    <h3>${escaparHtml(normalizado.nombre)}</h3>
    <p class="precio">${normalizado.precioHtml}</p>
  `;

  return card;
}

function obtenerSeleccionPortada(categoria, productosIniciales) {
  const catalogo = obtenerCatalogo();

  if (categoria === 'todos') {
    return productosIniciales.slice(0, 8);
  }

  if (categoria === 'otros') {
    return mezclarProductos(catalogo).slice(0, 8);
  }

  return catalogo
    .filter(producto => producto.categoria === categoria)
    .slice(0, 8);
}

function renderizarProductosPortada(grid, productos) {
  grid.innerHTML = '';

  productos.forEach(producto => {
    grid.appendChild(crearTarjetaProducto(producto));
  });

  if (!productos.length) {
    grid.innerHTML = '<p class="estado-vacio">No hay productos de esta categoría en el catálogo.</p>';
    return;
  }

  decorarProductos(grid);
  activarTarjetasProducto('#Productos .producto');
  activarHoverImagen('#Productos .producto');
  actualizarEstadoFavoritos();
}

function ordenarCatalogoAleatorio(grid, productos, categoria) {
  if (!grid || !['todos', 'otros'].includes(categoria)) return false;

  const tarjetas = [...productos];
  const visibles = categoria === 'todos'
    ? tarjetas
    : tarjetas.filter(producto => normalizarCategoria(producto.getAttribute('data-categoria') || '') === categoria);
  const ocultas = categoria === 'todos'
    ? []
    : tarjetas.filter(producto => normalizarCategoria(producto.getAttribute('data-categoria') || '') !== categoria);

  mezclarProductos(visibles).forEach(producto => {
    producto.style.display = 'block';
    grid.appendChild(producto);
  });

  ocultas.forEach(producto => {
    producto.style.display = 'none';
    grid.appendChild(producto);
  });

  return true;
}

function activarFiltros() {
  const botones = document.querySelectorAll('.filtro-btn');
  const productos = document.querySelectorAll('#Productos .producto');
  if (!botones.length || !productos.length) return;
  const seccionProductos = document.querySelector('#Productos');
  const grid = seccionProductos?.querySelector('.grid-productos');
  const esPortada = seccionProductos && !seccionProductos.classList.contains('catalogo-productos') && grid;
  const productosIniciales = esPortada ? [...productos].map(obtenerProductoDesdeCard) : [];

  botones.forEach(boton => {
    boton.addEventListener('click', () => {
      botones.forEach(item => item.classList.remove('active'));
      boton.classList.add('active');
      const categoria = normalizarCategoria(boton.textContent);

      if (esPortada) {
        renderizarProductosPortada(grid, obtenerSeleccionPortada(categoria, productosIniciales));
        return;
      }

      if (seccionProductos?.classList.contains('catalogo-productos') && ordenarCatalogoAleatorio(grid, productos, categoria)) {
        return;
      }

      productos.forEach(producto => {
        const tipo = normalizarCategoria(producto.getAttribute('data-categoria') || '');
        producto.style.display = categoria === 'todos' || tipo === categoria ? 'block' : 'none';
      });
    });
  });
}

function activarTarjetasProducto(selector = '.producto') {
  const tarjetas = document.querySelectorAll(selector);
  if (!tarjetas.length) return;

  tarjetas.forEach(tarjeta => {
    if (tarjeta.dataset.clickBound === 'true') return;
    tarjeta.dataset.clickBound = 'true';

    tarjeta.addEventListener('click', event => {
      if (event.target.closest('.producto-like')) return;
      const producto = tarjeta.dataset.productoJson
        ? normalizarProducto(JSON.parse(tarjeta.dataset.productoJson))
        : obtenerProductoDesdeCard(tarjeta);
      guardarProductoSeleccionado(producto);
      window.location.href = 'producto.html';
    });
  });
}

function activarHoverImagen(selector = '#Productos .producto') {
  document.querySelectorAll(selector).forEach(producto => {
    if (producto.dataset.hoverBound === 'true') return;
    const img = producto.querySelector('img');
    const original = producto.dataset.img || img?.getAttribute('src');
    const hover = producto.getAttribute('data-img-hover');
    if (!img || !original || !hover) return;
    producto.dataset.hoverBound = 'true';

    img.style.transition = 'opacity 0.3s ease';

    producto.addEventListener('mouseenter', () => {
      img.style.opacity = '0';
      setTimeout(() => {
        img.setAttribute('src', hover);
        img.style.opacity = '1';
      }, 150);
    });

    producto.addEventListener('mouseleave', () => {
      img.style.opacity = '0';
      setTimeout(() => {
        img.setAttribute('src', original);
        img.style.opacity = '1';
      }, 150);
    });
  });
}

function renderFavoritosEnPanel(menu) {
  const contador = menu.querySelector('.favoritos-contador');
  const panel = menu.querySelector('.favoritos-panel');
  const lista = menu.querySelector('.favoritos-lista');
  const vacio = menu.querySelector('.favoritos-vacio');
  let resumen = menu.querySelector('.favoritos-resumen');
  const catalogo = obtenerCatalogo();
  const favoritos = obtenerFavoritos()
    .map(id => catalogo.find(producto => producto.id === id))
    .filter(Boolean);
  const totalFavoritos = favoritos.reduce((total, producto) => {
    if (estaAgotado(producto)) return total;
    return total + extraerValorNumerico(producto.precioNuevo || producto.precioTexto);
  }, 0);

  contador.textContent = String(favoritos.length);
  lista.innerHTML = '';

  if (!resumen) {
    resumen = document.createElement('div');
    resumen.className = 'favoritos-resumen';
    panel.appendChild(resumen);
  }

  resumen.innerHTML = `
    <span>Total favoritos</span>
    <strong>${formatearPrecioTotal(totalFavoritos)}</strong>
  `;

  if (!favoritos.length) {
    vacio.hidden = false;
    panel.hidden = !menu.classList.contains('abierto');
    return;
  }

  vacio.hidden = true;

  favoritos.forEach(producto => {
    const item = document.createElement('article');
    item.className = 'favorito-item';
    item.innerHTML = `
      <img src="${escaparHtml(producto.imagen)}" alt="${escaparHtml(producto.nombre)}">
      <div class="favorito-item-info">
        <h4>${escaparHtml(producto.nombre)}</h4>
        <p>${escaparHtml(producto.precioTexto)}</p>
      </div>
      <button class="favorito-item-remove" type="button" aria-label="Quitar de favoritos">
        <i class="fa-solid fa-xmark"></i>
      </button>
    `;

    item.querySelector('.favorito-item-info').addEventListener('click', () => {
      guardarProductoSeleccionado(producto);
      window.location.href = 'producto.html';
    });

    item.querySelector('img').addEventListener('click', () => {
      guardarProductoSeleccionado(producto);
      window.location.href = 'producto.html';
    });

    item.querySelector('.favorito-item-remove').addEventListener('click', event => {
      event.stopPropagation();
      alternarFavorito(producto.id);
    });

    lista.appendChild(item);
  });

  panel.hidden = !menu.classList.contains('abierto');
}

function cerrarMenuFavoritos(menu) {
  if (!menu) return;
  menu.classList.remove('abierto');
  const panel = menu.querySelector('.favoritos-panel');
  if (panel) panel.hidden = true;
}

function cerrarFavoritosAbiertos(excepto = null) {
  document.querySelectorAll('.favoritos-menu.abierto').forEach(menu => {
    if (menu !== excepto) {
      cerrarMenuFavoritos(menu);
    }
  });
}

function cerrarBuscadorDesdeElemento(buscador, opciones = {}) {
  if (!buscador) return;

  if (typeof buscador._cerrarBuscador === 'function') {
    buscador._cerrarBuscador(opciones);
    return;
  }

  buscador.classList.remove('abierto');
  buscador.querySelector('.buscador-toggle')?.setAttribute('aria-expanded', 'false');
  const resultados = buscador.querySelector('.buscador-resultados');
  if (resultados) {
    resultados.hidden = true;
    resultados.innerHTML = '';
  }
  buscador.closest('.header')?.classList.remove('buscador-activo');
}

function cerrarBuscadoresAbiertos(excepto = null, opciones = {}) {
  document.querySelectorAll('.buscador-header.abierto').forEach(buscador => {
    if (buscador !== excepto) {
      cerrarBuscadorDesdeElemento(buscador, opciones);
    }
  });
}

function estaEnMenuCompacto() {
  return window.matchMedia('(max-width: 1020px)').matches;
}

function sincronizarBloqueoMenuMovil() {
  const menuMovilAbierto = estaEnMenuCompacto() && document.querySelector('.header.menu-abierto');
  document.body.classList.toggle('menu-movil-abierto', Boolean(menuMovilAbierto));
}

function cerrarInteraccionesHeader(header) {
  if (!header) return;
  header.querySelectorAll('.favoritos-menu.abierto').forEach(cerrarMenuFavoritos);
  header.querySelectorAll('.buscador-header.abierto').forEach(buscador => {
    cerrarBuscadorDesdeElemento(buscador);
  });
}

function cerrarMenuMovil(header, { cerrarInternos = true } = {}) {
  if (!header) return;
  header.classList.remove('menu-abierto');
  header.querySelector('.menu-toggle')?.setAttribute('aria-expanded', 'false');
  if (cerrarInternos) {
    cerrarInteraccionesHeader(header);
  }
  sincronizarBloqueoMenuMovil();
}

function inicializarMenuMovil() {
  const headers = document.querySelectorAll('.header');
  if (!headers.length) return;

  headers.forEach(header => {
    if (header.dataset.menuReady === 'true') return;
    header.dataset.menuReady = 'true';

    const toggle = header.querySelector('.menu-toggle');
    const panel = header.querySelector('.header-panel');
    if (!toggle || !panel) return;

    toggle.setAttribute('aria-expanded', 'false');

    toggle.addEventListener('click', event => {
      event.stopPropagation();
      if (!estaEnMenuCompacto()) return;

      const abrir = !header.classList.contains('menu-abierto');
      document.querySelectorAll('.header.menu-abierto').forEach(otro => {
        if (otro !== header) {
          cerrarMenuMovil(otro);
        }
      });

      if (abrir) {
        header.classList.add('menu-abierto');
        toggle.setAttribute('aria-expanded', 'true');
      } else {
        cerrarMenuMovil(header);
      }

      sincronizarBloqueoMenuMovil();
    });

    panel.addEventListener('click', event => {
      event.stopPropagation();
    });

    panel.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', () => {
        if (estaEnMenuCompacto()) {
          cerrarMenuMovil(header);
        }
      });
    });
  });

  document.addEventListener('click', event => {
    if (!estaEnMenuCompacto()) return;

    document.querySelectorAll('.header.menu-abierto').forEach(header => {
      if (!header.contains(event.target)) {
        cerrarMenuMovil(header);
      }
    });
  });

  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;

    document.querySelectorAll('.header.menu-abierto').forEach(header => {
      cerrarMenuMovil(header);
    });
  });

  window.addEventListener('resize', () => {
    if (!estaEnMenuCompacto()) {
      document.querySelectorAll('.header.menu-abierto').forEach(header => {
        cerrarMenuMovil(header);
      });
    }
    sincronizarBloqueoMenuMovil();
  });

  sincronizarBloqueoMenuMovil();
}

function inicializarFavoritosHeader() {
  const menus = document.querySelectorAll('.favoritos-menu');
  if (!menus.length) return;

  menus.forEach(menu => {
    if (menu.dataset.ready === 'true') return;
    menu.dataset.ready = 'true';

    const toggle = menu.querySelector('.favoritos-toggle');
    const panel = menu.querySelector('.favoritos-panel');

    toggle.addEventListener('click', event => {
      event.stopPropagation();
      const abrir = !menu.classList.contains('abierto');

      cerrarBuscadoresAbiertos();
      cerrarFavoritosAbiertos(menu);

      menu.classList.toggle('abierto', abrir);
      if (panel) panel.hidden = !abrir;
      renderFavoritosEnPanel(menu);
    });
  });

  document.addEventListener('click', event => {
    document.querySelectorAll('.favoritos-menu.abierto').forEach(menu => {
      if (!menu.contains(event.target)) {
        cerrarMenuFavoritos(menu);
      }
    });
  });

  actualizarEstadoFavoritos();
}

function actualizarEstadoFavoritos() {
  document.querySelectorAll('.producto-like').forEach(boton => {
    const card = boton.closest('.producto');
    if (!card) return;
    actualizarBotonLike(boton, esFavorito(card.dataset.productoId));
  });

  document.querySelectorAll('.btn-favorito-producto').forEach(boton => {
    const productoId = boton.dataset.productoId;
    if (!productoId) return;
    const activo = esFavorito(productoId);
    boton.classList.toggle('activo', activo);
    boton.setAttribute('aria-pressed', activo ? 'true' : 'false');
    const icono = boton.querySelector('i');
    const texto = boton.querySelector('span');
    if (icono) {
      icono.classList.toggle('fa-solid', activo);
      icono.classList.toggle('fa-regular', !activo);
    }
    if (texto) {
      texto.textContent = activo ? 'Guardado en favoritos' : 'Añadir a favoritos';
    }
  });

  document.querySelectorAll('.favoritos-menu').forEach(renderFavoritosEnPanel);
}

function normalizarBusqueda(texto) {
  return normalizarComparacion(texto);
}

function inicializarBuscadorHeader() {
  const buscadores = document.querySelectorAll('.buscador-header');
  if (!buscadores.length) return;
  const catalogo = obtenerCatalogo();

  buscadores.forEach(buscador => {
    if (buscador.dataset.ready === 'true') return;
    buscador.dataset.ready = 'true';

    const header = buscador.closest('.header');
    const toggle = buscador.querySelector('.buscador-toggle');
    const cerrar = buscador.querySelector('.buscador-cerrar');
    const input = buscador.querySelector('.buscador-input');
    const resultados = buscador.querySelector('.buscador-resultados');
    let coincidenciasActivas = [];

    function ocultar() {
      resultados.hidden = true;
      resultados.innerHTML = '';
    }

    function sincronizarHeader() {
      if (!header) return;
      header.classList.toggle('buscador-activo', header.querySelector('.buscador-header.abierto') !== null);
    }

    function abrirBuscador() {
      cerrarFavoritosAbiertos();
      cerrarBuscadoresAbiertos(buscador, { limpiar: false });
      buscador.classList.add('abierto');
      toggle?.setAttribute('aria-expanded', 'true');
      sincronizarHeader();
      requestAnimationFrame(() => input?.focus());
    }

    function cerrarBuscador({ limpiar = true } = {}) {
      buscador.classList.remove('abierto');
      toggle?.setAttribute('aria-expanded', 'false');
      if (limpiar && input) {
        input.value = '';
      }
      coincidenciasActivas = [];
      ocultar();
      sincronizarHeader();
    }

    buscador._cerrarBuscador = cerrarBuscador;
    toggle?.setAttribute('aria-expanded', 'false');

    toggle?.addEventListener('click', event => {
      event.stopPropagation();
      abrirBuscador();
    });

    cerrar?.addEventListener('click', event => {
      event.stopPropagation();
      cerrarBuscador();
    });

    input.addEventListener('focus', abrirBuscador);

    input.addEventListener('input', () => {
      const query = normalizarBusqueda(input.value);

      if (!query) {
        coincidenciasActivas = [];
        ocultar();
        return;
      }

      abrirBuscador();

      coincidenciasActivas = [...catalogo]
        .filter(producto => {
          const nombre = normalizarBusqueda(producto.nombre);
          return nombre.includes(query) || nombre.startsWith(query);
        })
        .sort((a, b) => {
          const aStarts = normalizarBusqueda(a.nombre).startsWith(query) ? 0 : 1;
          const bStarts = normalizarBusqueda(b.nombre).startsWith(query) ? 0 : 1;
          return aStarts - bStarts || a.nombre.localeCompare(b.nombre);
        })
        .slice(0, 6);

      resultados.innerHTML = '';

      if (!coincidenciasActivas.length) {
        resultados.innerHTML = '<p class="buscador-vacio">No hay productos con ese nombre.</p>';
        resultados.hidden = false;
        return;
      }

      coincidenciasActivas.forEach(producto => {
        const item = document.createElement('button');
        item.type = 'button';
        item.className = 'buscador-item';
        item.innerHTML = `
          <img src="${escaparHtml(producto.imagen)}" alt="${escaparHtml(producto.nombre)}">
          <span class="buscador-item-texto">
            <strong>${escaparHtml(producto.nombre)}</strong>
            <small>${escaparHtml(producto.precioTexto)}</small>
          </span>
        `;

        item.addEventListener('click', () => {
          guardarProductoSeleccionado(producto);
          window.location.href = 'producto.html';
        });

        resultados.appendChild(item);
      });

      resultados.hidden = false;
    });

    input.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        cerrarBuscador();
        return;
      }

      if (event.key === 'Enter' && coincidenciasActivas[0]) {
        guardarProductoSeleccionado(coincidenciasActivas[0]);
        window.location.href = 'producto.html';
      }
    });

    document.addEventListener('click', event => {
      if (!buscador.contains(event.target)) {
        cerrarBuscador();
      }
    });
  });
}

function actualizarContadorHorario() {
  const contadores = [...document.querySelectorAll('.contador-horario, #contador-horario')];
  if (!contadores.length) return;

  const ahora = new Date();
  const dia = ahora.getDay();
  const hora = ahora.getHours();
  const minutos = ahora.getMinutes();
  const ahoraMin = hora * 60 + minutos;

  const horarios = {
    1: [[600, 810], [1020, 1200]],
    2: [[600, 810], [1020, 1200]],
    3: [[600, 810], [1020, 1200]],
    4: [[600, 810], [1020, 1200]],
    5: [[600, 810], [1020, 1200]],
    6: [[600, 840]],
    0: []
  };

  const hoy = horarios[dia];

  function formato(min) {
    const h = Math.floor(min / 60);
    const m = min % 60;
    return `${h}h ${m}m`;
  }

  let abierto = false;
  let tiempoRestante = 0;

  if (hoy.length > 0) {
    for (const tramo of hoy) {
      if (ahoraMin >= tramo[0] && ahoraMin <= tramo[1]) {
        abierto = true;
        tiempoRestante = tramo[1] - ahoraMin;
      }
    }
  }

  function pintarContadores(texto, estadoAbierto) {
    contadores.forEach(contador => {
      contador.classList.toggle('abierto', estadoAbierto);
      contador.classList.toggle('cerrado', !estadoAbierto);
      contador.textContent = texto;
    });
  }

  if (abierto) {
    pintarContadores(`Abierto · Cierra en ${formato(tiempoRestante)}`, true);
    return;
  }

  let encontrado = false;

  for (let i = 0; i < 7 && !encontrado; i += 1) {
    const siguienteDia = (dia + i) % 7;
    const tramos = horarios[siguienteDia];
    if (!tramos.length) continue;

    for (const tramo of tramos) {
      const inicio = tramo[0];
      let diferencia;

      if (i === 0 && ahoraMin < inicio) {
        diferencia = inicio - ahoraMin;
      } else if (i > 0) {
        diferencia = (1440 - ahoraMin) + (i - 1) * 1440 + inicio;
      } else {
        continue;
      }

      pintarContadores(`Cerrado · Abre en ${formato(diferencia)}`, false);
      encontrado = true;
      break;
    }
  }

  if (!encontrado) {
    pintarContadores('Cerrado', false);
  }
}

function inicializarMapasExternos() {
  document.querySelectorAll('[data-mapa-externo]').forEach(contenedor => {
    if (contenedor.dataset.mapaPreparado === 'true') return;

    const boton = contenedor.querySelector('[data-mapa-cargar]');
    const plantilla = contenedor.querySelector('template');
    if (!boton || !plantilla) return;

    contenedor.dataset.mapaPreparado = 'true';

    boton.addEventListener('click', () => {
      const iframe = plantilla.content.firstElementChild?.cloneNode(true);
      if (!iframe) return;

      contenedor.innerHTML = '';
      contenedor.appendChild(iframe);
      contenedor.classList.add('mapa-activo');
    });
  });
}

function inicializarEnlacesAlInicio() {
  const esMismaRutaInicio = (() => {
    const ruta = window.location.pathname.toLowerCase();
    return ruta.endsWith('/index.html') || ruta.endsWith('/') || ruta.endsWith('/carpeta de complementos lopez');
  })();
  const desplazarAlInicio = () => {
    const scrollingElement = document.scrollingElement || document.documentElement || document.body;
    const hero = document.getElementById('Inicio');

    if (hero && typeof hero.scrollIntoView === 'function') {
      hero.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    if (scrollingElement && typeof scrollingElement.scrollTo === 'function') {
      scrollingElement.scrollTo({ top: 0, behavior: 'auto' });
    }

    window.scrollTo({ top: 0, behavior: 'auto' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    requestAnimationFrame(() => {
      if (scrollingElement) {
        scrollingElement.scrollTop = 0;
      }
      window.scrollTo(0, 0);
    });
  };

  document.querySelectorAll('a[href="#top"], a[href="index.html#top"]').forEach(enlace => {
    if (enlace.dataset.topReady === 'true') return;
    enlace.dataset.topReady = 'true';

    enlace.addEventListener('click', event => {
      const href = enlace.getAttribute('href');
      const apuntaAlInicioActual = href === '#top' || (href === 'index.html#top' && esMismaRutaInicio);
      if (!apuntaAlInicioActual) return;

      event.preventDefault();
      cerrarBuscadoresAbiertos();
      cerrarFavoritosAbiertos();
      document.querySelectorAll('.header.menu-abierto').forEach(header => {
        cerrarMenuMovil(header);
      });

      history.replaceState(null, '', '#top');
      desplazarAlInicio();
    });
  });

  if (window.location.hash === '#top') {
    requestAnimationFrame(() => {
      desplazarAlInicio();
    });
  }
}

window.ComplementosLopez = {
  catalogoBase: catalogoBase.map(normalizarProducto),
  crearListaImagenes,
  decorarProductos,
  guardarCatalogo,
  obtenerCatalogo,
  guardarProductoSeleccionado,
  registrarVistoReciente,
  obtenerProductosRecientes,
  ordenarTarjetasPorRecientes,
  normalizarProducto,
  activarTarjetasProducto,
  actualizarEstadoFavoritos,
  alternarFavorito,
  animarFavoritoHastaHeader,
  esFavorito,
  tieneOferta,
  estaAgotado,
  escaparHtml
};

document.addEventListener('DOMContentLoaded', () => {
  const tarjetasInicio = document.querySelectorAll('#Productos .producto');

  if (tarjetasInicio.length) {
    const grid = document.querySelector('#Productos .grid-productos');
    ordenarTarjetasPorRecientes(grid);
    const productos = [...document.querySelectorAll('#Productos .producto')].map(obtenerProductoDesdeCard);
    guardarCatalogo(productos);
  } else {
    obtenerCatalogo();
  }

  inicializarMenuMovil();
  inicializarFavoritosHeader();
  inicializarBuscadorHeader();
  activarFiltros();
  decorarProductos(document);
  activarTarjetasProducto('#Productos .producto');
  activarHoverImagen();
  inicializarMapasExternos();
  inicializarEnlacesAlInicio();
  actualizarContadorHorario();

  if (document.querySelector('.contador-horario')) {
    setInterval(actualizarContadorHorario, 60000);
  }
});
