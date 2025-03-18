import React from 'react';
import { useParams } from 'react-router-dom';
import EnrollForm from '../components/EnrollForm'; // Import the EnrollForm component

const courses = [
  { id: 1, name: 'AWS', duration: '9 weeks', topics: ['SHELL SCRIPTING ', 'BASIC LINUX', 'AWS SERVICES(IAM,S3,EC2..)', 'AWS CLI', 'CLOUDFORMATION', 'AWS LAMBDA'], bgColor: '#FFEBEE' },
  { id: 2, name: 'Linux', duration: '7 weeks', topics: ['SHELL SCRIPTING', 'FILE SYSTEMS', 'NETWORKING','BOOTING','PACKAGE MANAGMENT','USER MANAGMENT'], bgColor: '#E3F2FD' },
  { id: 3, name: 'AWS DevOps', duration: '15 weeks', topics: ['GIT', 'TERRAFORM', 'JENKINS','DOCKER', 'KUBERNETES', 'ANSIBLE'], bgColor: '#E8F5E9' },
  { id: 4, name: 'Python', duration: '7 weeks', topics: ['BASICS', 'PYTHON SCRIPTING', 'DJANGO','AWS LAMBDA', 'CLOUDWATCH', 'EVENTBRIDGE'], bgColor: '#FFF3E0' },
  { id: 5, name: 'Container', duration: '10 weeks', topics: ['DOCKER', 'KUBERNETES', 'AWS ECS', 'HELM CHART', 'SERVICE MESH', 'ARGO CD'], bgColor: '#F3E5F5' },
  { id: 6, name: 'AWS Data Platform', duration: '8 weeks', topics: ['REDSHIFT', 'GLUE', 'ATHENA','DATA PIPELINE', 'AWS LAMBDA', 'AWS QUICKSIGHT'], bgColor: '#E0F7FA' },
  { id: 7, name: 'AWS DevSecOps', duration: '12 weeks', topics: ['SECURITY BEST PRACTICES', 'IAM', 'KMS', 'AWS CONFIG', 'GAURDDUTY', 'AWS ORGANISATION'], bgColor: '#FBE9E7' },
];

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div style={styles.container}>
      <h1>{course.name}</h1>
      <p><strong>Duration:</strong> {course.duration}</p>
      <h3>Topics Covered:</h3>
      <ul>
        {course.topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
      <EnrollForm courseName={course.name} />
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
};

export default CourseDetails;