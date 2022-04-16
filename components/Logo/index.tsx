import React from 'react';
import styles from './style.module.scss';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <Link href={'/'}>
            <a className={styles.logo}>
                <h1 className={styles.heading}>
                    <img src={'/logo.svg'}
                         alt={'snap'}
                    />
                </h1>
            </a>
        </Link>
    );
};

export default Header;
