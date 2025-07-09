import React from 'react';
import Navbar from './sections/Navbar';
import './App.css';
import HeroSection from './sections/HeroSection';
import ProjectsSection from './sections/ProjectsSection';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import finalyearproject from './assets/image.png';
import ml from './assets/ml.png';
import bgImage from './assets/bg.jpg';

function App() {
  // Project data for slideshow
  const projects = [
    {
      name: 'Finance App',
      desc: 'The finance app was developed using a full-stack architecture with React Native and Expo for the cross-platform frontend and Flask (Python) for the backend. The app used Azure Data Studio with SQL Server (via Docker) for structured, relational data storage after migrating from MongoDB. The backend integrates JWT for secure authentication, bcrypt for password hashing, and Flask-CORS for cross-origin communication. For data analytics and machine learning, pandas, NumPy, and scikit-learn (RandomForestRegressor) were used to predict future savings. Visualizations were implemented using react-native-chart-kit and react-native-progress (including Pie, Line, and Bar charts), replacing Power BI due to macOS limitations. HTTP requests were handled using Axios, and AsyncStorage managed secure token storage on the frontend. Additional tools included Google OAuth 2.0, Google SMTP for email features, and Expo Notifications for alerts. The project followed an Agile Iterative Development approach with version control through GitHub.',
      image: finalyearproject,
      link: 'https://github.com/yourusername/energy-dashboard',
      year: 2025,
      type: 'Android Application',
      tech: ['Python ', 'React Native', 'SQL ', 'HTML/CSS'],
    },
    {
      name: 'TripAdvisor Reviews Using LSTM and CNN-Based Deep Neural Networks',
      desc: 'The sentiment classification project was developed using Python 3.12, leveraging deep learning libraries such as TensorFlow and Keras to build and train two distinct models: Long Short-Term Memory (LSTM) and Convolutional Neural Network (CNN). Text preprocessing was carried out using NLTK for tasks such as punctuation removal, stopword filtering, tokenization, and padding. The neural models utilized Keras Embedding layer to convert text into dense 128-dimensional vectors. The LSTM architecture focused on capturing temporal dependencies using gated units, while the CNN architecture extracted local semantic features via 1D convolutional layers and pooling. Training was performed on a stratified 60/40 split with Adam optimizer and categorical crossentropy as the loss function. Evaluation metrics like accuracy, precision, recall, and F1-score were computed using Scikit-learn. The CNN model outperformed LSTM in generalization and class balance. Deployment was designed using a predict_sentiment() function, ready for integration with frameworks like Flask or FastAPI, supporting real-time inference in microservice architectures.',
      image: ml,
      link: 'https://github.com/yourusername/task-manager',
      year: 2025,
      type: 'Machine Learning Inference API',
      tech: ['Python'],
    },
    {
      name: 'Portfolio Website',
      desc: 'My personal portfolio website built with React and modern CSS.',
      image: bgImage,
      link: 'https://github.com/yourusername/portfolio',
      year: 2023,
      type: 'Portfolio',
      tech: ['React', 'CSS'],
    },
  ];

  const [current, setCurrent] = React.useState(0);
  const [aboutSlide, setAboutSlide] = React.useState(0);
  const aboutSlides = [
    {
      title: 'Graduation',
      subtitle: 'Ulster University',
      content: 'Graduated from Ulster University with a 2:2 grade in Computer Science. My academic journey included a strong focus on software engineering, web development, and collaborative projects. I am proud of my achievements and excited to bring my skills to new challenges in the tech industry.',
      year: '2025',
      type: 'Education'
    },
    {
      title: 'About Me',
      subtitle: 'Personal Introduction',
      content: 'I am a recent Computer Science graduate, eager to apply my coding knowledge and problem-solving skills developed through both academic projects and real-world experience. With nearly five years of hands-on experience across various programming languages, my studies at Belfast Met and university-level work have sharpened my technical capabilities. I thrive in collaborative environments, bringing strong communication and teamwork skills that help drive project success and enhance team performance.',
      year: '2025',
      type: 'Profile'
    }
  ];

  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <ProjectsSection projects={projects} current={current} setCurrent={setCurrent} />
      <AboutSection aboutSlides={aboutSlides} aboutSlide={aboutSlide} setAboutSlide={setAboutSlide} />
      <ContactSection />
      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-row">
            <span>© {new Date().getFullYear()} Muhammad Choudhry. All rights reserved.</span>
            <span className="footer-links">
              <a href="https://www.linkedin.com/in/muhammad-choudhry-7528aa295/" target="_blank" rel="noopener noreferrer" className="footer-icon-link" aria-label="LinkedIn">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0077b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: 'middle'}}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><line x1="16" y1="11" x2="16" y2="16"/><line x1="12" y1="11" x2="12" y2="16"/><line x1="8" y1="11" x2="8" y2="16"/><circle cx="8" cy="7" r="1"/></svg>
              </a>
              <a href="https://github.com/MuhammadChoudhry1" target="_blank" rel="noopener noreferrer" className="footer-icon-link" aria-label="GitHub">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: 'middle'}}><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.12 2.51.35 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App
