import React from 'react';

const FilterByMovie = ({movieFilter, handleChange}) => {
  const handleInput = (ev) => {
    handleChange(ev.target.value);
    console.log('estoy escribiendo en el input')
  };
  return (
    <label htmlFor="">
      Película
      <input
        className="form__input"
        type="text"
        name="movie"
        value={movieFilter}
        onChange={handleInput}
      />
    </label>
  );
};

export default FilterByMovie;
