import React from 'react'
import styled from 'styled-components'

const TitleStyled = styled.h2`
   font-size: 1.5rem;
   color: #fff;
   @media (min-width: 768px) {
      font-size: 2rem;
   }
   @media (min-width: 768px) {
      font-size: 2.2rem;
   }
`

function Title({ title }) {
   return (
      <TitleStyled>
         {title}
      </TitleStyled>
   )
}

export default Title