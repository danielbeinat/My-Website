# Portfolio Daniel Beinat

Un portafolio web moderno y responsivo desarrollado con React, Vite y Tailwind CSS para showcase de proyectos como desarrollador frontend.

## 🚀 Características

- **Diseño Moderno**: Interfaz elegante con gradientes, animaciones suaves y efectos visuales atractivos
- **Totalmente Responsivo**: Optimizado para todos los dispositivos (móvil, tablet, desktop)
- **Navegación Fluida**: Scroll suave entre secciones con navbar fijo y efectos de transición
- **Animaciones Interactivas**: Efectos hover, transiciones y micro-interacciones
- **Diseño Dark Theme**: Esquema de colores oscuro con acentos brillantes
- **Componentes Modulares**: Arquitectura basada en componentes reutilizables
- **Optimizado para SEO**: Meta etiquetas y estructura semántica HTML5

## 🛠️ Tecnologías Utilizadas

### Frontend

- **React 18** - Biblioteca principal para la UI
- **Vite** - Build tool y servidor de desarrollo
- **Tailwind CSS** - Framework de CSS para estilos
- **PostCSS** - Procesador de CSS
- **Lucide React** - Biblioteca de iconos
- **Framer Motion** - Biblioteca de animaciones

### Desarrollo

- **ESLint** - Linting y calidad de código
- **Git** - Control de versiones

## 📁 Estructura del Proyecto

```
src/
├── Components/
│   ├── NavBar/          # Barra de navegación principal
│   ├── Hero/            # Sección hero con presentación
│   ├── AboutSection/    # Sección sobre mí
│   ├── Skills/          # Sección de habilidades
│   ├── Portfolio/       # Galería de proyectos
│   ├── Contact/         # Formulario de contacto
│   ├── Footer/          # Pie de página
│   └── ChatBox/         # Componente de chat
├── assets/              # Imágenes y recursos estáticos
├── App.jsx              # Componente principal
├── main.jsx             # Punto de entrada
└── index.css            # Estilos globales
```

## 🎨 Características de Diseño

### Paleta de Colores

- **Background**: `#06071B` (Azul oscuro profundo)
- **Primary**: `#0CFCA7` (Cian brillante)
- **Secondary**: `#1A91E8` (Azul)
- **Text**: `#FFFFFF` (Blanco)

### Efectos Visuales

- Gradientes dinámicos en títulos y botones
- Efectos de glassmorphism en tarjetas
- Animaciones de entrada y hover states
- Backdrops blur y sombras coloridas
- Scrollbar personalizado con gradiente

## 🚀 Instalación y Ejecución

### Prerrequisitos

- Node.js (v18 o superior)
- npm o yarn

### Pasos

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/danielbeinat/Portafolio.git
   cd Portafolio
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo**

   ```bash
   npm run dev
   ```

4. **Abrir en navegador**
   Visita `http://localhost:5173` para ver el portafolio

### Scripts Disponibles

```bash
npm run dev      # Inicia servidor de desarrollo
npm run build    # Compila para producción
npm run preview  # Previsualiza build de producción
npm run lint     # Ejecuta ESLint
```

## 📱 Secciones del Portafolio

1. **Hero**: Presentación principal con animación de typing
2. **Sobre Mí**: Información personal y profesional con tarjetas interactivas
3. **Habilidades**: Tecnologías y competencias técnicas
4. **Proyectos**: Galería de proyectos con filtros y detalles
5. **Contacto**: Formulario de contacto funcional
6. **Footer**: Enlaces a redes sociales y información adicional

## 🎯 Mejoras Implementadas

### Modernización UI/UX

- ✅ Navbar con efecto blur y shadow dinámicos
- ✅ Hero section con animaciones mejoradas y efectos de fondo
- ✅ About section con tarjetas glassmorphism y hover effects
- ✅ Scrollbar personalizado con gradiente
- ✅ Animaciones CSS personalizadas para typing effect
- ✅ Transiciones suaves en todos los elementos interactivos

### Optimizaciones

- ✅ Componentes más limpios y mantenibles
- ✅ Mejor estructura de CSS con Tailwind utilities
- ✅ Efectos visuales modernos sin impactar rendimiento
- ✅ Responsive design mejorado

## 🔧 Configuración

### Variables de Entorno

El proyecto utiliza variables de entorno para configuración sensible. Crea un archivo `.env` en la raíz:

```env
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

### Tailwind Config

El archivo `tailwind.config.js` está configurado con:

- Colores personalizados del tema
- Extensiones para scrollbar
- Animaciones personalizadas

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Puedes ver el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

**Daniel Beinat**

- Frontend Developer
- [GitHub](https://github.com/danielbeinat)
- [LinkedIn](https://www.linkedin.com/in/daniel-beinat)

---

⭐ Si te gusta este portafolio, no olvides darle una estrella en GitHub!
