(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Theekshana\projects\BUILD ESG AI Agent\code\ESG-AI-Agent-azure-repo\Minerva-Front-End\src\main.ts */"zUnb");


/***/ }),

/***/ "0HvM":
/*!*************************************************!*\
  !*** ./src/app/features/home/home.component.ts ***!
  \*************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var src_app_core_models_chat_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/models/chat-model */ "uXNR");
/* harmony import */ var src_app_core_models_question_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/models/question.model */ "EtN/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_history_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/history.service */ "9std");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_core_services_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/chat.service */ "il7l");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");







function HomeComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Processing");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class HomeComponent {
    constructor(historyService, datePipe, chatService, toastr) {
        this.historyService = historyService;
        this.datePipe = datePipe;
        this.chatService = chatService;
        this.toastr = toastr;
        this.chats = [];
        this.isLoading = false;
        this.isContainerHidden = false;
    }
    ngOnInit() {
    }
    copyQuestion(question) {
        // Copy the question to the clipboard
        const textField = document.createElement('textarea');
        textField.innerText = question;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        textField.remove();
        // Show a toast message
        this.toastr.success('Question copied: ' + question, 'Copied');
    }
    onQuestionSubmit() {
        if (this.userQuestion) {
            console.log("row user question :", this.userQuestion);
            const questionModel = new src_app_core_models_question_model__WEBPACK_IMPORTED_MODULE_1__["QuestionModel"]();
            questionModel.user_input = this.userQuestion;
            this.isLoading = true;
            this.chatService.generateAnswer(questionModel).subscribe((response) => {
                console.log(response);
                const chatModel = new src_app_core_models_chat_model__WEBPACK_IMPORTED_MODULE_0__["ChatModel"]();
                // console.log("chatmodel :",chatModel);
                const user_input = response["user_input"];
                console.log("user input :", user_input);
                const arr = response["format_data"];
                console.log("arr :", arr);
                const Question_model = {
                    user_input: user_input
                };
                chatModel.questionModel = Question_model;
                console.log("user question :", chatModel.questionModel);
                const Answer_Model = {
                    content: response.bot_response,
                    sourceDocuments: response.format_data
                };
                chatModel.answerModel = Answer_Model;
                this.chats.unshift(chatModel);
                this.selectedChatIndex = 0;
                this.isLoading = false;
                this.userQuestion = '';
                //this.getChatHistoryByUser(this.user.userId);
            }, error => {
                this.isLoading = false;
            });
            this.isContainerHidden = true;
        }
    }
    handleQuestionSelect(index) {
        this.selectedChatIndex = index;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_history_service__WEBPACK_IMPORTED_MODULE_3__["HistoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 44, vars: 6, consts: [[1, "wrapper"], ["id", "content"], [1, "content-wrapper"], [1, "row"], [1, "col-md-6", "offset-md-3"], [1, "input-group", "mb-3"], [1, "container", "text-center", 3, "hidden"], [1, "homelogo-container", 2, "margin-bottom", "160px"], ["src", "assets/images/minerva-logo.png", "width", "250", 1, "mt-5", "mb-3", "custom-mt"], [1, "col-md-6"], [1, "card"], [1, "card-body"], [1, "card-text", 3, "click"], ["type", "text", "placeholder", "Message Minerva...", "aria-label", "Write your message", "aria-describedby", "basic-addon2", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup.enter"], ["type", "submit", "id", "basic-addon2", 1, "input-group-text", "btn", "btn-outline-success", 3, "click"], ["class", "row m-5", 4, "ngIf"], [1, "col-sm-12", "col-md-6", "col-lg-6"], [3, "chats", "selectedChatIndex", "onQuestionSelect"], [3, "sourceDocuments"], [1, "row", "m-5"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "ms-2"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "How can I help you today?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_p_click_17_listener() { return ctx.copyQuestion("Which companies are required to report under the CSRD?"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Which companies are required to report under the CSRD?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_p_click_22_listener() { return ctx.copyQuestion("What are the European Sustainability Reporting Standards (ESRS)?\n                            "); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "What are the European Sustainability Reporting Standards (ESRS)? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_p_click_28_listener() { return ctx.copyQuestion("What types of information must be included in sustainability reports?\n                          "); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "What types of information must be included in sustainability reports? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_p_click_33_listener() { return ctx.copyQuestion("How can companies prepare for compliance with the CSRD?"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "How can companies prepare for compliance with the CSRD?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_35_listener($event) { return ctx.userQuestion = $event; })("keyup.enter", function HomeComponent_Template_input_keyup_enter_35_listener() { return ctx.onQuestionSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_36_listener() { return ctx.onQuestionSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, HomeComponent_div_38_Template, 7, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "app-chat", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onQuestionSelect", function HomeComponent_Template_app_chat_onQuestionSelect_41_listener($event) { return ctx.handleQuestionSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "app-documents", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.isContainerHidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userQuestion);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("chats", ctx.chats)("selectedChatIndex", ctx.selectedChatIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("sourceDocuments", ctx.chats[ctx.selectedChatIndex] == null ? null : ctx.chats[ctx.selectedChatIndex].answerModel == null ? null : ctx.chats[ctx.selectedChatIndex].answerModel.sourceDocuments);
    } }, styles: ["ul.list-group[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\nul.list-group[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: #717985 !important;\n  display: block;\n  background-image: url('pdf-1.png');\n  background-position-x: left;\n  background-position-y: center;\n  background-repeat: no-repeat;\n  background-position: 10px 10px;\n  padding-left: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKO0FBQ0k7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUFDUiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwubGlzdC1ncm91cCB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcblxyXG4gICAgbGkge1xyXG4gICAgICAgIGNvbG9yOiAjNzE3OTg1ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwifi9zcmMvYXNzZXRzL2ltYWdlcy9wZGYtMS5wbmdcIik7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBsZWZ0O1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTBweCAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gUSAmIEEgY29udGVudCBhcmVhIFxyXG5cclxuLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcclxuLy8gICAgICNmcmFtZSAuY29udGVudCAubWVzc2FnZS1pbnB1dCAud3JhcCBpbnB1dCB7XHJcbi8vICAgICAgICAgcGFkZGluZzogMTVweCAzMnB4IDE2cHggOHB4O1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyAjZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2UtaW5wdXQgLndyYXAgaW5wdXQ6Zm9jdXMge1xyXG4vLyAgICAgb3V0bGluZTogbm9uZTtcclxuLy8gfVxyXG5cclxuLy8gI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlLWlucHV0IC53cmFwIC5hdHRhY2htZW50IHtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIHJpZ2h0OiA2MHB4O1xyXG4vLyAgICAgei1pbmRleDogNDtcclxuLy8gICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbi8vICAgICBmb250LXNpemU6IDEuMWVtO1xyXG4vLyAgICAgY29sb3I6ICM0MzVmN2E7XHJcbi8vICAgICBvcGFjaXR5OiAuNTtcclxuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gfVxyXG5cclxuLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcclxuLy8gICAgICNmcmFtZSAuY29udGVudCAubWVzc2FnZS1pbnB1dCAud3JhcCAuYXR0YWNobWVudCB7XHJcbi8vICAgICAgICAgbWFyZ2luLXRvcDogMTdweDtcclxuLy8gICAgICAgICByaWdodDogNjVweDtcclxuLy8gICAgIH1cclxuLy8gfSJdfQ== */", ".col-6[_ngcontent-%COMP%] {\n    background-color: #f0f0f0; \n    border: 1px solid #ccc; \n    border-radius: 5px; \n    margin-bottom: 20px; \n  \n  }\n\n  .p-3[_ngcontent-%COMP%] {\n    font-weight: bold; \n    color: #333; \n    margin-left: 5px; \n  }\n\n.card[_ngcontent-%COMP%] {\n    border: 1px solid #ccc;\n    border-radius: 10px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n    transition: box-shadow 0.3s ease;\n    margin-bottom: 20px;\n}\n\n.card[_ngcontent-%COMP%]:hover {\n    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);\n}\n\n.card-title[_ngcontent-%COMP%] {\n    color: #333;\n    font-size: 1.2rem;\n}\n\n.card-text[_ngcontent-%COMP%] {\n    color: #666;\n}\n\n.container[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    padding-bottom: 20px;\n}\n\n.row[_ngcontent-%COMP%] {\n    margin-left: -15px;\n    margin-right: -15px;\n}\n\n.card-body[_ngcontent-%COMP%] {\n    padding: 20px;\n}\n\n\n  .logo-text[_ngcontent-%COMP%] {\n      font-size: 24px; \n      font-weight: bold; \n  }"] });


/***/ }),

/***/ "7xVY":
/*!****************************************************************!*\
  !*** ./src/app/features/home/documents/documents.component.ts ***!
  \****************************************************************/
/*! exports provided: DocumentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsComponent", function() { return DocumentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function DocumentsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sourceDocument_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-bs-target", "#panelsStayOpen-collapseOne-" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sourceDocument_r1.source, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "panelsStayOpen-collapseOne-" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sourceDocument_r1.pageContent, " ");
} }
class DocumentsComponent {
    constructor() {
        this.sourceDocuments = [];
    }
    ngOnInit() {
    }
}
DocumentsComponent.ɵfac = function DocumentsComponent_Factory(t) { return new (t || DocumentsComponent)(); };
DocumentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DocumentsComponent, selectors: [["app-documents"]], inputs: { sourceDocuments: "sourceDocuments" }, decls: 2, vars: 1, consts: [["id", "accordionPanelsStayOpenExample", 1, "accordion"], ["class", "accordion-item", 4, "ngFor", "ngForOf"], [1, "accordion-item"], [1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "aria-expanded", "false", "aria-controls", "panelsStayOpen-collapseOne", 1, "accordion-button", "collapsed"], [1, "accordion-collapse", "collapse", 3, "id"], [1, "accordion-body"]], template: function DocumentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DocumentsComponent_div_1_Template, 7, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sourceDocuments);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".accordion-button[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  font-weight: 600 !important;\n  padding: 10px 20px;\n}\n\n.accordion[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZG9jdW1lbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0oiLCJmaWxlIjoiZG9jdW1lbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjY29yZGlvbi1idXR0b24ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbn1cclxuXHJcbi5hY2NvcmRpb24ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59Il19 */"] });


/***/ }),

/***/ "9std":
/*!**************************************************!*\
  !*** ./src/app/core/services/history.service.ts ***!
  \**************************************************/
/*! exports provided: HistoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryService", function() { return HistoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _request_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request-manager.service */ "nIMa");
/* harmony import */ var src_app_shared_url_configs_url_configs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/url-configs/url-configs */ "nhHb");



class HistoryService {
    constructor(restApiService, urlConfig) {
        this.restApiService = restApiService;
        this.urlConfig = urlConfig;
    }
    getChatHistoryByUser(id) {
        let url = `${this.urlConfig.getValueByKey('ChatHistoryByUser')}`;
        url = url.replace('${id}', String(id));
        return this.restApiService.get(url);
    }
    getChatHistoryByDate(id, createdOn) {
        let url = `${this.urlConfig.getValueByKey('ChatHistoryByDate')}`;
        url = url.replace('${id}', String(id));
        url = url.replace('${date}', encodeURIComponent(createdOn));
        return this.restApiService.get(url);
    }
}
HistoryService.ɵfac = function HistoryService_Factory(t) { return new (t || HistoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_request_manager_service__WEBPACK_IMPORTED_MODULE_1__["RequestManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_url_configs_url_configs__WEBPACK_IMPORTED_MODULE_2__["UrlConfigs"])); };
HistoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HistoryService, factory: HistoryService.ɵfac, providedIn: 'root' });


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
    production: false,
    // identityServerURL: 'http://127.0.0.1:8000'  // for local
    // identityServerURL: 'http://0.0.0.0:8080' // for Network
    identityServerURL: 'http://127.0.0.1:8000' // for Network
    // identityServerURL: 'http://minerva-esg-ai-agent-demo-backend.azurewebsites.net' // for azure app service
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

/***/ "EtN/":
/*!***********************************************!*\
  !*** ./src/app/core/models/question.model.ts ***!
  \***********************************************/
/*! exports provided: QuestionModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionModel", function() { return QuestionModel; });
class QuestionModel {
}


/***/ }),

/***/ "INts":
/*!*******************************************************!*\
  !*** ./src/app/shared/app-constants/app-constants.ts ***!
  \*******************************************************/
/*! exports provided: AppConstant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConstant", function() { return AppConstant; });
class AppConstant {
}
AppConstant.Today = 'Today';
AppConstant.Yesterday = 'Yesterday';
AppConstant.User = 'User';


/***/ }),

/***/ "LyMJ":
/*!*********************************************!*\
  !*** ./src/app/core/core-routing.module.ts ***!
  \*********************************************/
/*! exports provided: CoreRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreRoutingModule", function() { return CoreRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core.component */ "RXl3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{ path: '', component: _core_component__WEBPACK_IMPORTED_MODULE_1__["CoreComponent"] }];
class CoreRoutingModule {
}
CoreRoutingModule.ɵfac = function CoreRoutingModule_Factory(t) { return new (t || CoreRoutingModule)(); };
CoreRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CoreRoutingModule });
CoreRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CoreRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "MK8t":
/*!****************************************!*\
  !*** ./src/app/shared/helpers/auth.ts ***!
  \****************************************/
/*! exports provided: getLoggedInUser, saveUser, clearUser, isLoggedIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoggedInUser", function() { return getLoggedInUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveUser", function() { return saveUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearUser", function() { return clearUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoggedIn", function() { return isLoggedIn; });
/* harmony import */ var _app_constants_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-constants/app-constants */ "INts");

const getLoggedInUser = () => {
    const user = JSON.parse(localStorage.getItem(_app_constants_app_constants__WEBPACK_IMPORTED_MODULE_0__["AppConstant"].User));
    return user;
};
const saveUser = (user) => {
    localStorage.setItem(_app_constants_app_constants__WEBPACK_IMPORTED_MODULE_0__["AppConstant"].User, JSON.stringify(user));
};
const clearUser = () => {
    localStorage.removeItem(_app_constants_app_constants__WEBPACK_IMPORTED_MODULE_0__["AppConstant"].User);
};
const isLoggedIn = () => {
    const user = localStorage.getItem(_app_constants_app_constants__WEBPACK_IMPORTED_MODULE_0__["AppConstant"].User);
    if (user) {
        return true;
    }
    return false;
};


/***/ }),

/***/ "RCSa":
/*!**********************************************************!*\
  !*** ./src/app/features/home/navbar/navbar.component.ts ***!
  \**********************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_helpers_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/helpers/auth */ "MK8t");
/* harmony import */ var src_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/authentication.service */ "y8gV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");






class NavbarComponent {
    constructor(authenticationService, router, toastr) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.toastr = toastr;
        this.onLogout = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChangeModel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.user = Object(src_app_shared_helpers_auth__WEBPACK_IMPORTED_MODULE_1__["getLoggedInUser"])();
    }
    logout() {
        this.router.navigate(['']);
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], inputs: { models: "models", selectedModel: "selectedModel" }, outputs: { onLogout: "onLogout", onChangeModel: "onChangeModel" }, decls: 7, vars: 0, consts: [[1, "navbar", "navbar-dark", "bg-dark"], [1, "container-fluid"], [1, "d-flex", "justify-content-between", "bd-highlight"], [1, "d-flex", "justify-content-between", "bd-highlight", 3, "click"], [1, "fa-solid", "fa-power-off"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_div_click_4_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".navbar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksY0FBQTtBQUFSIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xyXG4gICAgaSB7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "RXl3":
/*!****************************************!*\
  !*** ./src/app/core/core.component.ts ***!
  \****************************************/
/*! exports provided: CoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreComponent", function() { return CoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CoreComponent {
    constructor() { }
    ngOnInit() {
    }
}
CoreComponent.ɵfac = function CoreComponent_Factory(t) { return new (t || CoreComponent)(); };
CoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CoreComponent, selectors: [["app-core"]], decls: 2, vars: 0, template: function CoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "core works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3JlLmNvbXBvbmVudC5zY3NzIn0= */"] });


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


class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'AiQA-Web';
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/core.module */ "pKmL");
/* harmony import */ var _core_services_history_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/services/history.service */ "9std");
/* harmony import */ var _core_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/interceptors/auth.interceptor */ "htiD");
/* harmony import */ var _features_logon_logon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./features/logon/logon.component */ "vzUq");
/* harmony import */ var _features_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./features/home/home.component */ "0HvM");
/* harmony import */ var _features_home_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./features/home/sidebar/sidebar.component */ "bi5V");
/* harmony import */ var _features_home_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./features/home/navbar/navbar.component */ "RCSa");
/* harmony import */ var _features_home_documents_documents_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./features/home/documents/documents.component */ "7xVY");
/* harmony import */ var _features_home_chat_chat_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./features/home/chat/chat.component */ "aAGQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "fXoL");






















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ providers: [_core_services_history_service__WEBPACK_IMPORTED_MODULE_9__["HistoryService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
            useClass: _core_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__["AuthInterceptor"],
            multi: true,
        }
    ], imports: [[
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _features_logon_logon_component__WEBPACK_IMPORTED_MODULE_11__["LogonComponent"],
        _features_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
        _features_home_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["SidebarComponent"],
        _features_home_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__["NavbarComponent"],
        _features_home_documents_documents_component__WEBPACK_IMPORTED_MODULE_15__["DocumentsComponent"],
        _features_home_chat_chat_component__WEBPACK_IMPORTED_MODULE_16__["ChatComponent"]], imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"]] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetComponentScope"](_features_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"], [_features_home_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["SidebarComponent"],
    _features_home_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _features_home_chat_chat_component__WEBPACK_IMPORTED_MODULE_16__["ChatComponent"],
    _features_home_documents_documents_component__WEBPACK_IMPORTED_MODULE_15__["DocumentsComponent"]], []);


/***/ }),

/***/ "aAGQ":
/*!******************************************************!*\
  !*** ./src/app/features/home/chat/chat.component.ts ***!
  \******************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");

 // Import environment configuration





function ChatComponent_ng_container_4_input_20_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChatComponent_ng_container_4_input_20_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const chat_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return chat_r1.userTypedMessage = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chat_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", chat_r1.userTypedMessage);
} }
function ChatComponent_ng_container_4_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_container_4_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.thumbsUp(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\uD83D\uDC4D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatComponent_ng_container_4_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_ng_container_4_button_22_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.thumbsDown(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\uD83D\uDC4E");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "typing": a0 }; };
function ChatComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "You");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Minerva");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ChatComponent_ng_container_4_input_20_Template, 1, 1, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ChatComponent_ng_container_4_button_21_Template, 2, 0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ChatComponent_ng_container_4_button_22_Template, 2, 0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const chat_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](chat_r1.questionModel.user_input);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, i_r2 === ctx_r0.selectedChatIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", i_r2 === ctx_r0.selectedChatIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", chat_r1.answerModel.content, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !chat_r1.feedbackSubmitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !chat_r1.feedbackSubmitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !chat_r1.feedbackSubmitted);
} }
class ChatComponent {
    constructor(http, toastr) {
        this.http = http;
        this.toastr = toastr;
        this.onQuestionSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onSelect(index) {
        this.onQuestionSelect.emit(index);
    }
    thumbsUp(index) {
        const question = this.chats[index].questionModel.user_input;
        const botResponse = this.chats[index].answerModel.content;
        const userFeedback = this.chats[index].userTypedMessage ? this.chats[index].userTypedMessage : ''; // Get user's typed message
        const feedback = 'Good'; // Set feedback to 'Good'
        this.sendFeedbackToBackend(question, botResponse, userFeedback, feedback);
        this.chats[index].feedbackSubmitted = true; // Mark feedback as submitted
        this.chats[index].userTypedMessage = ''; // Clear user's typed message
        this.toastr.success('Thank you for your feedback!', 'Feedback Submitted');
    }
    thumbsDown(index) {
        const question = this.chats[index].questionModel.user_input;
        const botResponse = this.chats[index].answerModel.content;
        const userFeedback = this.chats[index].userTypedMessage ? this.chats[index].userTypedMessage : ''; // Get user's typed message
        const feedback = 'Bad'; // Set feedback to 'Bad
        this.sendFeedbackToBackend(question, botResponse, userFeedback, feedback);
        this.chats[index].feedbackSubmitted = true; // Mark feedback as submitted
        this.chats[index].userTypedMessage = ''; // Clear user's typed message
        this.toastr.success('Thank you for your feedback!', 'Feedback Submitted');
    }
    sendFeedbackToBackend(question, botResponse, userFeedback, feedback) {
        const feedbackData = {
            question: question,
            botResponse: botResponse,
            userFeedback: userFeedback,
            feedback: feedback
        };
        // Use the backend API URL from environment configuration
        const apiUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].identityServerURL}/feedback`;
        this.http.post(apiUrl, feedbackData).subscribe((response) => {
            console.log('Feedback sent successfully:', response);
        }, (error) => {
            console.error('Error sending feedback:', error);
        });
    }
}
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], inputs: { chats: "chats", selectedChatIndex: "selectedChatIndex" }, outputs: { onQuestionSelect: "onQuestionSelect" }, decls: 5, vars: 1, consts: [["id", "frame"], [1, "content"], [1, "messages"], [4, "ngFor", "ngForOf"], [1, "sent"], [1, "d-flex"], ["src", "../assets/images/man.png", "alt", ""], [1, "flex-grow-1"], [1, "replies", 3, "ngClass"], ["src", "../assets/images/robot.png", "alt", "", "width", "200px"], ["type", "text", "class", "form-control", "placeholder", "Type your feedback here... and then hit \uD83D\uDC4D/\uD83D\uDC4E", "aria-label", "Write your message", 3, "ngModel", "ngModelChange", 4, "ngIf"], [3, "click", 4, "ngIf"], ["type", "text", "placeholder", "Type your feedback here... and then hit \uD83D\uDC4D/\uD83D\uDC4E", "aria-label", "Write your message", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "click"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChatComponent_ng_container_4_Template, 23, 10, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.chats);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: [".active[_ngcontent-%COMP%] {\n  border: 1px solid #10734A !important;\n}\n\n#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 0, 0.3);\n}\n\n#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  clear: both;\n  margin: 0;\n  width: 100%;\n  font-size: 0.9em;\n}\n\n#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.sent[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 10px 0 0;\n}\n\n#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.sent[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #32465a;\n  background-color: #fff;\n  border: 1px solid #D7DAED;\n  margin: 0 0 30px 0;\n  font-size: 13px;\n  line-height: 1.8;\n  width: 100%;\n  padding: 10px 20px;\n}\n\n#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.replies[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 10px 0 0;\n}\n\n#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.replies[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #32465a;\n  background: #fff;\n  border: 1px solid #D7DAED;\n  margin: 0 0 30px 0;\n  font-size: 13px;\n  line-height: 1.8;\n  padding: 20px;\n}\n\n#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n}\n\n#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0 5x;\n  border-radius: 10px;\n  font-size: 13px;\n}\n\n#frame[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .message-input[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: 1px solid #E9EBF8;\n  padding: 15px 20px;\n  color: #32465a;\n}\n\n\n\nbutton[_ngcontent-%COMP%] {\n  border: none;\n  \n  background-color: transparent;\n  \n  cursor: pointer;\n  \n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none;\n  \n}\n\n\n\nbutton[_ngcontent-%COMP%] {\n  font-size: 16px;\n  \n  padding: 5px;\n  \n  margin: 2px;\n  \n}\n\n.feedback-prompt[_ngcontent-%COMP%] {\n  font-size: 12px;\n  \n  color: rgba(0, 0, 0, 0.5);\n  \n}\n\n.replies[_ngcontent-%COMP%] {\n  animation: comeDown 0.5s ease forwards;\n  \n}\n\n.submit-button[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  cursor: pointer;\n}\n\n.feedback-input[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  outline: none;\n  \n}\n\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n@keyframes comeDown {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2hhdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQ0FBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBR0E7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0UsaUVBQUE7O0FBQ0E7RUFDRSxZQUFBO0VBQWMsa0JBQUE7RUFDZCw2QkFBQTtFQUErQixnQ0FBQTtFQUMvQixlQUFBO0VBQWlCLGlDQUFBO0FBR3JCOztBQUFFO0VBQ0UsYUFBQTtFQUFlLHlCQUFBO0FBSW5COztBQURFLHFFQUFBOztBQUNBO0VBQ0UsZUFBQTtFQUFpQixxQkFBQTtFQUNqQixZQUFBO0VBQWMsbUJBQUE7RUFDZCxXQUFBO0VBQWEsa0JBQUE7QUFPakI7O0FBSkU7RUFDRSxlQUFBO0VBQWlCLG1DQUFBO0VBQ2pCLHlCQUFBO0VBQTJCLHNDQUFBO0FBUy9COztBQVBFO0VBQ0Usc0NBQUE7RUFBd0Msd0JBQUE7QUFXNUM7O0FBUkU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBV0o7O0FBUkU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQWUsZ0NBQUE7QUFZbkI7O0FBVEU7RUFDRSxXQUFBO0FBWUo7O0FBVEU7RUFDRTtJQUNFLFVBQUE7SUFDQSw0QkFBQTtFQVlKO0VBVkU7SUFDRSxVQUFBO0lBQ0Esd0JBQUE7RUFZSjtBQUNGIiwiZmlsZSI6ImNoYXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZlIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMDczNEEgIWltcG9ydGFudDtcclxufVxyXG5cclxuI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlczo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcblxyXG4jZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2VzIHVsIGxpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG59XHJcblxyXG4jZnJhbWUgLmNvbnRlbnQgLm1lc3NhZ2VzIHVsIGxpLnNlbnQgaW1nIHtcclxuICAgIG1hcmdpbjogMCAxMHB4IDAgMDtcclxufVxyXG5cclxuI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlcyB1bCBsaS5zZW50IHAge1xyXG4gICAgY29sb3I6ICMzMjQ2NWE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Q3REFFRDtcclxuICAgIG1hcmdpbjogMCAwIDMwcHggMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxufVxyXG5cclxuI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlcyB1bCBsaS5yZXBsaWVzIGltZyB7XHJcbiAgICBtYXJnaW46IDAgMTBweCAwIDA7XHJcbn1cclxuXHJcbiNmcmFtZSAuY29udGVudCAubWVzc2FnZXMgdWwgbGkucmVwbGllcyBwIHtcclxuICAgIGNvbG9yOiAjMzI0NjVhO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEN0RBRUQ7XHJcbiAgICBtYXJnaW46IDAgMCAzMHB4IDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuI2ZyYW1lIC5jb250ZW50IC5tZXNzYWdlcyB1bCBsaSBpbWcge1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbiNmcmFtZSAuY29udGVudCAubWVzc2FnZXMgdWwgbGkgcCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAwIDV4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuXHJcbn1cclxuXHJcbiNmcmFtZSAuY29udGVudCAubWVzc2FnZS1pbnB1dCAud3JhcCBpbnB1dCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0U5RUJGODtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgIGNvbG9yOiAjMzI0NjVhO1xyXG59XHJcblxyXG4gIC8qIEFkZCB0aGlzIENTUyB0byB5b3VyIGNvbXBvbmVudCdzIHN0eWxlc2hlZXQgb3IgZ2xvYmFsIHN0eWxlcyAqL1xyXG4gIGJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IG5vbmU7IC8qIFJlbW92ZSBib3JkZXIgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiBNYWtlIGJhY2tncm91bmQgdHJhbnNwYXJlbnQgKi9cclxuICAgIGN1cnNvcjogcG9pbnRlcjsgLyogU2hvdyBwb2ludGVyIGN1cnNvciBvbiBob3ZlciAqL1xyXG4gIH1cclxuICBcclxuICBidXR0b246Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTsgLyogUmVtb3ZlIGZvY3VzIG91dGxpbmUgKi9cclxuICB9XHJcbiAgXHJcbiAgLyogT3B0aW9uYWxseSwgeW91IGNhbiBhZGQgbW9yZSBzdHlsZXMgZm9yIGJldHRlciB2aXN1YWwgYXBwZWFyYW5jZSAqL1xyXG4gIGJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7IC8qIEFkanVzdCBmb250IHNpemUgKi9cclxuICAgIHBhZGRpbmc6IDVweDsgLyogQWRqdXN0IHBhZGRpbmcgKi9cclxuICAgIG1hcmdpbjogMnB4OyAvKiBBZGp1c3QgbWFyZ2luICovXHJcbiAgfVxyXG5cclxuICAuZmVlZGJhY2stcHJvbXB0IHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDsgLyogQWRqdXN0IHRoZSBmb250IHNpemUgYXMgbmVlZGVkICovXHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpOyAvKiBBZGp1c3QgdGhlIHRyYW5zcGFyZW5jeSBhcyBuZWVkZWQgKi9cclxuICB9XHJcbiAgLnJlcGxpZXMge1xyXG4gICAgYW5pbWF0aW9uOiBjb21lRG93biAwLjVzIGVhc2UgZm9yd2FyZHM7IC8qIENvbWUgZG93biBhbmltYXRpb24gKi9cclxuICB9XHJcblxyXG4gIC5zdWJtaXQtYnV0dG9uIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5mZWVkYmFjay1pbnB1dCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTsgLyogUmVtb3ZlIG91dGxpbmUgd2hlbiBmb2N1c2VkICovXHJcbiAgfVxyXG4gIFxyXG4gIC5mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGNvbWVEb3duIHtcclxuICAgIGZyb20ge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB9XHJcbiAgfSAgIl19 */"] });


/***/ }),

/***/ "bi5V":
/*!************************************************************!*\
  !*** ./src/app/features/home/sidebar/sidebar.component.ts ***!
  \************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home.component */ "0HvM");


class SidebarComponent {
    // @Input() history: Array<Array<QueryModel>>;
    // @Input() showViewMore: Object = {};
    // indexToHide: number;
    // activeQuery: QueryModel = null;
    constructor(homeComponent) {
        this.homeComponent = homeComponent;
    }
    ngOnInit() {
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 4, vars: 0, consts: [["id", "sidebar"], [1, "sidebar-header"], ["href", "index.html"], ["src", "assets/images/minerva-logo-white.png", "width", "140"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */", ".logo-text[_ngcontent-%COMP%] {\n      font-size: 20px; \n      font-weight: bold; \n      color: #000;\n  }"] });


/***/ }),

/***/ "htiD":
/*!*******************************************************!*\
  !*** ./src/app/core/interceptors/auth.interceptor.ts ***!
  \*******************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_helpers_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/helpers/auth */ "MK8t");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authentication.service */ "y8gV");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");







class AuthInterceptor {
    constructor(router, authService, toastr) {
        this.router = router;
        this.authService = authService;
        this.toastr = toastr;
    }
    intercept(request, next) {
        var _a;
        const authToken = (_a = Object(src_app_shared_helpers_auth__WEBPACK_IMPORTED_MODULE_2__["getLoggedInUser"])()) === null || _a === void 0 ? void 0 : _a.token;
        if (authToken) {
            const authRequest = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${authToken}`,
                },
            });
            return next.handle(authRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => { }, (err) => {
                if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
                    if (err.status !== 401) {
                        return this.toastr.error("Something went wrong. Please try again later.");
                    }
                    const user = Object(src_app_shared_helpers_auth__WEBPACK_IMPORTED_MODULE_2__["getLoggedInUser"])();
                    this.authService.logOut(user.userName).subscribe((response) => {
                        Object(src_app_shared_helpers_auth__WEBPACK_IMPORTED_MODULE_2__["clearUser"])();
                        this.router.navigate(['/login']);
                        return this.toastr.error("Your session has expired.");
                    });
                    return false;
                }
            }));
        }
        return next.handle(request);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });


/***/ }),

/***/ "il7l":
/*!***********************************************!*\
  !*** ./src/app/core/services/chat.service.ts ***!
  \***********************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _request_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request-manager.service */ "nIMa");
/* harmony import */ var src_app_shared_url_configs_url_configs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/url-configs/url-configs */ "nhHb");



class ChatService {
    constructor(restApiService, urlConfig) {
        this.restApiService = restApiService;
        this.urlConfig = urlConfig;
    }
    getModels() {
        let url = `${this.urlConfig.getValueByKey('AiModels')}`;
        return this.restApiService.get(url);
    }
    generateAnswer(questionModel) {
        let url = `${this.urlConfig.getValueByKey('GenerateAnswer')}`;
        console.log(url);
        return this.restApiService.post(url, questionModel);
    }
}
ChatService.ɵfac = function ChatService_Factory(t) { return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_request_manager_service__WEBPACK_IMPORTED_MODULE_1__["RequestManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_url_configs_url_configs__WEBPACK_IMPORTED_MODULE_2__["UrlConfigs"])); };
ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChatService, factory: ChatService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "nIMa":
/*!**********************************************************!*\
  !*** ./src/app/core/services/request-manager.service.ts ***!
  \**********************************************************/
/*! exports provided: RequestManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestManagerService", function() { return RequestManagerService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class RequestManagerService {
    constructor(http) {
        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].identityServerURL;
    }
    get(endpoint) {
        const url = `${this.apiUrl}/${endpoint}`;
        return this.http.get(url);
    }
    post(endpoint, data) {
        const url = `${this.apiUrl}/${endpoint}`;
        return this.http.post(url, data);
    }
    put(endpoint, data) {
        const url = `${this.apiUrl}/${endpoint}`;
        return this.http.put(url, data);
    }
    delete(endpoint) {
        const url = `${this.apiUrl}/${endpoint}`;
        return this.http.delete(url);
    }
}
RequestManagerService.ɵfac = function RequestManagerService_Factory(t) { return new (t || RequestManagerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
RequestManagerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RequestManagerService, factory: RequestManagerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "nhHb":
/*!***************************************************!*\
  !*** ./src/app/shared/url-configs/url-configs.ts ***!
  \***************************************************/
/*! exports provided: UrlConfigs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlConfigs", function() { return UrlConfigs; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class UrlConfigs {
    constructor() {
        this.UrlInit();
    }
    UrlInit() {
        this.urlList = [
            {
                key: "AiModels",
                value: "Chat/ai-models"
            },
            {
                key: 'ChatHistoryByUser',
                value: 'History/get-chat-history?UserId=${id}'
            },
            {
                key: 'ChatHistoryByDate',
                value: 'History/get-chat-history-by-date?UserId=${id}&createdOn=${date}'
            },
            {
                key: 'GenerateAnswer',
                value: 'chat'
            },
            {
                key: 'Login',
                value: 'Auth/login'
            },
            {
                key: 'Logout',
                value: 'Auth/logout'
            }
        ];
    }
    setValue(list) {
        this.urlList = list;
    }
    getValueByKey(key) {
        return this.urlList.filter(item => item.key === key)[0].value;
    }
    getLength() {
        return this.urlList.length;
    }
}
UrlConfigs.ɵfac = function UrlConfigs_Factory(t) { return new (t || UrlConfigs)(); };
UrlConfigs.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UrlConfigs, factory: UrlConfigs.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "pKmL":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _core_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-routing.module */ "LyMJ");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core.component */ "RXl3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class CoreModule {
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _core_routing_module__WEBPACK_IMPORTED_MODULE_1__["CoreRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_core_component__WEBPACK_IMPORTED_MODULE_2__["CoreComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _core_routing_module__WEBPACK_IMPORTED_MODULE_1__["CoreRoutingModule"]] }); })();


/***/ }),

/***/ "uXNR":
/*!*******************************************!*\
  !*** ./src/app/core/models/chat-model.ts ***!
  \*******************************************/
/*! exports provided: ChatModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModel", function() { return ChatModel; });
class ChatModel {
    constructor() {
        this.feedbackSubmitted = false; // Track whether feedback has been submitted
    }
}


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _features_logon_logon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/logon/logon.component */ "vzUq");
/* harmony import */ var _features_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/home/home.component */ "0HvM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: '', component: _features_logon_logon_component__WEBPACK_IMPORTED_MODULE_1__["LogonComponent"], data: { title: 'Login Page' } },
    { path: 'home', component: _features_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], data: { title: 'Home Page' } }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vzUq":
/*!***************************************************!*\
  !*** ./src/app/features/logon/logon.component.ts ***!
  \***************************************************/
/*! exports provided: LogonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogonComponent", function() { return LogonComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_helpers_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/helpers/auth */ "MK8t");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/authentication.service */ "y8gV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");







class LogonComponent {
    constructor(formBuilder, authService, router, toastr) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.submitted = false;
        this.submitButtonDisabled = false;
        this.maxPasswordLength = 15;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(15)]]
        });
    }
    login() {
        // Navigate to the home page
        this.router.navigate(['/home']); // Replace 'home' with the actual route path for your home page
    }
    get f() { return this.loginForm.controls; }
    onSubmit() {
        this.submitButtonDisabled = true;
        this.submitted = true;
        this.router.navigate(['/home']);
        if (this.loginForm.invalid) {
            this.submitButtonDisabled = false;
            return;
        }
        this.authService.logOn(this.f.username.value, this.f.password.value).subscribe(response => {
            this.submitButtonDisabled = false;
            const userModel = response;
            Object(src_app_shared_helpers_auth__WEBPACK_IMPORTED_MODULE_1__["saveUser"])(userModel);
            this.router.navigate(['/home']);
        }, error => {
            this.submitButtonDisabled = false;
            this.toastr.error(error.error.message);
        });
    }
}
LogonComponent.ɵfac = function LogonComponent_Factory(t) { return new (t || LogonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"])); };
LogonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LogonComponent, selectors: [["app-logon"]], decls: 29, vars: 0, consts: [[1, "h-100"], ["id", "bg-wrap"], [1, "container", "py-2", "h-100"], [1, "row", "d-flex", "justify-content-center", "align-items-center", "h-100"], [1, "col-xl-10"], [1, "card", "rounded-3", "border-0"], [1, "row", "g-0", "align-items-center"], [1, "col-lg-6", "d-flex", "align-items-center", "gradient-custom-2"], [1, "text-white", "px-3", "py-4", "p-md-5", "mx-md-4", "custom-padding"], [1, "mb-0", "custom-large-text"], [1, "mb-0", "custom-small-text"], [1, "col-lg-6"], [1, "uni-logo", "text-center"], [1, "px-3", "py-4", "p-md-5", "mx-md-4"], [1, "px-5"], ["src", "assets/images/minerva-logo.png", "width", "250", 1, "mt-5", "mb-3", "custom-mt"], [1, "d-grid"], ["id", "loginBtn", "type", "submit", 1, "btn", "btn-primary", "btn-login", 3, "click"], [1, "disclaimer", "p-md-3", "mx-md-2", "mt-auto"], [1, "mx-md-5", "custom-small-text"], [1, "mx-md-5", "disclaimer-text", "justify-text"], [1, "row", "py-2", "position-absolute", "bottom-0", "start-50", "translate-middle-x"], [1, "col", "text-center", "copywrite-text"], [2, "color", "white", "padding", "10px", "border-radius", "5px"]], template: function LogonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LogonComponent_Template_button_click_18_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " GET STARTED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " DISCLAIMER : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " This AI powered system is currently in a testing phase with limited data resources. The information generated by the model may not be always accurate and reliable. Users are advised to verify the information received and should not rely solely on the outputs provided for any critical or decision making purposes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Copyright \u00A9 2024 - IronOne Technologies, All Rights Reserved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, styles: [".gradient-custom-2[_ngcontent-%COMP%] {\n  background: -webkit-linear-gradient(to top, #128455, #128455, #128455, #128455);\n  height: 90vh !important;\n  background: linear-gradient(to top, #128455, #128455, #128455, #128455);\n  background-color: #35518D;\n  background-image: url(\"/assets/images/minerva.JPG\");\n  background-repeat: no-repeat;\n  background-position: 20% 0;\n  background-size: cover;\n}\n\n@media (min-width: 768px) {\n  .gradient-form[_ngcontent-%COMP%] {\n    height: 100vh !important;\n  }\n}\n\n@media (min-width: 769px) {\n  .gradient-custom-2[_ngcontent-%COMP%] {\n    border-top-left-radius: 0.3rem;\n    border-bottom-left-radius: 0.3rem;\n  }\n}\n\n.custom-padding[_ngcontent-%COMP%] {\n  padding-top: 200px !important;\n  padding-bottom: 200px !important;\n}\n\n.btn-login[_ngcontent-%COMP%] {\n  background-color: #128455;\n  border: 1px solid #128455;\n  padding: 8px 10px;\n  font-weight: 500;\n  font-size: 14px;\n}\n\n.btn-login[_ngcontent-%COMP%]:hover {\n  background-color: #0f744a;\n  border: 1px solid #128455;\n}\n\n.copywrite-text[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  color: #858585;\n}\n\n.color-gray1[_ngcontent-%COMP%] {\n  color: #858585;\n}\n\n.custom-large-text[_ngcontent-%COMP%] {\n  font-size: 80px;\n  font-weight: 700;\n}\n\n#bg-wrap[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.svg-wrap[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.form-control[_ngcontent-%COMP%], .form-control.is-invalid[_ngcontent-%COMP%], .was-validated[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:invalid {\n  padding: 10px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdJLCtFQUFBO0VBRUEsdUJBQUE7RUFFQSx1RUFBQTtFQUVBLHlCQUFBO0VBQ0EsbURBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7QUFKSjs7QUFPQTtFQUNJO0lBQ0ksd0JBQUE7RUFKTjtBQUNGOztBQU9BO0VBQ0k7SUFDSSw4QkFBQTtJQUNBLGlDQUFBO0VBTE47QUFDRjs7QUFRQTtFQUNJLDZCQUFBO0VBQ0EsZ0NBQUE7QUFOSjs7QUFTQTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQU5KOztBQVNBO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtBQU5KOztBQVNBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQU5KOztBQVNBO0VBQ0ksY0FBQTtBQU5KOztBQVNBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBTko7O0FBU0E7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFOSjs7QUFTQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFOSjs7QUFTQTs7O0VBR0ksa0JBQUE7QUFOSiIsImZpbGUiOiJsb2dvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmFkaWVudC1jdXN0b20tMiB7XHJcbiAgICAvLyBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzIFxyXG4gICAgLy8gQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgXHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byB0b3AsICMxMjg0NTUsICMxMjg0NTUsICMxMjg0NTUsICMxMjg0NTUpO1xyXG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjMTI4NDU1O1xyXG4gICAgaGVpZ2h0OiA5MHZoICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrIFxyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzEyODQ1NSwgIzEyODQ1NSwgIzEyODQ1NSwgIzEyODQ1NSk7XHJcbiAgICAvL2JhY2tncm91bmQtY29sb3I6ICMxMjg0NTU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU1MThEO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvbWluZXJ2YS5KUEdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMjAlIDA7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5ncmFkaWVudC1mb3JtIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkge1xyXG4gICAgLmdyYWRpZW50LWN1c3RvbS0yIHtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAuM3JlbTtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAuM3JlbTtcclxuICAgIH1cclxufVxyXG5cclxuLmN1c3RvbS1wYWRkaW5nIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tbG9naW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyODQ1NTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMjg0NTU7XHJcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5idG4tbG9naW46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBmNzQ0YTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMjg0NTU7XHJcbn1cclxuXHJcbi5jb3B5d3JpdGUtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICM4NTg1ODU7XHJcbn1cclxuXHJcbi5jb2xvci1ncmF5MSB7XHJcbiAgICBjb2xvcjogIzg1ODU4NTtcclxufVxyXG5cclxuLmN1c3RvbS1sYXJnZS10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogODBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbiNiZy13cmFwIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnN2Zy13cmFwIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLFxyXG4uZm9ybS1jb250cm9sLmlzLWludmFsaWQsXHJcbi53YXMtdmFsaWRhdGVkIC5mb3JtLWNvbnRyb2w6aW52YWxpZCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbn0iXX0= */", ".logo-text[_ngcontent-%COMP%] {\n        font-size: 28px; \n        font-weight: bold; \n    }\n    .justify-text[_ngcontent-%COMP%] {\n        text-align: justify;\n    }"] });


/***/ }),

/***/ "y8gV":
/*!*********************************************************!*\
  !*** ./src/app/core/services/authentication.service.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var src_app_shared_helpers_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/helpers/auth */ "MK8t");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ "92GA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _request_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./request-manager.service */ "nIMa");
/* harmony import */ var src_app_shared_url_configs_url_configs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/url-configs/url-configs */ "nhHb");






class AuthenticationService {
    constructor(router, restApiService, urlConfig) {
        this.router = router;
        this.restApiService = restApiService;
        this.urlConfig = urlConfig;
    }
    logOn(username, password) {
        let url = `${this.urlConfig.getValueByKey('Login')}`;
        return this.restApiService.post(url, { username, password });
    }
    logOut(username) {
        let url = `${this.urlConfig.getValueByKey('Logout')}`;
        return this.restApiService.post(url, { username });
    }
    isTokenExpired() {
        var _a;
        const token = (_a = Object(src_app_shared_helpers_auth__WEBPACK_IMPORTED_MODULE_0__["getLoggedInUser"])()) === null || _a === void 0 ? void 0 : _a.token;
        if (!token) {
            return true;
        }
        const decodedToken = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_1__["jwtDecode"])(token);
        return Date.now() >= decodedToken.exp * 1000;
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_request_manager_service__WEBPACK_IMPORTED_MODULE_4__["RequestManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_shared_url_configs_url_configs__WEBPACK_IMPORTED_MODULE_5__["UrlConfigs"])); };
AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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