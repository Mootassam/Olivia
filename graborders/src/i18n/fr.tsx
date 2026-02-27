import Withdraw from "src/view/pages/withdraw/Withdraw";

const fr = {
  app: {
    title: "GoToMarketersers"
  },
  
  pages: {
    home: {
      levels: "Niveaux VIP",
      chooseLevel: "Choisissez votre niveau pour maximiser vos gains",
      welcome: "Bienvenue",
      announcement: "Chers utilisateurs, la plateforme GoToMarketersers est de retour au meilleur et normal, continuez à gagner autant que possible depuis la plateforme",

      // Action Buttons
      services: "Services",
      events: "Événements",
      about: "À propos",
      terms: "CG",
      certificate: "Certificat",
      faqs: "FAQ",

      // VIP Level Cards
      currentLevel: "Actuel",
      upgrade: "Mettre à niveau",
      profitNormal: "de profit sur les produits normaux",
      profitPremium: "de profit sur les produits premium",
      maxOrders: "Commandes max par jour",

      // Modal
      modal: {
        levelDetails: "Détails du niveau",
        levelLimit: "Limite de niveau",
        dailyOrders: "Commandes quotidiennes",
        commissionRate: "Taux de commission",
        cancel: "Annuler",
        upgradeNow: "Mettre à niveau maintenant"
      }
    },

tabBottomNavigator: {
    home: "Accueil",
    grap: "Saisir",
    records: "Enregistrements",
    starting: "Démarrer"
  },
    transaction: {
      title: "Historique des Transactions",
      filters: {
        all: "Toutes",
        withdraw: "Retrait",
        deposit: "Dépôt"
      },
      recentTransactions: "Transactions Récentes",
      transactionCount: "{0} transactions",
      types: {
        deposit: "Dépôt",
        withdrawal: "Retrait"
      },
      status: {
        completed: "Terminé",
        processing: "En traitement",
        canceled: "Annulé"
      },
      amount: {
        deposit: "+${0}",
        withdraw: "-${0}",
        canceled: "${0}"
      }
    },


    profile: {
      title: "Profil",
      invitationCode: "Code d'invitation",
      creditScore: "Score de crédit",
      balance: "Solde",
      todayProfit: "Profit du jour",
      frozenAmount: "Montant gelé",
      usd: "USD",

      // Menu Sections
      myFinancial: "Mes finances",
      myDetails: "Mes détails",
      other: "Autre",

      // Financial Items
      recharge: "Recharger",
      withdraw: "Retirer",

      // Details Items
      contactUs: "Nous contacter",
      profile: "Profil",
      updateWithdrawal: "Mettre à jour les détails de retrait",

      // Other Items
      transaction: "Transaction",
      tasksHistory: "Historique des tâches",
      security: "Sécurité",
      notifications: "Notifications",
      languages: "Langues",
      bindAccount: "Lier un compte",
      details: "Détails",
      officialWebsite: "Entrée du site officiel",
      changeLoginPassword: "Changer le mot de passe de connexion",
      changeWithdrawPassword: "Changer le mot de passe de retrait",
      mainFunction: "Fonction principale",
      otherFunction: "Autres fonctions",
      uid: "UID",

      // Buttons
      logout: "Déconnexion",
      confirm: "Confirmer",
      copied: "Copié",

      // Modals
      rechargeModal: {
        title: "Rechargement",
        text: "Veuillez contacter le service client pour recharger"
      },
      withdrawModal: {
        title: "Retrait",
        text: "Veuillez contacter le service client pour procéder à votre retrait."
      },
      reputation: {
        title: "Règles de réputation",
        description: "Chaque compte dispose d’un système de réputation basé sur la performance du membre. Si vous terminez les tâches quotidiennes et maintenez une bonne réputation, votre score s’améliorera. Si vous ne respectez pas les délais, votre score diminuera. Si votre réputation tombe en dessous de 80 %, le système bloquera les retraits. Pour toute question, contactez le service client."
      }
    },

    team: {
      title: "Profil",
      personalInformation: "Informations personnelles",
      accountDetails: "Vos détails de compte et informations personnelles",

      // Info Items
      fullName: "Nom complet",
      email: "Email",
      phoneNumber: "Numéro de téléphone",
      country: "Pays",
      gender: "Genre",
      invitationCode: "Code d'invitation",

      // Gender Values
      genderNotSpecified: "Non spécifié",

      // Placeholders
      notAvailable: "—"
    },

    language: {
      title: "Langue de l'application",
      selectLanguage: "Sélectionner la langue",
      choosePreferred: "Choisissez votre langue préférée",
      searchPlaceholder: "Rechercher des langues...",
      currentLanguage: "Langue actuelle",

      // Language names (if needed for dynamic content)
      languages: {
        english: "Anglais",
        french: "Français",
        russian: "Russe",
        german: "Allemand",
        spanish: "Espagnol"
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
      title: "Service client",
      description: "Si vous avez des questions ou rencontrez des problèmes, veuillez nous envoyer un email ou discuter avec notre équipe de support client en ligne.",
      contactWhatsApp: "Contacter sur WhatsApp",
      contactTelegram: "Contacter sur Telegram"
    },

    notifications: {
      title: "Notifications",
      filters: {
        all: "Toutes",
        deposit: "Dépôt",
        withdraw: "Retrait"
      },
      unreadCount: "{0} non lues",
      emptyState: {
        title: "Aucune notification trouvée",
        description: "Vous n'avez pas encore de notifications {0}."
      },

      // Notification Types
      types: {
        deposit_success: "Dépôt réussi",
        deposit_canceled: "Dépôt annulé",
        withdraw_success: "Retrait réussi",
        withdraw_canceled: "Retrait annulé",
        system: "Notification système",
        alert: "Alerte importante",
        default: "Notification"
      },

      // Notification Messages
      messages: {
        deposit_success: "Votre dépôt de ${0} a été complété avec succès.",
        deposit_canceled: "Votre demande de dépôt de ${0} a été annulée.",
        withdraw_success: "Votre retrait de ${0} a été complété avec succès.",
        withdraw_canceled: "Votre demande de retrait de ${0} a été annulée.",
        system: "Notification système",
        alert: "Notification d'alerte importante",
        default: "Mise à jour de notification"
      },

      // Status
      status: {
        unread: "non lue",
        read: "lue"
      }
    },

    portfolio: {
      // Status Tabs
      completed: "Terminées",
      pending: "En attente",
      canceled: "Annulées",

      // Order Information
      orderTime: "Heure de commande",
      orderNumber: "Numéro de commande",
      totalOrderAmount: "Montant total de la commande",
      commission: "Commission",
      estimatedReturn: "Retour estimé",

      // Product Details
      quantity: "X 1",
      currency: "USD",

      // Status Labels
      status: {
        completed: "Terminée",
        pending: "En attente",
        canceled: "Annulée"
      },
      submit: "Soumettre",
    },

    changePassword: {
      title: "Changer le mot de passe",
      withdrawPassword: "Changer le mot de passe de retrait",
      header: "Changer le mot de passe",
      oldPassword: "Ancien mot de passe",
      newPassword: "Nouveau mot de passe",
      confirmPassword: "Confirmer le mot de passe",
      submit: "Soumettre",
      note: "Veuillez remplir ces informations soigneusement",
      requiredField: "*"
    },

    withdraw: {
      title: "Retrait",
      withdrawAmount: "Montant du retrait",
      withdrawPassword: "Mot de passe de retrait",
      availableBalance: "Solde disponible",
      confirm: "Confirmer",
      rulesDescription: "Description des règles",
      rules: {
        minimum: "(1) Le retrait minimum est de 100 USD",
        paymentTime: "(2) Le paiement sera effectué dans l'heure suivante, après l'approbation de la demande de retrait.",
        orderCompletion: "(3) La soumission incomplète des commandes quotidiennes est soumise à aucun retrait, tous les produits doivent être soumis pour le retrait"
      },
      amountPlaceholder: "Entrez le montant (min. €50)",
      selectMethod: "Sélectionner la méthode de retrait",
      methods: {
        crypto: "Cryptomonnaie",
        bank: "Virement bancaire",
        cryptoNetworks: "TRC20 | ERC20",
        bankNetworks: "IBAN | SWIFT"
      },
      status: {
        complete: "✓ Complet",
        incomplete: "⚠ Incomplet"
      },
      withdrawingTo: "Retrait vers :",
      withdrawPasswordPlaceholder: "Entrez votre mot de passe de retrait",
      bankModal: {
        title: "Détails bancaires incomplets",
        required: "Détails bancaires requis",
        description: "Veuillez compléter vos informations bancaires avant d’effectuer un retrait :"
      },
      cryptoModal: {
        title: "Détails crypto incomplets",
        required: "Détails de cryptomonnaie requis",
        description: "Veuillez compléter vos informations de cryptomonnaie avant d’effectuer un retrait :"
      },
      goToBindAccount: "Aller à Lier un compte",
      completeDetailsIn: "Complétez vos détails de retrait dans",
      enableAllOptions: "pour activer toutes les options de retrait.",
      validation: {
        selectMethod: "Veuillez sélectionner une méthode de retrait"
      }
    },

    wallet: {
      title: "Portefeuille",
      withdrawalMethod: "Informations sur la méthode de retrait",
      username: "Nom d'utilisateur",
      walletName: "Nom du portefeuille",
      choosePreferredCoin: "Choisir la pièce préférée",
      walletAddress: "Adresse du portefeuille",
      withdrawPassword: "Mot de passe de retrait",
      submit: "Soumettre",
      note: "Veuillez être prudent lors du remplissage de ces informations",
      requiredField: "*"
    },

    grab: {
      title: "Noter et séjourner",
      description: "Search Off the Record vous emmène dans les coulisses de GoToMarketers Search. Chaque épisode révèle comment nous aidons les gens à noter et découvrir des hôtels — depuis chez eux.",
      seeAllReviews: "Voir tous les avis",
      searchNow: "Rechercher maintenant",
      // Header Section
      greeting: "Salut {0} 👏",

      // Stats Cards
      totalAmount: "Montant total",
      profitsAdded: "Les profits seront ajoutés ici",
      todaysCommission: "Commission du jour",
      commissionEarned: "Commission gagnée",
      currency: "USD",

      // Optimization Section
      startOptimization: "Démarrer l'optimisation",
      progressCount: "{0}/{1}",

      // Game Section
      commissionRate: "Taux de commission",
      exclusiveChannel: "Canal exclusif pour les membres exclusifs",
      startButton: "Démarrer",
      processing: "Traitement en cours...",

      // Notice Section
      notice: "Avis",
      supportHours: "Heures de support en ligne 10:00 - 22:00",
      contactSupport: "Veuillez contacter le support en ligne pour votre assistance!"
      ,
      errors: {
        insufficientBalance: "Solde insuffisant. Veuillez recharger votre compte pour continuer."
      },
      messages: {
        completedTasks: "Vous avez terminé toutes les tâches disponibles. Contactez le support pour réinitialiser votre compte."
      },
      stats: {
        myAssets: "Mes actifs",
        earnings: "Gains",
        tasksDone: "Tâches terminées",
        onHold: "En attente"
      }
    },
    grap: {
      rateModal: {
        title: "Évaluez votre expérience",
        label: {
          tapToRate: "Touchez pour évaluer",
          poor: "Mauvais",
          fair: "Passable",
          good: "Bon",
          veryGood: "Très bon",
          excellent: "Excellent"
        },
        selectOptions: "Sélectionnez vos options de retour",
        more: "de plus",
        submit: "Envoyer l’avis",
        options: {
          0: "Les chambres étaient propres, très confortables, et le personnel était incroyable",
          1: "C’était super. Service au top comme toujours",
          2: "Le personnel de cet établissement est excellent ! Ils font tout pour rendre votre séjour confortable",
          3: "J’ai eu une expérience merveilleuse ici",
          4: "La nourriture était excellente avec de nombreux choix",
          5: "Hôtel excellent avec un emplacement idéal au centre-ville",
          6: "Très central avec des chambres confortables et une climatisation incroyable. Petit-déjeuner délicieux et personnel très serviable et sympathique"
        }
      },
      modal: {
        productName: "Nom du produit",
        positiveReviews: "avis positifs"
      }
    },

    grapModal: {
      orderTime: "Heure de commande",
      orderNumber: "Numéro de commande",
      totalOrderAmount: "Montant total de la commande",
      commission: "Commission",
      estimatedReturn: "Retour estimé",
      cancel: "Annuler",
      submit: "Soumettre",
      quantity: "X 1",
      currency: "USD"
    },
    marketsHome: {
      heroTitle: "🌙 Trouvez votre calme",
      heroSubtitle: "Hôtels de luxe · retraites privées",
      search: {
        destinationPlaceholder: "Destination, ville, hôtel",
        checkIn: "Arrivée",
        checkOut: "Départ",
        guestsPlaceholder: "2 adultes · 0 enfants",
        goToSearch: "Aller à la recherche",
        flexibleNote: "Dates flexibles ? · Meilleur prix"
      },
      sections: {
        dreamEscapesTitle: "📸 Évasions de rêve",
        exploreAll: "Tout explorer",
        topPicksTitle: "✨ Nos choix pour vous",
        viewAll: "Tout voir"
      },
      features: {
        freeWifi: "WiFi gratuit",
        support: "Support 24/7",
        secure: "Sécurisé",
        bestRate: "Meilleur tarif"
      },
      footerTagline: "✦ Réservez maintenant, détendez-vous plus tard · Pas de frais cachés ✦"
    },
    activities: {
      title: "Activités",
      subtitle: "La promotion bat son plein, venez y participer !"
    },
    help: {
      title: "Centre d’aide",
      footer: "Pour toute aide supplémentaire, contactez notre support client en ligne.",
      accordion: {
        specialOrders: {
          title: "À propos des commandes spéciales",
          content: "<p><strong>Qu’est-ce qu’une « commande d’hôtel spéciale » ?</strong></p><p>Avantages exclusifs offerts par X Business avec des hôtels de luxe sélectionnés, réservés aux membres VIP de haut niveau.</p><p>Récompenses Mystery Box possibles (prix en espèces et commandes spéciales), commissions 30 à 50 fois supérieures.</p>"
        },
        platformRegulations: {
          title: "Règlement de la plateforme",
          content: "<p>Cliquez sur « Rechercher » pour obtenir une commande, puis complétez-la. En général, <strong>30 minutes</strong>.</p><p>Commandes attribuées aléatoirement : <strong>non modifiables, non annulables, non ignorables</strong>.</p><p>Si > <strong>15 min</strong> sans dépôt, contactez le support et confirmez les coordonnées.</p><p>Horaires : <strong>9h00 - 21h00</strong> chaque jour.</p><p>En cas d’usage frauduleux du compte, contactez immédiatement le support.</p><p>Pour la publicité : vérifiez le dépôt puis cliquez sur <strong>« Soumettre »</strong> pour finaliser la <strong>Commande Premium</strong>.</p><p>Retrait > 40 000 AED : <strong>frais d’audit</strong>, retirable <strong>une heure après vérification</strong>.</p>"
        },
        deposits: {
          title: "À propos des dépôts",
          content: "<p>Depuis votre compte, « Recharger », choisir l’agent, utiliser les coordonnées fournies, puis envoyer la preuve.</p><p>En cas de problème, contactez le support.</p><p>Vérifiez le compte de dépôt (mis à jour quotidiennement) avant toute opération.</p><p><strong>Note :</strong> Déposez uniquement si le solde est inférieur au prix de la commande.</p>"
        },
        withdrawals: {
          title: "À propos des retraits",
          content: "<p>Après vos tâches quotidiennes, demandez un retrait (min 40 AED). Associez vos infos de retrait.</p><p>« Retirer », montant + mot de passe. Crédit en env. 30 min (variable banque).</p><p><strong>Horaires :</strong> <strong>9h00 - 21h00</strong> chaque jour.</p>"
        },
        luxuryOrders: {
          title: "À propos des commandes de luxe",
          content: "<p><strong>Commande d’hôtel de luxe :</strong> campagne publicitaire pour accroître la notoriété.</p><p>Bénéfice pour tous les membres : commissions 10 à 30 fois supérieures.</p><p>Agents : 0 à 2 commandes/jour (variable).</p><p><strong>Note :</strong> Les commandes attribuées doivent être complétées ; ajustements reflétés sur le compte.</p>"
        }
      }
    },
    tasks: {
      title: "Tâches",
      tabs: {
        all: "Toutes",
        pending: "En attente",
        completed: "Terminées",
        canceled: "Annulées"
      }
    },
    bindAccount: {
      title: "Lier un compte",
      currentBankTitle: "Carte bancaire actuellement liée",
      bank: "BANQUE",
      cryptoTitle: "Réseau de cryptomonnaie",
      cryptoLabel: "USDT (TRC20/ERC20)",
      popular: "Populaire"
    },
    bankDetails: {
      title: "Liaison de carte bancaire"
    },
    search: {
      placeholder: "Rechercher"
    },
    vip: {
      title: "Niveaux VIP",
      subtitle: "Choisissez votre niveau d'adhésion et débloquez des avantages exclusifs",
      backToHome: "Retour à l'accueil",
      searchPlaceholder: "Rechercher des niveaux VIP...",
      noResults: "Aucun niveau VIP trouvé",
      noResultsDesc: "Essayez d'ajuster vos termes de recherche",
      currentLevel: "Niveau actuel",
      upgrade: "Améliorer",
      locked: "Verrouillé",
      currentlyOn: "Actuellement sur",
      upgradeTo: "Améliorer vers",
      levelDetails: "Détails du niveau",
      levelLimit: "Limite du niveau",
      dailyOrders: "Commandes quotidiennes",
      setperday: "Ensembles par jour",
      commissionRate: "Taux de commission",
      premiumCommission: "Commission Premium",
      maxOrders: "Commandes max",
      commission: "Commission",
      benefits: "Avantages",
      cancel: "Annuler",
      upgradeNow: "Améliorer maintenant",
      upgrading: "Amélioration en cours...",
      level: "Niveau VIP",
      pointPeriod: "Période de points : {0} jours",
      modal: {
        alreadyMember: "Vous êtes déjà membre de ce niveau VIP.",
        contactSupportMessage: "Veuillez contacter le support client pour améliorer votre niveau VIP.",
        contactSupport: "Contacter le support"
      }
    },
    invitation: {
      teamAmount: "Montant de l’équipe",
      stats: {
        dailyInvitations: "Invitations quotidiennes",
        monthlyInvitations: "Invitations mensuelles",
        monthlyIncome: "Revenu mensuel"
      },
      rulesButton: "Règles de l’activité Inviter des amis",
      newAgents: "Nouveaux agents",
      table: {
        memberId: "ID Membre",
        recharge: "Recharger",
        withdraw: "Retirer"
      },
      noMoreData: "Plus de données",
      modal: {
        title: "Invitez des amis et gagnez",
        referralCodeLabel: "Votre code de parrainage :",
        copy: "Copier",
        shareLabel: "Partagez votre code de parrainage :"
      },
      notAllowed: {
        title: "Accès restreint",
        message: "Vous n’êtes pas autorisé à inviter des utilisateurs pour le moment.",
        submessage: "Le système de parrainage est actuellement désactivé pour votre compte. Veuillez contacter le support pour plus d’informations ou pour demander l’accès.",
        contactSupport: "Contacter le support",
        gotIt: "Compris"
      }
    },

    actions: {
      event: "Événements",
      tc: "Conditions générales",
      certificate: "Certificat",
      faq: "Foire aux questions",
      company: "Entreprise"
    },

    auth: {
      signin: {
        welcomeBack: "Content de vous revoir!",
        signinToAccount: "Connectez-vous à votre compte marketing",
        signinButton: "Se connecter",
        noAccount: "Vous n'avez pas de compte?",
        signupHere: "Inscrivez-vous ici."
      },
      signup: {
        createAccount: "Créer un compte",
        signupForAccount: "Inscrivez-vous pour un compte marketing",
        signupButton: "S'inscrire",
        alreadyHaveAccount: "Vous avez déjà un compte?",
        phonePlaceholder: "Entrez votre numéro de téléphone",
        searchCountries: "Rechercher des pays..."
      }
    },

    csPage: {
      customerSupport: "Service client",
      hereToHelp: "Nous sommes là pour vous aider!",
      howCanWeHelp: "Comment pouvons-nous vous aider aujourd'hui?",
      platformNames: {
        whatsapp: "WhatsApp",
        telegram: "Telegram"
      }
    },
  },


  entities: {
    record: {
      menu: "Enregistrements",
      fields: {
        user: "utilisateur",
        product: "produit",
        number: "numéro d'enregistrement",
        status: "statut",
      },
      list: {
        title: "Liste des enregistrements",
      },
      view: {
        title: "Détail de l'enregistrement",
      },
      edit: {
        title: "Modifier l'enregistrement",
      },
      create: {
        success: "Produit soumis avec succès.",
      },
      update: {
        success: "Produit soumis avec succès.",
      },
      destroy: {
        success: "Enregistrement supprimé avec succès",
      },
      destroyAll: {
        success: "Enregistrement supprimé avec succès",
      },
      enumerators: {
        status: {
          pending: "En attente",
          completed: "Terminé",
          canceled: "Annulé",
        },
      },
    },

    category: {
      name: "catégorie",
      label: "Catégories",
      menu: "Catégories",
      exporterFileName: "export_categorie",
      list: {
        menu: "Catégories",
        title: "Catégories",
      },
      create: {
        success: "Catégorie enregistrée avec succès",
      },
      update: {
        success: "Catégorie enregistrée avec succès",
      },
      destroy: {
        success: "Catégorie supprimée avec succès",
      },
      destroyAll: {
        success: "Catégorie(s) supprimée(s) avec succès",
      },
      edit: {
        title: "Modifier la catégorie",
      },
      fields: {
        id: "Id",
        name: "Nom",
        slug: "Slug",
        photo: "Photo",
        metaKeywords: "Mots-clés Meta",
        metaDescriptions: "Descriptions Meta",
        status: "Statut",
        isFeature: "Est en vedette",
        serialRange: "Série",
        serial: "Série",
        createdAt: "Créé à",
        updatedAt: "Mis à jour à",
        createdAtRange: "Créé à",
      },
      enumerators: {
        status: {
          enable: "Activer",
          disable: "Désactiver",
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: "Nouvelle catégorie",
      },
      view: {
        title: "Voir la catégorie",
      },
      importer: {
        title: "Importer des catégories",
        fileName: "modèle_import_categorie",
        hint: "Les colonnes Fichiers/Images doivent être les URL des fichiers séparés par un espace.",
      },
    },

    product: {
      name: "produit",
      label: "Produits",
      menu: "Produits",
      exporterFileName: "export_produit",
      list: {
        menu: "Produits",
        title: "Produits",
      },
      create: {
        success: "Produit enregistré avec succès",
      },
      update: {
        success: "Produit enregistré avec succès",
      },
      destroy: {
        success: "Produit supprimé avec succès",
      },
      destroyAll: {
        success: "Produit(s) supprimé(s) avec succès",
      },
      edit: {
        title: "Modifier le produit",
      },
      fields: {
        id: "Id",
        name: "Nom",
        slug: "Slug",
        tags: "Tags",
        video: "Vidéo",
        specificationName: "Nom de la spécification",
        specificationDesciption: "Description de la spécification",
        isSpecification: "Est une spécification",
        details: "Détails",
        photo: "Photo",
        discountPriceRange: "Prix remisé",
        discountPrice: "Prix actuel",
        previousPriceRange: "Prix précédent",
        previousPrice: "Prix précédent",
        stockRange: "Stock",
        stock: "Stock",
        metaKeywords: "Mots-clés Meta",
        metaDesctiption: "Description courte",
        status: "Statut",
        isType: "Type",
        dateRange: "Date",
        date: "Date",
        itemType: "Type d'article",
        file: "Fichier",
        link: "Lien",
        fileType: "Type de fichier",
        taxe: "Taxe",
        category: "Catégorie",
        subcategory: "Sous-catégorie",
        childcategory: "Sous-sous-catégorie",
        brand: "Marque",
        gallery: "Galerie",
        createdAt: "Créé à",
        updatedAt: "Mis à jour à",
        createdAtRange: "Créé à",
      },
      enumerators: {
        status: {
          enable: "Activer",
          disable: "Désactiver",
        },
        itemType: {
          physical: "physique",
          digitale: "Numérique",
        },
        fileType: {
          file: "Fichier",
          link: "Lien",
        },
        isType: {
          new_arrival: "Nouvelle arrivée",
          feature_product: "Produit vedette",
          top_pdroduct: "Produit populaire",
          best_product: "Meilleur produit",
          flash_deal_product: "Produit en promotion flash",
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: "Nouveau produit",
      },
      view: {
        title: "Voir le produit",
      },
      importer: {
        title: "Importer des produits",
        fileName: "modèle_import_produit",
        hint: "Les colonnes Fichiers/Images doivent être les URL des fichiers séparés par un espace.",
      },
    },
    transaction: {
      name: "transaction",
      label: "Transactions",
      menu: "Transactions",
      exporterFileName: "export_transaction",
      list: {
        menu: "Transactions",
        title: "Transactions",
      },
      create: {
        success: "Transaction envoyée avec succès",
      },
      update: {
        success: "Transaction enregistrée avec succès",
      },
      destroy: {
        success: "Transaction supprimée avec succès",
      },
      destroyAll: {
        success: "Transaction(s) supprimée(s) avec succès",
      },
      edit: {
        title: "Modifier la transaction",
      },
      fields: {
        id: "Id",
        accountHolder: "Titulaire du compte",
        ibanNumber: "Numéro IBAN",
        bankName: "Nom de la banque",
        ifscCode: "Code IFSC",
        amountRange: "Montant",
        amount: "Montant",
        email: "Email",
        tax: "Taxe",
        currencySign: "Signe monétaire",
        currencyValue: "Valeur monétaire",
        orderId: "ID de commande",
        createdAt: "Créé à",
        updatedAt: "Mis à jour à",
        createdAtRange: "Créé à",
      },
      enumerators: {
        status: {
          pending: "En attente",
          completed: "Succès",
          canceled: "Annulé",
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: "Nouvelle transaction",
      },
      view: {
        title: "Voir la transaction",
      },
      importer: {
        title: "Importer des transactions",
        fileName: "modèle_import_transaction",
        hint: "Les colonnes Fichiers/Images doivent être les URL des fichiers séparés par un espace.",
      },
    },

    order: {
      name: "commande",
      label: "Commandes",
      menu: "Commandes",
      exporterFileName: "export_commande",
      list: {
        menu: "Commandes",
        title: "Commandes",
      },
      create: {
        success: "Commande enregistrée avec succès",
      },
      update: {
        success: "Commande enregistrée avec succès",
      },
      destroy: {
        success: "Commande supprimée avec succès",
      },
      destroyAll: {
        success: "Commande(s) supprimée(s) avec succès",
      },
      edit: {
        title: "Modifier la commande",
      },
      fields: {
        id: "Id",
        userId: "Utilisateur",
        cart: "Panier",
        shipping: "Livraison",
        discountRange: "Remise",
        discount: "Remise",
        paymentMethod: "Méthode de paiement",
        taxe: "Taxe",
        transactionNumber: "Numéro de transaction",
        orderStatus: "Statut de commande",
        createdAt: "Créé à",
        updatedAt: "Mis à jour à",
        createdAtRange: "Créé à",
      },
      enumerators: {
        orderStatus: {
          pending: "En attente",
          in_progress: "En cours",
          delivered: "Livré",
          canceled: "Annulé",
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: "Nouvelle commande",
      },
      view: {
        title: "Voir la commande",
      },
      importer: {
        title: "Importer des commandes",
        fileName: "modèle_import_commande",
        hint: "Les colonnes Fichiers/Images doivent être les URL des fichiers séparés par un espace.",
      },
    },
  },


  user: {
    fields: {
      genre: "Genre",
      username: "Nom d'utilisateur",
      walletName: "Nom du portefeuille",
      id: "Id",
      confirmPassword: "Confirmer le mot de passe",
      avatars: "Avatar",
      invitationcode: "Code d'invitation",
      email: "E-mail",
      emails: "E-mail(s)",
      erc20: "Adresse du portefeuille ERC20",
      trc20: "Adresse du portefeuille TRC20",
      fullName: "Nom",
      balance: "Solde",
      firstName: "Prénom",
      lastName: "Nom de famille",
      status: "Statut",
      phoneNumber: "Numéro de téléphone",
      withdrawPassword: "Mot de passe de retrait",
      sector: "Secteur",
      employer: "Employeur",
      profession: "Profession",
      address: "Adresse",
      birthDate: "Date de naissance",
      maritalStatus: "Statut matrimonial",
      facebookLink: "Lien Facebook",
      sponsor: "Sponsor",
      role: "Rôle",
      createdAt: "Créé le",
      updatedAt: "Mis à jour le",
      roleUser: "Rôle/Utilisateur",
      roles: "Rôles",
      createdAtRange: "Créé le",
      password: "Mot de passe",
      oldPassword: "Ancien mot de passe",
      newPassword: "Nouveau mot de passe",
      newPasswordConfirmation: "Confirmation du nouveau mot de passe",
      rememberMe: "Se souvenir de moi",
    },
    sector: {
      AGRO_ALIMENTAIRE: "Industrie alimentaire",
      ASSURANCES: "Assurance",
      AUDIOVISUEL: "Audiovisuel",
      BANCAIRE: "Bancaire",
      CHIMIE: "Chimie",
      COMPOSANTS_AUTOMOBILES: "Composants automobiles",
      DISTRIBUTION: "Distribution",
      DISTRIBUTION_AUTOMOBILE: "Distribution automobile",
      DIVERS: "Divers",
      FINANCIER: "Financier",
      HOLDING: "Holding",
      IMMOBILIER: "Immobilier",
      INDUSTRIEL: "Industriel",
      LEASING: "Leasing",
      LOGISTIQUE_TRANSPORT: "Logistique et transport",
      PHARMACEUTIQUE: "Pharmaceutique",
      SANTÉ: "Santé",
      TOURSIME: "Tourisme",
      INFORMATION_TECHNOLOGY: "Technologie de l'information",
    },
    maritalStatus: {
      célébataire: "Célibataire",
      marié: "Marié",
    },
    status: {
      active: "Actif",
      invited: "Invité",
      "empty-permissions": "En attente des autorisations",
      inactive: "Inactif",
    },

    enumerators: {
      status: {
        USDT: "USDT",
        ETH: "ETH",
        BTC: "BTC",
        TRC20: "TRC20"
      },
      gender: {
        male: "masculin",
        female: "féminin",
      }
    },
    invite: "Inviter",
    validations: {
      // eslint-disable-next-line
      email: "L'e-mail ${value} est invalide",
    },
    title: "Utilisateurs",
    menu: "Utilisateurs",
    doAddSuccess: "Utilisateur(s) enregistré(s) avec succès",
    doUpdateSuccess: "Utilisateur enregistré avec succès",
    exporterFileName: "utilisateurs_export",
    doDestroySuccess: "Utilisateur supprimé avec succès",
    doDestroyAllSelectedSuccess: "Utilisateurs supprimés avec succès",
    edit: {
      title: "Modifier l'utilisateur",
    },
    new: {
      title: "Inviter un ou des utilisateur(s)",
      titleModal: "Inviter un utilisateur",
      emailsHint:
        "Séparez les adresses e-mail multiples par une virgule.",
    },
    view: {
      title: "Voir l'utilisateur",
      activity: "Activité",
    },
    importer: {
      title: "Importer des utilisateurs",
      fileName: "modèle_import_utilisateurs",
      hint: "Les colonnes Fichiers/Images doivent être les URL des fichiers séparées par un espace. Les relations doivent être l'ID des enregistrements référencés séparés par un espace. Les rôles doivent être les identifiants de rôles séparés par un espace.",
    },
    errors: {
      userAlreadyExists: "Un utilisateur avec cet e-mail existe déjà",
      userNotFound: "Utilisateur non trouvé",
      revokingOwnPermission: `Vous ne pouvez pas révoquer votre propre permission d'administrateur`,
    },
  },

  errors: {
    backToHome: "Retour à l'accueil",
    403: `Désolé, vous n'avez pas accès à cette page`,
    404: "Désolé, la page que vous avez visitée n'existe pas",
    500: "Désolé, le serveur signale une erreur",
    429: "Trop de requêtes. Veuillez réessayer plus tard.",
    forbidden: {
      message: "Interdit",
    },
    validation: {
      message: "Une erreur s'est produite",
    },
    defaultErrorMessage: "Oups, une erreur s'est produite",
  },

  withdraw: {
    withdrawamount: "Montant du retrait",
    Withdrawpassword: "Mot de passe de retrait",
    availablebalance: "Solde disponible",
    rules: "Description des règles",
    rule1: "Le retrait minimum est de 20 $",
    rule2: "Le paiement sera effectué dans les 24 heures suivant la demande de retrait",
    rule3: "L'absence de soumission des commandes quotidiennes entraîne l'impossibilité de retrait, tous les produits doivent être soumis pour retrait"
  },
  profile: {
    profile: "Profil",
    fullname: "Nom complet",
    email: "Email",
    phonenumber: "Numéro de téléphone",
    country: "Pays",
    Invitationcode: "Code d’invitation"
  },
  wallet: {
    wallet: "Portefeuille",
    info: "Informations sur la méthode de retrait",
    username: "Nom d'utilisateur",
    walletname: 'Nom du portefeuille',
    walletaddress: 'Adresse du portefeuille',
    note: "Remarque",
    notedesctiption: "Veuillez remplir ces informations avec précaution."
  },


  cs: {
    cs: "Service client",
    note: "Si vous avez des questions ou rencontrez des problèmes, veuillez nous envoyer un email ou discuter avec notre équipe de support client en ligne.",
    contactnow: "Contacter maintenant"
  },
  transaction: {
    transaction: "Transaction",
    all: "Tout",
    withdraw: "Retrait",
    dposit: "Dépôt",
    notransaction: "Aucune transaction pour le moment !"
  },
  order: {
    order: "Commande",
    completed: "Complété",
    pending: "En attente",
    canceled: "Annulé",
    ordertime: "Heure de la commande",
    ordernumber: "Numéro de commande",
    total: "Montant total de la commande",
    commission: "Commission",
    return: "Retour estimé"
  },

  security: {
    changepassword: "Changer le mot de passe",
    oldpassword: "Ancien mot de passe",
    newpassword: "Nouveau mot de passe",
    confirmpassword: "Confirmer le mot de passe",
    note: "Remarque",
    notedesc: "Veuillez remplir ces informations avec précaution"
  },

  auth: {
    tenants: "Espaces de travail",
    singindesc: "Entrez votre email et votre mot de passe pour vous connecter",
    signupdesc: "Entrez votre email et votre mot de passe pour vous inscrire",
    profile: {
      title: "Profil",
      success: "Profil mis à jour avec succès",
      vip: "Félicitations pour votre abonnement",
    },
    createAnAccount: "Créer un compte",
    rememberMe: "Se souvenir de moi",
    forgotPassword: "Mot de passe oublié",
    signin: "Se connecter",
    signup: "S'inscrire",
    signout: "Se déconnecter",
    alreadyHaveAnAccount: "Vous avez déjà un compte ? Connectez-vous.",
    social: {
      errors: {
        "auth-invalid-provider":
          "Cet email est déjà enregistré avec un autre fournisseur.",
        "auth-no-email": `L'email associé à ce compte est privé ou inexistant.`,
      },
    },
    signinWithAnotherAccount: "Se connecter avec un autre compte",
    emailUnverified: {
      message: `Veuillez confirmer votre email à <strong>{0}</strong> pour continuer.`,
      submit: `Renvoyer l'email de vérification`,
    },
    emptyPermissions: {
      message: `Vous n'avez encore aucune permission. Attendez que l'administrateur vous accorde des privilèges.`,
    },
    passwordResetEmail: {
      message: "Envoyer un email de réinitialisation du mot de passe",
      error: `Email non reconnu`,
    },
    passwordReset: {
      message: "Réinitialiser le mot de passe",
    },
    passwordChange: {
      title: "Changer le mot de passe",
      success: "Mot de passe changé avec succès",
      mustMatch: "Les mots de passe doivent correspondre",
    },
    emailAddressVerificationEmail: {
      error: `Email non reconnu`,
    },
    verificationEmailSuccess: `Email de vérification envoyé avec succès`,
    passwordResetEmailSuccess: `Email de réinitialisation du mot de passe envoyé avec succès`,
    passwordResetSuccess: `Mot de passe changé avec succès`,
    verifyEmail: {
      success: "Email vérifié avec succès.",
      message: "Un instant, votre email est en cours de vérification...",
    },
  },

  tabbarmenue: {
    home: "Accueil",
    rate: "Évaluer",
    profile: "Profil"
  },


  validation: {
    mixed: {
      default: "${path} est invalide",
      required: "${path} est requis",
      oneOf: "${path} doit être l'une des valeurs suivantes : ${values}",
      notOneOf: "${path} ne doit pas être l'une des valeurs suivantes : ${values}",
      notType: ({ path, type, value, originalValue }) => {
        return `${path} doit être un(e) ${type}`;
      },
    },
    string: {
      length: "${path} doit contenir exactement ${length} caractères",
      min: "${path} doit contenir au moins ${min} caractères",
      max: "${path} doit contenir au maximum ${max} caractères",
      matches: '${path} doit correspondre au format suivant : "${regex}"',
      email: "${path} doit être une adresse e-mail valide",
      url: "${path} doit être une URL valide",
      trim: "${path} doit être une chaîne sans espaces au début et à la fin",
      lowercase: "${path} doit être en minuscules",
      uppercase: "${path} doit être en majuscules",
      selected: "${path} doit être sélectionné",
    },
    number: {
      min: "${path} doit être supérieur ou égal à ${min}",
      max: "${path} doit être inférieur ou égal à ${max}",
      lessThan: "${path} doit être inférieur à ${less}",
      moreThan: "${path} doit être supérieur à ${more}",
      notEqual: "${path} ne doit pas être égal à ${notEqual}",
      positive: "${path} doit être un nombre positif",
      negative: "${path} doit être un nombre négatif",
      integer: "${path} doit être un nombre entier",
    },
    date: {
      min: "${path} doit être postérieur à ${min}",
      max: "${path} doit être antérieur à ${max}",
    },
    boolean: {},
    object: {
      noUnknown:
        "${path} ne doit pas contenir de clés non spécifiées dans l'objet",
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} est requis`
          : `${path} doit contenir au moins ${min} éléments`,
      max: "${path} doit contenir au maximum ${max} éléments",
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: "Téléverser",
    image: "Vous devez téléverser une image",
    size: "Le fichier est trop volumineux. La taille maximale autorisée est de {0}",
    formats: `Format invalide. Doit être l'un des suivants : {0}.`,
  },

  settings: {
    title: "Paramètres",
    menu: "Paramètres",
    save: {
      success:
        "Paramètres enregistrés avec succès. La page se rechargera dans {0} secondes pour appliquer les modifications.",
    },
    fields: {
      theme: "Thème",
      logos: "Logo",
      backgroundImages: "Image d'arrière-plan",
    },
    colors: {
      default: "Sombre",
      light: "Clair",
      cyan: "Cyan",
      "geek-blue": "Geek Bleu",
      gold: "Or",
      lime: "Citron vert",
      magenta: "Magenta",
      orange: "Orange",
      "polar-green": "Vert polaire",
      purple: "Violet",
      red: "Rouge",
      volcano: "Volcan",
      yellow: "Jaune",
    },
  },
  dashboard: {
    menu: "Tableau de bord",
    valider: "Valider",
    file: "Aucun fichier sélectionné",
    typecsv: "Type de fichier invalide. Veuillez sélectionner un fichier CSV.",
    reset: "Réinitialiser",
    phone: "Télécharger des numéros",
    check: "Vérifier le numéro",
    labelphone: "Écrire le numéro de téléphone",
    add: "Ajouter un numéro",
    download: "Télécharger le modèle",
    added: "Numéro ajouté",
    duplicated: "Numéro dupliqué",
    Wrong: "Numéro incorrect",
    notFound: "Désolé, nous n'avons pas pu trouver les éléments recherchés.",
    validation: "Numéro ajouté avec succès",
    Success: "Numéro ajouté avec succès",
    numberValidation: "Écrivez un numéro valide. Merci.",
    message:
      "Cette page utilise des données fictives à des fins de démonstration uniquement. Vous pouvez la modifier dans frontend/view/dashboard/DashboardPage.ts.",
    charts: {
      day: "Jour",
      red: "Rouge",
      green: "Vert",
      yellow: "Jaune",
      grey: "Gris",
      blue: "Bleu",
      orange: "Orange",
      months: {
        1: "Janvier",
        2: "Février",
        3: "Mars",
        4: "Avril",
        5: "Mai",
        6: "Juin",
        7: "Juillet",
        8: "Août",
        9: "Septembre",
        10: "Octobre",
        11: "Novembre",
        12: "Décembre",
      },
      eating: "Manger",
      drinking: "Boire",
      sleeping: "Dormir",
      designing: "Conception",
      coding: "Codage",
      cycling: "Cyclisme",
      running: "Course",
      customer: "Client",
      objectif: "Objectifs par statut",
      projectS: "Projets par statut",
      projectT: "Projets par type",
      adherent: "Nombre de membres",
      news: "Nombre de nouvelles",
      project: "Nombre de projets",
      partner: "Nombre de partenaires",
      nodata: "aucune donnée à afficher",
    },
  },
  imagesViewer: {
    noImage: "Aucune image",
  },
  autocomplete: {
    loading: "Chargement...",
    noOptions: "Aucune donnée trouvée",
  },
  table: {
    noData: "Aucun enregistrement trouvé",
    loading: "Chargement...",
  },
  footer: {
    copyright: "© {0} GoToMarketersers Marketing numérique",
  },
  preview: {
    error: "Cette opération n'est pas autorisée en mode aperçu.",
  },

};

export default fr;
