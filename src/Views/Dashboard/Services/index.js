import React, { Component } from 'react'
import Service from './Component/Service'

export default class Homepage extends Component {
    constructor(props) {
        super(props);
      }
    render() {
            const { match } = this.props;

        return (
            <div>
                <Service />
               
                {<h1>haai Service</h1>}
            </div>
        )
    }
}

