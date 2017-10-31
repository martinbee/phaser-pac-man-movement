# Boilerplate

This codebase is boilerplate for es6 webpack phaser projects

## Setup
- `npm i`
- `npm start`

## Customize
Change the object defined in states/index.js to create your own states, or add
new states in /states/. Be sure to import your states and start them on the game
instance defined in src/index.js.

## Structure
Either keep all the logic on the state/index.js or main state file or extract
into separate files like so:

```
import preload from './preload';
import create from './create';
import update from './update';
import utilities from './utilities';

export default {
  preload,
  create,
  update,
  ...utilities,
};
```
