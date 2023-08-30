import hoodeiAfrica from "@/assets/hoodie-africa.webp";
import hoodeiSouthAmerica from "@/assets/hoodie-south-america.webp";
import tshirtNorth from "@/assets/tshirt-north.webp";
import tshirtEU from "@/assets/tshirt-eu.webp";

const Products = [
  {
    id: 1,
    name: "Hoodie Africa",
    description: "A comfortable and stylish hoodie with Africa design.",
    price: 2100,
    sizes: ["S", "M", "L", "XL"],

    colors: ["White", "Black"],
    imageSrc: hoodeiAfrica,

    imageAlt: "Hoodie Africa",
  },
  {
    id: 2,
    name: "Hoodie South America",
    description: "Stay warm with this South America themed hoodie.",
    price: 2100,
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black"],
    imageSrc: hoodeiSouthAmerica,

    imageAlt: "Hoodie South America",
  },
  {
    id: 3,
    name: "Tshirt EU",
    description: "Show your European pride with this stylish t-shirt.",
    price: 1200,
    sizes: ["XS", "S", "M", "L"],
    colors: ["White", "Black"],
    imageSrc: tshirtEU,

    imageAlt: "Tshirt EU",
  },
  {
    id: 4,
    name: "Tshirt North",
    description: "Represent the Northern Hemisphere with this classic t-shirt.",
    price: 1200,
    sizes: ["S", "M", "L"],
    colors: ["White", "Black"],
    imageSrc: tshirtNorth,

    imageAlt: "Tshirt North",
  },
];

export default Products;
