import type * as CSS from 'csstype';

// Check https://github.com/frenic/csstype#what-should-i-do-when-i-get-type-errors
// Overidding type definition to allow custom css variables in jsx style={{}}
declare module 'csstype' {
  interface Properties extends CSS.Properties {
    '--card-title'?: string;
  }
}
