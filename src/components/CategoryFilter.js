import PropTypes from 'prop-types';

const CategoryFilter = ({ onChangeHandler }) => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <div className="category-filter">
      <label htmlFor="category" className="pr-4">
        CATEGORY
        <select name="category" id="category" onChange={e => onChangeHandler(e.target.value)}>
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

CategoryFilter.propTypes = {
  onChangeHandler: PropTypes.func.isRequired,
};

export default CategoryFilter;
