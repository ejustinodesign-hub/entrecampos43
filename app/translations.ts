export interface Translations {
  nav: {
    sobre: string;
    localizacao: string;
    tipologias: string;
    plantas: string;
    precos: string;
    galeria: string;
    contacto: string;
    cta: string;
  };
  hero: {
    location: string;
    title1: string;
    title2: string;
    tagline: string;
    ctaApts: string;
    ctaContact: string;
    scroll: string;
  };
  sobre: {
    label: string;
    title1: string;
    title2: string;
    body1: string;
    body2: string;
    features: string[];
    paymentLabel: string;
    paymentValue: string;
  };
  localizacao: {
    label: string;
    title: string;
    body: string;
    highlights: { label: string; dist: string }[];
    addressNote: string;
  };
  tipologias: {
    label: string;
    title: string;
    hallEntrada: string;
    areasComuns: string;
    areaLabel: string;
    precoLabel: string;
    verPlanta: string;
    cards: {
      tipo: string;
      descricao: string;
      area: string;
      preco: string;
    }[];
  };
  plantas: {
    label: string;
    title: string;
    estac: string;
    varanda: string;
    modalLabels: {
      tipologia: string;
      area: string;
      fracoes: string;
      extras: string;
      cta: string;
      none: string;
      parking: string;
      varanda: string;
    };
    tipos: {
      label: string;
      fracoes: string;
    }[];
  };
  precos: {
    label: string;
    title: string;
    headers: string[];
    fracao: string;
    steps: { label: string; value: string }[];
    disclaimer: string;
    extras: {
      parking: string;
      varanda: string;
    };
  };
  galeria: {
    label: string;
    title: string;
    images: string[];
  };
  contacto: {
    label: string;
    title: string;
    body: string;
    agentLabel: string;
    agentRole: string;
    construtora: string;
    conclusao: string;
    formLabels: {
      nome: string;
      telefone: string;
      email: string;
      fracao: string;
      mensagem: string;
      fracaoDefault: string;
      nomePlaceholder: string;
      telPlaceholder: string;
      emailPlaceholder: string;
      msgPlaceholder: string;
      submit: string;
      legal: string;
    };
    success: {
      title: string;
      body: string;
      reset: string;
    };
  };
  footer: {
    construtora: string;
    mediacao: string;
    address: string;
    mediadorLine: string;
    legal: string;
  };
}

export const pt: Translations = {
  nav: {
    sobre: "Sobre",
    localizacao: "Localização",
    tipologias: "Tipologias",
    plantas: "Plantas",
    precos: "Preços",
    galeria: "Galeria",
    contacto: "Contacto",
    cta: "Contactar",
  },
  hero: {
    location: "Rua de Entrecampos, Lisboa",
    title1: "O seu T1",
    title2: "em Lisboa",
    tagline: "Viver perto de tudo",
    ctaApts: "Ver Apartamentos",
    ctaContact: "Contactar",
    scroll: "Scroll",
  },
  sobre: {
    label: "O Empreendimento",
    title1: "Viver perto",
    title2: "de tudo",
    body1:
      "Entrecampos 43 nasce no coração de uma das zonas mais dinâmicas de Lisboa, na Rua de Entrecampos. Um empreendimento pensado para quem vive a cidade ao ritmo certo, entre mobilidade, conveniência e qualidade de vida.",
    body2:
      "Composto por 13 frações de tipologia T0 e T1, o Entrecampos 43 responde às necessidades de estudantes, jovens profissionais e trabalhadores urbanos que valorizam funcionalidade, conforto e uma localização estratégica.",
    features: [
      "Construção nova com estrutura antissísmica",
      "AC de conduta em todos os apartamentos",
      "Cozinhas totalmente equipadas",
      "Estacionamento disponível (maioria das frações)",
      "Exposição solar nascente/poente",
    ],
    paymentLabel: "Plano de Pagamento",
    paymentValue: "Reserva 5.000 € · CPCV 10% · Escritura 90%",
  },
  localizacao: {
    label: "Onde Estamos",
    title: "Localização Premium",
    body: "A Rua de Entrecampos ocupa uma posição estratégica no mapa de Lisboa, funcionando como um verdadeiro eixo de ligação entre o centro histórico, as zonas empresariais e os principais polos universitários da cidade.",
    highlights: [
      { label: "Metro & Comboio Entrecampos", dist: "2 min a pé" },
      { label: "ISCTE / Cidade Universitária", dist: "5 min" },
      { label: "Aeroporto de Lisboa", dist: "15 min" },
      { label: "Hospital de Santa Maria", dist: "8 min" },
      { label: "Comércio e Serviços", dist: "Na porta" },
      { label: "Centro Histórico", dist: "10 min" },
    ],
    addressNote:
      "Um dos maiores hubs de transporte público da capital, com metro, comboio e autocarros, garantindo mobilidade eficiente e sustentável.",
  },
  tipologias: {
    label: "Os Apartamentos",
    title: "Tipologias",
    hallEntrada: "Hall de Entrada",
    areasComuns: "Áreas Comuns",
    areaLabel: "Área Privativa",
    precoLabel: "Preço",
    verPlanta: "Ver Planta",
    cards: [
      {
        tipo: "T0",
        descricao:
          "Estúdio moderno, inteligente e funcional. Layout otimizado para conforto urbano e rentabilidade de investimento.",
        area: "39,61 m²",
        preco: "450.000 €",
      },
      {
        tipo: "T1 — Tipo A",
        descricao:
          "Apartamento T1 de menor dimensão, com distribuição eficiente. Ideal para investimento ou habitação própria.",
        area: "54 – 65 m²",
        preco: "a partir de 530.000 €",
      },
      {
        tipo: "T1 — Tipo B",
        descricao:
          "T1 com varanda e excelente exposição solar. Ambientes generosos e acabamentos de alta qualidade.",
        area: "56 – 73 m²",
        preco: "a partir de 550.000 €",
      },
      {
        tipo: "T1 — Tipo C",
        descricao:
          "O maior T1 do empreendimento. Espaços amplos, varanda e estacionamento incluído. O melhor de Lisboa.",
        area: "65 – 80 m²",
        preco: "a partir de 575.000 €",
      },
    ],
  },
  plantas: {
    label: "Plantas dos Apartamentos",
    title: "4 Layouts Distintos",
    estac: "Estac.",
    varanda: "Varanda",
    modalLabels: {
      tipologia: "Tipologia",
      area: "Área",
      fracoes: "Frações",
      extras: "Extras",
      cta: "Tenho interesse nesta tipologia",
      none: "—",
      parking: "Estacionamento",
      varanda: "Varanda",
    },
    tipos: [
      { label: "Tipo T0", fracoes: "Fração A" },
      { label: "T1 — Tipo A", fracoes: "Frações B · E · H · K" },
      { label: "T1 — Tipo B", fracoes: "Frações C · F · I · L" },
      { label: "T1 — Tipo C", fracoes: "Frações D · G · J · M" },
    ],
  },
  precos: {
    label: "Tabela de Preços",
    title: "Todas as Frações",
    headers: ["Fração", "Tipo", "Piso", "Á. Bruta Privativa", "Á. Bruta Construção", "Extras", "Preço"],
    fracao: "Fração",
    steps: [
      { label: "Reserva", value: "5.000 €" },
      { label: "CPCV", value: "10% do preço" },
      { label: "Escritura", value: "90% do preço" },
    ],
    disclaimer:
      "Preços indicativos. Sujeito a alteração. Consulte o mediador para informação atualizada.",
    extras: {
      parking: "Estacionamento",
      varanda: "Varanda",
    },
  },
  galeria: {
    label: "Interiores",
    title: "Galeria",
    images: [
      "Sala T0", "Sala T1-B", "Quarto T1-B", "Sala T1-C", "Cozinha T1-C",
      "Sala T1-D", "Quarto T1-D", "Cozinha T0", "Casa de banho",
      "Varanda T1-C", "Casa de banho T1-D", "Hall de entrada",
    ],
  },
  contacto: {
    label: "Fale Connosco",
    title: "Dê o primeiro passo",
    body: "A nossa equipa está disponível para esclarecer todas as suas dúvidas sobre o Entrecampos 43 e acompanhá-lo em todo o processo de aquisição.",
    agentLabel: "Mediador Imobiliário",
    agentRole: "RE/MAX · Mediação Imobiliária",
    construtora: "Construtora",
    conclusao: "Conclusão prevista: Setembro 2026",
    formLabels: {
      nome: "Nome *",
      telefone: "Telefone",
      email: "Email *",
      fracao: "Fração de interesse",
      mensagem: "Mensagem",
      fracaoDefault: "Todas / Não sei ainda",
      nomePlaceholder: "O seu nome",
      telPlaceholder: "9XX XXX XXX",
      emailPlaceholder: "o.seu@email.com",
      msgPlaceholder: "Escreva a sua mensagem...",
      submit: "Enviar Mensagem",
      legal: "Ao submeter aceita ser contactado sobre o Entrecampos 43.",
    },
    success: {
      title: "Mensagem enviada!",
      body: "O Filipe Silva entrará em contacto brevemente.",
      reset: "Enviar nova mensagem",
    },
  },
  footer: {
    construtora: "Construtora",
    mediacao: "Mediação",
    address: "© 2025 Entrecampos 43 · Rua de Entrecampos nº 43, Lisboa",
    mediadorLine: "Filipe Silva · RE/MAX · 938 249 077",
    legal:
      "Wonderfulsix - Mediação Imobiliária, Lda | AMI 22525 | Cada agência é de propriedade e gestão independente",
  },
};

export const en: Translations = {
  nav: {
    sobre: "About",
    localizacao: "Location",
    tipologias: "Apartments",
    plantas: "Floor Plans",
    precos: "Prices",
    galeria: "Gallery",
    contacto: "Contact",
    cta: "Contact Us",
  },
  hero: {
    location: "Entrecampos Street, Lisbon",
    title1: "Your apartment",
    title2: "in Lisbon",
    tagline: "Close to everything",
    ctaApts: "View Apartments",
    ctaContact: "Contact Us",
    scroll: "Scroll",
  },
  sobre: {
    label: "The Development",
    title1: "Close to",
    title2: "everything",
    body1:
      "Entrecampos 43 is born in the heart of one of Lisbon's most dynamic areas, on Rua de Entrecampos. A development designed for those who experience the city at the right pace — between mobility, convenience and quality of life.",
    body2:
      "Comprising 13 units of T0 and T1 typologies, Entrecampos 43 meets the needs of students, young professionals and urban workers who value functionality, comfort and a strategic location.",
    features: [
      "New construction with anti-seismic structure",
      "Ducted AC in all apartments",
      "Fully equipped kitchens",
      "Parking available (most units)",
      "East/west sun exposure",
    ],
    paymentLabel: "Payment Plan",
    paymentValue: "Reservation €5,000 · CPCV 10% · Deed 90%",
  },
  localizacao: {
    label: "Where We Are",
    title: "Prime Location",
    body: "Rua de Entrecampos occupies a strategic position on Lisbon's map, serving as a true connection axis between the historic centre, business districts and the city's main university hubs.",
    highlights: [
      { label: "Entrecampos Metro & Train", dist: "2 min walk" },
      { label: "ISCTE / University City", dist: "5 min" },
      { label: "Lisbon Airport", dist: "15 min" },
      { label: "Hospital de Santa Maria", dist: "8 min" },
      { label: "Shops & Services", dist: "At the door" },
      { label: "Historic Centre", dist: "10 min" },
    ],
    addressNote:
      "One of the capital's largest public transport hubs, with metro, train and buses, ensuring efficient and sustainable mobility.",
  },
  tipologias: {
    label: "The Apartments",
    title: "Typologies",
    hallEntrada: "Entrance Hall",
    areasComuns: "Common Areas",
    areaLabel: "Private Area",
    precoLabel: "Price",
    verPlanta: "View Floor Plan",
    cards: [
      {
        tipo: "T0",
        descricao:
          "Modern, smart and functional studio. Layout optimised for urban comfort and investment returns.",
        area: "39.61 m²",
        preco: "€450,000",
      },
      {
        tipo: "T1 — Type A",
        descricao:
          "Smaller T1 apartment with efficient layout. Ideal for investment or owner occupation.",
        area: "54 – 65 m²",
        preco: "from €530,000",
      },
      {
        tipo: "T1 — Type B",
        descricao:
          "T1 with balcony and excellent sun exposure. Generous living spaces and high-quality finishes.",
        area: "56 – 73 m²",
        preco: "from €550,000",
      },
      {
        tipo: "T1 — Type C",
        descricao:
          "The largest T1 in the development. Spacious rooms, balcony and parking included. The best of Lisbon.",
        area: "65 – 80 m²",
        preco: "from €575,000",
      },
    ],
  },
  plantas: {
    label: "Apartment Floor Plans",
    title: "4 Distinct Layouts",
    estac: "Parking",
    varanda: "Balcony",
    modalLabels: {
      tipologia: "Typology",
      area: "Area",
      fracoes: "Units",
      extras: "Extras",
      cta: "I'm interested in this typology",
      none: "—",
      parking: "Parking",
      varanda: "Balcony",
    },
    tipos: [
      { label: "T0 Type", fracoes: "Unit A" },
      { label: "T1 — Type A", fracoes: "Units B · E · H · K" },
      { label: "T1 — Type B", fracoes: "Units C · F · I · L" },
      { label: "T1 — Type C", fracoes: "Units D · G · J · M" },
    ],
  },
  precos: {
    label: "Price List",
    title: "All Units",
    headers: ["Unit", "Type", "Floor", "Private Area", "Built Area", "Extras", "Price"],
    fracao: "Unit",
    steps: [
      { label: "Reservation", value: "€5,000" },
      { label: "CPCV", value: "10% of price" },
      { label: "Deed", value: "90% of price" },
    ],
    disclaimer:
      "Indicative prices. Subject to change. Please contact the agent for updated information.",
    extras: {
      parking: "Parking",
      varanda: "Balcony",
    },
  },
  galeria: {
    label: "Interiors",
    title: "Gallery",
    images: [
      "T0 Living Room", "T1-B Living Room", "T1-B Bedroom", "T1-C Living Room",
      "T1-C Kitchen", "T1-D Living Room", "T1-D Bedroom", "T0 Kitchen",
      "Bathroom", "T1-C Balcony", "T1-D Bathroom", "Entrance Hall",
    ],
  },
  contacto: {
    label: "Get In Touch",
    title: "Take the first step",
    body: "Our team is available to answer all your questions about Entrecampos 43 and guide you through the entire acquisition process.",
    agentLabel: "Real Estate Agent",
    agentRole: "RE/MAX · Real Estate",
    construtora: "Developer",
    conclusao: "Expected completion: September 2026",
    formLabels: {
      nome: "Name *",
      telefone: "Phone",
      email: "Email *",
      fracao: "Unit of interest",
      mensagem: "Message",
      fracaoDefault: "All / Not sure yet",
      nomePlaceholder: "Your name",
      telPlaceholder: "+351 9XX XXX XXX",
      emailPlaceholder: "your@email.com",
      msgPlaceholder: "Write your message...",
      submit: "Send Message",
      legal: "By submitting you agree to be contacted about Entrecampos 43.",
    },
    success: {
      title: "Message sent!",
      body: "Filipe Silva will be in touch shortly.",
      reset: "Send another message",
    },
  },
  footer: {
    construtora: "Developer",
    mediacao: "Real Estate",
    address: "© 2025 Entrecampos 43 · Rua de Entrecampos nº 43, Lisbon",
    mediadorLine: "Filipe Silva · RE/MAX · +351 938 249 077",
    legal:
      "Wonderfulsix - Real Estate Agency, Lda | AMI 22525 | Each office is independently owned and operated",
  },
};
