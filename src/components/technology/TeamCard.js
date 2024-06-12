import { Image } from "react-bootstrap"; // Import Image from next/image
import React from 'react';

const TeamCard = ({ imgSrc, name, role, description }) => {
  return (
    <div className='col-sm-6 col-md-4 mb-5'>
      <div className='card h-100 text-center'>
        <div className='card-img-top mx-auto' style={{ width: '150px', height: '150px', overflow: 'hidden', borderRadius: '50%' }}>
          <Image
            src={imgSrc}
            alt={name}
            width={150}
            height={150}
            layout="fixed"
            objectFit="cover"
            className="rounded-circle"
          />
        </div>
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
          <h6 className='card-subtitle mb-2 text-muted'>{role}</h6>
          <p className='card-text'>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;