import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BnkService } from '../../services/bnk.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from '../../models/member';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public editForm: FormGroup;

  constructor(private bnk: BnkService,
    private builder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.bnk.member(this.route.snapshot.paramMap.get('id'))
      .subscribe((data: Member) => {
        this.editForm = this.builder.group(data);
      });
  }

  save() {
    this.bnk.saveMember(this.editForm.value).subscribe(_ => {
      this.router.navigate(['/dashboard']);
    });
  }

  cancel() {
    this.router.navigate(['/dashboard']);
  }

}
