import { Button, Form, Modal } from "react-bootstrap";
import { FC, useState } from "react";

import AVATAR_COLORS from "../common/AvatarColors";
import { faker } from "@faker-js/faker";
import useAppContext from "../hooks/useAppContext";
import uuid4 from "uuid4";

const Popup: FC = (): JSX.Element => {
  const { createReply, showModal, setModalShow, currentParentID } = useAppContext();

  const [firstNameInputValue, setFirstNameInputValue] = useState<string>("");
  const [lastNameInputValue, setLastNameInputValue] = useState<string>("");
  const [textboxValue, setTextboxValue] = useState<string>("");

  const isFormValid = firstNameInputValue !== "" && lastNameInputValue !== "" && textboxValue !== "";

  const mockData = () => {
    const randomLines = Math.ceil(Math.random() * 3);
    setFirstNameInputValue(faker.name.firstName());
    setLastNameInputValue(faker.name.lastName());
    setTextboxValue(faker.lorem.lines(randomLines));
  };

  const saveData = () => {
    const randomColor = AVATAR_COLORS[Math.floor(Math.random() * AVATAR_COLORS.length)];

    createReply({
      id: uuid4(),
      parent: currentParentID,
      timeStamp: new Date().valueOf(),
      firstName: firstNameInputValue,
      lastName: lastNameInputValue,
      avatarColor: randomColor,
      content: textboxValue,
      upVotes: 0,
      downVotes: 0,
    });
  };

  const clearForm = () => {
    setFirstNameInputValue("");
    setLastNameInputValue("");
    setTextboxValue("");
  };

  const handleSubmit = () => {
    saveData();
    setModalShow(false);
    clearForm();
  };

  return (
    <Modal show={showModal} onHide={() => setModalShow(false)}>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First name"
              value={firstNameInputValue}
              onChange={(e) => setFirstNameInputValue(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last name"
              value={lastNameInputValue}
              onChange={(e) => setLastNameInputValue(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Leave your reply here..."
              rows={3}
              value={textboxValue}
              onChange={(e) => setTextboxValue(e.target.value)}
              required
              autoFocus
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={() => setModalShow(false)}>
          Discard
        </Button>
        <Button variant="danger" onClick={clearForm}>
          Clear
        </Button>
        <Button variant="warning" onClick={mockData}>
          Mock
        </Button>
        <Button variant="success" disabled={isFormValid ? false : true} onClick={handleSubmit}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Popup;
