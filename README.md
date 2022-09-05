# challenge-cripto-react-native

Our React-native coding challenge is a simple "Crypto Tracker". Users should be able to add new cryptocurrencies, visualize the current price and the change in price in % for the last 24 hours, and also be able to remove a cryptocurrency from the "Crypto Tracker". 

```
Important: Please make sure you use ReactNative (not Expo), Redux Thunk, Hooks, and TypeScript.
Check your solution into github with a readme.md file detailing instructions 
on how to get the app up and running...
```

# Suggested design and assets:

You can find below a design mockup for the challenge. Please make sure you follow this design as close as possible, as it will be evaluated:
https://www.figma.com/proto/sVfUI6ThTwAbLlhzbWj52Q/Mobile-Challenge-Nov-2019?node-id=1%3A4&scaling=scale-down

For the assets we recommend the material icons:
https://material.io/resources/icons/?style=baseline

Make sure you build your components using CSS-in-JS solution (https://styled-components.com/)

# Main Features of the app

### 1) List of cryptocurrencies
Users should be able to visualize the list of cryptocurrencies they currently have on the app.

### 2) Current price and percentage change in the last 24h
Users should also be able to visualize: 
* Current price for the cryptocurrencies added
* Change in percentage in USD in the last 24h

### 3) API to get pricing and percentage change
Please use the following API to get cryptocurrency metrics: https://data.messari.io/api/v1/assets/btc/metrics.

### 4) Remove a cryptocurrency
From the list, users should be able to remove a cryptocurrency from the "Crypto Tracker".

### 5) Pricing and percentage change update
The Crypto Tracker should update the current price and percentage change in USD to the user. Choose your preferred way to update the data.

# Evaluation Criteria

* Understanding of core Javascript concepts
* Understanding of ReactNative and Redux frameworks
* Code and component reuse/extensibility
* Code design
* Strategy to refresh data
* Ability to write clear documentation
* Correct typing of the components and variables used