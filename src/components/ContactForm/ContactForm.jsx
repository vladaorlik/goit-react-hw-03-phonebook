import { Component } from 'react';
import PropTypes from 'prop-types';
import StyledForm from './ContactForm.styled';
import StyledButton from 'components/Button.styled';

class ContactForm extends Component {
  static propTypes = {
    getFormData: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };



  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const contact = {
      name: this.state.name,
      number: this.state.number,
    };
    const { getFormData } = this.props;
    console.log('getFormData :>> ', getFormData);

    this.props.getFormData(contact);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            onChange={this.handleChange}
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <StyledButton type="submit">Add contact</StyledButton>
      </StyledForm>
    );
  }
}

export default ContactForm;
