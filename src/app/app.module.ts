import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shell/navbar/navbar.component';
import { FooterComponent } from './shell/footer/footer.component';
import { HeaderComponent } from './sections/header/header.component';
import { FeaturesComponent } from './sections/features/features.component';
import { SliderComponent } from './sections/slider/slider.component';
import { BigTextComponent } from './sections/big-text/big-text.component';
import { ProductOptionsComponent } from './sections/product-options/product-options.component';
import { TestimonialsComponent } from './sections/testimonials/testimonials.component';
import { FeaturedBlogComponent } from './sections/featured-blog/featured-blog.component';
import { BlogListComponent } from './sections/blog-list/blog-list.component';
import { BlogItemComponent } from './sections/blog-item/blog-item.component';
import { SubscribeComponent } from './sections/subscribe/subscribe.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CheatSheetComponent } from './sections/cheat-sheet/cheat-sheet.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    BlogDetailComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    FeaturesComponent,
    SliderComponent,
    BigTextComponent,
    ProductOptionsComponent,
    TestimonialsComponent,
    FeaturedBlogComponent,
    BlogListComponent,
    BlogItemComponent,
    SubscribeComponent,
    CheatSheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}