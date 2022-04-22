import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/objects/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  id: number = -1;
  item: Item = new Item();

  baseItem: Item = new Item();

  constructor(private route: ActivatedRoute, private itemService: ItemService) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("id"))
    this.getHero();
  }

  ngDoCheck(): void {
    if (this.id != Number(this.route.snapshot.paramMap.get("id"))) {
      this.id = Number(this.route.snapshot.paramMap.get("id"))
      this.getHero();
    }
  }

  getHero(): void {
    this.itemService.getItemByID(this.id).subscribe(item => this.item = item);
  }
}