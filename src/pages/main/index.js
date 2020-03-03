import React, { Component } from 'react';

import "./styles.css"

import api from '../../services/api';

export default class Main extends Component {

    state = {
        products: [],
        productInfo1: {},
    } 


    // Logo que o componente é mostrado em tela 
    componentDidMount(){
        this.loadProducts()
    }

    loadProducts = async () => {
        const response = await api.get('/products');

        const { docs, ...productInfo } = response.data;

        this.setState({ products: response.data.docs }); 
    };

    prevPage = () => {

    };

    nextPage = () => {

    };

    render(){

        const { products} = this.state;

        return (
        <div className="product-list">
            { products.map( product => (
               <article key={product._id}>
                   <strong>{product.title}</strong>
                   <p>{product.description}</p>

                   <a href="/#">Acessar</a>

               </article>
            )) }

            <div className="actions">
                <button>Anterior</button>
                <button>Próximo</button>
            </div>

        </div>
        );
    }
}