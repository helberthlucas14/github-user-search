import React from 'react';
import './styles.scss';

type Props = {
    text: string;
}

const Button = ({ text }: Props) => (
    <button className="btn primary">
        <h5 className="btn-text">{text}</h5>
    </button >

);

export default Button; 