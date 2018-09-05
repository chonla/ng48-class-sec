import { Component, OnInit } from '@angular/core';
import { Member } from '../../models/member';
import { BnkService } from '../../services/bnk.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public members: Member[];

  constructor(private bnk: BnkService) { }

  ngOnInit() {
    this.bnk.memberList().subscribe((data: Member[]) => {
      this.members = data;
    });
  }

}
