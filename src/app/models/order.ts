
export class AddOrderModel {
  OrderId: number;
  OrderNumber: number;
  CreationStartDate: string;
  CreationEndDate: string;
  ValidationStartDate: string;
  ValidationEndDate: string;
  OrderStatus: string;
  CreatorId: number;
  ValidatorId: number;
  PropositionId: number;
  Quantity: number;
}

export class OrderModel {
  orderId: number;
  orderNumber: number;
  creationStartDate: string;
  creationEndDate: string;
  validationStartDate: string;
  validationEndDate: string;
  orderStatus: string;
  creatorId: number;
  creatorName: string;
  validatorId: number;
  validatorName: string;
  propositionId: number;
  propositionNumber: number;
  supplierName: string;
  productName: string;
  productCode: string;
  quantity: number;
  orderReceiptId: string;
  orderHistory: HistoryOrderModel[];
}

export class HistoryOrderModel {
  orderHistoryId: number;
  orderNumber: number;
  creationStartDate: string;
  creationEndDate: string;
  validationStartDate: string;
  validationEndDate: string;
  orderStatus: string;
  validatorId: number;
  validatorName: string;
  creatorId: number;
  creatorName: string;
  propositionId: number;
  propositionNumber: number;
}
