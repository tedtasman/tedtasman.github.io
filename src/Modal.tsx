import { useEffect, useState } from "react";
import "./Modal.css";

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

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isOpen) {
      setShouldRender(true);
      setShowModal(true);
    } else {
      setShowModal(false);
      timeout = setTimeout(() => {
        setShouldRender(false);
        onClose();
      }, 500);
    }
    return () => clearTimeout(timeout);
  }, [isOpen, onClose]);

  if (!shouldRender) return null;

  return (
    <div
      className={`modal-overlay ${showModal ? "" : "hidden"}`}
      onClick={() => setShowModal(false)}
    >
      <div
        className={`modal-content ${showModal ? "" : "hidden"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="close-button" onClick={() => setShowModal(false)}>
            &times;
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}
