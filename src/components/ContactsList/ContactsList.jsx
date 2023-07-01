import PropTypes from 'prop-types';
import ContactstItem from 'components/ContactsItem';
import StyledList from './ContactsList.styled';

// state={
// conacts: contacts,

// }

function ContactsList({ contacts, filter, onClick }) {
  let filtered = contacts;
  //
  if (filter) {
    const normalizedFilter = filter.toLowerCase();
    console.log('normalizedFilter :>> ', normalizedFilter);
    filtered = contacts.filter(contact =>
      // const filtered
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    // this.setstate prev (state new)
  }
  return (
    <StyledList>
      {filtered.map(contact => {
        return (
          <ContactstItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onClick={onClick}
          />
        );
      })}
    </StyledList>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default ContactsList;
