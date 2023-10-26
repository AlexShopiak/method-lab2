# Implementation of List() class. Its testing and refactoring

### Variant number calculation and option description
- 1331 % 4 = 3 variant
- List based on built-in arrays/lists -> doubly linked list

### How to build a project and run tests
- Install <code><a href="https://nodejs.org/en">Node.js</a></code>
- Install <code><a href="https://www.npmjs.com/package/npm">Node Package Manager</a></code>
- At the root of the project, update the packages <code>npm i</code>
- At the root of the project, run the team tests <code>npm test</code>

### Description of the project
#### 1) .\lib
- <code>linked-list.js</code> Doubly linked list implementation
- <code>list.js</code> Implementation of a list based on built-in arrays
- <code>messages.js</code> Set of error messages
- <code>type-checkers.js</code> A set of functions for type checking
#### 2) .\test
- <code>linked-list.test.js</code> Test environment for linked list
- <code>list.test.js</code> Test environment for list on built-in arrays
- <code>test-of-methods.js</code> A test that alternately tests the methods of an instance of the List() or LinkedList() class

### A reference to the commit on which the CI tests failed
- <code><a href="https://github.com/AlexShopiak/method-lab2/commit/46fd24007bb49a472d91f28aef4e71bfde77f06d">1st commit</a></code>
- <code><a href="https://github.com/AlexShopiak/method-lab2/commit/c39e7e2dc8c014840cd1dfd9ba6acf842e0d8c0a">2nd commit</a></code>
- <code><a href="https://github.com/AlexShopiak/method-lab2/commit/343398bd00dd637d0383da2f3d51dcf17ec4dbac">3rd commit</a></code>

### Brief conclusions about whether unit tests really helped you or were a waste of time
- At first, when I created a class based on built-in arrays, the tests were unnecessary and generally made no sense.
  However, when I started refactoring and implementing algorithms of medium complexity, the tests
  saved me a lot of time because the number of errors was huge. 
- This was my first experience in using unit tests, because before that I checked all 
  important functionality using online compilers, copying the code needed for testing there. In future projects
  I will cover the code with tests as it saves time in the long run.
