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
import { Grid } from '@mui/material';
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
const CardsTitle = () => {
  const record = useRecordContext();
  return <span>Cards {record ? `"${ record.cardName }"` : ""}</span>;
};

export const CardsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="cardName" />
<TextField source="serial" />
<TextField source="type" />
<TextField source="rarity" />
<TextField source="condition" />
<ImageField source="imageUrl" />
<ReferenceField source="set" reference="Sets"  /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const CardsEdit = () => (
                    <Edit title={<CardsTitle />}>
                      <SimpleForm>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                          <Grid item xs={4}>
<TextInput source="cardName"   /></Grid>
<Grid item xs={4}>
<TextInput source="serial"   /></Grid>
<Grid item xs={4}>
<TextInput source="type"   /></Grid>
<Grid item xs={4}>
<TextInput source="rarity"   /></Grid>
<Grid item xs={4}>
<TextInput source="condition"   /></Grid>
<Grid item xs={4}>
<ImageInput source="imageUrl"   /></Grid>
<Grid item xs={4}>
<ReferenceInput source="set"  reference="Sets"   /></Grid>
                        </Grid>
                      </SimpleForm>
                    </Edit>
                  );

export const CardsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                                        <Grid item xs={4}>
<TextInput source="cardName"   /></Grid>
<Grid item xs={4}>
<TextInput source="serial"   /></Grid>
<Grid item xs={4}>
<TextInput source="type"   /></Grid>
<Grid item xs={4}>
<TextInput source="rarity"   /></Grid>
<Grid item xs={4}>
<TextInput source="condition"   /></Grid>
<Grid item xs={4}>
<ImageInput source="imageUrl"   /></Grid>
<Grid item xs={4}>
<ReferenceInput source="set"  reference="Sets"   /></Grid>
                                      </Grid>
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
<ReferenceInput source="set" label="set" reference="Sets"   alwaysOn/>,

    ];


