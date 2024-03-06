document.addEventListener("DOMContentLoaded", function() {
    // Fetch Bitcoin price and data
    fetchBitcoinPrice();
  
    // Fetch trending coins
    fetchTrendingCoins();
  });
  
  function fetchBitcoinPrice() {
    // Implement fetching Bitcoin price from Coingecko API
    // Update HTML elements with fetched data
    const priceElement = document.querySelector('.bitcoin-price .price');
    const priceChangeElement = document.querySelector('.bitcoin-price .price-change');
    
    // Example placeholder values
    const price = '$65,000';document.addEventListener("DOMContentLoaded", function() {
        fetchBitcoinPrice();
        fetchTrendingCoins();
      });
      
      function fetchBitcoinPrice() {
        fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true')
          .then(response => response.json())
          .then(data => {
            const priceElement = document.querySelector('.bitcoin-price .price');
            const priceChangeElement = document.querySelector('.bitcoin-price .price-change');
            const bitcoinData = data.bitcoin;
            const price = bitcoinData.usd.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
            const priceChange = bitcoinData.usd_24h_change.toFixed(2) + '%';
            priceElement.textContent = `Price: ${price}`;
            priceChangeElement.textContent = `24H Change: ${priceChange}`;
          })
          .catch(error => console.error('Error fetching Bitcoin price:', error));
      }
      
      function fetchTrendingCoins() {
        fetch('https://api.coingecko.com/api/v3/search/trending')
          .then(response => response.json())
          .then(data => {
            const coinListElement = document.querySelector('.trending-coins .coin-list');
            const trendingCoins = data.coins.slice(0, 3); // Get top 3 trending coins
            coinListElement.innerHTML = ''; // Clear existing list items
            trendingCoins.forEach(coin => {
              const li = document.createElement('li');
              li.textContent = coin.item.name;
              coinListElement.appendChild(li);
            });
          })
          .catch(error => console.error('Error fetching trending coins:', error));
      }
      
    const priceChange = '+3.5%';
  
    priceElement.textContent = `Price: ${price}`;
    priceChangeElement.textContent = `24H Change: ${priceChange}`;
  }
  
  function fetchTrendingCoins() {
    // Implement fetching trending coins from Coingecko API
    // Populate the list of trending coins in the HTML
    const coinListElement = document.querySelector('.trending-coins .coin-list');
    
    // Example placeholder values
    const trendingCoins = ['Bitcoin', 'Ethereum', 'Binance Coin'];
  
    trendingCoins.forEach(coin => {
      const li = document.createElement('li');
      li.textContent = coin;
      coinListElement.appendChild(li);
    });
  }
  