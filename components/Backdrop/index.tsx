import React, {HTMLAttributes} from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

const Backdrop: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => {
    return (
        <div className={cn(styles.backdrop, className)}
             {...props}
        >
            {children}
        </div>
    );
};

export default Backdrop;
