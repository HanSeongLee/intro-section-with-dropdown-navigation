import React, {HTMLAttributes} from 'react';
import styles from './style.module.scss';
import Link from 'next/link';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    href: string;
    icon?: string;
};

const MenuItem: React.FC<IProps> = ({ href, icon, children, ...props }) => {
    return (
        <div className={styles.menuItem}
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
        </div>
    );
};

export default MenuItem;
