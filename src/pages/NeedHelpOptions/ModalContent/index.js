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

export default function ModalContent({ cardInfo, closeModal }) {
  const [showExample, setShowExample] = useState(true);
  const [showConfirmButton, setShowConfirmButton] = useState(true);
  let [itemList, setItemList] = useState([]);
  const itemInitialState = {
    item: '',
    quantity: 0,
    mesureUnit: 'kilo',
  };
  let [itemToAdd, setItem] = useState(itemInitialState);

  const addItem = () => {
    itemList.push(itemToAdd);
    updateItem(itemInitialState);
    setItemList([...itemList]);
  };

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
    console.log(item);
    setItem(Object.assign({}, item));
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
          <Row>
            -Candida .{' '}
            <Quantity>
              un<QuantityButton>+</QuantityButton>
              <div>2</div>
              <QuantityButton>-</QuantityButton>
            </Quantity>
          </Row>
          <Row>
            -Feijão{' '}
            <Quantity>
              kg <QuantityButton>+</QuantityButton>
              <div>2</div>
              <QuantityButton>-</QuantityButton>
            </Quantity>
          </Row>
          <Row>
            -Arroz{' '}
            <Quantity>
              kg <QuantityButton>+</QuantityButton>
              <div>5</div>
              <QuantityButton>-</QuantityButton>
            </Quantity>
          </Row>
          <Row>-Verdura</Row>

          <Row>
            -Sabonete Dove{' '}
            <Quantity>
              un <QuantityButton>+</QuantityButton>
              <div>2</div>
              <QuantityButton>-</QuantityButton>
            </Quantity>
          </Row>
          <Row>
            -Leite
            <Quantity>
              un <QuantityButton>+</QuantityButton>
              <div>4</div>
              <QuantityButton>-</QuantityButton>
            </Quantity>
          </Row>
          <Row>
            -Ovos
            <Quantity>
              un <QuantityButton>+</QuantityButton>
              <div>12</div>
              <QuantityButton>-</QuantityButton>
            </Quantity>
          </Row>
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
                if (e.charCode == 13) {
                  addItem(); // returning false will prevent the event from bubbling up.
                }
              }}
            ></ItemInput>
            <Quantity>
              <SelectUnit
                name='unity'
                id='unity'
                onChange={(e) => selectMesureUnit(e.target.value)}
              >
                <option value='kg'>kilo</option>
                <option value='unid.'>unid</option>
                <option value='litro'>litro</option>
              </SelectUnit>
              <QuantityButton onClick={decreaseItem}>-</QuantityButton>
              <div>{itemToAdd.quantity}</div>
              <QuantityButton onClick={increaseItem}>+</QuantityButton>
            </Quantity>
          </Row>
        </ItemsContainer>
        <div style={{ width: '7em' }}>
          <img
            onClick={addItem}
            src='./plus-rounded.svg'
            style={{
              width: '1.5em',
              margin: '0.5em auto 0 auto',
              display: 'block',
            }}
            alt='adicione mais items'
          />
        </div>
      </>
    );
  };

  const handleFinish = () => {
    if (showExample) {
      return setShowExample(false);
    }
    closeModal();
  };

  return (
    <ModalContainer>
      <Row style={{ alignItems: 'center' }}>
        <Card>
          <img src={cardInfo.imageUrl} style={{ height: '2.5em' }} />
        </Card>
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
