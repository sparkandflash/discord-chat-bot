module.exports = {
    name: 'clear',
    type: 'mod',
	 aliases: ['c'],
    aliases: ['delete'],
	usage: '[optional user] [amount]',
    description: 'Clear upto 100 messages from everyone or a specific user',
    example: ['clear 10', 'clear @Purple 10'],
    cooldown: 60,
    args: true,
    guildOnly: true,

	async execute(message, args, client) {
        const user = message.mentions.users.first();
        const author = message.author;
        const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
        if (!amount) {
            message.delete(4000);
            return message.channel.send('Please specify a user and amount, or just an amount, of messages to clear').then(msg => {msg.delete(5000)});
        }
        if (!amount && !user) {
            message.delete(4000);
            return message.reply('Please specify a user and amount, or just an amount, of messages to purge').then(msg => {msg.delete(5000)});
        }
        message.channel.fetchMessages({
         limit: 50,
        }).then((messages) => {
    
            if (user) {
    
                if (user == author) {
                    message.delete(4000);
                    const filterBy = author ? user.id : client.user.id;
                    messages = messages.filter(m => m.author.id === filterBy).array().slice(1, amount + 1);
                } 
                else if (user !== author) {
                    message.delete(4000);
                    const filterBy = user ? user.id : client.user.id;
                    messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
                }
    
            }
            else if (!user) {
                message.delete(4000);
                messages = messages.array().slice(1, amount + 1);
            }
    
            {
                message.channel.send(`${amount} messages cleared `).then(msg => {msg.delete(4000)});
            }
    
            message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
        
        });
	},
};
