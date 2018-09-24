import React, { Component } from 'react'
import { Desktop } from './Desktop'
import { Mobile } from './Mobile';

export class CurrentInterns extends Component {
  render() {
    return (
      <div>
        <Desktop />
        <Mobile />
      </div>
    )
  }
}