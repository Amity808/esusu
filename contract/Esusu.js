export const Esusu = {
    address: "0x532dfE1077FAf3DD2eE516A6f0467c915850c6aa",
    abi: [
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_age",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_father",
                    "type": "address"
                }
            ],
            "name": "depositChildSavingsReg",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_depositAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_savinsLen",
                    "type": "uint256"
                }
            ],
            "name": "depositSave",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "forceWithdraw",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_target",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_purpose",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_targetAmount",
                    "type": "uint256"
                }
            ],
            "name": "initialSaving",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_savinsLen",
                    "type": "uint256"
                }
            ],
            "name": "targetReach",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_child",
                    "type": "address"
                }
            ],
            "name": "withdraw",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "_childSavings",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "childAge",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "internalType": "address payable",
                    "name": "childAddress",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "fatherAddress",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "canWithdraw",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "_savings",
            "outputs": [
                {
                    "internalType": "address payable",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "savingsAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "target",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "startDate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "endDate",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "purpose",
                    "type": "string"
                },
                {
                    "internalType": "bool",
                    "name": "isTime",
                    "type": "bool"
                },
                {
                    "internalType": "bool",
                    "name": "forceWithdraw",
                    "type": "bool"
                },
                {
                    "internalType": "bool",
                    "name": "inSaving",
                    "type": "bool"
                },
                {
                    "internalType": "enum Esusu.SavingsStatus",
                    "name": "savingStatus",
                    "type": "uint8"
                },
                {
                    "internalType": "uint256",
                    "name": "nonce",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "_txHistory",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "savingsNonce",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "purpose",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "internalType": "address payable",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "totalDeposit",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "time",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "childAddress",
            "outputs": [
                {
                    "internalType": "address payable",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "currentTimeStap",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "number_of_deposits",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "savinsLen",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "txHistoryLen",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
}