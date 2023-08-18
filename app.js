// Replace 'YOUR_ETHEREUM_PROVIDER_URL' with your Ethereum provider URL
const web3 = new Web3('https://eth-sepolia.g.alchemy.com/v2/T4tcG13DHqYGsoM878VN240geCvLDRIY');

const AUCTION_FACTORY_ADDRESS = '0x4b2bEFBDA1A1b189b6E8298F0D4b6c154c2Fbb50';
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

const ENGLISH_AUCTION_ADDRESS = '0xD75f560345a3E7c8a98b727704FF39FE406BEbBC';
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

const ERC721_ADDRESS = '0x24b7671D0cbb344a8Ce4f09106f634f473A5364E';
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

const { ethers } = require('ethers');

// Create new auction
const createAuction = async () => {
    const nftAddress = document.getElementById("nftAddress").value;
    const nftId = parseInt(document.getElementById("nftId").value);
    const startingBid = parseInt(document.getElementById("startingBid").value);

    try {
        // Connect to the Ethereum provider
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);

        // Get the signer (account) from the provider
        const signer = provider.getSigner();
        const fromAddress = await signer.getAddress();

        // Construct the transaction
        const auctionFactoryContract = new ethers.Contract(AUCTION_FACTORY_ADDRESS, AUCTION_FACTORY_ABI, signer);
        const transaction = await auctionFactoryContract.createAuction(nftAddress, nftId, startingBid);

        // Send the transaction
        const tx = await transaction.wait();

        // Display success message or update UI
        alert('Auction created successfully');
    } catch (error) {
        console.error('Error creating auction:', error);
        // Display error message or update UI with user-friendly error
        alert('Error creating auction. Check the console for details.');
    }
};

        const txHash = await ethereum.request({ method: 'eth_sendTransaction', params: [txParams] });

        // Wait for the transaction to be mined
        const receipt = await ethereum.request({ method: 'eth_getTransactionReceipt', params: [txHash] });

        // Display success message or update UI
        alert('Auction created successfully');
    } catch (error) {
        console.error('Error creating auction:', error);
        // Display error message or update UI with user-friendly error
        alert('Error creating auction. Check the console for details.');
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
        // Display error message or update UI with user-friendly error
        alert('Error exploring auctions. Check the console for details.');
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
