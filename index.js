import DiscordRPC from 'discord-rpc'

export class DiscordClient {
	constructor(clientId, activity) {
		this.clientId = clientId
		this.activity = activity
		this.rpc = new DiscordRPC.Client({ transport: 'ipc' })
	}

	setActivity() {
		this.rpc.setActivity({
			state: this.activity.state,
			details: this.activity.detail,

			largeImageKey: this.activity.largeImageKey,
			largeImageText: this.activity.largeImageText,

			smallImageKey: this.activity.smallImageKey,
			smallImageText: this.activity.smallImageText,

			buttons: this.activity.buttons,
			startTimestamp: new Date(),
		})
	}

	async login() {
		await this.rpc.login({ clientId: this.clientId })
	}

	initialize() {
		this.rpc.on('ready', () => this.setActivity())
		this.login()
	}
}
