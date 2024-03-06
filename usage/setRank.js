const { group, rankpro_api_key } = require('../config.json')
async function setRank(username, rankId) {
    const url = 'https://api.widgetdev.xyz/setRank';

    const data = {
        "target": username,
        "rank": rankId,
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
setRank('Roblox', 5)
