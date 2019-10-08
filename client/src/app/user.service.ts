import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { User } from './user';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
  private userUrl = '/users';

  constructor (private http: Http) {}

  getUser(): Observable<User[]> {
    return this.http.get(this.userUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  // レスポンスデータ整形
  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json();

    return body || { };
  }

  // エラー処理
  private handleError(error: any) {
    let errMsg = error.message || 'Server error';

    return Observable.throw(errMsg);
  }

}
