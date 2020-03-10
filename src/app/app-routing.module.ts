import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { SearchComponent } from './search/search.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { HotellistComponent } from './hotellist/hotellist.component';  


const routes: Routes = [
  {path:"",component:IndexComponent},
  {path:"search",component:SearchComponent},
  {path:"hoteldetails",component:HotelDetailsComponent},
  {path:"hotellists",component:HotellistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
