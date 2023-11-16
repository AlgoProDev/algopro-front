import React, { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@mui/material/Button";
import styles from "./index.module.css";
import { useRouter } from "next/router";
import Loader from "@/components/LoadingIcon";

export default function Trajnimet() {
  const [loading, setLoading] = useState(true);
  const [courseID, setCourseID] = useState<any>();
  const router = useRouter();

  const notify = (promise: Promise<any>, successText: string, errorText: string) => {
    toast.promise(
      promise,
      {
        pending: "Sending...",
        success: successText,
        error: errorText,
      },
      {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        theme: "light",
      },
    );
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = {
      subject: `${courseID} Application - ${data.get("name")} ${data.get("lastName")}`,
      from_email: data.get("email"),
      message: `Contacted by ${data.get("name")} ${data.get("lastName")}
                Contact:
                - Email: ${data.get("email")} 
                - Phone: ${data.get("phone")}
                Answers:
                - Work: ${data.get("work")}
                - Student: ${data.get("student")}
                - Contact: ${data.get("contact")}
                - Location: ${data.get("location")}
                Message:
                - ${data.get("message")}`,
    };

    const fetchPromise = fetch("https://oltirocka.pythonanywhere.com/api/send_email/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    notify(fetchPromise, "Email sent successfully", "Error with email");
    try {
      const response = await fetchPromise;
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error("Error sending email", error);
    }
  };

  useEffect(() => {
    if (router.isReady) {
      setCourseID(FormatText(router.query.tag));
      setLoading(false);
    }
  });

  return (
    <>
      {loading ? (
        <div
          style={{
            width: "100%",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Loader lottiePath="../loading.json" width={300} height={300} />
        </div>
      ) : (
        <div className={styles.main_container}>
          <Navigation style={false} show={false} />
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <ToastContainer />

            <h2>Form e aplikimit për {courseID}</h2>
            <div>
              <TextField
                name="name"
                label="Emri"
                variant="outlined"
                margin="normal"
                fullWidth
                color="secondary"
              />
              <TextField
                label="Mbiemri"
                variant="outlined"
                name="lastName"
                margin="normal"
                fullWidth
                color="secondary"
              />
            </div>
            <div>
              <TextField
                label="Email"
                variant="outlined"
                margin="normal"
                name="email"
                fullWidth
                type="email"
                color="secondary"
              />
              <TextField
                label="Numri i telefonit"
                variant="outlined"
                margin="normal"
                name="phone"
                fullWidth
                type="tel"
                color="secondary"
              />
            </div>
            <div>
              <FormControl component="fieldset" margin="normal" fullWidth color="secondary">
                <FormLabel component="legend" color="secondary">
                  Punoni aktualisht?
                </FormLabel>
                <RadioGroup row name="work">
                  <FormControlLabel
                    value="po"
                    color="secondary"
                    control={<Radio color="secondary" />}
                    label="Po"
                  />
                  <FormControlLabel
                    value="jo"
                    color="secondary"
                    control={<Radio color="secondary" />}
                    label="Jo"
                  />
                </RadioGroup>
              </FormControl>
              <FormControl component="fieldset" color="secondary" margin="normal" fullWidth>
                <FormLabel color="secondary" component="legend">
                  Student?
                </FormLabel>
                <RadioGroup row name="student">
                  <FormControlLabel
                    color="secondary"
                    value="po"
                    control={<Radio color="secondary" />}
                    label="Po"
                  />
                  <FormControlLabel
                    color="secondary"
                    value="jo"
                    control={<Radio color="secondary" />}
                    label="Jo"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormControl color="secondary" fullWidth margin="normal">
                <FormLabel>Lloji i kontaktit të preferuar</FormLabel>
                <RadioGroup row name="contact">
                  <FormControlLabel
                    color="secondary"
                    value="viber"
                    control={<Radio color="secondary" />}
                    label="Viber"
                  />
                  <FormControlLabel
                    color="secondary"
                    value="whatsapp"
                    control={<Radio color="secondary" />}
                    label="Whatsapp"
                  />
                </RadioGroup>
              </FormControl>

              <FormControl color="secondary" fullWidth margin="normal">
                <FormLabel>Vendi juaj</FormLabel>
                <RadioGroup color="secondary" row name="location">
                  <FormControlLabel
                    color="secondary"
                    value="kosova"
                    control={<Radio color="secondary" />}
                    label="Kosova"
                  />
                  <FormControlLabel
                    color="secondary"
                    value="shqiperia"
                    control={<Radio color="secondary" />}
                    label="Shqipëria"
                  />
                  <FormControlLabel
                    color="secondary"
                    value="macedonia"
                    control={<Radio color="secondary" />}
                    label="Macedonia"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <TextField
              label="Arsyja e aplikimit tuaj"
              variant="outlined"
              margin="normal"
              rows={4}
              fullWidth
              multiline
              name="message"
              color="secondary"
            />
            <Button type="submit" variant="contained" color="secondary">
              Apliko
            </Button>
          </form>
          <Footer />
        </div>
      )}
    </>
  );
}

function FormatText(text: any) {
  return text
    .split("-")
    .map((word: String) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
