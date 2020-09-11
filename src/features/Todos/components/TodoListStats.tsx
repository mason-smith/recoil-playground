import React from 'react';
import { useRecoilValue } from 'recoil';

// @material-ui dependencies
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import PieChartIcon from '@material-ui/icons/PieChart';

// Local Dependencies
import { todoListStatsState } from '../selectors';

export const TodoListStats = () => {
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
  } = useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return (
    <List>
      <ListItem button>
        <ListItemIcon>
          <EqualizerIcon />
        </ListItemIcon>
        <ListItemText primary={`Total items: ${totalNum}`} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <CheckCircleOutlineIcon />
        </ListItemIcon>
        <ListItemText primary={`Completed items: ${totalCompletedNum}`} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <RadioButtonUncheckedIcon />
        </ListItemIcon>
        <ListItemText primary={`Active items: ${totalUncompletedNum}`} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <PieChartIcon />
        </ListItemIcon>
        <ListItemText
          primary={`Percent completed: ${formattedPercentCompleted}`}
        />
      </ListItem>
    </List>
  );
};
