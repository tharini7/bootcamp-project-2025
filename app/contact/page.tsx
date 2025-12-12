"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "contact_service",
        "contact_form",   
        form.current!,
        "rqr6eMG2g_762jUGK"
      )
      .then(() => {
        alert("Email sent!");
        })
      .catch(() => {
          alert("Error sending email");
          }
        );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="hidden" name="time" value={new Date().toLocaleString()} />

      <label>Name</label>
      <input type="text" name="name" required />

      <label>Email</label>
      <input type="email" name="email" required />

      <label>Message</label>
      <textarea name="message" required />

      <input type="submit" value="Send" />
    </form>
  );
}
