import React from 'react';

const LoadingCard = () => {
   return (
      <div className="card">
         <div className="card-image loading"></div>
         <div className="card-body">
            <div className="card-title loading"></div>
            <div className="card-description loading"></div>
         </div>
      </div>
   );
};

export default LoadingCard;
