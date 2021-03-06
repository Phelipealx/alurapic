import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { Subject } from "rxjs";
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy {

    @Output() onTyping = new EventEmitter<string>();
    @Input() filter: string = '';
    debounce: Subject<string> = new Subject<string>();

    ngOnInit(): void {
        this.debounce
            .pipe(debounceTime(500))
            .subscribe(response => this.onTyping.emit(response));
    }

    ngOnDestroy(): void {
        this.debounce.unsubscribe();
    }

}