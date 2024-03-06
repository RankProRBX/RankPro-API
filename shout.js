async function shout(shoutmessage) {
    const url = 'https://api.widgetdev.xyz/shout';

    const data = {
        "message": shoutmessage,
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
shout('Hey group!')
