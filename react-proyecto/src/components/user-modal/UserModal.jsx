/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const UserModal = (props) => {
  const {
    user,
  } = props;

  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);

  return (
    <Modal isOpen={modal} toggle={toggle}>
        {/* <ModalHeader toggle={toggle}>{user.data.id} {user.data.name}</ModalHeader> */}
        <ModalHeader toggle={toggle}>Datos del usuario</ModalHeader>
        <ModalBody>
          Id: {user.data.id}  <br></br>
          Nombre : {user.data.name}  <br></br>
          Email: {user.data.email}  <br></br>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
  );
}

export default UserModal;