'use strict'

import {anagramCheck} from './anagram';

var test=require('tape').test
test('Check anagram',function(t:any){
  var actual=anagramCheck('asd','sad')
  var expected=true
  t.equal(actual,expected)
  t.end()
});

var test=require('tape').test
test('Check anagram',function(t:any){
  var actual=anagramCheck('alma','lamda')
  var expected=true
  t.equal(actual,expected)
  t.end()
});

var test=require('tape').test
test('Check anagram',function(t:any){
  var actual=anagramCheck('cooper','percoo ')
  var expected=true
  t.equal(actual,expected)
  t.end()
});

var test=require('tape').test
test('Check anagram',function(t:any){
  var actual=anagramCheck('','')
  var expected=true
  t.equal(actual,expected)
  t.end()
});