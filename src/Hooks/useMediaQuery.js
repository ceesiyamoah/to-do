import { useEffect, useState } from 'react';

export const useMediaQuery = (query) => {
	const [matches, setMatches] = useState(false);
	useEffect(() => {
		const MediaQueryList = window.matchMedia(query);
		const listener = () => {
			setMatches(MediaQueryList.matches);
		};
		if (MediaQueryList.matches !== matches) {
			listener();
		}
		MediaQueryList.addListener(listener);
		return () => {
			MediaQueryList.removeListener(listener);
		};
	}, [matches, query]);

	return { matches };
};
