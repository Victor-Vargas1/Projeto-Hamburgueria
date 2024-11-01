//Garante que o javascript seja executado somente após o carregamento da interface
document.addEventListener("DOMContentLoaded", () => {
  //Gerando um coleção de informações (arrays) permite armazenar varios valores.
  const sobremesaData = [
    {
      name: "Petit Gâteau",
      image: "./Sobremesas/Petit-Gateau.jpg",
      ingredientes: "Com recheio cremoso, acompanhado de sorvete de creme.",
      preco: "R$ 20,00",
    },
    {
      name: "Brownie com Sorvete",
      image: "./Sobremesas/Brownie.jpg",
      ingredientes:
        "Brownie de chocolate com recheio cremoso, acompanhado de sorvete de creme.",
      preco: "R$ 15,00",
    },
    {
      name: "Churros Recheados",
      image: "./Sobremesas/mini-churros.jpg",
      ingredientes:
        "Mini churros fritos, recheados com doce de leite ou Nutella, polvilhados com açúcar e canela.",
      preco: "R$ 10,00",
    },
    {
      name: "Torta de fruta",
      image: "./Sobremesas/tortaDeFrutas.jpg",
      ingredientes:
        "Torta de limão, morango, manga ou uva com base crocante e merengue.",
      preco: "R$ 9,90",
    },
    {
      name: "Milkshake Gourmet",
      image: "./Sobremesas/milkShake.jpg",
      ingredientes: "Chocolate, Morango, Nutella ou Ovomaltine.",
      preco: "R$ 12,00",
    },
    {
      name: "Sorvetes",
      image: "./Sobremesas/sorvetes.jpg",
      ingredientes:
        "Napolitano com cobertura de caramelo, Chocolate ou Frutas vermelhas.",
      preco: "R$ 8,90",
    },
    {
      name: "Cookies Recheados",
      image: "./Sobremesas/cookies.jpg",
      ingredientes:
        "Cookies caseiros com recheio de Chocolate ou Doce de leite.",
      preco: "R$ 8,90",
    },
    {
      name: "Açaí no Copo",
      image: "./Sobremesas/acai.jpg",
      ingredientes:
        "Açaí com acompanhamentos de Granola, Leite condensado, e Frutas.",
      preco: "R$ 10,90",
    },
  ];
  //---------------------Inicio config sobremesas----------------
  const sobremesaGrid = document.querySelector(".sobremesas-grid");

  sobremesaData.forEach((sobremesa) => {
    const sobremesaCard = document.createElement("div");
    sobremesaCard.classList.add("sobremesa-card");

    sobremesaCard.innerHTML = `
    <img src="${sobremesa.image}" alt="imagem do ${sobremesa.name}">
    <div>
    <h3>${sobremesa.name}</h3>
    </div>
    <div class="ingredientes">${sobremesa.ingredientes}</div>
    `;

    sobremesaGrid.appendChild(sobremesaCard);

    const trocaElementos = sobremesaCard.querySelector("h3");
    let nomeInicial = true; // ESTADO INICIAL, MOSTRANDO O NOME

    setInterval(() => {
      if (nomeInicial) {
        trocaElementos.textContent = sobremesa.preco;
      } else {
        trocaElementos.textContent = sobremesa.name;
      }
      nomeInicial = !nomeInicial; // ALTERNA ENTRE NOME E PREÇO
    }, 5000); // INTERVALO DE 5 SEGUNDOS
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const lanchesData = [
    {
      name: "Classic BBQ",
      image: "./Hamburgueres/classicBBQ.jpg",
      ingredientes:
        "Pão brioche, hambúrguer bovino, queijo cheddar, bacon, molho BBQ",
      preco: "R$ 29,90",
    },
    {
      name: "Smoked Delight",
      image: "./Hamburgueres/smokedDelight.png",
      ingredientes:
        "Pão australiano, hambúrguer defumado, queijo prato, cebola caramelizada",
      preco: "R$ 34,90",
    },
    {
      name: "Cheddar Bacon Blast",
      image: "./Hamburgueres/cheddarBacon.jpg",
      ingredientes:
        "Pão de milho, hambúrguer bovino, cheddar, bacon crocante, maionese especial",
      preco: "R$ 32,90",
    },
    {
      name: "Green Ranch",
      image: "./Hamburgueres/greenRanch.jpg",
      ingredientes:
        "Pão integral, hambúrguer de grão-de-bico, alface, tomate, molho ranch.",
      preco: "R$ 24,90",
    },
    {
      name: "Triple Cheese Madness",
      image: "./lanches/tripleCheeseMadness.jpg",
      ingredientes:
        "Pão brioche, três tipos de queijo(cheddar, prato,suíço), cebola crispy.",
      preco: "R$ 27,90",
    },
    {
      name: "Spicy Volcano",
      image: "./lanches/spicyVolcano.jpeg",
      ingredientes:
        "Pão tradicional, hambúrguer bovino apimentado, queijo cheddar, jalapeños, maionese picante",
      preco: "R$ 32,90",
    },
    {
      name: "The Chicken King",
      image: "./Hamburgueres/frango.png",
      ingredientes:
        "Pão de gergelim, filé de frango grelhado, alface, tomate, molho especial",
      preco: "R$ 28,90",
    },
    {
      name: "D.Burger Deluxe",
      image: "./lanches/dBurguerDeluxe.jpg",
      ingredientes:
        "Pão brioche, hambúrguer bovino 180g, queijo gouda, rúcula, cebola roxa, maionese de ervas",
      preco: "R$ 32,90",
    },
  ];

  const lanchesGrid = document.querySelector(".lanches-grid");

  //INICIO DO CODIGO DE LANCHES

  lanchesData.forEach((lanches) => {
    const lanchesCard = document.createElement("div");
    lanchesCard.classList.add("lanches-card");

    lanchesCard.innerHTML = `
      <img src="${lanches.image}" alt="imagem do ${lanches.name}">
      <div>
      <h3>${lanches.name}</h3>
      </div>
      <div class="ingredientes">${lanches.ingredientes}</div>
      `;

    lanchesGrid.appendChild(lanchesCard);

    const trocaElementos = lanchesCard.querySelector("h3");
    let nomeInicial = true; // ESTADO INICIAL, MOSTRANDO O NOME

    setInterval(() => {
      if (nomeInicial) {
        trocaElementos.textContent = lanches.preco;
      } else {
        trocaElementos.textContent = lanches.name;
      }
      nomeInicial = !nomeInicial; // ALTERNA ENTRE NOME E PREÇO
    }, 5000); // INTERVALO DE 5 SEGUNDOS
  });
});

//-----------------INICIANDO A CONST DE BEBIDAS---------------

document.addEventListener("DOMContentLoaded", () => {
  //Iniciando as modificações na tela lanches
  //Garante que o javascript seja executado somente após o carregamento da interface
  const bebidasData = [
    {
      name: "Coca-Cola",
      image:
        "https://www.shutterstock.com/image-photo/poznan-pol-aug-13-2019-600nw-2458808941.jpg",
      ingredientes: "Lata 350ml",
      preco: "R$ 6,00",
    },
    {
      name: "Guaraná Antartica",
      image:
        "https://newtrade.com.br/wp-content/uploads/2015/05/Guarana-Antartica.jpg",
      ingredientes: "Lata 350ml",
      preco: "R$ 5,50",
    },
    {
      name: "Suco de Laranja",
      image:
        "https://media.istockphoto.com/id/1158980367/pt/foto/woman-hand-pouring-orange-juice-on-glasses-with-slice-orange-on-wooden-background.jpg?s=612x612&w=0&k=20&c=nvOtCjZDsMjKM5DWxXaU5bY2KnUrEXEKUb781sqMG9Q=",
      ingredientes: "Copo 300ml",
      preco: "R$ 8,90",
    },
    {
      name: "Suco de Limão",
      image:
        "https://www.receiteria.com.br/wp-content/uploads/receitas-de-suco-de-limao.jpg",
      ingredientes: "Copo 300ml",
      preco: "R$ 6,90",
    },
    {
      name: "Água Com Gás",
      image:
        "https://media.istockphoto.com/id/1303712939/pt/foto/hard-seltzer-cocktail-with-orange-and-zero-waste-bartenders-accessories.jpg?s=612x612&w=0&k=20&c=ZtxG54QfNgYTJFfTiupR4rPu0T2z3KgWs_wPsX8z03k=",
      ingredientes: "600ml",
      preco: "R$ 4,50",
    },
    {
      name: "Água Mineral",
      image:
        "https://cdn.casapraticaqualita.com.br/wp-content/uploads/sites/2/2019/05/Agua-com-gas.jpg",
      ingredientes: "600ml",
      preco: "R$ 3,90",
    },
    {
      name: "Heineken",
      image:
        "https://img.freepik.com/fotos-premium/uma-garrafa-de-alcool-verde-com-um-rotulo-que-diz-heineken_900775-9054.jpg",
      ingredientes: "Long Neck 355ml",
      preco: "R$ 12,00",
    },
    {
      name: "Budweiser",
      image:
        "https://www.shutterstock.com/image-photo/close-seven-bottles-american-beer-600nw-1830434468.jpg",
      ingredientes: "Long Neck 355ml",
      preco: "R$ 10,00",
    },
  ];

  //---------------------Inicio config bebidas----------------
  const bebidasGrid = document.querySelector(".bebidas-grid");

  bebidasData.forEach((bebidas) => {
    const bebidasCard = document.createElement("div");
    bebidasCard.classList.add("bebidas-card");

    bebidasCard.innerHTML = `
      <img src="${bebidas.image}" alt="imagem do ${bebidas.name}">
      <div>
      <h3>${bebidas.name}</h3>
      </div>
      <div class="ingredientes">${bebidas.ingredientes}</div>
      `;

    bebidasGrid.appendChild(bebidasCard);

    const trocaElementos = bebidasCard.querySelector("h3");
    let nomeInicial = true; // ESTADO INICIAL, MOSTRANDO O NOME

    setInterval(() => {
      if (nomeInicial) {
        trocaElementos.textContent = bebidas.preco;
      } else {
        trocaElementos.textContent = bebidas.name;
      }
      nomeInicial = !nomeInicial; // ALTERNA ENTRE NOME E PREÇO
    }, 5000); // INTERVALO DE 5 SEGUNDOS
  });
});

/*Adiciona uma mensagem de sucesso ou erro após o envio*/
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("sugestaoForm");
  const sucessoMsg = document.getElementById("sucessoMsg");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão para exibir mensagem de sucesso

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
    })
      .then((response) => {
        if (response.ok) {
          sucessoMsg.style.display = "block"; // Exibe mensagem de sucesso
          form.reset(); // Limpa o formulário após o envio
        } else {
          alert("Ocorreu um erro ao enviar a sugestão. Tente novamente.");
        }
      })
      .catch((error) => {
        console.error("Erro:", error);
        alert("Erro ao enviar. Verifique sua conexão e tente novamente.");
      });
  });
});
