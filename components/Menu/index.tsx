import React, {useCallback, useEffect, useState} from 'react';
import styles from './style.module.scss';
import Backdrop from "../Backdrop";
import Dropdown from "../Dropdown";
import MenuItem from "../MenuItem";
import Button from "../Button";
import Link from 'next/link';
import cn from 'classnames';

const Menu: React.FC = () => {
    const [open, setOpen] = useState(false);

    const onClick = useCallback(() => {
        setOpen(!open);
    }, [open]);

    useEffect(() => {
        const resizeHandler = () => {
            if (window.innerWidth <= 992) {
                return;
            }
            setOpen(false);
        };

        window.addEventListener('resize', resizeHandler);
        return () => {
            window.removeEventListener('resize', resizeHandler);
        }
    }, []);

    return (
        <nav className={cn(styles.nav, {
            [styles.open]: open,
        })}>
            <button className={styles.menuButton}
                    type={'button'}
                    onClick={onClick}
            >
                <img src={!open ? '/icons/icon-menu.svg' : '/icons/icon-close-menu.svg'}
                     alt={'menu'}
                />
            </button>
            <Backdrop className={styles.backdrop}>
                <div className={styles.menuBox}>
                    <ul className={styles.menuContainer}>
                        <li>
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
                        </li>
                        <li>
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
                        </li>
                        <li>
                            <MenuItem href={'#'}>
                                Careers
                            </MenuItem>
                        </li>
                        <li>
                            <MenuItem href={'#'}>
                                About
                            </MenuItem>
                        </li>
                    </ul>
                    <div className={styles.buttonContainer}>
                        <Link href={'#'}>
                            <a className={styles.loginButton}>
                                Login
                            </a>
                        </Link>
                        <Button className={styles.registerButton}>
                            Register
                        </Button>
                    </div>
                </div>
            </Backdrop>
        </nav>
    );
};

export default Menu;
