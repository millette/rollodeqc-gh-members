#!/usr/bin/env node

/*
Fetch members of a github organisation.

Copyright 2016
Robin Millette <robin@millette.info>
<http://robin.millette.info>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the
[GNU Affero General Public License](LICENSE.md)
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

'use strict'
const meow = require('meow')
const fetchMembers = require('./')

const cli = meow([
  'Usage',
  '  $ rollodeqc-gh-members [input]',
  '',
  'Options',
  '  -l',
  '  --location Search location; supply as many times as needed.',
  '',
  '  -c',
  '  --cache JSON file holding cached values.',
  '',
  'Examples',
  '  $ rollodeqc-gh-members',
  '  unicorns & rainbows',
  '  $ rollodeqc-gh-members ponies',
  '  ponies & rainbows'
], {
  alias: { c: 'cache', l: 'location' },
  string: ['cache', 'location']
})

var running = true

function isDone (wait) {
  if (typeof wait !== 'number') { wait = 100 }
  setTimeout(() => { if (running) { isDone(wait) } }, wait)
}

var query = {
  o: { string: cli.input.join(' ') },
  order: 'asc',
  sort: 'joined'
}

if (cli.flags.location) { query.o.location = cli.flags.location }

const cache = cli.flags.cache ? require('./' + cli.flags.cache) : {}

fetchMembers(query, cache)
  .then((ack) => {
    console.log(JSON.stringify(ack, null, ' '))
    running = false
  })
  .catch((e) => {
    console.log('err:', e)
    running = false
  })

isDone()
