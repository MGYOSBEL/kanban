import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutAbstractComponent } from './home/about-abstract/about-abstract.component';
import { ResumeAbstractComponent } from './home/resume-abstract/resume-abstract.component';
import { PortfolioAbstractComponent } from './home/portfolio-abstract/portfolio-abstract.component';
import { BlogAbstractComponent } from './home/blog-abstract/blog-abstract.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutAbstractComponent,
    ResumeAbstractComponent,
    PortfolioAbstractComponent,
    BlogAbstractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
