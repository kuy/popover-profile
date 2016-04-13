import React from 'react';
import { connect } from 'react-redux';
import { Page, Body } from '../../common/components';
import { List, ListItem } from 'material-ui/lib/lists';
import { Avatar, Divider } from 'material-ui/lib';
import PopoverProfile, { actions as profile } from '../../common/features/popover-profile';

class Timeline extends Page {
  static get displayName() {
    return 'Timeline';
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
    return 'Timeline';
  }

  get content() {
    const { items } = this.props.app;
    return <div>
      <List>
        {items.map((item, index) => (
          <div key={`${item.id}-${index}`}>
            <ListItem
              leftAvatar={<Avatar onMouseEnter={e => this.handleHover(e, item.username)}
                                  onMouseLeave={e => this.handleLeave(e)}>
                {item.username[0].toUpperCase()}
              </Avatar>}
              primaryText={<span onMouseEnter={e => this.handleHover(e, item.username)}
                                 onMouseLeave={e => this.handleLeave(e)}>
                {item.username}
              </span>}
              secondaryText={
                <Body onHover={this.handleHover} onLeave={this.handleLeave}>
                  {item.body}
                </Body>
              }
            />
            <Divider inset={true} />
          </div>
        ))}
      </List>
      <PopoverProfile />
    </div>;
  }
}

function select({ app }) {
  return { app };
}

export default connect(select)(Timeline);
