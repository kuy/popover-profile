import React, { Component } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/lib/card';
import { Avatar } from 'material-ui/lib';
import { Body } from '../../common/components';

export default class MessageItem extends Component {
  static get displayName() {
    return 'MessageItem';
  }

  render() {
    const { data, onHover, onLeave } = this.props;
    return <Card style={{ marginTop: '8px' }}>
      <CardHeader
        title={<span onMouseEnter={e => onHover(e, data.username)}
                     onMouseLeave={e => onLeave(e)}>
          {data.username}
        </span>}
        avatar={<Avatar onMouseEnter={e => onHover(e, data.username)}
                        onMouseLeave={e => onLeave(e)}>
          {data.username[0].toUpperCase()}
        </Avatar>}
      />
      <CardText>
        <Body>
          {data.body}
        </Body>
      </CardText>
    </Card>;
  }
}
