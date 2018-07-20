# _Kaiser - Read this:_

### Bouncy blocks!

Hey Kaiser - it was fun talking to you over lunch at Shalom Y'all (love that name). In thinking about how to get the files we were working on over to you, I thought it would be best to put them here.

This website (github) is a place where programmers can back-up their code. Git is a program that helps with _version control_. Often in programming, you want to be able to undo changes, or easily keep some changes separate from others, and that's what version control lets you do. Look up "version control" on Wikipedia to learn more.

In order for you to get this little game running, you'll need a couple of things:

__1. NodeJS__

Remember how we talked about how the web browser _interprets_ Javascript without compiling it like other programming languages? NodeJS (usually just called "Node") is a Javasript interpreter, without the web browser. As such, it lets you run Javascript anywhere on your computer.

For a web browser to load files, those files have be _served_. That requires a program running on your computer that we call a _server_.  The program that we were using was a Javascript program running on Node. Ironically, it was called `serve` (coders - lol).

To get Node on your computer, [_click on this link_](https://nodejs.org/en/download/) and then choose Mac or Windows depending on what you've got. Follow the install steps to get Node installed and ready for action.

__2. Get `serve`__ 

Once node is installed, you'll also have something called `npm` (Node Package Manager). NPM is a utility for downloading programs built in Javascript, and is a companion program for Node.

You'll want to open a Terminal (Google it if you need help). Once open, run this command:

`npm install -g serve`

That will download the `serve` program you need to "serve up" your files for the web browser.

---

Time for the next step: download your program files. If you poke around on this page (where you are reading this) near the top of the page, on the right side, there is a green button that says "Clone or download". Click that, and then on the menu that opens, click "Download Zip".

Once the zip file is downloaded, double-click it in your file navigator (Finder for Mac, Explorer for Windows).

Now the tricky part...

Back in your Terminal app, go to the folder that you created by unzipping the zip file. There's a chance that by right-clicking the folder in your file navigator you will get a menu with an option to "Open a Terminal here". If not, you will need to open the Terminal and and type

`cd` ...and then the path from your folder to the code folder.

If you need to, get some help - sometimes it can be a challenge to get familiar with navigating the computer from the Terminal.

Once you've navigated to the folder in the Terminal, type:

`serve` ...and hit Enter.

That will run the Node program that serves the files in that folder and makes them available for your web browser. It should even print a couple of links for you to use - one will look  like this: `http:localhost:3000` (or similar). You will want to copy that link and paste it in your web browser, and that will point the web browser to your server that you just started.

The game should load up, and you know what to do from there :)

---

### Resources

If you want a cool code editor like we were using at the restaurant, you're in luck - it's free:

[Click to check out VSCode](https://code.visualstudio.com)

And here's another popular one that is also free:

[Click to check out Atom](https://atom.io)

But remember - while these apps help with code hints and other cool things, you could write this code in any ol' text editor too. 

As for learning more Javascript, just throw "Javascript tutorial" into Google and poke around until you find one you like. I personally have had goodluck with a website called [egghead.io](https://egghead.io/). They produce some high quality tutorials specific to coding.

### Last but not least

Send me a link when you post your first game somewhere, and never stop learning. Learn anything and everything you can that interests you - it will only open more doors for you and makes it very likely that one day you'll find yourself getting paid to do things that you wanted to do anyway :)

Your friend and fellow traveler,

Ian

