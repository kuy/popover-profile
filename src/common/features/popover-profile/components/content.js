import React, { Component } from 'react';
import Avatar from 'material-ui/lib/avatar';

export default class Content extends Component {
  static get displayName() {
    return 'Content';
  }

  render() {
    const { data } = this.props;
    return <div style={{ textAlign: 'center' }}>
      <Avatar style={{ display: 'block', margin: '0 auto' }}>{data.letter}</Avatar>
      <p style={{ margin: '8px 0 4px' }}>
        <b>{data.name}</b>
      </p>
    </div>;
  }
}
