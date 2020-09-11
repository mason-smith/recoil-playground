import React, { Fragment, useState, MouseEvent, KeyboardEvent } from 'react';

// @material-ui dependencies
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import BarChartIcon from '@material-ui/icons/BarChart';

// Local Dependencies
import { TodoListStats } from './TodoListStats';

export const StatsDrawer = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (
    event: KeyboardEvent | MouseEvent
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setOpen(open);
  };

  return (
    <Fragment>
      <IconButton onClick={toggleDrawer(true)} aria-label="statistics">
        <BarChartIcon />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <div
          style={{ width: 250 }}
          role="presentation"
          // @ts-ignore
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <TodoListStats />
        </div>
      </Drawer>
    </Fragment>
  );
};
