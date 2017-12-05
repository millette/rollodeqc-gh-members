'use strict'
import test from 'ava'

import fn from './'

test('sherbrooke', async t => {
  const results = await fn({ o: { location: 'sherbrooke' } })
  t.is(results[0].login, 'introlab')
  t.is(results[0].public_members.length, 6)
  t.is(results.length, 42)
})
