import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

export default function Home() {
    return (
    <>
    <Hero>
        <Banner title="Refael David Hotel" subtitle={"Experience the beauty of south Israel scenic hill country. Refael David is an elegant hotel that stands on a scenic plot of an acre of land, surrounded by a stunning landscape. The uniquely designed resort blends perfectly with the nature."}>
        <Link to='/rooms' className='btn-primary'>Book Now</Link>
        </Banner>
    </Hero>
    <Services />
      <FeaturedRooms />
    </>
  );
};

