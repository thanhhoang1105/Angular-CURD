import { authors, Author } from './../../../authors';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  authors = authors;
  currentAuthor = authors[0];

  onSelect(selectAuthor: Author) {
    this.currentAuthor = selectAuthor;
  }
  onDelete(id: number) {
    this.authors = this.authors.filter(author => author.id !== id);
  }
}
