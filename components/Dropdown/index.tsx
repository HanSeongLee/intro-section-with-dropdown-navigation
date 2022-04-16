import React, {HTMLAttributes, useCallback, useState} from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLLIElement> {
    label: string;
}

const Dropdown: React.FC<IProps> = ({ label, children, ...props }) => {
    const [open, setOpen] = useState(false);

    const onClick = useCallback(() => {
        setOpen(!open);
    }, [open]);

    return (
        <li className={cn(styles.dropdown, {
            [styles.open]: open,
        })}
             {...props}
        >
            <div className={styles.title}
                 onClick={onClick}
            >
                {label}
                <img className={styles.icon}
                     src={'/icons/icon-arrow-down.svg'}
                     alt={''}
                />
            </div>
            <ul className={styles.children}>
                {children}
            </ul>
        </li>
    );
};

export default Dropdown;
