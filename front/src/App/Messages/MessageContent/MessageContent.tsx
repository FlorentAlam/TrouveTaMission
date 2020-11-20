import React, { FunctionComponent, useState } from 'react';
import { FiSend } from 'react-icons/fi';
import { IConversation } from '../IMessage';

type IMessageContent = {
    messages: IConversation,
    onAddMessage: (message: string) => void
}

const MessageContent: FunctionComponent<IMessageContent> = ({messages, onAddMessage}) => {
    
    const [message, setMessage] = useState('');

    return (
    <div className="messages__content">
        <div className="messages__messages">
            {messages.messages.map((mess, id) => (
                <div className="messages__message">
                    <p>{mess.contenu}</p>
                </div>
            ))}
        </div>
        <div className="messages__message-input">
            <textarea rows={4} value={message} onChange={e => setMessage(e.target.value)}/>
            <button className="bg-primary" onClick={() => onAddMessage(message)}><FiSend/></button> 
        </div>
    </div>
)};

export default MessageContent;