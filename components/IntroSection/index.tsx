import React from 'react';
import styles from './style.module.scss';
import Container from "../Container";
import Button from "../Button";
import ClientContainer from "../../containers/ClientContainer";

const IntroSection: React.FC = () => {
    return (
        <section className={styles.introSection}>
            <picture>
                <source srcSet={'/img/image-hero-mobile.png'}
                        media={'(max-width: 568px)'}
                />
                <source srcSet={'/img/image-hero-desktop.png'}
                        media={'(max-width: 767px)'}
                />
                <img className={styles.heroImage}
                     src={'/img/image-hero-desktop.png'}
                     alt={''}
                />
            </picture>

            <Container className={styles.container}>
                <h2 className={styles.title}>
                    Make <br/>remote work
                </h2>
                <p className={styles.description}>
                    Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.
                </p>
                <Button className={styles.learnMoreButton}>
                    Learn more
                </Button>
                <ClientContainer className={styles.clientContainer} />
            </Container>
        </section>
    );
};

export default IntroSection;
