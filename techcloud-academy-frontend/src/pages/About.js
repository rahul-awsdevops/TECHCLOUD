import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.aboutSection}>
        <h2>A bit About me</h2>
        <p>
          I, Rahul Ranjan, am an AWS DevOps Engineer with 8+ years of hands-on experience in Cloud Computing and DevOps. I have a degree in Computer Science from a reputable university. Currently, I'm focused on designing scalable cloud solutions and implementing CI/CD pipelines.
        </p>
        <p>
          My expertise lies in Linux, AWS, DevOps tools, Python, Jenkins, Terraform, Kubernetes, and EKS. I am passionate about simplifying complex concepts for learners and focus on hands-on training with real-world scenarios.
        </p>
        <p>
          Nothing brings me more pleasure than solving complex problems and creating efficient systems. Even when the results are far from my expectations, I find the process of creativity completely stimulating.
        </p>
        <p>
          I'd like to think that I'm a very happy person, but I find the stuff that challenges me the most generates the best work. I love music, science fiction, and movies that can evoke strong emotions.
        </p>
      </div>

      <div style={styles.socialSection}>
        <h2>Connect with Me</h2>
        <div style={styles.socialLinks}>
          <a href="https://www.linkedin.com/in/rahul-ranjan-a47539100/" style={styles.socialLink}>LinkedIn</a>
          <a href="https://github.com/rahul-awsdevops" style={styles.socialLink}>GitHub</a>
        </div>
      </div>

      <div style={styles.contactSection}>
        <h2>Contact</h2>
        <p>
          If you'd like to get in touch, feel free to reach out via email at <a href="mailto:rahulranjan.ranjan83@gamil.com" style={styles.emailLink}>rahulranjan.ranjan83@gamil.com</a>.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    lineHeight: '1.6',
  },
  aboutSection: {
    padding: '40px 20px',
    backgroundColor: '#ffffff',
    color: '#333',
  },
  socialSection: {
    padding: '40px 20px',
    backgroundColor: '#f0f8ff',
    color: '#333',
    textAlign: 'center',
  },
  socialLinks: {
    marginTop: '20px',
  },
  socialLink: {
    margin: '0 10px',
    textDecoration: 'none',
    color: '#1e3a8a',
    fontSize: '16px',
  },
  contactSection: {
    padding: '40px 20px',
    backgroundColor: '#ffffff',
    color: '#333',
    textAlign: 'center',
  },
  emailLink: {
    color: '#1e3a8a',
    textDecoration: 'none',
  },
};

export default About;