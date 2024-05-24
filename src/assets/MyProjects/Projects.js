import FrostyFitsImage from "./Images/FrostyFits.jpg";
import react from "../SkillsLanguages/react.svg";
import tailwind from "../SkillsLanguages/tailwind.svg";
import BikeStore from "./Images/BikeStore.jpg";
import sass from "../SkillsLanguages/sass.svg";
import Arcadia from "./Images/Arcadia.webp";

export const Projects = [
  {
    id: 1,
    name: "FrostyFits",
    image: FrostyFitsImage,
    description:
      "Desarrollé un e-commerce de ropa utilizando React, Tailwind CSS y Sass. Implementé un buscador avanzado que permite a los usuarios encontrar productos de manera rápida y eficiente. La tienda cuenta con un diseño totalmente responsivo, asegurando una experiencia de usuario óptima en dispositivos móviles, tabletas y escritorios.",
    Languages: [react, tailwind, sass],
    url: "https://frostyfits.netlify.app/",
    github: "https://github.com/danielbeinat/FrostyFits.git",
  },

  {
    id: 2,
    name: "BikeStore",
    image: BikeStore,
    description:
      "Desarrollé una tienda de bicicletas utilizando tecnologías modernas como React y Tailwind CSS. El proyecto incluyó la creación de una interfaz de usuario interactiva y responsiva que permite a los usuarios navegar y comprar bicicletas de manera intuitiva. Implementé un sistema de filtrado avanzado para que los clientes puedan buscar productos por categorías, precios y características específicas.",
    Languages: [react, tailwind],
    url: "https://bikestore-shop.netlify.app/",
    github: "https://github.com/danielbeinat/BikeStore.git",
  },



  {
    name: "Instituto Arcadia",
    image: Arcadia,
    description: "Recientemente, diseñé y desarrollé un sitio web para gestionar inscripciones a carreras utilizando tecnologías de vanguardia como React y Tailwind CSS. El proyecto se centró en crear una interfaz de usuario intuitiva y receptiva",
    Languages: [react, tailwind],
    url: "https://arcadia-university.netlify.app",
    github: "https://github.com/danielbeinat/Arcadia.git",
  },
];
