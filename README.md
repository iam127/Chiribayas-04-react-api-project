# 🎮 PokéApp - Aplicación Web con React

Aplicación web desarrollada con React que consume la PokéAPI para explorar información detallada sobre Pokémon.

## 🌐 Demo en Vivo

**URL:** [https://chiribayas-04-react-api-project.vercel.app/](https://chiribayas-04-react-api-project.vercel.app/)

## 👥 Equipo de Desarrollo

### Juan Aguirre Saavedra
- Sistema de listado completo de Pokémon
- Custom hooks (useEntities, useEntity)
- Componentes de lista (FilterBar, EntityCard, Pagination)
- Filtros avanzados por tipo
- Sistema de paginación con selector de items por página
- Integración de búsqueda en tiempo real

### Luis Galvan Morales
- Diseño completo de la página Home
- Componente HeroSection con diseño atractivo
- Sección de Pokémon populares (PopularSection)
- Diseño UI/UX responsive
- Estilos globales y animaciones CSS
- Paleta de colores y gradientes

### Matias Galvan Guerrero
- Configuración inicial del proyecto
- Servicios de API (api.js, entityService.js)
- Componentes comunes (Navbar, Footer, LoadingSpinner, ErrorAlert)
- Configuración de routing con React Router
- Estructura de carpetas del proyecto
- Integración de Bootstrap

### Samir Alfonso Solorzano
- Página de contacto completa
- Formulario con validación en tiempo real
- Componente ContactForm con manejo de estados
- Página 404 personalizada (NotFoundPage)
- Validación de campos (email, nombre, mensaje)
- Feedback visual de éxito/error

## 🚀 Tecnologías Utilizadas

- **React 18** - Librería de UI
- **Vite** - Build tool y dev server
- **React Router DOM 6** - Sistema de navegación
- **Axios** - Cliente HTTP para API
- **Bootstrap 5** - Framework CSS
- **PokéAPI** - API REST de Pokémon

## 📦 Instalación Local

```bash
# Clonar repositorio
git clone https://github.com/iam127/Chiribayas-04-react-api-project.git

# Entrar al directorio
cd Chiribayas-04-react-api-project

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build
```

## ✨ Funcionalidades

### 🏠 Página Home (/)
- Hero section llamativo con Pikachu
- Llamados a la acción (CTAs)
- Sección de 8 Pokémon destacados
- Tarjetas con sprites oficiales
- Información de tipos, altura y peso
- Navegación fluida a otras secciones

### 📋 Página Lista (/lista)
- Listado completo de 500 Pokémon
- **Búsqueda en tiempo real** por nombre o habilidad
- Filtros por tipo (18 tipos disponibles)
- Sistema de paginación completo
- Selector de items por página (10, 20, 50)
- Tarjetas informativas con:
  - Sprite oficial del Pokémon
  - Número y nombre
  - Tipos con colores distintivos
  - Altura y peso
  - Habilidades principales
- Persistencia de filtros en URL
- Diseño responsive (grid adaptativo)

### 📧 Página Contacto (/contacto)
- Formulario completo con 4 campos
- Validación en tiempo real campo por campo
- Validaciones implementadas:
  - Nombre: mínimo 3 caracteres
  - Email: formato válido
  - Asunto: campo requerido
  - Mensaje: mínimo 10 caracteres
- Feedback visual (verde/rojo)
- Contador de caracteres en mensaje
- Simulación de envío con loading
- Mensajes de éxito/error
- Tarjetas informativas (ubicación, email, teléfono)

### ❌ Página 404
- Diseño amigable con Psyduck
- Mensaje claro de error
- Botones de navegación rápida
- Regreso al inicio o a la lista

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── common/
│   │   ├── Navbar.jsx          # Navegación principal
│   │   ├── Footer.jsx           # Pie de página
│   │   ├── LoadingSpinner.jsx   # Indicador de carga
│   │   └── ErrorAlert.jsx       # Alertas de error
│   ├── home/
│   │   ├── HeroSection.jsx      # Banner principal
│   │   └── PopularSection.jsx   # Pokémon destacados
│   ├── list/
│   │   ├── FilterBar.jsx        # Barra de filtros
│   │   ├── EntityCard.jsx       # Tarjeta de pokémon
│   │   └── Pagination.jsx       # Paginación
│   └── contact/
│       └── ContactForm.jsx      # Formulario de contacto
├── pages/
│   ├── HomePage.jsx             # Página principal
│   ├── ListPage.jsx             # Página de listado
│   ├── ContactPage.jsx          # Página de contacto
│   └── NotFoundPage.jsx         # Página 404
├── services/
│   ├── api.js                   # Configuración de Axios
│   └── entityService.js         # Servicios de API
├── hooks/
│   ├── useEntities.js           # Hook para lista
│   └── useEntity.js             # Hook para detalle
├── App.jsx                      # Componente principal
├── main.jsx                     # Entry point
└── index.css                    # Estilos globales
```

## 🎯 Características Técnicas

- ✅ Routing con React Router DOM
- ✅ Consumo de API REST con Axios
- ✅ Custom Hooks para lógica reutilizable
- ✅ Manejo de estados (loading, error, data)
- ✅ Búsqueda en tiempo real con filtrado local
- ✅ Validación de formularios en tiempo real
- ✅ Diseño responsive (mobile-first)
- ✅ Código modular y componentizado
- ✅ Optimización de peticiones HTTP
- ✅ Interceptores de Axios para errores
- ✅ Persistencia de filtros en URL
- ✅ Animaciones y transiciones CSS
- ✅ Paleta de colores por tipo de Pokémon

## 🌐 API Utilizada

**PokéAPI:** [https://pokeapi.co/](https://pokeapi.co/)

Endpoints utilizados:
- `GET /pokemon` - Lista de pokémon
- `GET /pokemon/{id}` - Detalle de pokémon
- `GET /pokemon/{name}` - Búsqueda por nombre

## 🔄 Flujo de Trabajo Git

- **Rama main:** Producción
- **Rama develop:** Desarrollo principal
- **Ramas personales:** 
  - `juan-aguirre`
  - `luis-galvan`
  - `matias-galvan`
  - `samir-alfonso`
- **Pull Requests** para integración de cambios

## 🚀 Deploy

Desplegado en **Vercel** con integración continua desde GitHub.

**URL de producción:** [https://chiribayas-04-react-api-project.vercel.app/](https://chiribayas-04-react-api-project.vercel.app/)


## 🤝 Contribuciones

Proyecto desarrollado como parte del curso de Desarrollo de Aplicaciones Empresariales en TECSUP.

---

Desarrollado con ❤️ por el equipo Chiribayas
