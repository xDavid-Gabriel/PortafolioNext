import { useState } from 'react'
import { proyectosCategoriaProps } from '../interfaces'
import { proyectosCategoria } from '../data/attributes'

interface Activo {
  todos?: boolean
  portafolio?: boolean
  figma?: boolean
  frontendMentor?: boolean
}
type SetPropsType = {
  setProyectos: React.Dispatch<React.SetStateAction<proyectosCategoriaProps[]>>
}

export const useFilter = (
  initialvalue: proyectosCategoriaProps[],
  { setProyectos }: SetPropsType,
) => {
  const [allProyect, setAllProyect] = useState(initialvalue)

  const [activo, setActivo] = useState<Activo>({
    todos: true,
    portafolio: false,
    figma: false,
    frontendMentor: false,
  })

  const filtradoProyectos = (cateProyecto: string) => {
    const filtrado = allProyect.filter(proy => {
      return proy.category === cateProyecto
    })
    setProyectos(filtrado)
  }
  const getCategoria = () => {
    const data = proyectosCategoria
    setAllProyect(data)
  }

  return {
    //UseState para los filtrados de los proyectos
    allProyect,
    setAllProyect,
    //Para la clase activa
    activo,
    setActivo,
    //Funcion para los filtrados
    filtradoProyectos,
    //Funcion para traer todas las categorias
    getCategoria,
  }
}
