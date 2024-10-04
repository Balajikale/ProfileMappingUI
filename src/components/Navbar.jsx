
import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function Navbar() {
    const navigate = useNavigate();
    return (
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid" >
                <div >
                    <button class="btn btn-outline-success" type="submit" 
                     onClick={() => navigate('/admin')}>Admin</button>
                    <button class="btn btn-outline-success" type="submit"
                    onClick={() => navigate('/')}>User</button>
                </div>
                <form class="d-flex" role="search" >
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
                            Sort By
                        </button>
                        <ul class="dropdown-menu dropdown-menu-dark">
                            <li><a class="dropdown-item active" href="#">Name</a></li>
                            <li><a class="dropdown-item" href="#">Location</a></li>
                            <li><a class="dropdown-item" href="#">Mobile No.</a></li>
                        </ul>
                    </div>
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

