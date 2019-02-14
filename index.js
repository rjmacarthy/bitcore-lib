'use strict';

var stratcore = module.exports;

// module information
stratcore.version = 'v' + require('./package.json').version;
stratcore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of stratcore-lib found. ' +
      'Please make sure to require stratcore-lib and check that submodules do' +
      ' not also include their own stratcore-lib dependency.';
    throw new Error(message);
  }
};
stratcore.versionGuard(global._stratcore);
global._stratcore = stratcore.version;

// crypto
stratcore.crypto = {};
stratcore.crypto.BN = require('./lib/crypto/bn');
stratcore.crypto.ECDSA = require('./lib/crypto/ecdsa');
stratcore.crypto.Hash = require('./lib/crypto/hash');
stratcore.crypto.Random = require('./lib/crypto/random');
stratcore.crypto.Point = require('./lib/crypto/point');
stratcore.crypto.Signature = require('./lib/crypto/signature');

// encoding
stratcore.encoding = {};
stratcore.encoding.Base58 = require('./lib/encoding/base58');
stratcore.encoding.Base58Check = require('./lib/encoding/base58check');
stratcore.encoding.BufferReader = require('./lib/encoding/bufferreader');
stratcore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
stratcore.encoding.Varint = require('./lib/encoding/varint');

// utilities
stratcore.util = {};
stratcore.util.buffer = require('./lib/util/buffer');
stratcore.util.js = require('./lib/util/js');
stratcore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
stratcore.errors = require('./lib/errors');

// main bitcoin library
stratcore.Address = require('./lib/address');
stratcore.Block = require('./lib/block');
stratcore.MerkleBlock = require('./lib/block/merkleblock');
stratcore.BlockHeader = require('./lib/block/blockheader');
stratcore.HDPrivateKey = require('./lib/hdprivatekey.js');
stratcore.HDPublicKey = require('./lib/hdpublickey.js');
stratcore.Networks = require('./lib/networks');
stratcore.Opcode = require('./lib/opcode');
stratcore.PrivateKey = require('./lib/privatekey');
stratcore.PublicKey = require('./lib/publickey');
stratcore.Script = require('./lib/script');
stratcore.Transaction = require('./lib/transaction');
stratcore.URI = require('./lib/uri');
stratcore.Unit = require('./lib/unit');

stratcore.deps = {};
stratcore.deps.bnjs = require('bn.js');
stratcore.deps.bs58 = require('bs58');
stratcore.deps.Buffer = Buffer;
stratcore.deps.elliptic = require('elliptic');
stratcore.deps._ = require('lodash');

stratcore.Transaction.sighash = require('./lib/transaction/sighash');