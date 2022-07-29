import React, { useEffect, useState } from "react";
import FlowerCard from "./FlowerCard";
import AddCard from "./AddCard";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ErrorModal = (props) => {
    return (
        <Modal isOpen={props.showErrorModal} toggle={props.toggleModalFunc}>
            <ModalHeader toggle={props.toggleModalFunc}>Error</ModalHeader>
            <ModalBody>
                {Object.entries(props.errorModalJSON).map((entry, idx) => {
                    return (
                        <p className="text-danger" key={idx}>
                            {entry[0]}: {entry[1]}
                        </p>
                    );
                })}
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={props.toggleModalFunc}>
                    Ok
                </Button>
            </ModalFooter>
        </Modal>
    );
};

function Gallery() {
    const [flowers, setFlowers] = useState([]);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [errorModalJSON, setErrorModalJSON] = useState("");

    useEffect(() => {
        fetch("http://127.0.0.1:8000/flowers/")
            .then((res) => res.json())
            .then((data) => setFlowers(data));
    }, []);

    // scroll to bottom, whenever flowers list is changed or created
    useEffect(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }, [flowers]);

    const addCard = (imageBase64, cardTitle, cardSubtitle, cardDescription) => {
        fetch("http://127.0.0.1:8000/flowers/", {
            body: JSON.stringify({
                image: imageBase64,
                title: cardTitle,
                subtitle: cardSubtitle,
                description: cardDescription,
            }),
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(async (res) => {
                if (res.status === 201) {
                    setFlowers([...flowers, await res.json()]);
                } else {
                    setErrorModalJSON(await res.json());
                    setShowErrorModal(true);
                }
            })
            .catch((err) => {
                setErrorModalJSON({ Error: err.message + ", server may be offline." });
                setShowErrorModal(true);
            });
    };

    return (
        <div
            style={{
                display: "flex",
                margin: "2rem",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "2rem",
            }}
        >
            {flowers.map((flower, idx) => (
                <FlowerCard
                    key={idx}
                    picURL={flower.image}
                    title={flower.title}
                    subtitle={flower.subtitle}
                    description={flower.description}
                />
            ))}

            <AddCard addCardFunc={addCard} />

            <ErrorModal
                showErrorModal={showErrorModal}
                errorModalJSON={errorModalJSON}
                toggleModalFunc={() => setShowErrorModal(!showErrorModal)}
            />
        </div>
    );
}

export default Gallery;
