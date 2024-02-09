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
const CustomersTitle = () => {
  const record = useRecordContext();
  return <span>Customers {record ? `"${ record.customerId }"` : ""}</span>;
};

export const CustomersList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="customerId" />
<EmailField source="email" />
<ReadOnlyPasswordField source="password" />
<TextField source="name" />


<TextField source="country" />
<TextField source="phone" />
<TextField source="cartId" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const CustomersEdit = () => (
                    <Edit title={<CustomersTitle />}>
                      <SimpleForm>
                          <TextInput source="customerId"   />
<TextInput source="email"   />
<PasswordInput source="password"   />
<TextInput source="name"   />
<TextInput source="billingAddress"   />
<TextInput source="defaultShippingAddress"   />
<TextInput source="country"   />
<TextInput source="phone"   />
<TextInput source="cartId"   />
                      </SimpleForm>
                    </Edit>
                  );

export const CustomersCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="customerId"   />
<TextInput source="email"   />
<PasswordInput source="password"   />
<TextInput source="name"   />
<TextInput source="billingAddress"   />
<TextInput source="defaultShippingAddress"   />
<TextInput source="country"   />
<TextInput source="phone"   />
<TextInput source="cartId"   />
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
,
,
,
,
,
,
,
,

    ];


