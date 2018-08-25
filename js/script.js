const liquidityContractABI = JSON.parse('[{"constant":false,"inputs":[],"name":"reactivate_trading","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deactivate_trading","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newAdmin","type":"address"}],"name":"change_admin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"withdraw_token","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"eth_balance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"withdraw_eth","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"eth_is_seeded","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"seed_eth","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_amount","type":"uint256"}],"name":"withdraw_arbitrary_token","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"platform","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_new_commission_ratio","type":"uint256"}],"name":"change_admin_commission","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"admin_commission_activated","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"traded_token_is_seeded","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"traded_token_balance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_amount","type":"uint256"}],"name":"get_amount_buy","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"seed_additional_token","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_amount_give","type":"uint256"}],"name":"sell_tokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"commission_ratio","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"deactivate_admin_comission","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"traded_token","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_amount","type":"uint256"}],"name":"get_amount_sell","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"traded_token_seed_amount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"seed_additional_eth","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"eth_seed_amount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"trading_deactivated","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"activate_admin_commission","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdraw_excess_tokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"seed_traded_token","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_traded_token","type":"address"},{"name":"_eth_seed_amount","type":"uint256"},{"name":"_traded_token_seed_amount","type":"uint256"},{"name":"_commission_ratio","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"}]');
const tokenContractABI = JSON.parse('[{"constant":false,"inputs":[{"name":"_newPriviledgedAddress","type":"address"}],"name":"ownerSetPriviledgedAddress","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"updateTokenStatus","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"tokensFrozen","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"nextThaw","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"standard","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"priviledgedAddressBurnUnsoldCoins","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"crowdfundDeadline","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"nextFreeze","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"priviledgedAddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"ownerTransferOwnership","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"Frozen","type":"bool"}],"name":"LogTokensFrozen","type":"event"}]');

function sendTransaction(tx) {
  return new Promise((resolve,reject) => {
    web3.eth.sendTransaction({from:tx.from,to:tx.to,value:tx.value}, function(err,val) {
      if(!err) {
	window.open("https://etherscan.com/tx/" + val,"_blank");      
        resolve(val);
      } else {
	  window.location.reload(false);    
          reject(err);
      }
    });
  });
}  
                
function sendTransactionData(tx) {
  web3.eth.sendTransaction({from:tx.from,to:tx.to,data:tx.data,gas:250000,gasPrice:5*1e9}, function(err,val) {
    if(!err) {
	window.open("https://etherscan.com/tx/" + val,"_blank");      
    } else {
	window.location.reload(false);    
    }
  });
}  

function getBlockNumber() {
  return new Promise((resolve,reject) => {
    web3.eth.getBlockNumber(function(err, blockNumber) {
      if(!err) {
        resolve(blockNumber); 
      } else {
          reject(err);
      }
    });
  });  
}  

function getTradedToken(address) {
  let liquidityContract = web3.eth.contract(liquidityContractABI).at(address);
  return new Promise((resolve,reject) => {
    liquidityContract.traded_token(function(err,body) {
      if(!err) {
        resolve(body);
      }  else {
           reject(err);
      }
    });
  });  
}

function sellTokens(tx) {
  let liquidityContract = web3.eth.contract(liquidityContractABI).at(tx.to);
  let data = liquidityContract.sell_tokens.getData(tx.value);
  sendTransactionData({from:tx.from,to:tx.to,data:data}); 
}


function isDeactivated(address) {
  let liquidityContract = web3.eth.contract(liquidityContractABI).at(address);
  return new Promise((resolve,reject) => {
    liquidityContract.trading_deactivated(function(err,body) {
      if(!err) {
        resolve(body);
      }  else {
           reject(err);
      }
    });
  });  
}  

function getTradedTokenBalance(address) {
  let liquidityContract = web3.eth.contract(liquidityContractABI).at(address);
  return new Promise((resolve,reject) => {
    liquidityContract.traded_token_balance(function(err,body) {
      if(!err) {
        resolve(body);
      }  else {
           reject(err);
      }
    });
  });  
}  

function getETHBalance(address) {
  let liquidityContract = web3.eth.contract(liquidityContractABI).at(address);
  return new Promise((resolve,reject) => {
    liquidityContract.eth_balance(function(err,body) {
      if(!err) {
        resolve(body);
      }  else {
           reject(err);
      }
    });
  });  
}  

function getAdmin(address) {
  let liquidityContract = web3.eth.contract(liquidityContractABI).at(address);
  return new Promise((resolve,reject) => {
    liquidityContract.admin(function(err,body) {
      if(!err) {
        resolve(body);
      }  else {
           reject(err);
      }
    });
  });  
}  

function getCommission(address) {
  let liquidityContract = web3.eth.contract(liquidityContractABI).at(address);
  return new Promise((resolve,reject) => {
    liquidityContract.commission_ratio(function(err,body) {
      if(!err) {
        resolve(body);
      }  else {
           reject(err);
      }
    });
  });  
}  
  
function getTxs(url) {
  return new Promise((resolve,reject) => {
    $.get(url).done(function(body) {
      resolve(body['result']);
    });
  });                   
}  

function getTokenName(address) {
  let tokenContract = web3.eth.contract(tokenContractABI).at(address);
  return new Promise((resolve,reject) => {
    tokenContract.name(function(err,body) {
      if(!err) {
        resolve(body);
      }  else {
           reject(err);
      }
    });
  });  
}  

function getAllowance(contractAddress,tokenAddress) {
  let userAddress = localStorage.geItem("userAddress");
  let tokenContract = web3.eth.contract(tokenContractABI).at(tokenAddress);
  return new Promise((resolve,reject) => {
    tokenContract.allowance(userAddress,contractAddress,function(err,body) {
      if(!err) {
        resolve(body);
      }  else {
           reject(err);
      }
    });
  });  
}  

function getContractInfo(contractAddress) {
  return new Promise((resolve,reject) => {
    let url = "https://api.etherscan.io/api?module=account&action=txlist&address=" + contractAddress 
    + "&startblock=0&endblock=99999999&sort=asc&apikey=Z6WV168ESD8MP37K2SK3KC8Z3RXPI5I74Q"
    $.get(url).done(function(body) {
      resolve(body);	    
    });	     
  });	  
}	

function approve(tx,contractAddress) {
  let tokenContract = web3.eth.contract(tokenContractABI).at(tx.to);
  let data = tokenContract.approve.getData(contractAddress,tx.value);
  sendTransactionData({from:tx.from,to:tx.to,data:data});
}

async function getUserTokenBalance(tradedTokenAddress) {
  let userAddress = localStorage.getItem("userAddress");	
  let tokenContract = web3.eth.contract(tokenContractABI).at(tradedTokenAddress);
  return new Promise((resolve,reject) => {
    tokenContract.balanceOf(userAddress, function(err,body) {
      if(!err) {
        resolve(body);
      }  else {
           reject(err);
      }
    });
  });
}	

function getTokenDecimals(address) {
  let tokenContract = web3.eth.contract(tokenContractABI).at(address);
  return new Promise((resolve,reject) => {
    tokenContract.decimals(function(err,body) {
      if(!err) {
        resolve(body);
      }  else {
           reject(err);
      }
    });
  });  
}  

function initSearch(array) {
  $('.ui.search')
    .search({
      source: array
    })
}  

function initSearchClickListener() {
  $('.ui.search').change(function() {
    let title = $('.title').text();
    localStorage.setItem("tradedToken",title);	  
    let contractsObject = JSON.parse(localStorage.getItem('tableInformation'));  	  
    loadContractInformation(contractsObject[title]);   
  })
}                                                                                            

function initTokenTableClickListener() {
  $('#main > div.left-container > div > div > table > tbody > tr').on('click', function(e) {
    let title = e.currentTarget.firstChild.innerText;
    localStorage.setItem("tradedToken",title);	  
    let contractsObject = JSON.parse(localStorage.getItem('tableInformation'));	  	  	  	  
    loadContractInformation(contractsObject[title]); 	  
  });	  
}	

async function initBuyClickListener(tx) {
  $('#sendBuy').on('click', async function() {
    await sendTransaction({from:tx.from,to:tx.to,value:tx.value});                    
  });    
}

async function initSellClickListener(obj) {
  $('#sendSell').on('click', async function() { 	  	  
    approve({from:obj.userAddress,to:obj.tradedTokenAddress,value:obj.tradeAmount},obj.contractAddress);
    setTimeout(function(){	  
      sellTokens({from:obj.userAddress,to:obj.contractAddress,value:obj.tradeAmount});
    },5000);	    
  });    
}

function toFixed(x) {
  if (Math.abs(x) < 1.0) {
    var e = parseInt(x.toString().split('e-')[1]);
    if (e) {
        x *= Math.pow(10,e-1);
        x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
    }
  } else {
    var e = parseInt(x.toString().split('+')[1]);
    if (e > 20) {
        e -= 20;
        x /= Math.pow(10,e);
        x += (new Array(e+1)).join('0');
    }
  }
  return x.toString().split(".")[0];
}

function initEtherscanLink() {
  $('.etherscan').on('click', function(e) {
    console.log("here ",$(e.currentTarget).text());	  
    window.open("https://etherscan.com/address/" + $(e.currentTarget).text(),"_blank");
  });	  
}

async function initCancelReload() {
  $('[id=cancelTx]').on('click', async function() {
    await Promise.resolve(window.location.reload(false));	  
  });
}	

async function initButtonClick() {
  $(".ui.ok.button").on('click', async function(e) {
    await initCancelReload();	  
    let tradeType = $(e.currentTarget).text();
    let html = $(e.currentTarget)[0].offsetParent.previousSibling; 
    let inputValue = parseFloat($(html).find('input').val());
    let userAddress = localStorage.getItem("userAddress");
    let contractAddress = $(html.previousSibling.previousSibling.previousSibling.previousSibling).text();
    let tradedTokenAddress = await getTradedToken(contractAddress);   
    let tokenDecimals = parseInt(await getTokenDecimals(tradedTokenAddress));
    let tokenBalance = new BigNumber(await getTradedTokenBalance(contractAddress));
    let ethBalance = new BigNumber(await getETHBalance(contractAddress));	  
    let commission = new BigNumber((new BigNumber(1e18)).minus(await getCommission(contractAddress))).div(1e18);	  
    let buyPrice,sellPrice; 
    let tradeAmount, ethAmount, sellAmountETH;
    tradeType === "Buy" ? (tradeAmount = (new BigNumber(inputValue)).multipliedBy(Math.pow(10,tokenDecimals)),
    buyPrice = ethBalance.dividedBy((tokenBalance.multipliedBy(commission)).minus(tradeAmount)),
    ethAmount = tradeAmount.multipliedBy(buyPrice),		
    $('#ethAmount').text((parseFloat(ethAmount)/1e18).toString()),
    $('#buyPrice').text("Price: " + (parseFloat(buyPrice)*Math.pow(10,tokenDecimals-18)).toString()),
    await initBuyClickListener({from:userAddress,to:contractAddress,value:toFixed(parseFloat(ethAmount))}),
    $('.ui.basic.modal.one').modal('show'))
    : (tradeAmount = (new BigNumber(inputValue)).multipliedBy(Math.pow(10,tokenDecimals)), 
       sellPrice = (ethBalance.dividedBy(tradeAmount.plus(tokenBalance))).multipliedBy(commission),
       sellAmountETH = tradeAmount.multipliedBy(sellPrice),
       $('#tokenAmount').text((parseFloat(sellAmountETH)/1e18).toString()),
       $('#sellPrice').text("Price: " + (parseFloat(sellPrice)*Math.pow(10,tokenDecimals-18)).toString()),
       await initSellClickListener({userAddress:userAddress, tradedTokenAddress:tradedTokenAddress,
			           contractAddress:contractAddress, tradeAmount:toFixed(parseFloat(new BigNumber(tradeAmount)))}),
      $('.ui.basic.modal.two').modal('show'));
  });
}  

async function get24HourVolumeETH(contractAddress) {
  let oneDayInBlocks = parseInt((24*60*60)/15);
  let blockNumber = await getBlockNumber();    
  let startBlock = blockNumber - oneDayInBlocks;
  let url = "https://api.etherscan.io/api?module=account&action=txlist&address=" + contractAddress + "&startblock=" + startBlock + "&endblock=" + blockNumber + "&sort=asc&apikey=Z6WV168ESD8MP37K2SK3KC8Z3RXPI5I74Q"; 
  let urlInternal = "https://api.etherscan.io/api?module=account&action=txlistinternal&address=" + contractAddress + "&startblock=" + startBlock + "&endblock=" + blockNumber + "&sort=asc&apikey=Z6WV168ESD8MP37K2SK3KC8Z3RXPI5I74Q"; 
  let totalVolume = 0;
  let externalTxs = await getTxs(url);  
  let internalTxs = await getTxs(urlInternal);  
  for(let i in externalTxs) {
    let txs = externalTxs[i];
    totalVolume += parseInt(txs.value);
  }
  for(let i in internalTxs) {
    let txs = internalTxs[i];
    totalVolume += parseInt(txs.value);
  }	
  return totalVolume;
} 

async function get24HourVolumeToken(contractAddress) {
  let tradedTokenAddress = await getTradedToken(contractAddress);
  let totalVolume = 0;
  let oneDayInBlocks = parseInt(24*60*60/15);
  let blockNumber = await getBlockNumber();    
  let startBlock = blockNumber - oneDayInBlocks;
  let url = "https://api.etherscan.io/api?module=logs&action=getLogs" + "&fromBlock=" + startBlock
  + "&toBlock=latest&address=" + tradedTokenAddress + "&topic0=0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
  + "&topic2=" + "0x000000000000000000000000" + contractAddress.slice(2) + "&sort=asc&apikey=Z6WV168ESD8MP37K2SK3KC8Z3RXPI5I74Q"; 
  let tokenTxs = await getTxs(url);  
  for(let i in tokenTxs) {
    let txs = tokenTxs[i];
    totalVolume += parseInt("0x" + txs.data.slice(51));
  }
  let tokenDecimals = parseInt(await getTokenDecimals(tradedTokenAddress));
  totalVolume = totalVolume/(Math.pow(10,tokenDecimals));
  return totalVolume;
} 

function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }
    return false;
}

async function loadContractInformation(arr) {
  let query = '#main > div.right-container > div > div > table';
  let query2 = '#main > div.left-container > div > div > table';
  $(query + ' tr:gt(0)').remove();	
  let name = localStorage.getItem("tradedToken");
  let mainTradedToken = localStorage.getItem(name);
  let tokenDecimals = parseInt(await getTokenDecimals(mainTradedToken));	  
  $('#amountTokenName').text(name.toUpperCase());	
  for(let i in arr) {
    let contractAddress = arr[i];
    let tradedTokenAddress = await getTradedToken(contractAddress);
    let commission = await getCommission(contractAddress);
    commission = (parseInt(commission)/1e18 * 100).toFixed(4) + " %";
    let admin = await getAdmin(contractAddress);
    let ethVolume = ((await get24HourVolumeETH(contractAddress))/Math.pow(10,18)).toFixed(2);
    let tokenVolume = (await get24HourVolumeToken(contractAddress)).toFixed(2);
    let deactivated = await isDeactivated(contractAddress);
    let tradedTokenDecimals = parseInt(await getTokenDecimals(tradedTokenAddress));	  
    let ethBalance = parseFloat(await getETHBalance(contractAddress))/1e18;
    let tradedTokenBalance = parseFloat(await getTradedTokenBalance(contractAddress))/(Math.pow(10,tradedTokenDecimals));	  
    let rowHTML = '<tr><td class="etherscan">' + admin + '</td><td class="etherscan">' + contractAddress + "</td><td>"
    + ethVolume.toString() + " ETH" + "</td><td>" 
    + ethBalance.toFixed(2) + " ETH/" + tradedTokenBalance.toFixed(2) + " "
    + name.toUpperCase() + "</td><td>" + commission + "</td><td>"
    + '<div class="ui small input"><input type="number"></div>' + "</td><td>" 
    + '<div class="ui large buttons"> <button class="ui ok button">Buy</button> <div class="or"></div> <button class="ui ok button">Sell</button> </div>'  
    + "</td></tr>";
    if(!deactivated && ethBalance > 0) {	  
      $(query).append(rowHTML);
    }	    
    initEtherscanLink();	  
  }  
  let userBalance = parseInt(await getUserTokenBalance(mainTradedToken));	  
  $('#tradedToken').text(name.toUpperCase());
  $('#userTokenBalance').text("/" + (userBalance/Math.pow(10,tokenDecimals)).toFixed(2) + " " + name.toUpperCase());		
  $(query).tablesorter();	
  initButtonClick();
}  

function initLeftTableClickListener() {
  $('.leftTable').on('click', function(e) {
    window.open("https://etherscan.com/token/" + $(e.currentTarget).attr('address'),"_blank");
  });	  
}

function loadTable(object) {
  let query = '#main > div.left-container > div > div > table';   
  for(let i in object) {
    let name = i;
    let tokenAddress = localStorage.getItem(name);	  
    let tokenVolume = object[i];
    let rowHTML = '<tr><td class="leftTable" address="' + tokenAddress + '">' + name.toUpperCase() + "</td><td>" + tokenVolume.toFixed(2) + " ETH</td></tr>";
    $(query).append(rowHTML);   
  }  
  $('#main > div.left-container > div > div > table').tablesorter();
  initLeftTableClickListener();	  	
}  

async function loadSearch() {
  let blockNumber = await getBlockNumber();
  let url = "https://api.etherscan.io/api?module=account&action=txlistinternal&address=0x71cf9cc55614a4dc115bdf86bd2a732499aaae63&startblock=0&endblock=" + blockNumber + "&sort=asc&apikey=Z6WV168ESD8MP37K2SK3KC8Z3RXPI5I74Q"; 
  let internalTxs = await getTxs(url);
  let internalTxsArray = "";
  let categoryContent = [];
  let contractsObject = {};
  let tokenObject = {};
  for(let i in internalTxs) {
    let contractAddress = internalTxs[i].contractAddress;
    if(contractAddress.slice(0,2) !== "0x") { continue; }	  
    let ethBalance = parseInt(await getETHBalance(contractAddress))/1e18;
    if(ethBalance > 0) {	  
      let tradedTokenAddress = await getTradedToken(contractAddress);
      let name = (await getTokenName(tradedTokenAddress)).toUpperCase();
      localStorage.setItem(name,tradedTokenAddress);	  
      let ethVolume = ((await get24HourVolumeETH(contractAddress))/Math.pow(10,18));
      tokenObject[name] ? tokenObject[name] += ethVolume : (tokenObject[name] = 0, tokenObject[name] += ethVolume);  
      let searchObject = {'title':name};
      console.log(categoryContent,searchObject,containsObject(searchObject,categoryContent));	    
      if(!containsObject(searchObject,categoryContent)) {
        categoryContent.push(searchObject);	        
      }	       
      typeof contractsObject[name]  === 'object' ? contractsObject[name].push(contractAddress) : contractsObject[name] = [contractAddress];
    }	    
  }
  loadTable(tokenObject);
  initSearch(categoryContent);
  localStorage.setItem("tableInformation",JSON.stringify(contractsObject));
  initTokenTableClickListener();	
  initSearchClickListener();  
}
 
$(document).ready(function() {
initEtherscanLink();
loadSearch();
});  
