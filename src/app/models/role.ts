import { FunctionModel } from './function';
export class AddRoleModel {
  RoleId: number;
  Name: string;
  Description: string;
  Functions: FunctionModel[];
}
export class RoleModel {
  roleId: number;
  name: string;
  description: string;
  functions: FunctionModel[];
}

export class SimpleRoleModel {
  roleId: number;
  name: string;
  description: string;
}
