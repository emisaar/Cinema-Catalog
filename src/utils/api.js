const buildUrl = (path) => {
    const url = `${path}?api_key=${process.env.REACT_APP_MDB_API_KEY}&language=en-US`;
    return url;
}

const buildUrlRecommended = (id) => {
    const url = `${id}/recommendations?api_key=${process.env.REACT_APP_MDB_API_KEY}&language=en-US`;
    return url;
}

export { buildUrl, buildUrlRecommended };