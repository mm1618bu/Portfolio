// src/CashRegister.js
import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const denominationsList = [
  'hundred',
  'fifty',
  'twenty',
  'ten',
  'five',
  'one',
  'quarter',
  'dime',
  'nickel',
  'penny',
];

const CashRegister = () => {
  const [denominations, setDenominations] = useState({});
  const [expectedAmount, setExpectedAmount] = useState('');
  const [countedAmount, setCountedAmount] = useState('');

  const handleCount = () => {
    const totalAmount = Object.values(denominations).reduce((acc, value) => acc + value, 0);
    const isAmountCorrect = totalAmount === parseFloat(expectedAmount);
    setCountedAmount(isAmountCorrect ? 'Correct!' : 'Incorrect!');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDenominations((prevDenominations) => ({
      ...prevDenominations,
      [name]: parseFloat(value) || 0,
    }));
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1 className="text-primary mb-4">Cash Register Counter</h1>
          <Form>
            <Form.Group as={Row}>
              <Form.Label column xs={12} md={4}>
                Expected Amount
              </Form.Label>
              <Col xs={12} md={8}>
                <Form.Control
                  type="number"
                  placeholder="Enter expected amount"
                  value={expectedAmount}
                  onChange={(e) => setExpectedAmount(e.target.value)}
                  size="lg"
                />
              </Col>
            </Form.Group>
            {denominationsList.map((denomination) => (
              <Form.Group as={Row} key={denomination}>
                <Form.Label column xs={12} md={4}>
                  {denomination}
                </Form.Label>
                <Col xs={12} md={8}>
                  <Form.Control
                    type="number"
                    name={denomination}
                    value={denominations[denomination] || 0}
                    onChange={handleChange}
                    size="lg"
                  />
                </Col>
              </Form.Group>
            ))}
            <Button variant="primary" size="lg" onClick={handleCount} className="mt-3">
              Count
            </Button>
            <p className="font-weight-bold mt-3 text-success">{countedAmount}</p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CashRegister;
