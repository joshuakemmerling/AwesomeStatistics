(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.AwesomeStatistics = factory());
}(this, (function () { 'use strict';

  /**
   * Adds all numbers together.
   *
   * @param {array} numbers = [] - Numbers to be added
   * @returns {number} - Sum
   *
   * @example
   * sum([ 1, 2, 3 ])
   */
  function sum() {
    var numbers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var iteratee = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (v) {
      return v;
    };
    var initialValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    return numbers.reduce(function (a, v, i, arr) {
      return a + iteratee(v, i, arr);
    }, initialValue);
  }

  /**
   * Calculates the average from the set of numbers.
   *
   * @param {array} numbers = [] - Numbers to calculate
   * @returns {number} - Calculated average
   *
   * @example
   * average([ 1, 5, 6, 3, 7, 8, 9 ])
   */
  function average() {
    var numbers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    return sum(numbers) / numbers.length;
  }

  var slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };

  /**
   * Calculates the correlation of the provided points.
   *
   * @param {array} points = [] - X, Y values
   * @returns {number} - Calculated correlation
   *
   * @example
   * correlation([ [ 2, 3 ], [ 4, 3 ], [ 5, 9 ], [ 2, 9 ], [ 4, 7 ], [ 5, 5 ] ])
   */
  function correlation() {
    var points = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    var xAvg = average(points.map(function (_ref) {
      var _ref2 = slicedToArray(_ref, 1),
          x = _ref2[0];

      return x;
    }));
    var yAvg = average(points.map(function (_ref3) {
      var _ref4 = slicedToArray(_ref3, 2),
          _ = _ref4[0],
          y = _ref4[1];

      return y;
    }));
    var newPoints = points.map(function (_ref5) {
      var _ref6 = slicedToArray(_ref5, 2),
          x = _ref6[0],
          y = _ref6[1];

      return [x - xAvg, y - yAvg];
    });
    var sumXy = sum(newPoints, function (_ref7) {
      var _ref8 = slicedToArray(_ref7, 2),
          x = _ref8[0],
          y = _ref8[1];

      return x * y;
    });
    var sumXx = sum(newPoints, function (_ref9) {
      var _ref10 = slicedToArray(_ref9, 1),
          x = _ref10[0];

      return x * x;
    });
    var sumYy = sum(newPoints, function (_ref11) {
      var _ref12 = slicedToArray(_ref11, 2),
          _ = _ref12[0],
          y = _ref12[1];

      return y * y;
    });

    return sumXy / Math.sqrt(sumXx * sumYy);
  }

  /**
   * Finds the center number of a sorted array. If
   * there are 2 numbers in the center it returns
   * the average.
   *
   * @param {array} numbers = [] - Numbers to calculate
   * @returns {array} - Center number
   *
   * @example
   * median([ 1, 5, 6, 3, 7, 8, 9 ])
   */
  function median() {
    var numbers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    var index = (numbers.length - 1) / 2;

    return average(numbers.sort().slice(Math.floor(index), Math.ceil(index) + 1));
  }

  /**
   * Finds the value(s) that occurs most frequently
   * in a given set of data.
   *
   * @param {array} numbers = [] - Numbers to calculate
   * @returns {array} - Most occured numbers
   *
   * @example
   * mode([ 1, 5, 6, 3, 7, 8, 9 ])
   */
  function mode() {
    var numbers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    var groups = numbers.filter(function (v, i, a) {
      return a.indexOf(v) === i;
    }).map(function (v) {
      return numbers.filter(function (n) {
        return v === n;
      });
    });
    var max = Math.max.apply(Math, toConsumableArray(groups.map(function (v) {
      return v.length;
    })));

    return groups.filter(function (v) {
      return v.length === max;
    }).map(function (v) {
      return v[0];
    });
  }

  /**
   * Finds the difference between the smallest and
   * largest numbers in the data set.
   *
   * @param {array} numbers = [] - Numbers to calculate
   * @returns {number} - Calculated range
   *
   * @example
   * range([ 1, 5, 6, 3, 7, 8, 9 ])
   */
  function range() {
    var numbers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    return numbers.length === 0 ? 0 : Math.max.apply(Math, toConsumableArray(numbers)) - Math.min.apply(Math, toConsumableArray(numbers));
  }

  /**
   * Calculates the variance from the set of numbers.
   *
   * @param {array} numbers = [] - Numbers to calculate
   * @returns {number} - Variance
   *
   * @example
   * variance([ 1, 5, 6, 3, 7, 8, 9 ])
   */
  function variance() {
    var numbers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    var avg = average(numbers);

    return average(numbers.map(function (number) {
      return Math.pow(number - avg, 2);
    }));
  }

  /**
   * Calculates the standard deviation from the set of numbers.
   *
   * @param {array} numbers = [] - Numbers to calculate
   * @returns {number} - Standard deviation
   *
   * @example
   * standardDeviation([ 1, 5, 6, 3, 7, 8, 9 ])
   */
  function standardDeviation() {
    var numbers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    return Math.sqrt(variance(numbers));
  }

  var awesomestatistics = {
    average: average,
    correlation: correlation,
    median: median,
    mode: mode,
    range: range,
    standardDeviation: standardDeviation,
    sum: sum,
    variance: variance
  };

  return awesomestatistics;

})));
