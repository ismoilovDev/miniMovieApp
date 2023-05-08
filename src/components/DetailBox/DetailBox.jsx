import React from 'react'
import { Button, Details } from './styled'

function DetailBox({ title, handleModalOpen }) {
   return (
      <Details>
         <h2>{title}</h2>
         <Button onClick={handleModalOpen}>Смотреть</Button>
      </Details>
   )
}

export default DetailBox