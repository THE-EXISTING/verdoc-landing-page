import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import R from '../resources/R'
import PowerBy from './PowerBy'
const WrapFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 1.5rem auto;
`
const WrapshortSitemap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 1.3rem auto;
`

const LinkCustom = styled(Link)`
  color: ${R.colors.primary};
  font-family: 'Roboto-Regular';
  letter-spacing: 0.5px;
  text-decoration: none;

  &:hover {
    color: ${R.colors.text};
  }
`

const WrapPowerBy = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`
const TextPowerBy = styled.p`
  opacity: 0.34;
  font-size: 0.85em;
  white-space: nowrap;
  font-family: 'Roboto-Regular';
  color: ${R.colors.text};
  margin-right: 0.3rem;
`
const LogoExistingSvg = styled.svg`
  cursor: pointer;
  opacity: 0.45;
  &:hover {
    opacity: 0.6;
  }
`

const ExternalLink = styled.a`
  display: flex;
  align-items: center;
`

const FooterLogin = () => {
  return (
    <WrapFooter>
      <WrapshortSitemap>
        <LinkCustom>About us</LinkCustom>
        <LinkCustom>Terms</LinkCustom>
        <LinkCustom>Privacy</LinkCustom>
        <LinkCustom>Blog</LinkCustom>
      </WrapshortSitemap>
      <PowerBy />
      {/* <WrapPowerBy>
        <TextPowerBy>Power by </TextPowerBy>
        <ExternalLink
          href="https://existing.co/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <LogoExistingSvg
            xmlns="http://www.w3.org/2000/svg"
            width="93px"
            height="12px"
            viewBox="0 0 224 29"
          >
            <path
              fill={R.colors.text_low_gray}
              fill-rule="evenodd"
              d="M198.645 18.053h6.639c.34.779.798 1.472 1.362 2.064a6.986 6.986 0 0 0 2.381 1.623c.922.387 1.97.583 3.115.583 1.176 0 2.203-.134 3.05-.397.776-.24 1.415-.488 1.904-.736v-3.704h-4.523v-5.25H223v13.236l-.15.08a20.534 20.534 0 0 1-5.2 1.873 26.55 26.55 0 0 1-5.508.575c-1.996 0-3.862-.317-5.548-.941-1.692-.628-3.175-1.539-4.404-2.709-1.235-1.17-2.21-2.607-2.898-4.27a12.992 12.992 0 0 1-.647-2.027zm-160.224-.71H12.312v-5.685h26.109L32.108 1h6.633l7.996 13.5L38.74 28h-6.633l6.313-10.658zM1 28V1h5.656v21.316h18.382V28H1zm45.248-3.125l3.317-5.6L54.732 28H48.1l-1.85-3.125zM61.803 28V1h5.656v27h-5.656zm70.246-21.172h-7.323V1h20.503v5.827h-7.322V28h-5.858V6.828zM153.006 28V1h5.656v27h-5.656zm12.726-27h8.156l11.304 18.563V1h5.993v27h-7.87l-11.59-19.03-.004 19.03h-5.989V1zM81.6 1v5.5h-3.402v15.997H81.6V28h-7.07V1h7.07zm28.987 0h7.07v27h-7.07v-5.503h3.402V6.5h-3.402V1zm-23.84 27v-5.503h11.328c1.464 0 2.671-1.183 2.671-2.623 0-1.441-1.207-2.622-2.67-2.622H94.11c-4.566 0-8.27-3.643-8.27-8.126C85.84 4.639 89.545 1 94.11 1h11.672v5.5H94.11c-1.465 0-2.67 1.185-2.67 2.626 0 1.437 1.205 2.622 2.67 2.622h3.963c4.565 0 8.27 3.64 8.27 8.126 0 4.486-3.705 8.126-8.27 8.126H86.746zM198.5 11.658c.173-.966.438-1.88.793-2.738.688-1.663 1.663-3.1 2.898-4.271 1.23-1.17 2.712-2.08 4.404-2.708 1.686-.625 3.552-.941 5.548-.941 2.032 0 3.934.249 5.65.739a11.26 11.26 0 0 1 4.584 2.57l.205.189-4.308 4.689-.207-.214a7.583 7.583 0 0 0-2.473-1.715c-.91-.385-2.071-.58-3.451-.58-1.144 0-2.192.195-3.116.58a7.022 7.022 0 0 0-2.38 1.625 7.156 7.156 0 0 0-1.524 2.48c-.036.097-.07.196-.103.295h-6.52zM12.312 6.684V1h12.726v5.684H12.312zm37.253 3.041l-3.317-5.6L48.1 1h6.633l-5.167 8.725z"
            />
          </LogoExistingSvg>
        </ExternalLink>
      </WrapPowerBy> */}
    </WrapFooter>
  )
}

export default FooterLogin
