import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-igv-genomebrowser',
  templateUrl: './igv-genomebrowser.component.html',
  styleUrls: ['./igv-genomebrowser.component.css']
})
export class IgvGenomebrowserComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let igv=window['igv'];

    //console.log(igv);
    let div= document.getElementById('igvDiv');
    console.log(div);
    let browser = igv.createBrowser(div),options={
      showNavigation: true,
      showRuler: true,
      genome: "hg19",
      locus: "chr8:128,747,267-128,754,546",
      tracks: [
        {
          name: "Genes",
          type: "annotation",
          format: "bed",
          sourceType: "file",
          url: "https://s3.amazonaws.com/igv.broadinstitute.org/annotations/hg19/genes/refGene.hg19.bed.gz",
          indexURL: "https://s3.amazonaws.com/igv.broadinstitute.org/annotations/hg19/genes/refGene.hg19.bed.gz.tbi",
          order: Number.MAX_VALUE,
          visibilityWindow: 300000000,
          displayMode: "EXPANDED"
        }, {
          url: 'https://data.broadinstitute.org/igvdata/BodyMap/hg19/IlluminaHiSeq2000_BodySites/brain_merged/accepted_hits.bam',
          name: 'Brain (BodyMap)'
        }

      ]
    };
    console.log(browser);
  }

}
