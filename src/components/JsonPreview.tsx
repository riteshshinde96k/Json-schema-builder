import React from 'react';
// FIX: Make sure the import path matches your file structure
import type { FormValues, SchemaField } from '../types/schema';

const transformToJSON = (fields: FormValues['fields']) => {
  const schema: { [key: string]: any } = {};

  fields.forEach((field: SchemaField) => {
    if (!field.keyName) return;

    // The logic is updated here to match the screenshot's output
    switch (field.type) {
      case 'String':
        // FIX: Display "STRING" in all caps as per the image
        schema[field.keyName] = 'STRING';
        break;
      case 'Number':
        // FIX: Display "number" as a string instead of the number 0
        schema[field.keyName] = 'number';
        break;
      case 'Boolean':
        // FIX: Display "boolean" as a string instead of false
        schema[field.keyName] = 'boolean';
        break;
      case 'Float':
        // FIX: Display "float" as a string instead of 0.0
        schema[field.keyName] = 'float';
        break;
      case 'ObjectId':
        // FIX: Display "ObjectId" as a string
        schema[field.keyName] = 'ObjectId';
        break;
      case 'Date':
        // FIX: Display "date" as a string
        schema[field.keyName] = 'date';
        break;
      case 'Enum':
        // FIX: Display "enum" as a string
        schema[field.keyName] = 'enum';
        break;
      case 'Array':
        // FIX: Display "array" as a string
        schema[field.keyName] = 'array';
        break;
      case 'Nested':
        // This logic remains the same, as it correctly handles nested objects
        schema[field.keyName] = field.children ? transformToJSON(field.children) : {};
        break;
      default:
        break;
    }
  });
  return schema;
};

export const JsonPreview = ({ data }: { data: FormValues['fields'] }) => {
  const finalSchema = transformToJSON(data);

  return (
    <pre>
      {JSON.stringify(finalSchema, null, 2)}
    </pre>
  );
};
