import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

export default function Error() {
    return <Hero hero="errorHero">
        <Banner title="404" subtitle={"We can't find that page"}>
        <Link to='/' className='btn-primary'>Return Home</Link>
        </Banner>
    </Hero>
}