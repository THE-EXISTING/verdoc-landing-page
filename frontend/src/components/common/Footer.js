import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import R from '../resources/R'

const WrapFooter = styled.footer`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  background-color: ${R.colors.footer};
  /* height: 385px; */

  font-family: 'Roboto-Regular';
  font-size: 0.85rem;
  color: ${R.colors.text_footer};
`

const LogoVerdoc = styled.img`
  width: 116px;
  height: 28px;
  margin: 2.5rem auto;
`

const HorizontalRule = styled.hr`
  width: 70%;
  border: 1px solid ${R.colors.hr_footer};
  margin: 0 auto 1.6rem auto;
`
const WrapPowerBy = styled.div`
  width: 70%;
  text-align: left;
  letter-spacing: 0.55px;
  margin: 1.4rem auto 3rem auto;
`

const LogoTheExisting = styled.img`
  width: 93px;
  height: 12px;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`

const WrapSitemap = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.2rem 0 2rem 0;
`

const ItemSitemap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 3rem;
`
const MainSitemap = styled.p`
  /* font-weight: bold; */
  margin: 1rem 0;
  color: ${R.colors.white};
`
const ExternalLink = styled.a`
  font-family: 'Roboto-Regular';
  font-size: 0.85rem;
  color: ${R.colors.text_footer};
  text-decoration: none;
  margin: 0 0 1rem 0;
`

const LinkCustom = styled(Link)`
  font-family: 'Roboto-Regular';
  font-size: 0.85rem;
  color: ${R.colors.text_footer};
  text-decoration: none;
  margin: 0 0 1rem 0;
`

const Footer = () => {
  return (
    <WrapFooter>
      <LogoVerdoc src={R.images.logo_verdoc_footer} />
      <HorizontalRule />
      <WrapSitemap>
        <ItemSitemap>
          <MainSitemap>FEATURES</MainSitemap>
          <LinkCustom to="/">PROOF OF IDENTITY</LinkCustom>
          <LinkCustom to="/">PROOF OF EXISTENCE</LinkCustom>
          <LinkCustom to="/">PROOF OF INTEGRITY</LinkCustom>
          <LinkCustom to="/">PROOF OF RECEIPT</LinkCustom>
        </ItemSitemap>
        <ItemSitemap>
          <MainSitemap>INTEGRATIONS</MainSitemap>
          <ExternalLink
            href="https://docs.verdoc.io/docs/api_ref/login_token_api/about-access-token/"
            target="_blank"
            rel="noreferrer noopener"
          >
            API
          </ExternalLink>
        </ItemSitemap>
        <ItemSitemap>
          <MainSitemap>COMPANY</MainSitemap>
          <LinkCustom to="/">ABOUT US</LinkCustom>
          <LinkCustom to="/">BLOG</LinkCustom>
          <LinkCustom to="/">TERMS OF SERVICE</LinkCustom>
          <LinkCustom to="/">PRIVACY POLICY</LinkCustom>
        </ItemSitemap>
      </WrapSitemap>
      <HorizontalRule />
      <WrapPowerBy>
        Power by{' '}
        <ExternalLink
          href="https://existing.co/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <LogoTheExisting src={R.images.logo_theexisting} />
        </ExternalLink>
      </WrapPowerBy>
    </WrapFooter>
  )
}

export default Footer
