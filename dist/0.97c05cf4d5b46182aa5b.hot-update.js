webpackHotUpdate(0,{

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _Main = __webpack_require__(557);

var _Main2 = _interopRequireDefault(_Main);

var _style = __webpack_require__(781);

var _style2 = _interopRequireDefault(_style);

var _Selectable = __webpack_require__(219);

var _Selectable2 = _interopRequireDefault(_Selectable);

__webpack_require__(782);

var _Nav = __webpack_require__(403);

var _Nav2 = _interopRequireDefault(_Nav);

var _Icons = __webpack_require__(404);

var _Icons2 = _interopRequireDefault(_Icons);

var _Images = __webpack_require__(783);

var _Images2 = _interopRequireDefault(_Images);

var _Login = __webpack_require__(785);

var _Login2 = _interopRequireDefault(_Login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import 'react-big-calendar/lib/css/react-big-calendar.css'


var Content = function (_React$Component) {
  _inherits(Content, _React$Component);

  function Content(props) {
    _classCallCheck(this, Content);

    var _this = _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this, props));

    _this.viewHandler = function () {
      return _this.__viewHandler__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.state = {
      view: 'login'
    };
    return _this;
  }

  _createClass(Content, [{
    key: '__viewHandler__REACT_HOT_LOADER__',
    value: function __viewHandler__REACT_HOT_LOADER__(target) {
      this.setState({ view: target });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: ' container' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: _style2.default.body },
            _react2.default.createElement(
              'div',
              { className: 'col-sm-1 columns', id: 'col-1' },
              _react2.default.createElement(_Images2.default, null)
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-sm-1 columns', id: 'col-3' },
              _react2.default.createElement(_Nav2.default, { changeView: this.viewHandler, active: this.state.view })
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-sm-10 columns', id: 'col-2' },
              this.state.view === 'calendar' && _react2.default.createElement(_Selectable2.default, null),
              this.state.view === 'main' && _react2.default.createElement(_Main2.default, null),
              this.state.view === 'login' && _react2.default.createElement(_Login2.default, null)
            )
          )
        )
      );
    }
  }]);

  return Content;
}(_react2.default.Component);

var _default = Content;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Content, 'Content', 'G:/GW/cms_v2/src/components/content/content.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'G:/GW/cms_v2/src/components/content/content.jsx');
}();

;

/***/ })

})