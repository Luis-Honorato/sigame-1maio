const CHURCHES = [
  {
    id: "imw-aeroclube",
    nome: "IMW Aeroclube",
    endereco: {
      full: "Rua Tangará, 2058 - Castanheira, Porto Velho - RO",
      bairro: "Castanheira",
      cidade: "Porto Velho",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Tangar%C3%A1+2058+Castanheira+Porto+Velho+RO",
      available: true
    },
    lider: {
      nome: "Miss Neide",
      displayPhone: "(69) 9 9222-6301",
      whatsappUrl: "https://wa.me/556992226301",
      available: true
    },
    coords: { lat: -8.7975108, lng: -63.8645734 }
  },
  {
    id: "imw-alphaville",
    nome: "IMW Alphaville",
    endereco: {
      full: "Av. Imigrantes, 6066 - Aponiã, Porto Velho - RO",
      bairro: "Aponiã",
      cidade: "Porto Velho",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Av+Imigrantes+6066+Aponi%C3%A3+Porto+Velho+RO",
      available: true
    },
    lider: {
      nome: "Pr. Pedro",
      displayPhone: "(69) 9 9334-0568",
      whatsappUrl: "https://wa.me/556993340568",
      available: true
    },
    coords: { lat: -8.7336121, lng: -63.8593112 }
  },
  {
    id: "imw-anchieta",
    nome: "IMW Anchieta",
    endereco: {
      full: "Rua Anchieta, 2179 - São Francisco, Porto Velho - RO",
      bairro: "São Francisco",
      cidade: "Porto Velho",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Anchieta+2179+S%C3%A3o+Francisco+Porto+Velho+RO",
      available: true
    },
    lider: {
      nome: "Isabeli",
      displayPhone: "(69) 9 9334-2949",
      whatsappUrl: "https://wa.me/556993342949",
      available: true
    },
    coords: { lat: -8.7732972, lng: -63.8234488 }
  },
  {
    id: "imw-areal",
    nome: "IMW Areal",
    endereco: {
      full: "Rua Alexandre Guimarães, 1586 - Areal, Porto Velho - RO",
      bairro: "Areal",
      cidade: "Porto Velho",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Alexandre+Guimar%C3%A3es+1586+Areal+Porto+Velho+RO",
      available: true
    },
    lider: {
      nome: "José Jr",
      displayPhone: "(69) 9 9846-2269",
      whatsappUrl: "https://wa.me/5569984622690",
      available: true
    },
    coords: { lat: -8.7732402, lng: -63.8998888 }
  },
  {
    id: "imw-areal-da-floresta",
    nome: "IMW Areal da Floresta",
    endereco: {
      full: "Rua Raissa Lopes, 4077 - Floresta, Porto Velho - RO",
      bairro: "Floresta",
      cidade: "Porto Velho",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Raissa+Lopes+4077+Floresta+Porto+Velho+RO",
      available: true
    },
    lider: {
      nome: "Victória",
      displayPhone: "(69) 9 9270-0319",
      whatsappUrl: "https://wa.me/556992700319",
      available: true
    },
    coords: { lat: -8.7879938, lng: -63.8879174 }
  },
  {
    id: "imw-calama",
    nome: "IMW Calama",
    endereco: {
      full: "Av. Calama, 4517 - Flodoaldo Pontes Pinto, Porto Velho - RO",
      bairro: "Flodoaldo Pontes Pinto",
      cidade: "Porto Velho",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Av+Calama+4517+Flodoaldo+Pontes+Pinto+Porto+Velho+RO",
      available: true
    },
    lider: {
      nome: "Helena",
      displayPhone: "(69) 9 9202-9482",
      whatsappUrl: "https://wa.me/556992029482",
      available: true
    },
    coords: { lat: -8.7467456, lng: -63.8765183 }
  },
  {
    id: "imw-candeias-do-jamari",
    nome: "IMW Candeias do Jamari",
    endereco: {
      full: "Rua 21 de Abril, 657 - União, Candeias do Jamari - RO",
      bairro: "União",
      cidade: "Candeias do Jamari",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+21+de+Abril+657+Uni%C3%A3o+Candeias+do+Jamari+RO",
      available: true
    },
    lider: {
      nome: null,
      displayPhone: null,
      whatsappUrl: null,
      available: false
    },
    coords: { lat: -8.7949939, lng: -63.7018851 }
  },
  {
    id: "imw-castanheira",
    nome: "IMW Castanheira",
    endereco: {
      full: "Rua Brasil, 6303 - Castanheira, Porto Velho - RO",
      bairro: "Castanheira",
      cidade: "Porto Velho",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Brasil+6303+Castanheira+Porto+Velho+RO",
      available: true
    },
    lider: {
      nome: "Daniel Coelho",
      displayPhone: "(69) 9 9383-6785",
      whatsappUrl: "https://wa.me/556993836785",
      available: true
    },
    coords: { lat: -8.7951042, lng: -63.8666895 }
  },
  {
    id: "imw-central",
    nome: "IMW Central",
    endereco: {
      full: "Rua Paulo Leal, 474 - Centro, Porto Velho - RO",
      bairro: "Centro",
      cidade: "Porto Velho",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Paulo+Leal+474+Centro+Porto+Velho+RO",
      available: true
    },
    lider: {
      nome: "Luis Honorato",
      displayPhone: "(69) 9 9294-4417",
      whatsappUrl: "https://wa.me/556992944417",
      available: true
    },
    coords: { lat: -8.7651722, lng: -63.8998585 }
  },
  {
    id: "imw-cidade-nova",
    nome: "IMW Cidade Nova",
    endereco: {
      full: "Rua Humberto Florêncio, 5643 - Cidade Nova, Porto Velho - RO",
      bairro: "Cidade Nova",
      cidade: "Porto Velho",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Humberto+Flor%C3%AAncio+5643+Cidade+Nova+Porto+Velho+RO",
      available: true
    },
    lider: {
      nome: "Pr. Simplício",
      displayPhone: "(69) 9 9325-1310",
      whatsappUrl: "https://wa.me/556993251310",
      available: true
    },
    coords: { lat: -8.8115463, lng: -63.8806201 }
  },
  {
    id: "imw-cohab",
    nome: "IMW Cohab",
    endereco: {
      full: "Rua Brasil, 6303 - Castanheira, Porto Velho - RO",
      bairro: "Castanheira",
      cidade: "Porto Velho",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Brasil+6303+Castanheira+Porto+Velho+RO",
      available: true
    },
    lider: {
      nome: "Idelcemir",
      displayPhone: "(69) 9 9237-2771",
      whatsappUrl: "https://wa.me/556992372771",
      available: true
    },
    coords: { lat: -8.7951042, lng: -63.8666895 }
  },
  {
    id: "imw-comunidade-mamore",
    nome: "IMW Comunidade Mamoré",
    endereco: {
      full: "Av. José Vieira Caúla, 7231 - Igarapé, Porto Velho - RO",
      bairro: "Igarapé",
      cidade: "Porto Velho",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Av+Jos%C3%A9+Vieira+Ca%C3%BAla+7231+Igarap%C3%A9+Porto+Velho+RO",
      available: true
    },
    lider: {
      nome: "Melissa",
      displayPhone: "(69) 9 9277-8986",
      whatsappUrl: "https://wa.me/556992778986",
      available: true
    },
    coords: { lat: -8.7513696, lng: -63.8544504 }
  },
  {
    id: "imw-eletronorte",
    nome: "IMW Eletronorte",
    endereco: {
      full: "Rua Tamareira, 3277 - Vila Eletronorte, Porto Velho - RO",
      bairro: "Vila Eletronorte",
      cidade: "Porto Velho",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Tamareira+3277+Vila+Eletronorte+Porto+Velho+RO",
      available: true
    },
    lider: {
      nome: "Elissandro",
      displayPhone: "(69) 9 9271-8088",
      whatsappUrl: "https://wa.me/556992718088",
      available: true
    },
    coords: { lat: -8.7941699, lng: -63.8988018 }
  },
  {
    id: "imw-guapore",
    nome: "IMW Guaporé",
    endereco: {
      full: "Rua Joaquim da Rocha, 5670 - Caladinho, Porto Velho - RO",
      bairro: "Caladinho",
      cidade: "Porto Velho",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Joaquim+da+Rocha+5670+Caladinho+Porto+Velho+RO",
      available: true
    },
    lider: {
      nome: "Daiane",
      displayPhone: "(69) 9 9221-1712",
      whatsappUrl: "https://wa.me/556992211712",
      available: true
    },
    coords: { lat: -8.8037423, lng: -63.8717968 }
  },
  {
    id: "imw-humaita",
    nome: "IMW Humaitá",
    endereco: {
      full: "Rua Imigrante, 1580 - São Pedro, Humaitá - AM",
      bairro: "São Pedro",
      cidade: "Humaitá",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Imigrante+1580+S%C3%A3o+Pedro+Humait%C3%A1+AM",
      available: true
    },
    lider: {
      nome: "Pr. João",
      displayPhone: "(69) 9 9840-5718",
      whatsappUrl: "https://wa.me/5569984057189",
      available: true
    },
    coords: { lat: -7.2142800, lng: -62.9040750 }
  },
  {
    id: "imw-jk",
    nome: "IMW JK",
    endereco: {
      full: "Rua Luiz Gama, 7522 - Juscelino Kubitschek, Porto Velho - RO",
      bairro: "Juscelino Kubitschek",
      cidade: "Porto Velho",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Luiz+Gama+7522+Juscelino+Kubitschek+Porto+Velho+RO",
      available: true
    },
    lider: {
      nome: "Luiz Júnior",
      displayPhone: "(69) 9 9216-1762",
      whatsappUrl: "https://wa.me/556992161762",
      available: true
    },
    coords: { lat: -8.7693799, lng: -63.8392822 }
  },
  {
    id: "imw-lagoinha",
    nome: "IMW Lagoinha",
    endereco: {
      full: "Rua Atlético, 3503 - Lagoinha, Porto Velho - RO",
      bairro: "Lagoinha",
      cidade: "Porto Velho",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Atl%C3%A9tico+3503+Lagoinha+Porto+Velho+RO",
      available: true
    },
    lider: {
      nome: "Otto",
      displayPhone: "(69) 9 9336-9103",
      whatsappUrl: "https://wa.me/556993369103",
      available: true
    },
    coords: { lat: -8.7675336, lng: -63.8514888 }
  },
  {
    id: "imw-liberdade",
    nome: "IMW Liberdade",
    endereco: {
      full: "Rua Benjamin Constant, 2895 - Liberdade, Porto Velho - RO",
      bairro: "Liberdade",
      cidade: "Porto Velho",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Benjamin+Constant+2895+Liberdade+Porto+Velho+RO",
      available: true
    },
    lider: {
      nome: "Letícia",
      displayPhone: "(69) 9 9258-1727",
      whatsappUrl: "https://wa.me/556992581727",
      available: true
    },
    coords: { lat: -8.7535999, lng: -63.8880800 }
  },
  {
    id: "imw-marcos-freire",
    nome: "IMW Marcos Freire",
    endereco: {
      full: "Estrada dos Periquitos, 1770 B - Marcos Freire, Porto Velho - RO",
      bairro: "Marcos Freire",
      cidade: "Porto Velho",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Estrada+dos+Periquitos+1770+Marcos+Freire+Porto+Velho+RO",
      available: true
    },
    lider: {
      nome: "Eliezér",
      displayPhone: "(69) 9 9312-7155",
      whatsappUrl: "https://wa.me/556993127155",
      available: true
    },
    coords: { lat: -8.7823475, lng: -63.8019610 }
  },
  {
    id: "imw-nova-floresta",
    nome: "IMW Nova Floresta",
    endereco: {
      full: "Rua Sucupira, 4287 - Nova Floresta, Porto Velho - RO",
      bairro: "Nova Floresta",
      cidade: "Porto Velho",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Sucupira+4287+Nova+Floresta+Porto+Velho+RO",
      available: true
    },
    lider: {
      nome: null,
      displayPhone: null,
      whatsappUrl: null,
      available: false
    },
    coords: { lat: -8.7918718, lng: -63.8895184 }
  },
  {
    id: "imw-olaria",
    nome: "IMW Olaria",
    endereco: {
      full: "Rua Gonçalves Dias, 1186 - Olaria, Porto Velho - RO",
      bairro: "Olaria",
      cidade: "Porto Velho",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Gon%C3%A7alves+Dias+1186+Olaria+Porto+Velho+RO",
      available: true
    },
    lider: {
      nome: "Gabriel",
      displayPhone: "(69) 9 8456-8384",
      whatsappUrl: "https://wa.me/556984568384",
      available: true
    },
    coords: { lat: -8.7527036, lng: -63.9046257 }
  },
  {
    id: "imw-pedrinhas",
    nome: "IMW Pedrinhas",
    endereco: {
      full: "Rua José de Alencar, 4747 - Pedrinhas, Porto Velho - RO",
      bairro: "Pedrinhas",
      cidade: "Porto Velho",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Jos%C3%A9+de+Alencar+4747+Pedrinhas+Porto+Velho+RO",
      available: true
    },
    lider: {
      nome: "Edilene",
      displayPhone: "(69) 9 9277-9651",
      whatsappUrl: "https://wa.me/556992779651",
      available: true
    },
    coords: { lat: -8.7461009, lng: -63.9093446 }
  },
  {
    id: "imw-rio-de-janeiro",
    nome: "IMW Rio de Janeiro",
    endereco: {
      full: "Av. Rio de Janeiro, 5055 - Agenor de Carvalho, Porto Velho - RO",
      bairro: "Agenor de Carvalho",
      cidade: "Porto Velho",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Av+Rio+de+Janeiro+5055+Agenor+de+Carvalho+Porto+Velho+RO",
      available: true
    },
    lider: {
      nome: "Karine",
      displayPhone: "(69) 9 9268-6494",
      whatsappUrl: "https://wa.me/556992686494",
      available: true
    },
    coords: { lat: -8.7692588, lng: -63.8726531 }
  },
  {
    id: "imw-rio-jamari",
    nome: "IMW Rio Jamari",
    endereco: {
      full: "Rua Vila Nova, 6471 - 3 Marias, Porto Velho - RO",
      bairro: "3 Marias",
      cidade: "Porto Velho",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Vila+Nova+6471+3+Marias+Porto+Velho+RO",
      available: true
    },
    lider: {
      nome: "Maria Luiza",
      displayPhone: "(69) 9 9307-0637",
      whatsappUrl: "https://wa.me/556993070637",
      available: true
    },
    coords: { lat: -8.7749675, lng: -63.8548768 }
  },
  {
    id: "imw-tancredo-neves",
    nome: "IMW Tancredo Neves",
    endereco: {
      full: "Rua Alexandre Guimarães, 8137 - Tancredo Neves, Porto Velho - RO",
      bairro: "Tancredo Neves",
      cidade: "Porto Velho",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Alexandre+Guimar%C3%A3es+8137+Tancredo+Neves+Porto+Velho+RO",
      available: true
    },
    lider: {
      nome: "Luis Cláudio",
      displayPhone: "(69) 9 9261-2346",
      whatsappUrl: "https://wa.me/556992612346",
      available: true
    },
    coords: { lat: -8.7604953, lng: -63.8437009 }
  },
  {
    id: "imw-uniao-da-vitoria",
    nome: "IMW União da Vitória",
    endereco: {
      full: "Av. Calama, 7110 - União da Vitória, Porto Velho - RO",
      bairro: "União da Vitória",
      cidade: "Porto Velho",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Av+Calama+7110+Uni%C3%A3o+da+Vit%C3%B3ria+Porto+Velho+RO",
      available: true
    },
    lider: {
      nome: "Bárbara",
      displayPhone: "(69) 9 9274-0637",
      whatsappUrl: "https://wa.me/556992740637",
      available: true
    },
    coords: { lat: -8.7486791, lng: -63.8854803 }
  }
];
