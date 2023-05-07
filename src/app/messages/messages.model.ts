export class Message {
  public id: Number;
  public subject: String;
  public msgText: String;
  public sender: String;

  constructor(id: Number, subject: String, msgText: String, sender: String) {
    this.id = id;
    this.subject = subject;
    this.msgText = msgText;
    this.sender = sender;
  }
}
