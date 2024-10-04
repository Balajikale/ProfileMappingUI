import React, { useState } from 'react';
import GoogleMapSelect from './GoogleMapSelect';
import axios from 'axios'
export default function EditPage() {
  // State for form data
  const [formData, setFormData] = useState({
    profileImage: null,
    name: '',
    phone: '',
    bio: '',
    location: '',
    profession: '',
    skills: '',
  });

  // State for errors
  const [error, setError] = useState('');

  // Handle file input change (for profile image)
  const handleFileChange = (e) => {
    setFormData({ ...formData, profileImage: e.target.files[0] });
  };

  // Handle text input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // to handle the location
  const handleLocationSelect = (location) => {
    setFormData({
      ...formData,
      location,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.name || !formData.phone || !formData.bio) {
      setError('Please fill all the required fields');
      return;
    } else {
     // localStorage.setItem('userData', JSON.stringify(formData));
     axios.post("http://localhost:3030/candidate",formData).
     then(res =>{ 
          alert('Registration successful!');})
    }

    // Simulate form submission
    console.log('Form submitted:', formData);

    // Reset form data
    setFormData({
      profileImage: null,
      name: '',
      phone: '',
      bio: '',
      location: '',
      profession: '',
      skills: '',
    });

    setError('');
  };

  return (
    <div className="container mt-5" style={{ backgroundColor: "skyblue",borderRadius:"2%"}}>
      <h2>Registration Form</h2>

      {/* Display Error Message */}
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        {formData.profileImage && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="mt-3">

              <img
                src={URL.createObjectURL(formData.profileImage)}
                alt="Profile Preview"
                width="150"
                height="150"
                style={{ borderRadius: '50%', borderStartEndRadius: '0.5rem',borderStartStartRadius:"0.5rem", borderColor: 'black', borderStyle: 'solid' }}
              />
              <h2>{formData.name}</h2>
            </div>
            
          </div>
        )}
        {/* Profile Image */}
        <div className="mb-3">
          <label htmlFor="profileImage" className="form-label">Profile Image</label>
          <input
            type="file"
            className="form-control"
            id="profileImage"
            onChange={handleFileChange}
          />
        </div>

        {/* Name */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Phone Number */}
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Bio */}
        <div className="mb-3">
          <label htmlFor="bio" className="form-label">Bio</label>
          <textarea
            className="form-control"
            id="bio"
            name="bio"
            rows="3"
            value={formData.bio}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>

        {/* Location */}
        <div>
          <label>Location:</label>
          <GoogleMapSelect onSelectLocation={handleLocationSelect} />
          {formData.location && <p>Selected Location: {formData.location}</p>}
        </div>

        {/* Profession */}
        <div className="mb-3">
          <label htmlFor="profession" className="form-label">Profession</label>
          <input
            type="text"
            className="form-control"
            id="profession"
            name="profession"
            value={formData.profession}
            onChange={handleInputChange}
          />
        </div>

        {/* Skills */}
        <div className="mb-3">
          <label htmlFor="skills" className="form-label">Skills</label>
          <input
            type="text"
            className="form-control"
            id="skills"
            name="skills"
            placeholder="e.g., React, Node.js, Python"
            value={formData.skills}
            onChange={handleInputChange}
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      {/* Preview Image */}

    </div>
  );
}
