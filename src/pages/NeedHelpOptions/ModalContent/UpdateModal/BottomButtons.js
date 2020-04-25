import React from 'react';
import { Row } from '../../../../globalComponents';
import { ConfirmationButton } from '../styles';

export default function BottomButtons({
  category,
  deleteCategory,
  confirmUpdates,
  closeModal,
}) {
  return (
    <>
      <Row style={{ justifyContent: 'space-between' }}>
        <ConfirmationButton
          id='confirmButton'
          style={{ backgroundColor: 'var(--color-pink)' }}
          onClick={deleteCategory}
        >
          <strong
            style={{ fontSize: '1.25em', color: 'white' }}
          >{`Cancelar ajuda com ${category}`}</strong>
        </ConfirmationButton>
        <ConfirmationButton
          id='confirmButton'
          style={{ backgroundColor: 'var(--color-purple)' }}
          onClick={closeModal}
        >
          <strong style={{ fontSize: '1.25em', color: 'white' }}>
            Cancelar alterações
          </strong>
        </ConfirmationButton>
        <ConfirmationButton
          id='confirmButton'
          style={{ backgroundColor: 'var(--color-green)' }}
          onClick={confirmUpdates}
        >
          <strong style={{ fontSize: '1.25em', color: 'white' }}>
            Confirmar Alterações
          </strong>
        </ConfirmationButton>
      </Row>
    </>
  );
}
