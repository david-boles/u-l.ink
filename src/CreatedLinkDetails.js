import Button from 'material-ui/Button';
import React, { Component } from 'react';
import CenteringGrid from './CenteringGrid';
import LinkCreator from './LinkCreator';


class CreatedLinkDetails extends Component {
  render() {
    return (
      <CenteringGrid>
        Hi there!
        <br/>
        <Button variant='raised' color='primary' onClick={this.handleButton}>
          New
        </Button>
      </CenteringGrid>
    );
  }

  handleButton = () => {
    this.props.parent.changeContent(<LinkCreator parent={this.props.parent}/>);
  }
}

export default CreatedLinkDetails;