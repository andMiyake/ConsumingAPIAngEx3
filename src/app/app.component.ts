import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ConsumingAPIAngEx3';
  joke: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit').subscribe({
      next: response => this.joke = response,
      error: error => console.log(error),
      complete: () => console.log('Request has completed.')
    })
  }


}
