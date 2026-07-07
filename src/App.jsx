import './App.css'

function App() {
  return (
    <div className="container">
      <header>
        <h1>My Portfolio</h1>
        <p>Welcome to my portfolio website</p>
      </header>

      <main>
        <section className="about">
          <h2>About Me</h2>
          <p>I'm a developer passionate about building amazing web applications.</p>
        </section>

        <section className="projects">
          <h2>Projects</h2>
          <div className="project-list">
            <div className="project-card">
              <h3>Project 1</h3>
              <p>Description of project 1</p>
            </div>
            <div className="project-card">
              <h3>Project 2</h3>
              <p>Description of project 2</p>
            </div>
          </div>
        </section>

        <section className="contact">
          <h2>Contact</h2>
          <p>Email: your@email.com</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App