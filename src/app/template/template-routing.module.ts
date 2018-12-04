import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ContactqueryComponent } from './contactquery/contactquery.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path: '',
    children:[

      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path:'contactquery',
        component:ContactqueryComponent
      },
      {
          path:'register',
          component:RegisterComponent
      }
    ]
    
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
