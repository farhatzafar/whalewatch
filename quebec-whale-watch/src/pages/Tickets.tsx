import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box, Typography, Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper, Grid } from '@mui/material';

export default function ResponsiveDatePickers() {
  // Ticket price data
  const ticketPrices = [
    { category: 'Children (Under 10)', price: '$25' },
    { category: 'Adults (Over 18)', price: '$50' },
    { category: 'Seniors (Over 65)', price: '$40' },
  ];

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* Main Container */}
      <Box sx={{ padding: 3 }}>
        {/* Grid layout: Left side for table, Right side for text and date picker */}
        <Grid container spacing={4} justifyContent="center">
          {/* Left Column: Ticket Price Table */}
          <Grid item xs={12} sm={6} md={4}>
            {/* Title and Table container */}
            <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
              <Typography variant="h6" 
              sx={{
                 marginBottom: 1,
                fontWeight: 'bold',
                marginTop: '20px'
                 }}>
                Ticket Prices
              </Typography>
              <TableContainer
                component={Paper}
                sx={{
                  maxWidth: 400,
                  margin: '0 auto',
                  border: '2px solid #1976d2', // Blue border for the table
                  borderRadius: '8px', // Rounded corners
                }}
              >
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell><strong>Category</strong></TableCell>
                      <TableCell><strong>Price</strong></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {ticketPrices.map((ticket) => (
                      <TableRow key={ticket.category}>
                        <TableCell>{ticket.category}</TableCell>
                        <TableCell>{ticket.price}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Grid>

          {/* Right Column: Text and DatePicker */}
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="h5" sx={{ marginBottom: 2 }}>
              All whale watching cruises leave at 10AM daily. Please select the date for which you would like to purchase tickets.
            </Typography>

            <DemoContainer
              components={[
                'DatePicker',
                'MobileDatePicker',
                'DesktopDatePicker',
                'StaticDatePicker',
              ]}
            >
              <DemoItem label="Select a date">
                <DatePicker defaultValue={dayjs('2022-04-17')} />
              </DemoItem>
            </DemoContainer>
          </Grid>
        </Grid>
      </Box>
    </LocalizationProvider>
  );
}
