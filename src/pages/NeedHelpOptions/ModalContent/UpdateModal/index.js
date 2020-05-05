import React from 'react';
import {
  ModalContainer,
  Card,
  MainContainer,
  ItemsContainer,
  Quantity,
  QuantityButton,
  SelectUnit,
  ItemInput,
} from '../styles';
import { Row } from '../../../../globalComponents';
import * as NecessityService from '../../../../services/necessityService';
import { useState } from 'react';
import BottomButtons from './BottomButtons';
import Loading from 'react-loading';
import swal from 'sweetalert';
import { useEffect } from 'react';

export default function UpdateModal({
  cardInfo,
  closeModal,
  refresh,
  setDeleteCardModal,
  updateLocation,
  store,
}) {
  const [itemsToDelete, setItemsToDelete] = useState([]);
  const [itemsToAdd, setItemsToAdd] = useState([]);
  const [itemsToShow, setItemsToShow] = useState([...cardInfo.items]);
  const itemInitialState = {
    item: '',
    quantity: 0,
    measureUnit: 'unidade',
    category: cardInfo.category,
  };
  let [itemToAdd, setItem] = useState(itemInitialState);
  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    return () => setDeleteCardModal(false);
  }, [setDeleteCardModal]);

  async function confirmUpdates() {
    try {
      setIsLoading(true);
      if (itemsToAdd.length > 0) {
        if (itemToAdd.item.length > 0) {
          itemsToAdd.push(itemToAdd);
        }
        await NecessityService.addMany(itemsToAdd);
      }
      if (itemsToDelete.length > 0) {
        await NecessityService.deleteMany(itemsToDelete);
      }
      setIsLoading(false);
      refresh();
      closeModal();
      swal('Dados atualizados com sucesso', '', 'success');
    } catch (error) {
      setIsLoading(false);
      swal('Houve um erro na atualização', '', 'error');
    }
  }

  async function deleteCategory() {
    try {
      setIsLoading(true);
      await NecessityService.deleteByCategory(cardInfo.category);
      setIsLoading(false);
      closeModal();
      swal('Dados atualizados com sucesso', '', 'success');
      refresh();
      updateLocation();
      store.helpers = undefined;
    } catch (error) {
      setIsLoading(false);
      swal('Houve um erro na atualização', '', 'error');
    }
  }

  function appendItemsToDelete(id) {
    itemsToDelete.push(id);
    setItemsToDelete([...itemsToDelete]);
  }

  function appendItemsToAdd() {
    itemsToAdd.push(itemToAdd);
    setItemsToAdd([...itemsToAdd]);
  }

  function addItemToShow() {
    itemsToShow.push(itemToAdd);
    setItemsToShow([...itemsToShow]);
  }

  function deleteItemToShow(itemName) {
    const newItems = itemsToShow.filter((x) => x.item !== itemName);
    setItemsToShow([...newItems]);
  }

  function handleDeleteClick(item) {
    deleteItemToShow(item.item);
    if (item._id) {
      appendItemsToDelete(item._id);
    }
  }
  function handleAddClick() {
    addItemToShow();
    appendItemsToAdd();
    updateItem(itemInitialState);
  }

  const updateItem = (item) => {
    setItem(Object.assign({}, item));
  };

  function setItemToAddName(name) {
    itemToAdd.item = name;
    updateItem(itemToAdd);
  }
  function setItemMeasureUnit(measureUnit) {
    itemToAdd.measureUnit = measureUnit;
    updateItem(itemToAdd);
  }
  function increaseItemQnt() {
    itemToAdd.quantity++;
    updateItem(itemToAdd);
  }

  function decreaseItemQnt() {
    itemToAdd.quantity--;
    updateItem(itemToAdd);
  }

  return (
    <>
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
            Você tem essa necessidade cadastrada. Escolha se quer atualizar ou
            removê-la.
          </p>
          <ItemsContainer>
            {itemsToShow.map(
              (it) =>
                it && (
                  <Row key={it.item}>
                    -{it.item}
                    <Quantity>
                      {it.quantity}
                      {` ${it.measureUnit} (s)`}
                      <img
                        style={{
                          width: '1em',
                          height: '1em',
                          cursor: 'pointer',
                          marginLeft: '1em',
                        }}
                        src='./cancel.svg'
                        alt='apagar item'
                        onClick={() => {
                          handleDeleteClick(it);
                        }}
                      />
                    </Quantity>
                  </Row>
                ),
            )}
            <Row>
              <ItemInput
                value={itemToAdd.item}
                onChange={(e) => setItemToAddName(e.target.value)}
                placeholder='adicione seu item'
                onKeyPress={(e) => {
                  if (e.charCode === 13) {
                    handleAddClick();
                  }
                }}
              ></ItemInput>
              <Quantity>
                <SelectUnit
                  name='unity'
                  id='unity'
                  onChange={(e) => setItemMeasureUnit(e.target.value)}
                >
                  <option selected value='unidade'>
                    unidade
                  </option>
                  <option value='quilo'>quilo</option>
                  <option value='litro'>litro</option>
                </SelectUnit>
                <QuantityButton onClick={decreaseItemQnt}>-</QuantityButton>
                <p style={{ fontSize: '1.1em' }}>{itemToAdd.quantity}</p>
                <QuantityButton onClick={increaseItemQnt}>+</QuantityButton>
              </Quantity>
            </Row>
            <div style={{ width: '100%' }}>
              <img
                onClick={handleAddClick}
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
          </ItemsContainer>
        </MainContainer>
        {!isLoading ? (
          <BottomButtons
            category={cardInfo.category}
            deleteCategory={deleteCategory}
            confirmUpdates={confirmUpdates}
            closeModal={closeModal}
          ></BottomButtons>
        ) : (
          <Row style={{ width: '100%', justifyContent: 'center' }}>
            <Loading
              width='5em'
              height='5em'
              color={'var(--color-yellow)'}
              type='spinningBubbles'
            ></Loading>
          </Row>
        )}
      </ModalContainer>
    </>
  );
}
