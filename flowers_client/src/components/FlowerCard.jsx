import React from "react";
import { Card, CardBody, CardText, CardTitle, CardSubtitle } from "reactstrap";

function FlowerCard(props) {
    return (
        <Card
            style={{
                minWidth: "18rem",
                flexBasis: "0",
            }}
            color="light"
        >
            <img style={{ padding: "1rem", height: "18rem", objectFit: "cover" }} alt={props.title} src={props.picURL} />
            <CardBody>
                <CardTitle tag="h5">{props.title}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {props.subtitle}
                </CardSubtitle>
                <CardText>{props.description}</CardText>
            </CardBody>
        </Card>
    );
}

export default FlowerCard;
