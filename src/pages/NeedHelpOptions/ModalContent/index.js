import React, { useState, useContext } from 'react';
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
import Store from '../../../services/DefaultContext';

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

  const store = useContext(Store);

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
      store.helpers = undefined;
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
          store={store}
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
            {cardInfo.category === 'Mercado' && 
              <p style={{ marginBottom: '1em' }}>
              Aqui você pode montar sua lista de compras para +
              que a outra pessoa saiba exatamente do que você precisa. +
              É só digitar o nome do produto (e o peso, quando tiver) e +
              selecionar a quantidade, ao lado.
            </p>
            }
            {cardInfo.category === 'Farmácia' && 
              <p style={{ marginBottom: '1em' }}>
              Precisa de algum remédio ou produto da farmácia? +
              Só digitar o nome do remédio/produto e a quantidade, ao lado!
              IMPORTANTE: No caso de remédios controlados, é necessário disponibilizar+
               a receita médica.
            </p>
            }
            {cardInfo.category === 'Doações' && 
              <p style={{ marginBottom: '1em' }}>
              Se sua renda não está sendo suficiente para comprar os mantimentos +
              necessários, você pode contar com a solidariedade de alguém. Basta +
              digitar os itens que gostaria de receber como doação.
            </p>
            }
            {cardInfo.category === 'Padaria' && 
              <p style={{ marginBottom: '1em' }}>
              Pão quentinho? Leite? Frios? "Chega a manteiga derrete". +
              Só digitar o que precisa da padaria (e o peso, quando tiver) +
              e selecionar a quantidade logo ao lado.
            </p>
            }
            {cardInfo.category === 'Limpeza' && 
              <p style={{ marginBottom: '1em' }}>
              Precisa de alguém para ajudar na limpeza da casa ou da lavagem +
              das roupas, por exemplo? Só especificar aqui o tipo de ajuda.
            </p>
            }
            {cardInfo.category === 'Assistência online' && 
              <p style={{ marginBottom: '1em' }}>
              Trocar um chuveiro, consertar um vazamento, consertar um computador... +
              se precisar de alguma ajuda técnica que não possa ser oferecida pelas +
              empresas de água, luz, telefonia, gás ou internet, é só explicar que +
              tipo de ajuda você precisa.
            </p>
            }
            {cardInfo.category === 'Leitura' && 
              <p style={{ marginBottom: '1em' }}>
              Um livro agora cairia bem né? Será que alguém tem algum +
              para compartilhar? Coloque aqui os estilos/gêneros de +
              livros que você gosta.
            </p>
            }
            {cardInfo.category === 'Conselho' && 
              <p style={{ marginBottom: '1em' }}>
              Conselho bom se dá sim! E mais do que isso: +
              tá precisando conversar, dar aquela desabafada +
              ou só uma companhia para socializar um pouco +
              (ainda que virtualmente)? Só mandar um "Oi" aqui.
            </p>
            }
            {cardInfo.category === 'Vídeo aula' && 
              <p style={{ marginBottom: '1em' }}>
              Quer aproveitar esse tempo em isolamento para +
              aprender algo novo? Tocar um instrumento, fazer +
              um artesanato, desenhar, um novo idioma... +
              Escolha o que você gostaria de aprender.
            </p>
            }
            {cardInfo.category === 'Pet' && 
              <p style={{ marginBottom: '1em' }}>
              Faz tempo que seu cachorrinho não sai pra dar uma +
              volta? Tá precisando de um banho? Seu gato precisa +
              de um arranhador novo? Comida pro pet? Escolha a +
              opção desejada e vamos tentar achar alguém para ajudar.
            </p>
            }
            {cardInfo.category === 'Netflix' && 
              <p style={{ marginBottom: '1em' }}>
              Gostaria de poder assistir algo diferente, aprender +
              alguma coisa nova em cursos online? Talvez existam +
              pessoas que adorariam compartilhar o acesso a algumas +
              plataformas de educação, filmes, séries e livros com você!
            </p>
            }
            
            {getItemList()}
          </MainContainer>
          <ConfirmationButton
            id='confirmButton'
            onClick={postNecessity}
            style={
              showConfirmButton
                ? {
                    opacity: '1',
                    width: '100%',
                    padding: '1em 1em',
                    marginBottom: '1em',
                  }
                : {
                    opacity: '0',
                    width: '100%',
                    padding: '1em 1em',
                    marginBottom: '1em',
                  }
            }
          >
            <strong style={{ fontSize: '1.25em' }}>Finalizar!</strong>
          </ConfirmationButton>
        </ModalContainer>
      )}
    </>
  );
}
