const Web3 = require('web3');
const web3 = new Web3('YOUR_ETHEREUM_PROVIDER_URL'); // Replace with your Ethereum provider URL

const AUCTION_FACTORY_ADDRESS = '0xf8e81D47203A594245E36C48e151709F0C19fBe8'; // AuctionFactory contract address
const AUCTION_FACTORY_ABI = [...]; // Replace with the ABI of your AuctionFactory contract

const ENGLISH_AUCTION_ADDRESS = '0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8'; // EnglishAuction contract address
const ENGLISH_AUCTION_ABI = [...]; // Replace with the ABI of your EnglishAuction contract

const ERC721_ADDRESS = '0xd9145CCE52D386f254917e481eB44e9943F39138'; // ERC721 contract address
const ERC721_ABI = [...]; // Replace with the ABI of your ERC721 contract

const auctionFactoryContract = new web3.eth.Contract(AUCTION_FACTORY_ABI, AUCTION_FACTORY_ADDRESS);
const englishAuctionContract = new web3.eth.Contract(ENGLISH_AUCTION_ABI, ENGLISH_AUCTION_ADDRESS);

// Create new auction
const createAuction = async () => {
    const nftAddress = document.getElementById("nftAddress").value;
    const nftId = parseInt(document.getElementById("nftId").value);
    const startingBid = parseInt(document.getElementById("startingBid").value);

    try {
        const accounts = await web3.eth.getAccounts();
        await auctionFactoryContract.methods.createAuction(nftAddress, nftId, startingBid)
            .send({ from: accounts[0] });

        // Display success message or update UI
        alert('Auction created successfully');
    } catch (error) {
        console.error('Error creating auction:', error);
        // Display error message or update UI
    }
};

// Explore available auctions
const exploreAuctions = async () => {
    try {
        const auctions = await auctionFactoryContract.methods.getAuctions().call();

        const auctionsList = document.getElementById("auctions");
        auctionsList.innerHTML = '';

        auctions.forEach(auctionAddress => {
            const listItem = document.createElement("li");
            listItem.textContent = auctionAddress;
            auctionsList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error exploring auctions:', error);
    }
};

// Place bid on an auction
const placeBid = async (auctionAddress) => {
    const bidAmount = parseInt(document.getElementById("bidAmount").value);

    try {
        const accounts = await web3.eth.getAccounts();
        const auctionContract = new web3.eth.Contract(ENGLISH_AUCTION_ABI, auctionAddress);

        await auctionContract.methods.bid().send({ from: accounts[0], value: bidAmount });

        // Display success message or update UI
        alert('Bid placed successfully');
    } catch (error) {
        console.error('Error placing bid:', error);
        // Display error message or update UI
    }
};

// Load available auctions when the page loads
window.addEventListener("load", exploreAuctions);
