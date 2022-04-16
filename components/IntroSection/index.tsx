import React from 'react';
import styles from './style.module.scss';
import Container from "../Container";
import Button from "../Button";
import ClientContainer from "../../containers/ClientContainer";

const IntroSection: React.FC = () => {
    return (
        <section className={styles.introSection}>
            <picture>
                <source src={'/img/image-hero-mobile.png'}
                        media={'(min-width: 568px)'}
                />
                <img className={styles.heroImage}
                     src={'/img/image-hero-mobile.png'}
                     alt={''}
                />
            </picture>

            <Container>
                <h2 className={styles.title}>
                    Make remote work
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
