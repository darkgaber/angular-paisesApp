import { Component, OnInit } from '@angular/core';
import { Country, Region } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [ `
    button {
      margin-right: 5px;
    }
  `
  ]
})
export class PorRegionComponent {

  regiones: Region[] = [{ code: 'EU', name: 'European Union'}, 
                        { code: 'EFTA', name: 'European Free Trade Association'},
                        { code: 'CARICOM', name: 'Caribbean Community'},
                        { code: 'PA', name: 'Pacific Alliance'},
                        { code: 'AU', name: 'African Union'},
                        { code: 'USAN', name: 'Union of South American Nations'},
                        { code: 'EEU', name: 'Eurasian Economic Union'},
                        { code: 'AL', name: 'Arab League'},
                        { code: 'ASEAN', name: 'Association of Southeast Asian Nations'},
                        { code: 'CAIS', name: 'Central American Integration System'},
                        { code: 'CEFTA', name: 'Central European Free Trade Agreement'},
                        { code: 'NAFTA', name: 'North American Free Trade Agreement'},
                        { code: 'SAARC', name: 'South Asian Association for Regional Cooperation'},
                      ]; //'EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC'
  regionActiva: Region | undefined;
  paises: Country[] = [];

  constructor( private paisService: PaisService ) { }

  getClaseCSS( region: Region ): string {
    return (region.code === this.regionActiva?.code) ? 'btn btn-primary': 'btn btn-outline-primary';
  }

  activarRegion ( region: Region ) {

    if ( region.code === this.regionActiva?.code ) { return; }

    this.regionActiva = region;
    this.paises = [];

    this.paisService.buscarRegion( region.code )
      .subscribe( paises => this.paises = paises );
  }
}
