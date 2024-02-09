// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract transaction {
    uint256 txCnt;

    event Transfer(address from, address to, uint256 amount, string msg, uint256 timestamp, string keyword);

    struct transaction_structure{
        address from; 
        address to;
        uint256 amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    transaction_structure[] transactions;

    function addToBlockChain(address to, uint256 amount, string memory message, string memory keyword) public {
        txCnt += 1;
        
        transactions.push(transaction_structure(msg.sender, to, amount, message, block.timestamp, keyword));
        
        emit Transfer(msg.sender, to, amount, message, block.timestamp, keyword);
    }

    function getAllTx() public view returns(transaction_structure[] memory){
        return transactions;
    }

    
}

