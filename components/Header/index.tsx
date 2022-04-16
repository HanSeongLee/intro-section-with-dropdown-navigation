import React from 'react';
import styles from './style.module.scss';
import Container from "../Container";
import Logo from "../Logo";
import Menu from "../Menu";

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <Container className={styles.container}>
                <Logo/>

                <Menu />
            </Container>
        </header>
    );
};

export default Header;
