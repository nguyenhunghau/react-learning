import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal";

ModalDemo.propTypes = {

};

function ModalPopup(props) {
    return (
        <Modal show={props.show} onHide={props.onHide} size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Modal body
                <input name="email" value={props.email} onChange={e => props.changeEmail(e.target.value)} />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

function ModalDemo() {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('hunghau');

    const handleClose = () => {
        setShow(false);
        alert(email)
    }
    const handleShow = () => setShow(true);
    const changeEmail = (emailChange) => setEmail(emailChange);

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>
            <ModalPopup show={show} onHide={handleClose} email={email} changeEmail={changeEmail} />
        </div>
    );
}

export default ModalDemo;