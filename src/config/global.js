export default {
  global: {
    componenteFormativo: 'Fundamentos del mercado II',
    descripcionCurso:
      'El universo del vestuario es muy amplio, tanto como los posibles perfiles del consumidor y sus diversas variaciones. Es fundamental para el mercado de la moda explorar, conocer y dar origen a nuevas tendencias, diseños y estilos, con la finalidad de estar siempre a la vanguardia para satisfacer las necesidades de un público detallista, variable, exigente e insaciable.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Perfiles del consumidor de moda',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Introducción: los individuos y su entorno',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Factores que influyen en el comportamiento del consumidor',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Cultura y producto de moda: rol y simbolismo, valores culturales del consumidor',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo:
              'Relación directa del perfil del consumidor con universos del vestuario',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo:
              'Perfiles de consumidor: tradicional, neotradicional, contemporáneo, vanguardista, visionario',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Nuevos perfiles del consumidor',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Estilos y minorías',
            hash: 't_1_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo: 'Tendencias globales',
            hash: 't_1_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.9',
            titulo: 'Configuraciones estéticas: estilos de vida',
            hash: 't_1_9',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.10',
            titulo: 'Comportamiento del consumidor colombiano',
            hash: 't_1_10',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.11',
            titulo:
              '¿Cómo consumirán los adolescentes de hoy dentro de 10 años?',
            hash: 't_1_11',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.12',
            titulo: '¿Cómo analizar un perfil del consumidor de moda?',
            hash: 't_1_12',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Universos del vestuario',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Introducción: definición, características y tipologías',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: '<i>Formal wear</i>',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: '<i>Casual wear</i>',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: '<i>Kaki wear</i>',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: '<i>Jeans wear</i>',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: '<i>Sport wear</i>',
            hash: 't_2_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.7',
            titulo: '<i>Active wear</i>',
            hash: 't_2_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.8',
            titulo: '<i>Under wear</i>',
            hash: 't_2_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.9',
            titulo: '<i>Leisure wear</i>',
            hash: 't_2_9',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.10',
            titulo: 'Universos emergentes',
            hash: 't_2_10',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Agencia EFE. (2017, 20 de julio). Isabella Springmühl, la diseñadora que rompe los prejuicios del síndrome de Down. [Video]. ',
      link: 'Youtube. https://www.youtube.com/watch?v=TH3g1qe_kko',
    },
    {
      referencia:
        'adn40. (2019, 26 de septiembre). Conoce el Athleisure, movimiento de la industria de la moda. [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=zAsPbnDTh8s&feature=youtu.be',
    },
    {
      referencia:
        'AMA.RILLO (MXP.LAB). (s.f.). Universos del vestuario. SlideShare. ',
      link: 'https://es.slideshare.net/mezcaline/universos-del-vestuario',
    },
    {
      referencia:
        'ANDI, C. de la C. A. F. T. y C., ACICAM, A. C. de I. del C. el C. y sus M., & PTP, P. de T. P. (2012). Informe de Sostenibilidad 2012. Sector Sistema Moda. 78. ',
      link:
        'https://www.colombiaproductiva.com/CMSPages/GetFile.aspx?guid=b2760508-c291-488b-b5e0-fe7b8cd464ee',
    },
    {
      referencia:
        'Arenas, L. (2015, 1 de noviembre). ATHLEISURE: EL SPORT DE LUXE LLEGA A LA CALLE - Magazine Horse. Horse. ',
      link:
        'https://www.magazinehorse.com/athleisure-la-tendencia-sport-deluxe-llega-a-la-calle/',
    },
    {
      referencia:
        'BBVA Research. (2019). Perfilamiento del consumidor colombiano. BBVA Research, 1–72. ',
    },
    {
      referencia: 'Barceló, Y. (2012). UNIVERSOS del VESTUARIO. Calameo. ',
      link: 'https://es.calameo.com/read/001376751208219da825e',
    },
    {
      referencia:
        'By.jetset. (2019, 22 de mayo). ¿Cómo VESTIR STREETWEAR? | Prendas que TODOS deberían tener!. [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=oQf7LsrWi8E',
    },
    {
      referencia:
        'Calvo F. (2016). El nuevo vestir: cómo se hace y se lleva la moda hoy. RIL editores. ',
      link:
        'http://ebookcentral.proquest.com/lib/senavirtualsp/detail.action?docID=4675991',
    },
    {
      referencia:
        'Cárdenas, R. J. (2014). Análisis del consumidor. Editorial Digital UNID. ',
      link:
        'http://ebookcentral.proquest.com/lib/senavirtualsp/detail.action?docID=5307891',
    },
    {
      referencia:
        'Chao, M., & Fernández, S. (2011). Los consumidores, clientes y usuarios. In Disposición y venta de productos (p. 16). ',
      link: 'http://www.mcgraw-hill.es/bcv/guide/capitulo/8448175840.pdf',
    },
    {
      referencia:
        'CIAI Cámara Industrial Argentina de Indumentaria. (s.f.). Moda sin género. Moda Argentina. ',
      link: 'https://www.ciaindumentaria.com.ar/plataforma/moda-sin-genero/',
    },
    {
      referencia:
        'Con información de Mindshare. (2020, 20 de marzo). Radiografía del consumidor colombiano en el aislamiento preventivo | EL ESPECTADOR. El Espectador. ',
      link:
        'https://www.elespectador.com/noticias/actualidad/radiografia-del-consumidor-colombiano-en-el-aislamiento-preventivo-articulo-910319/',
    },
    {
      referencia:
        'Concepto Definición. (s.f.). ¿Qué es Athleisure? » Su Definición y Significado [2020]. ConceptoDefinición. ',
      link: 'https://conceptodefinicion.de/athleisure/',
    },
    {
      referencia:
        'Confidencial Colombia. (2019, 22 de mayo). Conozca el perfil demográfico de los consumidores colombianos. Confidencial Colombia. ',
      link:
        'https://confidencialcolombia.com/economia/este-es-el-perfil-demografico-de-los-consumidores-colombianos-segun-bbva-research/2019/05/22/',
    },
    {
      referencia:
        'Consumidor Dinero. (2014, 20 de abril). Perfil de los consumidores colombianos. Dinero. ',
      link:
        'https://www.dinero.com/edicion-impresa/informe-especial/articulo/perfil-consumidores-colombianos/201630',
    },
    {
      referencia:
        'Cuello, E. (s.f.). PERFILES DE USUARIO Y UNIVERSOS DEL VESTUARIO.ppt - Presentaciones de Google. ',
      link:
        'https://docs.google.com/presentation/d/1zerNSZpQbIlRHN2Z3LWSVsSFl- FzSdbK2hWPuNj5dro/htmlpresent',
    },
    {
      referencia:
        'D’andrea, G., Marcotte, D., & Dixon, G. (2010). Dejen que los clientes de mercados emergentes sean sus profesores. Hardvard Business Review América Latina, 6.',
    },
    {
      referencia:
        'Definicion y que es. (s.f.). Definicion y Que Es - definiciones completas y originales. Definicionyquees. ',
      link: 'https://definicionyque.es/',
    },
    {
      referencia: 'Definicion.de. (s.f.). Definicion.de. Definicion.De. ',
      link: 'https://definicion.de/sastre/',
    },
    {
      referencia: 'Definición ABC. (s.f.). Definición ABC. Definicionabc.com. ',
      link: 'https://www.definicionabc.com/economia/alta-costura.php',
    },
    {
      referencia:
        'Dinngo. (s.f.). Design Thinking en Español. Designthinking. ',
      link: 'http://designthinking.es/inicio/index.php',
    },
    {
      referencia:
        'Economía Dinero. (2019). ¿Qué le pasa al consumidor colombiano ?',
    },
    {
      referencia:
        'El país. (2018). La revolución de la ropa inteligente | Tecnología. [Video]. Youtube.  ',
      link: 'https://www.youtube.com/watch?v=1s8DXEXFDY8&feature=youtu.be',
    },
    {
      referencia:
        'Espino, P. (s.f.). Capítulo 11: La influencia de la cultura en el comportamiento del consumidor. In Comportamiento del consumidor (p. 11).',
    },
    {
      referencia:
        'Etxebarria G. (2004). ‘E-CONSUMER’: el consumidor y los retos del nuevo mercado. Ediciones Deusto - Planeta de Agostini Profesional y Formación S.L. ',
      link:
        'http://ebookcentral.proquest.com/lib/senavirtualsp/detail.action?docID=3159193',
    },
    {
      referencia:
        'Evans Clothing. (2017, 6 de enero). How To Wear Leisurewear | Evans. [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=dC_RJEsFxys',
    },
    {
      referencia:
        'Expertos en marca. (s.f.). Estrategia de minorías una herramienta poderosa del marketing - Expertos en Marca. Expertos En Marca. ',
      link:
        'https://expertosenmarca.com/estrategia-minorias-una-herramienta-poderosa-del-marketing/',
    },
    {
      referencia:
        'Fashion Snoops. (2020, 1 de julio). Revisión de macrotendencias de mitad de año - Fashion Snoops . Fashion Snoops. ',
      link:
        'https://www-fashionsnoops-com.bdigital.sena.edu.co/Culture/culture/Consumer Insights/tab-85-56038-item',
    },
    {
      referencia:
        'Fernández, E. (2017, 16 de agosto). Generación Z: cómo son y cómo influirles con acciones de marketing. Artyco. ',
      link: 'https://artyco.com/generacion-z-quienes-son-marketing/',
    },
    {
      referencia:
        'Flórez, C. (s.f.). Universo del Vestuario | motorboots. MOTORBOOTS CAMILO FLOREZ. ',
      link:
        'https://abogadocamiloflorez.wixsite.com/motorboots/universo-del-vestuario',
    },
    {
      referencia:
        'Fucsia. (s.f.). Moda sin género, ¿tendencia pasajera o apoyo a la equidad? Fucsia. ',
      link:
        'https://www.fucsia.co/moda/inspiracion/articulo/moda-sin-genero-agender/62399',
    },
    {
      referencia: 'Fundéu. (2015). Glosario de la moda. 1–23. ',
      link:
        'http://www.fundeu.es/wp-content/uploads/2015/03/glosarioModaFundeu.pdf',
    },
    {
      referencia:
        'Herrera, C. (2019, 17 de noviembre).  El consumidor colombiano 30 años después, Colombiamoda 2019. [Video]. Youtube. ',
      link: 'https://www.youtube.com/watch?v=6GSz0lgLYng',
    },
    {
      referencia:
        'Herrera, C. & TEDx Talks. (2017, 19 de julio). ¿Es perverso el consumidor hoy? | Camilo Herrera | TEDxLasAguas. [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=6E34YigLEBY',
    },
    {
      referencia:
        'Herrera, M. A. (2020, February 24). Tendencias de Consumo 2020. [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=q8ekFqneEUU',
    },
    {
      referencia:
        'Hollen, N., Saddler, J. & Langford, A. (2002). Introducción a los textiles. Editorial Limusa S.A. de C.V.',
    },
    {
      referencia: 'Hoyos, J. (2020). Perfiles del consumidor.',
    },
    {
      referencia:
        'Inexmoda. (s.f.-a). Moda, Saberes y Patrimonio. #BCapital2018 - Pinterest. Pinterest. ',
      link:
        'https://co.pinterest.com/inexmoda/moda-saberes-y-patrimonio-bcapital2018/',
    },
    {
      referencia: 'Inexmoda. (s.f.-b). Beachwear - Pinterest. Pinterest. ',
      link: 'https://www.pinterest.com.mx/inexmoda/beachwear/',
    },
    {
      referencia: 'Inexmoda. (s.f.-c). Street Style - Pinterest. Pinterest. ',
      link: 'https://co.pinterest.com/inexmoda/street-style/',
    },
    {
      referencia:
        'Inexmoda. (s.f.-d). Denim - Inexmoda - Pinterest. Pinterest. ',
      link: 'https://www.pinterest.com.mx/inexmoda/denim/',
    },
    {
      referencia: 'Inexmoda. (s.f.-e). Street Style - Pinterest. Pinterest. ',
      link: 'https://co.pinterest.com/inexmoda/street-style/',
    },
    {
      referencia:
        'Inexmoda. (s.f.-f). Tendencia: íntimo - Pinterest. Pinterest. ',
      link: 'https://www.pinterest.com.mx/inexmoda/tendencia-íntimo/',
    },
    {
      referencia:
        'Inexmoda. (2011, 1 de noviembre). Términos de moda Inexmoda - Universos del vestuario. Facebook. ',
      link:
        'https://www.facebook.com/media/set/?vanity=inexmoda&set=a.10150343496837787',
    },
    {
      referencia:
        'Inexmoda, & Tendencial Coolhuntig Lab. (s.f.). Zoom al consumidor colombiano.',
    },
    {
      referencia:
        'Inexmoda, & Tendencial Coolhunting Lab. (2016). Radiografía del consumidor colombiano.',
    },
    {
      referencia:
        'Infashionweb. (s.f.-a). IFW - Universos de la Moda, ¿Que son? ¿Cuantos existen? ¿Cuantos hay? esto y más en #InFashionWeb #TendenciaModa. In Fashion Web. ',
      link: 'http://infashionweb.com/universos_de_la_moda.html',
    },
    {
      referencia:
        'Infashionweb. (s.f.-b). Universo Casual Wear - In Fashion Web - Universos de Vestuario. Infashionweb. ',
      link: 'http://infashionweb.com/casual_wear.html',
    },
    {
      referencia:
        'Jones, S. J. (2002). Diseño de moda (Santamaría, J. Tercera edición). Hong Kong: Blume.',
    },
    {
      referencia:
        'Junta de Andalucía. (s.f.). Módulo 4: El compoortamiento del consumidor/a. In Técnicas de venta y comunicación comercial.',
    },
    {
      referencia:
        'La República - Industria. (2020, 24 de febrero). Las tendencias de consumo que estarán en auge duran 2020 según Euromonitor. La República. ',
      link:
        'https://www.larepublica.co/empresas/las-tendencias-de-consumo-que-estaran-en-auge-duran-2020-segun-euromonitor-2968454',
    },
    {
      referencia:
        'Lepatru007. (2014, 5 de abril). Comportamiento del consumidor. [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=5FbZXT7XbLc',
    },
    {
      referencia:
        'Lisboa, R. (2017). Focus Group: ¿qué es esta metodología y cómo aplicarla a tu estrategia de marketing? ',
      link: 'https://rockcontent.com/es/blog/focus-group/',
    },
    {
      referencia:
        'Marketing & finanzas. (2017, 22 de enero). Qué es la Co creación y Cómo sacar provecho de ella. Marketing & Finanzas. ',
      link: 'https://www.marketingyfinanzas.net/2017/01/que-es-la-co-creacion/',
    },
    {
      referencia:
        'Marketing Digital y Redes Sociales. (2016, 25 de agosto). Como Es el Consumidor Actual // Consumidor 2.0. [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=_lt7Iq6HCSE',
    },
    {
      referencia:
        'MarketingUPacífico. (2013, Mayo 13). Factores que influyen en el consumidor. [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=P1BeyxOBe7s',
    },
    {
      referencia:
        'Martínez, J. (s.f.). Comportamiento del Consumidor - Definicion y Análisis Completo. Liderazgo y Mercadeo. ',
      link: 'https://www.liderazgoymercadeo.co/comportamiento-del-consumidor/',
    },
    {
      referencia:
        'Menache, A. (2017, 17 de marzo). 24 09 ESPACIO MODA SIN GENERO. [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=jUTUNrmQNMc&feature=youtu.be',
    },
    {
      referencia:
        'Merodio, J. (2019, 10 de junio). COMO VENDER A LA GENERACIÓN Z (los centennials). [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=8qy3wvk0Hco',
    },
    {
      referencia:
        'Negocios y emprendimiento. (2017, 24 de mayo 24). 10 Características del Consumidor Moderno que debes conocer para Vender Más. [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=R7ppUo3JB_4',
    },
    {
      referencia:
        'Neuromarketing.la. (s.f.). Comportamiento del Consumidor y las Emociones - Neuromarketing.la. Neuromarketing.La. ',
      link:
        'https://neuromarketing.la/2020/02/comportamiento-del-consumidor-emociones/',
    },
    {
      referencia:
        'Ortega, E. (2015). TEMA 5. EL COMPORTAMIENTO DEL CONSUMIDOR Y DEL ASORGANIZACIONES. Área de Comercialización e Investigación de Mercados UNIVERSIDAD DE JAÉN TEMA, 1–28.',
    },
    {
      referencia:
        'Pardo, D., Hernandis, B. & Paixao-Barradas, S. (2013). La Segmentación De Mercado Como Herramienta Estratégica En Las Decisiones De Diseño. Iconofacto, 9(12), 118–135.',
    },
    {
      referencia:
        'Posner, H. (2015). Marketing de moda (2a. ed.). Editorial Gustavo Gili. ',
      link:
        'http://ebookcentral.proquest.com/lib/senavirtualsp/detail.action?docID=4536136',
    },
    {
      referencia:
        'Ramírez, L. (2013, 9 de mayo). La Moda: El Reflejo de toda una Sociedad | Lina Ramirez A. Lina Ramirez A. ',
      link:
        'https://linaramireza.wordpress.com/2013/05/09/la-moda-un-reflejo-de-toda-una-sociedad/',
    },
    {
      referencia:
        'Real Academia Española. (s.f.). DRAE | Diccionario de la lengua española | Edición del Tricentenario | RAE - ASALE. ',
      link: 'https://dle.rae.es/',
    },
    {
      referencia:
        'Revista Info Retail. (2019, 28 de agosto). Opinión: ¿Cómo son los nuevos consumidores? | América Retail. ',
      link:
        'America Retail. https://www.america-retail.com/opinion/opinion-como-son-los-nuevos-consumidores/',
    },
    {
      referencia:
        'Ríos, J. (2016, 15 de marzo). Los 4 nuevos perfiles del consumidor colombiano para los próximos 4 años - KPMG Colombia. KPMG. ',
      link:
        'https://home.kpmg/co/es/home/media/Notas de prensa/2016/03/los-cuatro-nuevos-perfiles-del-consumidor-colombiano-para-los-proximos-cuatro-aos.html',
    },
    {
      referencia:
        'Rodríguez, A., Castrejón, C., & Cid, M. (s.f.). Multticultiralismo y mercados. In Universidad de Guanajuato.',
    },
    {
      referencia:
        'Saulquin, S. (2009). Jeans: la vigencia de un mito. Editorial Nobuko. ',
      link:
        'http://ebookcentral.proquest.com/lib/senavirtualsp/detail.action?docID=3195475',
    },
    {
      referencia:
        'SENA, & INAMOD. (2017-a). Design Thinking para el diseño y desarrollo de producto en moda.',
    },
    {
      referencia:
        'SENA, & INAMOD. (2017-b, 26 de diciembre). Personas de talla baja. [Video]. YouTube. ',
      link:
        'https://www.youtube.com/watch?v=pio3op4Tk_s&feature=youtu.be&fbclid=IwAR0TiYg5MWlDLFH7ZuJ9yu9jd5ozvNz2J0yEV7Y8cQhO5RaT4--WqXweHbw',
    },
    {
      referencia:
        'Silva, P. (2020, 15 de julio). Moda inclusiva: La visibilización de las minorías | La Máquina Medio. La Máquina. ',
      link:
        'https://lamaquinamedio.com/moda/moda-inclusiva-la-visibilizacion-de-las-minorias/',
    },
    {
      referencia:
        'Significados.com. (s.f.). Significados, conceptos y definiciones de significados. Significados.Com.  ',
      link: 'https://www.significados.com/',
    },
    {
      referencia:
        'TEDx Talks, & Amore, M. (2019). Cómo conocer a alguien en 30 segundos | Micaela Amore | TEDxRiodelaPlata. [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=i5ui_DrtcpU',
    },
    {
      referencia:
        'Teleantioquia. (2016a, 17 de octubre). Jeanswear - Prendas | Conceptos. [Video]. Youtube. ',
      link: 'https://www.youtube.com/watch?v=T5suGPy3jis',
    },
    {
      referencia:
        'Teleantioquia. (2016b, 29 de diciembre). Activewear - Definición | Conceptos. [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=zWQvTtAmcHc',
    },
    {
      referencia:
        'Teleantioquia. (2018a, 26 de octubre). Conceptos, Vestidos para fiestas, Capítulo 20 - Teleantioquia. [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=hb4QILr8Fr8',
    },
    {
      referencia:
        'Teleantioquia. (2018b, 4 de diciembre). Conceptos, Ropa interior femenina - Teleantioquia. [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=-ULVtD0F1YE',
    },
    {
      referencia:
        'Teleantioquia. (2019, March 6). Conceptos, Working Look - Teleantioquia. [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=RIf9RfCo-_w&t=20s',
    },
    {
      referencia: 'Tevisto.com. (2017). Diccionario de la moda.',
    },
    {
      referencia:
        'Thierry. (s.f.). Textiles inteligentes & Las aplicaciones potenciales de los textiles inteligentes. Thierry. ',
      link:
        'https://www.thierry-corp.com/mx/plasma/recursos/conceptos-fundamentales/textiles-inteligentes/',
    },
    {
      referencia:
        'Universidad Autónoma de Occidente, & Raddar. (2017, 15 de marzo). El perfil del consumidor en Colombia. [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=yoCZUlbhOXI&feature=youtu.be',
    },
    {
      referencia:
        'Vodafone Empresas. (2019, 10 de enero). ¿Qué busca, cómo piensa y cómo consume la generación Z? | Younes y Mohr. [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=ow-wuz6972M',
    },
    {
      referencia:
        'Viste la calle. (2014, 30 de octubre). El triunfo del sportswear - Viste la Calle. Viste La Calle. ',
      link: 'https://vistelacalle.com/122128/el-triunfo-del-sportswear/',
    },
    {
      referencia: 'WGSN. (2015). Consumer Insight 2015 - Generation Z.',
    },
    {
      referencia:
        'Wikipedia. (s.f.). Wikipedia, la enciclopedia libre. Wikipedia. ',
      link: 'https://es.wikipedia.org/wiki/Código_de_vestimenta',
    },
  ],
  glosario: [
    {
      termino: 'Alta costura',
      significado:
        'El concepto de alta costura forma parte del mundo de la moda en su versión más sofisticada. El principio básico de la alta costura es la confección de vestidos al margen de los procesos de la industria textil. Esto significa que un vestido recibe esta calificación cuando se elabora de forma artesanal en todos los aspectos de su confección (diseño, acabados, elección de tejidos y costura) (Definición ABC, s.f.).',
    },
    {
      termino: 'Blazer',
      significado:
        'Chaqueta con o sin cuello, masculina y femenina, con el largo hasta la cadera y sin corte en la cintura, generalmente de paño de lana y botonadura sencilla o cruzada (Fundéu, 2015).',
    },
    {
      termino: 'Blusa',
      significado:
        '1. f. Prenda abierta de tela fina, similar a la camisa, que usan las mujeres y los niños, y que cubre la parte superior del cuerpo. 2. f. Prenda de trabajo holgada y con mangas, generalmente de lienzo, que cubre el torso y suele llegar a media pierna (Real Académia Española, s.f.).',
    },
    {
      termino: 'Camisa',
      significado:
        'Prenda de vestimenta masculina y femenina, abotonada por delante; el cuello cambia según las modas, así como la forma y el tejido. Se convierte en protagonista del guardarropa masculino cuando, con Luis XV, el chaleco se achica y aparece la corbata (Tevisto.com, 2017).',
    },
    {
      termino: 'Camiseta polo',
      significado:
        'Chomba en tejido piqué de algodón, con cuello masculino, abotonada con tres botones. Su nombre se origina del famoso jugador francés de tenis, René Lacoste, bautizado “el cocodrilo” (Tevisto.com, 2017).<br>Chomba: 1. f. Arg., Chile y Par. Prenda de punto ligera, poco ceñida y larga hasta la cintura, con mangas cortas y cuello abierto (Real Academia Española, s.f.).',
    },
    {
      termino: 'Capacidad de compra',
      significado:
        'Es un término que se emplea en el campo de la economía, también se le denomina Poder Adquisitivo y es debido a que se refiere a los bienes y servicios que una persona puede adquirir con una cantidad de dinero específica, lo que quiere decir que el poder de compra es aquella capacidad que tiene un individuo de poder obtener productos y servicios en un momento dado y con una suma determinada de dinero. (Definicion y que es, s.f.).',
    },
    {
      termino: 'Caracterización',
      significado:
        '1. tr. Determinar los atributos peculiares de alguien o de algo, de modo que claramente se distinga de los demás. U. t. c. prnl. 2. tr. Autorizar a alguien con algún empleo, dignidad u honor (Real Academia Española, s.f.).',
    },
    {
      termino: 'Categoría',
      significado:
        '4. f. Cada una de las clases o divisiones establecidas al clasificar algo (Real Academia Española, s.f.).',
    },
    {
      termino: 'Chinos - kakis',
      significado:
        'Pantalones largos y rectos, llegan hasta el tobillo (Tevisto.com, 2017).',
    },
    {
      termino: 'Cliente',
      significado:
        'Proviene del latín y se describe como la persona o entidad jurídica que se beneficia de otro ente para un bien común. Este término se utiliza desde mucho tiempo atrás, en las antiguas civilizaciones un tipo de personas de mayoor jerarquía recibía servicios de un grupo de menor posición y este es el principio de la definición (Definicion y que es, s.f.)',
    },
    {
      termino: 'Cocreación',
      significado:
        'Consiste que las empresas permitan que sus clientes le ayuden a hacer su producto de tal manera que el resultado final sea algo ajustado a sus preferencias y con todos los elementos que el mismo cliente ayudó a construir (Marketing & finanzas, 2017).',
    },
    {
      termino: 'Color',
      significado:
        'Es una sensación que producen los rayos luminosos en los órganos visuales y que es interpretada en el cerebro. Se trata de un fenómeno físico-químico donde cada color depende de la longitud de onda (Definicion.de, s.f.).',
    },
    {
      termino: 'Consumidor',
      significado:
        '2. m. y f. Persona que adquiere productos de consumo o utiliza ciertos servicios (Real Academia Española, s.f.).',
    },
    {
      termino: 'Contexto Social',
      significado:
        'En la parte social es todo aquel entorno físico o simbólico en donde el individuo se relaciona con otras personas, este puede abarcar factores económicos, históricos y culturales que comprenden la identidad de un  individuo (Definicion y que es, s.f.).',
    },
    {
      termino: 'Demográfica',
      significado:
        '1. adj. Perteneciente o relativo a la demografía.<br>Demografía: 1. f. Estudio estadístico de una colectividad humana, referido a un determinado momento o a su evolución (Real Academia Española, s.f.).',
    },
    {
      termino: 'Denim',
      significado:
        'Tejido de algodón que se usa especialmente para la confección de la ropa vaquera (Fundéu, 2015).',
    },
    {
      termino: 'Desestructurado',
      significado:
        'Se aplica a la tendencia artística que intenta conseguir, en la ropa, los complementos, el maquillaje o el peinado, un aspecto anárquico, sin formas regulares, desigual (Fundéu, 2015).',
    },
    {
      termino: 'Elastómero',
      significado:
        '1. m. Materia natural o artificial que, como el caucho, tiene gran elasticidad.',
    },
    {
      termino: 'Entorno',
      significado:
        '1. m. Ambiente, lo que rodea. 2. m. Inform. Conjunto de características que definen el lugar y la forma de ejecución de una aplicación (Real Academia Española, s.f.).',
    },
    {
      termino: 'Estilo de vida',
      significado:
        'Es un concepto sociológico que se refiere a cómo se orientan los intereses, las opiniones, y los comportamientos y conductas de un individuo, grupo o cultura (Wikipedia, s.f.).',
    },
    {
      termino: 'Estructurado',
      significado:
        '1. adj. Dotado de estructura (Real Academia Española, s.f.).',
    },
    {
      termino: 'Etiqueta',
      significado:
        '1. f. Ceremonial de los estilos, usos y costumbres que se debe guardar en actos públicos solemnes. 2. f. Ceremonia en la manera de tratarse las personas particulares o en actos de la vida privada, a diferencia de los usos de confianza o familiaridad (Real Academia Española, s.f.).',
    },
    {
      termino: 'Fibras elastométricas',
      significado:
        'Las fibras elastoméricas o fibras elásticas, son aquellas que tienen elongaciones de 450 a 700 % y una recuperación que es instantánea y completa (Hollen et al., 2002). Las más conocidas son el hule y el spandex.',
    },
    {
      termino: 'Focus group',
      significado:
        'Método de investigación de mercado que tiene la función de analizar y captar feedbacks sobre productos, servicios y campañas de marketing de una empresa (Lisboa, 2019).',
    },
    {
      termino: 'Frac',
      significado:
        '1. m. Vestidura de hombre, que por delante llega hasta la cintura y por detrás tiene dos faldones más o menos anchos y largos (Real Academia Española, s.f.).',
    },
    {
      termino: 'Fular',
      significado:
        'Pañuelo amplio y largo para el cuello, normalmente hecho de seda (Fundéu, 2015).',
    },
    {
      termino: 'Gala',
      significado:
        'El origen etimológico del término gala se encuentra en el italiano “gala” que, a su vez, emana del francés, concretamente de la palabra “gale”, que puede traducirse como “diversión” o “fiesta” Por extensión, se llama gala al evento al cual los invitados acuden utilizando un vestido o un traje con estas características (Definicion.de, s.f.).',
    },
    {
      termino: 'Índigo',
      significado:
        '1. m. añil. Apl. a color, u. t. c. adj (Real Academia Española, s.f.). Añil: 2. m. Pasta de color azul oscuro, con visos cobrizos, que se saca de los tallos y hojas del añil. 3. m. Colorante o pigmento utilizado para producir el color añil. 4. adj. Dicho de un color: Semejante al de la pasta de añil, y que ocupa el sexto lugar en el espectro luminoso. U. t. c. s. m. (Real Académia Española, s.f.).',
    },
    {
      termino: 'Inteligencia artificial',
      significado:
        'En ciencias de la computación, una máquina «inteligente» ideal es un agente flexible que percibe su entorno y lleva a cabo acciones que maximicen sus posibilidades de éxito en algún objetivo o tarea (Wikipedia, s.f.).',
    },
    {
      termino: 'Mercado',
      significado:
        'Se trata de una organización que permite a los vendedores (ofertantes) y a los compradores (demandantes) establecer un vínculo comercial con el fin de realizar operación de intercambios o de acuerdos (Definicion y que, s.f.).',
    },
    {
      termino: 'Mezclilla',
      significado:
        'Tejido de algodón que se usa especialmente para la confección de la ropa vaquera (Fundéu, 2015).',
    },
    {
      termino: 'Objetivo',
      significado:
        '1. adj. Perteneciente o relativo al objeto en sí mismo, con independencia de la propia manera de pensar o de sentir (Real Academia Española, s.f.).',
    },
    {
      termino: 'Ocasión de uso',
      significado:
        'Ocasión es la oportunidad o comodidad de tiempo o lugar que se ofrece para ejecutar o conseguir algo, es decir, es la circunstancia favorable para lograr las metas que el individuo desea. Por extensión se define como el lugar, la hora o el evento en que se debe usar una prenda determinada (Significados.com, s.f.).',
    },
    {
      termino: 'Pañuelo',
      significado:
        '1. m. Pedazo de tela pequeño, generalmente cuadrado, que sirve para limpiarse la nariz o el sudor y para otras cosas. 2. m. Trozo de tela, por lo general cuadrado y mayor que el pañuelo de bolsillo, usado para abrigarse o como accesorio en la indumentaria femenina y masculina (Real Academia Española, s.f.).',
    },
    {
      termino: 'Performance',
      significado:
        '1. f. rendimiento/‖ proporción entre el resultado obtenido y los medios utilizados (Real Academia Española, s.f.).',
    },
    {
      termino: 'Protocolo',
      significado:
        '3. m. Conjunto de reglas establecidas por norma o por costumbre para ceremonias y actos oficiales o solemnes (Real Academia Española, s.f.).',
    },
    {
      termino: 'Sastre',
      significado:
        'Conjunto femenino compuesto de saco de corte masculino, acompañado de falda confeccionada en el mismo tejido. Nace a fines del siglo XIX, su nombre deriva del hecho de que lo confeccionaba el sastre. El traje puede tener también pantalones (Tevisto.com, 2017).',
    },
    {
      termino: 'Segmento',
      significado:
        '1. m. Econ. Cada uno de los grupos homogéneos diferenciados a los que se dirige la política comercial de una empresa (Real Academia Española, s.f.).',
    },
    {
      termino: 'Silueta',
      significado:
        '1. f. Dibujo sacado siguiendo los contornos de la sombra de un objeto. 2. f. Forma que presenta a la vista la masa de un objeto más oscuro que el fondo sobre el cual se proyecta. 3. f. perfil (‖ contorno de la figura) (Real Academia Española, s.f.).',
    },
    {
      termino: 'Sistema moda',
      significado:
        'El sector Sistema Moda está compuesto por dos sectores de producción: Textiles y Confecciones, y Cuero, Calzado y Marroquinería. Cada uno está compuesto por varios eslabones con interdependencia entre sí:<br>Textiles y Confecciones: Fibras (incluye algodón y fibras sintéticas), Hilaturas, Textiles, Confecciones.<br>Cuero, Calzado y Marroquinería: Curtiembre, Insumos (incluye herrajes, suelas, plantillas, tacones, hormas), Marroquinería, Calzado (ANDI et al., 2012).',
    },
    {
      termino: 'Smoking',
      significado:
        'Término derivado del inglés “to smoke”, fumar. Atuendo de noche masculino; la chaqueta, en tejido ligero de color negro o azul oscuro, puede tener botonadura simple o doble, con solapas de seda. En su versión blanca es adecuado para el aire libre o las vacaciones. El pantalón, sin puños, tiene una raya de seda cocida en el lateral externo. Se usa con camisa blanca de doble puño, ajustados con gemelos o botones especiales. El corbatín debe ser negro, ya que el blanco se reserva para el frac. Una faja cubre la cintura. Usado por Marlene Dietrich y luego retomado por Yves Saint Laurent durante los ‘70, se ha convertido en un atuendo de noche también femenino (Tevisto.com, 2017).',
    },
    {
      termino: 'Street Vision',
      significado:
        'Metodología de investigación que se realiza tomando fotografía de los consumidores en diferentes ambientes, a través de este estudio es posible conocerlos analizando sus gustos y comportamientos y así identificar y clasificar los estilos mentales de estos para definir las  futuras tendencias (Ramírez, 2013).',
    },
    {
      termino: 'Suéter',
      significado:
        '1. m. jersey1.<br>Jersey: 1. m. Prenda de vestir de punto, cerrada y con mangas, que cubre desde el cuello hasta la cintura aproximadamente (Real Academia Española, s.f.).',
    },
    {
      termino: 'Tendencias',
      significado:
        '1. f. Propensión o inclinación en las personas y en las cosas hacia determinados fines (Real Academia Española, s.f.).',
    },
    {
      termino: 'Textil inteligente',
      significado:
        'Tejidos que tienen componentes electrónicos incorporados. Estos componentes pueden incluir dispositivos como conductores, circuitos integrados, diodos emisores de luz, baterías y hasta pequeñas computadoras. Los textiles inteligentes tienen los dispositivos electrónicos entretejidos de manera imperceptible, lo que les permite ser flexibles (Thierry, s.f.).',
    },
    {
      termino: 'Tipologías',
      significado:
        '1. f. Estudio y clasificación de tipos que se practica en diversas ciencias. 2. f. Antrop. Ciencia que estudia los distintos tipos de razas en que se divide la especie humana (Real Academia Española, s.f.).',
    },
    {
      termino: 'Usuario',
      significado:
        'Proviene del latín ‘’usuarius’’ que se refiere a la persona que utiliza algún servicio público. Un usuario tiene que tener conciencia y lógica al momento de realizar sus actividades, por ejemplo cuando una persona va al cajero a sacar dinero, este se convierte en un usuario del banco ya que está utilizando los servicios electrónicos que este ofrece (Definicion y que es, s.f.).',
    },
    {
      termino: 'Vestido coctel',
      significado:
        'Vestido adecuado para ocasiones semiformales, a veces llamadas fiestas de cóctel o simplemente cóctel, normalmente celebradas a últimas horas de la tarde (Wikipedia, s.f.).',
    },
    {
      termino: 'Wear',
      terminoHtml: '<em>Wear</em>',
      significado:
        'Traducción al español: ropa de, ropa para -referente al uso (Wordreference.com, s.f.).',
    },
  ],
  complementario: [
    {
      texto: '(BBVA Research, 2019) Perfilamiento del consumidor colombiano.',
      tipo: 'PDF',
      descarga:
        '/downloads/U1_BBVA_Research_2019_Perfilamiento_del_consumidor_colombiano.pdf',
    },
    {
      texto:
        'Harvard Business Review América Latína (2010). Deje que los clientes de mercados emergentes sean sus profesores.',
      tipo: 'PDF',
      descarga:
        '/downloads/U1_DejenQueLosClientesDeMercadosEmergentesSeanSusProfesores.pdf',
    },
    {
      texto:
        'Pardo, C.; Hernandis, O.; Paixão-B. (2012). Perfiles sociales para la moda: la segmentación de mercado como herramienta estratégica en las decisiones de diseño.',
      tipo: 'PDF',
      descarga: '/downloads/U1_Dialnet_PerfilesSocialesParaLaModa_5204345.pdf',
    },
    {
      texto: '(Economía Dinero, 2019) ¿Qué le pasa al consumidor colombiano?',
      tipo: 'PDF',
      descarga:
        '/downloads/U1_Economia_Dinero2019_Que_le_pasa_al_consumidor_colombiano.pdf',
    },
    {
      texto:
        'UNIVERSIDAD DE JAÉN (s.f.). Tema 5. El comportamiento del consumidor y de las organizaciones.',
      tipo: 'PDF',
      descarga:
        '/downloads/U1_El_comportamiento_de_consumidor_y_de_las_organizaciones.pdf',
    },
    {
      texto:
        'Arana, A.; Morales, A.; Guzmán, G. (s.f.). La influencia de la cultura en el comportamiento del consumidor. ',
      tipo: 'PDF',
      descarga: '/downloads/U1_La_Cultura_y_el_Consumidor.pdf',
    },
    {
      texto: '(s.f.). Módulo 4. El comportamiento del consumidor/a.',
      tipo: 'PDF',
      descarga: '/downloads/U1_MODULO4_TECNICAS_DE_VENTA.pdf',
    },
    {
      texto:
        'Rodríguez, S.; Castrejón, M.; Cid, D. (s.f.). Multiculturalismo y mercados.',
      tipo: 'PDF',
      descarga: '/downloads/U1_Multiculturalismo_y_mercados.pdf',
    },
    {
      texto: '(Fundéu, 2015) Glosario de la moda',
      tipo: 'PDF',
      descarga: '/downloads/U2_glosarioModaFundeu.pdf',
    },
    {
      texto: '(Tevisto.com, 2017) Diccionario de la moda',
      tipo: 'PDF',
      descarga: '/downloads/U2_diccionario-de-la-moda.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Marisol Osorio',
        cargo: 'Líder Sennova',
        centro:
          'Centro de Formación en Diseño, Confección y Moda – Regional Antioquia',
      },
      {
        nombre: 'María Luisa Yepes',
        cargo: 'Instructora',
        centro:
          'Centro de Formación en Diseño, Confección y Moda – Regional Antioquia',
      },
      {
        nombre: 'Fabio Andrés Gaviria',
        cargo: 'Instructor',
        centro:
          'Centro de Formación en Diseño, Confección y Moda – Regional Antioquia',
      },
      {
        nombre: 'Liliana Victoria Morales Gualdrón',
        cargo: 'Diseñador Instruccional',
        centro:
          'Centro para la comunicación de la Industria Gráfica – Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Evaluador Instruccional',
        centro: 'Centro de Diseño y Metrología – Regional Distrito Capital',
      },
      {
        nombre: 'Julieth Paola Vital',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la comunicación de la Industria Gráfica – Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional - Tolima',
      },
      {
        nombre: 'Oscar Ivan Uribe Ortiz',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona ',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
