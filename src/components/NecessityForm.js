import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
  root: {
    width: '80%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NecessityForm(props) {
  const classes = useStyles();
  const [itemToAdd, setItemToAdd] = useState();

  const addItem = () => {
    console.log(props);
    if (itemToAdd && itemToAdd != '')
      props.necessities.push({ name: itemToAdd, isCompleted: false });
    props.setNecessities([...props.necessities]);
  };

  const toggleCheckItem = name => {
    let newNecessities = props.necessities.map(el => {
      if (el.name == name) {
        el.isCompleted = !el.isCompleted;
      }
      return el;
    });
    props.setNecessities(newNecessities);
  };

  return (
    <List className={classes.root}>
      {props.necessities.map(item => {
        const labelId = `checkbox-list-label-${item.name}`;

        return (
          <ListItem
            key={item.name}
            role={undefined}
            dense
            button
            onClick={() => toggleCheckItem(item.name)}
          >
            <ListItemIcon>
              <Checkbox
                edge='start'
                checked={item.isCompleted}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={item.name} />
          </ListItem>
        );
      })}
      <div className='input-group'>
        <div className='input-block'>
          <input
            type='itemToAdd'
            name='itemToAdd'
            id='itemToAdd'
            required
            value={itemToAdd}
            onChange={e => setItemToAdd(e.target.value)}
          />
        </div>
        <button
          className='necessity'
          onClick={() => {
            setItemToAdd('');
            return addItem();
          }}
        >
          adicionar
        </button>
      </div>
    </List>
  );
}
