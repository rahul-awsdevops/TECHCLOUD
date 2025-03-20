import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/EnrollForm.css';

const courseDurations = {
  AWS: '9 weeks',
  Linux: '7 weeks',
  'AWS DevOps': '15 weeks',
  Python: '7 weeks',
  Container: '10 weeks',
  'AWS Data Platform': '8 weeks',
  'AWS DevSecOps': '12 weeks',
};

const EnrollForm = () => {
  const location = useLocation();
  const courseName = location.state?.courseName || '';

  const [formData, setFormData] = useState({
    name: '',
    country: '',
    city: '',
    mobile: '',
    email: '',
    course: courseName,
    duration: courseDurations[courseName] || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === 'course' && { duration: courseDurations[value] || '' }),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/enroll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Enrollment successful!');
        setFormData({
          name: '',
          country: '',
          city: '',
          mobile: '',
          email: '',
          course: '',
          duration: '',
        });
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit. Please try again.');
    }
  };

  return (
    <div className="enroll-form-container">
      <h2>Enroll Now</h2>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td><label htmlFor="name">Name:</label></td>
              <td>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="country">Country:</label></td>
              <td>
                <input
                  type="text"
                  id="country"
                  name="country"
                  placeholder="Enter your country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="city">City:</label></td>
              <td>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Enter your city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="mobile">Mobile:</label></td>
              <td>
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  placeholder="Enter your mobile number"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="email">Email:</label></td>
              <td>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="course">Course:</label></td>
              <td>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Course</option>
                  {Object.keys(courseDurations).map((course) => (
                    <option key={course} value={course}>{course}</option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="duration">Duration:</label></td>
              <td>
                <input
                  type="text"
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2" style={{ textAlign: 'center' }}>
                <button type="submit">Submit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default EnrollForm;
