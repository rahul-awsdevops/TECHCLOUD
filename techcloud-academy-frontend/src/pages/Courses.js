import React from 'react';
import { Link } from 'react-router-dom';

const courses = [
  { id: 1, name: 'AWS' },
  { id: 2, name: 'Linux' },
  { id: 3, name: 'AWS Devops' },
  { id: 4, name: 'Python' },
  { id: 5, name: 'Container' },
  { id: 6, name: 'AWS Data Platform' },
  { id: 7, name: 'AWS DevSecOps' },
];

const Courses = () => {
  return (
    <div style={styles.container}>
      <h1>Our Courses</h1>
      <ul style={styles.list}>
        {courses.map((course) => (
          <li key={course.id} style={styles.listItem}>
            <Link to={`/courses/${course.id}`} style={styles.link}>
              {course.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  list: {
    listStyle: 'none',
    padding: '0',
  },
  listItem: {
    margin: '10px 0',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontSize: '18px',
  },
};

export default Courses;