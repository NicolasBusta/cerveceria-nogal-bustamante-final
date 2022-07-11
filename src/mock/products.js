export const products = [
    {   id: 1,
        name: 'Cerveza Golden Ale',
        price: 300,
        stock: 15,
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/092/868/products/golden1-079e8baa064f9f5ac915188064078073-480-0.jpg',
        category: 'rubias',
        description:
            'Tiene un agradable color dorado, amargor liviano, carbonatación media-alta, un suave sabor a cereal hace el soporte dulce para la combinación de lúpulos alemanes y americanos que entregan frescas notas cítricas y florales, cuerpo medio y agradable espuma. Fácil de hacer y de beber.',
    },
    {   id: 2,
        name: 'Cerveza Scottish',
        price: 320,
        description: 'Se caracteriza por un pronunciado carácter malteado, amargor leve y una terminación ligeramente dulce, contenido alcohólico medio, buen cuerpo y excelente sabor.',
        img: 'https://tiradordecervezaparacasa.com/wp-content/uploads/2021/07/cerveza-ale.jpg',
        category: 'rojas',
        stock: 10
  },
  {
        id: 3,
        name: 'Cerveza Stout',
        price: 300,
        description: 'se caracteriza por ser muy oscura, casi negra, tostada y con un contenido alcohólico que va de un 6 % a un 12 %, aunque también las hay más ligeras. Destacan los aromas a café y chocolate, su espuma es densa y en el sabor predomina el dulzor de las maltas, que le da un potente final amargo.',
        img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/827/360/products/stout1-d8c594f37ede8e392d15870446888627-240-0.jpg',
        category: 'negras',
        stock: 8
  },
  {
    id: 4,
    name: "Cerveza Ipa",
    price: 400,
    description: "se caracterizan por ser cervezas de alta graduación alcohólica (entre 5º y 7º), tener una mayor cantidad de lúpulo y por lo tanto un amargor (a partir normalmente de los 40 IBUs) y aroma intensos y cierta complejidad en el paladar.",
    category: 'rubias',
    img: "https://recetasdecerveza.net/wp-content/uploads/2018/07/Recetas-de-English-IPA.jpg",
    stock: 15
  },
  {
    id: 5,
    name: "Cerveza Honey ",
    price: 400,
    description: "El lúpulo aporta aromas y sabores florales, algo picantes, pero sutiles sin enmascarar los aromas aportados por la miel. El nivel de amargor es bajo, predominando el dejo dulce en el paladar. Es una cerveza de cuerpo medio a pleno, color dorado intenso y con excepcionales aromas y sabores a miel.",
    category: 'rubias',
    img: "https://vinomanos.com/wp-content/uploads/2019/02/cerveza-honey.jpg",
    stock: 13
  },
  {
    id: 6,
    name: "Cerveza de Trigo ",
    price: 380,
    description: "Las cervezas de trigo no se hacen con 100% malta de trigo, pero sí tienen una cantidad elevada de este cereal, normalmente contienen una mezcla de entre un 50% y un 70% de malta de trigo, y el resto de malta de cebada. 2. Son cervezas de alta fermentación.",
    category: 'rubias',
    img: "https://www.forbeerslovers.com/images/posts/-c455acd0c36f36aab4f33296325b0531.jpg",
    stock: 11
  },
  {
    id: 7,
    name: "Cerveza Porter",
    price: 500,
    description: "Una Porter es una cerveza cremosa que en aroma y sabor destaca por las notas de chocolate, caramelo y galleta. La Espiga Porter se trata de una cerveza de 5º de alcohol y un amargor que se sitúa en los 57 IBU.",
    category: 'negras',
    img: "https://recetasdecerveza.net/wp-content/uploads/2018/07/Recetas-de-American-Porter.jpg",
    stock: 16
  },
  {
    id: 8,
    name: "Cerveza Irish Red",
    price: 400,
    description: "De color cobre profundo, medianamente turbia, con espuma densa y cremosa. En nariz se aprecian aromas a caramelo con suaves notas a lúpulo. En boca se denota un leve dulzor y sabor a granos tostados.",
    category: 'rojas',
    img: "https://recetasdecerveza.net/wp-content/uploads/2018/07/Recetas-de-Irish-Red-Ale.jpg",
    stock: 17
  },
  {
    id: 9,
    name: "Cerveza oktoberfest ",
    price: 500,
    description: "El aroma de las Festbier es de moderada riqueza maltosa. Con un énfasis en los aromáticos-tostados, masa de pan y una impresión de dulzor. Lúpulo bajo a medio-bajo floral, herbal o especiado. La malta no debería tener una cualidad a tostado profundo, caramelo o bizcocho. Carácter limpio de fermentación lager.",
    category: 'rubias',
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZkpQlR39OjP9t9SFZZjp6NhzogSpEUNW-jA&usqp=CAU"
  },
  {
    id: 10,
    name: "Cerveza Brown Ale",
    price: 300,
    description: "La brown ale es un tipo de cerveza de fabricación, herencia de las adaptaciones caseras americanas de la elaboración de la cerveza de ciertas ales del norte de Inglaterra. Su gama de color abarca desde el ámbar profundo al marrón. Los sabores de caramelo y de chocolate son evidentes, debido al uso de la malta tostada.",
    category: 'rubias',
    img: "https://www.cerveza-artesanal.co/wp-content/uploads/2019/09/cerveza-brown-ale-cafe-1200x1044.jpg"
  }
];

export const traerProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products);
    }, 2000);
});
