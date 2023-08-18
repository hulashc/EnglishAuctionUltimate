// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "./EnglishAuction.sol";  // Import the EnglishAuction contract

contract AuctionFactory {
    address[] public auctions;

    // Event emitted when a new auction is created
    event AuctionCreated(address indexed auctionAddress);

    // Function to create a new auction
    function createAuction(address nft, uint nftId, uint startingBid) external {
        address newAuction = address(new EnglishAuction(nft, nftId, startingBid));
        auctions.push(newAuction);

        emit AuctionCreated(newAuction);
    }

    // Function to get the list of all auctions
    function getAuctions() external view returns (address[] memory) {
        return auctions;
    }
}
