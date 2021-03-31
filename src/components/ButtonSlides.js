import React from 'react';

import left from './../assets/images/icon-prev.svg';
import right from './../assets/images/icon-next.svg';

function ButtonSlides({ changeSlide }) {
	return (
		<div className="button-wrapper">
			<button type="button" onClick={() => changeSlide('prev')}>
				<img src={left} alt="left navigation slides" className="btn-icon" />
			</button>
			<button type="button" onClick={() => changeSlide('next')}>
				<img src={right} alt="right navigation slides" className="btn-icon" />
			</button>
		</div>
	);
}

export default ButtonSlides;
