import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnDestroy {
  photoCover = '';
  contentTitle = '';
  contentDescription = '';
  private routeSubscription?: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeSubscription = this.route.paramMap.subscribe(params => {
      this.setValuesToComponent(params.get('id'));
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
  }

  setValuesToComponent(id: string | null): void {
    const article = dataFake.find(item => item.id === id);
    this.contentTitle = article?.title ?? 'Artigo não encontrado';
    this.contentDescription = article?.description ?? 'Volte à página inicial e escolha um artigo disponível.';
    this.photoCover = article?.photoCover ?? '';
  }
}
