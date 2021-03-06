import { OptionsWithMeta, UnsignedTransaction } from './util';
/**
 * Serialize a signed transaction in a format that can be submitted over the
 * Node RPC Interface from the signing payload and signature produced by the
 * remote signer.
 *
 * @param unsigned - The JSON representing the unsigned transaction.
 * @param signature - Signature of the signing payload produced by the remote
 * signer.
 * @param options - Registry and metadata used for constructing the method.
 */
export declare function createSignedTx(unsigned: UnsignedTransaction, signature: string, options: OptionsWithMeta): string;
