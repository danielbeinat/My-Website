import frostyfits from "./Images/frostyfits.webp";
import boardy from "./Images/boardy.webp";
import react from "../SkillsLanguages/react.svg";
import tailwind from "../SkillsLanguages/tailwind.svg";
import bicishop from "./Images/bicishop.webp";
import sass from "../SkillsLanguages/sass.svg";
import arcadia from "./Images/arcadia.webp";
import mp3linker from "./Images/mp3linker.webp";
import visualimage from "./Images/visualimage.webp";
import ts from "../SkillsLanguages/ts.svg";
import node from "../SkillsLanguages/node.svg";
import mongodb from "../SkillsLanguages/mongodb.svg";

export const Projects = [
  {
    id: 1,
    name: "FrostyFits",
    image: frostyfits,
    description: "Desarrollé un e-commerce de ropa utilizando React, Tailwind CSS, Sass, Node.js, MongoDB y Cloudinary para almacenar imágenes. Implementé un buscador avanzado que permite a los usuarios encontrar productos de manera rápida y eficiente. La tienda cuenta con un diseño totalmente responsivo, asegurando una experiencia de usuario óptima en dispositivos móviles, tabletas y escritorios.",
    Languages: [react, tailwind, sass, node, mongodb],
    url: "https://frostyfits.netlify.app/",
    github: "https://github.com/danielbeinat/FrostyFits.git",
  },

  {
    id: 2,
    name: "Boardy",
    image: boardy,
    description: "Desarrollé una aplicación web para la gestión de tareas y proyectos utilizando React y Tailwind CSS. El proyecto se centró en crear una interfaz de usuario intuitiva y receptiva que permite a los usuarios organizar y administrar sus tareas de manera eficiente. Además, implementé un sistema de autenticación para los usuarios, permitiendo el acceso a contenido exclusivo y la gestión de sus datos personales.",
    Languages: [react, tailwind, ts],
    url: "https://boardy-app.netlify.app/",
    github: "https://github.com/danielbeinat/Boardy.git",
  },

  {
    id: 3,
    name: "BikeStore",
    image: bicishop,
    description:
      "Desarrollé una tienda de bicicletas utilizando tecnologías modernas como React y Tailwind CSS. El proyecto incluyó la creación de una interfaz de usuario interactiva y responsiva que permite a los usuarios navegar y comprar bicicletas de manera intuitiva. Implementé un sistema de filtrado avanzado para que los clientes puedan buscar productos por categorías, precios y características específicas.",
    Languages: [react, tailwind, ts],
    url: "https://bikestore-shop.netlify.app/",
    github: "https://github.com/danielbeinat/BikeStore.git",
  },


  {
    id: 4,
    name: "MP3Linker",
    image: mp3linker,
    description: "Desarrollé un convertidor de YouTube a MP3 utilizando React. La aplicación permite a los usuarios convertir videos de YouTube en archivos de audio MP3 con una interfaz moderna y receptiva. Además, integra la API de YouTube para obtener videos y utiliza i18next para traducir el contenido a varios idiomas.",
    Languages: [react, tailwind, ts],
    url: "https://mp3linker.netlify.app/",
    github: "https://github.com/danielbeinat/MP3Linker.git",
  },


  {
    id: 5,
    name: "Instituto Arcadia",
    image: arcadia,
    description: "Desarrollé un sitio web para gestionar inscripciones a carreras utilizando tecnologías de vanguardia como React y Tailwind CSS. El proyecto se centró en crear una interfaz de usuario intuitiva y receptiva",
    Languages: [react, tailwind, ts],
    url: "https://arcadia-university.netlify.app",
    github: "https://github.com/danielbeinat/Arcadia.git",
  },

  {
    id: 6,
    name: "Visual Image",
    image: visualimage,
    description: "Desarrollé una aplicación web que utiliza la API de Unsplash para buscar y descargar fotos de alta calidad de forma sencilla. Además, está diseñada para ser responsive, asegurando una buena experiencia de usuario en diferentes dispositivos.",
    Languages: [react, tailwind, ts],
    url: "https://visual-image.netlify.app/",
    github: "https://github.com/danielbeinat/VisualImage.git",
  },


];
