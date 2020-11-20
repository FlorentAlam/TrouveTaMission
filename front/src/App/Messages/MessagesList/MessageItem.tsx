import React, { FunctionComponent } from 'react';
import { IConversation, IMessage } from '../IMessage';

interface IMessageItem{
    message: IConversation,
    onSelect: () => void
}

const MessageItem: FunctionComponent<IMessageItem> = ({message, onSelect}) => (
    <div className="messages__item" onClick={onSelect}>
        <span>{message.messages[0].envoyeur}</span>
        <p>{message.messages[0].contenu.substring(0, 50) + '...'}</p>
    </div>
);

export default MessageItem;