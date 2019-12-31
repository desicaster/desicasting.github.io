import React from "react";
import IPCardNav from "./IPCardNav";
import IPCardContent from "./IPCardContent";
import { Card, CardBody, Col } from "reactstrap";
import CardFoot from "./CardFoot";
import { Link } from "react-router-dom";

const IPCard = ({
  id,
  favorited,
  first_name,
  last_name,
  email,
  ethnicity,
  build,
  languages,
  birthday,
  minimum_age,
  maximum_age,
  photos,
  rating,
  projects,
  workflow
}) => {
  return (
    <Col xl="4" lg="6" md="6">
      <Link
        className="IPCardLink"
        to={{
          pathname: "/ip/" + id,
          state: {
            workflow: workflow
          }
        }}
      >
        <Card className="shadow-sm text-left mb-4 IPCard border">
          <IPCardNav
            name={first_name + " " + last_name}
            birthday={birthday}
            email={email}
            id={id}
            rating={rating}
            favorited={favorited}
          />
          <CardBody>
            <IPCardContent
              photos={photos}
              projects={projects}
              age_range={minimum_age + " - " + maximum_age}
              ethnicity={ethnicity}
              build={build}
            />

            <CardFoot languages={languages} />
            {/*
            {status && workflow && (
              <CardStatus
                progress={parseInt((100 * (status - 1)) / workflow.length)}
                todo={workflow.length === 0 ? "" : workflow[status - 1].label}
              />
            )}
            */}
          </CardBody>
        </Card>
      </Link>
    </Col>
  );
};

export default IPCard;
