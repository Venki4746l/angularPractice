import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { HomeComponent } from './Home/Home.component';
import { ChildComponent } from './databinding/child/child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenComponent } from './templateDriven/templateDriven.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ApiService } from './core/sevices/api.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpComponent } from './Http/Http.component';
import { TextConverntionPipe } from './core/pipes/text-converntion.pipe';
import { TestingDirective } from './core/Directives/testing.directive';
import { SignalComponent } from './Signal/Signal.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    HomeComponent,
    ChildComponent,
    TemplateDrivenComponent,
    ReactiveformComponent,
    HttpComponent,
    TextConverntionPipe,
    TestingDirective,
    SignalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
