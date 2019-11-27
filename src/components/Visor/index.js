import React from "react"
import data from '../../components/utilities/snapsvisor'
import Visa from './visa'

import "./visor.scss"

class Visor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  addItem = item => {
    if(!this.state.items.includes(item)){
      this.state.items.push(item);
      this.setState({ 
        items: this.state.items,
      })
    } else {
      const index = this.state.items.indexOf(item);
      this.state.items.splice(index, 1);
    }

    this.props.checkout(this.state.items)
  }

  render() {
    const { category } = this.props;

    return (
      <div className="blocks">
        {data.map(item => item.category.includes(category) && (
          <Visa 
            key={item.id}
            id={item.id}
            name={item.name} 
            melody={item.melody} 
            text={item.text}
            addItem={this.addItem}
          />
        ))}
      </div>
    )
  }
}

export default Visor