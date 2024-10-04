import React from 'react';
import data from "../resources/data.json";
import img1 from "./logo192.png";
import { useNavigate } from 'react-router-dom';

export default function ListView() {
    const navigate = useNavigate();

    return (
        <ul className="container" style={{
            display: 'flex', flexWrap: "wrap", backgroundImage: "URL('https://t4.ftcdn.net/jpg/04/61/47/03/360_F_461470323_6TMQSkCCs9XQoTtyer8VCsFypxwRiDGU.jpg')",
            backgroundSize: 'cover'
        }}>
            {
                data.candidate.map(dataitem => {
                    return (
                        <div className="card" style={{ width: "20%" }} key={dataitem.id}>
                            <img src={img1} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title"> {dataitem.name} </h5>
                                <p className="card-text">{dataitem.bio}</p>
                                <button className="btn btn-primary" onClick={() => navigate(`/ProfileDetail/${dataitem.id}`)}>Details</button>
                            </div>
                        </div>
                    )
                })
            }
        </ul>
    )
}
