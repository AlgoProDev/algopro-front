import React from "react";
import styles from "@/componentStyles/newsletter.module.css";

const NewsLetter = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = {
      subject: "Newsletter Signup",
      from_email: data.get("email"),
      message: `${data.get("email")} signed to newsletter`,
    };

    const button = document.getElementById(
      "newsletter-button"
    ) as HTMLButtonElement;
    const input = document.getElementById(
      "newsletter-input"
    ) as HTMLInputElement;

    await fetch("https://oltirocka.pythonanywhere.com/api/send_email/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          response.json().then((json) => console.log(json));
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (button) {
          button.style.transition = "background-color 0.7s";
          button.style.backgroundColor = "green";
          setTimeout(() => {
            button.style.backgroundColor = "";
          }, 1000);
        }
        if (input) {
          input.value = "";
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
      });
  };
  return (
    <section id="newsletter" className={styles.news_container}>
      <h1 className={styles.news_text}>
        Find out about the latest Courses with
        <span>&nbsp;Academy&nbsp;</span>Newsletter
      </h1>
      <form className={styles.news_form} onSubmit={handleSubmit}>
        <input
          placeholder="Email Adress..."
          className={styles.news_input}
          type="email"
          name="email"
          id="newsletter-input"
        />
        <div className={styles.news_submit}>
          <button id="newsletter-button" type="submit">
            Submit
          </button>
        </div>
        <div className={styles.news_decoration} />
      </form>
    </section>
  );
};

export default NewsLetter;
