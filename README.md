# info
information about iobroker-community-adapters organization

# description
It's a github organization for iobroker adapters wich are manged by the community.

Goal is to help each other with the adapter development, so repositories don't get stale and keep alive.

# how to become a meber

At the moment, create an issue here and ask.

# requirements for repositories

Your repositorie(s) has to be already in the stabel repositorie for ioBroker. There are almost adapters on Github they have not been releasd or ready to use, for this case you can ask for help to make it ready/stable and bring it to this organization.

# technical information

## add git repo to organization

    1. Go to your GitHub repo that you want to move
    2. Change URLs in io-package.json and package.json form your GitHub repo to Org repo 
    3. Settings -> Danger Zone -> Transfer Ownership
    4. Click on 'Transfer'
    5. Type 'iobroker-community-adapters' as New owner
    6. Thats it

## add organization as npm owner

    npm access grant read-write iobroker-community-adapters:developers iobroker.<adaptername>
