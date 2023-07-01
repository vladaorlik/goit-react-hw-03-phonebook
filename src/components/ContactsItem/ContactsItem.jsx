import PropTypes from 'prop-types';
import StyledItem from './ContactsItem.styled';
import StyledButton from 'components/Button.styled';

function ContactsItem({name, number, onClick, id}) {

    return (
        <StyledItem><span>{name}:</span><span>{number}</span><StyledButton type="button" onClick={()=>onClick(id)}>Delete</StyledButton></StyledItem>
    )
  }

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired, 
  number: PropTypes.string.isRequired, 
  onClick: PropTypes.func.isRequired, 
  id: PropTypes.string.isRequired,
}  

export default ContactsItem;