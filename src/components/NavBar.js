import { BsFillPersonFill } from 'react-icons/all';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryFilter from './CategoryFilter';
import { changeFilter } from '../actions/index';

function NavBar({ changeFilter }) {
  const handleFilterChange = filter => {
    changeFilter(filter);
  };

  return (
    <nav className="flex flex-col md:flex-row px-12 pt-8 pb-4 bg-white border-b-1 border-black">
      <div className="flex flex-col md:flex-row md:justify-between md:w-1/2 items-baseline">
        <h1 className="montserrat text-blue-500 text-2xl font-bold">Bookstore CMS</h1>
        <div className="flex w-full md:w-1/2 justify-between my-4 md:my-0">
          <p className="montserrat text-xs">BOOKS</p>
          <div className="montserrat text-gray-500 text-xs"><CategoryFilter onChangeHandler={handleFilterChange} /></div>
        </div>
      </div>
      <div className="flex w-1/2 justify-end items-end">
        <div className="p-1 border border-gray-300 rounded-full hidden md:block">
          <BsFillPersonFill className="text-blue-500 text-2xl" />
        </div>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default connect(null, { changeFilter })(NavBar);
