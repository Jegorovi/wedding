import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import 'antd/dist/antd.css';
import { App } from "./components/app/App";
import * as serviceWorker from "./serviceWorker";

/* eslint-disable no-useless-escape */
console.log("%c LIVE LONG AND PROSPER! 🖖", "color: #f36b6b; font-weight: bold;")
console.log(`
                                      _
                               mMm  _[_]_
                              /(_)\\  (_)
                             //)^(\\\\\//:\\\\
                            /(/&@&\\)\\|~|/
                           / /-~\`~-\\ |||
                           \`/       \\|||
                            \`-------'-'--
                     ()@()@()@()@()@()@()@()@()@()
                      }                         {
                      }         S A R A         {
                      }            &            {
                      }       R O L A N D       {
                      }                         {
               ()@()@()@()@()@()@()@()@()@()@()@()@()@()
                }         _  _           _  _         {
                }        ( \\/ )         ( \\/ )        {
                }         \\  /           \\  /         {
                }          \\/             \\/          {
                }                                     {
         ()@()@()@()@()@()@()@()@()@()@()@()@()@()@()@()@()@()
          }                                                 {
          }                                                 {
          }                                                 {
          }                                                 {
          }                                                 {
          }                                                 {
   ()@()@()@()@()@()@()@()@()@()@()@()@()@()@()@()@()@()@()@()@()@()
    }                                                             {
    }                                                             {
    }                                                             {
    }                                                             {
    }                                                             {
    }                                                             {
   ()@()@()@()@()@()@()@()@()@()@()@()@()@()@()@()@()@()@()@()@()@()
`);
/* eslint-enable no-useless-escape */

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
