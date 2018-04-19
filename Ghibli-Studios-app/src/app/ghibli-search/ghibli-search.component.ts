import { Component, OnInit } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';

@Component({
  selector: 'app-ghibli-search',
  templateUrl: './ghibli-search.component.html',
  styleUrls: ['./ghibli-search.component.css']
})
export class GhibliSearchComponent implements OnInit {

		apiUrl;
		apiE;
		data;

		
		
		setSearch(a){
			this.apiE = `https://ghibliapi.herokuapp.com/`;
			this.apiUrl = this.apiE + a;
			this.http.get(this.apiUrl)
			.toPromise()
			.then(res => {
				this.data= res.json();
				console.log(this.data);
			});
			//console.log(this.apiUrl);
		}




	/*working:Boolean = false;
	apiRoot:string = 'https://ghibliapi.herokuapp.com/search';
	
	getFilm(searchString:string){
		let apiURL = `${this.apiRoot}films${searchString}`;
		console.log(apiURL);
	}*/

	constructor(private http:Http) { }

	ngOnInit() {
  }

}

