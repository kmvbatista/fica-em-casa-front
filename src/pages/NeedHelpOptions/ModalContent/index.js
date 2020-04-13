import React, { useState } from 'react';
import { Row } from '../../../globalComponents';
import {
  ConfirmationButton,
  Card,
  ModalContainer,
  MainContainer,
  ItemsContainer,
  QuantityButton,
  Quantity,
  ItemInput,
  SelectUnit,
} from './styles';
import itemsExample from '../../../assets/itemsModal.json';
import * as NecessityService from '../../../services/necessityService';
import swal from 'sweetalert';

export default function ModalContent({ cardInfo, closeModal, setCardChecked }) {
  const [showExample, setShowExample] = useState(true);
  const [showConfirmButton, setShowConfirmButton] = useState(true);
  let [itemList, setItemList] = useState([]);
  const itemInitialState = {
    item: '',
    quantity: 0,
    mesureUnit: 'quilo',
  };
  let [itemToAdd, setItem] = useState(itemInitialState);

  const viewConfirmButton = () => {
    document.getElementById('confirmButton').style.display = 'block';
    setTimeout(() => {
      setShowConfirmButton(true);
    }, 500);
  };

  const isTouchDevice = () => {
    return 'ontouchstart' in window;
  };

  const handleMainInputFocus = () => {
    hideConfirmButton();
  };

  const hideConfirmButton = () => {
    setShowConfirmButton(false);
    if (isTouchDevice()) {
      setTimeout(() => {
        document.getElementById('confirmButton').style.display = 'none';
      }, 500);
    }
  };
  const addItem = () => {
    itemList.push(itemToAdd);
    updateItem(itemInitialState);
    setItemList([...itemList]);
  };

  const increaseItem = () => {
    itemToAdd.quantity++;
    updateItem(itemToAdd);
  };

  const decreaseItem = () => {
    itemToAdd.quantity--;
    updateItem(itemToAdd);
  };

  const setItemToAddName = (name) => {
    itemToAdd.item = name;
    updateItem(itemToAdd);
  };

  const selectMesureUnit = (unit) => {
    itemToAdd.mesureUnit = unit;
    updateItem(itemToAdd);
  };

  const updateItem = (item) => {
    setItem(Object.assign({}, item));
  };

  const handleFinish = async () => {
    if (showExample) {
      return setShowExample(false);
    } else {
      await NecessityService.postNecessity(
        cardInfo.category,
        itemList,
        closeModal,
      );
      swal(
        'Necessidade cadastrada com sucesso!',
        'Esperamos que dê tudo certo!',
        'success',
      );
      setCardChecked(cardInfo.category);
    }
  };

  const getExample = () => {
    return (
      <>
        <div style={{ marginBottom: '1em' }}>
          <p> Por exemplo:</p>
          <p>Olá, preciso de alguém para ir ao mercado.</p>
          <p>Preciso dos seguintes itens: </p>
        </div>
        <ItemsContainer>
          {itemsExample.map((it) => (
            <Row key={it.item}>
              -{it.item}
              <Quantity>
                {it.measureUnit}
                <QuantityButton>-</QuantityButton>
                <div>{it.quantity}</div>
                <QuantityButton>+</QuantityButton>
              </Quantity>
            </Row>
          ))}
        </ItemsContainer>
      </>
    );
  };

  const getItemList = () => {
    return (
      <>
        <ItemsContainer>
          {itemList.map((item) => (
            <Row key={item.item}>
              -{item.item}
              <Quantity>
                {item.mesureUnit}
                <QuantityButton>-</QuantityButton>
                <div>{item.quantity}</div>
                <QuantityButton>+</QuantityButton>
              </Quantity>
            </Row>
          ))}
          <Row>
            <ItemInput
              onFocus={handleMainInputFocus}
              onBlur={viewConfirmButton}
              value={itemToAdd.item}
              onChange={(e) => setItemToAddName(e.target.value)}
              placeholder='adicione seu item'
              onKeyPress={(e) => {
                if (e.charCode === 13) {
                  addItem();
                }
              }}
            ></ItemInput>
            <Quantity>
              <SelectUnit
                name='unity'
                id='unity'
                onChange={(e) => selectMesureUnit(e.target.value)}
              >
                <option value='kg'>quilo</option>
                <option value='unid.'>unid</option>
                <option value='litro'>litro</option>
              </SelectUnit>
              <QuantityButton onClick={decreaseItem}>-</QuantityButton>
              <div>{itemToAdd.quantity}</div>
              <QuantityButton onClick={increaseItem}>+</QuantityButton>
            </Quantity>
          </Row>
        </ItemsContainer>
        <div style={{ width: '100%' }}>
          <img
            onClick={addItem}
            src='./plus-rounded.svg'
            style={{
              width: '1.5em',
              margin: '0 auto 0 auto',
              display: 'block',
              cursor: 'pointer',
            }}
            alt='adicione mais items'
          />
        </div>
      </>
    );
  };

  return (
    <ModalContainer>
      <Row style={{ alignItems: 'center' }}>
        <Card>
          <img
            alt={cardInfo.category}
            src={cardInfo.imageUrl}
            style={{ height: '2.5em' }}
          />
        </Card>
        <strong style={{ fontSize: '3em' }}>{cardInfo.category}</strong>
      </Row>
      <MainContainer>
        <p style={{ marginBottom: '1em' }}>
          Digite abaixo o que você está precisando, e, se for necessário,
          especifique a quantidade.
        </p>
        {showExample && getExample()}
        {!showExample && getItemList()}
      </MainContainer>
      <ConfirmationButton
        id='confirmButton'
        onClick={handleFinish}
        style={showConfirmButton ? { opacity: '1' } : { opacity: '0' }}
      >
        <strong style={{ fontSize: '1.25em' }}>
          {showExample ? 'Pronto!' : 'Finalizar!'}
        </strong>
      </ConfirmationButton>
    </ModalContainer>
  );
}
