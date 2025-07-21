import React from 'react';
import { useFieldArray, Controller, useWatch, Control, Path, FieldArrayPath } from 'react-hook-form';
import { Input, Select, Button, Space, Switch } from 'antd';
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
// FIX: Import types from the correct folder ../types/
import type { FormValues } from '../types/schema';

// ... (rest of the component code remains the same)
interface FieldRowProps {
  nestIndex: string;
  index: number;
  control: Control<FormValues>;
  remove: (index: number) => void;
}

const FieldRow = ({ nestIndex, index, control, remove }: FieldRowProps) => {
  const fieldType = useWatch({
    control,
    name: `${nestIndex}.${index}.type` as Path<FormValues>,
  });

  return (
    <div className="field-row">
      <Space align="start" size="middle">
        <Controller
          control={control}
          name={`${nestIndex}.${index}.keyName` as Path<FormValues>}
          render={({ field }) => (
            <Input
              placeholder="Field Name"
              value={field.value as string}
              onChange={field.onChange}
              onBlur={field.onBlur}
            />
          )}
        />
        <Controller
          control={control}
          name={`${nestIndex}.${index}.type` as Path<FormValues>}
          render={({ field }) => (
           <Select {...field} style={{ width: 150 }} placeholder="Field Type">
  <Select.Option value="String">String</Select.Option>
  <Select.Option value="Number">Number</Select.Option>
  <Select.Option value="Nested">Nested</Select.Option>
  <Select.Option value="Boolean">Boolean</Select.Option>
  <Select.Option value="Float">Float</Select.Option>
  <Select.Option value="ObjectId">ObjectId</Select.Option>
  <Select.Option value="Date">Date</Select.Option>
  <Select.Option value="Array">Array</Select.Option>
  <Select.Option value="Enum">Enum</Select.Option>
</Select>
  
)}
        />
        <Switch />
        <Button
          type="text"
          danger
          icon={<CloseOutlined />}
          onClick={() => remove(index)}
        />
      </Space>

      {fieldType === 'Nested' && (
        <div className="nested-fields">
          <FieldArray
            nestIndex={`${nestIndex}.${index}.children`}
            control={control}
          />
        </div>
      )}
    </div>
  );
};

interface FieldArrayProps {
  nestIndex: string;
  control: Control<FormValues>;
}

export const FieldArray = ({ nestIndex, control }: FieldArrayProps) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: nestIndex as FieldArrayPath<FormValues>,
  });

  return (
    <div>
      {fields.map((item, index) => (
        <FieldRow key={(item as any).id} {...{ nestIndex, index, control, remove }} />
      ))}
      <Button
        type="primary"
        onClick={() => append({ keyName: '', type: 'String', children: [] })}
        icon={<PlusOutlined />}
        className="add-item-button"
      >
        Add Item
      </Button>
    </div>
  );
};

