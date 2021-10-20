<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5  
    .titulo-principal(data-aos="fade-left")
      .titulo-principal__numero
        span 1
      h1 Perfiles del Consumidor de moda
    .row.justify-content-center.align-items-center.bg-color-row-1
      .col-lg-7
        p(data-aos="fade-down").my-3.p-3 Perfil de consumidor es el término con el que se conoce a un grupo de personas con características demográficas, sociales, culturales, de comportamiento y estilo de vida similar, al que las empresas enfocan y dirigen la oferta de sus bienes y servicios. Es fundamental que este se conozca a fondo para garantizar una relación directa entre los valores de consumo y los valores de la marca y sus productos.
      .col-lg-4(data-aos="fade-left").p-0
        img.img-t.img-a(src='@/assets/ilustraciones/img1.jpg', alt='')

    separador
    #t_1_1.titulo-segundo(data-aos="fade-right")
      h2 1.1 Introducción: los individuos y su entorno 
    p(data-aos="fade-down") Siendo el eje central de las marcas, #[b las personas] se constituyen en la #[b fuente principal de análisis] al momento de crear un producto o servicio de moda, por lo cual se vuelve esencial analizar, identificar y caracterizar el mercado objetivo al que se dirige un negocio.     
      
    .row.justify-content-center.align-items-center.bg-color-row-1.mt-5(data-aos="zoom-in")
      .col-lg-12
        p.p-3(data-aos="fade-down").mb-0 La estrecha relación entre #[b cliente, usuario, consumidor y comprador] es tema de discusión entre los diferentes autores. Ahora se clarificará un poco esta terminología:  

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-3(data-aos="fade-left")
        img.img-t.img-a.yoyo1.my-3(src='@/assets/ilustraciones/img2.svg', alt='') 
      .col-lg-7
        .hr.mb-5
        .list.mt-3
          .list__item
            .list__item__bulletNumber(data-aos="zoom-in") 
              span 1
          .list__txt
            p(data-aos="fade-down").mb-0 El #[b usuario] es para quien se crean los productos o servicios de una marca, quien sirve como #[b fuente de inspiración.]
        .hr.my-5            
        .list.mt-3
          .list__item
            .list__item__bulletNumber(data-aos="zoom-in") 
              span 2
          .list__txt
            p(data-aos="fade-down").mb-0 El #[b consumidor] es quien, con su poder de definición y aceptación de los argumentos de compra, #[b accede a los bienes y servicios], es a quien se dirigen los esfuerzos de comunicación de las marcas.          
        .hr.mt-5

    .row.justify-content-center.align-items-center
      .col-lg-10(data-aos="zoom-in")
        .bloque-texto-c.color-secundario.p-4.mt-5
          i.fas.fa-quote-right
          h4.mb-2 Al hablar de #[b consumidor o usuario] (segmento o mercado objetivo), se entiende como un #[b grupo de personas] con similitud o cercanía en sus manifestaciones culturales, gustos, preferencias, gestualidad, corporalidad, valores, motivaciones, actividades, movilidad, en fin, su estilo de vida y un contexto o entorno específico.
          span (Inexmoda & Tendencial Coolhuntig Lab, s.f.; Inexmoda & Tendencial Coolhunting Lab, 2016; Posner, 2015)

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-4(data-aos="zoom-in-right")          
        a.anexo.mb-4(:href="obtenerLink('/downloads/A_U1Radiografia _del_consumidor_colombiano_Inexmoda_&_Tendencial_Coolhunting_Lab_2016.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[b Anexo.] Radiografía del consumidor colombiano. 
      .col-lg-4(data-aos="zoom-in-left")          
        a.anexo.mb-4(:href="obtenerLink('/downloads/B_U1Los_consumidores_clientes_ y_usuarios_Chao_&_Fernandez_2011.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[b Anexo.] Los consumidores, clientes y usuarios.

    separador
    #t_1_2.titulo-segundo(data-aos="fade-right")
      h2 1.2 Factores que influyen en el comportamiento del consumidor
    p(data-aos="fade-down") Todos los individuos se convierten, de una u otra forma en consumidores, por lo tanto, hacen parte de algún tipo de estos. Existen múltiples #[b factores que influyen en el comportamiento del consumidor], los hay #[b externos e internos.]
    .row.justify-content-center.align-items-center.mt-5
      .col-lg-10(data-aos="zoom-in")
        p.px-4.mb-0.pb-4.pt-3.bg-color-row-2(data-aos="fade-right") #[b Los externos son los que dependen del colectivo], o sea, de un número de personas y pueden ser culturales; es decir, las tradiciones, las costumbres, leyes, lenguaje, historia y territorio o sociales, tales como, la clase social, los grupos de referencia (familia, amigos, vecinos, partido político y compañeros). <br> <b>Los internos, factores que se derivan del individuo,</b> son personales y psicológicos, así: edad, personalidad, gustos, preferencias, ocupación, roles, estilo de vida, percepciones, motivaciones, aptitudes, aprendizajes.  
        img.img-t.img-a(data-aos="fade-left")(src='@/assets/ilustraciones/img3.png', alt='') 

    p(data-aos="fade-down").mt-5.text-center Cuando se estudian los perfiles del consumidor se analizan, tanto los factores externos como los internos.
    .row.justify-content-center.align-items-center.my-5
      .col-lg-8(data-aos="flip-up")    
        .tarjeta.tarjeta--azul.p-4.d-none.d-lg-block
          SlyderA
            .row.justify-content-center.align-items-center
              .col-md-8.mb-4.mb-md-0
                p.mb-0.text-center ¿Cómo y dónde vive?

            .row.justify-content-center.align-items-center
              .col-md-8.mb-4.mb-md-0
                p.mb-0.text-center ¿Con quién o quiénes vive? 

            .row.justify-content-center.align-items-center
              .col-md-8.mb-4.mb-md-0
                p.mb-0.text-center ¿Qué tipo de relaciones tiene? 

            .row.justify-content-center.align-items-center
              .col-md-8.mb-4.mb-md-0
                p.mb-0.text-center ¿A qué se dedica? 

            .row.justify-content-center.align-items-center
              .col-md-8.mb-4.mb-md-0
                p.mb-0.text-center ¿Qué hace en su tiempo libre? 

            .row.justify-content-center.align-items-center
              .col-md-8.mb-4.mb-md-0
                p.mb-0.text-center ¿Cómo se expresa verbal y físicamente?

            .row.justify-content-center.align-items-center
              .col-md-8.mb-4.mb-md-0
                p.mb-0.text-center ¿Cómo son sus espacios? 

            .row.justify-content-center.align-items-center
              .col-md-8.mb-4.mb-md-0
                p.mb-0.text-center ¿Qué lo motiva y lo frustra? 

            .row.justify-content-center.align-items-center
              .col-md-8.mb-4.mb-md-0
                p.mb-0.text-center ¿Cuáles son sus referentes?

    .row.justify-content-center.align-items-center.d-block.d-lg-none(data-aos="fade-left")
      .col-md-8.mb-4.mb-md-0.bg-slide-color-1.p-2
        p.mb-0.text-center ¿Cómo y dónde vive?

    .row.justify-content-center.align-items-center.d-block.d-lg-none.mt-4(data-aos="fade-right")
      .col-md-8.mb-4.mb-md-0.bg-slide-color-1.p-2
        p.mb-0.text-center ¿Con quién o quiénes vive? 

    .row.justify-content-center.align-items-center.d-block.d-lg-none.mt-4(data-aos="fade-left")
      .col-md-8.mb-4.mb-md-0.bg-slide-color-1.p-2
        p.mb-0.text-center ¿Qué tipo de relaciones tiene? 

    .row.justify-content-center.align-items-center.d-block.d-lg-none.mt-4(data-aos="fade-right")
      .col-md-8.mb-4.mb-md-0.bg-slide-color-1.p-2
        p.mb-0.text-center ¿A qué se dedica? 

    .row.justify-content-center.align-items-center.d-block.d-lg-none.mt-4(data-aos="fade-left")
      .col-md-8.mb-4.mb-md-0.bg-slide-color-1.p-2
        p.mb-0.text-center ¿Qué hace en su tiempo libre? 

    .row.justify-content-center.align-items-center.d-block.d-lg-none.mt-4(data-aos="fade-right")
      .col-md-8.mb-4.mb-md-0.bg-slide-color-1.p-2
        p.mb-0.text-center ¿Cómo se expresa verbal y físicamente?

    .row.justify-content-center.align-items-center.d-block.d-lg-none.mt-4(data-aos="fade-left")
      .col-md-8.mb-4.mb-md-0.bg-slide-color-1.p-2
        p.mb-0.text-center ¿Cómo son sus espacios? 

    .row.justify-content-center.align-items-center.d-block.d-lg-none.mt-4(data-aos="fade-right")
      .col-md-8.mb-4.mb-md-0.bg-slide-color-1.p-2
        p.mb-0.text-center ¿Qué lo motiva y lo frustra? 

    .row.justify-content-center.align-items-center.d-block.d-lg-none.mt-4(data-aos="fade-left")
      .col-md-8.mb-4.mb-md-0.bg-slide-color-1.p-2
        p.mb-0.text-center ¿Cuáles son sus referentes?                

    .row.justify-content-center.align-items-center(data-aos="fade-down")
      .col-lg-8
        p(data-aos="fade-down").mt-5.text-center Las anteriores se suman al sinnúmero de #[b preguntas que se deben formular] cuando se estudia el perfil de un consumidor.<br>(Adaptado de Cárdenas Antúnez, 2014; Junta de Andalucía, s.f.; Ortega, 2015).

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-4(data-aos="zoom-in-right")          
        a.anexo.mb-4(href="https://www.youtube.com/watch?v=5FbZXT7XbLc" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-youtube.svg")
          .anexo__texto
            p #[b Enlace video.]  Comportamiento del consumidor. 
      .col-lg-4(data-aos="zoom-in-left")          
        a.anexo.mb-4(href="https://www.youtube.com/watch?v=P1BeyxOBe7s" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-youtube.svg")
          .anexo__texto
            p #[b Enlace video.]  Factores que influyen en el consumidor.

    .row.justify-content-center.align-items-center.mt-3
      .col-lg-4(data-aos="zoom-in-right")          
        a.anexo.mb-4(href="https://neuromarketing.la/2020/02/comportamiento-del-consumidor-emociones/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p #[b Anexo.] Comportamiento del Consumidor y las Emociones.
      .col-lg-4(data-aos="zoom-in-left")          
        a.anexo.mb-4(href="https://www.youtube.com/watch?v=i5ui_DrtcpU" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-youtube.svg")
          .anexo__texto
            p #[b Enlace video.]  Cómo conocer a alguien en 30 segundos. 

    separador
    #t_1_3.titulo-segundo(data-aos="fade-right")
      h2 1.3 Cultura y producto de moda: rol y simbolismo, valores culturales del consumidor
    p(data-aos="fade-down") Al igual que los #[b consumidores], los productos responden a las #[b dinámicas culturales] de cada lugar o contexto y a las necesidades y preferencias de los individuos. Las tradiciones, costumbres, leyes, ubicación geográfica, ideologías, el clima, entre otros, #[b influyen en la manera en que las personas se apropian] de los objetos, los incluyen en sus cotidianidades o los transforman, lo que para un grupo de personas significa algo o tiene valor, para otro puede pasar desapercibido. Es por ello que #[b las marcas y productores, desarrollan diferentes tipos o estilos de cada producto], puede ser por funcionalidades específicas, por características formales (color, tamaño, textura, olor, presentación), temporadas y ediciones limitadas, entre otras.  

    .row.justify-content-center.align-items-center.mt-5(data-aos="fade-down")
      .col-lg-10
        img.img-t.img-a(data-aos="fade-left")(src='@/assets/ilustraciones/img3.jpg', alt='') 
        .bloque-texto-d.color-secundario.p-4.mt-3
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p.text-regular Los productos de vestuario no son la excepción, #[b las marcas estudian muy bien a los consumidores] según las #[b regiones y diferencias culturales] en las que hacen presencia, para corresponder tanto con sus necesidades como con sus preferencias, expectativas, capacidades económicas y demás #[b características del mercado objetivo], para ofertar productos que correspondan directamente y garantizar la compra de estos; es por lo anterior que las marcas presentan variaciones de los productos según el contexto, por ejemplo: en las tiendas de #[b distintas regiones] de una #[b misma marca] se pueden encontrar #[b surtidos diferentes] de las tallas, los colores, las siluetas, las texturas (telas) y demás características formales de los productos y diferentes combinaciones (looks) de prendas según sea el comportamiento del consumidor en cada región específica.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            p.mb-0 #[b (Adaptado de Espino, s.f.; Inexmoda & Tendencial Coolhunting Lab, 2016; Jones, 2002; Posner, 2015).]

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-3(data-aos="zoom-in-right")          
        a.anexo.mb-4(href="https://www.youtube.com/watch?v=5FbZXT7XbLc" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-youtube.svg")
          .anexo__texto
            p #[b Enlace video.] Comportamiento del consumidor. 
      .col-lg-3(data-aos="zoom-in-up")          
        a.anexo.mb-4(href="https://www.youtube.com/watch?v=P1BeyxOBe7s" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-youtube.svg")
          .anexo__texto
            p #[b Enlace video.] Factores que influyen en el consumidor.      
      .col-lg-3(data-aos="zoom-in-left")          
        a.anexo.mb-4(href="https://co.pinterest.com/inexmoda/moda-saberes-y-patrimonio-bcapital2018/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p #[b Enlace web.] Moda, Saberes y Patrimonio.  
    separador
    #t_1_4.titulo-segundo(data-aos="fade-right")
      h2 1.4 Relación directa del perfil del consumidor con universos del vestuario
    p(data-aos="fade-down") La agrupación de consumidores según su estilo de vida, preferencias, tipos de consumo, capacidad de compra, experiencias, vivencias, actitudes, espacios en que se mueve, relaciones, actividades y en general por compartir un estilo mental – conceptual, es a lo que se denomina perfil del consumidor.

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-10(data-aos="zoom-in")
        img.img-t.img-a(data-aos="fade-left")(src='@/assets/ilustraciones/img4.jpg', alt='')
        figcaption.end Fuente: Perfiles del consumidor (Hoyos, 2020)           
        p.px-4.mb-0.pb-4.pt-3.bg-color-row-2(data-aos="fade-right") Los perfiles de consumidor guardan estrecha relación con los universos de vestuario, que son los grupos de productos de moda (prendas y accesorios) según la ocasión de uso o la especialidad para la que están desarrollados.

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-7
        p(data-aos="fade-right") Así como se estudia al consumidor para conocer su estilo de vida y sus preferencias, se hace un estudio detallado de los productos según la ocasión de uso a la que se destine, por ejemplo: para un consumidor que valora las tradiciones, el lujo, lo clásico, se desarrollarán #[b tipologías de vestuario para sus ocasiones de uso], es decir, un tipo de vestido de baño, un tipo de ropa de trabajo (oficina), un tipo de ropa deportiva, un tipo de ropa de descanso y así según los #[b diferentes usos] que las marcas encuentren para su consumidor, así este consumidor tendrá un vestido de baño neutro: clásico, probablemente enterizo, con detalles de confección y con telas de lujo, mientras que otro tipo de consumidor más inclinado por la moda o por la exhibición tendrá uno de dos o tres piezas, con siluetas que dejen ver más la piel y con texturas llamativas y de tendencia.
        .bloque-texto-c.color-secundario.p-4.mt-4
          i.fas.fa-quote-right
          h4.mb-2 Así, para cada ocasión de uso, no es lo mismo practicar deportes tradicionales que de alto riesgo, no es igual trabajar como ejecutivo en una oficina que independientemente o de manera más informal, es así que los universos de vestuario y los perfiles de consumidor se cruzan para atender cada mercado objetivo. 
          span (Adaptado de Hoyos, 2020; Inexmoda, 2011; Inexmoda & Tendencial Coolhuntig Lab, s.f.; Inexmoda & Tendencial Coolhunting Lab, 2016).             
      .col-lg-3
        img.img-t.img-a.my-3(data-aos="fade-left")(src='@/assets/ilustraciones/img5.jpg', alt='')

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-3(data-aos="zoom-in-right")          
        a.anexo.mb-4(href="https://co.pinterest.com/inexmoda/street-style/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p #[b Enlace web.] Street Style – Pinterest (Inexmoda, s.f.-b).
      .col-lg-4(data-aos="zoom-in")          
        a.anexo.mb-4(href="https://www.facebook.com/media/set/?vanity=inexmoda&set=a.10150343496837787" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p #[b Enlace web.] Términos de moda Inexmoda - Universos del vestuario.
      .col-lg-3(data-aos="zoom-in-left")          
        a.anexo.mb-4(:href="obtenerLink('/downloads/J_U1Perfiles_consumidor_Hoyos_2020.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[b Anexo.] Perfiles del consumidor. 

    separador
    #t_1_5.titulo-segundo(data-aos="fade-right")
      h2 1.5 Perfiles de consumidor: tradicional, neotradicional, contemporáneo, vanguardista, visionario
    p(data-aos="fade-down") Como ya se ha mencionado, #[b los perfiles de consumidor] sirven para #[b caracterizar un grupo de consumidores]. Durante años las agencias de tendencias, los institutos de moda y los #[i coolhunters] han trabajado los perfiles de consumidor según su cercanía en la línea de tiempo con el pasado o con el futuro, estando más cerca de las tradiciones o adoptando nuevos cambios en su forma de vida. Por lo anterior, se establecen las categorías #[b tradicional, neotradicional, contemporáneo, vanguardista y visionario] como grandes agrupaciones de los consumidores.

    TabsC.color-acento-botones.mt-5(data-aos="flip-down")
      .py-3.py-md-4(titulo="Los tradicionales")
        .row.justify-content-center.align-items-center
          .col-md-3.mb-4.mb-md-0
            img.img-t.img-a(data-aos="fade-left")(src='@/assets/ilustraciones/img6.png', alt='')
            figcaption Fuente: Perfiles de consumidor (Hoyos, 2020)       
          .col-md-7
            p Como su nombre lo indica, son consumidores que tienen un fuerte arraigo a las tradiciones, presentan resistencia al cambio, autocráticos, buscan distinción, se inclinan por el lujo, dan importancia a la etiqueta y el protocolo, conservan las normas, mantienen las costumbres, rígido, formal, exigente, se toma un tiempo para analizar y asumir nuevos productos o conceptos, sus compras son inversiones que hace para que perduren en el tiempo, rutinarios, fieles a los ritos familiares y sociales, se define por roles tradicionales específicos; para ellos más es más.
        
      .py-3.py-md-4(titulo="Neotradicional")
        .row.justify-content-center.align-items-center
          .col-md-3.mb-4.mb-md-0
            img.img-t.img-a(data-aos="fade-left")(src='@/assets/ilustraciones/img7.png', alt='')
            figcaption Fuente: Perfiles de consumidor (Hoyos, 2020)       
          .col-md-7
            p Se puede definir como un tradicional más sintonizado con el entorno, flexible y abierto a nuevos cambios y conceptos, mantiene un equilibrio entre la tradición y la innovación, así como las tradiciones, rutinas, ritos y costumbres familiares y sociales; sin embargo, es más permeable a nuevos desarrollos, busca una armonía natural, son generalmente hijos de tradicionales que se han abierto más al mundo. 

      .py-3.py-md-4(titulo="Contemporáneo")
        .row.justify-content-center.align-items-center
          .col-md-3.mb-4.mb-md-0
            img.img-t.img-a(data-aos="fade-left")(src='@/assets/ilustraciones/img8.png', alt='')
            figcaption Fuente: Perfiles de consumidor (Hoyos, 2020)       
          .col-md-7
            p Es el producto de los constantes cambios sociales, culturales, económicos y tecnológicos de las últimas décadas, es un consumidor original, auténtico, que se mantiene en constante evolución, multicultural, dinámico, en permanente búsqueda de su mejor versión; para este, el conocimiento prima sobre lo material, es inquieto por aprender nuevas teorías, idiomas, culturas. Abierto al cambio, explorador de nuevas sensaciones, adopta conceptos de moda, sin cambiar su esencia. No da tanta importancia a los roles y las personas, son todas importantes. Prima la calidad sobre la cantidad en todos los aspectos de su vida. 

      .py-3.py-md-4(titulo="Vanguardista – visionario")
        .row.justify-content-center.align-items-center
          .col-md-3.mb-4.mb-md-0
            img.img-t.img-a(data-aos="fade-left")(src='@/assets/ilustraciones/img9.png', alt='')
            figcaption Fuente: Inexmoda, 2015.      
          .col-md-7
            p Es un grupo de consumidores que se caracteriza por ser inconformistas, exploradores, extremadamente originales, innovadores y romper paradigmas, es este consumidor el que genera cambios y propone nuevos conceptos. Tiene una visión crítica del mundo, de los valores, de las sociedades y de todo lo que pueda ser cambiado. Constantemente busca nuevas experiencias, por lo que no se apegan a nada, viven al día y cuestionan todo.   

    p(data-aos="fade-down").mt-4.text-center (Adaptado de Hoyos, 2020; Inexmoda & Tendencial Coolhuntig Lab, s.f.; Inexmoda & Tendencial Coolhunting Lab, 2016; Inexmoda, 2015)          

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-10(data-aos="fade-left")
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 Para profundizar, consulte los siguientes documentos que le permitirán conocer en detalle cada uno de los perfiles del consumidor y mucho más a través del informe “Zoom al consumidor colombiano” de Inexmoda.    

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-5(data-aos="zoom-in-right")          
        a.anexo.mb-4(href="https://co.pinterest.com/inexmoda/street-style/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p #[b Enlace web.] Zoom al consumidor colombiano inexmoda.                               
      .col-lg-5(data-aos="zoom-in-left")          
        a.anexo.mb-4(:href="obtenerLink('/downloads/K1_U1_La_nueva_visión_del_consumidor_de_moda.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[b Anexo.] La nueva visión del consumidor de moda.

    separador
    #t_1_6.titulo-segundo(data-aos="fade-right")
      h2 1.6 Nuevos perfiles del consumidor
    p(data-aos="fade-down") A medida que el mundo avanza hacia las nuevas formas de vida, #[b los consumidores se transforman y se crean nuevas tipologías o categorías para identificarlos]. La forma en que se consume en la actualidad ha cambiado mucho, las Tecnologías de la Información y Comunicación (TIC), han permitido que el comercio digital y el mercadeo en línea conquisten a los mercados emergentes y han evidenciado la globalización de los consumidores. 

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-10(data-aos="zoom-in")
        p.px-4.mb-0.pb-4.pt-3.bg-color-row-2(data-aos="fade-right") Como los perfiles derivados del Tecno-consciente: un grupo de consumidores que viven el futuro en el ahora, son pioneros en el uso de las tecnologías en línea; sin embargo, dan igual importancia a desconectarse, están comprometidos con mejorar el mundo, con las causas medio ambientales y sociales, juegan diferentes roles, #[b son multitareas y multimedia]. A la hora de consumir, representan un papel activo en la compra, convirtiéndose en #[b co-creadores] con las marcas. 
        img.img-t.img-a(data-aos="fade-left")(src='@/assets/ilustraciones/img10.jpg', alt='')     
        figcaption Fuente: La nueva visión del consumidor de moda (Inexmoda, 2015).
    .row.justify-content-center.align-items-center.mt-5
      .col-lg-10(data-aos="fade-right")        
        p(data-aos="fade-down") Lo anterior, propone retos a las marcas de moda, puesto que les enfrenta a desarrollar #[b nuevas estrategias de comunicación], acercamiento al consumidor y #[b canales de ventas] acordes con los #[b nuevos perfiles de consumo]. 
        p(data-aos="fade-down").p-4.p-color-1 (Adaptado de: D’andrea, Marcotte & Dixon, 2010; Etxebarria Gangoiti, 2004; Martínez, s.f.; Revista Info Retail, 2019; Rodriguez et al., s.f.).

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-4(data-aos="zoom-in-right")          
        a.anexo.mb-4(href="https://www.youtube.com/watch?v=_lt7Iq6HCSE" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-youtube.svg")
          .anexo__texto
            p #[b Enlace video.]  Como es el consumidor actual.  
      .col-lg-4(data-aos="zoom-in-left")          
        a.anexo.mb-4(href="https://www.youtube.com/watch?v=R7ppUo3JB_4" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-youtube.svg")
          .anexo__texto
            p #[b Enlace video.] 10 Características del Consumidor Moderno que debes conocer para Vender Más.   

    separador
    #t_1_7.titulo-segundo(data-aos="fade-right")
      h2 1.7 Estilos y minorías
    p(data-aos="fade-down") #[b La moda] tradicionalmente se ha #[b enfocado y reforzado en estándares establecidos y cánones de belleza dictados por las grandes marcas], las tendencias y la sociedad de consumo. Sin embargo, en la actualidad emprendedores emergentes se dedican a atender consumidores de las minorías, bien sea por hacer parte de una etnia racial diferente, tener algún tipo de discapacidades, elegir nuevas formas para su cuerpo, nuevas identidades o expresiones de género, ser más grandes o pequeños, en fin, #[b ser diferentes].  

    img.img-t.img-a(data-aos="fade-left")(src='@/assets/ilustraciones/img11.jpg', alt='')  
    .row.justify-content-center.align-items-center.mt-5
      .col-lg-10(data-aos="zoom-in-right")  
        p(data-aos="fade-down").p-4.p-color-2.text-center Lo anterior ha permitido #[b visibilizar estilos y minorías] que en el pasado las grandes marcas no hubieran pensado en atender, por ejemplo:

        SlyderB.mt-5(:datos="datosSlyder")(data-aos="fade-left") 

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-10(data-aos="fade-left")
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Estos enfoques empiezan con las pequeñas marcas, ayudando a visualizar #[b mercados huérfanos], para luego ser seguidas por las medianas y grandes y así, posteriormente, convertirse en perfiles de consumidor reconocidos por las grandes marcas (Adaptado de Calvo, 2016; Expertos en marca, s.f.; Silva, 2020).

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-4(data-aos="zoom-in-right")          
        a.anexo.mb-4(href="https://expertosenmarca.com/estrategia-minorias-una-herramienta-poderosa-del-marketing/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p #[b Enlace web.] Estrategia de minorías una herramienta poderosa del marketing - Expertos en Marca. 
      .col-lg-4(data-aos="zoom-in-left")
        a.anexo.mb-4(href="https://www.fucsia.co/moda/inspiracion/articulo/moda-sin-genero-agender/62399" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p #[b Enlace web.] Moda sin género, ¿tendencia pasajera o apoyo a la equidad?     
    .row.justify-content-center.align-items-center.mt-3
      .col-lg-4(data-aos="zoom-in-right")          
        a.anexo.mb-4(href="https://www.ciaindumentaria.com.ar/plataforma/moda-sin-genero/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p #[b Enlace web.] Moda sin género.
      .col-lg-4(data-aos="zoom-in-left")
        a.anexo.mb-4(href="https://www.youtube.com/watch?v=TH3g1qe_kko/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-youtube.svg")
          .anexo__texto
            p #[b Enlace video.]  Isabella Springmühl, la diseñadora que rompe los prejuicios del síndrome de Down.     
    .row.justify-content-center.align-items-center.mt-3
      .col-lg-4(data-aos="zoom-in-right")          
        a.anexo.mb-4(href="https://www.youtube.com/watch?v=pio3op4Tk_s&feature=youtu.be&fbclid=IwAR0TiYg5MWlDLFH7ZuJ9yu9jd5ozvNz2J0yEV7Y8cQhO5RaT4--WqXweHbw" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-youtube.svg")
          .anexo__texto
            p #[b Enlace video.]  Personas de talla baja.
      .col-lg-4(data-aos="zoom-in-left")
        a.anexo.mb-4(href="https://www.youtube.com/watch?v=jUTUNrmQNMc&feature=youtu.be" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-youtube.svg")
          .anexo__texto
            p #[b Enlace video.]  Espacio moda sin genero. 

    separador
    #t_1_8.titulo-segundo(data-aos="fade-right")
      h2 1.8 Tendencias globales
    p(data-aos="fade-down") Si bien el consumidor se mide por las #[b macrotendencias] y, dentro de ellas se ubican las #[b diferentes tipologías], se hace necesario percatarse de los comportamientos del mercado global. Las diferentes agencias y empresas que se encargan de pronosticar las tendencias emergentes coinciden en que el consumidor actual:  

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-10
        img.img-t.img-a(data-aos="fade-left")(src='@/assets/ilustraciones/img18.jpg', alt='')  
        .tarjeta.tarjeta--azul.bg-1.p-4.d-none.d-lg-block
          SlyderA
            .row.justify-content-center.align-items-center
              .col-md-8.mb-4.mb-md-0
                p.mb-0 Está cada vez #[b más informado] debido al uso de las #[b Tecnologías de la Información y la Comunicación] (TIC).

            .row.justify-content-center.align-items-center
              .col-md-8.mb-4.mb-md-0
                p.mb-0 Busca la #[b transparencia de productos y marcas], es decir, que le digan #[b la verdad y cumplan su promesa de valor], cuando un consumidor va a comprar algo ya lo ha revisado y validado en internet y con otras personas.

            .row.justify-content-center.align-items-center
              .col-md-8.mb-4.mb-md-0
                p.mb-0 Cuenta con #[b tiempo reducido] debido a las múltiples tareas en las que participa día a día.

            .row.justify-content-center.align-items-center
              .col-md-8.mb-4.mb-md-0
                p.mb-0 #[b Accede a tecnologías] con mayor facilidad, la mayoría de los consumidores, independientemente de la edad o la clase social acceden a las diferentes tecnologías, no solo de la comunicación, sino, #[b tecnologías aplicadas a la vida] cotidiana.

            .row.justify-content-center.align-items-center
              .col-md-8.mb-4.mb-md-0
                p.mb-0 Busca la #[b personalización en los productos y servicios] a fin de sentirse único, lo que lleva a las marcas cada día más, a ofrecer servicios adicionales de customización.

            .row.justify-content-center.align-items-center
              .col-md-8.mb-4.mb-md-0
                p.mb-0 Se interesa por el #[b cuidado personal y del planeta], al sentirse habitante del mundo, cuida de sí mismo y del hogar (la tierra).

            .row.justify-content-center.align-items-center
              .col-md-8.mb-4.mb-md-0
                p.mb-0 Siente un fuerte #[b arraigo con su cultura local], adquiriendo piezas por el valor estético que adquieren o por su procedencia.

    .row.justify-content-center.align-items-center.d-block.d-lg-none.mt-4(data-aos="fade-left")
      .col-md-8.mb-4.mb-md-0.bg-1.p-2.b-radius
        p.mb-0.text-center Está cada vez #[b más informado] debido al uso de las #[b Tecnologías de la Información y la Comunicación] (TIC).   
    .row.justify-content-center.align-items-center.d-block.d-lg-none(data-aos="fade-right")
      .col-md-8.mb-4.mb-md-0.bg-1.p-2.b-radius
        p.mb-0.text-center Busca la #[b transparencia de productos y marcas], es decir, que le digan #[b la verdad y cumplan su promesa de valor], cuando un consumidor va a comprar algo ya lo ha revisado y validado en internet y con otras personas.  
    .row.justify-content-center.align-items-center.d-block.d-lg-none(data-aos="fade-left")
      .col-md-8.mb-4.mb-md-0.bg-1.p-2.b-radius
        p.mb-0.text-center Cuenta con #[b tiempo reducido] debido a las múltiples tareas en las que participa día a día. 
    .row.justify-content-center.align-items-center.d-block.d-lg-none(data-aos="fade-right")
      .col-md-8.mb-4.mb-md-0.bg-1.p-2.b-radius
        p.mb-0.text-center #[b Accede a tecnologías] con mayor facilidad, la mayoría de los consumidores, independientemente de la edad o la clase social acceden a las diferentes tecnologías, no solo de la comunicación, sino, #[b tecnologías aplicadas a la vida] cotidiana.
    .row.justify-content-center.align-items-center.d-block.d-lg-none(data-aos="fade-left")
      .col-md-8.mb-4.mb-md-0.bg-1.p-2.b-radius
        p.mb-0.text-center Busca la #[b personalización en los productos y servicios] a fin de sentirse único, lo que lleva a las marcas cada día más, a ofrecer servicios adicionales de customización.
    .row.justify-content-center.align-items-center.d-block.d-lg-none(data-aos="fade-right")
      .col-md-8.mb-4.mb-md-0.bg-1.p-2.b-radius
        p.mb-0.text-center Se interesa por el #[b cuidado personal y del planeta], al sentirse habitante del mundo, cuida de sí mismo y del hogar (la tierra).
    .row.justify-content-center.align-items-center.d-block.d-lg-none(data-aos="fade-left")
      .col-md-8.mb-4.mb-md-0.bg-1.p-2.b-radius
        p.mb-0.text-center Siente un fuerte #[b arraigo con su cultura local], adquiriendo piezas por el valor estético que adquieren o por su procedencia.

    .row.justify-content-center.align-items-center.mt-4
      .col-lg-10
        p(data-aos="fade-down").mt-5 Por lo anterior, las marcas están llamadas a #[b ofrecer productos y servicios] que respondan, prácticamente, a la #[b inmediatez], con la esencia clara y transparente, realizados con buenas prácticas ambientales, sociales (manufactura), amigables con el planeta, con una identidad clara y con una historia que contar. Para conseguirlo se alían fuertemente con la tecnología recurriendo a la inteligencia artificial, robótica, #[i big data] (grandes bases de datos), logística de producción y distribución, #[b involucrando en sus procesos al consumidor] (cocreación) #[b como aliado]. Adicionalmente, recurriendo a #[b la producción local] y bajo los #[b conceptos culturales] de la región.  

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-3(data-aos="zoom-in-right")          
        a.anexo.mb-4(href="https://www.youtube.com/watch?v=6E34YigLEBY" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-youtube.svg")
          .anexo__texto
            p #[b Enlace video.] ¿Es perverso el consumidor hoy?
      .col-lg-4(data-aos="zoom-in")
        a.anexo.mb-4(href="https://www.youtube.com/watch?v=R7ppUo3JB_4" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-youtube.svg")
          .anexo__texto
            p #[b Enlace video.]  Características del Consumidor Moderno que debes conocer para Vender Más.        
      .col-lg-3(data-aos="zoom-in-left")
        a.anexo.mb-4(href="https://www.youtube.com/watch?v=q8ekFqneEUU" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-youtube.svg")
          .anexo__texto
            p #[b Enlace video.]  Tendencias de consumo 2020.    

    separador
    #t_1_9.titulo-segundo(data-aos="fade-right")
      h2 1.9 Configuraciones estéticas: estilos de vida
    .row.justify-content-center.align-items-center.mt-5
      .col-lg-5
        p(data-aos="fade-down") Para #[b conocer a sus consumidores] las empresas o marcas recurren a #[b diferentes métodos], los entrevistan, hacen grupos de enfoque (#[i focus group]), observación participante o no participante, en fin, las que cada una de ellas considere son el mejor medio para conocer a fondo el estilo de vida de su consumidor. 

        p(data-aos="fade-down") Para la moda, se hace un ejercicio que se conoce como #[i Street Vision] (mirada de la calle), en el que por medio de fotografías se registran las personas, se analizan sus gestos, corporalidades, lugares en que se moviliza, su relación con las personas y el entorno, en general, todos los elementos que se puedan detectar en el registro fotográfico y que sirvan para, desde las configuraciones estéticas, definir cómo es ese grupo de personas al que se dirigen los productos o servicios. Algunas marcas, que atienden diferentes estilos mentales, hacen #[i Street Vision] para cada uno de estos.

      .col-lg-7
        img.img-t.img-a(data-aos="fade-left")(src='@/assets/ilustraciones/img19.jpg', alt='')  

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-10.p-color-1.p-4
        .row.justify-content-center.align-items-center
          .col-lg-3
            img.img-t.img-a(data-aos="fade-left")(src='@/assets/ilustraciones/img20.svg', alt='') 
          .col-lg-9
            p(data-aos="fade-down") Las situaciones de aislamiento a causa de #[b problemáticas ambientales y de salud], ha llevado a que las empresas, investigadores y diseñadores realicen sus #[b estudios de mercado en línea], por medio de encuentros sincrónicos, redes sociales y demás herramientas disponibles en la red. Es así como navegan por las redes sociales, tomando datos e imágenes de las personas, situaciones, lugares y demás criterios importantes para sus estudios.

            p(data-aos="fade-down").mb-0 (Adaptado de Dinngo, s.f.; Etxebarria, G. 2004; Inexmoda & Tendencial Coolhuntig Lab, s.f.; Inexmoda & Tendencial Coolhunting Lab, 2016; Posner, 2015; SENA & INAMOD, 2017a).  

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-4(data-aos="zoom-in-right")          
        a.anexo.mb-4(:href="obtenerLink('/downloads/K_U1_Zoom_al_consumidor_colombiano_inexmoda.rar')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-zip.svg")
          .anexo__texto
            p #[b Enlace web.] Zoom al consumidor colombiano. 
      .col-lg-4(data-aos="zoom-in")
        a.anexo.mb-4(:href="obtenerLink('/downloads/W_U1_Design_Thinking_para_el_diseño_y_desarrollo_de_producto_en_moda_SENA_&_ INAMOD 2017a.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[b Anexo.] Design Thinking para el diseño y desarrollo de producto en moda.  

    .row.justify-content-center.align-items-center.mt-3
      .col-lg-4(data-aos="zoom-in-right")          
        a.anexo.mb-4(:href="obtenerLink('/downloads/A_U1Radiografia _del_consumidor_colombiano_Inexmoda_&_Tendencial_Coolhunting_Lab_2016.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[b Anexo.] Radiografía del consumidor colombiano.
      .col-lg-4(data-aos="zoom-in")
        a.anexo.mb-4(href="https://www.youtube.com/watch?v=i5ui_DrtcpU" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-youtube.svg")
          .anexo__texto
            p #[b Enlace video.] Cómo conocer a alguien en 30 segundos.

    separador
    #t_1_10.titulo-segundo(data-aos="fade-right")
      h2 1.10 Comportamiento del consumidor colombiano
    p(data-aos="fade-down") Para clasificar al #[b consumidor de moda colombiano], el Instituto para la moda y la exportación Inexmoda con la agencia #[i Tendencial Coolhunting Lab], realizaron un estudio denominado #[i Zoom] al consumidor colombiano, en el que, a partir de un #[i Street vision] realizado en las principales ciudades del país, se desglosan #[b los perfiles de consumidor en diferentes estilos mentales], según sus:

    .row.justify-content-center.align-items-center.my-5
      .col-lg-10(data-aos="flip-up")    
        .tarjeta.tarjeta--azul.p-color-2.p-4.d-none.d-lg-block.mb-5
          SlyderA
            .row.justify-content-center.align-items-center
              .col-lg-1
                img.img-t.img-a(data-aos="fade-left")(src='@/assets/ilustraciones/img21.svg', alt='')
              .col-lg-8
                p.mb-0 #[b Gestualidades:] cómo es su comportamiento, gestos, poses y actitud frente a la cámara y al investigador.

            .row.justify-content-center.align-items-center
              .col-lg-1
                img.img-t.img-a(data-aos="fade-left")(src='@/assets/ilustraciones/img22.svg', alt='')
              .col-lg-8
                p.mb-0 #[b Corporalidades:] este punto habla sobre, cómo cada persona asume su cuerpo y cómo es la relación entre su cuerpo y el entorno. 

            .row.justify-content-center.align-items-center
              .col-lg-1
                img.img-t.img-a(data-aos="fade-left")(src='@/assets/ilustraciones/img23.svg', alt='')
              .col-lg-8
                p.mb-0 #[b Valores:] qué valora esta persona, qué es importante, sobre qué construye su vida. 

            .row.justify-content-center.align-items-center
              .col-lg-1
                img.img-t.img-a(data-aos="fade-left")(src='@/assets/ilustraciones/img24.svg', alt='')
              .col-lg-8
                p.mb-0 #[b Motivaciones:] qué le mueve, en qué centran su interés. 

            .row.justify-content-center.align-items-center
              .col-lg-1
                img.img-t.img-a(data-aos="fade-left")(src='@/assets/ilustraciones/img25.svg', alt='')
              .col-lg-8
                p.mb-0 #[b Actividades:] a qué se dedica (como profesión u oficio), qué hace en su tiempo libre, qué deportes práctica, entre otras. 

            .row.justify-content-center.align-items-center
              .col-lg-1
                img.img-t.img-a(data-aos="fade-left")(src='@/assets/ilustraciones/img26.svg', alt='')
              .col-lg-8
                p.mb-0 #[b Mapa de movilidad:] se refiere a los lugares que frecuenta para su vida cotidiana o para realizar sus actividades. 

            .row.justify-content-center.align-items-center
              .col-lg-1
                img.img-t.img-a(data-aos="fade-left")(src='@/assets/ilustraciones/img27.svg', alt='')
              .col-lg-8
                p.mb-0 #[b Referentes:] son personas, marcas, celebridades, artistas, a los que siguen o prefieren, es decir, que emplean como referencia. 

            .row.justify-content-center.align-items-center
              .col-lg-1
                img.img-t.img-a(data-aos="fade-left")(src='@/assets/ilustraciones/img28.svg', alt='')
              .col-lg-8
                p.mb-0 #[b Redes sociales:] qué redes sociales usan y cómo lo hacen, o sea, qué publican, de qué hablan, cómo lo publican. 

            .row.justify-content-center.align-items-center
              .col-lg-1
                img.img-t.img-a(data-aos="fade-left")(src='@/assets/ilustraciones/img29.svg', alt='')
              .col-lg-8
                p.mb-0 #[b Marcas:] qué marcas consumen, prefieren o tienen como referente. 

            .row.justify-content-center.align-items-center
              .col-lg-1
                img.img-t.img-a(data-aos="fade-left")(src='@/assets/ilustraciones/img30.svg', alt='')
              .col-lg-8
                p.mb-0 #[b Productos:] qué tipos de productos compran, con qué frecuencia, para qué los usan, en fin, cómo es su relación con los productos y las compras.

    .row.justify-content-center.align-items-center.mt-5.d-block.d-lg-none.p-color-2.b-radius.py-3(data-aos="zoom-in")
      .col-lg-1
        img.img-t.img-a.my-3(data-aos="fade-left")(src='@/assets/ilustraciones/img21.svg', alt='')
      .col-lg-8
        p.mb-0(data-aos="fade-down") #[b Gestualidades:] cómo es su comportamiento, gestos, poses y actitud frente a la cámara y al investigador.

    .row.justify-content-center.align-items-center.mt-5.d-block.d-lg-none.p-color-2.b-radius.py-3(data-aos="zoom-in")
      .col-lg-1
        img.img-t.img-a.my-3(data-aos="fade-left")(src='@/assets/ilustraciones/img22.svg', alt='')
      .col-lg-8
        p.mb-0(data-aos="fade-down") #[b Corporalidades:] este punto habla sobre, cómo cada persona asume su cuerpo y cómo es la relación entre su cuerpo y el entorno. 

    .row.justify-content-center.align-items-center.mt-5.d-block.d-lg-none.p-color-2.b-radius.py-3(data-aos="zoom-in")
      .col-lg-1
        img.img-t.img-a.my-3(data-aos="fade-left")(src='@/assets/ilustraciones/img23.svg', alt='')
      .col-lg-8
        p.mb-0(data-aos="fade-down") #[b Valores:] qué valora esta persona, qué es importante, sobre qué construye su vida. 

    .row.justify-content-center.align-items-center.mt-5.d-block.d-lg-none.p-color-2.b-radius.py-3(data-aos="zoom-in")
      .col-lg-1
        img.img-t.img-a.my-3(data-aos="fade-left")(src='@/assets/ilustraciones/img24.svg', alt='')
      .col-lg-8
        p.mb-0(data-aos="fade-down") #[b Motivaciones:] qué le mueve, en qué centran su interés. 

    .row.justify-content-center.align-items-center.mt-5.d-block.d-lg-none.p-color-2.b-radius.py-3(data-aos="zoom-in")
      .col-lg-1
        img.img-t.img-a.my-3(data-aos="fade-left")(src='@/assets/ilustraciones/img25.svg', alt='')
      .col-lg-8
        p.mb-0(data-aos="fade-down") #[b Actividades:] a qué se dedica (como profesión u oficio), qué hace en su tiempo libre, qué deportes práctica, entre otras. 

    .row.justify-content-center.align-items-center.mt-5.d-block.d-lg-none.p-color-2.b-radius.py-3(data-aos="zoom-in")
      .col-lg-1
        img.img-t.img-a.my-3(data-aos="fade-left")(src='@/assets/ilustraciones/img26.svg', alt='')
      .col-lg-8
        p.mb-0(data-aos="fade-down") #[b Mapa de movilidad:] se refiere a los lugares que frecuenta para su vida cotidiana o para realizar sus actividades. 

    .row.justify-content-center.align-items-center.mt-5.d-block.d-lg-none.p-color-2.b-radius.py-3(data-aos="zoom-in")
      .col-lg-1
        img.img-t.img-a.my-3(data-aos="fade-left")(src='@/assets/ilustraciones/img27.svg', alt='')
      .col-lg-8
        p.mb-0(data-aos="fade-down") #[b Referentes:] son personas, marcas, celebridades, artistas, a los que siguen o prefieren, es decir, que emplean como referencia. 

    .row.justify-content-center.align-items-center.mt-5.d-block.d-lg-none.p-color-2.b-radius.py-3(data-aos="zoom-in")
      .col-lg-1
        img.img-t.img-a.my-3(data-aos="fade-left")(src='@/assets/ilustraciones/img28.svg', alt='')
      .col-lg-8
        p.mb-0(data-aos="fade-down") #[b Redes sociales:] qué redes sociales usan y cómo lo hacen, o sea, qué publican, de qué hablan, cómo lo publican. 

    .row.justify-content-center.align-items-center.mt-5.d-block.d-lg-none.p-color-2.b-radius.py-3(data-aos="zoom-in")
      .col-lg-1
        img.img-t.img-a.my-3(data-aos="fade-left")(src='@/assets/ilustraciones/img29.svg', alt='')
      .col-lg-8
        p.mb-0(data-aos="fade-down") #[b Marcas:] qué marcas consumen, prefieren o tienen como referente. 

    .row.justify-content-center.align-items-center.mt-5.d-block.d-lg-none.p-color-2.b-radius.py-3(data-aos="zoom-in")
      .col-lg-1
        img.img-t.img-a.my-3(data-aos="fade-left")(src='@/assets/ilustraciones/img30.svg', alt='')
      .col-lg-8
        p.mb-0(data-aos="fade-down") #[b Productos:] qué tipos de productos compran, con qué frecuencia, para qué los usan, en fin, cómo es su relación con los productos y las compras.

    p(data-aos="fade-down").mt-5.text-center A partir de lo anterior, surgen los siguientes estilos mentales:

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-2
        ul.lista-ul--color
          li 
            i.lista-ul__vineta
            | Normativos
        ul.lista-ul--color
          li 
            i.lista-ul__vineta
            | Neo conservadores
        ul.lista-ul--color
          li 
            i.lista-ul__vineta
            | Seguidores
        ul.lista-ul--color
          li 
            i.lista-ul__vineta
            | Macho Alfa
        ul.lista-ul--color
          li 
            i.lista-ul__vineta
            | Protagodivas

      .col-lg-2
        ul.lista-ul--color
          li 
            i.lista-ul__vineta
            | Tropilatinos
        ul.lista-ul--color
          li 
            i.lista-ul__vineta
            | Hip-Hop
        ul.lista-ul--color
          li 
            i.lista-ul__vineta
            | Crew Urbano
        ul.lista-ul--color
          li 
            i.lista-ul__vineta
            | Surfer Urbanos
        ul.lista-ul--color
          li 
            i.lista-ul__vineta
            | Skaters

      .col-lg-2
        ul.lista-ul--color
          li 
            i.lista-ul__vineta
            | Manifiesto Radical
        ul.lista-ul--color
          li 
            i.lista-ul__vineta
            | Geeks
        ul.lista-ul--color
          li 
            i.lista-ul__vineta
            | Conocedores Glocales
        ul.lista-ul--color
          li 
            i.lista-ul__vineta
            | Eco-conscientes
        ul.lista-ul--color
          li 
            i.lista-ul__vineta
            | Singulartes

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-10
        img.img-t.img-a(data-aos="fade-left")(src='@/assets/ilustraciones/img31.jpg', alt='')
        figcaption Fuente: Zoom al consumidor Colombiano (Inexmoda & Tendencial Coolhunting Lab. s.f.). 
    .row.justify-content-center.align-items-center.mt-5
      .col-lg-10
        p(data-aos="fade-down") Al igual que #[b el consumidor] mundial, el colombiano #[b se transforma diariamente], a grandes velocidades, debido a los cambios de los mercados y de la humanidad. Actualmente, las personas están más dispuestas a pagar por aprender, porque se les enseñen, dejando un poco atrás el “#[b bueno, bonito y barato]” por el “#[b ahora, divertido y a un precio justo]”. La democratización del consumidor, le ha permitido hacer parte de los procesos en las empresas (cocreación).

        p(data-aos="fade-down") Para el análisis local la firma KPMG identifica cuatro grandes categorías de consumidores y cómo abordarlos desde las marcas, así:

    .row.justify-content-center.align-items-center.mt-5 
      .col-lg-10
        .row.justify-content-start.align-items-center.bg-img.d-none.d-lg-block(data-aos="fade-down") 
          .col-lg-7.p-5
            p(data-aos="fade-down") #[b “Véndemelo”] quienes optan por productos y servicios personalizados por medio de canales de venta ágiles.

            p(data-aos="fade-down") #[b “De mí para ti”] para los cuales se deben replantear la forma en que se acceden a los productos y se inclinan por las economías colaborativas.

            p(data-aos="fade-down") #[b “A mi manera”] prefieren participar en el proceso de los productos, por lo que se inclinan por los semielaborados y ser ellos quienes los armen, por lo que buscan empresas o marcas con alto nivel de adaptación.

            p(data-aos="fade-down") #[b “Estoy en tus manos”] el precio bajo juega un gran papel en ellos y poder acceder a los productos y servicios desde su hogar.  

    .row.justify-content-center.align-items-center.d-block.d-lg-none.p-color-1.p-3
      .col-lg-10
        p(data-aos="fade-down") #[b “Véndemelo”] quienes optan por productos y servicios personalizados por medio de canales de venta ágiles.

        p(data-aos="fade-down") #[b “De mí para ti”] para los cuales se deben replantear la forma en que se acceden a los productos y se inclinan por las economías colaborativas.

        p(data-aos="fade-down") #[b “A mi manera”] prefieren participar en el proceso de los productos, por lo que se inclinan por los semielaborados y ser ellos quienes los armen, por lo que buscan empresas o marcas con alto nivel de adaptación.

        p(data-aos="fade-down") #[b “Estoy en tus manos”] el precio bajo juega un gran papel en ellos y poder acceder a los productos y servicios desde su hogar.  

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-2
        img.img-t.img-a.my-3(data-aos="fade-left")(src='@/assets/ilustraciones/img33.svg', alt='')
      .col-lg-8        
        p(data-aos="fade-down") Debido al confinamiento, los consumidores han aumentado su #[b consumo en línea], ven más televisión, consumen más #[b entretenimiento por demanda] (como lo afirma #[i gamming & video on demand]) y las experiencias virtuales.

        p(data-aos="fade-down") Adaptado de Mindshare, 2020; Confidencial Colombia, 2019; Consumidor Dinero, 2014; Economía Dinero, 2019; C. Herrera, 2019; Rios, 2016; Universidad Autónoma de Occidente & Raddar, 2017.  

    .row.justify-content-center.align-items-center.mt-3
      .col-lg-4(data-aos="zoom-in")
        a.anexo.mb-4(href="https://www.youtube.com/watch?v=6GSz0lgLYng" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-youtube.svg")
          .anexo__texto
            p #[b Enlace video.] El consumidor colombiano 30 años después, Colombiamoda 2019.

      .col-lg-4(data-aos="zoom-in")
        a.anexo.mb-4(href="https://confidencialcolombia.com/economia/este-es-el-perfil-demografico-de-los-consumidores-colombianos-segun-bbva-research/2019/05/22/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p #[b Vídeo en página.] Conozca el perfil demográfico de los consumidores colombianos.

    .row.justify-content-center.align-items-center.mt-3
      .col-lg-4(data-aos="zoom-in")
        a.anexo.mb-4(href="https://www.youtube.com/watch?v=yoCZUlbhOXI&feature=youtu.be" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-youtube.svg")
          .anexo__texto
            p #[b Enlace video.] El perfil del consumidor en Colombia.

    separador
    #t_1_11.titulo-segundo(data-aos="fade-right")
      h2 1.11 ¿Cómo consumirán los adolescentes de hoy dentro de 10 años?
    p(data-aos="fade-down") Siendo la generación “Z” (Zeta) los verdaderos #[b nativos digitales], los hace consumidores que saben cómo crear y compartir contenido, navegan como pez en el agua por las redes sociales, en especial por aquellas con alto #[b contenido visual y audiovisual], pasaron del computador al teléfono móvil, lo que les hace tener toda la información en la mano y estar permanentemente conectados. 

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-10(data-aos="zoom-in")
        img.img-t.img-a(data-aos="fade-left")(src='@/assets/ilustraciones/img34.jpg', alt='')        
        p.px-5.mb-0.pb-4.pt-4.bg-color-row-2(data-aos="fade-right") Ya están #[b pasando de las aulas al mercado laboral], en el cual se proyectan como #[b seres emprendedores] con un alto sentido por el #[b cambio social], luchando por la desigualdad, el medio ambiente y la participación ciudadana.<br><br>La primera generación con una clara consciencia de la globalidad hace uso de la interconexión que permiten las telecomunicaciones para, no solo estar al tanto de lo que sucede, sino para participar del cambio. 

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-8
        p(data-aos="fade-down") Son los consumidores que realmente #[b intervienen] en el proceso de #[b creación con las empresas], promoviendo y demandando transparencia de las marcas.      
    .row.justify-content-center.align-items-center.mt-5
      .col-lg-6.p-color-1
        p.text-center Adaptado de Fernández, 2017; Vodafone Empresas, 2019; Merodio, 2019. 

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-3(data-aos="zoom-in")
        a.anexo.mb-4(href="https://www.youtube.com/watch?v=8qy3wvk0Hco" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-youtube.svg")
          .anexo__texto
            p #[b Enlace video.] Como vender a la generación Z.    
      .col-lg-4(data-aos="zoom-in")
        a.anexo.mb-4(href="https://www.youtube.com/watch?v=ow-wuz6972M" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-youtube.svg")
          .anexo__texto
            p #[b Enlace video.] ¿Qué busca, cómo piensa y cómo consume la generación Z? 
      .col-lg-3(data-aos="zoom-in")
        a.anexo.mb-4(:href="obtenerLink('/downloads/CC_U1_Consumer_nsight 2015_GenerationZ.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[b Anexo.] Consumer insight 2015, generación z.

    separador
    #t_1_12.titulo-segundo(data-aos="fade-right")
      h2 1.12 ¿Cómo analizar un perfil del consumidor de moda?
    p(data-aos="fade-down") El #[b perfil de consumidor] es la #[b suma] de los #[b factores internos y externos] que influyen en las personas a la hora de tomar decisiones de compra; por lo tanto, para analizar el consumidor, se debe #[b ir a fondo, conocerlo, estudiarlo y mantenerse actualizado sobre su comportamiento], para lo cual se emplean diferentes técnicas y herramientas de investigación de mercados utilizadas en la antropología, el diseño y el #[i marketing], tales como: entrevistas en contexto, grupos focales (#[i focus group]), encuestas, observación participante, observación no participante, exploración de redes sociales y las que cada empresa determine para su estudio.

    img.img-t.img-a.mt-5(data-aos="fade-left")(src='@/assets/ilustraciones/img35.jpg', alt='') 

    .row.justify-content-start.align-items-center.mt-5
      .col-lg-9.text-sup(data-aos="fade-right")
        p #[b Identificando y describiendo el estilo de vida o el estilo mental del consumidor], para lo que se tiene en cuenta, entre otros, los criterios vistos anteriormente: gestualidades, corporalidades, valores, motivaciones, actividades, mapa de movilidad, referentes, redes sociales, marcas, productos y así determinar cómo es su estilo de vida y la relación que se establece o formará (cuando la empresa o marca es nueva) con los productos a ofrecerles.<br><br>Adaptado de Etxebarria, G., 2004; Inexmoda & Tendencial Coolhuntig Lab, s.f.; Inexmoda & Tendencial Coolhunting Lab, 2016; Merodio, 2019; Ortega, 2015; Posner, 2015.

    .row.justify-content-end.align-items-center.img-top
      .col-lg-5
        img.img-t.img-a(data-aos="fade-left")(src='@/assets/ilustraciones/img36.svg', alt='') 

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-4(data-aos="zoom-in")
        a.anexo.mb-4(href="https://www.youtube.com/watch?v=5FbZXT7XbLc" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-youtube.svg")
          .anexo__texto
            p #[b Enlace video.] Comportamiento del consumidor.
      .col-lg-4(data-aos="zoom-in")
        a.anexo.mb-4(:href="obtenerLink('/downloads/A_U1Radiografia _del_consumidor_colombiano_Inexmoda_&_Tendencial_Coolhunting_Lab_2016.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[b Anexo.] Radiografía del consumidor colombiano.              
      .col-lg-4(data-aos="zoom-in-right")          
        a.anexo.mb-4(:href="obtenerLink('/downloads/K_U1_Zoom_al_consumidor_colombiano_inexmoda.rar')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-zip.svg")
          .anexo__texto
            p #[b Enlace web.] Zoom al consumidor colombiano. 
 

        

</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    datosSlyder: [
      {
        texto:
          'Marcas y colecciones dirigidas a personas <b>afrodescendientes</b> o desarrolladas a partir de los <b>referentes culturales</b> de <b>etnias</b> latinoamericanas <b>específicas</b>.',
        imagen: require('@/assets/ilustraciones/img12.jpg'),
      },
      {
        texto:
          'Prendas desarrolladas para personas con <b>discapacidad visual o ceguera</b>, en las que involucran <b>bordados con volumen</b> para ayudar a reconocer los colores y texturas.',
        imagen: require('@/assets/ilustraciones/img13.jpg'),
      },
      {
        texto:
          'Ropa para <b>nuevos mercados</b> como las personas de <b>talla baja</b>, quienes generalmente no logran conseguir ropa de adultos y deben recurrir a prendas infantiles, obteniendo resultados que no satisfacen sus necesidades específicas.',
        imagen: require('@/assets/ilustraciones/img14.jpg'),
      },
      {
        texto:
          'Las personas que han <b>transformado su cuerpo</b> por medio de cirugías y requieren <b>prendas desarrolladas de manera diferente</b> para vestir de manera óptima, al igual que la necesidad de <b>prendas de control</b> que les faciliten la recuperación y moldeamiento final del cuerpo.',
        imagen: require('@/assets/ilustraciones/img15.jpg'),
      },
      {
        texto:
          '<b>La ropa sin género</b>, que gana mercado a grandes pasos, desarrollada para personas que no se identifican con ninguno de los sexos biológicos (no binarios o <i>queer</i>), a llevado a las marcas a desarrollos nuevos en los cuales el patronaje (moldes) debe servirles a ambos tipos de cuerpos (femenino – masculino), las texturas y textiles deben ser neutros y los colores no representan una filiación con el género.',
        imagen: require('@/assets/ilustraciones/img16.jpg'),
      },
      {
        texto:
          'Mercados como las personas de <b>tallas grandes o <i>plus size</i></b>, ganan cada vez más terreno en los mercados, convirtiendo en natural algo que, no hace mucho, era señalado como diferente, por no encajar en los estándares.',
        imagen: require('@/assets/ilustraciones/img17.jpg'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
