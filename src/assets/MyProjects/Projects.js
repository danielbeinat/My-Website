import FrostyFitsImage from "./Images/FrostyFits.jpg";
import react from "../SkillsLanguages/react.svg";
import tailwind from "../SkillsLanguages/tailwind.svg";
import BikeStore from "./Images/BikeStore.jpg";
import sass from "../SkillsLanguages/sass.svg";
import Arcadia from "./Images/Arcadia.webp";
import MP3Linker from "./Images/mp3linker.jpg";
import VisualFocus from "./Images/visualfocus.jpg";

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
    id: 3,
    name: "MP3Linker",
    image: MP3Linker,
    description: "Desarrollé un convertidor de YouTube a MP3 utilizando React y Vite. La aplicación permite a los usuarios convertir videos de YouTube en archivos de audio MP3 con una interfaz moderna y receptiva. Además, integra la API de YouTube para obtener videos y utiliza i18next para traducir el contenido a varios idiomas.",
    Languages: [react, tailwind],
    url: "https://mp3linker.netlify.app/",
    github: "https://github.com/danielbeinat/Convert-YouTube-to-MP3",
  },


  {
    id: 4,
    name: "Instituto Arcadia",
    image: Arcadia,
    description: "Recientemente, diseñé y desarrollé un sitio web para gestionar inscripciones a carreras utilizando tecnologías de vanguardia como React y Tailwind CSS. El proyecto se centró en crear una interfaz de usuario intuitiva y receptiva",
    Languages: [react, tailwind],
    url: "https://arcadia-university.netlify.app",
    github: "https://github.com/danielbeinat/Arcadia.git",
  },

  {
    id: 5,
    name: "Visual Image",
    image: VisualFocus,
    description: "Desarrollé una aplicación web que utiliza la API de Unsplash para buscar y descargar fotos de alta calidad de forma sencilla. Además, está diseñada para ser responsive, asegurando una buena experiencia de usuario en diferentes dispositivos.",
    Languages: [react, tailwind],
    url: "https://visual-image.netlify.app/",
    github: "https://github.com/danielbeinat/Visual-Focus.git",
  },
];
