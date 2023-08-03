import { Box, Button } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { mockDataRepairment } from '../../data/mockData';
import Header from '../../components/Header';
import { useTheme } from '@mui/material';

const Excavator = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'date', headerName: 'Tanggal' },
    {
      field: 'description',
      headerName: 'Keterangan',
      flex: 1,
    },
    {
      field: 'nominal',
      headerName: 'Nominal',
    },
    {
      field: 'unit',
      headerName: 'Unit',
    },
  ];

  return (
    <Box m="20px">
      <Header title="Repairment" subtitle="Data of excavator repairment" />
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
          rows={mockDataRepairment}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Excavator;
