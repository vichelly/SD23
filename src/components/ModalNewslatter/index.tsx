import React, { useState } from 'react'
//import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import * as S from './styles'

function ModalNewslatter({
  message = 'Assinatura realizada com sucesso!',
  imgLink = '/img/checkmark-circle.png'
}) {
  const [show, setShow] = useState(true)

  const handleClose = () => setShow(false)
  //const handleShow = () => setShow(true)

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal centered show={show} onHide={handleClose}>
        {/* <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <S.Wrapper>
            <img src={imgLink} alt="Check" />
            <h3>{message}</h3>
          </S.Wrapper>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>*/}
      </Modal>
    </>
  )
}

export default ModalNewslatter
