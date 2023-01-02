import { useState, ChangeEvent } from 'react'

interface DatosValue {
  nombre: string
  telefono: string
  email: string
  description: string
}

export const useForm = (initialForm: DatosValue) => {
  const [form, setForm] = useState(initialForm)

  const handleChange = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = target

    console.log({ name, value })

    setForm({
      ...form,
      [name]: value,
    })
  }

  const onResetForm = () => {
    setForm(initialForm)
  }

  return {
    ...form,
    handleChange,
    onResetForm,
  }
}
