import React from 'react'
import Navbar from './Navbar'
import ListView from './ListView'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLogin from './AdminLogin';
import EditPage from './EditPage';
import Adminlistview from './Adminlistview';
import ProfileDetail from './ProfileDetail';

export default function HomePage() {
    return (<div style={{backgroundImage: "URL('https://t4.ftcdn.net/jpg/04/61/47/03/360_F_461470323_6TMQSkCCs9XQoTtyer8VCsFypxwRiDGU.jpg')",
        backgroundSize: 'cover', height: ''}}>
        <Router >
            <Navbar />
            <Routes>
                <Route path="/admin" element={<AdminLogin />} />
                <Route path="/" element={<ListView />} />
                <Route path="/EditPage" element={< EditPage />} />
                <Route path="/Adminlistview" element={<Adminlistview />} />
                <Route path="/ProfileDetail/:id" element={<ProfileDetail />} />
            </Routes>
        </Router>
    </div>
    )
}
