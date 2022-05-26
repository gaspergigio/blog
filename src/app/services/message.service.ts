import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

/**
 * This service allows us to send messages between components of the same level or messages between very distant elements in the same hierarchy.
 */

export type messageAction = 'changeLang';

@Injectable({
    providedIn: 'root',
})
export class MessageService {
    private subject = new Subject<any>();
    constructor() {}

    sendMessage(type: messageAction, payload: any = null) {
        this.subject.next({
            type,
            payload,
        });
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}
