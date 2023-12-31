import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

//HTTP
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { SlideComponent } from './components/slide/slide.component';
import { MessagesComponent } from './components/messages/messages.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { SaldosComponent } from './components/saldos/saldos.component';
import { HistySaldosComponent } from './components/histy-saldos/histy-saldos.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RelatoriosComponent } from './components/relatorios/relatorios.component';
import { ProductsForSaleComponent } from './components/products-for-sale/products-for-sale.component';
import { TermosComponent } from './components/termos/termos.component';
import { CadastrarProdutoComponent } from './components/cadastrar-produto/cadastrar-produto.component';
import { ListRegisterProductComponent } from './components/list-register-product/list-register-product.component';
import { ModalEditarComponent } from './components/list-register-product/modal-editar/modal-editar.component';
import { FinalizarCompraComponent } from './components/nav-bar/finalizar-compra/finalizar-compra.component';
import { ContaComponent } from './pages/conta/conta.component';
import { CarteiraComponent } from './pages/carteira/carteira.component';
import { TableUsuariosComponent } from './components/table-usuarios/table-usuarios.component';
import { FormsModule } from '@angular/forms';
import { PagamentoComponent } from './components/pagamento/pagamento.component';
import { HistoricoComprasComponent } from './components/historico-compras/historico-compras.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Erro404Component } from './pages/erro404/erro404.component';
import { ModalHistoricoCompraComponent } from './components/modal/modal-historico-compra/modal-historico-compra.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ProductListComponent,
    ProductDetailComponent,
    CartComponent,
    FooterComponent,
    MapaComponent,
    ToDoListComponent,
    SlideComponent,
    MessagesComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    SaldosComponent,
    HistySaldosComponent,
    NavBarComponent,
    RelatoriosComponent,
    ProductsForSaleComponent,
    TermosComponent,
    CadastrarProdutoComponent,
    ListRegisterProductComponent,
    ModalEditarComponent,
    FinalizarCompraComponent,
    ContaComponent,
    CarteiraComponent,
    TableUsuariosComponent,
    PagamentoComponent,
    HistoricoComprasComponent,
    Erro404Component,
    ModalHistoricoCompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
