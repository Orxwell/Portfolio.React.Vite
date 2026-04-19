import Article from "./Article.jsx"

function Certificates () {
  const articles = [
    {
      id         : 1,
      title      : "Introduction to Front-End Development",
      description: "Una certificación donde apruebo mis conocimientos básicos sobre la especialización del desarrollo front-end.",
      url        : "/certifications/certificate-x.png",
    },
    {
      id         : 2,
      title      : "Programming with JavaScript",
      description: "Una certificación donde apruebo mis habilidades a la hora de construir código limpio, legible, escalable, mantenible acerca de JavaScript. AKA: VanillaJS.",
      url        : "/certifications/certificate-x.png",
    },
    {
      id         : 3,
      title      : "Version Control",
      description: "Una certificación donde apruebo mis capacidades para tener un control de versiones de mis propios proyectos, con Git.",
      url        : "/certifications/certificate-x.png",
    },
    {
      id         : 4,
      title      : "HTML & CSS in depth",
      description: "Una certificación de mis conocimientos a la hora de escribir HTML y CSS de la manera más estándar posible.",
      url        : "/certifications/certificate-x.png",
    },
    {
      id         : 5,
      title      : "React Basics",
      description: "Una certificación donde apruebo mis conocimientos básicos sobre React.",
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
