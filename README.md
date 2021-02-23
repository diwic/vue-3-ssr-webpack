# vue-3-ssr-webpack

Problem 1: The wrong build of 'vue' is included by default, causing `vue.ssrUtils` to be undefined. 
Note: According to the README in vue/dist, vue should be externalised, so that's what I've tried here. Although I would still like to have the option to not externalise it.

Problem 2: The webpack build outputs a warning:

    WARNING in ./node_modules/@vue/server-renderer/dist/server-renderer.cjs.js 99:63-70
    Critical dependency: require function is used in a way in which dependencies cannot be statically extracted
    
Problem 3: While simply running `node ssrapp2.js` yields correct output, the output is empty when running the bundled version with `node dist/bundled.js`.
