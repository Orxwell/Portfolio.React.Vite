import { useState } from 'react';

function ContactMe (props) {
  const [formData, setFormData] = useState({
    name    : '',
    email   : '',
    comments: '',
  });

  function sendEmail (e) {
    e.preventDefault();

    console.log("Sending data to a future back-end:", formData);
    
    alert('Thanks! Your message was sent successfully (simulated).');
    
    setFormData({ name: '', email: '', comments: '' });

    e.target.reset();
  }

  function handleChange (e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return <main className="contact-me">
    <article>
      <section>
        <h2>{props.title}</h2>

        <span>{props.description}</span>
      </section>

      <hr />

      <section>
        <form onSubmit={sendEmail}>
          <input
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Name"
            required
          />

          <input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="E-mail"
            required
          />

          <textarea
            onChange={handleChange}
            name="comments"
            placeholder="Describe your proposal..."
            required
          ></textarea>

          <button type="Submit">Send</button>
        </form>
      </section>
    </article>
  </main>
}

export default ContactMe
