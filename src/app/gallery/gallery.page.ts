import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  public keyword: string;
  public currentPage: number = 1;
  public size: number = 10;
  public dataImages = [];
  public totalPages: number;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }
  onLoadImages() {
    this.dataImages = [];
    this.currentPage = 1;
    this.totalPages = 0;
    this.doSearch();
  }
  doSearch() {
    this.httpClient.get("https://pixabay.com/api/?key=16677888-814a3ffd24b771026721fb4e1&q=" + this.keyword + "&image_type=photo&pretty=true&per_page=" + this.size + "&page=" + this.currentPage)
      .subscribe(data => {
        data["hits"].forEach(el => {
          this.dataImages.push(el);
        });
        this.totalPages = data["totalHits"] / this.size;
        console.log('Page' + this.currentPage + "/" + this.totalPages);
      }), err => {
        console.log(err);
      }
  }
  loadData(evt) {
    if (this.currentPage < this.totalPages) {
      ++this.currentPage;
      this.doSearch();
      evt.target.complete();
      console.log('Page222222' + this.currentPage + "/" + this.totalPages);
    }
    if (this.totalPages >= this.totalPages)
      evt.target.disabled = true;
  }
}
