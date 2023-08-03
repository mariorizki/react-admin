import { Box, Button } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { mockDataExpenditure } from '../../data/mockData';
import Header from '../../components/Header';
import { useTheme } from '@mui/material';

const Expenditure = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'date', headerName: 'Tanggal' },
    {
      field: 'name',
      headerName: 'Uraian',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'nominal',
      headerName: 'Nominal',
    },
    {
      field: 'ket',
      headerName: 'Keterangan',
    },
  ];

  return (
    <Box m="20px">
      <Header title="Expenditure" subtitle="List of Expenditure" />
      <Button variant="contained" color="error">
        ADD NEW DATA
      </Button>
      <Box
        m="20px 0 0 0"
        height="75vh"
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
          },
          '& .name-column--cell': {
            color: colors.greenAccent[300],
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: colors.blueAccent[700],
            borderBottom: 'none',
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: colors.primary[400],
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: colors.blueAccent[700],
          },
          '& .MuiCheckbox-root': {
            color: `${colors.greenAccent[200]} !important`,
          },
          '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataExpenditure}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Expenditure;
