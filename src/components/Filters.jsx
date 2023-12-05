import FilterByMovie from './FilterByMovie';
import FilterByYear from './FilterByYear';

const Filters = ({
  movieFilter,
  handleChange,
  yearFilter,
  handleChangeYear,
  years,
  handleResetButton,
}) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  const handleReset = () => {
    handleResetButton('');
  };

  return (
    <form classNameName="form" onSubmit={handleSubmit}>
      <FilterByMovie movieFilter={movieFilter} handleChange={handleChange} />
      <FilterByYear
        yearFilter={yearFilter}
        handleChangeYear={handleChangeYear}
        years={years}
      />

      <i
        className="fa-solid fa-trash-can fa-2xl form__btn"
        onClick={handleReset}
      ></i>
    </form>
  );
};

export default Filters;
