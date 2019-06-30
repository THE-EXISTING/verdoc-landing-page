import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'gatsby'
import R from '../resources/R'
import Button from '@material-ui/core/Button'

const BoxRight = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;

  ${media.lessThan('medium')`
      width: 100%;
      justify-content: flex-end;
`}
`

// Containers for Landing

const WrapLanding = styled.div`
  margin: auto 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
const LogoVerdoc = styled.img`
  width: 121px;
  height: 28px;
`
const BtnSignup = styled(Button)`
  && {
    font-family: 'Roboto-Medium';
    color: ${R.colors.primary};
    text-align: center;
    margin: auto 1.2rem;
    padding: 1px 10px;
  }
`

const Navbar = ({ isLanding = true }) => {
  const [isDown, setIsDown] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      // console.log(window.scrollY)
      if (window.scrollY > 84 && !isDown) {
        setIsDown(true)
      } else if (window.scrollY <= 84 && isDown) {
        setIsDown(false)
      }
    })
  })
  const Container = styled.div`
    font-family: ${props => (props.isLanding ? 'Roboto-Regular' : 'Courier')};
    position: fixed;
    display: flex;
    justify-content: ${props => (props.isLanding ? 'center' : 'flex-end')};
    /* justify-content: flex-end; */
    align-items: center;
    width: 100%;
    height: 64px;
    z-index: 100;
    background-color: ${props =>
      props.isLanding ? 'white' : props.isDown ? 'white' : 'transparent'};
    transition: all 0.5s ease;
    transition: ${props => (props.isLanding ? '' : 'all 0.5s ease')};
    border-bottom: ${props =>
      props.isLanding ? `1px solid ${R.colors.border_navbar}` : ''};
  `

  const LinkCustom = styled(Link)`
    box-sizing: border-box;
    text-decoration: none;

    /* For Subscribe page */

    color: ${R.colors.text};
    opacity: 0.3;
    margin: auto 1.5rem;
    &:hover {
      color: ${R.colors.primary};
      opacity: 1;
    }
    /* end */
    /* For Landing Page */
    ${isLanding &&
      css`
        color: ${R.colors.primary};
        opacity: 1;
        margin: auto 1.2rem;
        &:hover {
          color: ${R.colors.text};
          opacity: 0.3;
        }
      `}
    /* end */
    &.active {
      color: ${R.colors.primary};
      opacity: 1;
      border-bottom: 2px solid ${R.colors.primary};
    }

    ${media.lessThan('medium')`
  margin-right: 2rem;
`}
  `

  const ExternalLink = styled.a`
    box-sizing: border-box;
    height: 20px;
    text-decoration: none;
    
    cursor: pointer;
    /* For Subscribe page */
    color: ${R.colors.text};
    opacity: 0.3;
    margin: auto 1.5rem;
    &:hover {
      color: ${R.colors.primary};
      opacity: 1;
    }
    /* end */
    /* For Landing Page */
    ${isLanding &&
      css`
        color: ${R.colors.primary};
        opacity: 1;
        margin: auto 1.2rem;
        &:hover {
          color: ${R.colors.text};
          opacity: 0.3;
        }
      `}
    /* end */
    ${media.lessThan('medium')`
    margin-right: 2rem;
    `}
  `
  return isLanding ? (
    <Container isDown={isDown} isLanding={isLanding}>
      <WrapLanding>
        <LinkCustom to="/">
          <LogoVerdoc src={R.images.logo_verdoc} />
        </LinkCustom>
        <LinkCustom activeClassName="active" to="/sign">
          Sign
        </LinkCustom>
        <LinkCustom activeClassName="active" to="/verify">
          Verify
        </LinkCustom>
      </WrapLanding>
      <WrapLanding>
        <LinkCustom activeClassName="active" to="/feature">
          Feature
        </LinkCustom>
        <LinkCustom activeClassName="active" to="/technology">
          Technology
        </LinkCustom>
        <LinkCustom activeClassName="active" to="/about">
          About
        </LinkCustom>
        <ExternalLink href="https://docs.verdoc.io/docs/api_ref/login_token_api/about-access-token/">
          API
        </ExternalLink>
        <LinkCustom activeClassName="active" to="/login">
          Login
        </LinkCustom>

        <BtnSignup variant="outlined">SIGN UP</BtnSignup>
      </WrapLanding>
    </Container>
  ) : (
    <Container isDown={isDown} isLanding={isLanding}>
      <BoxRight>
        <LinkCustom activeClassName="active" to="/">
          Home
        </LinkCustom>
        <LinkCustom activeClassName="active" to="/subscribe">
          Subscribe
        </LinkCustom>
        <ExternalLink href="https://docs.verdoc.io/docs/api_ref/login_token_api/about-access-token/">
          Docs
        </ExternalLink>
        {/* <ExternalLink href="https://docs.verdoc.io/"> Home</ExternalLink>
        <LinkCustom to="/"> Subscribe</LinkCustom>
         */}
      </BoxRight>
    </Container>
  )
}
export default Navbar
