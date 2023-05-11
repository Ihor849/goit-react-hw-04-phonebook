import propTypes from 'prop-types';
import { Item, Button } from './ContactsItem.styled';

export const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <Item key={id}>
      <span>{name}</span>
      <span>{number}</span>
      <Button type="button" onClick={() => onDelete(id, name)}>
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  name: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
  onDelete: propTypes.func.isRequired,
};
