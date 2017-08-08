import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <header>
            <nav class="navbar navbar-inverse">
                <div class="navbar-header">
                    <a href="/" class="navbar-brand">My Angular 2 App!</a>
                </div>
            </nav>
        </header>
        <main>
            <div class="jumbotron text-center">
                <h1>Welcome to Our App!</h1>
                <p>{{ message }}</p>
            </div>
            <p>The user is</p>
            <ul>
                <li *ngFor="let user of users">{{ user.name }} ({{ user.username }})</li>
            </ul>
        </main>
        <footer class="text-center">
            Copyleft ❣ 2016
        </footer>
    `,
    styles: [`
        .jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }
    `]

})
export class AppComponent {
    message = 'Hello';
    users = [
        { id: 25, name: 'Josip', username: 'boletebrige' },
        { id: 26, name: 'John', username: 'snow' },
        { id: 27, name: 'Someone', username: 'Nobody' },
    ]
}