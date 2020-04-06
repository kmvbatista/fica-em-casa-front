import React from 'react';
import {
  TopDecoration,
  MainTab,
  MainPhrase,
  PeopleCard,
  PersonAvatar,
  Distance,
  PersonName,
} from './styles';
import peopleData from '../../assets/peopleToHelp.json';
import { Column } from '../../globalComponents';

export default function AvailableHelpers() {
  return (
    <div>
      <TopDecoration>
        <img
          src='./old-guys-dancing.png'
          alt='needed-people'
          style={{
            position: 'absolute',
            top: '0em',
            height: '180%',
            left: '50%',
            transform: 'translate(-50%, 0)',
          }}
        />
      </TopDecoration>
      <MainTab>
        <MainPhrase>
          <strong>X vizinhos</strong> combinam com o que você pode{' '}
          <strong>ajudar</strong>!
        </MainPhrase>
        <Column>
          {peopleData.map((el) => (
            <PeopleCard key={el.distance}>
              <PersonAvatar>
                <img
                  src={el.photoUrl}
                  alt={el.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 'inherit',
                  }}
                />
              </PersonAvatar>
              <Column>
                <PersonName>{el.name}</PersonName>
                <Distance>{el.distance}km perto de você</Distance>
              </Column>
            </PeopleCard>
          ))}
        </Column>
      </MainTab>
    </div>
  );
}
