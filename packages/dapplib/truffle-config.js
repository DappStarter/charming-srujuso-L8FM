require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remind hour install father fresh text'; 
let testAccounts = [
"0xcbfb0e25b44697e5c8615554f8c415656a8b28a8911eb6300e24e7f95e462887",
"0xda69721b8bbbd1904df5041fce8d22eef0ca046f62595afca6f7528a7a1151f9",
"0xeebdb8e89f7d1435e701a2bee7ae213415ad9b41abc5752bcfd6c7d3ff0cb0bc",
"0xc86ffc622b67ff2ec563b3de483e1a65f638a01d7e00cf7602bc9f86712cc6a7",
"0xfea5300490d0abf024421f4aac3bbce8872782d90d122e9541ab0d2d32bf674f",
"0xa5d06bda635aacd6df7dd9a1c939d92861952d2ad8735eebdf15f7be0b3ebc1d",
"0xe6f4e8d679088991a2c76c2e16b8c0ac4b4a5b0e3b8b6277ee66fb88ec431b4a",
"0xb4e97c079f3807f36677229efcb7cd7ec7bb73822a02197cfdc1f01309671904",
"0xcbd972769d7861f8297e2bbafd0a72ee77f37c999206461b5c3c1888bf6f3965",
"0xaccc4ec264c5cce332015e50f600fdce98d63819ecaa3db09aded33a18c18797"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

