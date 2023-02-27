import React, { useState }  from "react";
import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import axios from '../axios';
import main10 from "../assests/images/main10.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignIn = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = async () => {
    try {
      console.log('running');
      const response = await axios.post('/auth/signin', { email, password });
      localStorage.setItem('token', response.data.token)
      navigate('/')

    } catch (error) {
      console.log(error);
    }
  }


  return (
    <Container>
      <Form>
        <Heading>SignIn</Heading>
        <Line />
        {/* <Welcome>Welcome to RealEstate.com</Welcome> */}
        <Input placeholder="Email "  onChange={(e)=>setEmail(e.target.value)} /> <br />
        <Input placeholder="Password"  type='password' onChange={(e)=>setPassword(e.target.value)} />
        <Info>
        <Keep> <input type={"checkbox"}/> Keep Me signed In</Keep>
        <Forgot>Forgot Password?</Forgot>
        </Info>
        <Button onClick={submitHandler}>Sign In</Button>
        <Or>
            <Text>Or sign in with</Text>
            <Logos>
                <FacebookIcon fontSize="large"/>
                <GoogleIcon fontSize="large"/>
            </Logos>
        </Or>
        <ExtraInfo>
            <Dont>Don't have an account?</Dont>
            <Link to="/signup" style={{color: "inherit"}}>
            <Create>Create an account</Create>
            </Link>
        </ExtraInfo>
      </Form>
    </Container>
  );
};

export default SignIn;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${main10});
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: inset 0 0 0 1000px rgba(0,0,0,.3);
`;

const Form = styled.div`
  border: 1px solid gray;
  border-radius: 4px;
  width: 50vw;
  height: 63vh;
  padding: 20px;
  background-color: lightblue;
  @media (max-width: 850px) {
width:85vw;
  }
`;
const Heading = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: grey;
  text-align:center ;
`;

const Line = styled.div`
  border: 1px solid blue;
  -webkit-box-shadow: 0px 3px 10px -4px rgba(0, 0, 0, 0.48);
  -moz-box-shadow: 0px 3px 10px -4px rgba(0, 0, 0, 0.48);
  box-shadow: 0px 3px 10px -4px rgba(0, 0, 0, 0.48);
  margin: 10px 0px;
`;
const Welcome = styled.div`
    font-size: 18px;
    color: gray;
`;
const Input = styled.input`
    width: 100%;
    height: 7vh;
    margin: 5px 0px;
    padding: 2px 10px;
    color:grey;
    border: 1px solid grey;
`;

const Info = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px;
`;
const Keep = styled.div`
    font-size: 14px;
    color: grey;
`;
const Forgot = styled.div`
    font-size: 14px;
    color: black;
    font-weight: bold;
    cursor: pointer;
`;

const Button = styled.div`
    padding: 7px 15px;
    color: white;
    background-color: blueviolet;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    font-weight: bold;
    margin: 10px 0px;
    cursor: pointer;
`;


const Or = styled.div` 
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`;
const Text = styled.div`
    color: gray;
`;
const Logos = styled.div`
    display: flex;
    gap: 5px;
    color: black;
    cursor: pointer;
`;
const ExtraInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    margin-top: 5vh;
`;

const Dont = styled.div``;
const Create = styled.div`
    color: black;
`;