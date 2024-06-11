import React from 'react';
import './ModuleCss/DashedBos2.css';
import styles from './ModuleCss/DashedBox.Module.css';


function CssDemo() {
    const myStyle = {
        color: 'red',
        fontSize: '20px'
    };
    return (
        <>
            <div>Internal Css Demo</div>
            <div style={{ color: 'blue', fontSize: '30px' }}>This is a Div for Internal Css</div>
            <div style={myStyle}>This is a another div apply style using variable</div>

            <hr />

            <div className={styles.container}>
                <p className={styles.content}>Get started with CSS Modules</p>
                <p className={styles.error}> This is a error div</p> 
            </div>
        </>
    )
}
export default CssDemo;
