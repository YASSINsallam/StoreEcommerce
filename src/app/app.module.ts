import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { AuthGuard } from './auth.guard';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ContactComponent } from './contact/contact.component';



const routes:Routes=[
  {path:"",
component:HomeComponent
},{
  path:"seller-auth",
  component:SellerAuthComponent
},{
  component:SellerHomeComponent,
  path:"seller-home",
  canActivate:[AuthGuard]
},{
  component:SellerAddProductComponent,
  path:"seller-add-product",
  canActivate:[AuthGuard]
},{
  component:SellerUpdateProductComponent,
  path:'seller-update-product/:id',
  canActivate:[AuthGuard]

},{
  component:SearchComponent,
  path:'search/:query'
},{
  component:FooterComponent,
  path:'footer'
},{
  path:'product-details/:productId' , component:ProductDetailsComponent,

},{
  component:UserAuthComponent,
  path:'user-auth'
},{
  component:CartPageComponent,
  path:'cart-page'
},{
  component:CheckoutComponent,
  path:'checkout'
},{
  component:MyOrdersComponent,
  path:'my-orders'
},{
  component:ContactComponent,
  path:'contact'
}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SellerAuthComponent,
    HomeComponent,
    SellerHomeComponent,
    SellerAddProductComponent,
    SellerUpdateProductComponent,
    SearchComponent,
    FooterComponent,
    ProductDetailsComponent,
    UserAuthComponent,
    
    CheckoutComponent,
    MyOrdersComponent,
    ContactComponent,
    
  ],
  imports:[RouterModule.forRoot(routes),CommonModule, BrowserModule,FormsModule,HttpClientModule, FontAwesomeModule, NgbModule],
  exports:[RouterModule,  FontAwesomeModule],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
