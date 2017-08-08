"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.message = 'Hello';
        this.users = [
            { id: 25, name: 'Josip', username: 'boletebrige' },
            { id: 26, name: 'John', username: 'snow' },
            { id: 27, name: 'Someone', username: 'Nobody' },
        ];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <header>\n            <nav class=\"navbar navbar-inverse\">\n                <div class=\"navbar-header\">\n                    <a href=\"/\" class=\"navbar-brand\">My Angular 2 App!</a>\n                </div>\n            </nav>\n        </header>\n        <main>\n            <div class=\"jumbotron text-center\">\n                <h1>Welcome to Our App!</h1>\n                <p>{{ message }}</p>\n            </div>\n            <p>The user is</p>\n            <ul>\n                <li *ngFor=\"let user of users\">{{ user.name }} ({{ user.username }})</li>\n            </ul>\n        </main>\n        <footer class=\"text-center\">\n            Copyleft \u2763 2016\n        </footer>\n    ",
            styles: ["\n        .jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }\n    "]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map