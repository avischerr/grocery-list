import React from "react";
import GroceryItem from "./GroceryItem.jsx";
import axios from "axios";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gList: [],
      GroceryItem: "",
    };
  }

  componentDidMount() {}

  addItem() {
    // onclick handler, bind to submit button
    // use HTTP request to send info to server
    // server adds to storage
    // get request to get storage from server to front end
    // setstate into gList using get return
    // set groceryitem prop back to empty string
  }

  updateItem(event) {
    console.log(event.target.value);
    event.preventDefault();
    this.setState({
      GroceryItem: event.target.value,
    });
    // event handler fires updateitem
  }

  render() {
    return (
      <div>
        <input placeholder="Add Item" />
        <button>Submit</button>
        <ul>
          <GroceryItem shoppingList={this.state.gList}/>
        </ul>
      </div>
    );
  }
}
