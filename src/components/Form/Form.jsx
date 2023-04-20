import "./index.scss";

const Form = () => {
  return (
    <div className="contact__form">
      <form>
        <div className="contact__form-field">
          <input type="text" name="name" id="name" placeholder=" " required />
          <label htmlFor="name">Name</label>
        </div>
        <div className="contact__form-field">
          <input
            type="email"
            name="email"
            id="email"
            placeholder=" "
            required
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="contact__form-field">
          <textarea id="message" name="message" rows="7" required></textarea>
          <label htmlFor="message">Message</label>
        </div>

        <button type="submit" id="submit">
          Send message
        </button>
      </form>
    </div>
  );
};

export default Form;
