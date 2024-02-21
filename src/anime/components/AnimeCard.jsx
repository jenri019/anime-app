import React from 'react'
import { Link } from 'react-router-dom'

export const AnimeCard = ({
  images,
  synopsis,
  titles,
  mal_id,
  route = ''
}) => {

    return (
        <div className='col animate__animated animate__fadeInRight'>
            <div className="card">
                <div className="anime-card">
                    <div className="anime-card-img">
                        <img src={images.jpg.image_url } alt={titles[0].title} />
                        <div className='anime-card-title'>
                            <Link to={`${route}${mal_id}`} className="card-title title animate__animated animate__fadeInUp">{titles[0].title}</Link>
                            <p className="card-text animate__animated animate__fadeInUp">
                                <small>{synopsis}</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
