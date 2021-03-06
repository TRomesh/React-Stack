import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

const ListExampleChat = () => (
  <div>
    <List>
      <Subheader>Recent chats</Subheader>
      <ListItem
        primaryText="Brendan Lim"
        leftAvatar={<Avatar src="http://zblogged.com/wp-content/uploads/2015/11/17.jpg" />}
        rightIcon={<CommunicationChatBubble />}
      />
      <ListItem
        primaryText="Eric Hoffman"
        leftAvatar={<Avatar src="http://zblogged.com/wp-content/uploads/2015/11/17.jpg" />}
        rightIcon={<CommunicationChatBubble />}
      />
      <ListItem
        primaryText="Grace Ng"
        leftAvatar={<Avatar src="http://zblogged.com/wp-content/uploads/2015/11/17.jpg" />}
        rightIcon={<CommunicationChatBubble />}
      />
      <ListItem
        primaryText="Kerem Suer"
        leftAvatar={<Avatar src="http://zblogged.com/wp-content/uploads/2015/11/17.jpg" />}
        rightIcon={<CommunicationChatBubble />}
      />
      <ListItem
        primaryText="Raquel Parrado"
        leftAvatar={<Avatar src="http://zblogged.com/wp-content/uploads/2015/11/17.jpg" />}
        rightIcon={<CommunicationChatBubble />}
      />
    </List>
    <Divider />
    <List>
      <Subheader>Previous chats</Subheader>
      <ListItem
        primaryText="Chelsea Otakan"
        leftAvatar={<Avatar src="http://zblogged.com/wp-content/uploads/2015/11/17.jpg" />}
      />
      <ListItem
        primaryText="James Anderson"
        leftAvatar={<Avatar src="http://zblogged.com/wp-content/uploads/2015/11/17.jpg" />}
      />
    </List>
    </div>
);

export default ListExampleChat;
