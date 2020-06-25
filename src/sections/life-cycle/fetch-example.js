import React, { Component } from "react";

class FetchExample extends Component {
  state = { bpi: {} };

  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(
        (res) => res.json() //Obtiene la promesa del metodo fetch en forma de json
      )
      .then((data) => {
        const { bpi } = data;
        this.setState({ bpi });
        console.log(data);
      });
  }

  _renderCurrencies() {
    console.log("_renderCurrencies");
    const { bpi } = this.state;
    const currencies = Object.keys(bpi); //['EUR','GBP','USD']
    return currencies.map((currency) => (
      <div key={currency}>
        1 BTC is {bpi[currency].rate}
        <span>{currency}</span>
      </div>
    ));
  }

  render() {
    console.log("render");
    return (
      <div>
        <h4>Bitcoin Price Index</h4>
        {this._renderCurrencies()}
      </div>
    );
  }
}

export default FetchExample;
