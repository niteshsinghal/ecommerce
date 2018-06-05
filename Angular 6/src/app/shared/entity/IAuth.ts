export class IAuth {
  constructor() {
    this.grant_type = "password";
  }
  username: string;
  password: string;
  grant_type: string;
}
export class authUser {
  /**
   * SET DEFAULT VALUES IN CONTROLLER
   */
  constructor() {
    this.token = "";
    this.personID = 0;
    this.userName = "";
    this.firstName = "";
    this.lastName = "";
    this.roleCode = "";
    this.roleDescription = "";
  }
  token: string;
  personID: number;
  userName: string;
  firstName: string;
  lastName: string;
  roleCode: string;
  roleDescription: string;
}
