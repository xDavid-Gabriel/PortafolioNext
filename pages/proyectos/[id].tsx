import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import { ProyectosDetalle } from '../../components/proyectos'
import { convertToPath } from '../../utils'
import { proyectosProps } from '../../interfaces'
import { Hero } from '../../components/ui'
import { proyectos } from '../../data/attributes'
import { Layout } from '../../components/layouts'
import { Title } from '../../components/proyectos/ProyectosDetalle/ProyectosDetalle.styled'

interface Props {
  data: proyectosProps
}
const ProyectosPage: NextPage<Props> = ({ data }) => {
  return (
    <Layout title={`${data.title} | David Gabriel Cayllahua Betalleluz`}>
      <Hero
        title={data.title}
        img={data.image}
        imgAlt={data.title}
        description={data.description}
        number={data.number}
        link={data.link}
        showLink={true}
      />
      <ProyectosDetalle proyectos={data} />
    </Layout>
  )
}

export default ProyectosPage

export const getStaticPaths: GetStaticPaths = async ctx => {
  const data = proyectos
  const proyectosName: string[] = data.map(item => item.title)
  // return {
  //   paths: [
  //     {
  //       params: {

  //       }
  //     }
  //   ],
  //   fallback:false
  // }
  return {
    paths: proyectosName.map(name => ({
      params: { id: convertToPath(name) },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  //const { data } = await  // your fetch function here
  const { id } = params as { id: string }

  const data = proyectos.find(item => convertToPath(item.title) === id)
  return {
    props: {
      data,
    },
  }
}
