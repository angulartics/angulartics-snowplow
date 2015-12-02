(function(window, angular, undefined) {'use strict';

/**
 * @ngdoc overview
 * @name angulartics.snowplow
 * Enables analytics support for snowplow (http://snowplowanalytics.com)
 */
angular.module('angulartics.snowplow', ['angulartics'])
.config(['$analyticsProvider', function ($analyticsProvider) {
  var snowplowApi;
  // TODO: allow custom snowplow names
  angulartics.waitForVendorApi('snowplow', 100, registerEvents);

  /**
  * Register Snowplow page and event tracking
  * @param {function} snowplow - the snowplow API function
  */
  function registerEvents(snowplow) {

    snowplowApi = snowplow;

    if (snowplowApi) {
      $analyticsProvider.registerPageTrack(pageTrack);
      $analyticsProvider.registerEventTrack(eventTrack);
      $analyticsProvider.registerSetUserProperties(setUserProperties)
    }

  }

  /**
   * Track pageview with snowplow
   * @param {string} path
   */
  function pageTrack(path, properties) {
    var title = properties.title || $document[0].title;
    try {
      /* Log Page */
      console.debug('Snowplow page tracking: ', path, title, context);

      snowplow('setCustomUrl', path);
      snowplow('trackPageView', title);
    } catch (e) {
      if (!(e instanceof ReferenceError)) {
        throw e;
      }
    }
  }

  /**
   * registerEventTrack handler.
   * @param action
   * @param properties
   */
  function eventTrack(action, properties) {
    try {
      snowplow('trackStructEvent', properties.category, action, properties.label, properties.property, properties.value);
    } catch (e) {
      if (!(e instanceof ReferenceError)) {
        throw e;
      }
    }
  }

  /*
  * Function to extract the Snowplow user ID from the first-party cookie set by the Snowplow JavaScript Tracker
  *
  * @param string cookieName (optional) The value used for "cookieName" in the tracker constructor argmap
  * (leave blank if you did not set a custom cookie name)
  *
  * @return string or bool The ID string if the cookie exists or false if the cookie has not been set yet
  * https://github.com/snowplow/snowplow/wiki/1-General-parameters-for-the-Javascript-tracker#27-getting-the-user-id-from-the-snowplow-cookie
  */
  function getSnowplowDuid(cookieName) {
    cookieName = cookieName || '_sp_';
    var matcher = new RegExp(cookieName + 'id\\.[a-f0-9]+=([^;]+);');
    var match = document.cookie.match(matcher);
    if (match && match[1]) {
      return match[1].split('.')[0];
    } else {
      return false;
    }
  }

  if ( getSnowplowDuid() ) {
    var cookiedUserId = getSnowplowDuid();
  }

  // https://github.com/snowplow/snowplow/wiki/1-General-parameters-for-the-Javascript-tracker#231-setting-the-user-id
  // snowplow_name_here('setUserId', 'joe.blogs@email.com');
  function setUserProperties(userId) {
    try {
      snowplow('setUserId', userId ? userId : cookiedUserId);
    } catch (e) {
      if (!(e instanceof ReferenceError)) {
        throw e;
      }
    }
  };

}]);

})(window, window.angular);
