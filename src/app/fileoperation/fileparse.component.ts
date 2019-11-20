import { Component, OnInit } from '@angular/core';
// import { readFileSync } from 'fs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fileparse',
  templateUrl: './fileparse.component.html',
  styleUrls: ['./fileparse.component.css']
})
export class FileParseComponent implements OnInit {
  retrivedJson = {};
  constructor(public http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('assets/refile.txt', { responseType: "text" }).subscribe((data: any) => {
      this.parseData(data);
    })
  }

  parseData(data: any) {
    let pos = data.indexOf("---")
    let lastpos = data.lastIndexOf("---")
    let res = data.slice(pos + 3, lastpos);
    let linearray = res.split("\n");
    linearray.forEach((element: any, index: number) => {
      if (element.length < 1) {
        delete linearray[index];
      }
    });
    let jsonobj = {};
    linearray.forEach((individualline: any, index: number) => {
      let keyvaluepair = individualline.split(":");
      jsonobj[keyvaluepair[0]] = keyvaluepair[1];
    });
    let remainingcontext = data.slice(lastpos + 3)
    jsonobj["context"] = remainingcontext;
    this.retrivedJson = jsonobj;
  }
}
