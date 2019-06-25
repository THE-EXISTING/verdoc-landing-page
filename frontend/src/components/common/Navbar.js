import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'gatsby'
import R from '../resources/R'

const LinkText = styled(Link)`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  color: ${R.colors.text};
  opacity: 0.3;
  text-decoration: none;
  margin-right: 3rem;
  height: 20px;

  &:hover {
    color: ${R.colors.primary};
    opacity: 1;
  }

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
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  height: 20px;
  color: ${R.colors.text};
  opacity: 0.3;
  text-decoration: none;
  margin-right: 3rem;
  cursor: pointer;

  &:hover {
    color: ${R.colors.primary};
    opacity: 1;
  }

  ${media.lessThan('medium')`
    margin-right: 2rem;
    `}
`

const BoxRight = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;

  ${media.lessThan('medium')`
      width: 100%;
      justify-content: flex-end;
`}
`

const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 64px;
  z-index: 100;
  background-color: ${props => (props.isDown ? 'white' : 'transparent')};
  transition: all 0.5s ease;
`

const Navbar = () => {
  const [isDown, setIsDown] = useState(false)
  //   const [activeBg, setActiveBg] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      console.log(window.scrollY)
      if (window.scrollY > 84 && !isDown) {
        setIsDown(true)
      } else if (window.scrollY <= 84 && isDown) {
        setIsDown(false)
      }
    })
  })

  return (
    <Container isDown={isDown}>
      <BoxRight>
        <LinkText activeClassName="active" to="/">
          Home
        </LinkText>
        <LinkText activeClassName="active" to="/subscribe">
          Subscribe
        </LinkText>
        <ExternalLink href="https://docs.verdoc.io/docs/api_ref/login_token_api/about-access-token/">
          Docs
        </ExternalLink>
        {/* <ExternalLink href="https://docs.verdoc.io/"> Home</ExternalLink>
        <LinkText to="/"> Subscribe</LinkText>
         */}
      </BoxRight>
    </Container>
  )
}
export default Navbar
