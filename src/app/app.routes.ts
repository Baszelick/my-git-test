import { Routes } from '@angular/router';
import * as path from 'node:path';
import {TaskComponent} from './task/task.component';
import {AboutComponent} from './pages/about/about.component';

export const routes: Routes = [
  {path: '', component: TaskComponent},
  { path: 'tasks', component: TaskComponent },
  { path: 'about', component: AboutComponent },


];
