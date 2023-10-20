import FilterByMovie from './FilterByMovie';
import FilterByYear from './FilterByYear';

const Filters = ({movieFilter, handleChange}) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <FilterByMovie movieFilter={movieFilter} handleChange={handleChange} />
      <FilterByYear />
    </form>
  );
};

export default Filters;
