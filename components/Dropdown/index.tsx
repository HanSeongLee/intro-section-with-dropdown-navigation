import React, {HTMLAttributes, useCallback, useState} from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import ArrowDownIcon from '/public/icons/icon-arrow-down.svg';

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
                <ArrowDownIcon className={styles.icon} />
            </div>
            <ul className={styles.childrenBox}>
                <div className={styles.children}>
                    {children}
                </div>
            </ul>
        </li>
    );
};

export default Dropdown;
