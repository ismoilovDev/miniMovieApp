import React from 'react';
import './skeleton.scss'

const Skeleton = () => {
   return (
      <div className="card">
         <div className="card-image loading"></div>
         <div className="card-body">
            <div className="card-body-title loading"></div>
            <div className="card-body-description loading"></div>
         </div>
      </div>
   );
};

export default Skeleton;
