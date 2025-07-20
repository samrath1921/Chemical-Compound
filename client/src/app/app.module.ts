import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CompoundsComponent } from './pages/compounds/compounds.component';
import { ButtonComponent } from './components/button/button.component';
import { CompoundItemComponent } from './components/compound-item/compound-item.component';
import { AddCompoundComponent } from './components/add-compound/add-compound.component';
import { CardComponent } from './pages/card/card.component';
import { EditCompoundComponent } from './components/edit-compound/edit-compound.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes:Routes=[
  {path:'',component:CompoundsComponent},
  {path:'compound/:id',component:CardComponent},
  {path:'**',component:NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CompoundsComponent,
    ButtonComponent,
    CompoundItemComponent,
    AddCompoundComponent,
    CardComponent,
    EditCompoundComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
