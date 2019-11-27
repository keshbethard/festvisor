import React from "react"

import "./visor.scss"

class Visor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      items: []
    };
  }

  saveItem = () => {
    this.setState({ 
      active: !this.state.active,
    })

    this.props.addItem(this.props.id)
  }

  render() {
    const { name, melody, text } = this.props;

    return (
      <div className="single">
        <span className={this.state.active ? 'add active' : 'add'} onClick={this.saveItem}>+</span>
        <div className="title">
          <h4 className="name">{name}</h4>
          <div className="melody">Melodi: {melody}</div>
        </div>
        <p dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    )
  }
}

export default Visor