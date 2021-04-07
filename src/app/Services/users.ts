export class Users {
    static UserId(UserId: any) {
      throw new Error('Method not implemented.');
    }
    UserId: Number;
    FirstName: String;
    LastName: String;
    Email: String;
    Username: String;
    Password: String;

    constructor() {
        this.UserId ;
        this.FirstName = "";
        this.LastName = "";
        this.Email = "";
        this.Username = "";
        this.Password = "";
    }
}