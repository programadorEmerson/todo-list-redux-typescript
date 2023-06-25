import React, { Component } from 'react';

import AppBarApp from './AppBar';

export default class Layout extends Component<{ children: React.ReactNode }> {
  render() {
    const { children } = this.props;
    return (
      <AppBarApp>
        {children}
      </AppBarApp>
    );
  }
}
