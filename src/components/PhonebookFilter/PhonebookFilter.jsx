import PropTypes from 'prop-types';
import { React } from 'react';
import { FilterForm, FilterInput } from './PhonebookFilter.styled';

const PhonebookFilter = ({ value, onSearch }) => {
  const handleSearch = event => {
    onSearch(event.currentTarget.value);
  };
  return (
    <FilterForm>
      <label>
        Search contact by name
        <br />
        <FilterInput
          type="text"
          name="search"
          value={value}
          onChange={handleSearch}
        ></FilterInput>
      </label>
    </FilterForm>
  );
};

export default PhonebookFilter;

PhonebookFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};
