import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonalInformationType } from '../../types/PersonalInformation';
import { PersonalInformationService } from '../services/personal-information.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  account: PersonalInformationType | null = null;
  areaStatistics: Array<any> = [
    {
      id: "followers",
      text: "seguidores"
    },
    {
      id: "followed",
      text: "seguidos"
    },
    {
      id: "posts",
      text: "plublicaciones"
    },
  ];
  threads: any = {
    username: '@'
  }
  tabs = [
    {
      title: "Publicaciones",
      icon: "bi-grid-3x3"
    },
    {
      title: "Guardado",
      icon: "bi-bookmark"
    },
    {
      title: "Etiquetadas",
      icon: "bi-person-square"
    },
  ]

  constructor(private personalInformation: PersonalInformationService, private router:Router) {}
  

  ngOnInit() {
    this.account = this.personalInformation.getPersonalInformation();
    this.areaStatistics = this.areaStatistics.map((statistic) => ({
      ...statistic,
      total: statistic.id === 'followers'
                ? `${this.account!.infoaccount.seguidores} seguidores`
                : statistic.id === 'followed'
                    ? `${this.account!.infoaccount.seguidos} seguidos`
                    : `${this.account!.infoaccount.publicaciones} publicaciones` }))
    this.threads = { ...this.threads, username: `${this.threads.username} ${this.account!.threads.username}` }
    console.log("this.account", this.account)
  }

  navigateToPost(postId: string) {
    this.router.navigate(['/posts', postId]);
  }
  getImageUrl(id: string, width: number, height: number): string {
    return `https://picsum.photos/${width}/${height}`;
  }

}
