var SRError = require('@semantic-release/error')

module.exports = function (pluginConfig, config, cb) {
  var env = config.env
  var options = config.options

  if (!env.hasOwnProperty('JENKINS_URL')) {
    return cb(new SRError(
      'semantic-release didn’t run on Jenkins CI and therefore a new version won’t be published.\n' +
      'You can customize this behavior using "verifyConditions" plugins: git.io/sr-plugins',
      'ENOJENKINS'
    ))
  }

  if (options.branch !== env.GIT_BRANCH) {
    return cb(new SRError(
      'This test run was triggered on the branch ' + env.GIT_BRANCH +
      ', while semantic-release is configured to only publish from ' +
      options.branch + '.\n' +
      'You can customize this behavior using the "branch" option: git.io/sr-options',
      'EBRANCHMISMATCH'
    ))
  }

  cb(null)
}
