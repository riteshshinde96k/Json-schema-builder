// This file is the single source of truth for your types.
// Make sure it exports both interfaces.
export interface SchemaField {
  keyName: string;
  type:
    | 'String'
    | 'Number'
    | 'Nested'
    | 'Boolean'
    | 'Float'
    | 'ObjectId'
    | 'Date'
    | 'Array'
    | 'Enum';
  children?: SchemaField[];
}



export type FormValues = {
  fields: SchemaField[];
};








