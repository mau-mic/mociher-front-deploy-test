"use client";

import React, { useState } from "react";
import { APIProvider, Map , AdvancedMarker} from "@vis.gl/react-google-maps";
import "./ContactForm.css";
import ModalInfo from "./ModalInfo";

const ContactForm = () => {
  const position = { lat: -12.147750, lng: -76.989770 };

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    company: "",
    message: "",
    phone: ""
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const isValidPhoneNumber = (phone) => {
    // Check if phone contains exactly 9 digits
    if (/^\d{9}$/.test(phone)) {
      return true;
    }
    return false;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.firstName || !formData.lastName || !formData.phone || !formData.message) {
      setModalMessage("Por favor llene todos los campos");
      setIsSuccess(false);
      setShowModal(true);
      return;
    }

    if (!isValidPhoneNumber(formData.phone)) {
      setModalMessage("Formato de número celular incorrecto. Debe tener solo números y 9 dígitos");
      setIsSuccess(false);
      setShowModal(true);
      return;
    }

    try {
      const bodyData = JSON.stringify({
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        company: formData.company,
        message: formData.message,
        phone: formData.phone
      });

      const response = await fetch(process.env.REACT_APP_EMAIL_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: bodyData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Error: ${response.status} ${errorText}`);
        setModalMessage("Error en el envío del correo. Inténtelo más tarde");
        setIsSuccess(false);
        setShowModal(true);
      }

      const contentType = response.headers.get("content-type");
      let data;
      if (contentType && contentType.indexOf("application/json") !== -1) {
        data = await response.json();
      } else {
        data = await response.text();
      }
      console.log(response.status, data);

      setModalMessage("Su solicitud fue generada y será evaluada por nosotros. Gracias!");
      setIsSuccess(true);
      setShowModal(true);

      setFormData({
        email: "",
        firstName: "",
        lastName: "",
        company: "",
        message: "",
        phone: ""
      });

    } catch (error) {
      console.error("Error submitting form:", error);
      setModalMessage("Ocurrió un error inesperado. Inténtelo más tarde ");
      setShowModal(true);
    }
  };

  return (
    <section id="contact-section">
      <h1 className="contact-form-heading">CONTÁCTANOS AHORA</h1>
      <h4 className="contact-form-heading">
        Póngase en contacto con nosotros para mayor información.
      </h4>
      <div id="contact-section-content">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label>Nombres</label>
              <input
                type="text"
                name="firstName"
                placeholder="Ingrese sus nombres"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Apellidos</label>
              <input
                type="text"
                name="lastName"
                placeholder="Ingrese sus apellidos"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Empresa (opcional)</label>
              <input
                type="text"
                name="company"
                placeholder="Ingrese la razón social de su empresa"
                value={formData.company}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Ingrese su email de contacto"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Celular</label>
              <input
                type="tel"
                name="phone"
                placeholder="Ingrese su número de celular"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Mensaje</label>
              <textarea
                name="message"
                placeholder="Escriba su consulta"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <button type="submit">Enviar</button>
        </form>
        <div id="contact-map">
          <APIProvider apiKey={process.env.REACT_APP_GCP_MAPS_API_KEY}>
            <div style={{width: "inherit", height: "inherit"}}>
              <Map defaultZoom={17}
                defaultCenter={position} 
                mapId={process.env.REACT_APP_GCP_MAP_ID} 
                reuseMaps={true} 
                streetViewControl={false} 
                mapTypeControl={false}
                fullscreenControl={false}>
                <AdvancedMarker position={position}>
                </AdvancedMarker>
              </Map>
            </div>
          </APIProvider>
        </div>
      </div>
      <ModalInfo message={modalMessage} showModal={showModal} setShowModal={setShowModal} isSuccess={isSuccess} />
    </section>
  );
};

export default ContactForm;