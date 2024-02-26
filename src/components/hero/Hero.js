import React from 'react';
import './Hero.css'
import Carousel from 'react-material-ui-carousel';
import Paper from '@mui/material/Paper';

const Hero = ({movies}) => {
    console.log(movies);
    return (
        <div className='movie-carousel-container'>
            <Carousel>
                {
                    movies.map((movie)  => {
                        return(
                            <Paper>
                                <div className='movie-card-container'>
                                    <div className='movie-card'>
                                        <div className='movie-detail'>
                                            <div className='movie-poster'>
                                                <img src={movie.poster} alt="" />
                                            </div>
                                            <div className='movie-title'>
                                                <h4>{movie.title}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        );
                    })
                }
            </Carousel>
        </div>
    );
}

export default Hero;