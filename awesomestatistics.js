(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.AwesomeStatistics = factory());
}(this, (function () { 'use strict';

  /**
   * Calculates the average from the set of numbers.
   *
   * @param {array} numbers = [] - Numbers to calculate
   * @returns {number} - Average value
   *
   * @example
   * average([ 1, 5, 6, 3, 7, 8, 9 ])
   */
  function average() {
    var numbers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    return numbers.reduce(function (a, v) {
      return a + v;
    }, 0) / numbers.length;
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
   * @returns {number} - Correlation of the data points
   *
   * @example
   * correlation([ [ 2, 3 ], [ 4, 3 ], [ 5, 9 ], [ 2, 9 ], [ 4, 7 ], [ 5, 5 ] ])
   */
  function correlation() {
    var points = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    var sumX = points.reduce(function (a, _ref) {
      var _ref2 = slicedToArray(_ref, 2),
          x = _ref2[0],
          y = _ref2[1];

      return a + x;
    }, 0);
    var sumY = points.reduce(function (a, _ref3) {
      var _ref4 = slicedToArray(_ref3, 2),
          x = _ref4[0],
          y = _ref4[1];

      return a + y;
    }, 0);
    var sumXy = points.reduce(function (a, _ref5) {
      var _ref6 = slicedToArray(_ref5, 2),
          x = _ref6[0],
          y = _ref6[1];

      return a + x * y;
    }, 0);
    var sumXx = points.reduce(function (a, _ref7) {
      var _ref8 = slicedToArray(_ref7, 2),
          x = _ref8[0],
          y = _ref8[1];

      return a + x * x;
    }, 0);
    var sumYy = points.reduce(function (a, _ref9) {
      var _ref10 = slicedToArray(_ref9, 2),
          x = _ref10[0],
          y = _ref10[1];

      return a + y * y;
    }, 0);

    var step1 = points.length * sumXy - sumX * sumY;
    var step2 = points.length * sumXx - sumX * sumX;
    var step3 = points.length * sumYy - sumY * sumY;
    var step4 = Math.sqrt(step2 * step3);
    var answer = step1 / step4;

    return answer;
  }

  /**
   * Finds the center number
   *
   * @param {array} numbers = [] - Numbers to calculate
   * @returns {array} - Array of most occured numbers
   *
   * @example
   * median([ 1, 5, 6, 3, 7, 8, 9 ])
   */
  function median() {
    var numbers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    numbers.sort();

    var middleIndex = Math.round(numbers.length / 2) - 1;
    var middleIndexRem = numbers.length % 2 === 0 ? 1 : 0;
    var nums = numbers.slice(middleIndex, middleIndex + 1 + middleIndexRem);

    return average(nums);
  }

  /**
   * Finds the number(s) that occur the most
   *
   * @param {array} numbers = [] - Numbers to calculate
   * @returns {array} - Array of most occured numbers
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
   * Finds the range from a data set
   *
   * @param {array} numbers = [] - Numbers to calculate
   * @returns {number} - Difference between the high and low values
   *
   * @example
   * range([ 1, 5, 6, 3, 7, 8, 9 ])
   */
  function range() {
    var numbers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    if (numbers.length === 0) {
      return 0;
    }

    return Math.max.apply(Math, toConsumableArray(numbers)) - Math.min.apply(Math, toConsumableArray(numbers));
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
   * @returns {number} - Variance
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
    variance: variance
  };

  return awesomestatistics;

})));
