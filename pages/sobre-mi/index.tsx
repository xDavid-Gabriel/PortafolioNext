import { NextPage } from 'next'
import { Layout } from '../../components/layouts'
import { Hero } from '../../components/ui'
import {
  SectionInfo,
  SectionMisPasiones,
  SectionHabilidades,
} from '../../views/sobre-mi'

const SobreMi: NextPage = () => {
  return (
    <Layout title="Sobre mi | David Gabriel Cayllahua Betalleluz">
      <Hero
        title="Sobre Mi"
        description="Buenooo..."
        img="https://i.postimg.cc/wMg0jfQM/about.png"
        imgAlt="Sobre Mi"
        showLink={false}
        link=""
      />
      <SectionInfo />
      <SectionMisPasiones />
      <SectionHabilidades />
    </Layout>
  )
}

export default SobreMi
