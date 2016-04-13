import React from 'react';
import { connect } from 'react-redux';
import { Page, Body } from '../../common/components';
import MessageItem from '../components/message-item';
import PopoverProfile, { actions as profile } from '../../common/features/popover-profile';

class Message extends Page {
  static get displayName() {
    return 'Message';
  }

  constructor(props) {
    super(props);
    this.handleHover = this.handleHover.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }

  handleHover(e, username) {
    this.props.dispatch(profile.showProfile({ username, el: e.target }));
  }

  handleLeave(e) {
    this.props.dispatch(profile.hideProfile());
  }

  get title() {
    return 'Message';
  }

  get content() {
    const { items } = this.props.app;
    return <div>
      {items.map(item => (
        <MessageItem data={item} onHover={this.handleHover} onLeave={this.handleLeave} />
      ))}
      <PopoverProfile />
    </div>;
  }
}

function select({ app }) {
  return { app };
}

export default connect(select)(Message);
