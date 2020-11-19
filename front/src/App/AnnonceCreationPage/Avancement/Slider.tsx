import React, { FunctionComponent, ReactNode } from 'react';

interface ISlider{
    sliderNumber: number,
    children: ReactNode
}

const Slider: FunctionComponent<ISlider> = ({sliderNumber, children}) => (
    <div className="avancement__slider"  style={{transform: `translateX(${(-window.innerWidth + 75 ) * sliderNumber}px)`}}>
        {children}
    </div>
);

export default Slider;