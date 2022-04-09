import PropTypes from 'prop-types'
import { Component } from "react"

export class ContactForm extends Component{
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    }
    state = {
        name: '',
        number: '',
    }
    
    //   handleChange = e => {
    // this.setState({ name: e.target.value });
    // };
    //  handleNumChange = e => {
    // this.setState({number: e.target.value})
    // }
    handleChange = e => {
        const { name, value } = e.target
        this.setState({[name]: value})
   }
    handleSubmit = e => {
        e.preventDefault();
        const { onSubmit } = this.props;
        onSubmit(this.state);
        e.target.reset();
  }

    render() {
            const { name, number } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor={this.nameInputId}> Name 
                    <input
                        onChange={this.handleChange}
                        type="text"
                        name="name"
                        value={name}
                        id={this.nameInputId}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                    </label>
                <label htmlFor={this.numberInputId}> Number 
                    <input
                        onChange={this.handleChange}
                        type="tel"
                        name="number"
                        value={number}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                />
          </label>
                <button type="submit">Add contact</button>
            </form>
        )
    }
}