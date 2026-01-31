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
import postgresql from "../SkillsLanguages/postgresql.svg";
import appwrite from "../SkillsLanguages/react.svg"; // Usando icono de react para Appwrite temporalmente
import docker from "../SkillsLanguages/docker.svg";

export const Projects = [
  {
    id: 1,
    name: "FrostyFits",
    image: frostyfits,
    description: "Desarrollé un e-commerce de ropa utilizando el stack MERN (MongoDB, Express, React, Node.js), Tailwind CSS y Sass. Implementé Cloudinary para imágenes, Stripe para pagos y Docker para asegurar un entorno de despliegue consistente y escalable.",
    Languages: [react, tailwind, sass, node, mongodb, docker],
    url: "https://frostyfits.netlify.app/",
    github: "https://github.com/danielbeinat/FrostyFits.git",
  },

  {
    id: 2,
    name: "Boardy",
    image: boardy,
    description: "Desarrollé una aplicación de gestión de tareas utilizando React, TypeScript y Tailwind CSS. Implementé MongoDB para la persistencia de datos y Docker para la contenedorización, permitiendo un flujo de trabajo ágil y robusto en el manejo de proyectos.",
    Languages: [react, tailwind, ts, mongodb, docker],
    url: "https://boardy-app.netlify.app/",
    github: "https://github.com/danielbeinat/Boardy.git",
  },

  {
    id: 3,
    name: "AcademiaNova",
    image: arcadia,
    description: "Plataforma integral de gestión universitaria. Incluye gestión de usuarios (RBAC), panel de administración, autenticación JWT, Nodemailer y Cloudinary. Stack: React, TypeScript, Node.js, PostgreSQL, Docker y Tailwind CSS.",
    Languages: [react, tailwind, ts, node, postgresql, docker],
    url: "https://arcadia-university.netlify.app",
    github: "https://github.com/danielbeinat/Arcadia.git",
  },

  {
    id: 4,
    name: "BikeStore",
    image: bicishop,
    description:
      "Desarrollé una tienda virtual de bicicletas utilizando React, TypeScript y Tailwind CSS. Implementé un sistema de filtrado dinámico por categorías y precios, carrito de compras y persistencia de datos. El enfoque principal fue el rendimiento y una interfaz limpia que mejora la conversión de ventas.",
    Languages: [react, tailwind, ts],
    url: "https://bikestore-shop.netlify.app/",
    github: "https://github.com/danielbeinat/BikeStore.git",
  },


  {
    id: 5,
    name: "MP3Linker",
    image: mp3linker,
    description: "Desarrollé una herramienta de conversión de YouTube a MP3 utilizando React y TypeScript. La aplicación integra la API de YouTube Data V3 para búsquedas en tiempo real y utiliza i18next para soporte multiidioma. Enfocada en la rapidez de conversión y una UI minimalista y funcional.",
    Languages: [react, tailwind, ts],
    url: "https://mp3linker.netlify.app/",
    github: "https://github.com/danielbeinat/MP3Linker.git",
  },

  {
    id: 6,
    name: "Visual Image",
    image: visualimage,
    description: "Desarrollé un buscador de imágenes profesional utilizando la API de Unsplash con React y TypeScript. Implementé scroll infinito, descarga directa de recursos en alta resolución y un diseño responsivo que adapta la galería de imágenes a cualquier tamaño de pantalla.",
    Languages: [react, tailwind, ts],
    url: "https://visual-image.netlify.app/",
    github: "https://github.com/danielbeinat/VisualImage.git",
  },


];
