import { Component } from '@angular/core';
import { Option } from '@/app/shared/models/options.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  links: Option[] = [
    {
      name: '首頁',
      value: '/blog',
    },
    {
      name: '關於我',
      value: '/about-me',
    },
  ];
}
