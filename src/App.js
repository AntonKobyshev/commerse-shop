import React  from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Chair grey',
          img: 'chair_grey.jpg',
          desc: 'lorem ipsum dolor sit amet, consectur adipisicing.',
          category: 'chairs',
          price: '49.99'
        },
         {
          id: 2,
          title: 'Table',
          img: 'table.jpg',
          desc: 'lorem ipsum dolor sit amet, consectur adipisicing.',
          category: 'tables',
          price: '149.99'
        } ,
          {
          id: 3,
          title: 'Sofa',
          img: 'sofa.jpg',
          desc: 'lorem ipsum dolor sit amet, consectur adipisicing.',
          category: 'sofas',
          price: '249.99'
        },
           {
          id: 4,
          title: 'Chair black',
          img: 'chair_black.jpg',
          desc: 'lorem ipsum dolor sit amet, consectur adipisicing.',
          category: 'chairs',
          price: '39.99'
        } ,
 {
          id: 5,
          title: 'Chair white',
          img: 'Chair_white.jpg',
          desc: 'lorem ipsum dolor sit amet, consectur adipisicing.',
          category: 'chairs',
          price: '69.99'
        } ,
 {
          id: 6,
          title: 'Wall light',
          img: 'Wall_light.jpg',
          desc: 'lorem ipsum dolor sit amet, consectur adipisicing.',
          category: 'lights',
          price: '29.99'
        } 
      ]

    }
    this.addToOrder = this.addToOrder.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  addToOrder(item) {
    this.setState({ orders: [...this.state.orders, item] }
    )
  }
}

export default App;
