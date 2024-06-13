// ARRAY PRODUCTOS
const productos = [
    //FIDEOS
    {
        id: "fideos-01",
        titulo: "FIDEOS MIE ASLI 200 GR ATOOM",
        img: "./img/prod/fideos01.jpg",
        categoria: "fideos",
        precio: 2.25
    },
    {
        id: "fideos-02",
        titulo: "FIDEOS ESTILO CHINO 400 GR THAI DANCER",
        img: "./img/prod/fideos02.jpg",
        categoria: "fideos",
        precio: 3.28
    },
    {
        id: "fideos-03",
        titulo: "FIDEOS DE ARROZ BAHN PHO 1 MM 400 GR FARMER",
        img: "./img/prod/fideos03.jpg",
        categoria: "fideos",
        precio: 2.41
    },
    {
        id: "fideos-04",
        titulo: "VERMICELLI DE ARROZ 400 GR BAMBOO TREE",
        img: "./img/prod/fideos04.jpg",
        categoria: "fideos",
        precio: 2.65
    },
    {
        id: "fideos-05",
        titulo: "FIDEOS DE ARROZ 400 GR WAI WAI",
        img: "./img/prod/fideos05.jpg",
        categoria: "fideos",
        precio: 2.55
    },
    {
        id: "fideos-06",
        titulo: "FIDEOS PARA RAMEN 180 GR GOLDEN PAGODA",
        img: "./img/prod/fideos06.jpg",
        categoria: "fideos",
        precio: 0.99
    },
    //SALSAS
    {
        id: "salsas-01",
        titulo: "VINAGRE DAM TRANG 200 ML GOLDEN MOUNTAIN",
        img: "./img/prod/salsas01.jpg",
        categoria: "salsas",
        precio: 1.45
    },
    {
        id: "salsas-02",
        titulo: "PASTA DE CHILI EN ACEITE DE SOJA MEDIUM HOT 227 GR PANTAI",
        img: "./img/prod/salsas02.jpg",
        categoria: "salsas",
        precio: 3.62
    },
    {
        id: "salsas-03",
        titulo: "SALSA DE SOJA OSCURA A 700ML HEALTHY BOY",
        img: "./img/prod/salsas03.jpg",
        categoria: "condisalsasmentos",
        precio: 4.91
    },
    {
        id: "salsas-04",
        titulo: "PESCADO GOURAMY EN ESCABECHE 454 GR PANTAI",
        img: "./img/prod/salsas04.jpg",
        categoria: "salsas",
        precio: 8.46
    },
    {
        id: "salsas-05",
        titulo: "ACEITE DE ARROZ 500 ML RIZI",
        img: "./img/prod/salsas05.jpg",
        categoria: "salsas",
        precio: 3.65
    },
    {
        id: "salsas-06",
        titulo: "SALSA DE CIRUELA AGRIDULCE 700 ML HEALTHY BOY",
        img: "./img/prod/salsas06.jpg",
        categoria: "salsas",
        precio: 4.83
    },
    //CONDIMENTOS
    {
        id: "condimentos-01",
        titulo: "JENJIBRE ENCURTIDO EN VINAGRE 50 GR SHINSIN",
        img: "./img/prod/condimento01.jpg",
        categoria: "condimentos",
        precio: 2.48
    },
    {
        id: "condimentos-02",
        titulo: "WASABI 43 GR S&B",
        img: "./img/prod/condimento02.jpg",
        categoria: "condimentos",
        precio: 1.99
    },
    {
        id: "condimentos-03",
        titulo: "ALGA WAKAME ROTA 20 GR OTOMEGUSA",
        img: "./img/prod/condimento03.jpg",
        categoria: "condimentos",
        precio: 1.53
    },
    {
        id: "condimentos-04",
        titulo: "SOPA DE MISO AKA 30 GR S&B",
        img: "./img/prod/condimento04.jpg",
        categoria: "condimentos",
        precio: 2.69
    },
    {
        id: "condimentos-05",
        titulo: "SOPA INSTANTANEO DE TOFU MISO 30G S&B",
        img: "./img/prod/condimento05.jpg",
        categoria: "condimentos",
        precio: 2.69
    },
    {
        id: "condimentos-06",
        titulo: "CHILI SECADO 75 GR NANGLAM",
        img: "./img/prod/condimento06.jpg",
        categoria: "condimentos",
        precio: 1.99
    },
    //UTENSILIOS
    {
        id: "utensilios-01",
        titulo: "Cuchillo Yanagi Tojiro 21 cm",
        img: "./img/prod/utens01.jpg",
        categoria: "utensilios",
        precio: 335.50
    },
    {
        id: "utensilios-02",
        titulo: "Cuchillo Deba Tojiro 21 cm",
        img: "./img/prod/utens02.jpg",
        categoria: "utensilios",
        precio: 641.51
    },
    {
        id: "utensilios-03",
        titulo: "Cuchillo Yanagiba Tojiro Pro 27cm",
        img: "./img/prod/utens03.jpg",
        categoria: "utensilios",
        precio: 237.99
    },
    {
        id: "utensilios-04",
        titulo: "Donabe Daikoku, Olla de cerámica 6 GO",
        img: "./img/prod/utens04.jpg",
        categoria: "utensilios",
        precio: 64.80
    },
    {
        id: "utensilios-05",
        titulo: "Palillos Ezo Rykyu 20 pares 21cm",
        img: "./img/prod/utens05.jpg",
        categoria: "utensilios",
        precio: 1.98
    },
    {
        id: "utensilios-06",
        titulo: "Palillos Kotobuki Kuro 22.5 cm",
        img: "./img/prod/utens06.jpg",
        categoria: "utensilios",
        precio: 3.98
    },
    {
        id: "utensilios-07",
        titulo: "Cuenco Akaebana",
        img: "./img/prod/utens07.jpg",
        categoria: "utensilios",
        precio: 11.88
    },
    {
        id: "utensilios-08",
        titulo: "Jarra para Sake Genzo",
        img: "./img/prod/utens08.jpg",
        categoria: "utensilios",
        precio: 9.98
    },
    {
        id: "utensilios-09",
        titulo: "Vasito para Sake Wadanohara",
        img: "./img/prod/utens09.jpg",
        categoria: "utensilios",
        precio: 5.15
    },
    {
        id: "utensilios-10",
        titulo: "Cuenco Shiruwan Kuroshu 10 cm",
        img: "./img/prod/utens10.jpg",
        categoria: "utensilios",
        precio: 4.59
    },
];