import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props){
        super(props);
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Всё',
                },
                {
                    key: 'smart-watch',
                    name: 'Смарт-часы',
                },
                {
                    key: 'headphones',
                    name: 'Наушники',
                },
                {
                    key: 'powerbank',
                    name: 'Внешний Аккумулятор',
                }
            ]
        }
    }
  
    render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.sortingCategory(el.key)} >{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories