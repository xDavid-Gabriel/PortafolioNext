import { NextPage } from 'next'
import 'twin.macro'

const PdfView: NextPage = () => {
  return (
    <>
      <iframe
        tw="w-full min-h-screen relative z-50"
        src="/docs/cv.pdf"
      ></iframe>
    </>
  )
}

export default PdfView
