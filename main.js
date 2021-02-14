(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\formly\src\main.ts */"zUnb");


/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 2, vars: 0, template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "about works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "G1N2":
/*!****************************************!*\
  !*** ./src/app/todo/todo.component.ts ***!
  \****************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _add_todo_add_todo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-todo/add-todo.component */ "NZcN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function TodoComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0417\u0430\u0434\u0430\u043D\u0438\u0439 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TodoComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoComponent_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const todo_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.selectTodo(todo_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const todo_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", todo_r2.complete);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", todo_r2.complete ? "done-todo" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", todo_r2.title, " ");
} }
class TodoComponent {
    constructor() {
        this.todos = [
            { id: 1, complete: false, title: 'Сделать задачу' },
            { id: 2, complete: false, title: 'Завести тикет' },
            { id: 3, complete: false, title: 'Поправить ошибку' },
        ];
    }
    ngOnInit() {
    }
    selectTodo(id) {
        this.todos = this.todos.map((todo) => {
            if (todo.id === id) {
                if (todo.complete === false) {
                    todo.complete = true;
                    return todo;
                }
                else {
                    todo.complete = false;
                    return todo;
                }
            }
            else {
                return todo;
            }
        });
    }
    deleteSelectTodo() {
        this.todos = this.todos.filter(todo => !todo.complete);
    }
    addTodo(newTodo) {
        this.todos.push(newTodo);
    }
}
TodoComponent.ɵfac = function TodoComponent_Factory(t) { return new (t || TodoComponent)(); };
TodoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoComponent, selectors: [["app-todo"]], decls: 6, vars: 2, consts: [[3, "onChanged"], [4, "ngIf"], ["class", "line-todo", 3, "click", 4, "ngFor", "ngForOf"], [1, "btn", "btn-danger", "text-white", 3, "click"], [1, "line-todo", 3, "click"], ["type", "checkbox", 3, "checked"], [3, "ngClass"]], template: function TodoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-add-todo", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChanged", function TodoComponent_Template_app_add_todo_onChanged_1_listener($event) { return ctx.addTodo($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TodoComponent_div_2_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TodoComponent_div_3_Template, 4, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoComponent_Template_button_click_4_listener() { return ctx.deleteSelectTodo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.todos.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.todos);
    } }, directives: [_add_todo_add_todo_component__WEBPACK_IMPORTED_MODULE_1__["AddTodoComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["*[_ngcontent-%COMP%] {\n  color: black;\n  padding: 15px;\n}\n\n.done-todo[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n\n.line-todo[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRvZG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRiIsImZpbGUiOiJ0b2RvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbi5kb25lLXRvZG8ge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG59XHJcblxyXG4ubGluZS10b2RvIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todo',
                templateUrl: './todo.component.html',
                styleUrls: ['./todo.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "LkI3":
/*!****************************************************!*\
  !*** ./src/app/calculator/calculator.component.ts ***!
  \****************************************************/
/*! exports provided: CalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorComponent", function() { return CalculatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





const _c0 = ["myModal"];
function CalculatorComponent_ng_template_43_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0422\u043E\u0447\u043D\u043E \u0432\u0441\u0435 \u043E\u0447\u0438\u0441\u0442\u0438\u0442\u044C?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_ng_template_43_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.confirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0414\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_ng_template_43_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.decline(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u041D\u0435\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var EventEnum;
(function (EventEnum) {
    EventEnum["plus"] = "+";
    EventEnum["minus"] = "-";
    EventEnum["del"] = "/";
    EventEnum["multiplication"] = "*";
    EventEnum["equally"] = "=";
})(EventEnum || (EventEnum = {}));
class CalculatorComponent {
    constructor(modalService, toast) {
        this.modalService = modalService;
        this.toast = toast;
        this.intermediateResult = '';
    }
    ngOnInit() {
    }
    onClick(number) {
        this.intermediateResult += number.toString();
        this.result = number;
    }
    onEvent(ev) {
        if (ev === EventEnum.equally) {
            try {
                const res = this.intermediateResult;
                this.intermediateResult = eval(this.intermediateResult);
                if (this.intermediateResult === undefined) {
                    this.toast.error(res, 'Ошибочное выражение');
                    this.intermediateResult = '';
                }
            }
            catch (e) {
                this.toast.error('Не верное выражение');
            }
        }
        else {
            this.intermediateResult += ev;
        }
    }
    confirm() {
        this.intermediateResult = '';
        this.toast.success('Все очищено');
        this.modalRef.hide();
    }
    decline() {
        this.modalRef.hide();
    }
    onClear(template) {
        this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    }
    onDelete() {
        this.intermediateResult = this.intermediateResult.slice(0, this.intermediateResult.length - 1);
    }
}
CalculatorComponent.ɵfac = function CalculatorComponent_Factory(t) { return new (t || CalculatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"])); };
CalculatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalculatorComponent, selectors: [["app-calculator"]], viewQuery: function CalculatorComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myModal = _t.first);
    } }, decls: 45, vars: 1, consts: [[1, "container"], [1, "container-output"], ["type", "text", "disabled", "", 3, "ngModel", "ngModelChange"], [1, "clear"], [1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-warning", 3, "click"], [1, "btn-event"], [1, "btn", "btn-dark", 3, "click"], [1, "btn-number"], [1, "btn", "btn-info", 3, "click"], [1, "btn-number-one"], ["template", ""], [1, "modal-body", "text-center"], [1, "block-btn"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["type", "button", 1, "btn", "btn-success", 3, "click"]], template: function CalculatorComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CalculatorComponent_Template_input_ngModelChange_2_listener($event) { return ctx.intermediateResult = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44); return ctx.onClear(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "AC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_6_listener() { return ctx.onDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u21D0\t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_9_listener() { return ctx.onEvent("+"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_11_listener() { return ctx.onEvent("-"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_13_listener() { return ctx.onEvent("/"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_15_listener() { return ctx.onEvent("*"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_17_listener() { return ctx.onEvent("="); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_20_listener() { return ctx.onClick(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_22_listener() { return ctx.onClick(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_24_listener() { return ctx.onClick(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_27_listener() { return ctx.onClick(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_29_listener() { return ctx.onClick(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_31_listener() { return ctx.onClick(6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_34_listener() { return ctx.onClick(7); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_36_listener() { return ctx.onClick(8); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_38_listener() { return ctx.onClick(9); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_41_listener() { return ctx.onClick(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, CalculatorComponent_ng_template_43_Template, 8, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.intermediateResult);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".container[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  max-width: 400px;\n  height: 400px;\n  border: 1px solid silver;\n  background-color: #c4c4c4;\n  border-radius: 10px;\n  margin-left: 50px;\n}\n\n@media (max-width: 486px) {\n  .container[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n\n.container-output[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 50px;\n  margin: 20px auto;\n}\n\n.container-output[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  font-size: 30px;\n}\n\n.clear[_ngcontent-%COMP%] {\n  display: flex;\n  width: 90%;\n  margin: 0 auto;\n  justify-content: space-between;\n}\n\n.clear[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 45%;\n}\n\n.btn-number[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n}\n\n.btn-number[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 30%;\n  margin-bottom: 5px;\n}\n\n.btn-number-one[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.btn-number-one[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 0 auto;\n}\n\n.btn-event[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 20px auto;\n  display: flex;\n  justify-content: space-between;\n}\n\n.btn-event[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 17%;\n}\n\n.block-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNhbGN1bGF0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGNBQUE7RUFDRjtBQUNGOztBQUlBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUZGOztBQUlFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBRko7O0FBTUE7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtBQUhGOztBQUtFO0VBQ0UsVUFBQTtBQUhKOztBQU9BO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFKRjs7QUFNRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQUpKOztBQVFBO0VBQ0UsYUFBQTtBQUxGOztBQU9FO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QUFMSjs7QUFTQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQU5GOztBQVFFO0VBQ0UsVUFBQTtBQU5KOztBQVdFO0VBQ0Usa0JBQUE7QUFSSiIsImZpbGUiOiJjYWxjdWxhdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgc2lsdmVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjNGM0YzQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4NnB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuLmNvbnRhaW5lci1vdXRwdXQge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbjogMjBweCBhdXRvO1xyXG5cclxuICBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICB9XHJcbn1cclxuXHJcbi5jbGVhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgLmJ0biB7XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gIH1cclxufVxyXG5cclxuLmJ0bi1udW1iZXIge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gIC5idG4ge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICB9XHJcbn1cclxuXHJcbi5idG4tbnVtYmVyLW9uZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgLmJ0biB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuLWV2ZW50IHtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAuYnRuIHtcclxuICAgIHdpZHRoOiAxNyU7XHJcbiAgfVxyXG59XHJcblxyXG4uYmxvY2stYnRuIHtcclxuICAuYnRuIHtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalculatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-calculator',
                templateUrl: './calculator.component.html',
                styleUrls: ['./calculator.component.scss']
            }]
    }], function () { return [{ type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }]; }, { myModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['myModal', { static: false }]
        }] }); })();


/***/ }),

/***/ "NZcN":
/*!*****************************************************!*\
  !*** ./src/app/todo/add-todo/add-todo.component.ts ***!
  \*****************************************************/
/*! exports provided: AddTodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTodoComponent", function() { return AddTodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "4USb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class AddTodoComponent {
    constructor(toastr) {
        this.toastr = toastr;
        this.addText = '';
        this.onChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    addTodo() {
        if (this.addText.trim().length > 0) {
            const newTodo = {
                id: Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])(),
                complete: false,
                title: this.addText
            };
            this.onChanged.emit(newTodo);
            this.addText = '';
        }
        else {
            this.toastr.error('Чтобы добавить задание введите название задания', 'Ошибка');
        }
    }
}
AddTodoComponent.ɵfac = function AddTodoComponent_Factory(t) { return new (t || AddTodoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"])); };
AddTodoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddTodoComponent, selectors: [["app-add-todo"]], outputs: { onChanged: "onChanged" }, decls: 5, vars: 1, consts: [[1, "input-group"], ["type", "text", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-btn"], ["type", "button", 1, "btn", "btn-success", 3, "click"]], template: function AddTodoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddTodoComponent_Template_input_ngModelChange_1_listener($event) { return ctx.addText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddTodoComponent_Template_button_click_3_listener() { return ctx.addTodo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.addText);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".add-block[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhZGQtdG9kby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGlCQUFBO0FBQUoiLCJmaWxlIjoiYWRkLXRvZG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLWJsb2NrIHtcclxuICAuYnRue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddTodoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-todo',
                templateUrl: './add-todo.component.html',
                styleUrls: ['./add-todo.component.scss']
            }]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }]; }, { onChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function AppComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0412 \u0434\u0430\u043D\u043D\u043E\u043C \u043F\u0440\u043E\u0435\u043A\u0442\u0435 \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043E:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "routing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "event emitter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "bootstrap");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Two-Way Binding");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "scss");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor() {
        this.isShow = true;
    }
    ngOnInit() {
        if (document.location.pathname.length > 1) {
            this.isShow = false;
        }
    }
    onClick(isShow) {
        if (isShow) {
            this.isShow = true;
        }
        else {
            this.isShow = false;
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 17, vars: 2, consts: [[1, "block"], [1, "bg-primary"], [1, "logo"], [3, "click"], [1, "nav"], ["routerLink", "/calc", 3, "click"], ["routerLink", "/todo", 3, "click"], ["class", "text-title text-dark", 4, "ngIf"], [4, "ngIf"], ["href", "mailto:rama@inbox.ru?subject=\u0412\u043E\u043F\u0440\u043E\u0441"], [1, "text-title", "text-dark"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_3_listener() { return ctx.onClick(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "AnguProj");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_7_listener() { return ctx.onClick(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u041A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_10_listener() { return ctx.onClick(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "ToDO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_div_12_Template, 14, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_div_13_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "footer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043C\u043D\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isShow);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["header[_ngcontent-%COMP%] {\n  height: 50px;\n  display: flex;\n  align-items: center;\n  color: white;\n}\nheader[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  margin-left: 50px;\n  cursor: pointer;\n}\nheader[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n  font-weight: bold;\n}\nheader[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n}\nheader[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n  margin-right: 20px;\n}\nheader[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: yellowgreen;\n}\n.block[_ngcontent-%COMP%] {\n  color: white;\n  position: relative;\n  height: 100vh;\n}\n.block[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n}\n.block[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n  font-size: 15px;\n}\n.text-title[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n@media (max-width: 330px) {\n  header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    margin-left: 10px;\n  }\n  header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n\n  .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDRjtBQUFFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBRUo7QUFESTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBR047QUFDRTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFDSjtBQUFJO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFFTjtBQUFJO0VBQ0Usa0JBQUE7QUFFTjtBQUlBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQURGO0FBRUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUFKO0FBQ0k7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ047QUFLQTtFQUNFLGFBQUE7QUFGRjtBQU1BO0VBRUk7SUFDRSxpQkFBQTtFQUpKO0VBS0k7SUFDRSxlQUFBO0VBSE47O0VBVUU7SUFDRSxlQUFBO0VBUEo7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXJ7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgLmxvZ297XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGF7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5uYXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYXtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIH1cclxuICAgIGE6aG92ZXJ7XHJcbiAgICAgIGNvbG9yOiB5ZWxsb3dncmVlbjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4uYmxvY2t7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGZvb3RlcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGF7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLnRleHQtdGl0bGUge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMzMwcHgpIHtcclxuICBoZWFkZXJ7XHJcbiAgICAubG9nb3tcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgIGF7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLm5hdiwge1xyXG4gICAgYXtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-formly/core */ "0FS3");
/* harmony import */ var _ngx_formly_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-formly/bootstrap */ "bquJ");
/* harmony import */ var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./calculator/calculator.component */ "LkI3");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./todo/todo.component */ "G1N2");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _todo_add_todo_add_todo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./todo/add-todo/add-todo.component */ "NZcN");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _ngx_formly_core__WEBPACK_IMPORTED_MODULE_5__["FormlyModule"].forRoot(),
            _ngx_formly_bootstrap__WEBPACK_IMPORTED_MODULE_6__["FormlyBootstrapModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot(),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_7__["CalculatorComponent"],
        _todo_todo_component__WEBPACK_IMPORTED_MODULE_11__["TodoComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"],
        _todo_add_todo_add_todo_component__WEBPACK_IMPORTED_MODULE_13__["AddTodoComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ngx_formly_core__WEBPACK_IMPORTED_MODULE_5__["FormlyModule"], _ngx_formly_bootstrap__WEBPACK_IMPORTED_MODULE_6__["FormlyBootstrapModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_7__["CalculatorComponent"],
                    _todo_todo_component__WEBPACK_IMPORTED_MODULE_11__["TodoComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"],
                    _todo_add_todo_add_todo_component__WEBPACK_IMPORTED_MODULE_13__["AddTodoComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _ngx_formly_core__WEBPACK_IMPORTED_MODULE_5__["FormlyModule"].forRoot(),
                    _ngx_formly_bootstrap__WEBPACK_IMPORTED_MODULE_6__["FormlyBootstrapModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(),
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot(),
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculator/calculator.component */ "LkI3");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo/todo.component */ "G1N2");






// определение маршрутов
const routes = [
    { path: 'calc', component: _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_2__["CalculatorComponent"] },
    { path: 'todo', component: _todo_todo_component__WEBPACK_IMPORTED_MODULE_3__["TodoComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map