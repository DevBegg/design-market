import { Avatar, ToggleButton } from '@mui/material';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import styles from './left-nav.module.scss';
import { PopoverMenu } from '../../popover-menu';
import { AvatarMenuList } from './avatar-menu-list';

interface LeftNavProps {
  onToggleButtonClick: () => void;
}

export const LeftNav = ({ onToggleButtonClick }: LeftNavProps) => {
  return (
    <nav className={styles.root}>
      <ToggleButton
        className={styles.leftNavToggleBtn}
        value="list"
        aria-label="list"
        onClick={onToggleButtonClick}>
        <ViewHeadlineIcon />
      </ToggleButton>
      <div></div>
      <div className={styles.leftNavProfile}>
        <PopoverMenu
          component={
            <Avatar
              sx={{
                bgcolor: 'orange',
                width: 34,
                height: 34,
              }}>
              Y
            </Avatar>
          }
          menuItems={<AvatarMenuList />}
        />
      </div>
    </nav>
  );
};
