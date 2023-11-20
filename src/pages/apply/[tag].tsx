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
import styles from "./[tag].module.css";
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
    const form = event.currentTarget;
    const data = new FormData(form);
    const embed = {
      title: `${courseID} Application - ${data.get("name")} ${data.get("lastName")}`,
      fields: [
        { name: "Email", value: `${data.get("email")}`, inline: true },
        { name: "Phone", value: `${data.get("phone")}`, inline: true },
        { name: "Work", value: `${data.get("work")}`, inline: true },
        { name: "Student", value: `${data.get("student")}`, inline: true },
        { name: "Contact", value: `${data.get("contact")}`, inline: true },
        { name: "Location", value: `${data.get("location")}`, inline: true },
        { name: "Message", value: `${data.get("message")}` },
      ],
      color: 3447003,
    };

    const fetchPromise = fetch(
      "https://discord.com/api/webhooks/1169022004834349167/YIlBbCS-WdXyuqdI5lDc6hCNfh7izJvFxdxy60NMoQ8EsPs_3FeoLfO9UoPRUhr2JMBu",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ embeds: [embed] }),
      },
    );
    notify(fetchPromise, "Email sent successfully", "Error with email");
    try {
      const response = await fetchPromise;
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      form.reset();
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
                required
              />
              <TextField
                label="Mbiemri"
                variant="outlined"
                name="lastName"
                margin="normal"
                fullWidth
                color="secondary"
                required
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
                required
              />
              <TextField
                label="Numri i telefonit"
                variant="outlined"
                margin="normal"
                name="phone"
                fullWidth
                type="tel"
                color="secondary"
                required
              />
            </div>
            <div>
              <FormControl component="fieldset" margin="normal" fullWidth color="secondary">
                <FormLabel component="legend" color="secondary">
                  Punoni aktualisht?
                </FormLabel>
                <RadioGroup row name="work">
                  <FormControlLabel
                    value="Po"
                    color="secondary"
                    control={<Radio color="secondary" />}
                    label="Po"
                  />
                  <FormControlLabel
                    value="Jo"
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
                    value="Po"
                    control={<Radio color="secondary" />}
                    label="Po"
                  />
                  <FormControlLabel
                    color="secondary"
                    value="Jo"
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
                    value="Viber"
                    control={<Radio color="secondary" />}
                    label="Viber"
                  />
                  <FormControlLabel
                    color="secondary"
                    value="Whatsapp"
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
                    value="Kosova"
                    control={<Radio color="secondary" />}
                    label="Kosovë"
                  />
                  <FormControlLabel
                    color="secondary"
                    value="Shqiperia"
                    control={<Radio color="secondary" />}
                    label="Shqipëri"
                  />
                  <FormControlLabel
                    color="secondary"
                    value="Macedonia"
                    control={<Radio color="secondary" />}
                    label="Macedoni"
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
              required
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
