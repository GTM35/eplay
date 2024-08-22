import { createGlobalStyle } from 'styled-components'
export const colors = {
  white: '#eee',
  black: '#111',
  gray: '#333',
  green: '#10ac84',
  lightgray: '#a3a3a3'
}

export const breakpoint = {
  desktop: '1024px',
  tablet: '768px'
}

export const Globalcss = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    color: ${colors.white};
    list-style: none;
  }

  body{
    background-color: ${colors.black};
    padding-top: 40px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoint.desktop} ){
      max-width: 80%;
    }
  }
`
