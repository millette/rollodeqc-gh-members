'use strict'
import test from 'ava'

import fn from './'

test('sherbrooke', async t => {
  const results = await fn({ o: { location: 'sherbrooke' } })
  t.is(results[0].login, 'introlab')
  t.is(results[0].public_members.length, 6)
  t.is(results.length, 35)
})

/*
test('sherbrooke', t => {
  t.plan(3)
  fn({ o: { location: 'sherbrooke' } })
    .then((results) => {
      console.log('results', results)
      t.is(results[0].login, 'introlab')
      t.is(results[0].public_members.length, 6)
      t.is(results.length, 35)
    })
    .catch((err) => {
      t.truthy(err)
      console.log('ERR:', err)
    })
})

test('joliette', t => {
  t.plan(3)
  fn({ o: { location: 'joliette' } })
    .then((results) => {
      console.log('results', results)
      t.is(results[0].login, 'introlab')
      t.is(results[0].public_members.length, 6)
      t.is(results.length, 35)
    })
    .catch((err) => {
      t.truthy(err)
      console.log('ERR:', err)
    })
})
*/
