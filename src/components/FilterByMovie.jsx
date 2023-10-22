import React from 'react';

const FilterByMovie = ({movieFilter, handleChange}) => {
  const handleInput = (ev) => {
    handleChange(ev.target.value);
    //console.log('estoy escribiendo en el input');
  };
  return (
    <>
      <input
        className="form__input"
        type="text"
        name="movie"
        placeholder="Busca el título de una película..."
        value={movieFilter}
        onChange={handleInput}
      />
    </>
  );
};

export default FilterByMovie;
