import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  h1,h2,h3{
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  color:#fff;
 }
 h1{

  font-size: clamp(2.8rem, 9.6vw - 1rem, 7rem);

 }
 h2{
  font-size: clamp(2rem, 10.7vw - 2.7rem, 3rem);
 }
 body{
  font-family: 'Poppins', sans-serif;
  color: #6A6A6A;
 }
 p{
  font-size: 16px;
  line-height: 1.75;
 }
 img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
