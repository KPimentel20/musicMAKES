import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { Button, Form, Header, Grid, Segment } from 'semantic-ui-react'
import userService from "../../utils/userService";
import { useNavigate } from "react-router-dom";

export default function SignUpPage(props) {

  const navigate = useNavigate()

  const [error, setError] = useState('')
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    passwordConf: ''
  })

  // const [selectedFile, setSelectedFile] = useState('');

  async function handleSubmit(e){
    e.preventDefault()

    // Create form Data, because we're sending a multipart/formData request, 
    // because we are sending over multiple requests, because we're uploading a photo!
    const formData = new FormData(); // new FormData is from the browser
    // formData.append('song', selectedFile);

    // wrote way of appending each key value pair to form Data
    // formData.append('username', state.username);
    // formData.append('email', state.email);

    for (let fieldName in state){
      formData.append(fieldName, state[fieldName])
    }

    // console.log(formData, " <- formData") // <- this doesn't allow you to look at the formdData object
    // console.log(formData.forEach((item) => console.log(item))); // <- to look at the keys, you must forEach over it

    try {

      await userService.signup(formData) // <- we must pass the argument as formData when we have a
      // photo
      props.handleSignUpOrLogin(); // <- this will decode the token from local storage
      // that we just recieved as a respone to our userService.signup fetch call,
      // and decode and update the state in our App component
      navigate('/')

    } catch(err){
      console.log(err.message);
      setError(err.message)
    }

  }

  function handleChange(e){
    setState({
      ...state, 
      [e.target.name]: e.target.value
    })
  }


  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header textAlign="center">Sign Up</Header>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              name="username"
              placeholder="username"
              value={state.username}
              onChange={handleChange}
              required
            />
            <Form.Input
              type="email"
              name="email"
              placeholder="email"
              value={state.email}
              onChange={handleChange}
              required
            />
            <Form.Input
              name="password"
              type="password"
              placeholder="password"
              value={state.password}
              onChange={handleChange}
              required
            />
            <Form.Input
              name="passwordConf"
              type="password"
              placeholder="Confirm Password"
              value={state.passwordConf}
              onChange={handleChange}
              required
            />
            <Button type="submit" className="btn">Signup</Button>
          </Segment>
          {error ? <ErrorMessage error={error} /> : null}
        </Form>
      </Grid.Column>
    </Grid>
  );
}

