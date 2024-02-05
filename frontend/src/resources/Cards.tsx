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
  //EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  //UrlInput,
} from "react-admin";
import { useRecordContext } from "react-admin";
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
  return <span>Cards {record ? `"${ record.cardID }"` : ""}</span>;
};

export const CardsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="cardID" />
<TextField source="setID" />
<TextField source="cardName" />
<TextField source="serial" />
<TextField source="type" />
<TextField source="rarity" />
<TextField source="condition" />
<TextField source="imageURL" />
<NumberField source="id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const CardsEdit = () => (
                    <Edit title={<CardsTitle />}>
                      <SimpleForm>
                          <TextInput source="cardID"   />
<TextInput source="setID"   />
<TextInput source="cardName"   />
<TextInput source="serial"   />
<TextInput source="type"   />
<TextInput source="rarity"   />
<TextInput source="condition"   />
<TextInput source="imageURL"   />
<NumberInput source="id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const CardsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="cardID"   />
<TextInput source="setID"   />
<TextInput source="cardName"   />
<TextInput source="serial"   />
<TextInput source="type"   />
<TextInput source="rarity"   />
<TextInput source="condition"   />
<TextInput source="imageURL"   />
<NumberInput source="id"   disabled/>
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

    ];


