const stringifyQuery = (obj) => {
    const res = obj ? Object.keys(obj).map(key => {
        const val = obj[key];
        if (val === undefined) {
            return '';
        }
        if (val === null) {
            return key;
        }
        if (Array.isArray(val)) {
            const result = [];
            val.forEach(val2 => {
                if (val2 === undefined) {
                    return;
                }
                if (val2 === null) {
                    result.push(key);
                } else {
                    result.push(key + '=' + val2);
                }
            });
            return result.join('&');
        }
        return key + '=' + val;
    }).filter(x => x.length > 0).join('&') : null;
    return res ? `?${res}` : '';
};

const parseUrl = (location) => {
    if (typeof location === 'string') return location;
    const {path, query} = location;
    const queryStr = stringifyQuery(query);
    return `${path}${queryStr}`;
};

const parseRoute = ($mp) => {
    const _$mp = $mp || {};
    const path = _$mp.page && _$mp.page.route;
    return {
        path: `/${path}`,
        query: _$mp.query,
        hash: '',
        fullPath: parseUrl({
            path: `/${path}`,
            query: _$mp.query
        }),
        name: path && path.replace(/\/(\w)/g, ($0, $1) => $1.toUpperCase())
    };
};

export {parseUrl, parseRoute};