import React, { useState, useRef } from "react";
import Modal from "react-modal";

const contactInfo = [
  {
    icon: "fas fa-user",
    head: "Name",
    sub: "Omotoyosi Kemi-Obabi",
  },
  {
    icon: "fas fa-map-marker-alt",
    head: "Address",
    sub: "Lagos, Nigeria."
  },
  {
    icon: "fas fa-phone",
    head: "Phone",
    sub: "+2349122091729"
  },
  {
    icon: "fab fa-linkedin",
    head: "LinkedIn",
    sub: "Omotoyosi Kemi-Obabi",
  },
  {
    icon: "fas fa-envelope",
    head: "Email",
    sub: "kemiobabi.toyosi@gmail.com",
  },
];

const Contact: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    const endpoint = "send-email";

    const formUrl = `${baseUrl}/${endpoint}`;

    try {
      setLoading(true);
      const response = await fetch(formUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("Name"),
          email: formData.get("Email from"),
          subject: formData.get("Subject"),
          message: formData.get("Message"),
        }),
      });

      if (response.ok) {
        setModalContent("Message sent successfully!");
        formRef.current?.reset();
      } else {
        setModalContent("Failed to send message. Please try again later.");
      }
      setModalIsOpen(true);
    } catch (error) {
      console.error("Error sending message:", error);
      setModalContent("Failed to send message. Please try again later.");
      setModalIsOpen(true);
    } finally {
      setLoading(false);
    }
  };

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   const formData = new FormData(e.currentTarget);
  //   const formUrl = "https://formspree.io/f/mgegnyjw"; // Replace with your Formspree endpoint
  //   try {
  //     const response = await fetch(formUrl, {
  //       method: "POST",
  //       body: formData,
  //       headers: {
  //         Accept: "application/json",
  //       },
  //     });

  //     if (response.ok) {
  //       setModalContent("Message sent successfully!");
  //       formRef.current?.reset();
  //     } else {
  //       setModalContent("Failed to send message. Please try again later.");
  //     }
  //     setModalIsOpen(true);
  //   } catch (error) {
  //     console.error("Error sending message:", error);
  //     setModalContent("Failed to send message. Please try again later.");
  //     setModalIsOpen(true);
  //   }
  // };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section className="contact" id="contact">
      {loading && (
        <div className="spinner-overlay">
          <div className="spinner"></div>
        </div>
      )}
      <div className="max-width">
        <h2 className="title">Contact me</h2>
        <div className="contact-content">
          <div className="column left">
            <div className="text">Get in Touch</div>
            <p>
              Contact me to find out how I might contribute and add value to
              your next project.
            </p>
            <div className="icons">
              {contactInfo.map((contact, index) => (
                <div className="row" key={index}>
                  <div className="icon">
                    <i className={contact.icon}></i>
                  </div>
                  <div className="info">
                    <div className="head">{contact.head}</div>
                    <div className="sub-title">{contact.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="column right">
            <div className="text">Message me</div>
            <form onSubmit={handleSubmit} ref={formRef}>
              <div className="fields">
                <div className="field name">
                  <input type="text" placeholder="Name" required name="Name" />
                </div>
                <div className="field email">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="Email from"
                  />
                </div>
              </div>
              <div className="field">
                <input
                  type="text"
                  placeholder="Subject"
                  required
                  name="Subject"
                />
              </div>
              <div className="field textarea">
                <textarea
                  cols={30}
                  rows={10}
                  placeholder="Brief message for me?"
                  required
                  name="Message"
                ></textarea>
              </div>
              <div className="button-area">
                <button type="submit">Send message</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            padding: "2rem",
            textAlign: "center",
          },
        }}
      >
        <h2>{modalContent}</h2>
        <button
          onClick={closeModal}
          style={{
            background: "crimson",
            color: "white",
            fontWeight: "bolder",
            border: "none",
            borderRadius: "0.5rem",
            marginTop: "1rem",
            padding: "0.5rem 1rem",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </Modal>
    </section>
  );
};

export default Contact;
