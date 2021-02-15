import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { map } from 'rxjs/operators';
import { User } from './user/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {

  users: User[] = [
    new  User('fabio', 'fabio@fabio.it'),
    new  User('fabio2', 'fabio2@fabio.it'),
    new  User('fabio3', 'fabio3@fabio.it'),
  ];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log("users");
    this.fetchUsers ();
  }

  onCreateUser(postData: {username: string; email: string}){
    //send Http request
    this.http.post('https://g00dserver-default-rtdb.europe-west1.firebasedatabase.app/users.json', 
      postData
    )
    .subscribe(responseData => {
      console.log(responseData);
    });
  }

  onFetchUsers(){
    this.fetchUsers ();
  }

  private fetchUsers () {
    this.http.get<{[key: string]: User}>('https://g00dserver-default-rtdb.europe-west1.firebasedatabase.app/users.json')
    .pipe(
      // questa map serve a pulire l'array di ritorno sia composto  da json puliti, che invece di essere così
      // MTR7vPesBlkkDSpzKt6:
      // email: "fabio_newuser@fabio.it"
      // username: "fabio"
      // siano {unsername: 'username', email: 'email'}
      
      map((responseData: {[key: string]: User}) => {
        const usersArray: User[] = [];
        for(const key in responseData){
          if(responseData.hasOwnProperty(key)){
            // gia che ci siamo si utilizzerà l'id che da Firebase alla chiama come id unica 
            usersArray.push({...responseData[key], id: key});
          }
        }
        return usersArray;

      })
    )
    .subscribe(
      users => {
        console.log(users);
      }
    );
  }

}
