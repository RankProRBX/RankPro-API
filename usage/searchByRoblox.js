const { group, rankpro_api_key } = require('./config.json')
async function searchByUsername(username){
    const url = `https://api.widgetdev.xyz/searchByUsername`;

    const data = {
        key: rankpro_api_key,
        groupId: group,
        username: username
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
searchByUsername('just_westtt')
