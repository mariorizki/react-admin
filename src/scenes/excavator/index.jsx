import { Box, Button } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { mockDataExcavators } from '../../data/mockData';
import Header from '../../components/Header';
import { useTheme } from '@mui/material';

const Excavator = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.2 },
    { field: 'date', headerName: 'Tanggal' },
    { field: 'name', headerName: 'Unit' },
    {
      field: 'operator',
      headerName: 'Operator',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'task',
      headerName: 'Jenis Kegiatan',
      flex: 1,
    },
    {
      field: 'kmhmStart',
      headerName: 'KM/HM Awal',
      flex: 0.5,
    },
    {
      field: 'kmhmFinish',
      headerName: 'KM/HM Akhir',
      flex: 0.5,
    },
    {
      field: 'hmkmTotal',
      headerName: 'HM/KM Total',
      valueGetter: function ab(params) {
        return params.row.kmhmFinish - params.row.kmhmStart;
      },
      flex: 0.5,
    },
    {
      field: 'shi',
      headerName: 'SHI Total',
      flex: 0.5,
    },
    {
      field: 'hiPoint',
      headerName: 'Jalur/Titik HI',
      flex: 0.5,
    },
    {
      field: 'shiPoint',
      headerName: 'Jalur/Titik SHI',
      flex: 0.5,
    },
    {
      field: 'solarLtr',
      headerName: 'Solar (Ltr)',
      flex: 0.5,
    },
    {
      field: 'solarShi',
      headerName: 'Solar SHI',
      flex: 0.5,
    },
    {
      field: 'notes',
      headerName: 'Keterangan',
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="EXCAVATOR CARD"
        subtitle="Recap for Excavator Usage Card"
      />
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
          rows={mockDataExcavators}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Excavator;
