export enum Sender {
    SELF,
    BOT
}
export type MessageType = {
    id: string,
    sender: Sender,
    content : string,
    time : string
}

export type FormType = {prompt : string}