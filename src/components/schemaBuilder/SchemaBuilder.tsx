import React from 'react';
import { useForm } from 'react-hook-form';
import { Row, Col } from 'antd';
// FIX: Go UP one level to find these components
import { FieldArray } from '../FieldArrayComponent';
import { JsonPreview } from '../JsonPreview';
// FIX: Go UP two levels to find the types folder
import type { FormValues } from '../../types/schema';
// FIX: This path is now correct because the CSS is in the same folder
import './schemaBuilder.css';

export const SchemaBuilder = () => {
  const { control, watch } = useForm<FormValues>({
    defaultValues: {
      fields: [],
    },
  });

  const formValues = watch();

  return (
    <Row gutter={32}>
      <Col span={14}>
        <form>
          <FieldArray nestIndex="fields" control={control} />
        </form>
      </Col>
      <Col span={10}>
        <JsonPreview data={formValues.fields} />
      </Col>
    </Row>
  );
};

