import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function ReactBootstrap() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <h1>React Bootstrap</h1>

      <h3>Button</h3>
      <Button variant="primary">Primary</Button>
      <Button variant="outline-success">Success outline</Button>
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
      <Button variant="link" href="https://google.com">
        Google
      </Button>

      <h3>Modal</h3>
      <Button variant="danger" onClick={handleOpen}>
        Open Modal
      </Button>

      <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>Giỏ hàng</Modal.Header>
        <Modal.Body>...</Modal.Body>
        <Modal.Footer>
          <Button variant="primary">Thanh toán</Button>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
