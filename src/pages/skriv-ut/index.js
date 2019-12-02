import React from "react"
import data from '../../components/utilities/snapsvisor'
import logo from '../../images/festvisor-gray.png'
import "./style.scss"

class SkrivUt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('visor');
    const result = data.filter(({id}) => myParam.includes(id));

    this.setState({ 
      items: result,
    })
  }

  render() {
    return (
      <div className="print">
        <input type="text" placeholder="Ange titel för kalaset!"></input><br/>
        <img src={logo} alt="festvisor" title="festvisor" />
        <div className="print-blocks">
          {this.state.items.map(item => (
            <div className="print-single" key={item.id}>
              <div className="title">
                <h4 className="name">{item.name}</h4>
                <div className="melody">Melodi: {item.melody}</div>
              </div>
              <p dangerouslySetInnerHTML={{ __html: item.text }} />
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default SkrivUt
