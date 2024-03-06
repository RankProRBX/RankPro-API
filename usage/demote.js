const { group, rankpro_api_key } = require('./config.json')
async function demote(username) {
    const url = 'https://api.widgetdev.xyz/demote';

    const data = {
        "target": username,
        "key": rankpro_api_key,
        "groupId": group
    };

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const text = await response.json();

    console.log(text);
}
demote('Roblox')
