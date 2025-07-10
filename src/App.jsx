import React from 'react';
import Navbar from './sections/Navbar';
import './App.css';
import HeroSection from './sections/HeroSection';
import ProjectsSection from './sections/ProjectsSection';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import finalyearproject from './assets/image.png';
import ml from './assets/ml.png';
import restapi from './assets/rest.png';

function App() {
  // Project data for slideshow
  const projects = [
    {
      name: 'Finance App',
      desc: 'The finance app was built with React Native (Expo) for the frontend and Flask (Python) for the backend. It started with MongoDB and later moved to SQL Server (via Docker) for better data handling. Authentication used JWT and bcrypt, with Axios and Flask-CORS connecting the frontend and backend. We added savings predictions using scikit-learn and visualized data with charts (pie, line, bar) using react-native-chart-kit. Google login, email via SMTP, and push notifications were also included. The project followed Agile methods and used GitHub for version control.',
      image: finalyearproject,
      link: 'https://github.com/MuhammadChoudhry1/financeApp',
      year: 2025,
      type: 'Android Application',
      tech: ['Python ', 'React Native', 'SQL ', 'HTML/CSS'],
    },
    {
      name: 'TripAdvisor Reviews Using LSTM and CNN-Based Deep Neural Networks',
      desc: 'This sentiment analysis project was built with Python 3.12 using TensorFlow and Keras. It included two deep learning models: LSTM for understanding word sequences and CNN for capturing key phrases. Text was cleaned and prepared using NLTK (removing punctuation, stopwords, and tokenizing). Words were turned into 128-dimensional vectors using Keras Embedding. The models were trained using a 60/40 data split with the Adam optimizer. We used accuracy, precision, recall, and F1-score to evaluate performance, and CNN gave better results overall. The system includes a predict_sentiment() function, ready to plug into Flask or FastAPI for real-time use.',
      image: ml,
      link: 'https://github.com/MuhammadChoudhry1/TripAdvisor-Reviews-Using-LSTM-and-CNN-Based-Deep-Neural-Networks',
      year: 2025,
      type: 'Machine Learning Inference API',
      tech: ['Python'],
    },
    {
      name: 'Game Api ASP.NET',
      desc: 'This Game Store API was built using ASP.NET Core 9.0 and C#. It’s a lightweight RESTful service that lets you manage a game collection without needing a database — everything’s stored in a local games.json file. You can add, view, update, or delete games using standard HTTP requests. It also includes a web interface built with HTML, CSS, and JavaScript for easy testing, and uses Swagger to automatically generate API documentation. Just run it with dotnet run, and it starts a server that’s ready to handle requests and manage your game data. CORS support is also included, so it works well with web apps from different origins.',
      image: restapi,
      link: 'https://github.com/MuhammadChoudhry1/GameApiASP.NET',
      year: 2025,
      type: 'Portfolio',
      tech: ['ASP.NET', 'C#', 'HTML/CSS', 'json'],
    },
  ];

  const [current, setCurrent] = React.useState(0);
  const [aboutSlide, setAboutSlide] = React.useState(0);
  const aboutSlides = [
    {
      title: 'Graduation',
      subtitle: 'Ulster University',
      content: "I graduated from Ulster University with a degree in Computer Science (2:2). During my studies, I focused on software engineering, web development, and working on team projects. I'm proud of what I’ve learned and achieved, and I’m excited to apply my skills to new challenges in the tech world.",
      year: '2025',
      type: 'Education'
    },
    {
      title: 'About Me',
      subtitle: 'Personal Introduction',
      content: "I'm a recent Computer Science graduate with nearly five years of hands-on coding experience. Through my studies at Belfast Met and university, I’ve built solid technical skills and worked on a range of projects that strengthened my problem-solving abilities. I enjoy working with others, and my strong communication and teamwork skills help me contribute to successful, collaborative projects.",
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
