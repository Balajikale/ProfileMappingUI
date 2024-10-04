import React from 'react'

import { useNavigate } from 'react-router-dom';
export default function AdminLogin() {
    const nevigate = useNavigate();
    return (
        <div >

            <div className="container" style={{ marginTop: '5rem', paddingBottom: '1rem', width: '40%', height: '70%', backgroundColor: "lightgreen", borderRadius: '0.5rem' }}>
                <form>
                    <div class="row mb-3">
                        <p></p>
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <input type="email" class="form-control" id="inputEmail3" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="inputPassword3" />
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-sm-10 offset-sm-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck1" />
                                <label class="form-check-label" for="gridCheck1">
                                    Example checkbox
                                </label>
                            </div>
                        </div>
                    </div>
                </form>
                <div style={{ display: 'flex', justifyContent: 'center' }}>

                    <button type="submit" class="btn btn-secondary"
                        onClick={() => nevigate('/Adminlistview')}>LogIn</button>
                </div>
                <p></p>
            </div>
        </div>

    )
}
