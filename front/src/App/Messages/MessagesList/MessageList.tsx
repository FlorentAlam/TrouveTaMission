import React, { FunctionComponent } from 'react';
import { IConversation, IMessage } from '../IMessage';
import MessageItem from './MessageItem';

type IMessageList = {
    messages: IConversation[],
    onSelectConversation: (id: number) => void
}


const MessageList: FunctionComponent<IMessageList> = ({messages, onSelectConversation}) => (
    <div className="messages__list">
        <h1>Messages</h1>
        <div className="messages__items">
            {messages.map((message, id) => <MessageItem key={id} message={message} onSelect={() => onSelectConversation(id)}/>)}
        </div>
    </div>
);

export default MessageList;