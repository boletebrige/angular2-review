import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html' ,
    styleUrls: ['./app/app.component.css']

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