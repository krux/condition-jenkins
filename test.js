var proxyquire = require('proxyquire')
var test = require('tap').test
var SRError = require('@semantic-release/error')

var condition = proxyquire('./', {})

test('raise errors in jenkins environment', function (t) {
  t.test('only runs on jenkins', function (tt) {
    tt.plan(2)

    condition({}, {env: {}}, function (err) {
      tt.ok(err instanceof SRError)
      tt.is(err.code, 'ENOJENKINS')
    })
  })

  t.test('only running on specified branch', function (tt) {
    tt.plan(5)

    condition({}, {
      env: {
        JENKINS_URL: 'http://localhost/',
        GIT_BRANCH: 'origin/master'
      },
      options: {
        branch: 'origin/master'
      }
    }, function (err) {
      tt.is(err, null)
    })

    condition({}, {
      env: {
        JENKINS_URL: 'http://localhost/',
        GIT_BRANCH: 'origin/notmaster'
      },
      options: {
        branch: 'origin/master'
      }
    }, function (err) {
      tt.ok(err instanceof SRError)
      tt.is(err.code, 'EBRANCHMISMATCH')
    })

    condition({}, {
      env: {
        JENKINS_URL: 'http://localhost/',
        GIT_BRANCH: 'origin/master'
      },
      options: {
        branch: 'origin/foo'
      }
    }, function (err) {
      tt.ok(err instanceof SRError)
      tt.is(err.code, 'EBRANCHMISMATCH')
    })
  })

  t.end()
})
