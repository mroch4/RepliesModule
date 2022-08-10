import { Button, Form, Modal } from "react-bootstrap";
import { FC, useEffect, useState } from "react";

import ARTICLES from "../common/database/Articles";
import ICON_COLORS from "../common/iconColors";
import { faker } from "@faker-js/faker";
import useAppContext from "../hooks/useAppContext";
import uuid4 from "uuid4";

const Popup: FC = (): JSX.Element => {
  const { addItem, showModal, setModalShow } = useAppContext();

  const [firstNameInputValue, setFirstNameInputValue] = useState("");
  const [lastNameInputValue, setLastNameInputValue] = useState("");
  const [textboxValue, setTextboxValue] = useState("");

  const isFormValid = firstNameInputValue !== "" && lastNameInputValue !== "" && textboxValue !== "";

  const fakeData = () => {
    setFirstNameInputValue(faker.name.firstName());
    setLastNameInputValue(faker.name.lastName());
    setTextboxValue(faker.lorem.lines(3));
  };

  const clearForm = () => {
    setFirstNameInputValue("");
    setLastNameInputValue("");
    setTextboxValue("");
  };

  useEffect(() => {
    clearForm();
  }, [showModal]);

  //TODO - to remove after passing an article ID
  const setOfParentsIds = ARTICLES.map((article) => article.id);

  const handleSubmit = () => {
    const randomColor = ICON_COLORS[Math.floor(Math.random() * ICON_COLORS.length)];
    const randomParent = setOfParentsIds[Math.floor(Math.random() * setOfParentsIds.length)];
    const randomUpVotes = Math.floor(Math.random() * 100);
    const randomDownVotes = Math.floor(Math.random() * 100);

    addItem({
      id: uuid4(),
      parent: "dbb6675c-17da-11ed-861d-0242ac120002",
      // parent: randomParent,
      timeStamp: faker.date.past().valueOf(),
      // timeStamp: new Date().valueOf(),
      firstName: firstNameInputValue,
      lastName: lastNameInputValue,
      avatarColor: randomColor,
      content: textboxValue,
      upVotes: randomUpVotes,
      downVotes: randomDownVotes,
      // upVotes: 50,
      // downVotes: 50,
    });

    setModalShow(false);
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
        <Button variant="primary" onClick={fakeData}>
          Fake
        </Button>
        <Button variant="success" disabled={isFormValid ? false : true} onClick={handleSubmit}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Popup;
