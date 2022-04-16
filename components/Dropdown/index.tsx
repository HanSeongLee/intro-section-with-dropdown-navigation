import React, {HTMLAttributes, useCallback, useState} from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import ArrowDownIcon from '/public/icons/icon-arrow-down.svg';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    label: string;
}

const Dropdown: React.FC<IProps> = ({ label, children, ...props }) => {
    const [open, setOpen] = useState(false);

    const onClick = useCallback(() => {
        setOpen(!open);
    }, [open]);

    return (
        <div className={cn(styles.dropdown, {
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
                <li className={styles.children}>
                    {children}
                </li>
            </ul>
        </div>
    );
};

export default Dropdown;
