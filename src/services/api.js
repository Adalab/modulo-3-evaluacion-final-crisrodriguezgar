const callToApi = () => {
  return fetch(
    'https://owen-wilson-wow-api.onrender.com/wows/random?results=50'
  )
    .then((response) => response.json())
    .then((dataApi) => {
      const cleanData = dataApi.map((item, i) => {
        return {
          image: item.poster,
          movie: item.movie,
          prhase: item.full_line,
          year: item.year,
          id: i,
        };
      });
      return cleanData;
    });
};

export default callToApi;
