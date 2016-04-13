import React, { Component } from 'react';

const style = {
  paddingTop: '8px',
  color: '#666'
};

// NOTE: Poor implementation ;)
function parse(props) {
  let { children: text } = props;
  const { onHover, onLeave } = props;
  let children = [], pos;
  while (0 < text.length) {
    // Find '@' char
    const pos = text.indexOf('@');
    if (pos !== -1) {
      children.push(<span>{text.slice(0, pos)}</span>);
      text = text.slice(pos);

      // Find space char
      const spos = text.indexOf(' ');
      let caption;
      if (spos !== -1) {
        caption = text.slice(0, spos);
        text = text.slice(spos);
      } else {
        caption = text;
        text = '';
      }

      // Insert clickable username
      const username = caption.slice(1);
      children.push(
        <a
          href='#'
          onMouseEnter={e => onHover(e, username)}
          onMouseLeave={e => onLeave(e)}
        >
          {caption}
        </a>
      );
    } else {
      children.push(<span>{text}</span>);
      text = '';
    }
  }
  return children;
}

export default class Body extends Component {
  static get displayName() {
    return 'Body';
  }

  render() {
    const body = parse(this.props);
    return <div style={style}>{body}</div>;
  }
}
