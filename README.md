![Logo](https://avatars1.githubusercontent.com/u/46189175?s=400&u=44752d5acd9de2cacf9ded7cdab819cd099a7213&v=4)

# Info

Information about iobroker-community-adapters organization

# Description

It's a github organization for iobroker adapters wich are manged by the community.

Goal is to help each other with the adapter development, so repositories don't get stale and keep alive.

# How to become a member

Activate 2FA for your Github and npmjs account, this is a must have.
Then Click [HERE](https://github.com/iobroker-community-adapters/info/issues/new?assignees=Jey-Cee&labels=new+member&template=please-add-me-as-member.md&title=Please+add+me+as+a+member) and fill out the template.
You will receive two invitation emails one for Github and one for npmjs.com.

# Chat

- Prefered Chat on Discord: https://discord.gg/vmVYqPV (german)
- Chat on Telegram : https://t.me/joinchat/EdtEphZDh1lp4bO8BoYqfA (german) synced with discord channel
- Chat on Telegram: https://t.me/joinchat/FungexBCt2Vv_mjwtAU0pQ (english)

# Requirements for repositories

Your repositorie(s) has to be already in the stable or minimum in latest repository for ioBroker. There are many adapters on Github that have not been released or ready to use, for this case you can ask for help to make it ready/stable and bring it to this organization.

# Technical information

## Add git repo to organization

1. Go to your GitHub repo that you want to move
2. Change URLs in io-package.json, package.json and README.md form your GitHub repo to Org repo
3. Settings -> Danger Zone -> Transfer Ownership
4. Click on 'Transfer'
5. Type 'iobroker-community-adapters' as New owner
6. Add the organization as an owner of your npm packages, for help look below
7. Change the url of your repo via pull req at https://github.com/ioBroker/ioBroker.repositories
8. Thats it

## Add organization as npm owner

After you have accepted the membership, we have to add you to the developers team befor it is possible to grant the org acces to the package. (Thank you npm for this horrible right managment for org's)
Then use the link below and enter the package name (iobroker.<adaptername>) and hit "Add existing package".

    https://www.npmjs.com/settings/iobroker-community-adapters/teams/team/developers/access

Alternative use the CLI:

```bash
npm access grant read-write iobroker-community-adapters:developers iobroker.<adaptername>
```

## Maintainers

List of maintainers for every adapter in iobroker-community-adapters

| Adapter | Beta | Stable | Installed | Teststatus | Maintainer |
|---------|------|--------|-----------|------------|------------|
| [accuweather](https://github.com/iobroker-community-adapters/ioBroker.accuweather) | v1.3.1 | v1.3.1 | 4299 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.accuweather/workflows/Test%20and%20Release/badge.svg) | - |
| [acme](https://github.com/iobroker-community-adapters/ioBroker.acme) | v0.1.0 | v0.1.0 | 235 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.acme/workflows/Test%20and%20Release/badge.svg) | [raintonr](https://github.com/raintonr/) |
| [beckhoff](https://github.com/iobroker-community-adapters/ioBroker.beckhoff) | v1.5.3 | v1.5.2 | 278 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.beckhoff/workflows/Test%20and%20Release/badge.svg) | - |
| [benq](https://github.com/iobroker-community-adapters/ioBroker.benq) | v0.2.5 | v0.2.5 | 65 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.benq/workflows/Test%20and%20Release/badge.svg) | - |
| [boschindego](https://github.com/iobroker-community-adapters/ioBroker.boschindego) | v?? | v?? | ?? | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.boschindego/workflows/Test%20and%20Release/badge.svg) | - |
| [bosesoundtouch](https://github.com/iobroker-community-adapters/ioBroker.bosesoundtouch) | v0.10.3 | v0.10.3 | 1246 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.bosesoundtouch/workflows/Test%20and%20Release/badge.svg) | - |
| [botvac](https://github.com/iobroker-community-adapters/ioBroker.botvac) | v2.0.1 | v2.0.1 | 509 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.botvac/workflows/Test%20and%20Release/badge.svg) | - |
| [broadlink2](https://github.com/iobroker-community-adapters/ioBroker.broadlink2) | v2.1.5 | v2.1.5 | 3853 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.broadlink2/workflows/Test%20and%20Release/badge.svg) | - |
| [cec2](https://github.com/iobroker-community-adapters/ioBroker.cec2) | v0.1.1 | v0.1.1 | 68 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.cec2/workflows/Test%20and%20Release/badge.svg) | [Garfonso](https://github.com/Garfonso/) |
| [chromecast](https://github.com/iobroker-community-adapters/ioBroker.chromecast) | v3.0.3 | v3.0.3 | 6147 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.chromecast/workflows/Test%20and%20Release/badge.svg) | - |
| [cleveron](https://github.com/iobroker-community-adapters/ioBroker.cleveron) | v0.0.5 | v0.0.5 | 2 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.cleveron/workflows/Test%20and%20Release/badge.svg) | - |
| [comfoair](https://github.com/iobroker-community-adapters/ioBroker.comfoair) | v1.1.8 | v1.1.8 | 221 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.comfoair/workflows/Test%20and%20Release/badge.svg) | - |
| [doorbird](https://github.com/iobroker-community-adapters/ioBroker.doorbird) | v1.3.0 | v1.3.0 | 1333 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.doorbird/workflows/Test%20and%20Release/badge.svg) | [Schmakus](https://github.com/Schmakus/) |
| [email](https://github.com/iobroker-community-adapters/ioBroker.email) | v1.2.0 | v1.2.0 | 8229 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.email/workflows/Test%20and%20Release/badge.svg) | [Apollon77](https://github.com/Apollon77/) |
| [enigma2](https://github.com/iobroker-community-adapters/ioBroker.enigma2) | v2.0.5 | v2.0.5 | 1072 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.enigma2/workflows/Test%20and%20Release/badge.svg) | - |
| [envertech-pv](https://github.com/iobroker-community-adapters/ioBroker.envertech-pv) | v1.0.2 | v1.0.2 | 187 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.envertech-pv/workflows/Test%20and%20Release/badge.svg) | [mcm1957](https://github.com/mcm1957/) |
| [epson_stylus_px830](https://github.com/iobroker-community-adapters/ioBroker.epson_stylus_px830) | v0.2.1 | v0.2.1 | 61 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.epson_stylus_px830/workflows/Test%20and%20Release/badge.svg) | - |
| [exchangerates](https://github.com/iobroker-community-adapters/ioBroker.exchangerates) | v0.0.14 | v0.0.14 | 181 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.exchangerates/workflows/Test%20and%20Release/badge.svg) | - |
| [fakeroku](https://github.com/iobroker-community-adapters/ioBroker.fakeroku) | v0.2.2 | v0.2.2 | 830 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.fakeroku/workflows/Test%20and%20Release/badge.svg) | - |
| [feiertage](https://github.com/iobroker-community-adapters/ioBroker.feiertage) | v1.1.4 | v1.1.4 | 7594 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.feiertage/workflows/Test%20and%20Release/badge.svg) | - |
| [fhem](https://github.com/iobroker-community-adapters/ioBroker.fhem) | v2.0.5 | v2.0.5 | 2689 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.fhem/workflows/Test%20and%20Release/badge.svg) | [Apollon77](https://github.com/Apollon77/) |
| [firetv](https://github.com/iobroker-community-adapters/ioBroker.firetv) | v2.0.2 | v2.0.2 | 3049 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.firetv/workflows/Test%20and%20Release/badge.svg) | - |
| [foobar2000](https://github.com/iobroker-community-adapters/ioBroker.foobar2000) | v2.1.0 | v2.0.4 | 40 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.foobar2000/workflows/Test%20and%20Release/badge.svg) | - |
| [fritzbox](https://github.com/iobroker-community-adapters/ioBroker.fritzbox) | v0.5.0 | v0.5.0 | 4555 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.fritzbox/workflows/Test%20and%20Release/badge.svg) | - |
| [fronius](https://github.com/iobroker-community-adapters/ioBroker.fronius) | v2.0.2 | v2.0.2 | 3163 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.fronius/workflows/Test%20and%20Release/badge.svg) | [nkleber78](https://github.com/nkleber78/), [mcm1957](https://github.com/mcm1957/) |
| [frontier_silicon](https://github.com/iobroker-community-adapters/ioBroker.frontier_silicon) | v0.1.1 | v0.1.1 | 723 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.frontier_silicon/workflows/Test%20and%20Release/badge.svg) | [pdbjjens](https://github.com/pdbjjens/) |
| [google-smart-home-fulfillment](https://github.com/iobroker-community-adapters/ioBroker.google-smart-home-fulfillment) | v?? | v?? | ?? | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.google-smart-home-fulfillment/workflows/Test%20and%20Release/badge.svg) | [raintonr](https://github.com/raintonr/) |
| [habpanel](https://github.com/iobroker-community-adapters/ioBroker.habpanel) | v0.5.0 | v0.5.0 | 7354 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.habpanel/workflows/Test%20and%20Release/badge.svg) | - |
| [haier](https://github.com/iobroker-community-adapters/ioBroker.haier) | v1.0.4 | v1.0.4 | 67 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.haier/workflows/Test%20and%20Release/badge.svg) | - |
| [harmony](https://github.com/iobroker-community-adapters/ioBroker.harmony) | v1.3.0 | v1.2.2 | 4967 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.harmony/workflows/Test%20and%20Release/badge.svg) | - |
| [helios](https://github.com/iobroker-community-adapters/ioBroker.helios) | v0.0.3 | v0.0.3 | 142 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.helios/workflows/Test%20and%20Release/badge.svg) | - |
| [hid-community](https://github.com/iobroker-community-adapters/ioBroker.hid-community) | v0.3.0 | v0.3.0 | 309 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.hid-community/workflows/Test%20and%20Release/badge.svg) | - |
| [hikvision-alarmserver](https://github.com/iobroker-community-adapters/ioBroker.hikvision-alarmserver) | v0.1.0 | v0.1.0 | 291 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.hikvision-alarmserver/workflows/Test%20and%20Release/badge.svg) | [raintonr](https://github.com/raintonr/) |
| [hmip](https://github.com/iobroker-community-adapters/ioBroker.hmip) | v1.20.0 | v1.20.0 | 6529 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.hmip/workflows/Test%20and%20Release/badge.svg) | [jogibear9988](https://github.com/jogibear9988/) |
| [homeconnect](https://github.com/iobroker-community-adapters/ioBroker.homeconnect) | v1.1.1 | v1.1.1 | 5236 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.homeconnect/workflows/Test%20and%20Release/badge.svg) | - |
| [homepilot](https://github.com/iobroker-community-adapters/ioBroker.homepilot) | v1.1.6 | v1.1.6 | 449 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.homepilot/workflows/Test%20and%20Release/badge.svg) | - |
| [hue](https://github.com/iobroker-community-adapters/ioBroker.hue) | v3.10.1 | v3.10.1 | 14189 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.hue/workflows/Test%20and%20Release/badge.svg) | [foxriver76](https://github.com/foxriver76/), [Apollon77](https://github.com/Apollon77/) |
| [hue-extended](https://github.com/iobroker-community-adapters/ioBroker.hue-extended) | v2.0.0 | v2.0.0 | 7587 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.hue-extended/workflows/Test%20and%20Release/badge.svg) | ![DEPRECATED](https://img.shields.io/badge/DEPRECATED-black) |
| [ical](https://github.com/iobroker-community-adapters/ioBroker.ical) | v1.13.3 | v1.13.3 | 18013 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.ical/workflows/Test%20and%20Release/badge.svg) | [Apollon77](https://github.com/Apollon77/), [jens-maus](https://github.com/jens-maus/) |
| [iceroad](https://github.com/iobroker-community-adapters/ioBroker.iceroad) | v1.2.1 | v1.2.1 | 174 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.iceroad/workflows/Test%20and%20Release/badge.svg) | [ciddi89](https://github.com/ciddi89/) |
| [ico-cloud](https://github.com/iobroker-community-adapters/ioBroker.ico-cloud) | v1.1.0 | v1.1.0 | 130 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.ico-cloud/workflows/Test%20and%20Release/badge.svg) | [Garfonso](https://github.com/Garfonso/) |
| [icons-eclipse-smarthome-classic](https://github.com/iobroker-community-adapters/ioBroker.icons-eclipse-smarthome-classic) | v1.0.0 | v?? | 58 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.icons-eclipse-smarthome-classic/workflows/Test%20and%20Release/badge.svg) | - |
| [icons-freepic](https://github.com/iobroker-community-adapters/ioBroker.icons-freepic) | v1.0.0 | v?? | 53 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.icons-freepic/workflows/Test%20and%20Release/badge.svg) | - |
| [icons-smarthome](https://github.com/iobroker-community-adapters/ioBroker.icons-smarthome) | v1.0.0 | v?? | 57 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.icons-smarthome/workflows/Test%20and%20Release/badge.svg) | - |
| [info](https://github.com/iobroker-community-adapters/ioBroker.info) | v2.0.0 | v2.0.0 | 33656 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.info/workflows/Test%20and%20Release/badge.svg) | - |
| [kecontact](https://github.com/iobroker-community-adapters/ioBroker.kecontact) | v2.0.2 | v2.0.2 | 720 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.kecontact/workflows/Test%20and%20Release/badge.svg) | [Sneak-L8](https://github.com/Sneak-L8/) |
| [kodi](https://github.com/iobroker-community-adapters/ioBroker.kodi) | v3.0.0 | v3.0.0 | 1430 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.kodi/workflows/Test%20and%20Release/badge.svg) | - |
| [legrand-ecocompteur](https://github.com/iobroker-community-adapters/ioBroker.legrand-ecocompteur) | v1.0.0 | v1.0.0 | 6 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.legrand-ecocompteur/workflows/Test%20and%20Release/badge.svg) | [raintonr](https://github.com/raintonr/) |
| [lgtv](https://github.com/iobroker-community-adapters/ioBroker.lgtv) | v2.1.2 | v2.1.1 | 3823 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.lgtv/workflows/Test%20and%20Release/badge.svg) | - |
| [lgtv-rs](https://github.com/iobroker-community-adapters/ioBroker.lgtv-rs) | v0.1.1 | v0.1.1 | 90 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.lgtv-rs/workflows/Test%20and%20Release/badge.svg) | - |
| [lightify](https://github.com/iobroker-community-adapters/ioBroker.lightify) | v0.2.16 | v0.2.16 | 640 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.lightify/workflows/Test%20and%20Release/badge.svg) | - |
| [logparser](https://github.com/iobroker-community-adapters/ioBroker.logparser) | v2.2.0 | v2.2.0 | 1435 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.logparser/workflows/Test%20and%20Release/badge.svg) | [ciddi89](https://github.com/ciddi89/) |
| [luxtronik1](https://github.com/iobroker-community-adapters/ioBroker.luxtronik1) | v0.3.5 | v0.3.5 | 149 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.luxtronik1/workflows/Test%20and%20Release/badge.svg) | - |
| [mclighting](https://github.com/iobroker-community-adapters/ioBroker.mclighting) | v0.1.2 | v0.1.2 | 550 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.mclighting/workflows/Test%20and%20Release/badge.svg) | - |
| [mercury](https://github.com/iobroker-community-adapters/ioBroker.mercury) | v0.1.6 | v0.1.6 | 46 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.mercury/workflows/Test%20and%20Release/badge.svg) | - |
| [miele](https://github.com/iobroker-community-adapters/ioBroker.miele) | v0.1.5 | v0.1.5 | 567 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.miele/workflows/Test%20and%20Release/badge.svg) | - |
| [mihome-plug](https://github.com/iobroker-community-adapters/ioBroker.mihome-plug) | v0.2.1 | v0.2.1 | 222 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.mihome-plug/workflows/Test%20and%20Release/badge.svg) | - |
| [mihome-vacuum](https://github.com/iobroker-community-adapters/ioBroker.mihome-vacuum) | v4.1.0 | v4.0.0 | 7530 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.mihome-vacuum/workflows/Test%20and%20Release/badge.svg) | - |
| [mikrotik](https://github.com/iobroker-community-adapters/ioBroker.mikrotik) | v1.1.1 | v1.1.1 | 315 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.mikrotik/workflows/Test%20and%20Release/badge.svg) | - |
| [mpd](https://github.com/iobroker-community-adapters/ioBroker.mpd) | v1.1.1 | v1.1.1 | 544 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.mpd/workflows/Test%20and%20Release/badge.svg) | - |
| [mqtt-client](https://github.com/iobroker-community-adapters/ioBroker.mqtt-client) | v1.7.0 | v1.6.5 | 7701 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.mqtt-client/workflows/Test%20and%20Release/badge.svg) | - |
| [mydlink](https://github.com/iobroker-community-adapters/ioBroker.mydlink) | v1.3.5 | v1.3.4 | 176 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.mydlink/workflows/Test%20and%20Release/badge.svg) | [Garfonso](https://github.com/Garfonso/) |
| [myenergi](https://github.com/iobroker-community-adapters/ioBroker.myenergi) | v0.0.3 | v0.0.3 | 253 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.myenergi/workflows/Test%20and%20Release/badge.svg) | [TA2k](https://github.com/TA2k/) |
| [myvbus](https://github.com/iobroker-community-adapters/ioBroker.myvbus) | v0.2.5 | v0.2.5 | 160 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.myvbus/workflows/Test%20and%20Release/badge.svg) | [pdbjjens](https://github.com/pdbjjens/) |
| [nsclient](https://github.com/iobroker-community-adapters/ioBroker.nsclient) | v0.2.0 | v0.1.2 | 22 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.nsclient/workflows/Test%20and%20Release/badge.svg) | [mcm1957](https://github.com/mcm1957/) |
| [nuki-extended](https://github.com/iobroker-community-adapters/ioBroker.nuki-extended) | v2.6.5 | v2.6.5 | 2371 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.nuki-extended/workflows/Test%20and%20Release/badge.svg) | - |
| [oilfox](https://github.com/iobroker-community-adapters/ioBroker.oilfox) | v4.2.0 | v4.2.0 | 431 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.oilfox/workflows/Test%20and%20Release/badge.svg) | - |
| [omnicomm-lls](https://github.com/iobroker-community-adapters/ioBroker.omnicomm-lls) | v0.0.7 | v0.0.7 | 5 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.omnicomm-lls/workflows/Test%20and%20Release/badge.svg) | - |
| [onvif](https://github.com/iobroker-community-adapters/ioBroker.onvif) | v1.1.1 | v1.0.5 | 4291 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.onvif/workflows/Test%20and%20Release/badge.svg) | [TA2k](https://github.com/TA2k/) |
| [openhab](https://github.com/iobroker-community-adapters/ioBroker.openhab) | v1.1.0 | v1.1.0 | 1119 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.openhab/workflows/Test%20and%20Release/badge.svg) | - |
| [openknx](https://github.com/iobroker-community-adapters/ioBroker.openknx) | v0.5.3 | v0.5.3 | 2663 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.openknx/workflows/Test%20and%20Release/badge.svg) | - |
| [opi](https://github.com/iobroker-community-adapters/ioBroker.opi) | v0.1.2 | v0.1.2 | 127 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.opi/workflows/Test%20and%20Release/badge.svg) | - |
| [owntracks](https://github.com/iobroker-community-adapters/ioBroker.owntracks) | v1.0.5 | v1.0.5 | 619 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.owntracks/workflows/Test%20and%20Release/badge.svg) | - |
| [panasonic-viera](https://github.com/iobroker-community-adapters/ioBroker.panasonic-viera) | v2.0.0 | v2.0.0 | 915 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.panasonic-viera/workflows/Test%20and%20Release/badge.svg) | - |
| [philips-air](https://github.com/iobroker-community-adapters/ioBroker.philips-air) | v1.0.3 | v1.0.3 | 399 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.philips-air/workflows/Test%20and%20Release/badge.svg) | - |
| [pid](https://github.com/iobroker-community-adapters/ioBroker.pid) | v0.0.8 | v?? | 49 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.pid/workflows/Test%20and%20Release/badge.svg) | [mcm1957](https://github.com/mcm1957/) |
| [places](https://github.com/iobroker-community-adapters/ioBroker.places) | v1.1.2 | v1.1.2 | 570 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.places/workflows/Test%20and%20Release/badge.svg) | - |
| [plex](https://github.com/iobroker-community-adapters/ioBroker.plex) | v1.1.4 | v1.1.3 | 1244 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.plex/workflows/Test%20and%20Release/badge.svg) | [ticaki](https://github.com/ticaki/) |
| [proxmox](https://github.com/iobroker-community-adapters/ioBroker.proxmox) | v2.2.2 | v2.2.1 | 4288 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.proxmox/workflows/Test%20and%20Release/badge.svg) | - |
| [pushbullet](https://github.com/iobroker-community-adapters/ioBroker.pushbullet) | v2.0.1 | v2.0.1 | 331 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.pushbullet/workflows/Test%20and%20Release/badge.svg) | - |
| [pvforecast](https://github.com/iobroker-community-adapters/ioBroker.pvforecast) | v2.9.0 | v2.9.0 | 5342 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.pvforecast/workflows/Test%20and%20Release/badge.svg) | [klein0r](https://github.com/klein0r/) |
| [radar2](https://github.com/iobroker-community-adapters/ioBroker.radar2) | v2.1.0 | v2.0.8 | 3314 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.radar2/workflows/Test%20and%20Release/badge.svg) | - |
| [ring](https://github.com/iobroker-community-adapters/ioBroker.ring) | v5.0.10 | v3.2.2 | 2512 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.ring/workflows/Test%20and%20Release/badge.svg) | [theimo1221](https://github.com/theimo1221/) |
| [roadtraffic](https://github.com/iobroker-community-adapters/ioBroker.roadtraffic) | v1.0.2 | v?? | 230 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.roadtraffic/workflows/Test%20and%20Release/badge.svg) | - |
| [roomba](https://github.com/iobroker-community-adapters/ioBroker.roomba) | v1.2.2 | v1.2.2 | 1689 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.roomba/workflows/Test%20and%20Release/badge.svg) | - |
| [rpi2](https://github.com/iobroker-community-adapters/ioBroker.rpi2) | v1.3.2 | v1.3.2 | 13123 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.rpi2/workflows/Test%20and%20Release/badge.svg) | [Garfonso](https://github.com/Garfonso/) |
| [samsung](https://github.com/iobroker-community-adapters/ioBroker.samsung) | v0.5.11 | v0.5.11 | 4957 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.samsung/workflows/Test%20and%20Release/badge.svg) | - |
| [samsung_tizen](https://github.com/iobroker-community-adapters/ioBroker.samsung_tizen) | v?? | v?? | ?? | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.samsung_tizen/workflows/Test%20and%20Release/badge.svg) | - |
| [sanext](https://github.com/iobroker-community-adapters/ioBroker.sanext) | v0.0.5 | v0.0.5 | 3 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.sanext/workflows/Test%20and%20Release/badge.svg) | - |
| [shelly](https://github.com/iobroker-community-adapters/ioBroker.shelly) | v6.6.1 | v6.6.1 | 28790 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.shelly/workflows/Test%20and%20Release/badge.svg) | [klein0r](https://github.com/klein0r/) |
| [sma-em](https://github.com/iobroker-community-adapters/ioBroker.sma-em) | v1.0.0 | v1.0.0 | 1671 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.sma-em/workflows/Test%20and%20Release/badge.svg) | [pdbjjens](https://github.com/pdbjjens/) |
| [smappee](https://github.com/iobroker-community-adapters/ioBroker.smappee) | v0.2.6 | v0.2.6 | 161 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.smappee/workflows/Test%20and%20Release/badge.svg) | - |
| [smartcontrol](https://github.com/iobroker-community-adapters/ioBroker.smartcontrol) | v2.0.1 | v2.0.1 | 2213 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.smartcontrol/workflows/Test%20and%20Release/badge.svg) | [oelison](https://github.com/oelison/) |
| [snmp](https://github.com/iobroker-community-adapters/ioBroker.snmp) | v3.1.0 | v3.1.0 | 2236 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.snmp/workflows/Test%20and%20Release/badge.svg) | [mcm1957](https://github.com/mcm1957/) |
| [solarlog](https://github.com/iobroker-community-adapters/ioBroker.solarlog) | v2.2.8 | v2.2.8 | 883 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.solarlog/workflows/Test%20and%20Release/badge.svg) | - |
| [solarwetter](https://github.com/iobroker-community-adapters/ioBroker.solarwetter) | v1.1.5 | v1.1.5 | 1463 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.solarwetter/workflows/Test%20and%20Release/badge.svg) | - |
| [sony-bravia](https://github.com/iobroker-community-adapters/ioBroker.sony-bravia) | v1.0.9 | v1.0.9 | 1722 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.sony-bravia/workflows/Test%20and%20Release/badge.svg) | - |
| [spotify-premium](https://github.com/iobroker-community-adapters/ioBroker.spotify-premium) | v1.3.1 | v1.2.2 | 3623 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.spotify-premium/workflows/Test%20and%20Release/badge.svg) | [aruttkamp](https://github.com/aruttkamp/) |
| [starline](https://github.com/iobroker-community-adapters/ioBroker.starline) | v1.1.3 | v1.1.3 | 57 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.starline/workflows/Test%20and%20Release/badge.svg) | - |
| [statistics](https://github.com/iobroker-community-adapters/ioBroker.statistics) | v2.4.0 | v2.3.0 | 3674 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.statistics/workflows/Test%20and%20Release/badge.svg) | [klein0r](https://github.com/klein0r/) |
| [stockmarket](https://github.com/iobroker-community-adapters/ioBroker.stockmarket) | v0.0.2 | v?? | 186 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.stockmarket/workflows/Test%20and%20Release/badge.svg) | - |
| [synology](https://github.com/iobroker-community-adapters/ioBroker.synology) | v3.0.1 | v3.0.1 | 7736 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.synology/workflows/Test%20and%20Release/badge.svg) | - |
| [systeminfo](https://github.com/iobroker-community-adapters/ioBroker.systeminfo) | v1.1.0 | v1.1.0 | 2239 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.systeminfo/workflows/Test%20and%20Release/badge.svg) | - |
| [tankerkoenig](https://github.com/iobroker-community-adapters/ioBroker.tankerkoenig) | v3.3.7 | v3.3.7 | 10067 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.tankerkoenig/workflows/Test%20and%20Release/badge.svg) | [xXBJXx](https://github.com/xXBJXx/) |
| [telegram](https://github.com/iobroker-community-adapters/ioBroker.telegram) | v3.0.0 | v2.0.1 | 19662 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.telegram/workflows/Test%20and%20Release/badge.svg) | [Apollon77](https://github.com/Apollon77/), [GermanBluefox](https://github.com/GermanBluefox/), [Garfonso](https://github.com/Garfonso/) |
| [tesla-motors](https://github.com/iobroker-community-adapters/ioBroker.tesla-motors) | v1.3.5 | v1.3.2 | 1533 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.tesla-motors/workflows/Test%20and%20Release/badge.svg) | - |
| [tr-064](https://github.com/iobroker-community-adapters/ioBroker.tr-064) | v4.2.18 | v4.2.18 | 23803 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.tr-064/workflows/Test%20and%20Release/badge.svg) | [Apollon77](https://github.com/Apollon77/), [GermanBluefox](https://github.com/GermanBluefox/) |
| [tractive-gps](https://github.com/iobroker-community-adapters/ioBroker.tractive-gps) | v1.1.0 | v?? | 31 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.tractive-gps/workflows/Test%20and%20Release/badge.svg) | - |
| [tvspielfilm](https://github.com/iobroker-community-adapters/ioBroker.tvspielfilm) | v2.0.5 | v2.0.5 | 1309 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.tvspielfilm/workflows/Test%20and%20Release/badge.svg) | - |
| [unifi](https://github.com/iobroker-community-adapters/ioBroker.unifi) | v0.6.6 | v0.6.6 | 5260 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.unifi/workflows/Test%20and%20Release/badge.svg) | - |
| [vis-justgage](https://github.com/iobroker-community-adapters/ioBroker.vis-justgage) | v2.0.0 | v1.0.2 | 9512 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.vis-justgage/workflows/Test%20and%20Release/badge.svg) | - |
| [vis-material](https://github.com/iobroker-community-adapters/ioBroker.vis-material) | v0.1.3 | v?? | 2087 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.vis-material/workflows/Test%20and%20Release/badge.svg) | - |
| [vis-material-advanced](https://github.com/iobroker-community-adapters/ioBroker.vis-material-advanced) | v1.7.4 | v1.7.4 | 8981 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.vis-material-advanced/workflows/Test%20and%20Release/badge.svg) | - |
| [vis-players](https://github.com/iobroker-community-adapters/ioBroker.vis-players) | v0.1.6 | v0.1.6 | 5058 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.vis-players/workflows/Test%20and%20Release/badge.svg) | - |
| [vis-sip-asterisk](https://github.com/iobroker-community-adapters/ioBroker.vis-sip-asterisk) | v?? | v?? | ?? | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.vis-sip-asterisk/workflows/Test%20and%20Release/badge.svg) | - |
| [weatherunderground](https://github.com/iobroker-community-adapters/ioBroker.weatherunderground) | v3.6.0 | v3.6.0 | 7208 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.weatherunderground/workflows/Test%20and%20Release/badge.svg) | [mcm1957](https://github.com/mcm1957/) |
| [webui](https://github.com/iobroker-community-adapters/ioBroker.webui) | v0.13.0 | v0.12.3 | 127 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.webui/workflows/Test%20and%20Release/badge.svg) | [jogibear9988](https://github.com/jogibear9988/) |
| [wifilight](https://github.com/iobroker-community-adapters/ioBroker.wifilight) | v1.1.4 | v1.1.4 | 3024 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.wifilight/workflows/Test%20and%20Release/badge.svg) | - |
| [wolf-smartset](https://github.com/iobroker-community-adapters/ioBroker.wolf-smartset) | v1.1.1 | v1.1.1 | 447 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.wolf-smartset/workflows/Test%20and%20Release/badge.svg) | - |
| [worx](https://github.com/iobroker-community-adapters/ioBroker.worx) | v2.3.4 | v2.3.4 | 3821 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.worx/workflows/Test%20and%20Release/badge.svg) | [Lucky-ESA](https://github.com/Lucky-ESA/) |
| [xs1](https://github.com/iobroker-community-adapters/ioBroker.xs1) | v1.1.2 | v1.0.2 | 89 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.xs1/workflows/Test%20and%20Release/badge.svg) | - |
| [yamaha](https://github.com/iobroker-community-adapters/ioBroker.yamaha) | v0.5.3 | v0.5.3 | 1310 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.yamaha/workflows/Test%20and%20Release/badge.svg) | [Garfonso](https://github.com/Garfonso/) |
| [yeelight-2](https://github.com/iobroker-community-adapters/ioBroker.yeelight-2) | v1.2.1 | v1.2.1 | 1832 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.yeelight-2/workflows/Test%20and%20Release/badge.svg) | ![Need Maintanance](https://img.shields.io/badge/needs-MAINTENANCE-red) |
| [zoneminder](https://github.com/iobroker-community-adapters/ioBroker.zoneminder) | v0.3.3 | v?? | 130 | ![Test&Release](https://github.com/iobroker-community-adapters/iobroker.zoneminder/workflows/Test%20and%20Release/badge.svg) | - |

----

*Generated at: 2023-11-11T11:52:28.302Z*
