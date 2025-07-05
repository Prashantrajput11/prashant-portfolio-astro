---
title: "Expo Router - A brief intro"
description: "A beginner-friendly guide to building a simple cat gallery using Fetch API in vanilla JavaScript."
pubDate: "July 05 2025"
---

Expo Router is a file-based router for React Native and web applications. It allows you to manage navigation between screens in your app, allowing users to move seamlessly between different parts of your app's UI, using the same components on multiple platforms (Android, iOS, and web).

When a file is added to the **app** directory, the file automatically becomes a route in your navigation.

So if you are someone who has used react navigation earlier, you might be knowing that we have to setup navigation and screens explicitly

but with expo router, we don’t have to do that, and as the docs says, each file you define in the app directory becomes a route automatically.

_Now what does that means ??_

some of you might have used react navigation already and Expo router is built on top of react navigation only, so this means that we can customise our tabs stylings and other stylings same like we did in react navigation

but not all of you might have used react navigation hence i wont confuse you by taking the name of it again n again this tip was for someone who did used it

alright now lets move ahead

we will do a manual installation of expo router and keep building our knowledge around the key concepts of it.

official docs : https://docs.expo.dev/router/installation/#manual-installation

1. Let us first install it

Yes, we need to install all these dependencies.

```jsx
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```

1. Change the entry point

by default the entry point in our expo react native apps is index.js , that you can see in package.json file

but since we are using expo router now, we need to update the entry point to make things work.

in your package.json update the entry point like this

```jsx
{
  "main": "expo-router/entry"
}

```

1. For web

<aside>
💡

npx expo install react-native-web react-dom

</aside>

Then, enable [Metro web](https://docs.expo.dev/guides/customizing-metro/#adding-web-support-to-metro) support by adding the following to your [app config](https://docs.expo.dev/workflow/configuration/):

```jsx
{
	"web": {
	"bundler": "metro"
}
}
```

1. Start the server again

   ```jsx
   npx expo start --clear
   ```

Create files like index.js and profile.js and navigate

NOTE : The official docs has few more steps on installing expo router but all that is not needed in order to follow this tutorial. We don’t need deep linking yet and also we are not developing for web in this project. Hence we can skip those steps. Don’t worry! there is nothing we are missing in order to build this expense tracker app. Just follow with me.
