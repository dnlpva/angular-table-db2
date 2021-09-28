import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { database } from 'firebase';
import { TestData, TestTableDataSource } from './test-table-datasource';

@Component({
  selector: 'app-test-table',
  templateUrl: './test-table.component.html',
  styleUrls: ['./test-table.component.css']
})
export class TestTableComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TestData>;
  dataSource: TestTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['timestamp', 'operation'];

  dbRef: database.Reference;
  query: database.Query;

  constructor(private db: AngularFireDatabase) {
    this.dataSource = new TestTableDataSource();
    this.dbRef = this.db.database.ref('test');
  }

  ngOnInit(): void {
    this.query = this.dbRef
      .orderByChild('timestamp')
      .startAt((new Date()).valueOf()); 

    this.query.on('child_added', data => this.dataSource.dataAdded(data.val()));
  }

  ngOnDestroy(): void {
    this.query.off();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  pushData(): void {
    this.dbRef.push({
      timestamp: (new Date()).valueOf(),
      operation: 'test'
    });
  }

}
