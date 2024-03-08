# RankPro-API
_The last Roblox API you'll ever need._
 
| Feature | Endpoint |
| ------ | ------ |
| shout | `https://api.widgetdev.xyz/shout` |
| promote | `https://api.widgetdev.xyz/promote` |
| demote | `https://api.widgetdev.xyz/demote` |
| setRank | `https://api.widgetdev.xyz/setRank` |
| findRobloxByDiscord | `https://api.widgetdev.xyz/find-roblox-by-discord` |
| findDiscordByRoblox | `https://api.widgetdev.xyz/find-discord-by-roblox` |
| searchByUsername | `https://api.widgetdev.xyz/searchByUsername` |

## ⚠️ Disclaimer
##### Roblox automaticaly invalidates account cookies when logging in from a different country. 
##### Please use a VPN located in America before fetching the account cookie.

## Fetching the account cookie
0. Start your VPN and connect to a server located in America
1. Open your preferred browser (i.e. Chrome, Firefox, etc)
2. Open an incognito window by pressing `CTRL + SHIFT + N`
3. Go to https://www.roblox.com/login and login to your bot account (_it **MUST** be an alternate account_)
4. Open inspect element by right clicking anywhere on your screen, and pressing Inspect Element, or press `CTRL + SHIFT + i`
5. At the top, you will see some buttons named Elements, Console, Source and Network. Next to network, there should be 2 arrrows.
6. Press the 2 arrows, and select Application inside of the dropdown menu it opened.
7. Inside the application menu, on the lefthand side, there should be a button named `Cookies`. Open the dropdown menu by pressing it twice
8. Press the link under it (https://www.roblox.com/)
9. Doing so should open another menu with a bunch of random letters, find the cookie with the name `.ROBLOSECURITY`
10. Copy the whole cookie, and run the `/set-cookie` command inside of your discord server with the RankPro bot
11. Once setup, you may CLOSE the incognito window

## Shout
_Shouts a message inside your group_
#### Instructions:
- Set the URL to  `https://api.widgetdev.xyz/shout`;
- Set headers to `'Content-Type': 'application/json'`;
- Set `body` to the following values:
    - `"message"`: **"Message to shout"**
    - `"key"`: **"RankPro API key"**
    - `"groupId"`: **"Group ID linked to the key"**
- Send as a `POST` request.

## Promote
_Promotes a user to the next available rank_
#### Instructions:
- Set the URL to  `https://api.widgetdev.xyz/promote`;
- Set headers to `'Content-Type': 'application/json'`;
- Set `body` to the following values:
    - `"target"`: **"Username"**
    - `"key"`: **"RankPro API key"**
    - `"groupId"`: **"Group ID linked to the key"**
- Send as a `POST` request.

## Demote
_Demotes a user to the previous rank_
#### Instructions:
- Set the URL to  `https://api.widgetdev.xyz/demote`;
- Set headers to `'Content-Type': 'application/json'`;
- Set `body` to the following values:
    - `"target"`: **"Username"**
    - `"key"`: **"RankPro API key"**
    - `"groupId"`: **"Group ID linked to the key"**
- Send as a `POST` request.

## Set Rank
_Sets a user's rank manually_
#### Instructions:
- Set the URL to  `https://api.widgetdev.xyz/setRank`;
- Set headers to `'Content-Type': 'application/json'`;
- Set `body` to the following values:
    - `"target"`: **"Username"**
    - `"rank"`: **Rank ID (integer, 1-254)**
    - `"key"`: **"RankPro API key"**
    - `"groupId"`: **"Group ID linked to the key"**
- Send as a `POST` request.

## Find Roblox Username by Discord ID
_Finds a user's Roblox username given their Roblox username_
#### Instructions:
- Set the URL to  `https://api.widgetdev.xyz/find-roblox-by-discord`;
- Set headers to `'Content-Type': 'application/json'`;
- Set `body` to the following values:
    - `"userId"`: **Discord ID**
    - `"key"`: **"RankPro API key"**
    - `"groupId"`: **"Group ID linked to the key"**
- Send as a `POST` request.

## Find Discord ID by Roblox Username
_Finds a user's Discord account ID given their Roblox username_
#### Instructions:
- Set the URL to  `https://api.widgetdev.xyz/find-discord-by-roblox`;
- Set headers to `'Content-Type': 'application/json'`;
- Set `body` to the following values:
    - `"userId"`: **Roblox ID**
    - `"key"`: **"RankPro API key"**
    - `"groupId"`: **"Group ID linked to the key"**
- Send as a `POST` request.
## Search by roblox username
_Finds a user's information based off username_
#### Instructions:
- Set the URL to `https://widgetdev.xyz/searchByUsername`;
- Set headers to `'Content-Type': 'application/json'`;
- Set `body` to the following values:
  - `"username"`: **"Roblox Username"**
  -`"key"`: **"RankPro API Key"**
  `"groupId"`: **Group ID linked to the key"**
