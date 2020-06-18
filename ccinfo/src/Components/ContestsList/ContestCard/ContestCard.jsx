import React from "react";
import style from "./style.module.css";
import { Card, Accordion } from "react-bootstrap";

const ContestCard = ({ ContestData }) => {
  return (
    <div>
      <Card className="m-3 p-2" bg="dark" text="dark">
        <span className={style.head}>
          <a
            href={ContestData.link}
            className="text-info"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>
              {ContestData.name}
              <svg
                className="bi bi-box-arrow-up-right ml-3"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 13A1.5 1.5 0 0 0 3 14.5h8a1.5 1.5 0 0 0 1.5-1.5V9a.5.5 0 0 0-1 0v4a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 0 0-1H3A1.5 1.5 0 0 0 1.5 5v8zm7-11a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.5H9a.5.5 0 0 1-.5-.5z"
                />
                <path
                  fillRule="evenodd"
                  d="M14.354 1.646a.5.5 0 0 1 0 .708l-8 8a.5.5 0 0 1-.708-.708l8-8a.5.5 0 0 1 .708 0z"
                />
              </svg>
            </h4>
          </a>
          <blockquote className="blockquote-footer text-info">
            <span className="mb-0">{ContestData.code}</span>
          </blockquote>
        </span>
        <Accordion>
          <Card className="bg-dark text-info">
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Start Date
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>{ContestData.startDate}</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="bg-dark text-info">
            <Accordion.Toggle as={Card.Header} eventKey="1">
              End date
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>{ContestData.endDate}</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Card>
    </div>
  );
};

export default ContestCard;
