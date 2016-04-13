import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tooltip } from 'redux-tooltip';
import Content from './content';

class PopoverProfile extends Component {
  static get displayName() {
    return 'PopoverProfile';
  }

  render() {
    const { show, data, status, error } = this.props.profile;

    let content;
    if (error) {
      content = <span>Error</span>;
    } else {
      if (status === 'done' && data) {
        content = <Content data={data} />;
      } else {
        content = <span>Loading...</span>;
      }
    }

    return <Tooltip name="popover-profile">{content}</Tooltip>;
  }
}

function select({ profile }) {
  return { profile };
}

export default connect(select)(PopoverProfile);
