import { Cheatsheet } from './cheatsheet.model';
export interface Article {
    id:          string;
    title:       string;
    image:       string;
    subtitle:    string;
    author:      string;
    categories:  string[];
    post:        string;
    date:        Date;
    active:      boolean;
    cheatsheets: Cheatsheet[];
}