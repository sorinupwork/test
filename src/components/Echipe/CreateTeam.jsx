import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

const CreateTeam = () => {
  const [DENUMIRE, setDENUMIRE] = useState("");

  const sendDataToAPI = () => {
    axios.post("https://recrutare.compexin.ro/api/web/echipesorin", {
      DENUMIRE,
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
          <Form.Label>DENUMIRE ECHIPA</Form.Label>
          <Form.Control
            type="text"
            placeholder="nume echipa"
            name="denumire"
            onChange={(e) => setDENUMIRE(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={sendDataToAPI}>
          Create
        </Button>
        <a href="/echipe" style={{ margin: "10%" }}>
          Echipe
        </a>
      </Form>
    </div>
  );
};

export default CreateTeam;
