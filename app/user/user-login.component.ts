import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import {UserService} from './user.service';
import {EmailValidator} from './email.validator';

@Component({
    selector: 'user-login',
    templateUrl: './app/user/user-login.component.html',
    directives: [ROUTER_DIRECTIVES, EmailValidator],
    providers: [UserService]  
})

export class UserLoginComponent implements OnInit {
    
    vm: Object = {};
    
    constructor(private _userService: UserService) { }

    ngOnInit() { }
    
    onSubmit(){
        console.log(this.vm);
        this._userService.login(this.vm.email, this.vm.password).subscribe(res=>console.log(res));
    }

}