document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================
       1. DATASET DE PROYECTOS REALES (ALEXANDER ROJAS)
       ========================================== */
    const projectsData = {
        vaiss: {
            title: "Proyecto Web Vaiss",
            category: "Especialidad",
            year: "2026",
            role: "Diseñador & Desarrollador Web",
            objective: "Crear una landing page funcional para Vaiss, cumpliendo los requerimientos del cliente y entregando una página con información actualizada, imágenes e información necesaria para las personas interesadas en sus servicios.",
            challenge: "Diseñar una experiencia web clara y útil, que permitiera a los usuarios encontrar la información principal rápidamente y contactar al negocio de forma directa para reservar citas.",
            solution: "Se desarrolló una landing page orientada a la conversión, con secciones informativas, imágenes del servicio y acceso directo a WhatsApp para consultas y reservas. Además, se incluyó un panel de administración para que el dueño pueda gestionar y actualizar la página a su gusto.",
            tools: ["Antigravity", "Claude Code", "Codex"],
            deliverables: [
                "Landing page web optimizada",
                "Panel de administración a medida",
                "Integración de contacto por WhatsApp",
                "Secciones informativas con galería del servicio"
            ],
            image: "assets/project_vaiss.png",
            images: [
                "assets/project_vaiss.png",
                "assets/project_vaiss_admin.png",
                "assets/project_vaiss_admin_login.png",
                "assets/project_vaiss_admin_time.png"
            ]
        },
        ckacktur: {
            title: "Ckacktur",
            category: "Proyecto Académico",
            year: "2023",
            role: "Diseñador Gráfico (Packaging)",
            objective: "Desarrollar un empaque visualmente atractivo y moderno para la cerveza artesanal Ckacktur, comunicando su esencia y su conexión con el territorio de San Pedro de Atacama. La propuesta busca captar el interés de un público joven, nacional y aventurero.",
            challenge: "Diseñar un packaging que no solo presentara la cerveza, sino que también construyera una experiencia vinculada al territorio, al turismo y a los sabores locales. El empaque debía diferenciarse por su forma, materialidad y relación con la artesanía de la zona.",
            solution: "Se propuso una botella inspirada en vasijas de alfareros de San Pedro de Atacama, con una forma moderna y distintiva. El empaque considera dos sabores de la zona (Rica-Rica y Chañar), etiquetas biodegradables, pita de cáñamo y tapa pintada a mano con tinta vegetal. Su envase puede tener un segundo uso ecológico como florero.",
            tools: ["Blender 3D", "Adobe Photoshop", "Diseño Sostenible"],
            deliverables: [
                "Diseño conceptual de packaging cervecero",
                "Modelado y renderizado 3D en Blender",
                "Bocetos de botella y sistema de empaque",
                "Propuesta gráfica de etiquetas para sabores Chañar y Rica-Rica",
                "Estudio de materiales biodegradables de producción"
            ],
            image: "assets/project_ckacktur.png",
            images: [
                "assets/project_ckacktur.png",
                "assets/project_ckacktur_mockup2.png",
                "assets/project_ckacktur_mockup3.png",
                "assets/project_ckacktur_render1.png",
                "assets/project_ckacktur_render_logo.png",
                "assets/project_ckacktur_chanar.png",
                "assets/project_ckacktur_ricarica.png",
                "assets/project_ckacktur_carving.png",
                "assets/project_ckacktur_forming.png",
                "assets/project_ckacktur_painting.png",
                "assets/project_ckacktur_sketch.jpg"
            ]
        },
        elemis: {
            title: "ELEMIS",
            category: "Proyecto Académico",
            year: "2023",
            role: "Diseñador Gráfico (Branding)",
            objective: "Desarrollar la identidad visual y el manual de normas gráficas para Elemis, una marca visionaria de automóviles eléctricos y autónomos. La marca mezcla referencias a las diosas griegas Electra y Artemisa, asociadas a la electricidad, la autonomía, la fuerza y la elegancia.",
            challenge: "Construir una marca automotriz conceptual que comunicara innovación, seguridad, sostenibilidad, elegancia y confianza, manteniendo una identidad gráfica sumamente limpia, legible y coherente para múltiples aplicaciones físicas y digitales.",
            solution: "Se diseñó un sistema de identidad visual compuesto por logotipo, imagotipo y símbolo, con normas estrictas de reducción, área de seguridad y color principal Pantone 143 C. El manual detalla el uso de la tipografía Azo Sans Bold, patrones gráficos institucionales, guías fotográficas de producto y diversas aplicaciones vehiculares.",
            tools: ["Adobe Illustrator", "Adobe Photoshop", "Branding Design"],
            deliverables: [
                "Manual de Normas Gráficas integral",
                "Logotipo, imagotipo y símbolo oficial",
                "Estrategia de identidad y voz de marca",
                "Sistema de color institucional y selección tipográfica",
                "Reglas de uso correcto e incorrecto del imagotipo",
                "Patrones gráficos corporativos y aplicaciones vehiculares"
            ],
            image: "assets/project_elemis.png",
            images: [
                "assets/project_elemis.png",
                "assets/project_elemis_mockup2.png",
                "assets/project_elemis_patron.png",
                "assets/project_elemis_blanco.png",
                "assets/project_elemis_negro.png"
            ]
        },
        mentholatum: {
            title: "Mentholatum Rebranding",
            category: "Proyecto Académico",
            year: "2023",
            role: "Diseñador Gráfico",
            objective: "Desarrollar un proyecto académico de rebranding para Mentholatum, reinterpretando un producto clásico y altamente memorable en el mercado a través de una nueva propuesta visual premium para su envase metálico tipo cobre.",
            challenge: "Actualizar la percepción visual de un producto sumamente tradicional de uso cotidiano sin que perdiera su carácter reconocible, equilibrando su valor de memoria colectiva con una presentación moderna y editorial.",
            solution: "Se propuso una renovación gráfica del packaging trabajando directamente sobre el envase de metal tipo cobre como centro de la identidad del producto. La propuesta simplificó elementos, reforzando la elegancia clásica del envase tradicional mediante tipografías limpias y una diagramación cuidada para exhibición contemporánea.",
            tools: ["Adobe Photoshop", "Adobe Illustrator", "Mockup Freepik"],
            deliverables: [
                "Propuesta de rebranding conceptual",
                "Diseño gráfico del envase de cobre tradicional",
                "Mockup de alta fidelidad para el empaque",
                "Piezas gráficas para exhibición y presentación"
            ],
            image: "assets/project_mentholatum.png",
            images: [
                "assets/project_mentholatum.png",
                "assets/project_mentholatum_logo.png",
                "assets/project_mentholatum_recurso2.png",
                "assets/project_mentholatum_recurso3.png"
            ]
        },
        flyer: {
            title: "Flyer Verano UA",
            category: "Cliente Real",
            year: "2026",
            role: "Diseñador Gráfico",
            objective: "Invitar a la comunidad a participar en las escuelas de verano de la Universidad de Antofagasta. El proyecto contempló dos versiones: una versión general organizada por la universidad y una versión inclusiva orientada también a públicos externos.",
            challenge: "Comunicar una gran cantidad de información comunitaria de forma atractiva, clara y legible en formatos pequeños, diferenciando con precisión ambas versiones del flyer.",
            solution: "Se diseñaron dos piezas gráficas optimizadas para redes sociales e impresión, logrando una diagramación equilibrada que facilita la lectura rápida. Se adaptaron colores y elementos vectoriales para conectar emocionalmente con la comunidad e invitar a la participación activa.",
            tools: ["Adobe Photoshop", "Adobe Illustrator", "Vectores de Difusión"],
            deliverables: [
                "Flyer digital versión general Universidad",
                "Flyer digital versión inclusiva externa",
                "Archivos maestros vectoriales listos para prensa digital"
            ],
            image: "assets/project_flyer.png",
            images: [
                "assets/project_flyer.png",
                "assets/project_flyer_general.png"
            ]
        },
        landyciss: {
            title: "LANDYCISS",
            category: "Cliente Real",
            year: "2026",
            role: "Diseñador Gráfico (Logotipo)",
            objective: "Diseñar un logotipo para la marca deportiva LANDYCISS, tomando como punto de partida el interés del cliente por el gimnasio y por dragones asociados al universo visual de Game of Thrones.",
            challenge: "Sintetizar conceptos de dragones, fuerza y corona junto con las iniciales de la marca (LC) sin saturar el isotipo, asegurando que fuera legible y fácilmente bordable o estampable en ropa deportiva.",
            solution: "Se desarrolló un logotipo altamente sintético basado en las iniciales LC integradas. El ala del dragón funciona sutilmente como una corona sobre la letra C, proyectando fuerza, elegancia and pertenencia. Su trazo cerrado y firme garantiza que la marca resista reducciones y sea ideal para prendas textiles.",
            tools: ["Adobe Illustrator", "Diseño Vectorial", "Branding Textil"],
            deliverables: [
                "Logotipo maestro en blanco y negro (positivo/negativo)",
                "Variantes cromáticas del imagotipo",
                "Mockups fotográficos aplicados en ropa deportiva",
                "Guía básica de aplicaciones de marca"
            ],
            image: "assets/project_landyciss.jpg",
            images: [
                "assets/project_landyciss.jpg",
                "assets/project_landyciss_mockup2.jpg",
                "assets/project_landyciss_mockup3.jpg",
                "assets/project_landyciss_mockup4.jpg",
                "assets/project_landyciss_blanco.png",
                "assets/project_landyciss_negro.png"
            ]
        },
        podcast: {
            title: "Lo que no se Sube",
            category: "Cliente Real",
            year: "2026",
            role: "Diseñador Gráfico (Branding)",
            objective: "Diseñar un logo e identidad visual para un podcast de un influencer en Antofagasta, orientado principalmente a su presencia en redes sociales.",
            challenge: "Representar la identidad y personalidad de los tres participantes en un único isotipo sintético, utilizando la paleta cromática definida y logrando alto impacto visual en miniatura.",
            solution: "Se creó un logotipo e identidad digital con un tono visual enérgico, moderno e informal. La tipografía y el símbolo fueron pensados específicamente para brillar en perfiles de Instagram, portadas de Spotify y miniaturas de YouTube. Su alto contraste asegura lecturas inmediatas a cualquier tamaño.",
            tools: ["Adobe Illustrator", "Adobe Photoshop", "Social Branding"],
            deliverables: [
                "Logo oficial del podcast (Variantes de color)",
                "Identidad visual y portadas para Spotify y YouTube",
                "Plantillas gráficas y elementos complementarios para redes sociales",
                "Pieza gráfica digital final de lanzamiento"
            ],
            image: "assets/project_podcast.png",
            images: [
                "assets/project_podcast.png",
                "assets/project_podcast_mockup1.png",
                "assets/project_podcast_mockup2.png",
                "assets/project_podcast_logo.jpg"
            ]
        },
        concursos: {
            title: "Concursos Aguas Antofagasta",
            category: "Cliente Real",
            year: "2025 - 2026",
            role: "Diseñador Gráfico",
            objective: "Motivar a la gente a participar en los concursos temáticos de redes sociales de Aguas Antofagasta (18 de Septiembre, Halloween y Verano), fortaleciendo la interacción con la comunidad y el uso de formatos dinámicos en Instagram.",
            challenge: "Generar alta retención de usuarios y guiar la comunicación paso a paso en Instagram, utilizando a la mascota oficial de Aguas Antofagasta para humanizar e integrar la marca.",
            solution: "Se estructuraron carruseles de Instagram detallados para guiar los pasos del concurso. Se combinó diseño vectorial limpio con generación de personajes de apoyo mediante Inteligencia Artificial (Sora AI), manteniendo a la mascota corporativa en situaciones temáticas divertidas y cercanas.",
            tools: ["Adobe Illustrator", "Sora AI", "Social Media Design"],
            deliverables: [
                "Carruseles de concurso para Instagram (Fiestas Patrias, Halloween y Verano)",
                "Diseño de piezas gráficas para interacción comunitaria",
                "Adaptación visual y temática de la mascota institucional",
                "Personajes y fondos de apoyo con Sora AI"
            ],
            image: "assets/project_aguas_18sept_1.jpg",
            images: [
                "assets/project_aguas_18sept_1.jpg",
                "assets/project_aguas_18sept_2.jpg",
                "assets/project_aguas_18sept_3.jpg",
                "assets/project_aguas_halloween_mockup.png",
                "assets/project_aguas_halloween_1.png",
                "assets/project_aguas_verano_1.png",
                "assets/project_aguas_verano_2.png"
            ]
        }
    };

    /* ==========================================
       2. TEMA CLARO / OSCURO & LOGO ADAPTATIVO
       ========================================== */
    const themeToggle = document.getElementById('theme-toggle');
    const iconDark = document.getElementById('theme-icon-dark');
    const iconLight = document.getElementById('theme-icon-light');
    const htmlElement = document.documentElement;
    const logoElements = document.querySelectorAll('.logo-img, .footer-logo-img');

    let logoDarkUrl = '';
    let logoLightUrl = '';

    const currentTheme = localStorage.getItem('theme') || 'dark';
    htmlElement.setAttribute('data-theme', currentTheme);
    updateThemeUI(currentTheme);

    // Iniciar el procesamiento del logo transparente y adaptable
    initializeAdaptiveLogo();

    themeToggle.addEventListener('click', () => {
        const activeTheme = htmlElement.getAttribute('data-theme');
        const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeUI(newTheme);
    });

    function updateThemeUI(theme) {
        if (theme === 'dark') {
            iconDark.style.display = 'block';
            iconLight.style.display = 'none';
        } else {
            iconDark.style.display = 'none';
            iconLight.style.display = 'block';
        }
        
        // Actualizar fuentes del logo si ya fueron procesadas
        if (logoDarkUrl && logoLightUrl) {
            logoElements.forEach(img => {
                img.src = theme === 'dark' ? logoDarkUrl : logoLightUrl;
            });
        }
    }

    function initializeAdaptiveLogo() {
        const img = new Image();
        img.src = 'assets/logo.png';
        img.crossOrigin = 'anonymous';
        
        img.onload = () => {
            const canvasDark = document.createElement('canvas');
            const canvasLight = document.createElement('canvas');
            const ctxDark = canvasDark.getContext('2d');
            const ctxLight = canvasLight.getContext('2d');
            
            const w = img.width;
            const h = img.height;
            canvasDark.width = w;
            canvasDark.height = h;
            canvasLight.width = w;
            canvasLight.height = h;
            
            ctxDark.drawImage(img, 0, 0);
            ctxLight.drawImage(img, 0, 0);
            
            const imgDataDark = ctxDark.getImageData(0, 0, w, h);
            const dataDark = imgDataDark.data;
            
            const imgDataLight = ctxLight.getImageData(0, 0, w, h);
            const dataLight = imgDataLight.data;
            
            for (let i = 0; i < dataDark.length; i += 4) {
                const r = dataDark[i];
                const g = dataDark[i+1];
                const b = dataDark[i+2];
                
                // Determinar luminosidad máxima para detectar el fondo negro (umbral flexible)
                const maxVal = Math.max(r, g, b);
                
                if (maxVal < 45) {
                    // Fondo negro: hacer totalmente transparente en ambos
                    dataDark[i+3] = 0;
                    dataLight[i+3] = 0;
                } else {
                    // Píxeles del logo (letras y dibujo)
                    
                    // 1. Detectar color amarillo/naranja
                    // El amarillo tiene R y G altos, B muy bajo.
                    const esAmarilloNaranja = (r > 140 && g > 100 && b < 130);
                    
                    // 2. Detectar color blanco/gris claro de las letras
                    // El blanco tiene todos los canales balanceados y altos.
                    const esBlancoGris = (r > 150 && g > 150 && b > 150);
                    
                    // Suavizado del borde del fondo para evitar bordes negros (anti-aliasing)
                    if (maxVal < 110) {
                        const alphaRatio = (maxVal - 45) / 65;
                        dataDark[i+3] = Math.floor(alphaRatio * 255);
                        dataLight[i+3] = Math.floor(alphaRatio * 255);
                    }
                    
                    // En la versión clara (Light Mode), invertimos el blanco a negro, pero dejamos el amarillo intacto
                    if (!esAmarilloNaranja && esBlancoGris) {
                        // Cambiar las letras blancas a un color oscuro elegante (#08080c)
                        dataLight[i] = 8;     // R
                        dataLight[i+1] = 8;   // G
                        dataLight[i+2] = 12;  // B
                    }
                    
                    // Si es un borde oscuro suavizado y no es amarillo, lo hacemos oscuro en modo claro para que no quede como halo negro
                    if (!esAmarilloNaranja && maxVal < 150) {
                        dataLight[i] = 8;
                        dataLight[i+1] = 8;
                        dataLight[i+2] = 12;
                    }
                }
            }
            
            ctxDark.putImageData(imgDataDark, 0, 0);
            ctxLight.putImageData(imgDataLight, 0, 0);
            
            logoDarkUrl = canvasDark.toDataURL('image/png');
            logoLightUrl = canvasLight.toDataURL('image/png');
            
            // Aplicar de inmediato según el tema actual
            const activeTheme = htmlElement.getAttribute('data-theme');
            logoElements.forEach(img => {
                img.src = activeTheme === 'dark' ? logoDarkUrl : logoLightUrl;
            });
        };
        
        img.onerror = () => {
            console.error('Error al cargar assets/logo.png para procesamiento adaptativo.');
        };
    }

    /* ==========================================
       3. CABECERA DINÁMICA & SCROLL HEADER
       ========================================== */
    const mainHeader = document.getElementById('main-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            mainHeader.classList.add('scrolled');
        } else {
            mainHeader.classList.remove('scrolled');
        }
    });

    /* ==========================================
       4. MENÚ MÓVIL COLAPSABLE
       ========================================== */
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    mobileMenuBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        const isOpened = mobileNav.classList.contains('active');
        mobileMenuBtn.innerHTML = isOpened 
            ? '<i class="fa-solid fa-xmark"></i>' 
            : '<i class="fa-solid fa-bars"></i>';
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        });
    });

    /* ==========================================
       5. FILTRADO DINÁMICO DE PROYECTOS
       ========================================== */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (filterValue === 'all' || cardCategory === filterValue) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    /* ==========================================
       6. LÓGICA DE APERTURA Y CIERRE DE MODAL PREMIUM CON CARRUSEL
       ========================================== */
    const modal = document.getElementById('project-modal');
    const closeBtn = document.getElementById('modal-close-btn');
    const modalImg = document.getElementById('modal-project-img');
    const modalCategory = document.getElementById('modal-project-category');
    const modalTitle = document.getElementById('modal-project-title');
    const modalYear = document.getElementById('modal-project-year');
    const modalRole = document.getElementById('modal-project-role');
    const modalObjective = document.getElementById('modal-project-objective');
    const modalChallenge = document.getElementById('modal-project-challenge');
    const modalSolution = document.getElementById('modal-project-solution');
    const modalToolsContainer = document.getElementById('modal-project-tools');
    const modalDeliverablesContainer = document.getElementById('modal-project-deliverables');
    const modalWhatsappBtn = document.getElementById('modal-whatsapp-btn');

    // Elementos de la Galería Carrusel Premium
    const modalPrevBtn = document.getElementById('modal-prev-btn');
    const modalNextBtn = document.getElementById('modal-next-btn');
    const modalDotsContainer = document.getElementById('modal-dots');
    const modalVisualBlur = document.getElementById('modal-visual-blur');

    let currentProjectImages = [];
    let currentImageIndex = 0;

    // Función para actualizar la imagen del carrusel con animación suave
    function updateModalImage(index) {
        if (!currentProjectImages || currentProjectImages.length === 0) return;

        // Limitar / Rotar el índice
        currentImageIndex = (index + currentProjectImages.length) % currentProjectImages.length;
        const newSrc = currentProjectImages[currentImageIndex];

        // Fade-out suave
        modalImg.style.opacity = '0';

        // Cambiar la imagen y el fondo difuminado al mismo tiempo
        setTimeout(() => {
            modalImg.src = newSrc;
            if (modalVisualBlur) {
                modalVisualBlur.style.backgroundImage = `url('${newSrc}')`;
            }
            
            // Fade-in cuando se carga la imagen o fallback rápido
            modalImg.onload = () => {
                modalImg.style.opacity = '1';
            };
            
            // Actualizar puntos de navegación activos
            const dots = modalDotsContainer.querySelectorAll('.modal-dot');
            dots.forEach((dot, idx) => {
                if (idx === currentImageIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }, 150);
    }

    // Botones de exploración de proyectos
    const exploreButtons = document.querySelectorAll('.btn-project-view');

    exploreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const projectKey = button.getAttribute('data-project');
            const data = projectsData[projectKey];

            if (data) {
                // Configurar datos de la galería
                currentProjectImages = data.images || [data.image] || [];
                currentImageIndex = 0;

                // Inyectar datos iniciales en el Modal
                modalImg.src = data.image;
                modalImg.alt = data.title;
                modalImg.style.opacity = '1'; // Asegurar que sea visible
                
                if (modalVisualBlur) {
                    modalVisualBlur.style.backgroundImage = `url('${data.image}')`;
                }

                modalCategory.innerText = data.category;
                modalTitle.innerText = data.title;
                modalYear.innerText = data.year;
                modalRole.innerText = data.role;
                modalObjective.innerText = data.objective;
                modalChallenge.innerText = data.challenge;
                modalSolution.innerText = data.solution;

                // Cargar Herramientas
                modalToolsContainer.innerHTML = '';
                data.tools.forEach(tool => {
                    const span = document.createElement('span');
                    span.className = 'tech-tag';
                    span.innerText = tool;
                    modalToolsContainer.appendChild(span);
                });

                // Cargar Entregables
                modalDeliverablesContainer.innerHTML = '';
                data.deliverables.forEach(item => {
                    const li = document.createElement('li');
                    li.innerText = item;
                    modalDeliverablesContainer.appendChild(li);
                });

                // Generar dinámicamente los puntos del carrusel si hay más de 1 imagen
                modalDotsContainer.innerHTML = '';
                if (currentProjectImages.length > 1) {
                    currentProjectImages.forEach((img, idx) => {
                        const dot = document.createElement('div');
                        dot.className = 'modal-dot';
                        if (idx === 0) dot.classList.add('active');
                        dot.addEventListener('click', () => {
                            updateModalImage(idx);
                        });
                        modalDotsContainer.appendChild(dot);
                    });
                    modalPrevBtn.style.display = 'flex';
                    modalNextBtn.style.display = 'flex';
                    modalDotsContainer.style.display = 'flex';
                } else {
                    modalPrevBtn.style.display = 'none';
                    modalNextBtn.style.display = 'none';
                    modalDotsContainer.style.display = 'none';
                }

                // Enlace a WhatsApp dentro del modal
                const whatsappText = `Hola Alexander, vi tu proyecto de "${data.title}" en tu portafolio y me interesa cotizar algo similar para mi marca.`;
                modalWhatsappBtn.href = `https://wa.me/56942543637?text=${encodeURIComponent(whatsappText)}`;

                // Activar Modal con animación
                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Detener scroll de fondo
            }
        });
    });

    // Controladores de flechas para navegar en el carrusel
    modalPrevBtn.addEventListener('click', () => {
        updateModalImage(currentImageIndex - 1);
    });

    modalNextBtn.addEventListener('click', () => {
        updateModalImage(currentImageIndex + 1);
    });

    // Cerrar Modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restaurar scroll
    }

    closeBtn.addEventListener('click', closeModal);

    // Cerrar al hacer click fuera de la tarjeta modal
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Cerrar con tecla Escape
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    /* ==========================================
       7. REVELADO SUAVE EN SCROLL (INTERSECTION OBSERVER)
       ========================================== */
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(element => {
        sectionObserver.observe(element);
    });

    /* ==========================================
       8. FORMULARIO DE CONTACTO PREMIUM
       ========================================== */
    const contactForm = document.getElementById('contact-form');
    const formStatusMsg = document.getElementById('form-status-msg');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('.btn-submit');
        const originalBtnHTML = submitBtn.innerHTML;

        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Enviando... <i class="fa-solid fa-spinner fa-spin"></i>';
        formStatusMsg.style.color = 'var(--text-secondary)';
        formStatusMsg.innerText = 'Procesando tu consulta en Adesign...';

        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnHTML;
            
            formStatusMsg.style.color = '#22c55e';
            formStatusMsg.innerHTML = '<i class="fa-solid fa-circle-check"></i> ¡Mensaje enviado con éxito! También puedes hacer click en el botón superior de WhatsApp para una respuesta inmediata.';
            
            contactForm.reset();
            
            setTimeout(() => {
                formStatusMsg.innerText = '';
            }, 7000);

        }, 1800);
    });

    /* ==========================================
       9. ENLACES ACTIVOS DURANTE EL SCROLL
       ========================================== */
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= (sectionTop - 130)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    /* ==========================================
       10. LUPA MAGNIFIER EN MODAL
       ========================================== */
    const lens = document.createElement('div');
    lens.className = 'img-lens';
    lens.id = 'img-lens';
    document.querySelector('.modal-visual').appendChild(lens);

    const modalVisualEl = document.querySelector('.modal-visual');

    modalVisualEl.addEventListener('mousemove', (e) => {
        const img = document.getElementById('modal-project-img');
        if (!img || !img.src || img.style.opacity === '0') {
            lens.style.display = 'none';
            return;
        }

        const rect = img.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
            lens.style.display = 'none';
            modalVisualEl.classList.remove('lens-active');
            return;
        }

        const lensW = 220;
        const lensH = 160;
        const zoomFactor = 3.5;

        lens.style.display = 'block';
        modalVisualEl.classList.add('lens-active');

        const containerRect = modalVisualEl.getBoundingClientRect();
        lens.style.left = (e.clientX - containerRect.left - lensW / 2) + 'px';
        lens.style.top  = (e.clientY - containerRect.top  - lensH / 2) + 'px';

        lens.style.backgroundImage    = `url('${img.src}')`;
        lens.style.backgroundSize     = `${rect.width * zoomFactor}px ${rect.height * zoomFactor}px`;
        lens.style.backgroundPosition =
            `-${x * zoomFactor - lensW / 2}px -${y * zoomFactor - lensH / 2}px`;
    });

    modalVisualEl.addEventListener('mouseleave', () => {
        lens.style.display = 'none';
        modalVisualEl.classList.remove('lens-active');
    });

});
