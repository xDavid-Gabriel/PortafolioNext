import { useMemo } from 'react'
const origin = typeof window === 'undefined' ? '' : window.location.origin
const originPathname =
  typeof window === 'undefined' ? '' : window.location.pathname

const originHref = typeof window === 'undefined' ? '' : window.location.href

const lastSlashIndex = originPathname.lastIndexOf('/')
const lastPart = originPathname.substring(lastSlashIndex + 1)

const title = lastPart
  .replace(/-/g, ' ')
  .toLowerCase()
  .replace(/\b\w/g, match => match.toUpperCase())

console.log(title)
export const schema = () => {
  const schemaPerson = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'David Gabriel Cayllahua Betalleluz',
      jobTitle: 'Desarrollador web frontend',
      url: `${origin}`,
      knowsAbout: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Next js',
        'Tailwind css',
        'Bootstrap',
        'Sass',
        'Figma',
        'Photoshop',
        'Ilustraitor',
      ],
      image: `${origin}/img/portafolio.png`,
      hasOccupation: {
        '@type': 'Occupation',
        name: 'Desarrollador web frontend',
        description:
          'Me especializo en el desarrollo de aplicaciones web utilizando tecnologías como HTML, CSS, JavaScript, React y Next js.',
      },
      worksOn: [
        {
          '@type': 'WebSite',
          url: `${origin}/proyectos/gold-gym`,
          name: 'Proyecto 1',
          description:
            'En este proyecto de React JS, utilizamos herramientas y librerías de terceros para mejorar la eficiencia y la facilidad de uso de la aplicación web. Al dividir la aplicación en componentes reutilizables con React y maquetar rápidamente con tailwindcss, podemos centrarnos en ofrecer una experiencia única y atractiva para el usuario. Además, hemos implementado un modo oscuro y claro con temas de colores para adaptarnos a las preferencias del usuario. ¡Ven y descubre cómo podemos hacer la codificación más eficiente y divertida!',
        },
        {
          '@type': 'WebSite',
          url: `${origin}/proyectos/dashboard`,
          name: 'Proyecto 2',
          description:
            'Este proyecto de React JS te muestra cómo utilizar componentes y reutilizarlos para crear aplicaciones web modernas y escalables. Aprovechando la potencia de la librería Essential JS 2, podrás integrar gráficos complejos de manera sencilla y rápida, sin tener que partir de cero. Con este proyecto, podrás dominar las bases de React y empezar a aplicar sus ventajas en tus proyectos futuros.',
        },
        {
          '@type': 'WebSite',
          url: `${origin}/proyectos/brawl-memori`,
          name: 'Proyecto 3',
          description:
            'Este proyecto de JavaScript te enseña los fundamentos del lenguaje de programación más popular del mundo, incluyendo variables, funciones, scope global y local, manejo de arrays, manejo del DOM y más. AprenDI a crear aplicaciones web dinámicas y atractivas sin depender de librerías externas, sólo utilizando JavaScript y CSS puro. Y asi ofrecer una experiencia de usuario excepcional.',
        },
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+51988848573',
          contactType: 'reservations',
          areaServed: 'PE',
          availableLanguage: 'es',
        },
      ],

      sameAs: [
        'https://www.instagram.com/gabriel_betalleluz/',
        'https://www.linkedin.com/in/david-gabriel-cayllahua-betalleluz-i12637/',
        `${origin}`,
      ],
    }),
    [],
  )

  const schemaProduct = useMemo(
    () => ({
      '@context': 'https://schema.org/',
      '@type': 'Product',
      name: `❤️ ${title} David Gabriel Cayllahua Betalleluz`,
      image: `${origin}/img/portafolio.png`,
      description: `${title}. Soy un desarrollador frontend altamente capacitado, con una pasión por crear experiencias de usuario atractivas y fáciles de usar. Si estás buscando mejorar la presencia en línea de tu empresa a través de la creación de una aplicación web o la optimización de tu sitio existente, no dudes en contactarme. Estoy seguro de que puedo ayudarte a alcanzar tus objetivos y crecimiento en línea ❤️ +51 988 848 573 ❤️`,
      brand: {
        '@type': 'Brand',
        name: 'David Gabriel',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        bestRating: '5',
        worstRating: '0',
        ratingCount: '2134',
      },
    }),
    [],
  )

  const schemaWebSite = useMemo(
    () => ({
      '@context': 'https://schema.org/',
      '@type': 'WebSite',
      name: `${title}`,
      url: `${originHref}`,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${originHref}{search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    }),
    [],
  )

  const schemaBreadcrumbList = useMemo(
    () => ({
      '@context': 'https://schema.org/',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Inicio',
          item: `${origin}`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Sobre Mi',
          item: `${origin}/sobre-mi`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Mis Trabajos',
          item: `${origin}/proyectos/gold-gym`,
        },
      ],
    }),
    [],
  )
  return {
    schemaPerson,
    schemaProduct,
    schemaWebSite,
    schemaBreadcrumbList,
  }
}
