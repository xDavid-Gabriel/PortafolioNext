import { FC, PropsWithChildren, useEffect } from 'react'
import Head from 'next/head'
import { Navbar } from '../../ui'
import 'twin.macro'
import { schema } from '../'

interface Props {
  title?: string
}

const origin = typeof window === 'undefined' ? '' : window.location.origin

export const Layout: FC<PropsWithChildren<Props>> = ({ children, title }) => {
  /*Mis Esquemas*/
  const { schemaPerson, schemaProduct, schemaWebSite, schemaBreadcrumbList } =
    schema()

  useEffect(() => {
    /* Esquema personal "Person" */
    const jsonLdScriptPerson = document.createElement('script')
    jsonLdScriptPerson.type = 'application/ld+json'
    jsonLdScriptPerson.innerHTML = JSON.stringify(schemaPerson)
    document.head.appendChild(jsonLdScriptPerson)

    /* Esquema "Product" */
    const jsonLdScriptProduct = document.createElement('script')
    jsonLdScriptProduct.type = 'application/ld+json'
    jsonLdScriptProduct.innerHTML = JSON.stringify(schemaProduct)
    document.head.appendChild(jsonLdScriptProduct)

    /* Esquema "WebSite" */
    const jsonLdScriptWebSite = document.createElement('script')
    jsonLdScriptWebSite.type = 'application/ld+json'
    jsonLdScriptWebSite.innerHTML = JSON.stringify(schemaWebSite)
    document.head.appendChild(jsonLdScriptWebSite)

    /* Esquema "BreadcrumbList" */
    const jsonLdScriptBreadcrumbList = document.createElement('script')
    jsonLdScriptBreadcrumbList.type = 'application/ld+json'
    jsonLdScriptBreadcrumbList.innerHTML = JSON.stringify(schemaBreadcrumbList)
    document.head.appendChild(jsonLdScriptBreadcrumbList)

    // retorna una función de limpieza que elimina el elemento script cuando se desmonta el componente
    return () => {
      document.head.removeChild(jsonLdScriptPerson)
      document.head.removeChild(jsonLdScriptProduct)
      document.head.removeChild(jsonLdScriptWebSite)
      document.head.removeChild(jsonLdScriptBreadcrumbList)
    }
  }, [schemaPerson, schemaProduct, schemaWebSite]) // dependencia en schemaPerson para que se ejecute cada vez que cambie

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={`Bienvenido al portafolio de ${title}, desarrollador frontend con experiencia en el desarrollo de aplicaciones web y móviles. En este sitio podrás ver una selección de mis proyectos más destacados y aprender más sobre mi experiencia y habilidades. Estoy comprometido con el desarrollo de soluciones de alta calidad y con la satisfacción del cliente. ¡No dudes en ponerte en contacto conmigo si tienes algún proyecto en mente o simplemente quieres conocer más sobre mi trabajo!.`}
        />
        <meta
          name="keywords"
          content="desarrollador frontend,aplicaciones web,desarrollo de soluciones,alta calidad,satisfacción del cliente,portafolio de proyectos,desarrollador profesional,programación frontend,experiencia en desarrollo frontend,HTML,CSS,JavaScript,React,Next js,Git"
        />
        <meta
          name="theme-color"
          content={`Bienvenido al portafolio de ${title}, desarrollador frontend con experiencia en el desarrollo de aplicaciones web y móviles. En este sitio podrás ver una selección de mis proyectos más destacados y aprender más sobre mi experiencia y habilidades. Estoy comprometido con el desarrollo de soluciones de alta calidad y con la satisfacción del cliente. ¡No dudes en ponerte en contacto conmigo si tienes algún proyecto en mente o simplemente quieres conocer más sobre mi trabajo!.`}
        />
        <meta name="author" content="David Gabriel Cayllahua Betalleluz" />
        <link
          rel="shortcut icon"
          href="/img/favicon/favicon.ico"
          type="image/x-icon"
        />
        <link rel="shortcut icon" href="/img/favicon/favicon.ico" />
        <meta property="og:image" content={`${origin}/img/portafolio.png`} />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <footer tw="bg-bodycard py-10 font-semibold text-xl text-center text-secondary ">
        Hecho con ❤️ por David
      </footer>
    </>
  )
}
