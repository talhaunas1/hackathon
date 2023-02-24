import React, { useState } from "react";
import styled from "styled-components";
import main12 from "../assests/images/main12.jpg";
import axios from "../axios.js";
import { Link } from "react-router-dom";

const AddPost = () => {
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [price, setPrice] = useState(0);
  const [mobile, setMobile] = useState(0);
  const [imgUrl, setImgUrl] = useState("");

  const handleSubmit = async () => {
    console.log("I am running");
    try {
      await axios.post("/posts", {
        city,
        street,
        price,
        mobile,
        imgUrl,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Form>
        <Heading>Add Post</Heading>
        <Line />
        <Inputs>
          <Input
            type={"text"}
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
          />{" "}
          <br />
          <Input
            type={"number"}
            placeholder="Phone"
            onChange={(e) => setMobile(e.target.value)}
          />{" "}
          <br />
          <Input
            type={"text"}
            placeholder="Street"
            onChange={(e) => setStreet(e.target.value)}
          />
          <br />
          <Input
            type={"number"}
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
          />{" "}
          <br />
          <Input
            type={"text"}
            placeholder="imgUrl"
            onChange={(e) => setImgUrl(e.target.value)}
          />
        </Inputs>
        {/* <Button >Submit</Button> */}
        <Link to="/">
          <Button onClick={handleSubmit}>Submit</Button>
        </Link>
      </Form>
    </Container>
  );
};

export default AddPost;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${main12});
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.3);
`;
const Form = styled.div`
  width: 60%;
  height: 85vh;
  padding: 10px;
  background-color: white;
  border-radius: 5px;
`;

const Heading = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: grey;
  text-align: center;
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  border: 1.5px solid grey;
  height: 7vh;
  border-radius: 3px;
  padding-left: 10px;
  margin: 10px;
`;

const Button = styled.div`
  margin-top: 50px;
  background-color: cornflowerblue;
  padding: 10px 15px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  font-weight: bold;
`;

const Line = styled.div`
  border: 0.5px solid cadetblue;
  -webkit-box-shadow: 0px 3px 10px -4px rgba(0, 0, 0, 0.48);
  -moz-box-shadow: 0px 3px 10px -4px rgba(0, 0, 0, 0.48);
  box-shadow: 0px 3px 10px -4px rgba(0, 0, 0, 0.48);
  margin: 10px 0px;
`;
