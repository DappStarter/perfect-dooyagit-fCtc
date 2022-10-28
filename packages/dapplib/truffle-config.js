require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth museum unknown just arctic surge trial'; 
let testAccounts = [
"0x0f211a0aa9a8d1e733a7a6ec97fe43dbcd739e583114c88558bb0dac1d46c510",
"0x4e44f7a41730b81251fc58259461ec267fc1d31cd09fba8f7f9b0312e97789b6",
"0x9b5bf978f3af465f3f795c3ac32b9ba3bbffccc0f292e42fed582d8795198201",
"0x1f5611f2d65b1082d1eb11e16b8068f0606f62e9b7baad1bd6b3b747f8d995ae",
"0xb944b5d034740dc85cfa5a8c31e8bfeda4099b26f5b53a9b350ccd65d1c925fb",
"0x4345788c3414bc63782f0d84d97973833e848d3f5f00d734c3da24c765ff2e10",
"0xfd808fa509d2f15d4a9a2ef528d0450d39e86e3077d8d6681f1ba91a7f52818b",
"0x8070d4656d30f68824987f4ccad6be95721d9166e3f6b546837ac22fe7b03221",
"0xdf431ad2287f532528e726b54d0c97aa504dd1bd6f4196a79f4dd2180318600f",
"0xc74fdebaf8a4c2807eb5ed8dc7b9e2177621f6ef54c918de521efff6e7fea284"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

