import {Component, NgZone, Inject} from '@angular/core';
import {fadeAnimation} from './_animations/fade.animation.ts'
import {getBorder, showFrameworkObservable} from "../common/colored-border";

@Component({
    selector: 'example-ng5-app',
    templateUrl: './src/angular5/app.component.html',
    styleUrls: ['./src/angular5/test.css'],
    animations: [fadeAnimation]
})
export class AppComponent {

    getRouterOutletState(outlet) {
        return outlet.isActivated ? outlet.activatedRoute : '';
    }
    public border:String;
    public showFramework:Boolean;
    subscription: any;
    ngZone: any;

    constructor(@Inject(NgZone) ngZone:NgZone) {
        this.showFramework = false;
        this.ngZone = ngZone;
        console.log('ngZone',ngZone);
    }

    ngOnInit() {
        this.subscription = showFrameworkObservable.subscribe(showFramework => {
            this.ngZone.run(() => {
                this.border = showFramework ? getBorder('angular2') : '';
                this.showFramework = showFramework;
            });
        });
    }

    ngOnDestroy() {
        console.log('Destroy');
        this.subscription.dispose();
    }

}
