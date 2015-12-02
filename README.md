## angulartics-snowplow

[![NPM version][npm-image]][npm-url] [![NPM downloads][npm-downloads-image]][npm-downloads-url] [![Bower version][bower-image]][bower-url] [![Dependencies status][dep-status-image]][dep-status-url] [![MIT license][license-image]][license-url] [![Join the Slack chat][slack-image]][slack-url]

Snowplow plugin for [Angulartics](http://github.com/luisfarzati/angulartics).

## Important Note
This plugin needs maintainers! If you use Snowplow and want to contribute with code/documentation/examples and become an active maintainer of this project, please [let us know](https://github.com/angulartics/angulartics-snowplow/issues/new?title=I+want+to+join+as+maintainer).

## Install

First make sure you've read installation and setup instructions for [Angulartics](https://github.com/luisfarzati/angulartics#install).

Then you can install this package either with `npm` or with `bower`.

### npm

```shell
npm install angulartics-snowplow
```

Then add `angulartics.snowplow` as a dependency for your app:

```javascript
require('angulartics')

angular.module('myApp', [
  'angulartics',
  require('angulartics-snowplow')
]);
```

> Please note that core Angulartics doesn't export the name yet, but it will once we move it into [the new organization](http://github.com/angulartics).

### bower

```shell
bower install angulartics-snowplow
```

Add the `<script>` to your `index.html`:

```html
<script src="/bower_components/angulartics-snowplow/dist/angulartics-snowplow.min.js"></script>
```

Then add `angulartics.snowplow` as a dependency for your app:

```javascript
angular.module('myApp', [
  'angulartics',
  'angulartics.snowplow'
]);
```

## Documentation

Documentation is available on the [Angulartics site](http://luisfarzati.github.io/angulartics).

## Development

```shell
npm run build
```

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/angulartics-snowplow.svg
[npm-url]: https://npmjs.org/package/angulartics-snowplow
[npm-downloads-image]: https://img.shields.io/npm/dm/angulartics-snowplow.svg
[npm-downloads-url]: https://npmjs.org/package/angulartics-snowplow
[bower-image]: https://img.shields.io/bower/v/angulartics-snowplow.svg
[bower-url]: http://bower.io/search/?q=angulartics-snowplow
[dep-status-image]: https://img.shields.io/david/angulartics/angulartics-snowplow.svg
[dep-status-url]: https://david-dm.org/angulartics/angulartics-snowplow
[license-image]: http://img.shields.io/badge/license-MIT-blue.svg
[license-url]: LICENSE
[slack-image]: https://angulartics.herokuapp.com/badge.svg
[slack-url]: https://angulartics.herokuapp.com
