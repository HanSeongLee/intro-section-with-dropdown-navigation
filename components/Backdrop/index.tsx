import React from 'react';
import styles from './style.module.scss';

const Backdrou: React.FC = ({ children, ...props }) => {
    return (
        <div className={styles.backdrop}
             {...props}
        >
            {children}
        </div>
    );
};

export default Backdrou;
