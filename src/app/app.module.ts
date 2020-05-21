import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { PcScreenComponent } from './pc-screen/pc-screen.component';
import { TypingTextComponent } from './typing-text/typing-text.component';
import { CursorComponent } from './cursor/cursor.component';
import { MatrixComponent } from './matrix/matrix.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { VoteComponent } from './vote/vote.component';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { ProjectImageDialogComponent } from './project-image-dialog/project-image-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutMeComponent,
    ProjectsComponent,
    ContactComponent,
    PcScreenComponent,
    TypingTextComponent,
    CursorComponent,
    MatrixComponent,
    VoteComponent,
    ProjectImageDialogComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DeviceDetectorModule.forRoot(),
    MatTabsModule,
    MatDialogModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
