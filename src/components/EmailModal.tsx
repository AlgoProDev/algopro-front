import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import styles from "@/componentStyles/emailmodal.module.css";
import CloseIcon from "@mui/icons-material/Close";
import EmailIcon from "@mui/icons-material/Email";
interface BasicModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
}

export default function BasicModal({ open, onClose, title }: BasicModalProps) {
  const [feedbackMessage, setFeedbackMessage] = React.useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const embed = {
      title: `Contacted by ${data.get("name")} ${data.get("lastName")}`,
      fields: [
        { name: "Email", value: `${data.get("email")}`, inline: true },
        { name: "Phone", value: `${data.get("phone")}`, inline: true },
        { name: "Message", value: `${data.get("message")}` },
      ],
      color: 3447003,
    };

    fetch(
      "https://discord.com/api/webhooks/1169022004834349167/YIlBbCS-WdXyuqdI5lDc6hCNfh7izJvFxdxy60NMoQ8EsPs_3FeoLfO9UoPRUhr2JMBu",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ embeds: [embed] }),
      },
    )
      .then((response) => {
        if (!response.ok) {
          response.json().then((json) => console.log(json));
          throw new Error("Network response was not ok");
        }
        return response;
      })
      .then((data) => {
        console.log(data);
        setFeedbackMessage("Email sent successfully");
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
        setFeedbackMessage("Error with email");
      });
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box className={styles.box}>
          <div className={styles.header}>
            <h3>
              <EmailIcon />
              {title}
            </h3>
            <CloseIcon onClick={onClose} className={styles.closeIcon} />
          </div>
          <p style={{ color: "grey", marginTop: "10px" }}>Send us a message 😄</p>
          <form onSubmit={handleSubmit} className={styles.form}>
            <TextField
              label="Name"
              name="name"
              variant="outlined"
              className={styles.text_field}
              fullWidth
              margin="normal"
              color="secondary"
            />
            <TextField
              label="Last Name"
              name="lastName"
              variant="outlined"
              className={styles.text_field}
              fullWidth
              margin="normal"
              color="secondary"
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              className={styles.text_field}
              fullWidth
              margin="normal"
              color="secondary"
            />
            <TextField
              label="Phone Number"
              name="phone"
              type="tel"
              variant="outlined"
              className={styles.text_field}
              fullWidth
              margin="normal"
              color="secondary"
            />
            <TextField
              label="Message"
              name="message"
              multiline
              rows={2}
              variant="outlined"
              className={styles.message_field}
              fullWidth
              margin="normal"
              color="secondary"
            />{" "}
            <div
              className={
                feedbackMessage.includes("Error") ? styles.error_message : styles.success_message
              }>
              {feedbackMessage}
            </div>
            <div className={styles.button_container}>
              <Button
                variant="outlined"
                onClick={onClose}
                className={styles.button}
                style={{ fontWeight: "700" }}>
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                className={styles.button}
                style={{ fontWeight: "700" }}>
                Submit
              </Button>
            </div>
            <div className={styles.phone}>
              <p>or</p>
              <p>
                Contact us at <a href="tel:+38349474749">049474749</a>
              </p>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
