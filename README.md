# Info
Information about iobroker-community-adapters organization

# Description
It's a github organization for iobroker adapters wich are manged by the community.

Goal is to help each other with the adapter development, so repositories don't get stale and keep alive.

# how to become a member

At the moment, create an issue here and ask.

# how to move a repository to the organization

1.) After joining the organization move your repository via the github settings of your repo. It will be still accessible via the old URL.
2.) look for links and adapt if necessary (package.json, io-package.json, README.md)
3.) add the oranization as an owner of your npm packages (npm access grant read-write iobroker-community-adapters:developers iobroker.<adaptername>)
4.) change the url of your repo in https://github.com/ioBroker/ioBroker.repositories

# requirements for repositories

Your repositorie(s) has to be already in the stable or minimum in latest repositorie for ioBroker. There are almost adapters on Github they have not been released or ready to use, for this case you can ask for help to make it ready/stable and bring it to this organization.

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

