import React from 'react'
import { DescriptionBox } from './styled'

function Description({ data }) {
   return (
      <>
         {
            data.id && 
            <DescriptionBox>
               <div className="image_content">
                  <img src={data?.poster} alt="" />
               </div>
               <div className="text_content">
                  <div className="text_content_head">
                     <ul>
                        <li>
                           <span>Год:</span>
                           <p className="data">
                              <span>{data?.year}</span>
                           </p>
                        </li>
                        <li>
                           <span>Страна:</span>
                           <p className="data">
                              {
                                 data?.countries.map(item => (
                                    <span key={item.id}>{item.title}</span>
                                 ))
                              }
                           </p>
                        </li>
                        <li>
                           <span>Жанр:</span>
                           <p className="data">
                              {
                                 data?.genres.map(item => (
                                    <span key={item.id}>{item.title}</span>
                                 ))
                              }
                           </p>
                        </li>
                        <li>
                           <span>Возраст:</span>
                           <p className="data">
                              <span>{data?.ageLimit}</span>
                           </p>
                        </li>
                        <li>
                           <span>Бюджет:</span>
                           <p className="data">
                              <span>{data?.budget}</span>
                           </p>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="dscr">
                  <p>{data?.description}</p>
               </div>
            </DescriptionBox>
         }
      
      </>
   )
}

export default Description