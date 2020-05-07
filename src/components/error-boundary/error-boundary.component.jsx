import React from 'react';

import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './error.boundary.styles';

class ErrorBoundary extends React.Component {
  constructor(){
    super();

    this.state = {
      hasErroed: false
    };
  }

  static getDerivedStateFromError(error) {

    return { hasErroed: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErroed) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/yW2W9SC.png'/>
          <ErrorImageText>Sorry this page is broken</ErrorImageText>
        </ErrorImageOverlay>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;