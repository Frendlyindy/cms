export class Message {
  public id: String;
  public subject?: String;
  public msgText?: String;
  public sender?: String;

  constructor(id: String, subject: String, msgText: String, sender: String) {
    this.id = id;
    this.subject = subject;
    this.msgText = msgText;
    this.sender = sender;
  }
}
