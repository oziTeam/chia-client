# Chia Client

TypeScript client for communicating with [Chia](https://www.chia.net/) RPC interfaces. All API calls return promises.

Edit from [chia-client](https://github.com/freddiecoleman/chia-client) by Freddie Coleman

### Configs for using testnet
```shell
export CHIA_ROOT="~/.chia/[TEST_NET_FOLDER]"
export CHIA_FOLDER_PATH=CHIA_FOLDER_PATH
export CHIA_NET="testnet"
```

### Full Node

```
import { FullNode } from 'chia-client';

const fullNode = new FullNode({
    protocol: 'http',
    hostname: 'localhost',
    port: 8555
});

const blockchain = await fullNode.getBlockchainState();
```

### Wallet

```
import { Wallet } from 'chia-client';

const wallet = new Wallet({
    protocol: 'http',
    hostname: 'localhost',
    port: 8555
});

const mnemonic = await wallet.generateMnemonic();
```

### Credits

This client is provided by [Chia Blockchain Explorer](https://www.chiaexplorer.com).
