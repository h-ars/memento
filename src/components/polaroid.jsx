import React, { useState, useEffect } from 'react';

const PoalroidComp = ({ imgSrc }) => {
    return (
        <main className="polaroidComp">
            <div className="polaroidContainer">
                <div className="polImgContainer">
                    <img src={imgSrc} alt="polaroid image" />
                </div>
            </div>
        </main>
    );
}
 
export default PoalroidComp;
