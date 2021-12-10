import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { Feature } from './feature.model';
import { TranslateService } from '@ngx-translate/core';

declare function executeFeaturedAnimations(): any;

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  features: Feature[] = [];
  carouselMobile: any[] = [];
  isMobile: boolean = false;
  carouselTablet: any[] = [];
  isTablet: boolean = false;
  carouselDesktop: any[] = [];
  isDesktop: boolean = false;
  resizeId: any;

  @HostListener('window:resize', ['$event'])
  getScreenSize(event: Event) {
      this.buildCarousel();
      clearTimeout(this.resizeId);
      this.resizeId = setTimeout(() => {
        executeFeaturedAnimations();
      }, 200);
  }

  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
    this.features.push(new Feature('logo__angular--white.png', 'Angular', 'features.card1.desc', 'features.card1.btn.label'));
    this.features.push(new Feature('dev_node_icon_160853.png', 'Nodejs', 'features.card2.desc', 'features.card2.btn.label'));
    this.features.push(new Feature('4691292_react native_react_icon-modified.png', 'React', 'features.card3.desc', 'features.card3.btn.label'));
    this.features.push(new Feature('typescript_icon_131914.png', 'Typescript', 'features.card4.desc', 'features.card4.btn.label', 'bg-white'));
    this.features.push(new Feature('redux_icon_132038.png', 'Redux', 'features.card5.desc', 'features.card5.btn.label', 'invert-image'));
    this.features.push(new Feature('_rxjs-removebg-preview.png', 'ReactiveX', 'features.card6.desc', 'features.card6.btn.label', 'invert-image image-space'));

    this.carouselMobile = this.sliceIntoChunks(this.features, 1);
    this.carouselTablet = this.sliceIntoChunks(this.features, 2);
    this.carouselDesktop = this.sliceIntoChunks(this.features, 3);

    this.buildCarousel();
  }


  private sliceIntoChunks(arr: any, chunkSize: any): any[] {
    const _chunkSize = parseInt(chunkSize);
    const res = [];
    for (let i = 0; i < arr.length; i += _chunkSize) {
        const chunk = arr.slice(i, i + _chunkSize);
        res.push(chunk);
    }
    return res;
  }

  buildCarousel(){
    this.isDesktop = false;
    this.isMobile = false;
    this.isTablet = false;
    if (window.innerWidth <= 767){
      this.isMobile = true;
    } else if (window.innerWidth > 767 && window.innerWidth <= 991){
      this.isTablet = true;
    } else {
      this.isDesktop = true;
    }
  }


  getDisplay(tec: string){
      //TODO: blog: 007 (Low): "Read More" de cada tecnologia se muestra si hay articulos de esa tecnologia.
    return false;
  }

  //TODO: blog: 008 (Medium): Crear pagina de Cheat Sheet. Similar a Blog pero en vez de cards, con los cheat sheet.

}
