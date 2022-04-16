import React, {LiHTMLAttributes} from 'react';
import styles from './style.module.scss';
import Link from 'next/link';

interface IProps extends LiHTMLAttributes<HTMLLIElement> {
    href: string;
    icon?: string;
};

const MenuItem: React.FC<IProps> = ({ href, icon, children, ...props }) => {
    return (
        <li className={styles.menuItem}
            {...props}
        >
            <Link href={href}>
                <a className={styles.content}>
                    {icon && (
                        <img className={styles.icon}
                             src={icon}
                             alt={''}
                        />
                    )}
                    {children}
                </a>
            </Link>
        </li>
    );
};

export default MenuItem;
