import { Component, Input } from '@angular/core';
import { User } from '../shared/models/user';

@Component({
    selector: 'user-profile',
    template: `
    <div class="jumbotron text-center" *ngIf="user">
        <h2>{{ user.name }} <small>{{ user.username }}</small></h2>
        <input class="form-control" [(ngModel)]="user.name">
    </div>
    <div class="jumbotron gocrazy" *ngIf="!user">
        <span class="glyphicon glyphicon-hand-left"></span>
        <h2>Choose a User</h2>
    </div>
    `
})

export class UserProfileComponent {
    @Input() user: User;
}