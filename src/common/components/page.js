import React, { Component } from 'react';
import AppBar from 'material-ui/lib/app-bar';

export default class Page extends Component {
  static get displayName() {
    return 'Page';
  }

  get title() {
    return 'Timeline';
  }

  get content() {
    return null;
  }

  render() {
    return (
      <div>
        <AppBar
          {...this.appBarProps}
          title={this.title}
        />
        {this.content}
      </div>
    );
  }
}
