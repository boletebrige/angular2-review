import { Component } from '@angular/core';
import { User } from './shared/models/user';

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
            <div class="row">
                <div class="col-sm-4">
                    <ul class="list-group users-list">
                        <li class="list-group-item" 
                            *ngFor="let user of users" 
                            (click)="selectUser(user)"
                            [class.active]="user == activeUser">
                            {{ user.name }} ({{ user.username }})</li>
                    </ul>
                </div>
                <div class="col-sm-8">
                    <div class="jumbotron text-center" *ngIf="activeUser">
                        <h2>{{ activeUser.name }} <small>{{ activeUser.username }}</small></h2>
                    </div>
                    <div class="jumbotron gocrazy" *ngIf="!activeUser">
                        <span class="glyphicon glyphicon-hand-left"></span>
                        <h2>Choose a User</h2>
                    </div>
                </div>
            </div>
        </main>
        <footer class="text-center">
            Copyleft ❣ 2016
        </footer>
    `,
    styles: [`
        .users-list li {
            cursor: pointer;
        }
        .jumbotron .glyphicon { font-size: 80px; }
        .gocrazy {
            background: red;
            color: #FFF;
        }
    `]

})
export class AppComponent {
    message: string = 'Hello';
    users: User[] = [
        { id: 25, name: 'Josip', username: 'boletebrige' },
        { id: 26, name: 'John', username: 'snow' },
        { id: 27, name: 'Someone', username: 'Nobody' },
        { id: 28, name: 'Buddy', username: 'Somebody' },
        { id: 29, name: 'Friend', username: 'offriend' },
        { id: 30, name: 'Active', username: 'Abuser' }
    ];
    activeUser: User;

    selectUser(user){
        this.activeUser = user;
        console.log(this.activeUser);
    }
}