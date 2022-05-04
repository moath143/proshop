import React, { Component } from 'react';
import { Card } from "react-bootstrap";
import axios from "axios";



const categoriesUrl = `http://localhost:8000/categories`;

class CategoriesItem extends Component {

      state = {
    categories: [],
  };

  componentDidMount() {
    axios.get(categoriesUrl).then((res) => {
      this.setState({
        categories: res.data,
      });
    });
  }
    render() { 
            const { categories } = this.state;
    const categoriesList = categories.map((category, index) => {
      return (
        <Card key={index}>
          <a href="#">
            <div className="img">
              <Card.Img variant="top" src={category.image} />
            </div>
            <Card.Body>
              <Card.Title className="text-center">{category.title}</Card.Title>
            </Card.Body>
          </a>
        </Card>
      );
    });
        return <>{categoriesList}</>;
    }
}
 
export default CategoriesItem;