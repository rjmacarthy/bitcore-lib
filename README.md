stratcore-lib
=======

A fork of bitcore-lib for stratis.

Please note that this is an unofficaial port and it has not been tested.

Install via npm

```
npm install stratcore-lib
```

Test using

```
npm run test
```

Example address creation

```

var privKey = new stratcore.PrivateKey();

console.log(privKey, privKey.toAddress());

// Outputs:
// <PrivateKey: e04d8b98297ff0a8d30bacd788c32ea2cc750486f4dcd03644a2c11e25e294ea, network: livenet> <Address: SWb2KFXG8ArWg2aeoxJLAs1itxXXtPPe9E, type: pubkeyhash, network: livenet>

```