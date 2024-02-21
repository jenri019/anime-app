import React from 'react'
import { Link } from 'react-router-dom'

export const CharacterCard = ({
    images, name = '', mal_id
}) => {
    return (
        <div className='col animate__animated animate__fadeInRight'>
            <div className="card">
                <div className="row no-gutters">
                    <div className="col">
                        <img src={images?.jpg?.image_url} className="card-img" alt={name} />
                        <div className="card-body text-center">
                            <Link to={`${mal_id}`} className="card-title">{name}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
