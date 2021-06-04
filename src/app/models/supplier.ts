export class AddSupplierModel {
  SupplierId: number;
  SupplierCode: string;
  Name: string;
  PhoneNumber: string;
  Address: string;
  OrdersNumber: number;
  LastBuyDate: string;
  CreationDate: string;
}

export class SupplierModel {
  supplierId: number;
  name: string;
  supplierCode: string;
  phoneNumber: string;
  address: string;
  ordersNumber: number;
  lastBuyDate: string;
  creationDate: string;
  supplierHistory: SupplierHistoryModel[];
}

export class SupplierHistoryModel {
  supplierHistoryId: number;
  supplierCode: string;
  name: string;
  phoneNumber: string;
  address: string;
  ordersNumber: number;
  lastBuyDate: string;
  creationDate: string;
  supplierId: number;
}
