export interface IMessage {
    envoyeur: string,
    contenu: string
}

export interface IConversation {
    messages: IMessage[]
}