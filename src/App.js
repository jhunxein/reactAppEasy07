import React, { useState, useRef, useEffect } from 'react';

import { useFetch } from './helpers/useFetch';

import { users } from './data/users';

import Buttons from './components/ButtonSlides';

function App() {
	const { data } = useFetch(users);

	const [currentSlide, setCurrentSlide] = useState(1);

	// TODO: Change current slide
	const changeSlide = (btn) => {
		if (btn === 'prev') {
			return currentSlide <= 1
				? setCurrentSlide(2)
				: setCurrentSlide(currentSlide - 1);
		}

		if (btn === 'next') {
			return currentSlide >= data.length
				? setCurrentSlide(1)
				: setCurrentSlide(currentSlide + 1);
		}

		console.warn('Invalid operation');
	};

	// TODO: Assigning height for the whole container
	const refContainer = useRef(null);

	const handleWindowResize = () => {
		const height = window.innerHeight;
		refContainer.current.style.height = `${height}px`;
	};

	useEffect(() => {
		handleWindowResize();

		window.addEventListener('resize', handleWindowResize);

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);

	//

	return (
		<div className="container" ref={refContainer}>
			{data
				.filter((info, index) => index + 1 === currentSlide)
				.map((info) => (
					<figure key={info.id} className="wrapper">
						<div className="img-wrapper">
							<img src={info.src} alt="" className="img" />
							<Buttons changeSlide={changeSlide} />
						</div>
						<div>
							<blockquote>
								<p>&#8220; {info.desc} &#8221;</p>
							</blockquote>
							<figcaption>
								<cite>{info.name}</cite>
								{info.title}
							</figcaption>
						</div>
					</figure>
				))}
		</div>
	);
}

export default App;
