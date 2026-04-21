import Article from "./Article.jsx"

function Certificates () {
  const articles = [
    {
      id         : 1,
      title      : "Introduction to Front-End Development",
      description: "A certification validating my foundational knowledge in front-end development.",
      url        : "/certifications/certificate-x.png",
    },
    {
      id         : 2,
      title      : "Programming with JavaScript",
      description: "A certification validating my ability to write clean, readable, scalable, and maintainable JavaScript code. AKA: VanillaJS.",
      url        : "/certifications/certificate-x.png",
    },
    {
      id         : 3,
      title      : "Version Control",
      description: "A certification validating my ability to manage version control for my own projects using Git.",
      url        : "/certifications/certificate-x.png",
    },
    {
      id         : 4,
      title      : "HTML & CSS in Depth",
      description: "A certification validating my knowledge of writing HTML and CSS following the most standard and best-practice approaches.",
      url        : "/certifications/certificate-x.png",
    },
    {
      id         : 5,
      title      : "React Basics",
      description: "A certification validating my foundational knowledge of React.",
      url        : "/certifications/certificate-x.png",
    },
  ]
  
  return <main>
    {
      articles.map((article) => {
        return <Article
          key={article.id}
          title={article.title}
          description={article.description}
          url={article.url.replace('x', article.id)}
        />
      })
    }
  </main>
}

export default Certificates
