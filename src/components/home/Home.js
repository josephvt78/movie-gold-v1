import React from 'react';
import Hero from '../hero/Hero';

const Home = ({movies}) => {
    console.log(movies);
    return (
        <div>
            <Hero movies = {movies}/>
        </div>
    );
}

export default Home;