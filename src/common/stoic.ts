import { StoicIdentity } from 'ic-stoic-identity';
import { $agent } from '../service';
import storage from './storage';

export async function stoicLogin() {
  return StoicIdentity.load().then(async (identity: any) => {
    if (identity !== false) {
      //ID is a already connected wallet!
      // return identity.getPrincipal().toText();
      // return (await $agent.getPrincipal()).toText();
    } else {
      //No existing connection, lets make one!
      identity = await StoicIdentity.connect();
      // return identity.getPrincipal().toText();
    }
    $agent.replaceIdentity(identity);
    storage.set('loginType', 'stoic');
    return identity
      .accounts()
      .then((res: string) => {
        const addressList = JSON.parse(res);
        console.log('stoic address', addressList, 'identity', identity.getPrincipal().toText());

        return addressList[0].address;
      })
      .catch((err: any) => {
        console.error('stoic accounts', err);
        return null;
      });
  });
}

export function stoicLogout() {
  storage.remove('loginType');
  //Disconnect after
  StoicIdentity.disconnect();
}
