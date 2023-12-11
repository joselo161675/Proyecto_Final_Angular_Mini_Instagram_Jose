import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component'
import { ExploreComponent } from './explore/explore.component'
import { ReelsComponent } from './reels/reels.component';
import { MessagesComponent } from './messages/messages.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { NewComponent } from './new/new.component';
import { HomeComponent } from './home/home.component';
import { VideoComponent } from './video/video.component';
import { ImagePostComponent } from './image-post/image-post.component';
import { DetailPostComponent } from './shared/detail-post/detail-post.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "search",
    component: SearchComponent
  },
  {
    path: "explore",
    component: ExploreComponent
  },
  {
    path: "reels",
    component: ReelsComponent
  },
  {
    path: "messages",
    component: MessagesComponent
  },
  {
    path: "notifications",
    component: NotificationsComponent
  },
  {
    path: "new",
    component: NewComponent,
    children: [
      {
        path:"video",
        component: VideoComponent
      },
      {
        path:"post",
        component: ImagePostComponent
      },
    ]
  },
  {
    path: "profile",
    component: HomeComponent
  },
  {
    path: "posts",
    children: [
      {
        path: ":id",
        component: DetailPostComponent
      }
    ]
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  { path: 'pagina', component: PostDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
