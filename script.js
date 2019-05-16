class Itemlist extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      word: "",
      error: "",
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.removeHandler = this.removeHandler.bind(this);
  }

  changeHandler(event) {
    this.setState({ word: event.target.value });
    // console.log("change", event.target.value);
  }


  clickHandler() {
    let newList = this.state.list;
    let removeWord = "";
    

    if(this.state.word.length < 1 || this.state.word.length > 10) {
      this.setState({error: "Accept only between 1 to 10 words!!! Type again!"});
    } else {
      newList.push({
      "word": this.state.word,
      "date": moment().format('MMMM Do YYYY, h:mm:ss a')
    });
      this.setState({ list: newList, word: removeWord, error: removeWord });
      console.log()
    }
  }



  removeHandler = index => {
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({ list: list });
  };


  render() {
    return(
      <div>
        <Form changeHandler = { (event) => {this.changeHandler(event)} } clickHandler = { () => {this.clickHandler()} } word = {this.state.word} error = {this.state.error}/>
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
        <h5 className="error-message">{this.props.error}</h5>
      </div>
    )
  }
}






class TodoItem extends React.Component {
  render() {
    const listItems = this.props.list.map((item, index) => {
            return (
              <div key={index}>
                <li>{item.word}</li>
                <button name={index} onClick={() => this.props.removeHandler(index)}>
                  delete
                </button>
                <div>{item.date}</div>
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





ReactDOM.render(<Itemlist />, document.getElementById("root"));
