import { useEffect, useState } from "react";
import "./Modal.css";
import { on } from "events";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: any;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
}: ModalProps) {
  const [showModal, setShowModal] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  const handleClose = () => {
    let timeout: NodeJS.Timeout;
    setShowModal(false);
    timeout = setTimeout(() => {
      setShouldRender(false);
      onClose();
    }, 200);
    return () => clearTimeout(timeout);
  };

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setTimeout(() => setShowModal(true), 20);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <div
      className={`modal-overlay ${showModal ? "" : "hidden"}`}
      onClick={() => handleClose()}
    >
      <div
        className={`modal-content ${showModal ? "" : "hidden"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="close-button" onClick={() => handleClose()}>
            &times;
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}
