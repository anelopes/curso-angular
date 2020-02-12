import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class PlatformDetectorService {
    constructor(@Inject(PLATFORM_ID) private platformId: string) { }

    isPlatformBrowser() {
        return isPlatformBrowser(this.platformId); //método que retorna se a aplicação está sendo rodada no navegador ou não
    }
}