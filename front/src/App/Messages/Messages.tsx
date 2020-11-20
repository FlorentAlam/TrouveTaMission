import React, { useState } from 'react';
import MessageContent from './MessageContent/MessageContent';
import MessageList from './MessagesList/MessageList';
import './Messages.scss';
import { IConversation, IMessage } from './IMessage';

const dummyMessage: IConversation[] = [
    {
        messages: [{
            envoyeur: "Pierre",
            contenu: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae est hic ab veniam facilis quos, tempore nam! Vero omnis cumque quod maiores quibusdam distinctio voluptatum consequatur, officiis odio provident iste."
        },{
            envoyeur: "Jean",
            contenu: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae est hic ab veniam facilis quos, tempore nam! Vero omnis cumque quod maiores quibusdam distinctio voluptatum consequatur, officiis odio provident iste."
        },{
            envoyeur: "Pierre",
            contenu: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae est hic ab veniam facilis quos, tempore nam! Vero omnis cumque quod maiores quibusdam distinctio voluptatum consequatur, officiis odio provident iste."
        },{
            envoyeur: "Jean",
            contenu: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae est hic ab veniam facilis quos, tempore nam! Vero omnis cumque quod maiores quibusdam distinctio voluptatum consequatur, officiis odio provident iste."
        }]
        
    },{
        messages: [{
            envoyeur: "Pierre",
            contenu: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae est hic ab veniam facilis quos, tempore nam! Vero omnis cumque quod maiores quibusdam distinctio voluptatum consequatur, officiis odio provident iste."
        },{
            envoyeur: "Jean",
            contenu: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae est hic ab veniam facilis quos, tempore nam! Vero omnis cumque quod maiores quibusdam distinctio voluptatum consequatur, officiis odio provident iste."
        },{
            envoyeur: "Pierre",
            contenu: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae est hic ab veniam facilis quos, tempore nam! Vero omnis cumque quod maiores quibusdam distinctio voluptatum consequatur, officiis odio provident iste."
        },{
            envoyeur: "Jean",
            contenu: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae est hic ab veniam facilis quos, tempore nam! Vero omnis cumque quod maiores quibusdam distinctio voluptatum consequatur, officiis odio provident iste."
        }]
        
    },{
        messages: [{
            envoyeur: "Pierre",
            contenu: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae est hic ab veniam facilis quos, tempore nam! Vero omnis cumque quod maiores quibusdam distinctio voluptatum consequatur, officiis odio provident iste."
        },{
            envoyeur: "Jean",
            contenu: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae est hic ab veniam facilis quos, tempore nam! Vero omnis cumque quod maiores quibusdam distinctio voluptatum consequatur, officiis odio provident iste."
        },{
            envoyeur: "Pierre",
            contenu: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae est hic ab veniam facilis quos, tempore nam! Vero omnis cumque quod maiores quibusdam distinctio voluptatum consequatur, officiis odio provident iste."
        },{
            envoyeur: "Jean",
            contenu: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae est hic ab veniam facilis quos, tempore nam! Vero omnis cumque quod maiores quibusdam distinctio voluptatum consequatur, officiis odio provident iste."
        }]
        
    },{
        messages: [{
            envoyeur: "Damien",
            contenu: "ipsum dolor sit amet consectetur adipisicing elit. Molestiae est hic ab veniam facilis quos, tempore nam! Vero omnis cumque quod maiores quibusdam distinctio voluptatum consequatur, officiis odio provident iste."
        },{
            envoyeur: "Jean",
            contenu: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae est hic ab veniam facilis quos, tempore nam! Vero omnis cumque quod maiores quibusdam distinctio voluptatum consequatur, officiis odio provident iste."
        },{
            envoyeur: "Pierre",
            contenu: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae est hic ab veniam facilis quos, tempore nam! Vero omnis cumque quod maiores quibusdam distinctio voluptatum consequatur, officiis odio provident iste."
        },{
            envoyeur: "Jean",
            contenu: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae est hic ab veniam facilis quos, tempore nam! Vero omnis cumque quod maiores quibusdam distinctio voluptatum consequatur, officiis odio provident iste."
        }]
        
    }
]

const Messages = () => {
    const [selectedConversation, setSelectedConversation] = useState(0);
    const [dummy, setDummy] = useState(dummyMessage);

    const addMessage = (message: string, conversation_id: number) => {
        const dumb = [...dummy];

        dumb[conversation_id].messages.push({envoyeur: '', contenu: message});
        setDummy(dumb);
    }

    return (
    <div className="page messages">
        <MessageList messages={dummyMessage} onSelectConversation={id => setSelectedConversation(id)}/>
        <MessageContent messages={dummyMessage[selectedConversation]} onAddMessage={(message) => addMessage(message, selectedConversation)}/>
    </div>
)};

export default Messages;