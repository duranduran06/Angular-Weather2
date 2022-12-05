import { Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { UpComponent } from './up/up.component';
import { MidComponent } from './mid/mid.component';
import { BottomComponent } from './bottom/bottom.component';
import { Routes,RouterModule } from '@angular/router';



const rout:Routes=[
  {path:"istanbul",component:IndexComponent},
  {path:"",redirectTo:"istanbul",pathMatch:"full"},
  {path: "about", component: IndexComponent},
  {path: "adana-hava-durumu", component: IndexComponent},
  {path: "afyon-hava-durumu", component: IndexComponent},
  {path: "agri-hava-durumu", component: IndexComponent},
  {path: "amasya-hava-durumu", component: IndexComponent},
  {path: "ankara-hava-durumu", component: IndexComponent},
  {path: "antalya-hava-durumu", component: IndexComponent},
  {path: "artvin-hava-durumu", component: IndexComponent},
  {path: "aydin-hava-durumu", component: IndexComponent},
  {path: "balikesir-hava-durumu", component: IndexComponent},
  {path: "bilecik-hava-durumu", component: IndexComponent},
  {path: "bolu-hava-durumu", component: IndexComponent},
  {path: "bursa-hava-durumu", component: IndexComponent},
  {path: "canakkale-hava-durumu", component: IndexComponent},
  {path: "corum-hava-durumu", component: IndexComponent},
  {path: "denizli-hava-durumu", component: IndexComponent},
  {path: "diyarbakir-hava-durumu", component: IndexComponent},
  {path: "edirne-hava-durumu", component: IndexComponent},
  {path: "elazig-hava-durumu", component: IndexComponent},
  {path: "erzurum-hava-durumu", component: IndexComponent},
  {path: "eskisehir-hava-durumu", component: IndexComponent},
  {path: "gaziantep-hava-durumu", component: IndexComponent},
  {path: "giresun-hava-durumu", component: IndexComponent},






]  

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    UpComponent,
    MidComponent,
    BottomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rout)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
