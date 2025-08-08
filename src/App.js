import './App.css';

function App() {
  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <img
          src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
          alt="Mohsin"
          className="profile-pic"
        />
        <h1>Mohsin Choudhury</h1>
        <p className="tagline">Full Stack Developer & Designer</p>
        <div className="social-links">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:mohsin@email.com">Email</a>
        </div>
      </header>
      <section className="about">
        <h2>About Me</h2>
        <p>
          Hi! I'm Mohsin, passionate about building beautiful and functional web experiences.
          I love working with React, Node.js, and modern design tools.
        </p>
      </section>
      <section className="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Banana Club</strong> – A fun social platform for banana lovers.
          </li>
          <li>
            <strong>Portfolio Website</strong> – My personal showcase built with React.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;