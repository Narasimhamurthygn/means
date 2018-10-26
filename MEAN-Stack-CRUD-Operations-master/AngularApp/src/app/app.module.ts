import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import{  RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './shared/employee.service';
import { DisplayComponent } from './display/display.component';
import { ProductFilterPipe } from './display/display-filter-pipe';
import { WelcomeComponent } from './home/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DisplayComponent,
    ProductFilterPipe,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
    {path:"create",component:EmployeeComponent},
    {path:"welcome",component:WelcomeComponent},
    {path:"create/:id",component:EmployeeComponent},
    {path:"display",component:DisplayComponent},
    {path:"**",redirectTo:"create",pathMatch:"full"}
    ])
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
