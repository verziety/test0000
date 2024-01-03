# A discord-rpc simple template

My repository provides a simple using discord-rpc package.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install discord-rpc.
```bash
npm install discord-rpc
```
Using [yarn](https://yarnpkg.com/) instead:
```bash
yarn add discord-rpc
```

## Usage

```javascript
import { DiscordClient } from './module.js'

const clientId = 'YOUR_CLIENT_ID'

const activity = {
    detail: 'Learning js',
    largeImageKey: 'js', // Your key (u can find it on dev portal)
    largeImageText: 'JavaScript', // Your text
}

const discordClient = new DiscordClient(clientId, activity)
discordClient.initialize()
```

## Start

Run with nodemon
```bash
npm run dev 
-----------
yarn dev
```
Run with node
```bash
npm run start
-------------
yarn start
```
