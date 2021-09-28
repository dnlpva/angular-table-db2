import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { database } from 'firebase';
import { Subject } from 'rxjs';
import { TestData } from './test-table/test-table-datasource';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  dbRef: database.Reference;
  eventStream$: Subject<TestData>;

  constructor(private db: AngularFireDatabase) { 
    this.dbRef = this.db.database.ref('test');
    this.eventStream$ = new Subject();

    this.dbRef
      .orderByChild('timestamp')
      .startAt((new Date()).valueOf() / 1000)
      .on('child_added', data => this.childAdded(data));
  }

  childAdded(data: database.DataSnapshot): void {
    this.eventStream$.next(data.val());
  }

  push(data: TestData): void {
    this.dbRef.push(data);
  }
}
