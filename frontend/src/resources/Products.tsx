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
const ProductsTitle = () => {
  const record = useRecordContext();
  return <span>Products {record ? `"${ record.productId }"` : ""}</span>;
};

export const ProductsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="productId" />
<ReferenceField source="vendorId" reference="Vendors"  />
<TextField source="name" />
<NumberField source="price" />
<NumberField source="weight" />

<ImageField source="thumbnail" />
<ImageField source="image" />
<ReferenceField source="category" reference="ProductCategories"  />
<DateField source="createDate" />
<NumberField source="stock" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const ProductsEdit = () => (
                    <Edit title={<ProductsTitle />}>
                      <SimpleForm>
                          <TextInput source="productId"   />
<ReferenceInput source="vendorId"  reference="Vendors"   />
<TextInput source="name"   />
<NumberInput source="price"   />
<NumberInput source="weight"   />
<TextInput source="description"   />
<ImageInput source="thumbnail"   />
<ImageInput source="image"   />
<ReferenceInput source="category"  reference="ProductCategories"   />
<DateInput source="createDate"   />
<NumberInput source="stock"   />
                      </SimpleForm>
                    </Edit>
                  );

export const ProductsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="productId"   />
<ReferenceInput source="vendorId"  reference="Vendors"   />
<TextInput source="name"   />
<NumberInput source="price"   />
<NumberInput source="weight"   />
<TextInput source="description"   />
<ImageInput source="thumbnail"   />
<ImageInput source="image"   />
<ReferenceInput source="category"  reference="ProductCategories"   />
<DateInput source="createDate"   />
<NumberInput source="stock"   />
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
<ReferenceInput source="vendorId" label="vendorId" reference="Vendors"   alwaysOn/>,
,
,
,
,
,
,
<ReferenceInput source="category" label="category" reference="ProductCategories"   alwaysOn/>,
,
,

    ];


