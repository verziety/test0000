# A discord-rpc simple template

My repository provides a simple usage of discord-rpc module.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install discord-rpc.
Or using [yarn](https://yarnpkg.com/) instead of npm.

```bash
npm install discord-rpc
-----------------------
yarn add discord-rpc
```

## Usage

git clone <https://github.com/webfryingpan/discord-rpc.git>

Then into cloned repo add a new file(e.g. test.js) and write some code :)

```javascript
import { DiscordClient } from './index.js'

const activity = {
 detail: 'Learning js',
 largeImageKey: 'js', // Your key (u can find it on dev portal)
 largeImageText: 'JavaScript',
 buttons: [{ label: 'React', url: 'https://react.dev' }],
}

const discordClient = new DiscordClient('YOUR_CLIENT_ID', activity)
discordClient.initialize()
```

[Discord developer portal](https://discord.com/developers/applications)

## All assignable settings

```javascript
{
 state: 'Some state',
 detail: 'Test details',
 largeImageKey: 'foo',
 largeImageText: 'foo image text',
 smallImageKey: 'bar',
 smallImageText: 'bar image text',
 buttons: [{label:'random button', url: 'specific url'}],
}
```
