import { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
export function ToastMeli({ show, setShow, toastText }) {
    return (
        <ToastContainer className="p-3" position="top-end" style={{ zIndex: 100 }}>
            <Toast show={show} onClose={() => setShow(false)} autohide delay={3000} style={{ backgroundColor: "green", color: "#fff" }}>
                <Toast.Body>{toastText}.</Toast.Body>
            </Toast>
        </ToastContainer>
    );
}
