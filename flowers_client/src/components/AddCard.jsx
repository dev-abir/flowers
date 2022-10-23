import React from "react";
import {
    Card,
    CardBody,
    CardText,
    CardTitle,
    CardSubtitle,
    FormGroup,
    Button,
    Input,
    FormText,
} from "reactstrap";

function AddCard(props) {
    return (
        <Card
            style={{
                minWidth: "18rem",
                flexBasis: "0",
            }}
            color="light"
        >
            <form
                onSubmit={(event) => {
                    event.preventDefault();

                    // FileReader object, to convert image to Base64
                    const reader = new FileReader();
                    reader.onloadend = function () {
                        props.addCardFunc(
                            reader.result,
                            event.target.title.value,
                            event.target.subtitle.value,
                            event.target.description.value
                        );
                    };

                    // convert image to Base64
                    reader.readAsDataURL(event.target.image.files[0]);
                    // event.target.title.value = '';
                    // event.target.subtitle.value = '';
                    // event.target.description.value = '';
                }}
            >
                <FormGroup
                    style={{
                        height: "10rem",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        padding: "1rem",
                    }}
                >
                    <Input id="cardImageFile" name="image" type="file" accept="image/*" required />
                    <FormText>Choose a flower's image</FormText>
                </FormGroup>

                <CardBody>
                    <CardTitle>
                        <Input
                            id="cardTitle"
                            name="title"
                            placeholder="Enter a title"
                            type="text"
                            required
                        />
                    </CardTitle>

                    <CardSubtitle>
                        <Input
                            id="cardSubTitle"
                            name="subtitle"
                            placeholder="Enter a subtitle"
                            type="text"
                            required
                        />
                    </CardSubtitle>

                    <CardText>
                        <Input
                            id="cardDescription"
                            name="description"
                            type="textarea"
                            placeholder="Enter flower's description"
                            required
                        />
                    </CardText>

                    <Button type="submit" color="primary">
                        Add flower
                    </Button>
                </CardBody>
            </form>
        </Card>
    );
}

export default AddCard;
