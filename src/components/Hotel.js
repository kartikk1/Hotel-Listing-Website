import React from 'react';
import { useParams } from 'react-router-dom';
import hotels from "../hotels.json";
import HotelCard from './HotelCard';

const Hotel = () => {
  const { id } = useParams();
  console.log(id);
  const property = hotels.find(hotel => hotel.id === id);

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div>
      <h2>{property.Name}</h2>
      {/* Display property details here */}
      <HotelCard hotel={property} />
    </div>
  );
}

export default Hotel;
