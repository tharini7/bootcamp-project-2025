export const metadata = { title: "Tharini — Contact" };
export default function Blog() {
  return (
    <div>
            <main>
            <h1 className="contact-title">Contact Me</h1>
            <form id="contact-form"></form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" />

            <label htmlFor="message">Message</label>
            <input type="message" id="message" />

            <input type="submit" />
            </main>
          

    </div>
  );
}