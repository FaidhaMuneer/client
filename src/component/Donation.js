import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "../component/Donation.css";
import axios from "axios";

const Donation = () => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [country, setCountry] = useState("");
  const [recognition, setRecognition] = useState(false);
  const [anonymous, setAnonymous] = useState("YES");
  const [amount, setAmount] = useState("");
  // const [error, setError] = useState(false);
  const [validated, setValidated] = useState(false);

  const saveUser = async (userDetails) => {
    try {
      const res = await axios.post(
        `http://localhost:5000/api/insert/`,
        { Donation: userDetails },
      );
      if (res.data.created) {
        console.log(res.data.success.message);
      } else {
        console.log(res.data.errors.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // axios
  //   .post("http://localhost:5000/api/insert", {
  //     // formData
  //   })
  //   .then(() => {
  //     alert("Succesfully Submitted");
  //   });

  const handleAnonymous = (anonymous) => {
    setAnonymous(anonymous);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);

    const formData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      mobileNumber: mobileNumber,
      address: address,
      zipcode: zipcode,
      country: country,
      recognition: recognition,
      amount: amount,
      anonymous: anonymous,
    };
    console.log(formData);
    // saveUser(formData);
  };

  return (
    <div className="form mt-3 mb-3">
      <h1>Donate</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="6">
            <Form.Label>Donation Amount</Form.Label>
            <Form.Control
              value={amount}
              pattern="[0-9]{1,15}.[0-9]{2}"
              required
              onChange={(event) => setAmount(event.target.value)}
              type="text"
              placeholder="Rs.1000.00"
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="6">
            <Form.Label>Donar's First name</Form.Label>
            <Form.Control
              required
              type="text"
              onChange={(event) => setFirstname(event.target.value)}
              placeholder="First name"
            />
          </Form.Group>
          <Form.Group as={Col} md="6">
            <Form.Label>Donar's Last name</Form.Label>
            <Form.Control
              required
              type="text"
              onChange={(event) => setLastname(event.target.value)}
              placeholder="Last name"
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="6">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              required
              type="email"
              pattern={"[a-zA-Z0-9\._-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9\.]{0,}"}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="example@example.com"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email adress.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="text"
              pattern={"[0-9]{10}"}
              onChange={(event) => setMobileNumber(event.target.value)}
              placeholder="mobileNumber"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid 10 digit mobile number.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>


        <Row className="mb-3">
          <Form.Group as={Col} md="6">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              onChange={(event) => setAddress(event.target.value)}
              placeholder="Address"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid address.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              type="text"
              onChange={(event) => setZipcode(event.target.value)}
              placeholder="Zip"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} md="6">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              pattern="[a-zA-Z]{2,}"
              onChange={(event) => setCountry(event.target.value)}
              placeholder="Country"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Country.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6">
            <Form.Label>Is this an anonymous gift?</Form.Label>
            <Form.Select
              value={anonymous}
              onChange={(event) => {
                handleAnonymous(event.target.value);
              }}
            >
              <option value="YES">YES</option>
              <option value="NO">NO</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Form.Group className="mt-3 mb-3">
          <Form.Check
            label="Is recognnition requested for this donation"
            onChange={(event) => setRecognition(event.target.checked)}
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default Donation;
