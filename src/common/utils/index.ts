import { HttpAgent } from '@dfinity/agent';
import { AccountIdentifier, LedgerCanister } from '@dfinity/nns';
export const getUserICP = async (address: string, _agent?: any) => {
  const agant = _agent ? _agent : new HttpAgent();
  const ledger = LedgerCanister.create({ agent: agant });
  const balance = await ledger.accountBalance({
    accountIdentifier: AccountIdentifier.fromHex(address),
  });
  console.log('ICP balance', balance);
  return balance.toE8s();
};
export const getExchange = async () => {
  const res = await fetch('https://api.binance.com/api/v3/avgPrice?symbol=ICPUSDT').then(r => r.json());
  return res.price;
};
