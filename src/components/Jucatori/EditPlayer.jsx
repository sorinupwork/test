import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

const EditPlayer = () => {
  const [NUME, setNUME] = useState("");
  const [PRENUME, setPRENUME] = useState("");
  const [DATA_NASTERE, setDATA_NASTERE] = useState("");
  const [ID_ECHIPA, setID_ECHIPA] = useState("");
  const [ID_JUCATOR, setID_JUCATOR] = useState("");

  useEffect(() => {
    setNUME(localStorage.getItem("NUME"));
    setPRENUME(localStorage.getItem("PRENUME"));
    setDATA_NASTERE(localStorage.getItem("DATA_NASTERE"));
    setID_ECHIPA(localStorage.getItem("ID_ECHIPA"));
    setID_JUCATOR(localStorage.getItem("ID_JUCATOR"));
  }, []);

  const sendDataToAPI = (e) => {
    e.preventDefault();
    axios.put("https://recrutare.compexin.ro/api/web/jucatorisorin", {
      NUME,
      PRENUME,
      DATA_NASTERE,
      ID_ECHIPA,
      ID_JUCATOR,
    });
    setNUME("");
    setPRENUME("");
    setDATA_NASTERE("");
    setID_ECHIPA("");
    setID_JUCATOR("");
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>NUME</Form.Label>
          <Form.Control
            type="text"
            value={NUME}
            placeholder="nume"
            name="NUME"
            onChange={(e) => setNUME(e.target.value)}
          />

          <Form.Label>PRENUME</Form.Label>
          <Form.Control
            type="text"
            value={PRENUME}
            placeholder="prenume"
            name="PRENUME"
            onChange={(e) => setPRENUME(e.target.value)}
          />

          <Form.Label>DATA NASTERE</Form.Label>
          <Form.Control
            type="text"
            value={DATA_NASTERE}
            placeholder="data nastere"
            name="DATA_NASTERE"
            onChange={(e) => setDATA_NASTERE(e.target.value)}
          />

          <Form.Label>ID Echipa</Form.Label>
          <Form.Control
            type="number"
            value={ID_ECHIPA}
            placeholder="ID Echipa"
            name="ID_ECHIPA"
            onChange={(e) => setID_ECHIPA(e.target.value)}
            disabled
          />

          <Form.Label>ID Jucator</Form.Label>
          <Form.Control
            type="number"
            value={ID_JUCATOR}
            placeholder="ID Jucator"
            name="ID_JUCATOR"
            onChange={(e) => setID_JUCATOR(e.target.value)}
            disabled
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={sendDataToAPI}>
          Update
        </Button>
        <a href="/jucatori" style={{ margin: "10%" }}>
          Jucatori
        </a>
      </Form>
    </div>
  );
};

export default EditPlayer;
