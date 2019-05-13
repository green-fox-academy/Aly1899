"use strict";
import { indexOf } from './index_of';
//import * as test from 'tape';
var test = require ('tape');

test('Check the index of an item', function (t: any) {
  var actual = indexOf([2,4,3,5,6,1],5);
  var expected =3;
  t.equal(actual, expected);
  t.end();
});