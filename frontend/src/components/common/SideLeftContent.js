import React from 'react'
import styled from 'styled-components'
import R from '../resources/R'
import Footer from './FormFooter'
const SideLeftContent = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 0;
    width: 420px;
    height: 100vh;
    background-image: url(${R.images.bg_login});
    background-size: cover;
    background-position: -400px 0;
    background-repeat: no-repeat;
  `
  const FilterBg = styled.div`
    width: 420px;
    z-index: 2;
    height: 100vh;
    background: #1e1e33;
    opacity: 0.8;
    position: absolute;
  `

  const SloganVerdoc = styled.p`
    font-family: 'RobotoSlab-Regular';
    font-size: 20px;
    color: #ffffff;
    letter-spacing: 0.25px;
    text-align: center;
    margin: 0.5em auto;
    z-index: 5;
  `
  const Detail = styled.p`
    /* opacity: 0.7;
    color: #ffffff; */
    color: ${R.colors.text_footer};
    font-family: 'Roboto-Regular';
    font-size: 14px;
    letter-spacing: 0.25px;
    line-height: 20px;
    margin: 0 auto;
    width: 300px;
    text-align: center;
    z-index: 5;
  `
  const Space = styled.div`
    padding: 1.1em;
  `
  const FooterCustom = styled(Footer)``
  return (
    <Container>
      <FilterBg />
      <SloganVerdoc>The best way to sign documents</SloganVerdoc>
      <SloganVerdoc>Easy - Fast - Secure</SloganVerdoc>
      <Space />
      <Detail>Verdoc is a blockchain service for</Detail>
      <Detail>legally secure signing any documents,</Detail>
      <Detail>invoices, or agreements </Detail>
      <Detail>that is important to your business.</Detail>
      <FooterCustom />
    </Container>
  )
}

export default SideLeftContent
