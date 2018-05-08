# Boilerplate

This codebase is boilerplate for es6 webpack phaser projects

## Setup
- `npm i`
- `npm start`

## Customize
To customize, change the logic defined in states/

## Structure
Either keep all the logic in the state/stateType/index.js file or extract
into separate files like so:

```
// ./state/exampleState/index.js

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

## Shoutout
Shoutout to Zenva and their great [tutorial](https://gamedevacademy.org/html5-phaser-tutorial-spacehipster-a-space-exploration-game)
