const FilterByYear = ({yearFilter, handleChangeYear, years}) => {
  const handleSelect = (ev) => {
    handleChangeYear(ev.target.value);
  };

  const renderYears = () => {
    return years.map((year, index) => (
      <option key={index} value={year}>
        {year}
      </option>
    ));
  };
  return (
    <label htmlFor="">
      <select
        className="form__select"
        name="year"
        id="year"
        value={yearFilter}
        onChange={handleSelect}
      >
        <option value="Año">Año</option>
        {renderYears()}
      </select>
    </label>
  );
};

export default FilterByYear;
