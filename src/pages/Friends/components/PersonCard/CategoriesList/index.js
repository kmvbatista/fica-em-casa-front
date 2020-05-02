import React from 'react';
import { Row } from '../../../../../globalComponents';
import { HelpOptionCard } from '../styles';
import IsChecked from '../../../../../components/isChecked';
import swal from 'sweetalert';

export default function CategoriesList({
  necessities,
  helperCategories,
  setNecessity,
  toggleShowModal,
  personName,
}) {
  return (
    <>
      {necessities ? (
        <Row style={{ margin: '.8em 0' }}>
          {necessities.map((it) => (
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => {
                if (it.status === 'pending') {
                  return swal(
                    `${personName} já está sendo ajudado(a) nessa categoria!`,
                    'Agradecemos a boa intenção',
                  );
                }
                setNecessity(it);
                toggleShowModal();
              }}
            >
              <HelpOptionCard
                style={{
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  height: '3.5em',
                  width: '3.5em',
                  padding: '0',
                }}
              >
                <IsChecked
                  icon='./clock.svg'
                  isChecked={it.status === 'pending'}
                  color={'var(--color-pink)'}
                ></IsChecked>
                <img
                  src={`./${it.category}.svg`}
                  alt={it.category}
                  style={{ width: '2.5em', height: '2.5em' }}
                />
              </HelpOptionCard>
            </div>
          ))}
        </Row>
      ) : (
        <Row style={{ margin: '.8em 0' }}>
          {helperCategories.map((it) => (
            <div>
              <HelpOptionCard>
                <img
                  src={`./${it}.svg`}
                  alt={it}
                  style={{ width: '2.5em', height: '2.5em' }}
                />
              </HelpOptionCard>
            </div>
          ))}
        </Row>
      )}
    </>
  );
}
