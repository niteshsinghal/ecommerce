export class IAuth {
  constructor() {
    this.grant_type = "password";
  }
  username: string;
  password: string;
  grant_type: string;
}
export class IToken {
  username: string;
  token: {};
}
