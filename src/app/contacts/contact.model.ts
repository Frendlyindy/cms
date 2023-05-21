export class Contact {
  public id: String;
  public name: String;
  public email: String;
  public phone: String;
  public imageUrl: String;
  public group: {
    id: String;
    name: String;
    email: String;
    phone: String;
    imageUrl: String;
    group: null;
  }[];

  constructor(
    id: String,
    name: String,
    email: String,
    phone: String,
    imageUrl: String,
    group: {
      id: String;
      name: String;
      email: String;
      phone: String;
      imageUrl: String;
      group: null;
    }[]
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.imageUrl = imageUrl;
    this.group = group;
  }
}
