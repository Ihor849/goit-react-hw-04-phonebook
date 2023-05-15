import propTypes from 'prop-types';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import {
  FormBlock,
  BoxName,
  BoxNumber,
  Input,
  Label,
  Button,
} from './ContactForm.styled';

export default function ContactForm({ onSubmit }) {
  const handleSubmit = ({ name, number }, { resetForm }) => {
    const contact = { id: nanoid(), name, number };
    onSubmit(contact);
    resetForm();
  };

  return (
    <Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit}>
      <FormBlock autoComplete="off">
        <BoxName>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </BoxName>
        <BoxNumber>
          <Label htmlFor="number">Number</Label>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </BoxNumber>

        <Button type="submit">Add contact</Button>
      </FormBlock>
    </Formik>
  );
}

ContactForm.protoTypes = {
  onSubmit: propTypes.func.isRequired,
  contacts: propTypes.arrayOf(propTypes.object).isRequired,
};
