import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BnkService } from '../../services/bnk.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from '../../models/member';
import { UrlValidator } from '../../validators/url-validator';

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
        this.editForm = this.builder.group({
          _id: data._id,
          name: [data.name, Validators.required],
          imgUrl: [data.imgUrl, UrlValidator.validate],
          instagramId: data.instagramId
        });
      });
  }

  save() {
    if (this.editForm.valid) {
      this.bnk.saveMember(this.editForm.value).subscribe(_ => {
        this.router.navigate(['/dashboard']);
      });
    } else {
      console.log(this.editForm.get('imgUrl').getError('url'));
    }
  }

  cancel() {
    this.router.navigate(['/dashboard']);
  }

}
