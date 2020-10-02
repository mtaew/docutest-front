import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
class AppComponent implements OnInit {
  title: string;

  ngOnInit(): void {
    this.title = 'docutest';
  }
}

export default AppComponent;
