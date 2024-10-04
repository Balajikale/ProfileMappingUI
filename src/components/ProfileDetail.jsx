import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import img1 from "../components/logo192.png";
// import axios from 'axios';

export default function ProfileDetail() {
    const { id } = useParams(); // Fetch the id from the URL
    const [formData, setFormData] = useState({
        profileImage: null,
        name: '',
        phone: '',
        bio: '',
        location: '',
        profession: '',
        skills: '',
    });

    // Uncomment this if you're using axios for API requests
    // useEffect(() => {
    //     axios.get(`http://localhost:3030/candidate/${id}`)
    //         .then(res => setFormData(res.data))
    //         .catch(err => console.log(err));
    // }, [id]);

    // Mock data fetch if you are not using axios (since you are using a local JSON file)
    useEffect(() => {
        const fetchCandidate = async () => {
            // Simulate fetching from a JSON file
            const candidate = require('../resources/data.json').candidate.find(c => c.id === parseInt(id));
            if (candidate) {
                setFormData(candidate);
            }
        };

        fetchCandidate();
    }, [id]);

    if (!formData.name) {
        return <h1>Loading...</h1>; // Loading state
    }

    return (
        <div className="container mt-5" style={{ display:"flex",backgroundColor: 'lightpink',borderRadius:"2%", justifyContent:'center', alignItems:'center',flexDirection:'column'}}>
            <img src= {img1} alt="Profile" style={{height:'30%',width:'30%', borderRadius:'10%'}}/>
            <h1>{formData.name}</h1>
            <p><strong>Phone:</strong> {formData.phone}</p>
            <p><strong>Bio:</strong> {formData.bio}</p>
            <p><strong>Location:</strong> {formData.location}</p>
            <p><strong>Profession:</strong> {formData.profession}</p>
            <p><strong>Skills:</strong> {formData.skills}</p>
            
        </div>
    );
}
