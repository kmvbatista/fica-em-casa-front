import React from 'react';
import { Row } from '../../../../globalComponents';
import {
  ConfirmationButton,
  CancelHelpButton,
  CancelChangeButton,
} from '../styles';

export default function BottomButtons({
  category,
  deleteCategory,
  confirmUpdates,
  closeModal,
}) {
  return (
    <>
      <Row style={{ justifyContent: 'space-between' }}>
        <CancelHelpButton id='confirmButton' onClick={deleteCategory}>
          <strong
            style={{ color: 'white' }}
          >{`Cancelar ajuda com ${category}`}</strong>
        </CancelHelpButton>
        <CancelChangeButton id='confirmButton' onClick={closeModal}>
          <strong style={{ color: 'white' }}>Cancelar alterações</strong>
        </CancelChangeButton>
        <ConfirmationButton id='confirmButton' onClick={confirmUpdates}>
          <strong style={{ color: 'white' }}>Confirmar Alterações</strong>
        </ConfirmationButton>
      </Row>
    </>
  );
}
