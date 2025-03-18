import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const courses = [
  { id: 1, name: 'AWS', duration: '9 weeks', topics: ['SHELL SCRIPTING ', 'BASIC LINUX', 'AWS SERVICES(IAM,S3,EC2..)', 'AWS CLI', 'CLOUDFORMATION', 'AWS LAMBDA'], bgColor: '#FFEBEE' },
  { id: 2, name: 'Linux', duration: '7 weeks', topics: ['SHELL SCRIPTING', 'FILE SYSTEMS', 'NETWORKING','BOOTING','PACKAGE MANAGMENT','USER MANAGMENT'], bgColor: '#E3F2FD' },
  { id: 3, name: 'AWS DevOps', duration: '15 weeks', topics: ['GIT', 'TERRAFORM', 'JENKINS','DOCKER', 'KUBERNETES', 'ANSIBLE'], bgColor: '#E8F5E9' },
  { id: 4, name: 'Python', duration: '7 weeks', topics: ['BASICS', 'PYTHON SCRIPTING', 'DJANGO','AWS LAMBDA', 'CLOUDWATCH', 'EVENTBRIDGE'], bgColor: '#FFF3E0' },
  { id: 5, name: 'Container', duration: '10 weeks', topics: ['DOCKER', 'KUBERNETES', 'AWS ECS', 'HELM CHART', 'SERVICE MESH', 'ARGO CD'], bgColor: '#F3E5F5' },
  { id: 6, name: 'AWS Data Platform', duration: '8 weeks', topics: ['REDSHIFT', 'GLUE', 'ATHENA','DATA PIPELINE', 'AWS LAMBDA', 'AWS QUICKSIGHT'], bgColor: '#E0F7FA' },
  { id: 7, name: 'AWS DevSecOps', duration: '12 weeks', topics: ['SECURITY BEST PRACTICES', 'IAM', 'KMS', 'AWS CONFIG', 'GAURDDUTY', 'AWS ORGANISATION'], bgColor: '#FBE9E7' },
];

const Home = () => {
  const navigate = useNavigate();

  const handleEnrollClick = (courseName) => {
    navigate('/enroll', { state: { courseName } });
  };

  return (
    <div className="home-container">
      <h1 className="main-heading">Techcloud Academy</h1>
      <h2 className="sub-heading master-heading">MASTER DEVOPS & CLOUD with Rahul</h2>
      <p className="description">Learn the latest technologies and advance your career.</p>

      {/* Who Should Enroll Section */}
      <div className="who-should-enroll">
        <h3 className="section-heading large-heading">Who Should Enroll?</h3>
        <ul className="section-list large-text">
          <li>Students and new graduates aiming to start a career in Cloud.</li>
          <li>Professionals seeking to transition into Cloud or DevOps.</li>
          <li>Developers looking to specialize in AWS, DevOps, or modern technologies.</li>
        </ul>
      </div>

      {/* Courses Catalog */}
      <h2 className="courses-title">Currently Offering Below Courses</h2>
      <div className="courses-catalog">
        {courses.map((course) => (
          <div key={course.id} className="course-card" style={{ backgroundColor: course.bgColor }}>
            <h3>{course.name}</h3>
            <p><strong>Duration:</strong> {course.duration}</p>
            <ul>
              {course.topics.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
            <button className="enroll-button" onClick={() => handleEnrollClick(course.name)}>
              Enroll Now
            </button>
          </div>
        ))}
      </div>

      {/* Your Future in Cloud and DevOps Section */}
      <div className="future-in-cloud">
        <h3 className="section-heading large-heading">Your Future in Cloud and DevOps</h3>
        <ul className="section-list large-text">
          <li><strong>Industry Growth:</strong> The Cloud computing industry is growing at a projected rate of 15% annually.</li>
          <li><strong>High Demand:</strong> AWS, Kubernetes, and DevOps professionals are among the most sought-after in IT.</li>
          <li><strong>Job Placement Support:</strong> Dedicated help to secure roles in top tech companies.</li>
        </ul>
      </div>

      {/* Get in Touch Section */}
      <div className="contact-section styled-contact">
        <h3 className="large-heading">Get in Touch with Us</h3>
        <p><strong>Institute:</strong> Techcloud Academy by Rahul</p>
        <p><strong>Email:</strong> <a href="mailto:rahulranjan.ranjan83@gmail.com">rahulranjan.ranjan83@gmail.com</a></p>
        <p><strong>Phone:</strong> +91 8018953031</p>
        <p><strong>Website:</strong> <a href="https://github.com/rahul-awsdevops" target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
      </div>
    </div>
  );
};

export default Home;
