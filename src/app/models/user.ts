import { FunctionModel } from './function';
import { RoleModel, SimpleRoleModel } from './role';
export class AddUserModel {
  // token?: string;
  // login: string;
  UserId: number;
  Name: string;
  Email: string;
  Description: string;
  Direction: string;
  CreationDate: string;
  UserStatus: boolean;
  Login: string;
  Password: string;
  Role: RoleModel;
  RoleId: number;
  ExtraFunctions: FunctionModel[];
  AddDate: string;
  ModifyDate: string;
  DeactivateDate: string;
}
export class UserModel {
  userId: number;
  name: string;
  email: string;
  description: string;
  direction: string;
  userStatus: boolean;
  creationDate: string;
  modifyDate: string;
  deactivateDate: string;
  login: string;
  password: string;
  role: RoleModel;
  roleId: number;
  roleName: string;
  extraFunctions: FunctionModel[];
  passwordsHistory: PasswordHistoryModel[];
}

export class PasswordHistoryModel {
  passwordHistoryId: number;
  password: string;
  entryDate: string;
}

export class ValidatorModel {
  userId: number;
  name: string;
  email: string;
  description: string;
  direction: string;
  userStatus: boolean;
  creationDate: string;
  modifyDate: string;
  deactivateDate: string;
  login: string;
  role: SimpleRoleModel;
  roleId: number;
  password: string;
}
