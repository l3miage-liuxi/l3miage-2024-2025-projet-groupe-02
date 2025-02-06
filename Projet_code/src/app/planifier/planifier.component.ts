import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-planifier',
  imports: [HttpClientModule, FormsModule, NgForOf,],
  templateUrl: './planifier.component.html',
  styleUrl: './planifier.component.scss'
})
export class PlanifierComponent {
  csvData:any[]=[];
  livraison:Livraison[]=[];

  constructor(private http:HttpClient,private route: ActivatedRoute) {}

  getCsvData(){
    this.http.get('./assets/visualiser_une_journee_fakedata.csv',{responseType:'text'})
      .subscribe(data=>{
          this.csvData=this.parseCsvData(data);
          this.livraison=this.parseCsvData(data);
        },
      );
  }

  parseCsvData(csvData: string): Livraison[] {
    const lines = csvData.split('\n').map(line => line.trim()).filter(line => line);
    const result: Livraison[] = [];

    const headers = lines[0].split(',');
    for (let i = 1; i < lines.length; i++) {
      const obj: ParsedData = {};
      const currentLine = lines[i].split(',');

      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentLine[j] || ''; // 处理可能缺失的字段
      }

      const livraison: Livraison = {
        reference: obj['reference'],
        equipe: obj['equipe'],
        adresseDeLivraison: obj['adresse de livraison'],
        etat: obj['etat'],
        remarque: obj['IDK IF IT WILL BE USEFUL'],
      };
      //console.log(result);
      result.push(livraison);
    }
    console.log("result");
    console.log(result);
    return result;
  }



}
interface ParsedData {
  [key: string]: string;
}

interface Livraison {
  reference: string;
  equipe: string;
  adresseDeLivraison: string;
  etat: string;
  remarque: string;
}
