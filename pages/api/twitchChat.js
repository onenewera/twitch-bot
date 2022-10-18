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
    static likes = 0;
    static profilePicture;
    static userName;
    static message;

    constructor(likes, profilePicture, userName, message ) {
        this.likes = likes;
        this.profilePicture = profilePicture;
        this.userName = userName;
        this.message = message;
    }
}

const userList = []

// Function to see if current member is part of our userList array - if so return true, false if else
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


// Add/update likes for current song playing using the !like command and add it to the member object
client.on('message', (channel, tags, message, self) => {

    if(message.toLowerCase() === '!like') {

        // check to see if member exists in userList arrary - update likes if so, add user and update like if not
        if(containsMember(tags.username, userList) == true) {

            for (const member of userList) {
                if (member.userName === tags.username) {
                  member.likes += 1;
              
                  break;
                }
              }
            
            client.say(channel, `@${tags.username} exists in userList. Updating like number...`);
            console.log('User exists in userList. Updating like number...');
            // ChatMember.likes += 1;
        } else {
            userList.push(
                new ChatMember(0, 'profilePictureURL', tags.username, tags.color)
            );
            client.say(channel, `Adding user to list...`);
            console.log('Adding user to list...');
            // userList[i].likes = +1
            client.say(channel, `Updating new user likes`);
            console.log('Updating new user likes')
        }

    }
})

// Create a new member and add to userList - return if user is already in the list - breaking down command to get spotify url for later
client.on('message', (channel, tags, message, self) => {
    const args = message.slice(1).split(' ');
    const command = args.shift().toLowerCase();

    if(command === 'que') {
        client.say(channel, `@${tags.username}, queing: "${args.join(' ')}"`);
        
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