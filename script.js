class Itemlist extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      word: ""
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.removeHandler = this.removeHandler.bind(this);
  }

  changeHandler(event) {
    this.setState({ word: event.target.value });
    console.log("change", event.target.value);
  }


  clickHandler() {
    let newList = this.state.list;
    newList.push(this.state.word);
    this.setState({ list: newList });

    console.log("this is state list:" + this.state.list);
  }



  removeHandler = index => {
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({ list: list });
  };


  render() {
    return(
      <div>
        <Form changeHandler = { (event) => {this.changeHandler(event)} } clickHandler = { () => {this.clickHandler()} } word = {this.state.word} />
        <TodoItem removeHandler = { (index) => {this.removeHandler(index)} } list = {this.state.list} />
      </div>
    )
  }
}






class Form extends React.Component {
  render() {
    return(
      <div className="list">
        <input onChange = { (event) => {this.props.changeHandler(event)} } value={this.props.word}/>
        <button
          onClick = {() => {  
            this.props.clickHandler();
          }}
        >
          add Item
        </button> 
      </div>
    )
  }
}









class TodoItem extends React.Component {
  render() {
    const listItems = this.props.list.map((item, index) => {
            return (
              <div key={index}>
                <li>{item}</li>
                <button name={index} onClick={() => this.props.removeHandler(index)}>
                  delete
                </button>
              </div>
            );
          });
    return(
      <div>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
}








// class List extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       list: [],
//       word: ""
//     };
//     this.changeHandler = this.changeHandler.bind(this);
//     this.clickHandler = this.clickHandler.bind(this);
//     this.removeHandler = this.removeHandler.bind(this);
//   }

//   removeHandler = index => {
//     let list = this.state.list;
//     list.splice(index, 1);
//     this.setState({ list: list });
//   };

//   clickHandler() {
//     let newList = this.state.list;
//     newList.push(this.state.word);
//     this.setState({ list: newList });

//     console.log("this is state list:" + this.state.list);
//   }

//   changeHandler(event) {
//     this.setState({ word: event.target.value });
//     console.log("change", event.target.value);
//   }

//   render() {
//     // render the list with a map() here
//     const listItems = this.state.list.map((item, index) => {
//       return (
//         <div key={index}>
//           <li>{item}</li>
//           <button name={index} onClick={() => this.removeHandler(index)}>
//             delete
//           </button>
//         </div>
//       );
//     });

//     console.log("rendering");
//     return (
//       <div className="list">
//         <input onChange={this.changeHandler} value={this.state.word} />
//         <button
//           onClick={() => {
//             this.clickHandler();
//           }}
//         >
//           add Item
//         </button>
//         <ul>{listItems}</ul>
//       </div>
//     );
//   }
// }

ReactDOM.render(<Itemlist />, document.getElementById("root"));
