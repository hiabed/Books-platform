import './Portfolio.css';

const Portfolio = () => {
    const projectsData = [
        {
          image: 'pingpong.png',  // Add your actual image URLs here
          title: 'Pong Game Platform',
          description: `Using the SPA implementation, I built the entire front end of our Pong game platform from the ground up in Vanilla JS with a
                        responsive UI using HTML, CSS, and Bootstrap that promised a smooth user experience. I also helped my four teammates in the
                        other aspects of the process, and the linking phase was also a rich yet tedious experience.`,
          buttons: ['DEMO', 'MORE'],
          url: "https://github.com/hiabed/Pong-Game-Platform",
        },
        {
          image: 'server.webp',
          title: 'Custom Web Server',
          description: `Developed a custom web server inspired by Nginx, gaining comprehensive knowledge of HTTP protocols, server architecture, and
                        socket programming. My primary responsibility was implementing the POST method, including support for binary data, chunked
                        transfer encoding, multipart boundaries, and parsing client requests for accurate processing.`,
          buttons: ['DEMO', 'MORE'],
          url: "https://github.com/hiabed/Webserv",
        },
        {
          image: 'inception.webp',
          title: 'Inception',
          description: `Designed a dynamic WordPress Web App using Docker. Created custom Dockerfiles to define rules for building each container
                        from scratch, adhering to the project's restriction on using pre-built images from the Docker Hub. Configured Nginx as the web
                        server and MariaDB for database management, ensuring seamless deployment and scalability.`,
          buttons: ['DEMO', 'MORE'],
          url: "https://github.com/hiabed/inception",
        },
        {
          image: 'iterm2.avif',
          title: 'Minishell',
          description: 'It is a small UNIX Shell that resembles Bash.',
          buttons: ['DEMO', 'MORE'],
          url: "https://github.com/hiabed/minishell",
        },
        {
          image: 'ecommerce.png',
          title: 'E-commerce Website',
          description: `I Developed the UI of an e-commerce website using React.js for the first time.`,
          buttons: ['DEMO', 'MORE'],
          url: "https://github.com/hiabed/E-Commerce-platform",
        },
        {
          image: 'cub3d.webp',
          title: "3D Game with C",
          description: "We implemented functional 3D game using Raycasting technic with C, from scratch using only a minimal graphic library called minilibx",
          buttons: ['DEMO', 'MORE'],
          url: "https://github.com/hiabed/cub3d_linux",
        },
      ];
    return (
        <div id="Portfolio">
            <div className="portfolio">
            </div>
            <div className="tabs">
                <a className='tab' style={{cursor: "pointer",color: "#FFFBFB"}}>Projects</a>
                <a className='tab' style={{pointerEvents: "none", borderBottomColor: "#AAA"}}>Certifications</a>
                <a className='tab' style={{pointerEvents: "none", borderBottomColor: "#AAA"}}>Education</a>
            </div>
            <div className="projects">
                {projectsData.map((project, index) => (
                    <div className="project" key={index}>
                      <img src={project.image} alt={`Project ${index + 1}`} width="100%" height="100%" />
                      <div className='to-show'>
                        <div className='to-align'>
                          <h1>{project.title}</h1>
                          <p>{project.description}</p>
                          <div className="buttons">
                              {project.buttons.map((buttonText, btnIndex) => (
                              <a href={project.url} target='blank_' key={btnIndex}>{buttonText}</a>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>  
                ))}
            </div>
            <div className="more-to-come">
                <h3>And many more projects <a href='https://github.com/hiabed?tab=repositories' target='blank_' rel="noopener noreferrer">here!</a></h3>
            </div>
        </div>
    )
}

export default Portfolio;