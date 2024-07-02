import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { addDays, subDays } from "date-fns";

function DateCalculator() {
  const [inputDate, setInputDate] = useState("");
  const [days, setDays] = useState("");
  const [resultDate, setResultDate] = useState("");

  const handleAddDays = () => {
    const newDate = addDays(new Date(inputDate), parseInt(days, 10));
    setResultDate(newDate);
  };

  const handleSubtractDays = () => {
    const newDate = subDays(new Date(inputDate), parseInt(days, 10));
    setResultDate(newDate);
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col md={{ span: 6, offset: 3 }}>
          <h1>Date Calculator</h1>
          <Form>
            <Form.Group controlId="formDate">
              <Form.Label>Enter Date</Form.Label>
              <Form.Control
                type="date"
                value={inputDate}
                size="lg"
                onChange={(e) => setInputDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formDays" className="mt-3">
              <Form.Label>Enter Days</Form.Label>
              <Form.Control
                type="number"
                value={days}
                size="lg"
                onChange={(e) => setDays(e.target.value)}
              />
            </Form.Group>
            <Button
              className="mt-3"
              variant="primary"
              size="lg"
              onClick={handleAddDays}
            >
              <FontAwesomeIcon icon={faPlus} /> Add Days
            </Button>
            <Button
              className="mt-3 ms-2"
              variant="secondary"
              size="lg"
              onClick={handleSubtractDays}
            >
              <FontAwesomeIcon icon={faMinus} /> Subtract Days
            </Button>
          </Form>
          {resultDate && (
            <div className="mt-4">
              <h2>
                <u>Result:</u> <span>{resultDate.toDateString()}</span>
              </h2>
              <h3>
                <u>US Date:</u>
              </h3>
              <h4>Short Format: {resultDate.toLocaleDateString("en-US")}</h4>
              <h4>
                Long Format:{" "}
                {resultDate.toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </h4>
              <h3>
                <u>Vietnamese Date:</u>
              </h3>
              <h4>Short Format: {resultDate.toLocaleDateString("vi-VN")}</h4>
              <h4>
                Long Format:{" "}
                {resultDate.toLocaleDateString("vi-VN", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </h4>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default DateCalculator;
