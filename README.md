![Logo](https://avatars1.githubusercontent.com/u/46189175?s=400&u=44752d5acd9de2cacf9ded7cdab819cd099a7213&v=4)

# Info
Information about iobroker-community-adapters organization

# Description
It's a github organization for iobroker adapters wich are manged by the community.

Goal is to help each other with the adapter development, so repositories don't get stale and keep alive.

# how to become a member

Click [HERE](https://github.com/iobroker-community-adapters/info/issues/new?assignees=Jey-Cee&labels=new+member&template=please-add-me-as-member.md&title=Please+add+me+as+a+member) and fill out the template.
You will receive two invitation emails one for Github and one for npmjs.com. 

# chat 

- Preferd Chat on Discord: https://discord.gg/vmVYqPV (german) 
- Chat on Telegram : https://t.me/joinchat/EdtEphZDh1lp4bO8BoYqfA (german) synced with discord channel
- Chat on Telegram: https://t.me/joinchat/FungexBCt2Vv_mjwtAU0pQ (english)

# requirements for repositories

Your repositorie(s) has to be already in the stable or minimum in latest repositorie for ioBroker. There are almost adapters on Github they have not been released or ready to use, for this case you can ask for help to make it ready/stable and bring it to this organization.

# technical information

## add git repo to organization

    1. Go to your GitHub repo that you want to move
    2. Change URLs in io-package.json, package.json and README.md form your GitHub repo to Org repo 
    3. Settings -> Danger Zone -> Transfer Ownership
    4. Click on 'Transfer'
    5. Type 'iobroker-community-adapters' as New owner
    6. Add the oranization as an owner of your npm packages (npm access grant read-write iobroker-community-adapters:developers iobroker.<adaptername>)
    7. Change the url of your repo via pull req at https://github.com/ioBroker/ioBroker.repositories
    8. Thats it

## add organization as npm owner

After you have accepted the membership use the link below and enter the package name (iobroker.<adaptername>) and hit "Add existing package".
    
    https://www.npmjs.com/settings/iobroker-community-adapters/teams/team/developers/access
    
Alternative (does not work in most cases):
    
    npm access grant read-write iobroker-community-adapters:developers iobroker.<adaptername>
    
## Maintainers
List of maintainers for every adapter in iobroker-community-adapters:

* ioBroker.accuweather - 
* ioBroker.cec-community - 
* ioBroker.cec2 - ![Garfonso](https://github.com/Garfonso/)
* ioBroker.comfoair - 
* ioBroker.coronavirus-statistics - 
* ioBroker.deconz - (@Jey-cee)
* ioBroker.discovergy - 
* ioBroker.email - (@Apollon77)
* ioBroker.enocean - 
* ioBroker.fhem - (@Apollon77)
* ioBroker.find-my-iphone-community - 
* ioBroker.firetv - 
* ioBroker.fitbit-api - (@Garfonso)
* ioBroker.fronius - 
* ioBroker.habpanel - 
* ioBroker.hid-community - 
* ioBroker.hmip - @jogibear9988 - searching for sombody takeing it over
* ioBroker.hue - foxriver76 (@Apollon77)
* ioBroker.ical - (@Apollon77)
* ioBroker.ico-cloud - ![Garfonso](https://github.com/Garfonso/)
* ioBroker.info -
* ioBroker.js2fs - (@Apollon77)
* ioBroker.knmi-weather - 
* ioBroker.koubachi-community - 
* ioBroker.landroid - 
* ioBroker.lightify-community - 
* ioBroker.luxtronik1 - 
* ioBroker.miele-community - 
* ioBroker.mihome-plug - 
* ioBroker.mihome-vacuum - 
* ioBroker.multicast - 
* ioBroker.mydlink - ![Garfonso](https://github.com/Garfonso/)
* ioBroker.mysensors-2-community - 
* ioBroker.myvbus - [@pdbjjens](https://github.com/pdbjjens/)
* ioBroker.oilfox - @jogibear9988
* ioBroker.openhab - 
* ioBroker.opentherm - 
* ioBroker.opi - 
* ioBroker.owntracks - 
* ioBroker.panasonic-viera - 
* ioBroker.places - 
* ioBroker.proxmox - 
* ioBroker.roomba - 
* ioBroker.rpi2 - (@Garfonso)
* ioBroker.samsung-community - 
* ioBroker.sma-em - 
* ioBroker.smappee - 
* ioBroker.snmp - 
* ioBroker.solarlog - 
* ioBroker.sony-bravia - 
* ioBroker.sourceanalytix - 
* ioBroker.spotify-premium - [@twonky4](https://github.com/twonky4/)
* ioBroker.tado - 
* ioBroker.telegram - (@Apollon77) (@GermanBluefox) (@Garfonso)
* ioBroker.tr-064 - (@Apollon77) (@GermanBluefox)
* ioBroker.unifi - [braindead1](https://github.com/braindead1/)
* ioBroker.upnp - (@Jey-cee)
* ioBroker.vedirect - 
* ioBroker.vis-material - 
* ioBroker.vis-sip-asterisk - 
* ioBroker.weatherunderground - 
* ioBroker.web-speedy - 
* ioBroker.wifilight - 
* ioBroker.wlanthermo-nano - 
* ioBroker.wled - 
* ioBroker.wm-bus-community - 
* ioBroker.worx - 
* ioBroker.yamaha-community - (@Garfonso)
* ioBroker.yeelight-2 - 
* ioBroker.zoneminder - 
* iobroker.vis-steelseries-canvas - 
