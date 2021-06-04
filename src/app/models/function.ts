import { RoleModel } from './role';
export class AddFunctionModel {
  FunctionId: number;
  Name: string;
  Description: string;
  Route: string;
  // Roles: RoleModel[];
  Status: boolean;
}
export class FunctionModel {
  functionId: number;
  name: string;
  description: string;
  creationDate: string;
  route: string;
  status: boolean;
}
