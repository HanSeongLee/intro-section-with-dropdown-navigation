import React, {useCallback, useState} from 'react';
import styles from './style.module.scss';
import Backdrop from "../Backdrop";
import Dropdown from "../Dropdown";
import MenuItem from "../MenuItem";

const Menu: React.FC = () => {
    const [open, setOpen] = useState(false);

    const onClick = useCallback(() => {
        setOpen(!open);
    }, [open]);

    return (
        <nav className={styles.nav}>
            <button className={styles.menuButton}
                    type={'button'}
                    onClick={onClick}
            >
                <img src={!open ? '/icons/icon-menu.svg' : '/icons/icon-close-menu.svg'}
                     alt={'menu'}
                />
            </button>
            {open && (
                <Backdrop>
                    <div className={styles.menuBox}>
                        <ul className={styles.menuContainer}>
                            <Dropdown label={'Features'}>
                                <MenuItem href={'#'}
                                          icon={'/icons/icon-todo.svg'}
                                >
                                    Todo List
                                </MenuItem>
                                <MenuItem href={'#'}
                                          icon={'/icons/icon-calendar.svg'}
                                >
                                    Calendar
                                </MenuItem>
                                <MenuItem href={'#'}
                                          icon={'/icons/icon-reminders.svg'}
                                >
                                    Reminders
                                </MenuItem>
                                <MenuItem href={'#'}
                                          icon={'/icons/icon-planning.svg'}
                                >
                                    Planning
                                </MenuItem>
                            </Dropdown>
                            <Dropdown label={'Company'}>
                                <MenuItem href={'#'}>
                                    History
                                </MenuItem>
                                <MenuItem href={'#'}>
                                    Our Team
                                </MenuItem>
                                <MenuItem href={'#'}>
                                    Blog
                                </MenuItem>
                            </Dropdown>
                            <MenuItem href={'#'}>
                                Careers
                            </MenuItem>
                            <MenuItem href={'#'}>
                                About
                            </MenuItem>
                        </ul>
                    </div>
                </Backdrop>
            )}
        </nav>
    );
};

export default Menu;
