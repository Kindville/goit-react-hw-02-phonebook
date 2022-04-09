import { Component } from "react";
import {ContactForm} from "components/ContactForm"
import { nanoid } from 'nanoid'

export class App extends Component {
  state = {
    contacts: [],
    filter:'',
  } 
    nameInputId = nanoid();
  numberInputId = nanoid();
  
  addContact = ({name, number}) => {
    
    const newContact = [...this.state.contacts]
    newContact.push(this.state.name)
    this.setState({ contacts: newContact })
    // e.target.reset()
  }
  handleDelete = index => {
    // console.log(index);
    const newArray= this.state.contacts.filter((contact, i) => i!== index)
    // console.log(deleteElm);
    this.setState({contacts: newArray})
  }
  

/*/**
 * 
contacts = [
  {
  name: 'Jack'
  number: '444-333'
  },
   {
  name: 'John'
  number: '141-333'
  }
]
create Object
const Obj = {}
Obj.name = e.target.value (this.state.name)
Obj.number= this.state.number
 */
  render() {
    return (
      <div> 
      <h2> Phonebook </h2>
        <ContactForm
          onSubmit={this.addContact}
        />
         <h2> Contacts </h2>
        <ul> 
         {this.state.contacts.map((contact, index)=> <li key={index}>{contact} <button type='button' onClick={()=> this.handleDelete(index)}> Delete</button> </li>)  } 
        </ul>

        </div>
    )
  }
 
};
