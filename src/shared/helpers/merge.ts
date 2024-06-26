/**
 * Deep merges two objets.
 * @param  {Object} object destination object
 * @param  {Object} source source obejct
 *
 * @returns {Object} new object
 */
export const merge = (object: any, source: any) => {
	if (object === source) return object;

	const newValue = {
		...object,
		...source,
	};

	Object.entries(source).forEach(([key, value]) => {
		if (object[key] && typeof object[key] === "object") {
			newValue[key] = merge(object[key], value);
		} else {
			newValue[key] = value;
		}
	});

	return newValue;
};
