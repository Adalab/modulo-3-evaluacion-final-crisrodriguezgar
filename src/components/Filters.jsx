import FilterByMovie from './FilterByMovie';
import FilterByYear from './FilterByYear';

const Filters = ({movieFilter, handleChange, yearFilter, handleChangeYear, years}) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <FilterByMovie movieFilter={movieFilter} handleChange={handleChange} />
      <FilterByYear yearFilter={yearFilter}  handleChangeYear={handleChangeYear} years={years}/>
    </form>
  );
};

export default Filters;
