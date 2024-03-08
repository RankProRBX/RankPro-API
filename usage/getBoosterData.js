const { group, rankpro_api_key } = require('./config.json')
async function getBoosterData(userId){
    let url = 'https://rankpro.widgetdev.xyz/getBoosterData'

    const data = {
        key: rankpro_api_key,
        groupId: group,
        userId: userId
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
