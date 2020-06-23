import React, { FC, forwardRef } from 'react';
import { ICarouselIndicatorProps } from '../carousel.interface';
import './CarouselIndicator.css'

/**
 * 
 * @param active - the current one index of the active slide
 * @param count - amount of slides
 */
export const CarouselIndicator: FC<ICarouselIndicatorProps> = forwardRef<HTMLDivElement, ICarouselIndicatorProps>(({count, handleClick}, ref) => {

  const indicators = [];
  for (let index = 0; index < count; index++) {

    if (index === 0) {
      indicators.push(<div key={index} className='indicator-tab indicator-tab-active' onClick={() => handleClick(index)}></div>)
    } else {
      indicators.push(<div key={index} className='indicator-tab' onClick={() => handleClick(index)}></div>)
    }
    
  }
  return (
    <div 
      ref={ref}
      style={{
        display: 'flex',
        width: `${count * 12}px`,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        height: '72px'
      }}
    >
      {
        indicators
      }
    </div>
  )
});