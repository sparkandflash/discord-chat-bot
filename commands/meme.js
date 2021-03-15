
module.exports = {
    name: 'meme',
    type: 'fun',
	description: 'displays a random meme',
	execute(msg) {
        const request = require('request');
        
        request('https://api-to.get-a.life/meme', { json: true }, (err, res, body) => {
            if (err) return console.log(err);
          
			return msg.channel.send(`random meme : ${body.url}`);

        });
}
};