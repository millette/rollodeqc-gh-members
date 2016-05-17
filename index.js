/*
Fetch members of a github organisation.

Copyright 2016
Robin Millette <mailto:robin@millette.info>
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

// self
const fetchUsers = require('rollodeqc-gh-users')
const utils = require('rollodeqc-gh-utils')

// npm
const ghGot = require('gh-got')
const omitBy = require('lodash.omitby')
const RateLimit = require('rate-limit-promise')

const fetchMembers = function (user) {
  return user.public_members_headers ? Promise.resolve(user)
    : ghGot(`orgs/${user.login}/public_members`).then((mm) => {
      user.public_members_headers = utils.chosenHeaders(mm.headers)
      if (mm.body.length) {
        user.public_members = mm.body
          .map((u) => utils.chosenFields(u))
          .map((u) => omitBy(u, (v, k) => !v || k === 'type'))
      }
      return user
    })
}

module.exports = function (query, cache) {
  if (typeof cache !== 'object') { cache = {} }
  if (typeof query === 'string') { query = { o: { string: query } } }
  query.o.type = 'org'

  return utils.rateLimit()
    .then((rl) => {
      const limiter = new RateLimit(5, 5 * utils.wait(rl))
      return fetchUsers(query, cache)
        .then((users) => Promise.all(users.map((user) => limiter().then(() => fetchMembers(user)))))
    })
}
