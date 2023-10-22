const callToApi = () => {
  return fetch(
    'https://owen-wilson-wow-api.onrender.com/wows/random?results=50'
  )
    .then((response) => response.json())
    .then((dataApi) => {
      const cleanData = dataApi.map((item, i) => {
        return {
          id: i,
          image: item.poster,
          movie: item.movie,
          quote: item.full_line,
          director: item.director,
          year: item.year,
          audio: item.audio,
        };
      });
      return cleanData;
    });
};

export default callToApi;
