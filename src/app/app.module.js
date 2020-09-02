'use strict';

angular.module('linagora.esn.inbox.config', [
  'restangular',
  'esn.http',
  'esn.module-registry',
  'esn.configuration'
]);

require('esn-frontend-common-libs/src/frontend/js/modules/http.js');
require('esn-frontend-common-libs/src/frontend/js/modules/module-registry/module-registry.module.js');
require('esn-frontend-common-libs/src/frontend/js/modules/config/config.module.js');

require('./services/inbox-forwardings-api-client.service.js');
require('./services/inbox-restangular.service');
