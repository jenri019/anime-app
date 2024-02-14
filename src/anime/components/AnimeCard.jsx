import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CommonContext } from '../../common/context/CommonContext';

export const AnimeCard = ({
  images,
  synopsis,
  titles,
  mal_id
}) => {
    const { destinyRoute } = useContext(CommonContext);

    return (
        <div className='col animate__animated animate__fadeInRight'>
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={images.jpg.image_url } className="card-img" alt={titles[0].title} />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{titles[0].title}</h5>
                            <p className="card-text">
                                <small className='text-muted'>{synopsis}</small>
                            </p>
                        </div>
                        <Link to={`${destinyRoute}/${mal_id}`}>Ver más...</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
