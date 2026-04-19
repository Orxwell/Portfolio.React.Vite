function Article (props) {
  return <article>
    <section>
      <h2>{props.title}</h2>

      <span>{props.description}</span>
    </section>

    <hr />

    <section>
      <img src={props.url} alt="certification" />
    </section>
  </article>
}

export default Article
