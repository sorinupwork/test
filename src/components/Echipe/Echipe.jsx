import React, { useEffect, useState } from "react";
import MainNavbar from "../Navbar/Navbar";

import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Pagination from "react-bootstrap/Pagination";
import axios from "axios";

const Echipe = () => {
  const [data, setData] = useState([]);
  const [order, setOrder] = useState("ASC");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);
  const totalPosts = data.length;

  useEffect(() => {
    axios
      .get("https://recrutare.compexin.ro/api/web/echipeoana/active")
      .then((res) => setData(res.data.DATA))
      .catch((err) => console.log(err.message));
  }, []);

  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("ASC");
    }
  };

  let items = [];
  for (
    let number = 1;
    number <= Math.ceil(totalPosts / postsPerPage);
    number++
  ) {
    items.push(
      <Pagination.Item
        onClick={() => setCurrentPage(number)}
        key={number}
        active={number == currentPage}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <>
      <MainNavbar />

      <Form>
        <InputGroup>
          <Form.Control
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Filter by first name"
          />
        </InputGroup>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th
              onClick={() => sorting("DENUMIRE")}
              style={{ cursor: "pointer" }}
            >
              Team
            </th>
            <th>Team ID</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts
            .filter((item) =>
              search.toLowerCase() === ""
                ? item
                : item.DENUMIRE.toLowerCase().includes(search)
            )
            .map((item, index) => (
              <tr key={item.ID_ECHIPA}>
                <td>{index + 1}</td>
                <td>{item.DENUMIRE}</td>
                <td>{item.ID_ECHIPA}</td>
              </tr>
            ))}
        </tbody>
      </Table>
      <Pagination>{items}</Pagination>
    </>
  );
};

export default Echipe;