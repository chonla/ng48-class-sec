import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BnkService } from '../../services/bnk.service';
import { Feed, FeedItem } from '../../models/feed';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css']
})
export class InstagramComponent implements OnInit {

  public feeds: FeedItem[];

  constructor(private route: ActivatedRoute, private bnk: BnkService) { }

  ngOnInit() {
    this.bnk.instagram(this.route.snapshot.paramMap.get('ig'))
      .subscribe((data: Feed) => {
        this.feeds = data.feeds;
      })
  }

}
