const { group, rankpro_api_key } = require('../config.json')
async function findDiscordByRobloxId(robloxId) {
    let url = 'https://api.widgetdev.xyz/find-discord-by-roblox'

    const data = {
        userId: robloxId,
        key: rankpro_api_key,
        groupId: group
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
findDiscordByRobloxId('2505492023')
