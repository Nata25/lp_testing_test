This is a project with module structure. Every page is a module in its own folder with encapsulated local files (store, components etc)

1. There is a local card component in the module "B". You should render same card in module "C", but with data from module "C" data's `card` object as a card content. Reuse as much code as possible.
2. Create a new module "D", make it look like a copy of the module "C" at first. Then, make it to be dark version of the page. Background color should be not white but `#100432`
3. In Module "A" there is a store with empty `getData` action. This action should load data to state via `addToList` mutation. There is also a mock file with test data. This action should load either test data from json file or load data from real API (depends on `process.env.NODE_ENV` for example). As for API use [this](https://jsonplaceholder.typicode.com/users)

## Important!

Consider this project and task as a real one. Feel free to let me know if you have any questions, comments or you see any enhancement suggestions etc, and we will discuss that.

Good luck :)
