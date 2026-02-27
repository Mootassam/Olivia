
import Withdraw from "src/view/pages/withdraw/Withdraw";


const es = {
  app: {
    title: "GoToMarketersers"
  },
  inputs: {
    username: "Nombre de usuario",
    password: "Contraseña",
    phoneNumber: "Número de teléfono",
    withdrawPassword: "Contraseña de retiro",
    confirmPassword: "Confirmar contraseña",
    invitationcode: "Código de invitación",
    walletaddress: "Dirección de billetera"
  },

  pages: {
    home: {
      levels: "Niveles VIP",
      chooseLevel: "Elige tu nivel para maximizar tus ganancias",
      welcome: "Bienvenido",
      announcement: "Estimados usuarios, la plataforma GoToMarketersers ha vuelto a la normalidad y a su mejor estado, continúen ganando tanto como puedan desde la plataforma",

      // Action Buttons
      services: "Servicios",
      events: "Eventos",
      about: "Acerca de",
      terms: "Términos",
      certificate: "Certificado",
      faqs: "Preguntas Frecuentes",

      // VIP Level Cards
      currentLevel: "Actual",
      upgrade: "Actualizar",
      profitNormal: "ganancia en productos normales",
      profitPremium: "ganancia en productos premium",
      maxOrders: "Máximo de pedidos por día",

      // Modal
      modal: {
        levelDetails: "Detalles del Nivel",
        levelLimit: "Límite del Nivel",
        dailyOrders: "Pedidos Diarios",
        commissionRate: "Tasa de Comisión",
        cancel: "Cancelar",
        upgradeNow: "Actualizar Ahora"
      }
    },

    prizeModal: {
      congratulations: "¡Felicidades!",
      spinning: "Girando...",
      prizeWon: "¡Has ganado!",
      currency: "USD",
      prizeBreakdown: "Desglose del Premio",
      totalAmount: "Cantidad Total",
      yourWinnings: "Tus Ganancias",
      claimPrize: "Reclamar Premio",
      celebrationMessage: "¡Disfruta tu recompensa!",
    },

    tabBottomNavigator: {
      home: "Inicio",
      grap: "Capturar",
      records: "Registros",
      starting: "Comenzar"
    },
    transaction: {
      title: "Historial de Transacciones",
      filters: {
        all: "Todas",
        withdraw: "Retiro",
        deposit: "Depósito"
      },
      recentTransactions: "Transacciones Recientes",
      transactionCount: "{0} transacciones",
      types: {
        deposit: "Depósito",
        withdrawal: "Retiro"
      },
      status: {
        completed: "Completado",
        processing: "Procesando",
        canceled: "Cancelado"
      },
      amount: {
        deposit: "+${0}",
        withdraw: "-${0}",
        canceled: "${0}"
      }
    },

    profile: {
      title: "Perfil",
      invitationCode: "Código de Invitación",
      creditScore: "Puntuación de Crédito",
      balance: "Saldo",
      todayProfit: "Ganancia de Hoy",
      frozenAmount: "Monto Congelado",
      usd: "USD",

      // Menu Sections
      myFinancial: "Mis Finanzas",
      myDetails: "Mis Detalles",
      other: "Otro",

      // Financial Items
      recharge: "Recargar",
      withdraw: "Retirar",

      // Details Items
      contactUs: "Contáctenos",
      profile: "Perfil",
      updateWithdrawal: "Actualizar detalles de retiro",

      // Other Items
      transaction: "Transacción",
      tasksHistory: "Historial de Tareas",
      security: "Seguridad",
      notifications: "Notificaciones",
      languages: "Idiomas",
      bindAccount: "Vincular cuenta",
      details: "Detalles",
      officialWebsite: "Entrada al sitio oficial",
      changeLoginPassword: "Cambiar contraseña de inicio de sesión",
      changeWithdrawPassword: "Cambiar contraseña de retiro",
      mainFunction: "Función principal",
      otherFunction: "Otras funciones",
      uid: "UID",

      // Buttons
      logout: "Cerrar Sesión",
      confirm: "Confirmar",
      copied: "Copiado",

      // Modals
      rechargeModal: {
        title: "Recarga",
        text: "Por favor contacte al servicio al cliente para recargar"
      },
      withdrawModal: {
        title: "Retiro",
        text: "Por favor contacte al servicio al cliente para proceder con su retiro."
      },
      reputation: {
        title: "Reglas de reputación",
        description: "Cada cuenta tiene un sistema de reputación basado en el desempeño del miembro. Si completas las tareas diarias y mantienes una buena reputación, tu puntaje mejorará. Si no cumples los plazos, tu puntaje disminuirá. Si tu reputación cae por debajo del 80%, el sistema bloqueará los retiros. Para cualquier consulta, contacta con atención al cliente."
      }
    },

    team: {
      title: "Perfil",
      personalInformation: "Información Personal",
      accountDetails: "Los detalles de tu cuenta e información personal",

      // Info Items
      fullName: "Nombre Completo",
      email: "Correo Electrónico",
      phoneNumber: "Número de Teléfono",
      country: "País",
      gender: "Género",
      invitationCode: "Código de Invitación",

      // Gender Values
      genderNotSpecified: "No especificado",

      // Placeholders
      notAvailable: "—"
    },

    language: {
      title: "Idioma de la App",
      selectLanguage: "Seleccionar Idioma",
      choosePreferred: "Elige tu idioma preferido",
      searchPlaceholder: "Buscar idiomas...",
      currentLanguage: "Idioma Actual",

      // Language names (if needed for dynamic content)
      languages: {
        english: "Inglés",
        french: "Francés",
        russian: "Ruso",
        german: "Alemán",
        spanish: "Español"
      },
      nativeNames: {
        english: "English",
        french: "Français",
        russian: "Русский",
        german: "Deutsch",
        spanish: "Español"
      }
    },

    online: {
      title: "Servicio al Cliente",
      description: "Si tienes alguna pregunta o encuentras problemas, por favor envíanos un correo electrónico o chatea con nuestro equipo de soporte al cliente en línea.",
      contactWhatsApp: "Contactar por WhatsApp",
      contactTelegram: "Contactar por Telegram"
    },

    notifications: {
      title: "Notificaciones",
      filters: {
        all: "Todas",
        deposit: "Depósito",
        withdraw: "Retiro"
      },
      unreadCount: "{0} no leídas",
      emptyState: {
        title: "No se encontraron notificaciones",
        description: "Aún no tienes notificaciones {0}."
      },

      // Notification Types
      types: {
        deposit_success: "Depósito Exitoso",
        deposit_canceled: "Depósito Cancelado",
        withdraw_success: "Retiro Exitoso",
        withdraw_canceled: "Retiro Cancelado",
        system: "Notificación del Sistema",
        alert: "Alerta Importante",
        default: "Notificación"
      },

      // Notification Messages
      messages: {
        deposit_success: "Tu depósito de ${0} se ha completado exitosamente.",
        deposit_canceled: "Tu solicitud de depósito de ${0} ha sido cancelada.",
        withdraw_success: "Tu retiro de ${0} se ha completado exitosamente.",
        withdraw_canceled: "Tu solicitud de retiro de ${0} ha sido cancelada.",
        system: "Notificación del sistema",
        alert: "Notificación de alerta importante",
        default: "Actualización de notificación"
      },

      // Status
      status: {
        unread: "no leída",
        read: "leída"
      }
    },

    portfolio: {
      // Status Tabs
      completed: "Completados",
      pending: "Pendientes",
      canceled: "Cancelados",

      // Order Information
      orderTime: "Hora del Pedido",
      orderNumber: "Número de Pedido",
      totalOrderAmount: "Monto total del pedido",
      commission: "Comisión",
      estimatedReturn: "Retorno estimado",

      // Product Details
      quantity: "X 1",
      currency: "USD",

      // Status Labels
      status: {
        completed: "Completado",
        pending: "Pendiente",
        canceled: "Cancelado"
      },
      submit: "Enviar"
    },

    changePassword: {
      title: "Cambiar Contraseña",
      withdrawPassword: "Cambiar contraseña de retiro",
      header: "Cambiar Contraseña",
      oldPassword: "Contraseña Antigua",
      newPassword: "Nueva Contraseña",
      confirmPassword: "Confirmar Contraseña",
      submit: "Enviar",
      note: "Por favor completa esta información cuidadosamente",
      requiredField: "*"
    },

    withdraw: {
      title: "Retiro",
      announcement: "El monto mínimo de retiro es de €50. Todos los retiros se procesan en 24 horas.",
      withdrawAmount: "Monto del Retiro",
      withdrawPassword: "Contraseña de Retiro",
      availableBalance: "Saldo disponible",
      confirm: "Confirmar",
      rulesDescription: "Descripción de Reglas",
      rules: {
        minimum: "(1) El retiro mínimo es de 100 USD",
        paymentTime: "(2) El pago se realizará dentro de la próxima hora, después de que se apruebe la solicitud de retiro.",
        orderCompletion: "(3) El envío incompleto de pedidos diarios está sujeto a ningún retiro, todos los productos deben enviarse para retiro"
      },
      amountPlaceholder: "Ingrese monto (mín. €50)",
      selectMethod: "Seleccionar método de retiro",
      methods: {
        crypto: "Criptomoneda",
        bank: "Transferencia bancaria",
        cryptoNetworks: "TRC20 | ERC20",
        bankNetworks: "IBAN | SWIFT"
      },
      status: {
        complete: "✓ Completo",
        incomplete: "⚠ Incompleto"
      },
      withdrawingTo: "Retirando a:",
      withdrawPasswordPlaceholder: "Ingrese su contraseña de retiro",
      bankModal: {
        title: "Datos bancarios incompletos",
        required: "Se requieren datos bancarios",
        description: "Por favor complete sus datos bancarios antes de realizar un retiro:"
      },
      cryptoModal: {
        title: "Datos cripto incompletos",
        required: "Se requieren datos de criptomonedas",
        description: "Por favor complete sus datos de criptomonedas antes de realizar un retiro:"
      },
      goToBindAccount: "Ir a Vincular Cuenta",
      completeDetailsIn: "Complete sus datos de retiro en",
      enableAllOptions: "para habilitar todas las opciones de retiro.",
      validation: {
        selectMethod: "Por favor seleccione un método de retiro"
      }
    },

    wallet: {
      title: "Billetera",
      withdrawalMethod: "Información del método de retiro",
      username: "Nombre de Usuario",
      walletName: "Nombre de Billetera",
      choosePreferredCoin: "Elige la moneda preferida",
      walletAddress: "Dirección de Billetera",
      withdrawPassword: "Contraseña de Retiro",
      submit: "Enviar",
      note: "Por favor ten cuidado al completar esta información",
      requiredField: "*"
    },

    grab: {
      title: "Valorar y alojarse",
      description: "Search Off the Record te lleva detrás de escena de GoToMarketers Search. Cada episodio revela cómo ayudamos a las personas a calificar y descubrir hoteles desde casa.",
      seeAllReviews: "Ver todas las reseñas",
      searchNow: "Buscar ahora",
      errors: {
        insufficientBalance: "Saldo insuficiente. Recarga tu cuenta para continuar."
      },
      messages: {
        completedTasks: "Has completado todas las tareas disponibles. Contacta al soporte para reiniciar tu cuenta."
      },
      stats: {
        myAssets: "Mis activos",
        earnings: "Ganancias",
        tasksDone: "Tareas realizadas",
        onHold: "En espera"
      },
      // Header Section
      greeting: "Hola {0} 👏",

      // Stats Cards
      totalAmount: "Monto Total",
      profitsAdded: "Las ganancias se agregarán aquí",
      todaysCommission: "Comisión de Hoy",
      commissionEarned: "Comisión Ganada",
      currency: "USD",

      // Optimization Section
      startOptimization: "Iniciar Optimización",
      progressCount: "{0}/{1}",

      // Game Section
      commissionRate: "Tasa de Comisión",
      exclusiveChannel: "Canal exclusivo para miembros exclusivos",
      startButton: "Iniciar",
      processing: "Procesando...",

      // Notice Section
      notice: "Aviso",
      supportHours: "Horario de Soporte en Línea 10:00 - 22:00",
      contactSupport: "¡Por favor contacta al soporte en línea para tu asistencia!"
    },
    grap: {
      rateModal: {
        title: "Califica tu experiencia",
        label: {
          tapToRate: "Toca para calificar",
          poor: "Pobre",
          fair: "Regular",
          good: "Bueno",
          veryGood: "Muy bueno",
          excellent: "Excelente"
        },
        selectOptions: "Selecciona tus opciones de comentario",
        more: "más",
        submit: "Enviar reseña",
        options: {
          0: "Las habitaciones estaban limpias, muy cómodas y el personal increíble",
          1: "Estuvo genial. Servicio de primera como siempre",
          2: "¡El personal de esta propiedad es excelente! Hacen todo lo posible para que tu estadía sea cómoda",
          3: "Tuve una experiencia maravillosa aquí",
          4: "La comida fue excelente con muchas opciones para elegir",
          5: "Hotel excelente con ubicación excelente en el centro",
          6: "Muy céntrico, habitaciones cómodas y aire acondicionado increíble. El desayuno delicioso y el personal muy servicial y amable"
        }
      },
      modal: {
        productName: "Nombre del producto",
        positiveReviews: "reseñas positivas"
      }
    },

    grapModal: {
      orderTime: "Hora del Pedido",
      orderNumber: "Número de Pedido",
      totalOrderAmount: "Monto total del pedido",
      commission: "Comisión",
      estimatedReturn: "Retorno estimado",
      cancel: "Cancelar",
      submit: "Enviar",
      quantity: "X 1",
      currency: "USD"
    },
    marketsHome: {
      heroTitle: "🌙 Encuentra tu calma",
      heroSubtitle: "Hoteles de lujo · retiros privados",
      search: {
        destinationPlaceholder: "Destino, ciudad, hotel",
        checkIn: "Check-in",
        checkOut: "Check-out",
        guestsPlaceholder: "2 adultos · 0 niños",
        goToSearch: "Ir a la búsqueda",
        flexibleNote: "¿Fechas flexibles? · Mejor precio"
      },
      sections: {
        dreamEscapesTitle: "📸 Escapadas de ensueño",
        exploreAll: "Explorar todo",
        topPicksTitle: "✨ Recomendaciones para ti",
        viewAll: "Ver todo"
      },
      features: {
        freeWifi: "WiFi gratis",
        support: "Soporte 24/7",
        secure: "Seguro",
        bestRate: "Mejor tarifa"
      },
      footerTagline: "✦ Reserva ahora, relájate después · Sin tarifas ocultas ✦"
    },
    activities: {
      title: "Actividades",
      subtitle: "La promoción está en pleno auge, ¡ven y únete!"
    },
    help: {
      title: "Centro de Ayuda",
      footer: "Para más ayuda, contacta a nuestro soporte al cliente en línea.",
      accordion: {
        specialOrders: {
          title: "Sobre los pedidos especiales",
          content: "<p><strong>¿Qué es un \"Pedido de hotel especial\"?</strong></p><p>Son beneficios exclusivos ofrecidos por X Business con hoteles de lujo seleccionados. Son poco comunes y solo están disponibles para miembros VIP de alto nivel.</p><p>Los miembros VIP pueden recibir recompensas Mystery Box que incluyen premios en efectivo y Pedidos Especiales, con comisiones de 30 a 50 veces la tarifa estándar.</p>"
        },
        platformRegulations: {
          title: "Reglamento de la plataforma",
          content: "<p>Para realizar pedidos de hotel, ve a la página correspondiente y haz clic en \"Buscar\". Espera a que aparezca un pedido adecuado y complétalo. Completar y retirar un pedido de hotel suele tardar <strong>30 minutos</strong>.</p><p>Todos los pedidos se asignan aleatoriamente por el motor de emparejamiento de la plataforma y <strong>no pueden modificarse, cancelarse ni saltarse</strong>.</p><p>Para pedidos de diferentes comercios, si pasan más de <strong>15 minutos</strong> sin completar el depósito, debes contactar al soporte y confirmar los datos de la cuenta de depósito.</p><p>La plataforma opera diariamente de <strong>9:00 a 21:00</strong>; los miembros pueden enviar pedidos durante este horario.</p><p>Si tu cuenta es mal utilizada o accedida por otra persona, contacta al soporte inmediatamente.</p><p>Si realizas un pedido de publicidad, una vez recibido, contacta al soporte para verificar el depósito y luego pulsa <strong>\"Enviar\"</strong> en la orden para completar el <strong>Pedido Premium</strong>.</p><p>Si retiras más de 40.000 AED, se requiere una <strong>tasa de auditoría</strong> para verificación; podrá retirarse <strong>una hora después de completarse</strong>.</p>"
        },
        deposits: {
          title: "Sobre los depósitos",
          content: "<p>Realiza depósitos desde tu cuenta personal. Pulsa \"Recargar\" y elige el agente. Usa los datos de depósito proporcionados y envía el comprobante cuando esté hecho.</p><p>Si hay problemas durante el depósito, contacta al soporte en línea.</p><p>Por el alto volumen, verifica la cuenta de depósito de la plataforma antes de pagar; cambia a diario.</p><p><strong>Nota:</strong> Deposita solo si tu saldo es menor al precio del pedido.</p>"
        },
        withdrawals: {
          title: "Sobre los retiros",
          content: "<p>Tras completar tus tareas diarias, puedes solicitar retiro (mínimo 40 AED). Asegúrate de tener vinculada tu información de retiro.</p><p>Pulsa \"Retirar\", ingresa el monto y tu contraseña de retiro. Normalmente se acredita en 30 minutos, según el banco.</p><p><strong>Horario:</strong> de <strong>9:00 a 21:00</strong> todos los días.</p>"
        },
        luxuryOrders: {
          title: "Sobre los pedidos de lujo",
          content: "<p><strong>¿Qué es un \"Pedido de hotel de lujo\"?</strong></p><p>Son campañas publicitarias en plataformas de reservas para aumentar marca y clientes.</p><p>Benefician a todos los miembros con comisiones de 10 a 30 veces el monto original.</p><p>Los agentes suelen recibir entre 0 y 2 pedidos de lujo al día.</p><p><strong>Nota:</strong> Si recibes un pedido de lujo, debes completarlo; los ajustes se reflejarán en tu cuenta.</p>"
        }
      }
    },
    tasks: {
      title: "Tareas",
      tabs: {
        all: "Todas",
        pending: "Pendientes",
        completed: "Completadas",
        canceled: "Canceladas"
      }
    },
    bindAccount: {
      title: "Vincular cuenta",
      currentBankTitle: "Tarjeta bancaria vinculada actualmente",
      bank: "BANCO",
      cryptoTitle: "Red de criptomonedas",
      cryptoLabel: "USDT (TRC20/ERC20)",
      popular: "Popular"
    },
    bankDetails: {
      title: "Vinculación de tarjeta bancaria"
    },
    search: {
      placeholder: "Buscar"
    },
    vip: {
      title: "Niveles VIP",
      subtitle: "Elige tu nivel de membresía y desbloquea beneficios exclusivos",
      backToHome: "Volver al inicio",
      searchPlaceholder: "Buscar niveles VIP...",
      noResults: "No se encontraron niveles VIP",
      noResultsDesc: "Intenta ajustar tus términos de búsqueda",
      currentLevel: "Nivel actual",
      upgrade: "Mejorar",
      locked: "Bloqueado",
      currentlyOn: "Actualmente en",
      upgradeTo: "Mejorar a",
      levelDetails: "Detalles del nivel",
      levelLimit: "Límite del nivel",
      dailyOrders: "Pedidos diarios",
      setperday: "Conjuntos por día",
      commissionRate: "Tasa de comisión",
      premiumCommission: "Comisión Premium",
      maxOrders: "Órdenes máximas",
      commission: "Comisión",
      benefits: "Beneficios",
      cancel: "Cancelar",
      upgradeNow: "Mejorar ahora",
      upgrading: "Actualizando...",
      level: "Nivel VIP",
      pointPeriod: "Período de puntos: {0} días",
      modal: {
        alreadyMember: "Ya eres miembro de este nivel VIP.",
        contactSupportMessage: "Por favor contacta al soporte para mejorar tu VIP.",
        contactSupport: "Contactar soporte"
      }
    },
    invitation: {
      teamAmount: "Cantidad del equipo",
      stats: {
        dailyInvitations: "Invitaciones diarias",
        monthlyInvitations: "Invitaciones mensuales",
        monthlyIncome: "Ingresos mensuales"
      },
      rulesButton: "Reglas de actividad Invitar amigos",
      newAgents: "Nuevos agentes",
      table: {
        memberId: "ID de Miembro",
        recharge: "Recargar",
        withdraw: "Retirar"
      },
      noMoreData: "No hay más datos",
      modal: {
        title: "Invita amigos y gana",
        referralCodeLabel: "Tu código de referencia:",
        copy: "Copiar",
        shareLabel: "Comparte tu código de referencia:"
      },
      notAllowed: {
        title: "Acceso restringido",
        message: "No tienes permitido invitar usuarios en este momento.",
        submessage: "El sistema de referidos está deshabilitado actualmente para tu cuenta. Por favor contacta a soporte para más información o para solicitar acceso.",
        contactSupport: "Contactar soporte",
        gotIt: "Entendido"
      }
    },

    actions: {
      event: "Eventos",
      tc: "Términos y Condiciones",
      certificate: "Certificado",
      faq: "Preguntas Frecuentes",
      company: "Empresa"
    },

    auth: {
      signin: {
        welcomeBack: "¡Bienvenido de nuevo!",
        signinToAccount: "Inicia sesión en tu cuenta de marketing",
        signinButton: "Iniciar Sesión",
        noAccount: "¿No tienes una cuenta?",
        signupHere: "Regístrate aquí."
      },
      signup: {
        createAccount: "Crear Cuenta",
        signupForAccount: "Regístrate para una cuenta de marketing",
        signupButton: "Registrarse",
        alreadyHaveAccount: "¿Ya tienes una cuenta?",
        phonePlaceholder: "Ingresa tu número de teléfono",
        searchCountries: "Buscar países..."
      }
    },

    csPage: {
      customerSupport: "Servicio al Cliente",
      hereToHelp: "¡Estamos aquí para ayudarte!",
      howCanWeHelp: "¿Cómo podemos ayudarte hoy?",
      platformNames: {
        whatsapp: "WhatsApp",
        telegram: "Telegram"
      }
    },
  },

  entities: {
    record: {
      menu: "Registros",
      fields: {
        user: "usuario",
        product: "producto",
        number: "Número de registro",
        status: "estado",
      },
      list: {
        title: "Lista de registros",
      },
      view: {
        title: "Detalle del Registro",
      },
      edit: {
        title: "Editar Registro",
      },
      create: {
        success: "Producto enviado exitosamente.",
      },
      update: {
        success: "Producto enviado exitosamente.",
      },
      destroy: {
        success: "Registro eliminado exitosamente",
      },
      destroyAll: {
        success: "Registro eliminado exitosamente",
      },
      enumerators: {
        status: {
          pending: "Pendiente",
          completed: "Completado",
          canceled: "Cancelado",
        },
      },
    },

    category: {
      name: "categoría",
      label: "Categorías",
      menu: "Categorías",
      exporterFileName: "categoria_exportacion",
      list: {
        menu: "Categorías",
        title: "Categorías",
      },
      create: {
        success: "Categoría guardada exitosamente",
      },
      update: {
        success: "Categoría guardada exitosamente",
      },
      destroy: {
        success: "Categoría eliminada exitosamente",
      },
      destroyAll: {
        success: "Categoría(s) eliminada(s) exitosamente",
      },
      edit: {
        title: "Editar Categoría",
      },
      fields: {
        id: "Id",
        name: "Nombre",
        slug: "Slug",
        photo: "Foto",
        metaKeywords: "MetaKeywords",
        metaDescriptions: "MetaDescriptions",
        status: "Estado",
        isFeature: "Es Destacado",
        serialRange: "Serial",
        serial: "Serial",
        createdAt: "Creado en",
        updatedAt: "Actualizado en",
        createdAtRange: "Creado en",
      },
      enumerators: {
        status: {
          enable: "Habilitar",
          disable: "Deshabilitar",
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: "Nueva Categoría",
      },
      view: {
        title: "Ver Categoría",
      },
      importer: {
        title: "Importar Categorías",
        fileName: "plantilla_importacion_categoria",
        hint: "Las columnas de Archivos/Imágenes deben ser las URL de los archivos separadas por espacio.",
      },
    },

    product: {
      name: "producto",
      label: "Productos",
      menu: "Productos",
      exporterFileName: "producto_exportacion",
      list: {
        menu: "Productos",
        title: "Productos",
      },
      create: {
        success: "Producto guardado exitosamente",
      },
      update: {
        success: "Producto guardado exitosamente",
      },
      destroy: {
        success: "Producto eliminado exitosamente",
      },
      destroyAll: {
        success: "Producto(s) eliminado(s) exitosamente",
      },
      edit: {
        title: "Editar Producto",
      },
      fields: {
        id: "Id",
        name: "Nombre",
        slug: "Slug",
        tags: "Etiquetas",
        video: "Video",
        specificationName: "Nombre de Especificación",
        specificationDesciption: "Descripción de Especificación",
        isSpecification: "Es Especificación",
        details: "Detalles",
        photo: "Foto",
        discountPriceRange: "Precio de Descuento",
        discountPrice: "Precio Actual",
        previousPriceRange: "Precio Anterior",
        previousPrice: "Precio Anterior",
        stockRange: "Inventario",
        stock: "Inventario",
        metaKeywords: "MetaKeywords",
        metaDesctiption: "Descripción Corta",
        status: "Estado",
        isType: "Tipo",
        dateRange: "Fecha",
        date: "Fecha",
        itemType: "Tipo de Artículo",
        file: "Archivo",
        link: "Enlace",
        fileType: "Tipo de Archivo",
        taxe: "Impuesto",
        category: "Categoría",
        subcategory: "Sub Categoría",
        childcategory: "Categoría Infantil",
        brand: "Marca",
        gallery: "Galería",
        createdAt: "Creado en",
        updatedAt: "Actualizado en",
        createdAtRange: "Creado en",
      },
      enumerators: {
        status: {
          enable: "Habilitar",
          disable: "Deshabilitar",
        },
        itemType: {
          physical: "Físico",
          digitale: "Digital",
        },
        fileType: {
          file: "Archivo",
          link: "Enlace",
        },
        isType: {
          new_arrival: "Nueva Llegada",
          feature_product: "Producto Destacado",
          top_pdroduct: "Producto Principal",
          best_product: "Mejor Producto",
          flash_deal_product: "Producto de Oferta Flash",
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: "Nuevo Producto",
      },
      view: {
        title: "Ver Producto",
      },
      importer: {
        title: "Importar Productos",
        fileName: "plantilla_importacion_producto",
        hint: "Las columnas de Archivos/Imágenes deben ser las URL de los archivos separadas por espacio.",
      },
    },
    transaction: {
      name: "transacción",
      label: "Transacciones",
      menu: "Transacciones",
      exporterFileName: "transaccion_exportacion",
      list: {
        menu: "Transacciones",
        title: "Transacciones",
      },
      create: {
        success: "Transacción enviada exitosamente",
      },
      update: {
        success: "Transacción guardada exitosamente",
      },
      destroy: {
        success: "Transacción eliminada exitosamente",
      },
      destroyAll: {
        success: "Transacción(es) eliminada(s) exitosamente",
      },
      edit: {
        title: "Editar Transacción",
      },
      fields: {
        id: "Id",
        accountHolder: "Titular de la cuenta",
        ibanNumber: "Número IBAN",
        bankName: "Nombre del banco",
        ifscCode: "Código IFSC",
        amountRange: "Monto",
        amount: "Monto",
        email: "Correo Electrónico",
        tax: "Impuesto",
        currencySign: "Signo de Moneda",
        currencyValue: "Valor de Moneda",
        orderId: "Id de Pedido",
        createdAt: "Creado en",
        updatedAt: "Actualizado en",
        createdAtRange: "Creado en",
      },
      enumerators: {
        status: {
          pending: "Pendiente",
          completed: "Éxito",
          canceled: "Cancelado",
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: "Nueva Transacción",
      },
      view: {
        title: "Ver Transacción",
      },
      importer: {
        title: "Importar Transacciones",
        fileName: "plantilla_importacion_transaccion",
        hint: "Las columnas de Archivos/Imágenes deben ser las URL de los archivos separadas por espacio.",
      },
    },

    order: {
      name: "pedido",
      label: "Pedidos",
      menu: "Pedidos",
      exporterFileName: "pedido_exportacion",
      list: {
        menu: "Pedidos",
        title: "Pedidos",
      },
      create: {
        success: "Pedido guardado exitosamente",
      },
      update: {
        success: "Pedido guardado exitosamente",
      },
      destroy: {
        success: "Pedido eliminado exitosamente",
      },
      destroyAll: {
        success: "Pedido(s) eliminado(s) exitosamente",
      },
      edit: {
        title: "Editar Pedido",
      },
      fields: {
        id: "Id",
        userId: "Usuario",
        cart: "Carrito",
        shipping: "Envío",
        discountRange: "Descuento",
        discount: "Descuento",
        paymentMethod: "Método de Pago",
        taxe: "Impuesto",
        transactionNumber: "Número de Transacción",
        orderStatus: "Estado del Pedido",
        createdAt: "Creado en",
        updatedAt: "Actualizado en",
        createdAtRange: "Creado en",
      },
      enumerators: {
        orderStatus: {
          pending: "Pendiente",
          in_progress: "En Progreso",
          delivered: "Entregado",
          canceled: "Cancelado",
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: "Nuevo Pedido",
      },
      view: {
        title: "Ver Pedido",
      },
      importer: {
        title: "Importar Pedidos",
        fileName: "plantilla_importacion_pedido",
        hint: "Las columnas de Archivos/Imágenes deben ser las URL de los archivos separadas por espacio.",
      },
    },
  },

  user: {
    fields: {
      genre: "Género",
      username: "Nombre de usuario",
      walletName: "Nombre de billetera",
      id: "Id",
      confirmPassword: "Confirmar contraseña",
      avatars: "Avatar",
      invitationcode: "Código de invitación",
      email: "Correo electrónico",
      emails: "Correo(s) electrónico(s)",
      erc20: "Dirección de billetera ERC20",
      trc20: "Dirección de billetera TRC20",
      fullName: "Nombre",
      balance: "Saldo",
      firstName: "Nombre",
      lastName: "Apellido",
      status: "Estado",
      phoneNumber: "Número de teléfono",
      withdrawPassword: "Contraseña de retiro",
      sector: "Sector",
      employer: "Empleador",
      profession: "Profesión",
      address: "Dirección",
      birthDate: "Fecha de nacimiento",
      maritalStatus: "Estado civil",
      facebookLink: "Enlace de Facebook",
      sponsor: "Patrocinador",
      role: "Rol",
      createdAt: "Creado en",
      updatedAt: "Actualizado en",
      roleUser: "Rol/Usuario",
      roles: "Roles",
      createdAtRange: "Creado en",
      password: "Contraseña",
      oldPassword: "Contraseña anterior",
      newPassword: "Nueva contraseña",
      newPasswordConfirmation: "Confirmación de nueva contraseña",
      rememberMe: "Recordarme",
    },
    sector: {
      AGRO_ALIMENTAIRE: "Industria alimentaria",
      ASSURANCES: "Seguros",
      AUDIOVISUEL: "Audiovisual",
      BANCAIRE: "Bancario",
      CHIMIE: "Química",
      COMPOSANTS_AUTOMOBILES: "Componentes automotrices",
      DISTRIBUTION: "Distribución",
      DISTRIBUTION_AUTOMOBILE: "Distribución automotriz",
      DIVERS: "Varios",
      FINANCIER: "Financiero",
      HOLDING: "Holding",
      IMMOBILIER: "Bienes raíces",
      INDUSTRIEL: "Industrial",
      LEASING: "Arrendamiento",
      LOGISTIQUE_TRANSPORT: "Logística y transporte",
      PHARMACEUTIQUE: "Farmacéutico",
      SANTÉ: "Salud",
      TOURSIME: "Turismo",
      INFORMATION_TECHNOLOGY: "Tecnología de la información",
    },
    maritalStatus: {
      célébataire: "Soltero",
      marié: "Casado",
    },
    status: {
      active: "Activo",
      invited: "Invitado",
      "empty-permissions": "Esperando permisos",
      inactive: "Inactivo",
    },

    enumerators: {
      status: {
        USDT: "USDT",
        ETH: "ETH",
        BTC: "BTC",
        TRC20: "TRC20"
      },
      gender: {
        male: "masculino",
        female: "femenino",
      }
    },
    invite: "Invitar",
    validations: {
      // eslint-disable-next-line
      email: "El correo electrónico ${value} no es válido",
    },
    title: "Usuarios",
    menu: "Usuarios",
    doAddSuccess: "Usuario(s) guardado(s) exitosamente",
    doUpdateSuccess: "Usuario guardado exitosamente",
    exporterFileName: "usuarios_exportacion",
    doDestroySuccess: "Usuario eliminado exitosamente",
    doDestroyAllSelectedSuccess: "Usuarios eliminados exitosamente",
    edit: {
      title: "Editar Usuario",
    },
    new: {
      title: "Invitar Usuario(s)",
      titleModal: "Invitar Usuario",
      emailsHint:
        "Separe múltiples direcciones de correo electrónico usando el carácter coma.",
    },
    view: {
      title: "Ver Usuario",
      activity: "Actividad",
    },
    importer: {
      title: "Importar Usuarios",
      fileName: "plantilla_importacion_usuarios",
      hint: "Las columnas de Archivos/Imágenes deben ser las URL de los archivos separadas por espacio. Las relaciones deben ser el ID de los registros referenciados separados por espacio. Los roles deben ser los ids de roles separados por espacio.",
    },
    errors: {
      userAlreadyExists: "Ya existe un usuario con este correo electrónico",
      userNotFound: "Usuario no encontrado",
      revokingOwnPermission: `No puede revocar su propio permiso de administrador`,
    },
  },

  buttons: {
    login: "Iniciar sesión",
    registerNow: "Regístrate ahora",
    signup: "Registrarse",
    start: "Comenzar",
    orders: "Pedidos",
    submit: "Enviar",
    backtohome: "Volver a inicio",
    confirm: "Confirmar",
    logout: "Cerrar sesión",
    getstarted: "Empezar",
  },
  text: {
    welcome: "Bienvenido",
    discover: "Descubre ofertas exclusivas solo para ti",
    signin: "Iniciar sesión",
    haveaccount: "¿Ya tienes una cuenta?",
    noaccount: "¿No tienes una cuenta?",
    showingnow: "En cartelera",
    comingsoon: "Próximamente",
    termsconditions: "Términos y condiciones",
    todayearning: "Ganancias de hoy",
    accountbalance: "Saldo de la cuenta",
    freezebalance: "Saldo congelado",
    sumbitInformation: "Enviar información",
    order: "Pedido",
    pending: "Pendiente",
    completed: "Completado",
    canceled: "Cancelado",
    notransaction: "¡No hay transacciones hasta ahora!",
    createdtime: "Hora de creación",
    creationtime: "Hora de creación",
    orderNumber: "Número de pedido",
    orderamount: "Monto del pedido",
    income: "Ingresos",
    buyerating: "Calificación del comprador",
    uid: "UID",
    promotioncode: "Código de promoción",
    walletamount: "Monto de la billetera",
    creditassesment: "Evaluación de crédito",
    myfinance: "Mis finanzas",
    withdraw: "Retirar",
    mydetails: "Mis detalles",
    profile: "Perfil",
    wallet: "Billetera",
    other: "Otro",
    customersupport: "Atención al cliente",
    transaction: "Transacción",
    taskshistory: "Historial de tareas",
    security: "Seguridad",
    sponsor: `Nuestra seguridad es nuestra máxima prioridad y queremos asegurarnos de que
              estés protegido contra cualquier posible riesgo. Ten en cuenta que
              nunca te pediremos que envíes dinero a una dirección desconocida. Antes
              de realizar cualquier pago, te pedimos que verifiques los detalles con nosotros.`,
  },
  errors: {
    backToHome: "Volver a inicio",
    403: "Lo sentimos, no tienes acceso a esta página",
    404: "Lo sentimos, la página que visitaste no existe",
    500: "Lo sentimos, el servidor está reportando un error",
    429: "Demasiadas solicitudes. Por favor, inténtalo más tarde.",
    forbidden: {
      message: "Prohibido",
    },
    validation: {
      message: "Ocurrió un error",
    },
    defaultErrorMessage: "Ups, ocurrió un error",
  },

  withdraw: {
    withdrawamount: "Monto de retiro",
    Withdrawpassword: "Contraseña de retiro",
    availablebalance: "Saldo disponible",
    rules: "Descripción de las reglas",
    rule1: "El retiro mínimo es de $20",
    rule2: "El pago se realizará dentro de las 24 horas posteriores a la solicitud de retiro",
    rule3: "La falta de envío de pedidos diarios completos impide el retiro, todos los productos deben ser enviados para su retiro"
  },
  profile: {
    profile: "Perfil",
    fullname: "Nombre completo",
    email: "Correo electrónico",
    phonenumber: "Número de teléfono",
    country: "País",
    Invitationcode: "Código de invitación"
  },
  wallet: {
    wallet: "Billetera",
    info: "Información del método de retiro",
    username: "Nombre de usuario",
    walletname: "Nombre de la billetera",
    walletaddress: "Dirección de la billetera",
    note: "Nota",
    notedesctiption: "Por favor, ten cuidado al completar esta información."
  },

  cs: {
    cs: "Atención al cliente",
    note: "Si tienes alguna pregunta o encuentras algún problema, envíanos un correo electrónico o chatea con nuestro equipo de soporte en línea.",
    contactnow: "Contactar ahora"
  },
  transaction: {
    transaction: "Transacción",
    all: "Todo",
    withdraw: "Retiro",
    dposit: "Depósito",
    notransaction: "¡No hay transacciones hasta ahora!"
  },
  order: {
    order: "Pedido",
    completed: "Completado",
    pending: "Pendiente",
    canceled: "Cancelado",
    ordertime: "Hora del pedido",
    ordernumber: "Número de pedido",
    total: "Monto total del pedido",
    commission: "Comisión",
    return: "Retorno estimado"
  },

  security: {
    changepassword: "Cambiar contraseña",
    oldpassword: "Contraseña antigua",
    newpassword: "Nueva contraseña",
    confirmpassword: "Confirmar contraseña",
    note: "Nota",
    notedesc: "Por favor, completa esta información con cuidado"
  },

  auth: {
    tenants: "Espacios de trabajo",
    singindesc: "Ingresa tu correo electrónico y contraseña para iniciar sesión",
    signupdesc: "Ingresa tu correo electrónico y contraseña para registrarte",
    profile: {
      title: "Perfil",
      success: "Perfil actualizado con éxito",
      vip: "Felicidades por tu suscripción",
    },
    createAnAccount: "Crear una cuenta",
    rememberMe: "Recuérdame",
    forgotPassword: "Olvidé mi contraseña",
    signin: "Iniciar sesión",
    signup: "Registrarse",
    signout: "Cerrar sesión",
    alreadyHaveAnAccount: "¿Ya tienes una cuenta? Inicia sesión.",
    social: {
      errors: {
        "auth-invalid-provider":
          "Este correo ya está registrado con otro proveedor.",
        "auth-no-email": "El correo asociado a esta cuenta es privado o inexistente.",
      },
    },
    signinWithAnotherAccount: "Iniciar sesión con otra cuenta",
    emailUnverified: {
      message: `Por favor, confirma tu correo en <strong>{0}</strong> para continuar.`,
      submit: "Reenviar correo de verificación",
    },
    emptyPermissions: {
      message: "Aún no tienes permisos. Espera a que el administrador te los otorgue.",
    },
    passwordResetEmail: {
      message: "Enviar correo de restablecimiento de contraseña",
      error: "Correo no reconocido",
    },
    passwordReset: {
      message: "Restablecer contraseña",
    },
    passwordChange: {
      title: "Cambiar contraseña",
      success: "Contraseña cambiada con éxito",
      mustMatch: "Las contraseñas deben coincidir",
    },
    emailAddressVerificationEmail: {
      error: "Correo no reconocido",
    },
    verificationEmailSuccess: "Correo de verificación enviado con éxito",
    passwordResetEmailSuccess: "Correo de restablecimiento de contraseña enviado con éxito",
    passwordResetSuccess: "Contraseña cambiada con éxito",
    verifyEmail: {
      success: "Correo verificado con éxito.",
      message: "Un momento, estamos verificando tu correo...",
    },
  },

  tabbarmenue: {
    home: "Inicio",
    rate: "Calificar",
    profile: "Perfil"
  },

  validation: {
    mixed: {
      default: "${path} no es válido",
      required: "${path} es obligatorio",
      oneOf: "${path} debe ser uno de los siguientes valores: ${values}",
      notOneOf: "${path} no debe ser uno de los siguientes valores: ${values}",
      notType: ({ path, type, value, originalValue }) => {
        return `${path} debe ser un ${type}`;
      },
    },
    string: {
      length: "${path} debe tener exactamente ${length} caracteres",
      min: "${path} debe tener al menos ${min} caracteres",
      max: "${path} debe tener como máximo ${max} caracteres",
      matches: '${path} debe coincidir con el siguiente formato: "${regex}"',
      email: "${path} debe ser un correo electrónico válido",
      url: "${path} debe ser una URL válida",
      trim: "${path} debe ser una cadena sin espacios al inicio y al final",
      lowercase: "${path} debe estar en minúsculas",
      uppercase: "${path} debe estar en mayúsculas",
      selected: "${path} debe ser seleccionado",
    },
    number: {
      min: "${path} debe ser mayor o igual a ${min}",
      max: "${path} debe ser menor o igual a ${max}",
      lessThan: "${path} debe ser menor que ${less}",
      moreThan: "${path} debe ser mayor que ${more}",
      notEqual: "${path} no debe ser igual a ${notEqual}",
      positive: "${path} debe ser un número positivo",
      negative: "${path} debe ser un número negativo",
      integer: "${path} debe ser un número entero",
    },
    date: {
      min: "${path} debe ser posterior a ${min}",
      max: "${path} debe ser anterior a ${max}",
    },
    boolean: {},
    object: {
      noUnknown:
        "${path} no debe contener claves no especificadas en el objeto",
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} es obligatorio`
          : `${path} debe contener al menos ${min} elementos`,
      max: "${path} debe contener como máximo ${max} elementos",
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: "Subir",
    image: "Debe subir una imagen",
    size: "El archivo es demasiado grande. El tamaño máximo permitido es {0}",
    formats: `Formato no válido. Debe ser uno de los siguientes: {0}.`,
  },

  settings: {
    title: "Configuración",
    menu: "Configuración",
    save: {
      success:
        "Configuración guardada correctamente. La página se recargará en {0} segundos para aplicar los cambios.",
    },
    fields: {
      theme: "Tema",
      logos: "Logo",
      backgroundImages: "Imagen de fondo",
    },
    colors: {
      default: "Oscuro",
      light: "Claro",
      cyan: "Cian",
      "geek-blue": "Azul geek",
      gold: "Oro",
      lime: "Lima",
      magenta: "Magenta",
      orange: "Naranja",
      "polar-green": "Verde polar",
      purple: "Púrpura",
      red: "Rojo",
      volcano: "Volcán",
      yellow: "Amarillo",
    },
  },
  dashboard: {
    menu: "Panel",
    valider: "Validar",
    file: "Ningún archivo seleccionado",
    typecsv: "Tipo de archivo inválido. Selecciona un archivo CSV.",
    reset: "Restablecer",
    phone: "Subir números",
    check: "Verificar número",
    labelphone: "Escribe el número de teléfono",
    add: "Agregar número",
    download: "Descargar la plantilla",
    added: "Número añadido",
    duplicated: "Número duplicado",
    Wrong: "Número incorrecto",
    notFound: "Lo sentimos, no pudimos encontrar los elementos que buscas.",
    validation: "Número añadido con éxito",
    Success: "Número añadido con éxito",
    numberValidation: "Escribe un número válido. Gracias.",
    message:
      "Esta página usa datos ficticios solo para fines de demostración. Puedes editarla en frontend/view/dashboard/DashboardPage.ts.",
    charts: {
      day: "Día",
      red: "Rojo",
      green: "Verde",
      yellow: "Amarillo",
      grey: "Gris",
      blue: "Azul",
      orange: "Naranja",
      months: {
        1: "Enero",
        2: "Febrero",
        3: "Marzo",
        4: "Abril",
        5: "Mayo",
        6: "Junio",
        7: "Julio",
        8: "Agosto",
        9: "Septiembre",
        10: "Octubre",
        11: "Noviembre",
        12: "Diciembre",
      },
      eating: "Comer",
      drinking: "Beber",
      sleeping: "Dormir",
      designing: "Diseño",
      coding: "Programación",
      cycling: "Ciclismo",
      running: "Correr",
      customer: "Cliente",
      objectif: "Objetivos por estado",
      projectS: "Proyectos por estado",
      projectT: "Proyectos por tipo",
      adherent: "Número de miembros",
      news: "Número de noticias",
      project: "Número de proyectos",
      partner: "Número de socios",
      nodata: "sin datos para mostrar",
    },
  },
  imagesViewer: {
    noImage: "Sin imagen",
  },
  autocomplete: {
    loading: "Cargando...",
    noOptions: "No se encontraron datos",
  },
  table: {
    noData: "No se encontraron registros",
    loading: "Cargando...",
  },
  footer: {
    copyright: "© {0} GoToMarketersers Marketing digital",
  },
  preview: {
    error: "Esta operación no está permitida en modo de vista previa.",
  },
};

export default es;
