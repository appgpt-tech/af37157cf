import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  UrlInput,
  PasswordInput
} from "react-admin";
import { useRecordContext } from "react-admin";
const ReadOnlyPasswordField = ({ record, source }) => {

  // You can customize the way you display the password here, e.g., mask it with asterisks
  const maskedPassword =  '********';

  return (
      <span>{maskedPassword}</span>
  );
};
const ListActions = () => (
    <TopToolbar>
        <FilterButton />
        <CreateButton />
        <ExportButton />
        <SelectColumnsButton />
    </TopToolbar>
);
const NutritionTitle = () => {
  const record = useRecordContext();
  return <span>Nutrition {record ? `"${ record.mealId }"` : ""}</span>;
};

export const NutritionList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="mealId" />
<ReferenceField source="customerId" reference="Customers"  />
<TextField source="foodItem" />
<NumberField source="quantity" />
<NumberField source="calories" />

<DateField source="date" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const NutritionEdit = () => (
                    <Edit title={<NutritionTitle />}>
                      <SimpleForm>
                          <TextInput source="mealId"   />
<ReferenceInput source="customerId"  reference="Customers"   />
<TextInput source="foodItem"   />
<NumberInput source="quantity"   />
<NumberInput source="calories"   />
<TextInput source="macronutrients"   />
<DateInput source="date"   />
                      </SimpleForm>
                    </Edit>
                  );

export const NutritionCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="mealId"   />
<ReferenceInput source="customerId"  reference="Customers"   />
<TextInput source="foodItem"   />
<NumberInput source="quantity"   />
<NumberInput source="calories"   />
<TextInput source="macronutrients"   />
<DateInput source="date"   />
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
<ReferenceInput source="customerId" label="customerId" reference="Customers"   alwaysOn/>,
,
,
,
,
,

    ];


