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
const booksTitle = () => {
  const record = useRecordContext();
  return <span>books {record ? `"${ record.title }"` : ""}</span>;
};

export const booksList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="title" />
<TextField source="author" />
<TextField source="genre" />
<TextField source="bookCover" />
<NumberField source="id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const booksEdit = () => (
                    <Edit title={<booksTitle />}>
                      <SimpleForm>
                          <TextInput source="title"   />
<TextInput source="author"   />
<TextInput source="genre"   />
<TextInput source="bookCover"   />
<NumberInput source="id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const booksCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="title"   />
<TextInput source="author"   />
<TextInput source="genre"   />
<TextInput source="bookCover"   />
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

    ];


