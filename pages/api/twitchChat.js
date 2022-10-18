const tmi = require('tmi.js');

const client = new tmi.Client({
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
    },
    identity: {
        username: 'dennis_chat_bot',
        // password: 'oauth:8p5k0xznyg726ykmw2e0dtg3yc3nw0' // dennis's oauth
        password: 'oauth:zwghsw503wraqohncsg8mwx82xiwb4' // dennis_chat_bot oauth
    },
    channels: [ 'castenbdo']
});

client.connect().catch(console.error);

class ChatMember {
    constructor(likes, profilePicture, userName, message ) {
        this.likes = likes;
        this.profilePicture = profilePicture;
        this.userName = userName;
        this.message = message;
    }
}

const userList = []

client.on('message', (channel, tags, message, self) => {
    const args = message.slice(1).split(' ');
    const command = args.shift().toLowerCase();

    if(command === 'que') {
        client.say(channel, `@${tags.username}, queing: "${args.join(' ')}"`);

        function containsMember(member, list) {
            var i;
            for (i = 0; i < list.length; i++) {
                if (list[i].userName === member) {
                    console.log('User is already on the list,')
                    return true;
                }
            }
            console.log('User is not on the list,')
            return false;
        }
        
        if (containsMember(tags.username, userList) == true) {
            console.log('Not adding user to list');
            // return
        } else {
            userList.push(
                new ChatMember(0, 'profilePictureURL', tags.username, tags.color)
            );
            console.log('Adding user to list...');
        }
        console.log(userList, userList.length);
    }
});