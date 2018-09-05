import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member } from '../models/member';
import { Feed } from '../models/feed';
import { environment } from '../../environments/environment';
import { AuthenService } from './authen.service';

@Injectable({
  providedIn: 'root'
})
export class BnkService {

  constructor(private http: HttpClient, private authen: AuthenService) {
  }

  public memberList(): Observable<Member[]> {
    return this.http.get<Member[]>(`${environment.apiHost}/bnk/members`);
  }

  public member(id: string): Observable<Member> {
    return this.http.get<Member>(`${environment.apiHost}/bnk/members/${id}`);
  }

  public saveMember(data: Member): Observable<any> {
    const token = this.authen.getToken();
    return this.http.patch(`${environment.apiHost}/bnk/members/${data._id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  public instagram(instagramId: string): Observable<Feed> {
    const url = `https://www.api.bnk48.com/api/social-feeds?page=1&max=1000000000000000&limit=19&username=${instagramId}`;
    return this.http.get<Feed>(url);
  }
}
