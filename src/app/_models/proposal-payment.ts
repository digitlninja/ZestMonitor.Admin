export interface ProposalPayment {
    id?: number;
    hash: string;
    shortDescription: string;
    amount?: number;
    expectedPayment?: number;
    createdAt?: string;
}
