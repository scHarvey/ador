# React Workshop

Hey Everyone - Wes here. I'll be your instructor for the react workshop. I need you to do a few things before you come to the workshop.

## Getting Started

1. Make sure you have the latest version of Node.js installed. If you don't have it, or are an older version, you can visit Nodejs.org and download the installer.
2. Download the starter files + notes:
	* Download the zip here: https://github.com/wesbos/React-Beer-Me/archive/master.zip
3. Have a terminal application ready. The built in terminal works just great though I find Windows users prefer to use CMDER - http://cmder.net/
4. `npm install` all dependencies before you come. cd into your `starter-files` directory and type `npm install`. If you aren't comfortable in the terminal, you may wait until the morning of the workshop to get a hand with this.
5. Make sure your text editor is setup to handle React. You may use any editor but here are some good ones:
	* Sublime Text with [Babel-Sublime](https://github.com/babel/babel-sublime) syntax highlighter installed
	* [Atom](https://atom.io/) with the default JavaSCript
	* [VS Code](https://code.visualstudio.com/) with the default JavaScript highlighter.




If there are any questions, feel free to email me! wes@wesbos.com


## Additional notes from Wes including requirements, etc. [react-workshop.md](react-workshop.md)

# My Notes:

# Intro to React.js - [Wes Bos](https://twitter.com/wesbos)
## Key Points
* No Global Scope, so anything you want a child component to have access to must be passed down via props.
* Component methods, other than render, don’t have access to “this” without binding
* PropTypes are quite powerful and can strictly type the things you pass to components, down to very specific things, including other Components or particular JSON (see: React.PropTypes.shape -> then describe a JSON object etc) //Google: TypeChecking with PropTypes
* Routing - generally React-Router is the primary one, but Next.js is interesting: https://zeit.co/blog/next
* React components have “State” which is the single source of “truth” (not two way data binding like Angular)
* setState only needs to be sent the items within the state that you want to modify, it's more like “updateState"
* ES6 backticks fetch(`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`) <— lets you have a variable in a string with ${}
* Spread, feature in React (soon ES6) “…” when used like <Results { ...this.state }/> it creates “magic” properties for state, in this case
* shouldComponentRender - can help control how often a component is redrawn
* [Next.js](https://zeit.co/blog/next) <-- maybe something to look in to

## Notes as markdown in /notes or html in /notes-export
## Working files in /starter-files and finished files are in /finished
