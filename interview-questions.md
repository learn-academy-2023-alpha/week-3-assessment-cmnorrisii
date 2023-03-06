# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: JSX is syntax specific to React, it allows us to call on components in our App.js file. JSX sort of tells our app that we are in "javascript land" and has a few syntactical differences from HTML. For example; when using an attribute in a JSX tag, the attribute is in camelCase, where as in HTML the attribute is lowercase (onClick vs onclick).

Researched answer: JSX is a syntax extension that can be used in React that allows us to write HTML-like markup inside a JavaScript file. JSX allows us as developers to create more concise, performant, and readable code by allowing us to manipulate HTML and JS in the same places. JSX and HTML look similar, but a major difference is that data within JSX tags are basically JavaScript objects with their own keys/values. JSX tags also must be explicitly closed, they dont behave like self-closing tags in HTML. Also, because data within JSX tags are written in JS, our variable names must be written in camelCase instead of kebab-case, and we cannot use JS specific names when referring to attributes, for example; CSS 'class', we have to use className because a Class is already defined in JS. When we want to reference JS logic or a JS variable within our markup, we have to use curly brackets {} to pull that data from JS. I like to think of this use by comparing it to string interpolation in JS;

const example = () => {
    const name = 'CJ';
    return (
        <h1> Hello {name}! How are you today?</h1>
    )
}

As we see in our above example, we have a JS function with HTML markup inside of it, and in the inner html of our h1 tag, we are pulling the 'name' variable into that inner html with our curly brackets {}.
(sources - https://beta.reactjs.org/learn/writing-markup-with-jsx, https://beta.reactjs.org/learn/javascript-in-jsx-with-curly-braces)

output// Hello CJ! How are you today?


1. What is yarn? What file(s) are modified when you run the command yarn in your terminal?

Your answer: Yarn stands for Yet Another Resource Negotiator, it is a package manager that modifies/adds a few files into a repo it is run in. Those files are package.json, yarn.lock, and node_modules. These files allow us to install things like Jest into a repository and help keep our version of that software up to date.

Researched answer: Yarn is a JavaScript package manager developed by a collaboration of Facebook, Exponent, Google, and Tilde to be an open source method to share code with other developers. This code is shared through a package pushed with git version control. When we run yarn in our terminal, we create new files in the repo we are working in based on what has been installed on our local. Ours installs a folder called node_modules, package.json, and yarn.lock. node_modules is our package which contains the dependencies being shared. package.json is a file that generates in our repo that displays the dependencies added with yarn, and yarn.lock is a dependencies graph that describes everything we have installed when running $yarn install.
(sources - https://yarnpkg.com/getting-started, https://www.arahansen.com/the-ultimate-guide-to-yarn-lock-lockfiles/,https://www.w3resource.com/yarn/creating-a-package.php, https://nodejs.org/en/about/)

3. What is a React component?

Your answer: Components are what make up a React web application, there are data components which are primarily just showing what the user sees on the page, and then logic components that hold all of the JS logic that react with DOM events. Components can be called upon in our App.js by using component calls (<ComponentName />). Components can have data passed through to them via react props, which effectively act as function parameters in JS. I find it helpful to think of components as puzzle pieces, where the puzzle is the app we are trying to create.

Researched answer: Components are a key concept of React. They are the foundation upon which we as developers build the user interface. Components work like JavaScript functions except we can use HTML markup within them, combining the functionality of both in one place. Components can be exported to the rest of our file structure and imported into other components. They can also be nested within other components as many times as you'd like. In React we can identify a component vs a HTML tag by noting that component names start with a capital letter (PascalCase). When we want to pass data from a parent component to a child, we use props to pass that data instead of defining a child component within its parent.
(source - https://beta.reactjs.org/learn/your-first-component)

4. What is the difference between state values and props in React?

Your answer: State values in React are basically storage for a variable that we can assign and then define what event in our app would assign, reference or redefine that state as part of our app. Assume for the below example that we are within a component in React.

const [number, setNumber] = useState(1)

In the example above, we have set the variable 'number' to have a state of 1 whenever the page is loaded. When can then create a function within our component that will update number (setNumber) based on a certain DOM event within our file.

Properties (props) in React are essentially parameters that we can pass data through to other components. Because components are actually objects in JS, we can pass and access values in components just like objects. Within a component call tag (<Component />) we can define props just like parameters and arguments of normal JS. 

<Component number = {number}/>

With the above example, we have defined our 'object value' number to equal our earlier variable 'number' which is shown in curly brackets {}. Now we can access that 'object value' in our actual component file (Component.js) using props as a parameter in our function which should look something like this:

const Component = (props) => {
    return (
        <div>
            <{props.number}>
        </div>
    )
}

(You can also tell its a prop because they way it is, that's pretty neat!)

Researched answer: State are a components 'memory'. It allows the storing of a variable between renders of components. When creating multiple of the same component that uses a specified state, each component will store its own state, which allows for a lot more flexibility in an user interface. We hold a value with state using the React hook useState. If we reference our earlier example;

const [number, setNumber] = useState(1)

useState has an argument which is the value we are wanting to store (1), and also holds an array containing two values. (number) is the 'state variable' that is the value we want to store, and (setNumber) is the 'state setter function' that we must define that can update the 'state variable' and trigger React to call on or render the component again.

Props are used in React to allow two components to communicate with each other, they are information passed through a JSX tag. React contains props that are predefined for each tag, but we can also pass any undefined props into component call tags that we create by assigning or specifying a value. Props act as parameters that we can give an argument that contains the data or function that we are passing through to a component. Props cannot be changed throughout renders like state, they are only used to pass data through between components.
(sources - https://beta.reactjs.org/learn/state-a-components-memory, https://beta.reactjs.org/learn/passing-props-to-a-component)

5. What is the DOM?

Your answer: The DOM is what allows JavaScript to manipulate and update changes to HTML, it is the visual representation of our code is JS. The DOM breaks down HTML elements into pieces of data that can then be accessed by JS to add, change, update, or remove those elements. Essentially the DOM translates HTML into a language JS can understand is kind of how I understand it.

Researched answer: The Document Object Model, referred to as the DOM, is the representation of objects that make up the structure and content of a document on the web, it is a programming interface for web documents. The DOM breaks down the elements of an HTML document into nodes or objects which can be accessed by scripting languages like JS, which allows us to modify those objects. Without the DOM, a scripting language like JS would not know what anything on an HTML document page is, and therefore would not be able to work with that data. While previously I have referenced only JS, it is important to note that the DOM is not specific to any programming language, but can be accessed by running them with the DOM API. We can access those APIs to listen for events like clicks on buttons, or to clear or populate text on the page. There is a laundry list of possible APIs for using the DOM. (Sources - https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction, https://www.w3schools.com/js/js_htmldom.asp)

6. STRETCH: Which is the difference between a div tag and a span tag?

Your answer: I dont think I am familiar with span tags, however I know that div tags are used to sort of block pieces or elements of a page into their own "containers" than can be assigned classes and attributes for everything within the div. For example, if we build a div, we can establish a border for that divs boundary, and adjust where that div and its content rests on the webpage all within CSS or inline styling. With that in mind, I would have to imagine a span tag just "spans" a much smaller element of the page. Maybe even within a div or another tag. As in if i just want to make a certain portion of an element look different from the rest. Just an educated guess here, though. 

Researched answer: div tags are a block level element used to divide content in seperate sections or 'containers' that hold other tags in HTML. When we place content in a div tag, and assign the div a class name or id, we can style everything in that div seperately from tags outside of the div. span tags are inline elements that are used to apply styling to a portion of content, and can be applied inside of a div. We can use span tags to bring emphasis to certain content within our html such as changing just what's within the span tag to have a different background, font, or some other type of styling. div and span are both considered 'generic' elements because html does not have assume any styling for items within those tags. For example, an <h1> tag (a 'semantic' element) has a set disposition of how large the font within the tag should be, div and span have no inherent styling other than plain text.
(source - https://blog.hubspot.com/website/span-vs-div)

## Looking Ahead: Terms for Next Week

1. Object-oriented programming: OOP is a programming model that structures software design in objects with unique behavior, rather than functions or logic. The key to OOP is modeling a system as a collection of object, each representing some specific aspect of the system. Objects can CONTAIN functions and logic, but can act independent from other functions within other objects, as in the live in their own 'scope' or 'state'. OOP benefits an application because it makes code reusable, flexible, scalable and modular. This allows developers to be more productive when creating new programs.
(sources - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming, https://www.techtarget.com/searchapparchitecture/definition/object-oriented-programming-OOP)

2. Ruby: Ruby is a programming language where everything is an object. Every object within ruby can be given it's own properties and actions (I see why OOP was something I needed to research). Considered a flexible language, pieces of ruby can be changed, added on or removed. We can change how built in methods work within ruby to make our objects methods more readable if we wanted (am I understanding that correctly? if so that's wild). Ruby also has a feature called blocks that can be used to describe how a method should act. (Without actually working with the language, it seems like it was designed to be very modular and easy to use out of the box, the reality of this remains to be seen lol)
(source - https://www.ruby-lang.org/en/about/)

3. Implicit return: An implicit return is where within a function the 'return' is literally 'implied' without excplicitly using the return keyword. This is helpful to use if we wanted to keep a very simple, specific function with only one parameter to one line. When using an implicit return, you have to follow a couple of guidelines in order for it to work as intended. First the function must have a concise body, meaning only a single expression is specified. Second, when wanting to return object literals { object: literal} you must wrap it in parenthesis ({ object: literal }), otherwise arrow function sees your object literal as a code block.
(source - https://medium.com/@bunlong/arrow-functions-return-rules-in-javascript-b63ed5f25994, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

4. Ruby blocks: Ruby blocks are anonymous functions that are passed into methods to sort of define the methods behavior. Blocks start within a method with the keyword 'do' and end with the keyword 'end' or you can use brackets {}. Blocks can take in multiple arguments, which are defined and separated with |pipes|. You can establish a block, then use it later using the keyword 'yield'.
(source - https://www.rubyguides.com/2016/02/ruby-procs-and-lambdas/)

5. Ruby hashes: A hash {} in Ruby is a data structure (like an array) that uses unique key value pairs to store data instead of numerical indexes (like an array does). In a hash we assign values to keys when declaring the hash and seperate each key:value pair with commas (,).

animals = { dog: 3, mouse: 1}

 We can add new values to an existing hash by calling on the hash name, putting our new key in a pair of square brackets and using the equal (=) assignment operator to assign the keys value. 
 
animals{:cat} = 2

Values in hashes can be strings, integers or arrays. Keys can be anything, but no other key can be named the same thing. Keys can also have multiple values that can each be accessed. Hashes can be combined using the merge method in Ruby. (I'm looking forward to seeing these fleshed out a little more, seems like an interesting tool)
(source - https://www.rubyguides.com/2020/05/ruby-hash-methods/)
