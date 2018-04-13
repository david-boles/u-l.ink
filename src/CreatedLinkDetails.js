import ContentCopy from '@material-ui/icons/ContentCopy';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import React, { Component } from 'react';
import LinkCreator from './LinkCreator';

class CreatedLinkDetails extends Component {
  render() {
    return (
      <div style={{ overflowX: 'hidden', height: '100%' }}>
        <Grid container direction='column' justify='space-around' alignItems='center' style={{height: '100%'} }>
          <Grid item/>

          <Grid item>
            <Typography variant='display1' style={{marginTop: '40px'}}>
              {this.props.ulink}
              <IconButton aria-label="Copy to Clipboard" onClick={this.handleCopyButton}>
                <ContentCopy/>
              </IconButton>
            </Typography>
          </Grid>
          
          {/*<Grid item>
            <FormControlLabel control={<Checkbox />} label="Safe" style={{marginRight: 0}} />
          </Grid>*/}

          <Grid item>
            <Button variant='raised'  color='primary' onClick={this.handleNewButton}>
              New
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }

  handleNewButton = () => {
    this.props.parent.changeContent(<LinkCreator parent={this.props.parent}/>);
  }

  handleCopyButton = () => {
    navigator.clipboard.writeText(this.props.ulink);
  }
}

export default CreatedLinkDetails;