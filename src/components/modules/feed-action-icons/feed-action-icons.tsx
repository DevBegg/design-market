import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import RefreshIcon from '@mui/icons-material/Refresh';
import styles from './feed-action-icons.module.scss';
import IconButton from '@mui/material/IconButton';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { PopoverMenu } from '../popover-menu';
import { FeedViewType } from '@/types';
import { useDispatch, useSelector } from 'react-redux';
import { layoutSelector, setFeedView } from '@/stores/layout-slice/layout-slice';
import React from 'react';

const RadioButtonStyle = {
  '& .MuiSvgIcon-root': {
    fontSize: 21,
  },
};

export const FeedViewButton = () => {
  const { feedView } = useSelector(layoutSelector);
  const dispatch = useDispatch();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFeedView(event.target.value as FeedViewType));
  };

  return (
    <PopoverMenu
      component={
        <IconButton color="primary" aria-label="change view">
          <CalendarViewDayIcon />
        </IconButton>
      }
      menuItems={
        <div>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            value={feedView}
            onChange={onChange}
            name="radio-buttons-group"
            className={styles.feedViewButtonGroup}>
            <FormControlLabel
              className={styles.feedViewButtonLabel}
              value={FeedViewType.Article}
              control={<Radio sx={RadioButtonStyle} />}
              label="Article View"
            />
            <FormControlLabel
              className={styles.feedViewButtonLabel}
              value={FeedViewType.Magazine}
              control={<Radio sx={RadioButtonStyle} />}
              label="Magazine View"
            />
            <FormControlLabel
              className={styles.feedViewButtonLabel}
              value={FeedViewType.TitleOnly}
              control={<Radio sx={RadioButtonStyle} />}
              label="Title-Only View"
            />
          </RadioGroup>
        </div>
      }
    />
  );
};

export const FeedActionIcons = () => {
  return (
    <div className={styles.feedActionIcons}>
      <IconButton color="primary" aria-label="refresh feed">
        <RefreshIcon />
      </IconButton>
      <FeedViewButton />
    </div>
  );
};
