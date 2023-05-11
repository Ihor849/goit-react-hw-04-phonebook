import propTypes from 'prop-types';
import { BoxFilter, Label, Input } from './ContactFilter.styled';

export const ContactFilter = ({ filter, onFilter, dis }) => {
  return (
    <BoxFilter>
      <Label htmlFor="filter">Find contacts by name</Label>

      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={onFilter}
        disabled={dis}
      />
    </BoxFilter>
  );
};

ContactFilter.propEypes = {
  filter: propTypes.string,
  onFilter: propTypes.func,
};
