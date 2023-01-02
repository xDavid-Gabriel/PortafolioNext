import { NextPage, GetStaticProps } from 'next'
import { SectionMasProyectosCategorias } from '../../views/mas-proyectos'
import { Hero } from '../../components/ui'
import { proyectosCategoria } from '../../data/attributes'
import { proyectosCategoriaProps } from '../../interfaces/proyectos-list'
import { Layout } from '../../components/layouts/Layout/Layout'

interface Props {
  proyectosCategoria: proyectosCategoriaProps[]
}

const MasProyectos: NextPage<Props> = ({ proyectosCategoria }) => {
  return (
    <Layout title="Mas Proyectos | David Gabriel Cayllahua Betalleluz">
      <Hero
        title="Proyectos"
        description="A continuación, te mostraré otros proyectos que he realizado."
        img="https://i.postimg.cc/NfWHNVG7/mockup.png"
        imgAlt="Mockups Proyectos"
        showLink={false}
        link=""
      />
      <SectionMasProyectosCategorias proyectosCategoria={proyectosCategoria} />
    </Layout>
  )
}

export default MasProyectos

export const getStaticProps: GetStaticProps = async ctx => {
  const data = proyectosCategoria

  return {
    props: {
      proyectosCategoria: data,
    },
  }
}
