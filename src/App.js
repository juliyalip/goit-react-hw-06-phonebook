import { Component } from "react";
import "./index.css";
import Contacts from "./component/Contacts";
import Filter from "./component/Filter";
import Form from "./component/Form";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './component/contact.css'




import {CSSTransition} from 'react-transition-group'

export default class App extends Component {
// state = {
// contacts: [
    // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
   //   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
 //  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
 //  ],
// filter: "",
//   };

 // componentDidMount() {
 //   const contacts = localStorage.getItem("contacts");
 //   const parsedContacts = JSON.parse(contacts);
 //   console.log(parsedContacts);
 //   console.log("component App DidMount");
 //   if (parsedContacts) {
  //    this.setState({ contacts: parsedContacts });
  //  }
 // }

 // componentDidUpdate(prevProps, prevState) {
 //   console.log("app componentDidUpdate");
 //   if (this.state.contacts !== prevState.contacts) {
 //     console.log("obnovilos pole contact");
  //    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
   // }
 // }

 // handleAddContact = (newContact) => {
  //  this.setState(({ contacts }) => ({
  //    contacts: [...contacts, newContact],
  //  }));
//  };

  //handleCheckUnicue = (name) => {
   // const { contacts } = this.state;
   // const duplicete = !!contacts.find((contact) => contact.name === name);
  //  duplicete && toast.error('contact already  exists')

   // return !duplicete;
  //};



//  hangleDelete = (contactId) => {
//    this.setState((prevState) => ({
//      contacts: prevState.contacts.filter(
//        (contact) => contact.id !== contactId
//      ),
//    }));
//  };

  //changleFilter = (e) => {
  //  this.setState({ filter: e.currentTarget.value });
  //};

  render() {
 //   const normalizeFilter = this.state.filter.toLowerCase();
  //  const visibleContacts = this.state.contacts.filter((contact) =>
     // contact.name.toLowerCase().includes(normalizeFilter)
  //  );

    return (
      <>
        <div className="container">

        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames="title"
          unmountOnExit
        >
          <h1 className="title">Phonebook</h1>
        </CSSTransition>
        

       

     
        
          <Form />

          <h2>Contacts</h2>
          <Filter />

       {/*   <CSSTransition in={this.state.contacts.length > 0 } classNames="contactItem" timeout={250} unmountOnExit>  */}
                <>
      { /*     <Filter value={this.state.filter} onChange={this.changleFilter} />    */}
            
            {/*      <Contacts persons={visibleContacts} onDelete={this.hangleDelete} />   */}
            <Contacts />
                    
          </>
          
      {/*  </CSSTransition>   */  }
       
          
      
          <ToastContainer autoClose={250} position="top-left"/> 
         
        </div>
      </>
    );
  }
}