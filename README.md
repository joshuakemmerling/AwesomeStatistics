# Awesome Statistics

A small library of awesome statistical functions.

[![build status](https://travis-ci.org/hellojosh/AwesomeStatistics.svg?branch=master)](https://travis-ci.org/hellojosh/AwesomeStatistics)
[![npm version](https://img.shields.io/npm/v/awesome-statistics.svg?style=flat-square)](https://www.npmjs.com/package/awesome-statistics)

## Install

You can install Awesome Statistics using `npm` or `yarn`.

```
npm install awesome-statistics --save
```
or
```
yarn add awesome-statistics
```

## Use

```javascript
import awesomeStatistics from 'awesome-statistics'

const points = [
  [ 5, 8 ],
  [ 9, 9 ],
  [ 3, 7 ],
  [ 1, 6 ],
  [ 5, 1 ]
]
const correlation = awesomeStatistics.correlation(points) // 0.28141
```

## Functions

#### average()

A number expressing the central value in a set of data which is calculated by dividing the sum of the values in the set by their number.

```javascript
import awesomeStatistics from 'awesome-statistics'

const numbers = [ 1, 2, 3, 4, 5, 6 ]
const avg = awesomeStatistics.average(numbers)

console.log(avg)
```

#### correlation()

A quantity measuring the extent of interdependence of variable quantities.

```javascript
import awesomeStatistics from 'awesome-statistics'

const points = [
  [ 5, 8 ],
  [ 9, 9 ],
  [ 3, 7 ],
  [ 1, 6 ],
  [ 5, 1 ]
]
const correlation = awesomeStatistics.correlation(points)

console.log(correlation)
```

#### median()

The middle number in a sorted list of numbers.

```javascript
import awesomeStatistics from 'awesome-statistics'

const numbers = [ 2, 5, 6, 9, 8, 6, 7, 2, 3 ]
const median = awesomeStatistics.median(numbers)

console.log(median)
```

#### mode()

The value that occurs most frequently in a given set of data.

```javascript
import awesomeStatistics from 'awesome-statistics'

const numbers = [ 1, 5, 4, 3, 1, 1, 7, 5, 9 ]
const mode = awesomeStatistics.mode(numbers)

console.log(mode)
```

#### range()

The difference between the lowest and highest values.

```javascript
import awesomeStatistics from 'awesome-statistics'

const numbers = [ 45, 65, 123, 23, 54 ]
const range = awesomeStatistics.range(numbers)

console.log(range)
```

#### standardDeviation()

A quantity calculated to indicate the extent of deviation for a group as a whole.

```javascript
import awesomeStatistics from 'awesome-statistics'

const numbers = [ 12, 45, 1, 3, 4, 9, 23, 8 ]
const standardDeviation = awesomeStatistics.standardDeviation(numbers)

console.log(standardDeviation)
```

#### variance()

A quantity equal to the square of the standard deviation.

```javascript
import awesomeStatistics from 'awesome-statistics'

const numbers = [ 5, 12, 4, 2, 8, 4, 9, 29 ]
const variance = awesomeStatistics.variance(numbers)

console.log(variance)
```

## Test

```
yarn run test
```

## More Functions

Leave an issue if there are more functions you would like added. Thanks.
