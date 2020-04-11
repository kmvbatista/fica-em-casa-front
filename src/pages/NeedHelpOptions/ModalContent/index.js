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
  let [itemList, setItemList] = useState([]);
  let [itemToAdd, setItem] = useState({
    item: '',
    quantity: 0,
    mesureUnit: 'un',
  });

  const addItem = () => {
    itemList.push(itemToAdd);
    setItem({
      item: '',
      quantity: 0,
      mesureUnit: 'un',
    });
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
    itemToAdd.name = name;
    updateItem(itemToAdd);
  };

  const selectMesureUnit = (unit) => {
    itemToAdd.mesureUnit = unit;
    updateItem(itemToAdd);
  };

  const updateItem = (item) => {
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
            <Row>
              -{item.name}
              <Quantity>
                {item.mesureUnit}
                <QuantityButton>+</QuantityButton>
                <div>{item.quantity}</div>
                <QuantityButton>-</QuantityButton>
              </Quantity>
            </Row>
          ))}
          <Row>
            <ItemInput
              onChange={(e) => setItemToAddName(e.target.value)}
              value={itemToAdd.name}
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
        <img
          onClick={addItem}
          src='./down-arrow-yellow.svg'
          style={{ width: '1em', marginTop: '1em' }}
          alt='adicione mais items'
        />
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
      <ConfirmationButton onClick={handleFinish}>
        <strong style={{ fontSize: '1.25em' }}>
          {showExample ? 'Pronto!' : 'Finalizar!'}
        </strong>
      </ConfirmationButton>
    </ModalContainer>
  );
}
