import { NextPage, GetStaticProps } from 'next'
import {
  SectionHero,
  SectionTrabajos,
  SectionContact,
  SectionAboutMe,
} from '../views/home'
import { proyectosProps } from '../interfaces/'
import { proyectos } from '../data/attributes'
import { Layout } from '../components/layouts'

interface Props {
  data: proyectosProps[]
}

const Home: NextPage<Props> = ({ data }) => {
  return (
    <Layout title="David Gabriel Cayllahua Betalleluz">
      <SectionHero />
      <SectionTrabajos proyectos={data} />
      <SectionAboutMe />
      <SectionContact />
    </Layout>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async ctx => {
  const data: proyectosProps[] = proyectos

  return {
    props: {
      data,
    },
  }
}
