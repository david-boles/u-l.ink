import Button from 'material-ui/Button';
import Input from 'material-ui/Input';
import React, { Component } from 'react';
import CenteringGrid from './CenteringGrid.js';
import CreatedLinkDetails from './CreatedLinkDetails.js';

class LinkCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working: false
    };
  }
  render() {
    return (
      <CenteringGrid>
        <Input placeholder='URL' disabled={this.state.working} style={{marginRight: '10px', flexGrow: 1, minWidth: 0}} inputProps={{'aria-label': 'URL'}}
        />
        <Button variant='raised' color='primary' onClick={this.handleButton} disabled={this.state.working}>
          Shorten
        </Button>
      </CenteringGrid>
    );
  }

  handleButton = () => {
    this.setState({working: true});
    this.props.parent.changeContent(<CreatedLinkDetails parent={this.props.parent}/>);
  }
}

export default LinkCreator;