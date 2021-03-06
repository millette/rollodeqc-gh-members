'use strict'
import test from 'ava'

import fn from './'

test('sherbrooke', async t => {
  t.timeout(100000)
  const results = await fn({ o: { location: 'sherbrooke' } })
  t.is(results[0].login, 'introlab')
  t.is(results[0].public_members.length, 6)
  t.truthy(results.length > 40)
  t.truthy(results.length < 70)
})
