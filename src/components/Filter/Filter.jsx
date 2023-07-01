import PropTypes from 'prop-types';
import StyledFilter from './Filter.styled';

const Filter = ({ handleFilterChange, filter }) => {
  return (
    <StyledFilter>
      Find contacts by name
      <input
        onChange={handleFilterChange}
        type="text"
        name="filter"
        value={filter}
      />
    </StyledFilter>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  handleFilterChange: PropTypes.func.isRequired,
};

export default Filter;
