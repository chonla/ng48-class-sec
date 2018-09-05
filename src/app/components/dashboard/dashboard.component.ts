import { Component, OnInit } from '@angular/core';
import { Member } from '../../models/member';
import { BnkService } from '../../services/bnk.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public members: Member[];

  constructor(private bnk: BnkService) { }

  ngOnInit() {
    this.bnk.memberList().subscribe((data: Member[]) => {
      this.members = data;
    });
  }

}
