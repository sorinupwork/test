import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

const CreatePlayer = () => {
  const [NUME, setNUME] = useState("");
  const [PRENUME, setPRENUME] = useState("");
  const [DATA_NASTERE, setDATA_NASTERE] = useState("");
  const [ID_ECHIPA, setID_ECHIPA] = useState("");

  const sendDataToAPI = () => {
    axios.post("https://recrutare.compexin.ro/api/web/jucatorisorin", {
      NUME,
      PRENUME,
      DATA_NASTERE,
      ID_ECHIPA,
    });
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
            placeholder="nume"
            name="NUME"
            onChange={(e) => setNUME(e.target.value)}
          />

          <Form.Label>PRENUME</Form.Label>
          <Form.Control
            type="text"
            placeholder="prenume"
            name="PRENUME"
            onChange={(e) => setPRENUME(e.target.value)}
          />

          <Form.Label>DATA NASTERE</Form.Label>
          <Form.Control
            type="text"
            placeholder="data nastere"
            name="DATA_NASTERE"
            onChange={(e) => setDATA_NASTERE(e.target.value)}
          />

          <Form.Label>ID Echipa</Form.Label>
          <Form.Control
            type="number"
            placeholder="ID Echipa"
            name="ID_ECHIPA"
            onChange={(e) => setID_ECHIPA(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={sendDataToAPI}>
          Create
        </Button>
        <a href="/jucatori" style={{ margin: "10%" }}>
          Jucatori
        </a>
      </Form>
    </div>
  );
};

export default CreatePlayer;
