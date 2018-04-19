import qs from 'qs';
import { map } from 'ramda';
import { DEFAULT_BG_COLOR, DEFAULT_TEXT_COLOR } from 'config';

export function setUrlParams(newParams) {
	const { pathname } = document.location;
	const params = { ...getUrlParams, ...newParams };

	const cleanParams = removeDefaultValues(params);
	const encodedParams = map(encodeURIComponent, cleanParams);

	const querystring = qs.stringify(encodedParams);
	const url = `${pathname}?${querystring}`;

	if (window.history.pushState) {
		window.history.pushState({ path: url }, '', url);
	}
}

function removeDefaultValues(params) {
	if (params.textColor === DEFAULT_TEXT_COLOR) delete params.textColor;
	if (params.bgColor === DEFAULT_BG_COLOR) delete params.bgColor;

	return params;
}

export function getUrlParams() {
	const search = document.location.search.replace('?', '');
	const params = qs.parse(search);

	return map(decodeURIComponent, params);
}
