import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import ContactForm from 'components/ContactForm';

class App extends Component {
  state = {
    // contacts: [],
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if(parsedContacts) {
      this.setState({contacts: parsedContacts});
    }
    
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('prevState.contacts :>> ', prevState.contacts);
    console.log('this.state.contacts :>> ', this.state.contacts);
    if(this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  getFormData = data => {
    console.log('data :>> ', data);
    const dataIncludes = this.state.contacts.find(
      contact => contact.name === data.name
    );
    if (dataIncludes) {
      return alert(`${data.name} is already in contacts`);
    }
    const newData = {
      ...data,
      id: nanoid(),
    };
    
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newData],
    }));
    
  };

  handleFilterChange = e => {
    const target = e.target.value;
    this.setState(prevState => ({
      ...prevState,
      filter: target,
    }));
  };

  handleDelete = id => {
    console.log('id :>> ', id);
    const filtered = this.state.contacts.filter(contact => contact.id !== id);
    this.setState(prevState => ({
      ...prevState,
      contacts: filtered,
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm getFormData={this.getFormData} />
        <h2>Contacts</h2>
        <Filter
          handleFilterChange={this.handleFilterChange}
          filter={this.state.filter}
        />
        <ContactsList
          contacts={this.state.contacts}
          filter={this.state.filter}
          onClick={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;

// handleChange = e => {
//   this.setState({ [e.target.name]: e.target.value });
//   // [e.currentTarget.name]: e.currentTarget.value якщо декілька
// };

// changeFilter = event => {
//   this.setState({
//     filter: event.currentTarget.value,
//   });
// };

// handleFilterChange = (e) => {
//   const target = e.target.value;
//   this.setState(prevState => ({
//     filter: target,
//   }));
// const filtered = this.filteredContacts();

// this.setState(prevState => ({
//   contacts: [filtered, ...prevState.contacts],
// }));
// console.log('this.state.contacts :>> ', this.state.contacts);

// }

// changeFilter = event => {
//   this.setState({
//     filter: event.currentTarget.value,
//   });
// };

// filterContacts = contactId => {
//   this.setState(prevState => ({
//     contacts: prevState.contacts.filter(contact=> contact.id !== contactId),
//   }));
// };

// filteredContacts = () => {
//   const normalizedFilter = this.state.filter.toLowerCase();
//   console.log('normalizedFilter :>> ', normalizedFilter);
//   // чому таке запізнення?
//   return this.state.contacts.filter(contact =>
//     contact.name
//       .toLowerCase()
//       .includes(normalizedFilter),
//   );
// };
