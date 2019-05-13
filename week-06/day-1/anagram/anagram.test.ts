"use strict";
import {anagram} from './anagram';
//import * as test from 'tape';
var test = require ('tape');

test('Check the anagram', function (t: any) {
  var actual = anagram('isim','visi');
  var expected = true;
  t.equal(actual, expected);
  t.end();
});