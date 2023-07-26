const ARTICULOS = [
  {
    id: 1,
    title: "Ryzen 5 7600X",
    category: "Procesadores",
    price: 300,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
    img: "https://www.deffo.com.ar/wp-content/uploads/2023/04/Ryzen-5-Series-7000-X-2.webp",
    stock: 8,
  },
  {
    id: 2,
    title: "Intel Core I9-13900K",
    category: "Procesadores",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",

    price: 900,
    img: "https://d2r9epyceweg5n.cloudfront.net/stores/002/278/419/products/bx8071513900k1-23957311cf69a31be416800375161121-640-0.webp",
    stock: 6,
  },
  {
    id: 3,
    title: "Ryzen Threadripper 5950X",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",

    category: "Procesadores",
    price: 2990,
    stock: 1,
    img: "https://i0.wp.com/www.ebizlatam.com/wp-content/uploads/2022/03/AMD-Ryzen-Threadripper-PRO-Serie-5000-WX.jpg?fit=787%2C524",
  },
  {
    id: 4,
    title: "Gabinete ThermalTake RGB",
    category: "Torres",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",

    price: 150,
    img: "https://es.thermaltake.com/pub/media/wysiwyg/key3/db/products/case/VersaC22RGBsnow/main.jpg",
    stock: 25,
  },
  {
    id: 5,
    title: "Gabinete Xigmatek EROS (SIN RGB)",
    category: "Torres",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",

    price: 50,
    img: "https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/EN47222_800.jpg",
    stock: 15,
  },
  {
    id: 6,
    title: "Gabinete Corsair RGB",
    category: "Torres",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",

    price: 150,
    img: "https://s3-sa-east-1.amazonaws.com/saasargentina/EUHkMeQBSS2W8jMtevbq/imagen",
    stock: 5,
  },
  {
    id: 7,
    title: "Ryzen RX 6400XT",
    category: "Graficas",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",

    price: 220,
    img: "https://www.notebookcheck.biz/fileadmin/Notebooks/News/_nc3/MSI_RX_6400_AERO.jpg",
    stock: 2,
  },
  {
    id: 8,
    title: "Geforce GTX 1650",
    category: "Graficas",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",

    price: 50,
    img: "https://www.fullh4rd.com.ar/img/productos/3/video-geforce-gtx-1650-4gb-msi-ventus-xs-oc-0.jpg",
    stock: 15,
  },
  {
    id: 9,
    title: "Geforce RTX 3080ti",
    category: "Graficas",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",

    price: 850,
    img: "https://www.notebookcheck.org/fileadmin/Notebooks/NVIDIA/GeForce_RTX_3080_Ti_Founders_Edition/Ampere_3080Ti_Back_1.jpg",
    stock: 5,
  },
  {
    id: 10,
    title: "Radeon RX 7800 XT",
    category: "Graficas",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",

    price: 950,
    img: "https://www.muycomputer.com/wp-content/uploads/2023/02/Radeon-RX-7800.jpg",
    stock: 5,
  },
];
export const getArticulos = (id) => {
  const _articulos = id
    ? ARTICULOS.filter((articulo) => articulo.category.toLowerCase() === id)
    : ARTICULOS;

  return new Promise((res) => {
    setTimeout(() => {
      res(_articulos);
    }, 500);
  });
};

export const getArticulo = (id) => {
  const articulo = ARTICULOS.filter((articulo) => articulo.id === id)[0];

  return new Promise((res) => {
    setTimeout(() => {
      res(articulo);
    }, 500);
  });
};
