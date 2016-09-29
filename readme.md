# rollodeqc-gh-members
[![Build Status](https://travis-ci.org/millette/rollodeqc-gh-members.svg?branch=master)](https://travis-ci.org/millette/rollodeqc-gh-members)
[![Coverage Status](https://coveralls.io/repos/github/millette/rollodeqc-gh-members/badge.svg?branch=master)](https://coveralls.io/github/millette/rollodeqc-gh-members?branch=master)
[![Dependency Status](https://gemnasium.com/badges/github.com/millette/rollodeqc-gh-members.svg)](https://gemnasium.com/github.com/millette/rollodeqc-gh-members)
> Fetch members of a github organisation.

## New since version 0.1.0
The cli now uses [update-notifier][] to let the user know about updates to this program.

Users have the ability to opt-out of the update notifier by changing
the optOut property to true in ~/.config/configstore/update-notifier-rollodeqc-gh-user-streak.json.
The path is available in notifier.config.path.

Users can also opt-out by setting the environment variable NO_UPDATE_NOTIFIER
with any value or by using the --no-update-notifier flag on a per run basis.

## Install
```
$ npm install --save rollodeqc-gh-members
```

## Usage
```js
const rollodeqcGhMembers = require('rollodeqc-gh-members')

rollodeqcGhMembers('unicorns')
//=> 'unicorns & rainbows'
```

## API
### rollodeqcGhMembers(input, [options])
#### input
Type: `string`

Lorem ipsum.

#### options
##### foo
Type: `boolean`<br>
Default: `false`

Lorem ipsum.

## CLI
```
$ npm install --global rollodeqc-gh-members
```

```
$ rollodeqc-gh-members --help

  Usage
    rollodeqc-gh-members [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ rollodeqc-gh-members
    unicorns & rainbows
    $ rollodeqc-gh-members ponies
    ponies & rainbows
```

## Support
Please file an issue or try to reach us on irc in the #rollodeqc channel on the Freenode network.

## License
AGPL-v3 © [Robin Millette](http://robin.millette.info)

[update-notifier]: <https://github.com/yeoman/update-notifier>
