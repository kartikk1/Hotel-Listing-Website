import React from "react";
import styles from "./HotelCard.module.css";
import { Link } from 'react-router-dom';

import { MdOutlineLocationOn } from "react-icons/md";
import { BsBuildings, BsArrowsMove } from "react-icons/bs";
import { LiaBedSolid, LiaBathSolid } from "react-icons/lia";
import { AiOutlineHeart } from "react-icons/ai";

//
import { Carousel } from 'react-responsive-carousel'; 
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HotelCard = ({ hotel }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {/* <img src={hotel.Image} alt={hotel.Name} /> */}

        <Carousel showThumbs={false} autoPlay={true} showArrows={false} className={styles.caro} showStatus={false}>
          {hotel.Images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`${hotel.Name} - Image ${index}`} />
            </div>
          ))}
        </Carousel>
        
        <div className={styles.tag}>For {hotel.Tag}</div>
        <AiOutlineHeart className={styles.heart}/>

        {hotel.Popular && <div className={styles.popularTagContainer}>
              <div className={styles.popularTag}>Popular</div>
        </div>}

      </div>

      <div className={styles.hotelModel}>
        <p>
          <MdOutlineLocationOn className={styles.locationIcon} /> {hotel.Street}
        </p>
        <h3>{hotel.Title}</h3>
      </div>

      <div className={styles.hotelDisc}>
        <div>
          <BsBuildings />
          <p>{hotel.Room} Room</p>
        </div>
        <div>
          <LiaBedSolid />
          <p>{hotel.Bed} Bed</p>
        </div>
        <div>
          <LiaBathSolid />
          <p>{hotel.Bath} Bath</p>
        </div>
        <div>
          <BsArrowsMove />
          <p>{hotel.Carpet} sft</p>
        </div>
      </div>

      <div className={styles.line}></div>

      <div className={styles.lastSection}>
        <div className={styles.lastSectionFirst}>
          <p className={styles.price}>${hotel.Price}</p>
          <p> /month</p>
        </div>
        <Link to={`/property/${hotel.id}`}>Read More</Link>
      </div>
    </div>
  );
};

export default HotelCard;