import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    MenubarModule,
    ButtonModule,
    ToolbarModule,

],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  items: MenuItem[] = [
    {
      label: 'Home',
      routerLink: '/'
    },
    {
      label: 'Products',
      items: [
        { label: 'All Products',
          routerLink: '/products'
        },
        { label: 'Categories',
          items: [
            { label: 'Men',
          items: [
            { label: 'T-Shirts',},
            { label: 'Hoodies',},
            { label: 'Caps',},
          ]
        },
        {
          label: 'Women',
          items: [
            { label: 'T-Shirts',},
            { label: 'Hoodies',},
          ]
        },
        {
          label: 'Kids',
          items: [
            { label: 'T-Shirts',},
            { label: 'Hoodies',},
          ]
        }
          ]
        }
        
      ]
    },
    {
      label: 'About Us',
      routerLink: '/about'
    },
    {
      label: 'Contact',
      routerLink: '/contact'
    }
  ];
}
