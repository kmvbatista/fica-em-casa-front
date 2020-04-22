import React from 'react';
import { Row } from '../../../../../globalComponents';
import { HelpOptionCard } from '../styles';
import IsChecked from '../../../../../components/isChecked';

export default function CategoriesList({
  necessities,
  helperCategories,
  onCardClick,
  setNecessity,
  toggleShowModal,
}) {
  return (
    <>
      {necessities ? (
        <Row style={{ margin: '.8em 0' }}>
          {necessities.map((it) => (
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => {
                setNecessity(it);
                toggleShowModal();
              }}
            >
              <HelpOptionCard>
                <IsChecked
                  icon='./hourglass.svg'
                  isChecked={false}
                  color={'transparent'}
                ></IsChecked>
                <img
                  src={`./${it.category}.svg`}
                  alt={it.category}
                  style={{ width: '2.5em' }}
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
                <img src={`./${it}.svg`} alt={it} style={{ width: '2.5em' }} />
              </HelpOptionCard>
            </div>
          ))}
        </Row>
      )}
    </>
  );
}
