import { useDispatch, useSelector } from 'react-redux';
import { FilterInput, FindLabel } from './ContactFilter.styled';
import { setFilter } from 'redux/filterSlice';

export const ContactFilter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleChangeFilter = evt => {
    const query = evt.currentTarget.value;
    dispatch(setFilter(query));
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
