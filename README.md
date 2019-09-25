# Random Quote Machine
A Free Code Camp Front End Libraries Project 

### Here's the [source code](https://github.com/will-sherman/random-quote-machine)
### Check out a [live demo](https://rqmfcc.netlify.com/) 

### Screenshots:
<img src="./screenshot_01.png" alt="example" width="10%" height="10%" style="border: none">
<img src="./screenshot_02.png" alt="example" width="30%" height="30%" style="border: none">

### Tech:
 - this project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
 - I built an array with a handful of fictious quotes then filled it out with real quotes from [this list](https://gist.github.com/signed0/d70780518341e1396e11)
 - each element in the array is its own array containing two items, author and quote
 - upon the component mount and upon clicking the 'New Quote' button, the following takes place:  the array is shuffled so that the first item is always random. 
 - state is set to the author and quote and state is displayed.
     
### Refactor: 
 - replace array with quotes API
 - [cross browser testing](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction)