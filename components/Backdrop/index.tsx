import React from 'react';
import styles from './style.module.scss';

const Backdrop: React.FC = ({ children, ...props }) => {
    return (
        <div className={styles.backdrop}
             {...props}
        >
            {children}
        </div>
    );
};

export default Backdrop;
