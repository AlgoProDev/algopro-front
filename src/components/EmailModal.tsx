import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import styles from "@/componentStyles/emailmodal.module.css";
import CloseIcon from "@mui/icons-material/Close";
interface BasicModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
}

export default function BasicModal({ open, onClose, title }: BasicModalProps) {
  const [formData, setFormData] = React.useState({
    email: "",
    name: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ email: "", name: "", message: "" });
    onClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.box}>
          <div className={styles.header}>
            <h3>{title}</h3>
            <CloseIcon onClick={onClose} className={styles.closeIcon} />
          </div>
          <form onSubmit={handleSubmit}>
            <div className={styles.topInput}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formData.email}
                onChange={handleInputChange}
                className={styles.inputText}
              />
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Name"
                value={formData.name}
                onChange={handleInputChange}
                className={styles.inputText}
              />
            </div>
            <TextField
              fullWidth
              id="message"
              name="message"
              label="Message"
              multiline
              rows={6}
              value={formData.message}
              onChange={handleInputChange}
              className={styles.inputText}
            />
            <div className={styles.bottomContainer}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={styles.button}
              >
                Submit
              </Button>
              <p className={styles.otherContact}>
                or Contact us at
                <a href="tel:+38349474749"> +38349474749</a>
              </p>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
