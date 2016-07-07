import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};


class ButtonApp extends React.Component {

   render(){
      return (
      <div>
          <Paper style={style} zDepth={2} />
      </div>
      );
   }
}

export default ButtonApp;
