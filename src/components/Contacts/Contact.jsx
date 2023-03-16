import PropTypes from 'prop-types';
import { ContactBtn } from 'components/Contacts/';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/actions';

// import css from './Contacts.module.css';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  console.log(contact.number);
  return (
    <>
      {`${contact.name}: ${contact.number}`}
      <ContactBtn type="button" onClick={handleDelete}>
        Delete
      </ContactBtn>
    </>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  // onClick: PropTypes.func.isRequired,
};
