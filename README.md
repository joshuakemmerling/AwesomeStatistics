https://codeburst.io/how-to-create-and-publish-your-first-node-js-module-444e7585b738

# Awesome Statistics

A small library of awesome statistical functions.

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

- **average([ 1, 2, 3 ])** - A calculated "central" value of a set of numbers.
- **correlation([ [ 1, 2 ], [ 2, 3 ], [ 4, 5 ], [ 6, 7 ] ])** - A quantity measuring the extent of interdependence of variable quantities.
- **median([ 1, 2, 3, 4 ])** - The middle number in a sorted list of numbers.
- **mode([ 1, 2, 3, 4 ])** - The number which appears most often in a set of numbers.
- **range([ 1, 2, 3, 4 ])** - The difference between the lowest and highest values.
- **standardDeviation([ 1, 2, 3, 4, 5, 6, 7 ])** - The standard deviation is a measure of how spread out numbers are.
- **variance([ 1, 2, 3, 4, 5 ])** - Average of the squared differences from the mean.

## Test

```
yarn run test
```
