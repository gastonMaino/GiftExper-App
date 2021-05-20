import React, { useState, useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

const GiffGrid = ({ category }) => {
    const {data:images, loading} = useFetchGifs(category);

    
    return (
        <article className='card-category'>
            <h2 className='animate__animated animate__fadeInDown'>{category}</h2>

            {loading && <p className='animate__animated  animate__flash'>Loading...</p>}

            <section className='card-grid'>
                {
                    images.map((img) =>
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    )
                }
            </section>

        </article>
    )
}

export default GiffGrid
