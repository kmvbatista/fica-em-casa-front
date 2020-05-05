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
import * as NecessityService from '../../../services/necessityService';
import UpdateModal from './UpdateModal/index';

export default function ModalContent({
  cardInfo,
  closeModal,
  setCardChecked,
  deleteOrUpdateCard,
  setDeleteCardModal,
  refresh,
  updateLocation,
}) {
  const [showConfirmButton, setShowConfirmButton] = useState(true);
  let [itemList, setItemList] = useState([]);
  const itemInitialState = {
    item: '',
    quantity: 0,
    measureUnit: 'unidade',
    category: cardInfo.category,
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

  const selectMeasureUnit = (unit) => {
    itemToAdd.measureUnit = unit;
    updateItem(itemToAdd);
  };

  const updateItem = (item) => {
    setItem(Object.assign({}, item));
  };

  function deleteItem(itemName) {
    const newItems = itemList.filter((x) => x.item !== itemName);
    setItemList([...newItems]);
  }

  const postNecessity = async () => {
    try {
      if (itemToAdd.item.length > 0) {
        itemList.push(itemToAdd);
      }
      await NecessityService.postNecessityItems(itemList);
      setCardChecked(cardInfo.category);
      closeModal();
      refresh();
      updateLocation();
    } catch (error) {
      closeModal();
    }
  };

  const getItemList = () => {
    return (
      <>
        <ItemsContainer>
          {itemList.map((item) => (
            <Row key={item.item}>
              -{item.item}
              <Quantity>
                {item.quantity}
                {` ${item.measureUnit} (s)`}
                <img
                  style={{ width: '1em', height: '1em', cursor: 'pointer' }}
                  src='./cancel.svg'
                  alt='apagar item'
                  onClick={() => {
                    deleteItem(item.item);
                  }}
                />
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
                onChange={(e) => selectMeasureUnit(e.target.value)}
              >
                <option value='unidade'>unidade</option>
                <option value='kg'>quilo</option>
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
              height: '1.5em',
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
    <>
      {deleteOrUpdateCard ? (
        <UpdateModal
          refresh={refresh}
          cardInfo={cardInfo}
          closeModal={closeModal}
          setDeleteCardModal={setDeleteCardModal}
          updateLocation={updateLocation}
        ></UpdateModal>
      ) : (
        <ModalContainer>
          <Row style={{ alignItems: 'center' }}>
            <Card style={{ height: '7em', width: '7em' }}>
              <img
                alt={cardInfo.category}
                src={cardInfo.imageUrl}
                style={{ height: '2.5em', width: '2.5em' }}
              />
            </Card>
            <strong style={{ fontSize: '3em' }}>{cardInfo.category}</strong>
          </Row>
          <MainContainer>
            <p style={{ marginBottom: '1em' }}>
              Digite abaixo o que você está precisando, e, se for necessário,
              especifique a quantidade.
            </p>
            {getItemList()}
          </MainContainer>
          <ConfirmationButton
            id='confirmButton'
            onClick={postNecessity}
            style={showConfirmButton ? { opacity: '1' } : { opacity: '0' }}
          >
            <strong style={{ fontSize: '1.25em' }}>Finalizar!</strong>
          </ConfirmationButton>
        </ModalContainer>
      )}
    </>
  );
}
