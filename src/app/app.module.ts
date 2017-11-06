import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { UserModel } from './user/user.model';
import { UserService } from './user/user.service';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { PlayerModel } from './player/player.model';
import { PlayerService } from './player/player.service';
import { HomeResolver } from './components/home/home.resolver';
import { PickModel } from './pick/pick.model';
import { PickService } from './pick/pick.service';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    UserModel,
    UserService,
    PlayerModel,
    PlayerService,
    PickModel,
    PickService,
    HomeResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
