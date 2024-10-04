import React from 'react'
import { useNavigate } from 'react-router-dom';
import data from "../resources/data.json"
import img1 from "./logo192.png"
import axios from 'axios';

export default function Adminlistview() {
    const nevigate = useNavigate();
    return (
        <>
            <div class='container'>
                <button type="button" class="btn btn-primary btn-lg" onClick={() => nevigate('/EditPage')}>Add Profile</button>
            </div>
            <ul class="container" style={{
                display: 'flex', flexWrap: "wrap", backgroundImage: "URL('https://t4.ftcdn.net/jpg/04/61/47/03/360_F_461470323_6TMQSkCCs9XQoTtyer8VCsFypxwRiDGU.jpg')",
                backgroundSize: 'cover'
            }}>
                {
                    data.candidate.map(dataitem => {
                        return (
                            <div class="card" style={{ width: "20%" }}>
                                <img src="" class="card-img-top" alt="" />
                                <div class="card-body">
                                    <h5 class="card-title"> {dataitem.name} </h5>
                                    <p class="card-text">{dataitem.bio}</p>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <a href="#" class="btn btn-primary" onClick={() => nevigate('/EditPage')}> Edit </a>
                                        <a href="#" class="btn" style={{ backgroundColor: 'red' }} onClick={() => alert("Profile Deleted Successfully")}
                                            > Delete </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </ul>
        </>
    )
}
