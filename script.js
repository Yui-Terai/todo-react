class List extends React.Component {
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


  removeHandler() {
    let list = this.state.list;

  }

  clickHandler() {
    let newList = this.state.list;
    newList.push(this.state.word);
    this.setState({ list: newList });

    console.log("this is state list:" + this.state.list);
  }

  changeHandler(event) {
    this.setState({ word: event.target.value });
    console.log("change", event.target.value);
  }

  render() {
    // render the list with a map() here
    const listItems = this.state.list.map((item, index) => {
      return <div>
                <li key={index}>{item}</li>
                <button
                  onClick={() => {
                    this.removeHandler();
                  }}
                >
                  delete
                </button>
            </div>
    });


    console.log("rendering");
    return (
      <div className="list">
        <input onChange={this.changeHandler} value={this.state.word} />
        <button
          onClick={() => {
            this.clickHandler();
          }}
        >
          add Item
        </button>
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<List />, document.getElementById("root"));
