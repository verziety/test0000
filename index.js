import DiscordRPC from 'discord-rpc'

export class DiscordClient {
	constructor(clientId, activity) {
		this.clientId = clientId
		this.activity = activity
		this.rpc = new DiscordRPC.Client({ transport: 'ipc' })
	}

	setActivity() {
		try {
			this.rpc.setActivity({
				details: this.activity.detail,
				largeImageKey: this.activity.largeImageKey,
				largeImageText: this.activity.largeImageText,
				startTimestamp: new Date(),
			})
		} catch (err) {
			console.error('Error setting activity:', err)
		}
	}

	async login() {
		try {
			await this.rpc.login({ clientId: this.clientId })
		} catch (err) {
			console.error('Error logging in to Discord:', err)
		}
	}

	initialize() {
		this.rpc.on('ready', () => {
			console.log('Connected to Discord RPC')
			this.setActivity()
		})

		this.login()
	}
}
