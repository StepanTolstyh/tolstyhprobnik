import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mitem } from 'src/app/shared/models/mitem.models' ; 
import { MitemService } from 'src/app/shared/services/mitem.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items: Mitem [];


  constructor(private mitemService: MitemService, private router: Router ) { }

  ngOnInit(): void {
    this.getData()
}
async getData(){

try{
let items = this.mitemService.getAll();

this.items = (await items === null || await items === undefined) ? [] : await items;

}catch(err){
console.error(err);
}
}
onLinkProfile(id: number) {
this.router.navigate([this.router.url, 'edit', id]);
}

onAddProfile() {
this.router.navigate([this.router.url, 'edit']);
}

async onDelete(item: { id: number; }) {
try {
await this.mitemService.deleteOneById(item.id);

} catch (err) {
console.error(err);
} finally {

this.getData();

}
} 
}
