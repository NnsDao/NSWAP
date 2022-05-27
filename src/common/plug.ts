import canisterConfig from '../service/canister.config';
import storage from './storage';

export async function plugLogin() {
  // @ts-ignore
  if (!globalThis?.ic?.plug) {
    console.error('Please make sure the Plug extension is installed!');
    return null;
  }
  const whitelist = Object.values(canisterConfig).map(item => item.cid);
  const host = 'https://ic0.app';
  // @ts-ignore
  const connected = await globalThis.ic.plug.isConnected();
  if (!connected) {
    try {
      // @ts-ignore
      const publicKey = await globalThis.ic.plug.requestConnect({
        whitelist,
        // host,
        // timeout: 50000,
      });
      console.log("The connected user's public key is:", publicKey);
    } catch (e) {
      console.error(e);
    }
  }
  // @ts-ignore
  if (connected && !globalThis.ic.plug.agent) {
    try {
      // @ts-ignore
      await globalThis.ic.plug.createAgent({ whitelist });
    } catch (error) {
      console.error('plug.createAgent', error);
    }
  }
  // @ts-ignore
  const principalId = await ic.plug.agent._identity.then(res => res.getPrincipal().toText());
  storage.set('loginType', 'plug');
  console.log(
    'plug identity',
    // @ts-ignore
    principalId,
    'sessionData',
    // @ts-ignore
    ic.plug.sessionManager.sessionData
  );

  // @ts-ignore
  return ic.plug.sessionManager.sessionData.accountId;
}

export async function plugLogout() {
  // @ts-ignore
  await globalThis.ic.plug.disconnect();
  //Disconnect after
  storage.remove('loginType');
}
