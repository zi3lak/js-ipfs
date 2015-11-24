'use strict'

describe('.pin', function () {
  this.timeout(10000)
  it('.pin.add', function (done) {
    apiClients['b'].pin.add('Qma4hjFTnCasJ8PVp3mZbZK5g2vGDT4LByLJ7m8ciyRFZP', {recursive: false}, (err, res) => {
      if (err) {
        throw err
      }
      assert.equal(res.Pinned[0], 'Qma4hjFTnCasJ8PVp3mZbZK5g2vGDT4LByLJ7m8ciyRFZP')
      done()
    })
  })

  it('.pin.list', function (done) {
    apiClients['b'].pin.list((err, res) => {
      if (err) {
        throw err
      }
      assert(res)
      done()
    })
  })

  it('.pin.remove', function (done) {
    apiClients['b'].pin.remove('Qma4hjFTnCasJ8PVp3mZbZK5g2vGDT4LByLJ7m8ciyRFZP', {recursive: false}, (err, res) => {
      if (err) {
        throw err
      }
      assert(res)
      apiClients['b'].pin.list('direct', (err, res) => {
        if (err) {
          throw err
        }
        assert(res)
        assert.equal(Object.keys(res.Keys).length, 0)
        done()
      })
    })
  })
})
