import { Optional } from '@angular/core';   

export class User {
    public id: string;
    public username: string;
    public email: string; // punto di domanda vuol dire che è opzionale
    /*public firstname?: string; 
    public lastname?: string;    
    public role?: string;
    public company?: string;
    public teamgoodmove?: boolean;*/

    constructor(username: string, email:string){
        if(!username || !email) return;
        this.id = (Date.now() + Math.floor(Math.random() * 10)).toString();
        this.username = username;
        this.email = email;
        /*this.firstname = firstname ? firstname : '';
        this.role = role ? role : '';
        this.company = company ? company : '';
        this.teamgoodmove = teamgoodmove ? teamgoodmove : false;*/
    }
}