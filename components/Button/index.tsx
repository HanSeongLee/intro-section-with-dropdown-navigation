import React, {ButtonHTMLAttributes} from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ className, children, ...props }) => {
    return (
        <button className={cn(styles.button, className)}
                type={'button'}
                {...props}
        >
            {children}
        </button>
    );
};

export default Button;
