import { SupplierModel } from './supplier';
export class AddProductModel {
  ProductId: number;
  ProductCode: string;
  ProductName: string;
  QuantityInStock: number;
  QuantityUsed: number;
  LastBuyingDate: string;
  CreationDate: string;
  SupplierId: number;
  status: boolean;
}

export class ProductModel {
  productId: number;
  productCode: string;
  productName: string;
  quantityInStock: number;
  quantityUsed: number;
  lastBuyingDate: string;
  creationDate: string;
  supplier: SupplierModel;
  supplierId: number;
  supplierName: string;
  status: boolean;
  productHistory: HistoryProductModel[];
}

export class HistoryProductModel {
  productHistoryId: number;
  productCode: string;
  productName: string;
  quantityInStock: number;
  quantityUsed: number;
  lastBuyingDate: string;
  creationDate: string;
  status: boolean;
  supplierId: number;
  supplierName: string;
}
