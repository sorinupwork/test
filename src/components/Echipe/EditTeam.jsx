import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const EditTeam = () => {
  const [DENUMIRE, setDENUMIRE] = useState("");
  const [ID_ECHIPA, setID_ECHIPA] = useState(null);

  useEffect(() => {
    setDENUMIRE(localStorage.getItem("DENUMIRE"));
    setID_ECHIPA(localStorage.getItem("ID"));
  }, []);

  // const navigate = useNavigate();

  const sendDataToAPI = (e) => {
    e.preventDefault();
    axios.put("https://recrutare.compexin.ro/api/web/echipesorin", {
      DENUMIRE,
      ID_ECHIPA,
    });
    setDENUMIRE("");
    setID_ECHIPA(null);
    // navigate("/echipe");
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
            value={DENUMIRE || ""}
            placeholder="nume echipa"
            name="DENUMIRE"
            onChange={(e) => setDENUMIRE(e.target.value)}
          />
          <Form.Label>ID ECHIPA</Form.Label>
          <Form.Control
            type="number"
            value={ID_ECHIPA || ""}
            placeholder="ID echipa"
            name="ID_ECHIPA"
            onChange={(e) => setID_ECHIPA(e.target.value)}
            disabled
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={sendDataToAPI}>
          EDIT
        </Button>
        <a href="/echipe" style={{ margin: "10%" }}>
          Echipe
        </a>
      </Form>
    </div>
  );
};

export default EditTeam;
