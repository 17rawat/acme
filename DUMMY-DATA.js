import hoodeiAfrica from "@/assets/hoodie-africa.webp";
import hoodeiSouthAmerica from "@/assets/hoodie-south-america.webp";
import tshirtNorth from "@/assets/tshirt-north.webp";
import tshirtEU from "@/assets/tshirt-eu.webp";
import yellow_hoodie from "@/assets/yellow_hoodie.jpeg";
import black_women_hoodie from "@/assets/black_women_hoodie.jpeg";

import biege_hoodie from "@/assets/biege_hoodie.jpeg";

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

  {
    id: 5,
    name: "Men Hoodie",
    description: "Explore comfort and style with this Asia-themed hoodie.",
    price: 2200,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue", "Red"],
    imageSrc: yellow_hoodie,
    imageAlt: "Hoodie Yellow",
  },
  {
    id: 6,
    name: "Women Hoodie",
    description: "Show your love for South America with this Hoodie.",
    price: 2100,
    sizes: ["XS", "S", "M", "L"],
    colors: ["Green", "Yellow"],
    imageSrc: black_women_hoodie,
    imageAlt: "Women Hoodie",
  },

  {
    id: 7,
    name: "Men Hoodie",
    description: "Show your love for South America with this Hoodie.",
    price: 1800,
    sizes: ["XS", "S", "M", "L"],
    colors: ["Green", "Yellow"],
    imageSrc: biege_hoodie,
    imageAlt: "Men Biege Hoodie",
  },
];

export default Products;
