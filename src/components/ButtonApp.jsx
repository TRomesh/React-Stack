import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';


class ButtonApp extends React.Component {

   render(){
      return (
      <div>
            <RaisedButton label="Primary" primary={true} />
      </div>
      );
   }
}

export default ButtonApp;
