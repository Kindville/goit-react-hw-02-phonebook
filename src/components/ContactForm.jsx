import PropTypes from 'prop-types'
import { Component } from "react"
 import { Formik, Form, } from 'formik';
import { Name, Input } from "components/ContactForm.styled"
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required().positive().integer(),
});
const initialValue = {
  name: '',
  number: '',
}
export class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddContact({ ...this.state });
    this.setState({ name: "", number: "" });
    };
    
  render() {
    return (
      <Formik initialValue={initialValue} validationSchema={schema}> 
      <Form onSubmit={this.handleSubmit}>
        <Name >
          Name
          <Input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </Name>
        <Name >
          Number
          <Input
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </Name>
        <button  type="submit">
          Add contact
        </button>
        </Form>
        </Formik>
    );
  }
}
  ContactForm.propTypes = {
    onAddContact: PropTypes.func.isRequired,
    }