import { ProductModel } from './product';
import { UserModel } from './user';

export class AddPropositionModel {
  PropositionId: number;
  PropositionNumber: number;
  StartDate: string;
  EndDate: string;
  PropositionStatus: boolean;
  ValidationDate: string;
  AmountTTC: number;
  AmountHT: number;
  Quantity: number;
  Direction: string;
  ValidatorId: number;
  ProductId: number;
  SupplierId: number;
  QuoteId: string;
}
export class PropositionModel {
  propositionId: number;
  propositionNumber: number;
  startDate: string;
  endDate: string;
  propositionStatus: boolean;
  validationDate: string;
  amountTTC: number;
  amountHT: number;
  quantity: number;
  direction: string;
  validator: UserModel;
  validatorId: number;
  productId: number;
  supplierId: number;
  supplierName: string;
  supplierCode: string;
  product: ProductModel;
  quoteId: string;
  propositionHistory: HistoryPropositionModel[];
  quoteHistory: QuoteHistoryModel[];
}

export class HistoryPropositionModel {
  propositionHistoryId: number;
  propositionNumber: number;
  startDate: string;
  endDate: string;
  propositionStatus: boolean;
  validationDate: string;
  amountTTC: number;
  amountHT: number;
  direction: string;
  quantity: string;
  validatorId: number;
  validatorName: string;
  productId: number;
  productName: string;
  supplierId: number;
  supplierName: string;
  quoteName: string;
}

export class QuoteHistoryModel {
  quoteHistoryId: number;
  quoteFileId: string;
  uptadeDate: string;
  quoteFileName: string;
}
