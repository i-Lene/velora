"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, onClose }) {
  const [modalContainer, setModalContainer] = useState(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    let container = document.getElementById("modal");
    if (!container) {
      container = document.createElement("div");
      container.id = "modal";
      document.body.appendChild(container);
    }
    setModalContainer(container);
  }, []);

  useEffect(() => {
    const modal = dialogRef.current;
    if (modal) {
      modal.showModal();
    }
    return () => {
      if (modal) modal.close();
    };
  }, [modalContainer]);

  if (!modalContainer) return null;

  return createPortal(
    <dialog className="modal" ref={dialogRef} onCancel={onClose}>
      {children}
    </dialog>,
    modalContainer
  );
}
