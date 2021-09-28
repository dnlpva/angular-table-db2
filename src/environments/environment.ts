import { EnvironmentInterface } from './environment-interface';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment: EnvironmentInterface = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAMPg_HREyjt6Lj7NmZ8NqaXnzu6BT6k70",
    authDomain: "test-3e0be.firebaseapp.com",
    databaseURL: "https://test-3e0be-default-rtdb.firebaseio.com",
    projectId: "test-3e0be",
    storageBucket: "test-3e0be.appspot.com",
    messagingSenderId: "229775805938",
    appId: "1:229775805938:web:824645fe32238411bf2f6b",
    measurementId: "G-78NW905SEG"
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
