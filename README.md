## React-Native GuessNumber-app

### this project implements a simple guess number app with hints using React-native js framework 
</br>


### brief overview
in the first page you enter a cosnsidered number, you can reset it or go to the next page by pressing start game. the next page will show you application's guess numbers and you hint it with pressing lower or greater button. you're not permitted to decieve the app couse it gives you an alert. after the app guessed right number you're gauided to game over page and you can start it again. 

### details
+ app is runable on both android an ios platforms
+ app is implemented an animation using [lottie-react-native](https://github.com/lottie-react-native/lottie-react-native)  

### requirements
+ NodeJS
+ Android/ios Virtual or physical Device
</br> 



![res](https://user-images.githubusercontent.com/56467180/133289437-fac271df-b48b-476f-864b-2c5f333c3429.jpg)

the app imlimentation is highly inspired form a [react-native-course](https://www.udemy.com/course/react-native-the-practical-guide/) in Udemy

<br/>

### note
+ after cloning the project run `npm install` or `yarn` to get the node_module folder
+ then run `npx react-native run-android` or `react-native run-ios`
<br/>



## GuessNumber-app on web

### on this project I tried to deplpy the app on web with expo 
I tired to use react-native web and apply all the processes in this [page](https://github.com/necolas/react-native-web)
but I decided to use expo 'bare' workflow and I run the app on browser in an eye blink.

for this follow below instructions:

### Migrate from CRNA to the Expo CLI
All apps created with create-react-native-app, are compatible with Expo CLI without changes.
+ Upgrade react-native-scripts to v2.0.1 with:
`npm install --save --save-exact react-native-scripts@2.0.1`
or
+ `yarn add --exact react-native-scripts@2.0.1`
When you run npm start for the first time, Expo CLI will be installed.

### start expo on web
+	Install the latest version of the Expo CLI: npm i -g expo-cli
+	Add web dependencies: expo install react-native-web react-dom
+	Ensure your project has at least expo@^33.0.0 installed.
+	Start your project with expo start then press w to start Webpack and open the project in the browser.

for more information check [expo-ejection](https://docs.expo.dev/expokit/eject/)

