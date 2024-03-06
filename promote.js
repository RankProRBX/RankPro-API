async function promote(username) {
    const url = 'https://api.widgetdev.xyz/promote';

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
promote('Roblox')
