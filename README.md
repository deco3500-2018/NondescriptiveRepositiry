# The NondescriptiveRepositiry

<img src="https://camo.githubusercontent.com/e6ec27d5aecb2f884220376c92e0453160c76863/68747470733a2f2f692e696d6775722e636f6d2f6a4d49586374652e706e67"/>



## The Team

- Kyle Pettigrew s439536@student.uq.edu.au
- Scott Phillips S4431673@student.uq.edu.au
- Duy Anh Le (Joe) s4340673@student.uq.edu.au
- Zachary Clark s4437026@student.uq.edu.au
- Adam Roe s4430878@student.uq.edu.au

## Project Overview
This project tackles the problem space of gaming addiction in young adults and children, initally our idea for the problem space was to create a system or application which allowed parents to set tasks and goals for their kids to complete which in turn would allow them time to play there games depending on the difficulty or time it took to complete the chore or task. Through user testing and research this idea was refined to an application that is tailored to displaying complex information about gaming behaviour to parents via use of carefully crafted graphs.  


## Documentation and Process Information/Links

1. [Design Process](https://github.com/deco3500-2018/NondescriptiveRepositiry/wiki/Design-Process-Overview)
2. [Concept Proposal](https://github.com/deco3500-2018/NondescriptiveRepositiry/wiki/Proposal)
3. [Prototype Link](https://expo.io/@kpmate/GamerWatch)
4. [Protoype Functionality and Styling](https://github.com/deco3500-2018/NondescriptiveRepositiry/wiki/Prototype)
5. [User Research and Testing](https://github.com/deco3500-2018/NondescriptiveRepositiry/wiki/User-Research-data-&-Testing-Results)
6. [Academic Research](https://github.com/deco3500-2018/NondescriptiveRepositiry/wiki/Academic-Research)


## Deployment Guide and Usage Instructions

### For Development & Testing

#### How to install and develop the source code
##### Prerequisites
The following need to be installed on the system
* Node.js (including npm)

#####  Download the Repo
Download or clone the repo onto your local system

##### Install dependencies
1. First globally install the react cli `npm install -g react-native-cli` and real time editing tool expo globally via `npm install -g expo-cli` via your command line interface.

2. Navigate to the local repo inside of a command line interface (terminal, powershell, cmd) first type in `npm install`

##### Android and iOS native emulation development
An excellent guide on how to enable native emulation when developing the application follow the [link](https://facebook.github.io/react-native/docs/getting-started.html)

##### Start development server
type npm start in your cli and then navigate to it via your Expo phone app, any changes you make to the source code while the server is running will automatically be pushed to devices running from the server.

##### Trouble shooting 
If any errors occur you can seek help at
https://github.com/FormidableLabs/victory-native
https://facebook.github.io/react-native/docs/getting-started.html


#### For Testing and Using the application
##### Without modifications to test functionality
To test the application without any modifications or need to download the source code vist the url https://expo.io/@kpmate/GamerWatch

##### Test code developed locally
1. Start the server by navigating to the local repo inside of a command line interface (terminal, powershell, cmd) first type in `npm start`

2. Then type in `expo  publish` to the command line interface and your application will be published in production mode for both iOS and android with the changes you made.

3. You can now visit your application from the url expo posted in the CLI that is hosted externally as well as via your local server.



## Technology used

### React Native
React Native was used as the backbone of the application to allow for the mobile app to be built using only javascript whilst still maintating cross platform compatibility and rich mobile UI features. More information on this technology can be found [here](https://facebook.github.io/react-native/).

### Victory Native
Victory Native was used to visualise the data supplied to the application in meaniningful ways to the user. Currently the main forms of graphs implemented are pie charts, bar charts, and stacked graphs. The github for victory native can be found [here](https://github.com/FormidableLabs/victory-native)






