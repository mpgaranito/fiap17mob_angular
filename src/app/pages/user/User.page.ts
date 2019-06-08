import { Component } from '@angular/core';

import { UsersService } from '../../services/Users.service';

import { LoadingComponent } from '../../components/loading/Loading.components';

@Component({
    templateUrl: './User.page.html',
    styleUrls: ['./User.page.css']
})

export class UserPage { 

    private loading: boolean = false;

    constructor(private usersService: UsersService){}

    createUser() {

        this.loading = true;
        
        this.usersService.create({
        
            name: "anderson",
            email: "anderltda@gmail.com",
            age: 36,
            phone: "+5511989035599",
        
        }).then((data) => {
        
            console.log('result', data);
            this.loading = false;
        
        }).catch((err) => {
        
            console.log(err);
        
        });
    }
}