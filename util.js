const request = require('request-promise-native');

const {
    chat
} = require('./config.json');


const handleTalk = async (msg) => {
    try {
        msg.content = msg.content.replace(/^<@!?[0-9]{1,20}> ?/i, '');
        if (msg.content.length < 2) return;
        msg.channel.startTyping(true);
        const options = {
            method: 'GET',
            url: chat.url,
            qs: {
                bid: chat.bid,
                key: chat.key,
                uid: msg.author.id,
                msg: msg.content
            },
            json: true
        };
        let reply = await request(options);
        msg.channel.stopTyping(true);
        if (reply) {
            { 
                if(reply.cnt)
                {
                    await msg.channel.send(`<@${msg.author.id}>  ${reply.cnt}` );
            }
            else {
                await msg.channel.send(`hey` );
            }
            }
        }
    } catch (e) {
        msg.channel.stopTyping(true);
        console.log(e);
    }
};

module.exports = {
    handleTalk
};
