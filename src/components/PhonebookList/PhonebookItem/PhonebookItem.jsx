import PropTypes from 'prop-types';
import {
  ContactItemElement,
  ItemContent,
  ButtonStyled,
} from './PhonebookItem.styled';

const ContactItem = ({ contact, onDelete }) => {
  const { id, name, number } = contact;

  return (
    <ContactItemElement>
      <ItemContent>{name}</ItemContent>
      <ItemContent>{number}</ItemContent>
      <ButtonStyled onClick={() => onDelete(id)}> Delete</ButtonStyled>
    </ContactItemElement>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
};
