const { group, rankpro_api_key } = require('../config.json')
async function findRobloxByDiscord(discordId) {
    let url = 'https://api.widgetdev.xyz/find-roblox-by-discord'

    const data = {
        "userId": discordId,
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
findRobloxByDiscord('1099084042432950275')
