webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-colors-picker/assets/index.less\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(39);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactColorsPicker = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-colors-picker\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _reactColorsPicker2 = _interopRequireDefault(_reactColorsPicker);
	
	function changeHandler(colors) {
	  console.log(colors);
	}
	
	_reactDom2['default'].render(_react2['default'].createElement(
	  'div',
	  { style: { margin: '20px 20px 20px', textAlign: 'center' } },
	  _react2['default'].createElement(_reactColorsPicker2['default'], {
	    animation: 'slide-up',
	    color: '#36c',
	    onChange: changeHandler
	  })
	), document.getElementById('__react-content'));

/***/ }
]);
//# sourceMappingURL=anim.js.map