import { useState, useEffect } from 'react';

export function useFetch(url) {
	const [data, setData] = useState([]);

	useEffect(() => {
		setData(url);
	}, [url]);

	return { data };
}
