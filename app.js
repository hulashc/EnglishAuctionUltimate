// Replace 'YOUR_ETHEREUM_PROVIDER_URL' with your Ethereum provider URL
const web3 = new Web3('https://eth-mainnet.alchemyapi.io/v2/T4tcG13DHqYGsoM878VN240geCvLDRIY');

const AUCTION_FACTORY_ADDRESS = '0xf8e81D47203A594245E36C48e151709F0C19fBe8';
const AUCTION_FACTORY_ABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "auctionAddress",
				"type": "address"
			}
		],
		"name": "AuctionCreated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "nft",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "nftId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "startingBid",
				"type": "uint256"
			}
		],
		"name": "createAuction",
		"outputs": [],
		"stateMutability": "nonpayable",
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
		"name": "auctions",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAuctions",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const ENGLISH_AUCTION_ADDRESS = '0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8';
const ENGLISH_AUCTION_ABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_nft",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_nftId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_startingBid",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Bid",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "winner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "End",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "Start",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "bidder",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Withdraw",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "bid",
		"outputs": [],
		"stateMutability": "payable",
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
		"name": "bids",
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
		"name": "end",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "endAt",
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
		"name": "ended",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "highestBid",
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
		"name": "highestBidder",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "nft",
		"outputs": [
			{
				"internalType": "contract IERC721",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "nftId",
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
		"name": "seller",
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
		"name": "start",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "started",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

const ERC721_ADDRESS = '0xd9145CCE52D386f254917e481eB44e9943F39138';
const ERC721_ABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
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
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

const auctionFactoryContract = new web3.eth.Contract(AUCTION_FACTORY_ABI, AUCTION_FACTORY_ADDRESS);
const englishAuctionContract = new web3.eth.Contract(ENGLISH_AUCTION_ABI, ENGLISH_AUCTION_ADDRESS);

// Create new auction
const createAuction = async () => {
    const nftAddress = document.getElementById("nftAddress").value;
    const nftId = parseInt(document.getElementById("nftId").value);
    const startingBid = parseInt(document.getElementById("startingBid").value);

    try {
        const fromAddress = '0xeA94CC5544cFECCa14E900CF717dEAC223Aa41c4'; // Your Ethereum address
        const accounts = await web3.eth.getAccounts();
        const auctionFactoryContract = new web3.eth.Contract(AUCTION_FACTORY_ABI, AUCTION_FACTORY_ADDRESS);

        await auctionFactoryContract.methods.createAuction(nftAddress, nftId, startingBid)
            .send({ from: fromAddress });

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
const placeBid = async () => {
    const auctionAddress = document.getElementById("auctionAddress").value;
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
