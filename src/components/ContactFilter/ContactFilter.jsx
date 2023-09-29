import { useDispatch, useSelector } from 'react-redux';
import { FilterInput, FindLabel } from './ContactFilter.styled';
import { getFilter } from 'redux/filterSelectors';
import { setFilter } from 'redux/filterSlice';

export const ContactFilter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = evt => {
    const query = evt.target.value;
    dispatch(setFilter(query.toLowerCase().trim()));
  };

  return (
    <>
      <FindLabel>Find contacts by name</FindLabel>
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={handleChangeFilter}
      />
    </>
  );
};
