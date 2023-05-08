import { Poster } from "./styled"

const PosterBox = ({ sourse }) => {
   return (
      <Poster>
         <img src={sourse} />
      </Poster>
   )
}

export default PosterBox