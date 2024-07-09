function getPicturesByQuery(query) {
  const API_KEY = '44853639-2309de7343cad235f23b575f4';

  return fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`)
    .then(
      (res) => {
        console.log(res);
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      }
    );
}


export { getPicturesByQuery }